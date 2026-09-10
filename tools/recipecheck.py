"""Check content/recipes/*.js against docs/recipe-format.md.

    python tools/recipecheck.py            # every region
    python tools/recipecheck.py IT-62      # one

Like tastingcheck.py, the content is parsed by Node with a fake `window` and validated in Python,
and italia-course.html stays the source of truth for what dishes and wines exist.
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UNITS = {'', 'g', 'kg', 'ml', 'l'}
COURSES = {'antipasto', 'primo', 'secondo', 'contorno', 'dolce', 'base'}
SCALES = {'lin', 'none', 'sub'}
# always wrong, whatever precedes them
BAD_MEASURE = re.compile(r'\b(tbsp|tsp|tablespoons?|teaspoons?|oz|lbs?|spiseskje\w*|teskje\w*|desiliter)\b', re.I)
# wrong only when they are a measure: "pound the basil" and "serve in a cup" are ordinary English,
# "2 cups" and "1 dl" are not. The word-list version rejected Liguria's mortar step.
BAD_AMOUNT = re.compile(r'\b\d+(?:[.,/]\d+)?\s*(cups?|pounds?|ounces?|ss|ts|dl)\b', re.I)
QTY_IN_STEP = re.compile(r'\b\d+(?:[.,]\d+)?\s?(?:g|kg|ml|l)\b')
TEXT = ('title', 'blurb', 'heroCaption')


def load():
    files = sorted(f for f in os.listdir(os.path.join(ROOT, 'content', 'recipes')) if f.endswith('.js'))
    src = 'global.window = {};\n' + '\n'.join(
        "require('./content/recipes/%s');" % f for f in files) + "\nconsole.log(JSON.stringify(window.RECIPES || {}));"
    r = subprocess.run(['node', '-e', src], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED\n' + (r.stderr or '')[-800:]); sys.exit(1)
    return json.loads(r.stdout)


def app_facts():
    src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    order = [c.strip().strip("'") for c in re.findall(r'const ORDER = \[(.*?)\]', src, re.S)[0].split(',')]
    dirs = dict(re.findall(r"'(IT-\d+)':'([a-z]+)'", re.findall(r'const ASSET_DIRS = \{(.*?)\}', src, re.S)[0]))
    dishes, wines = {}, {}
    for m in re.finditer(r"'(IT-\d+)':\{name:", src):
        code = m.group(1)
        chunk = src[m.start():src.index('lessons:[', m.start())]
        d = re.search(r"dishes:\[(.*?)\]", chunk, re.S)
        dishes[code] = [x.replace("\\'", "'") for x in re.findall(r"'((?:[^'\\]|\\.)*)'", d.group(1))] if d else []
        w = re.search(r"wines:\[(.*?)\], pairing:", chunk, re.S)
        wines[code] = [x.replace("\\'", "'") for x in re.findall(r"\['((?:[^'\\]|\\.)*)'", w.group(1))] if w else []
    return order, dirs, dishes, wines


def both(v, where, problems, name):
    if not isinstance(v, dict) or not str(v.get('en', '')).strip() or not str(v.get('no', '')).strip():
        problems.append('%s: %s is missing English or Norwegian' % (where, name))
        return False
    return True


def main():
    only = [a for a in sys.argv[1:] if a.startswith('IT-')]
    data = load()
    order, dirs, dishes, wines = app_facts()
    problems, seen, total = [], {}, 0

    for code, rs in sorted(data.items()):
        if code not in order:
            problems.append('%s: not a region in ORDER' % code); continue
        adir = dirs.get(code, '')
        if only and code not in only: continue
        for r in rs:
            total += 1
            rid = r.get('id', '?')
            where = '%s/%s' % (code, rid)
            if not re.fullmatch(r'[a-z0-9-]+', str(rid)):
                problems.append('%s: id must be kebab-case' % where)
            if rid in seen:
                problems.append('%s: duplicate id, also in %s' % (where, seen[rid]))
            seen[rid] = code

            for k in TEXT:
                if k == 'heroCaption' and 'heroCaption' not in r: continue
                both(r.get(k), where, problems, k)
            if r.get('course') not in COURSES:
                problems.append('%s: course %r is not one of %s' % (where, r.get('course'), sorted(COURSES)))
            if not isinstance(r.get('lesson'), int) or not 0 <= r['lesson'] <= 4:
                problems.append('%s: lesson must be 0-4' % where)
            if not isinstance(r.get('serves'), int) or not 1 <= r['serves'] <= 12:
                problems.append('%s: serves must be 1-12' % where)
            t = r.get('time') or {}
            if not isinstance(t.get('prep'), int) or not isinstance(t.get('cook'), int):
                problems.append('%s: time needs whole minutes for prep and cook' % where)

            if r.get('dish') and r['dish'] not in dishes.get(code, []):
                problems.append('%s: dish %r is not in COURSE[%s].dishes' % (where, r['dish'], code))
            for w in r.get('wines') or []:
                if w not in wines.get(code, []):
                    problems.append('%s: wine %r is not in COURSE[%s].wines' % (where, w, code))

            hero = os.path.join(ROOT, 'assets', adir, str(r.get('hero')) + '.jpg')
            if not os.path.exists(hero):
                problems.append('%s: hero photo assets/%s/%s.jpg is missing' % (where, adir, r.get('hero')))
            else:
                credits = open(os.path.join(ROOT, 'content', '%s.js' % adir), encoding='utf-8').read()
                if '"%s":' % r.get('hero') not in credits and "'%s':" % r.get('hero') not in credits:
                    problems.append('%s: hero %r is not credited in content/%s.js' % (where, r.get('hero'), adir))

            groups = r.get('ingredients') or []
            if not groups:
                problems.append('%s: no ingredients' % where)
            for g in groups:
                for it in g.get('items') or []:
                    nm = (it.get('n') or {}).get('en', '?')
                    both(it.get('n'), where, problems, 'ingredient %r' % nm)
                    if it.get('note') is not None:
                        both(it.get('note'), where, problems, 'note on %r' % nm)
                    if it.get('u') not in UNITS:
                        problems.append('%s: unit %r on %r is not allowed' % (where, it.get('u'), nm))
                    if 'q' in it and not isinstance(it['q'], (int, float)):
                        problems.append('%s: quantity on %r is not a number' % (where, nm))
                    if it.get('scale') and it['scale'] not in SCALES:
                        problems.append('%s: scale %r on %r is not allowed' % (where, it['scale'], nm))
                    if it.get('round') not in (None, 'half'):
                        problems.append('%s: round %r on %r is not allowed' % (where, it['round'], nm))

            steps = r.get('steps') or []
            if not 4 <= len(steps) <= 14:
                problems.append('%s: %d steps, want 4-14' % (where, len(steps)))
            for n, st in enumerate(steps, 1):
                if not both(st, where, problems, 'step %d' % n): continue
                for lg in ('en', 'no'):
                    m = BAD_MEASURE.search(st[lg]) or BAD_AMOUNT.search(st[lg])
                    if m:
                        problems.append('%s: step %d (%s) uses a cup/spoon measure: %r' % (where, n, lg, m.group(0)))
                    if QTY_IN_STEP.search(st[lg]):
                        problems.append('%s: step %d (%s) repeats a quantity the stepper rescales' % (where, n, lg))
            for key in ('notes', 'variations'):
                for n, x in enumerate(r.get(key) or [], 1):
                    both(x.get('title'), where, problems, '%s %d title' % (key, n))
                    both(x.get('body'), where, problems, '%s %d body' % (key, n))
            if r.get('headnote') is not None:
                both(r.get('headnote'), where, problems, 'headnote')

    print('%d recipes in %d region(s)' % (total, len(data)))
    if problems:
        for p in problems[:60]: print('  ' + p)
        if len(problems) > 60: print('  … and %d more' % (len(problems) - 60))
        print('%d problem(s)' % len(problems)); sys.exit(1)
    print('OK')


if __name__ == '__main__':
    main()
