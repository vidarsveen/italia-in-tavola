"""What is left to write for the recipe collection.

    python tools/recipegap.py             # every region, one block each
    python tools/recipegap.py IT-72       # one region, in full

For each region it prints the dish chips from COURSE that have no recipe yet, the dishes the food
reading names in bold (candidates where the chips are thin), and which photos are already on disk,
so a brief can be written without opening four files. Nothing is judged cookable automatically —
Parmigiano and San Daniele are chips too — so read the list before using it.
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def app_facts():
    src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    i = src.index('const COURSE = {')
    node = ("const s = require('fs').readFileSync(%s,'utf8');"
            "const i = s.indexOf('const COURSE = {');"
            "const COURSE = eval('(' + s.slice(s.indexOf('{', i), s.indexOf('\\n};', i) + 2) + ')');"
            "const j = s.indexOf('const ORDER = [');"
            "const ORDER = eval(s.slice(s.indexOf('[', j), s.indexOf(']', j) + 1));"
            "const k = s.indexOf('const ASSET_DIRS = {');"
            "const ASSET_DIRS = eval('(' + s.slice(s.indexOf('{', k), s.indexOf('};', k) + 1) + ')');"
            "console.log(JSON.stringify({COURSE, ORDER, ASSET_DIRS}));"
            % json.dumps(os.path.join(ROOT, 'italia-course.html')))
    r = subprocess.run(['node', '-e', node], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED\n' + (r.stderr or '')[-600:]); sys.exit(1)
    return json.loads(r.stdout)


def recipes():
    d = os.path.join(ROOT, 'content', 'recipes')
    if not os.path.isdir(d): return {}
    files = sorted(f for f in os.listdir(d) if f.endswith('.js'))
    if not files: return {}
    src = 'global.window = {};\n' + '\n'.join("require('./content/recipes/%s');" % f for f in files) \
        + "\nconsole.log(JSON.stringify(window.RECIPES || {}));"
    r = subprocess.run(['node', '-e', src], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED\n' + (r.stderr or '')[-600:]); sys.exit(1)
    return json.loads(r.stdout)


def food_lesson(stem):
    """The dishes named in bold in the region's food reading, plus its index."""
    p = os.path.join(ROOT, 'content', '%s.js' % stem)
    if not os.path.exists(p): return None, []
    src = open(p, encoding='utf-8').read()
    lessons = re.split(r'\n  \{\n    title:', src)[1:]
    for n, L in enumerate(lessons, 1):
        if re.search(r'kicker:\s*["\']Food', L):
            names = re.findall(r'<strong>([^<]{3,40})</strong>', L) + re.findall(r'<h2>([^<]{3,40})</h2>', L)
            seen, out = set(), []
            for x in names:
                x = re.sub(r'\s+', ' ', x).strip(' .,:')
                k = x.lower()
                if k not in seen:
                    seen.add(k); out.append(x)
            return n, out
    return None, []


PREPS = {'di', 'de', 'del', 'della', 'alle', 'alla', 'all', 'al', 'con', 'in', 'e', 'of', 'the', 'and'}


def _named(dish, prose_lower):
    """Is this dish talked about in the readings, under any of the words in its name?

    Only the head of the name counts, plus any capitalised word: an Italian dish name is
    "<dish> alla <demonym>" with the demonym in lower case, and matching on that alone made
    Saltimbocca alla romana look covered because the readings discuss abbacchio alla romana.
    Place names stay capitalised, so Lardo di Arnad is still found through Arnad. A token also
    counts when it merely contains a word the prose uses, which is what finds strudel inside
    Apfelstrudel.
    """
    words = re.split(r"[^A-Za-zÀ-ÿ']+", dish)
    head, seen_prep = [], False
    for w in words:
        if w.lower().rstrip("'") in PREPS:
            seen_prep = True
            continue
        if not seen_prep or w[:1].isupper():
            head.append(w)
    toks = [t.lower() for t in head if len(t) >= 4]
    for t in toks:
        if t in prose_lower:
            return True
        for k in range(1, len(t) - 5):              # strudel inside apfelstrudel
            if t[k:] in prose_lower:
                return True
    return not toks


def main():
    only = [a for a in sys.argv[1:] if a.startswith('IT-')]
    f = app_facts()
    have = recipes()
    todo_total = 0
    for code in f['ORDER']:
        if only and code not in only: continue
        C = f['COURSE'][code]
        stem = f['ASSET_DIRS'].get(code, '')
        written = {r.get('dish') for r in have.get(code, [])} - {''}
        ids = [r['id'] for r in have.get(code, [])]
        todo = [d for d in C.get('dishes', []) if d not in written]
        todo_total += len(todo)
        adir = os.path.join(ROOT, 'assets', stem)
        photos = sorted(x[:-4] for x in os.listdir(adir) if x.lower().endswith('.jpg')) if os.path.isdir(adir) else []
        photos = [x for x in photos if x and not x.startswith('credits')]
        n, bold = food_lesson(stem)
        # a chip the readings never describe: the sheet promises a dish the course does not teach.
        # Saltimbocca alla romana (Lazio) and Torta al testo (Umbria) were both found this way.
        prose = ''
        for suffix in ('.js', '.no.js'):
            fp = os.path.join(ROOT, 'content', stem + suffix)
            if os.path.exists(fp):
                body = open(fp, encoding='utf-8').read()
                prose += body[body.index('lessons:'):] if 'lessons:' in body else body
        low = prose.lower()
        orphan = [d for d in C.get('dishes', []) if not _named(d, low)]

        print('=' * 78)
        print('%s  (%s, content/%s.js, food reading = lesson %s)' % (C['name'], code, stem, n or '?'))
        print('  written  : %s' % (', '.join(ids) or '-'))
        print('  chips todo (%d): %s' % (len(todo), ', '.join(todo) or '-'))
        if bold:
            extra = [x for x in bold if x not in C.get('dishes', []) and x not in written]
            print('  also named in the reading: %s' % ', '.join(extra[:18]))
        if orphan:
            print('  ON THE SHEET BUT IN NO READING: %s' % ', '.join(orphan))
        print('  photos on disk (%d): %s' % (len(photos), ', '.join(photos)))
    print('=' * 78)
    print('%d dish chips still without a recipe' % todo_total)


if __name__ == '__main__':
    main()
