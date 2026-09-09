"""Norwegian language review helper for Italia in Tavola.

Everything mechanical about reviewing a region's Norwegian edition, so that a reviewer (a person or the
/norsk-review skill) only has to judge sentences and write replacements.

  python tools/review_no.py <region> --report            side-by-side EN/NO dump + lint findings -> _review/<region>.md
  python tools/review_no.py <region> --apply patch.json  apply [{"old":..., "new":...}] exact replacements (each must
                                                          match exactly once), then run the parse and image-key checks
  python tools/review_no.py <region> --check             parse + image-key + structure checks only
  python tools/review_no.py <region> --stale             list narrations whose spoken script no longer matches the text
  python tools/review_no.py <region> --narrate           regenerate stale narrations (both languages), with a
                                                          truncation check and retry, then re-encode Opus
  python tools/review_no.py all --stale                  any command accepts "all" for every wired region

<region> is the content file stem: lazio, piemonte, toscana, veneto, campania, sicilia, lombardia, emiliaromagna, puglia.
Set PYTHONIOENCODING=utf-8 on Windows.
"""
import html as htmlmod, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
OUT = os.path.join(ROOT, '_review')

# ---------- lint rules: (regex, message). Heuristics: every hit needs a human judgement.
LINT = [
    (r'\bDet som [^.!?]{0,80}, er\b', 'cleft copied from English ("what makes it work is"): name the subject'),
    (r'(?:^|[.!?»] )Å \w+[^.!?]{0,60}\b(er|var|ble|blir)\b', 'bare-infinitive subject ("Å arbeide her er"): recast with «Den som …» or a noun'),
    (r'\w, hvis \w', '«hvis» used as a relative pronoun: use «der», «med» or «som … til»'),
    (r'\bpluss\b', '«pluss» is spoken/informal: use «samt» or «og»'),
    (r'UNESCO-listet|\bnådd via\b|\bpasset på\b', 'calque: «på verdensarvlisten» / «som nås fra»'),
    (r'\bpå tre\b(?! (måter|måneder|år|steder|nivåer))', '"in wood" mistranslated: «på fat» / «på trefat»'),
    (r'\bnesen\b', 'wine "nose": use «duften»'),
    (r'\bblomstrende\b', 'floral in wine: «blomsterpreget», not «blomstrende»'),
    (r'\brøykere\b', '"smokier": «mer røykpreget»'),
    (r'\bforsterket vin\b', 'fortified wine: «sterkvin»'),
    (r'\bforfremmet\b', 'promoted (appellation): «opphøyd til»'),
    (r'\b[a-zæøå]{4,}-(en|et|a|ene)\b', 'hyphenated definite article on a foreign noun («sfoglia-en»): write it solid («sfogliaen»)'),
    (r'\bdet (tjuende|nittende|attende|syttende|sekstende|femtende) århundre', 'centuries as «1900-tallet», never «det tjuende århundret»'),
    (r'"[^"\n]{2,}"', 'straight quotes: use « »'),
    (r'\b\d+\.\d+\b', 'decimal point: use a comma (13,5)'),
    (r'\d%', 'no space before %: write «13,5 %»'),
    (r'\b(?!1\d{3}\b|20\d{2}\b)\d{4,}\b', 'thousands need a thin space: «1 000»'),
    (r' - ', 'hyphen used as a dash: use an en dash «–» for ranges or rewrite'),
    (r'\bheller enn\b', '"rather than": «i stedet for» or «mer … enn»'),
    (r'\bikke så mye \w+ som\b', '"not so much X as Y" has no Norwegian form: rewrite'),
    (r'\ben av de \w+este \w+ å\b', '"one of the easiest wines to": rewrite («en vin det er lett å …»)'),
    (r', viktigere,', 'sentence adverb between commas: «og viktigst av alt:»'),
    (r'\b(the|and|with|of|which|from)\b', 'English word leaked into the Norwegian text'),
    (r'  +', 'double space'),
    (r' ,', 'space before comma'),
    (r'\bkunne aldri \w+en\b|\bhar aldri \w+en\b', 'adverb before the subject: «kunne vinlusen aldri»'),
    (r'\bsmaker likt\b', '«smaker likt» = taste alike; «smaker det samme» = taste the same'),
    (r'\bet halvt kokt egg\b', 'reads as half-cooked: «et halvt hardkokt egg»'),
    (r'\b(fylling|fyllet)\b(?=[^.]{0,40}pizza)', 'on a pizza it is «pålegg», not «fyll»'),
    (r'\bokse\b', '"beef" is «oksekjøtt»'),
    (r'\bstamgjestene\b', '"regulars" in the sense of connoisseurs: «kjennerne»'),
    (r'\bgjør (det|den|dem) (ikke )?\w+ere\b', 'English "makes it X-er": check the comparative has a noun'),
    (r'\b(varmere|tidligere|rikere|rundere|modnere|mørkere|lettere|større)\.(?!\.)', 'comparative ending a sentence with nothing to attach to?'),
    (r'\b(Vinteren|Sommeren|Høsten|Våren) bringer\b', '"winter brings": «Om vinteren kommer …»'),
    (r'\bbetyr noe\b', '"matters": «betyr mye» / «spiller en rolle»'),
    (r'\bskylder \w+ (et|en|ei)\b', '"owes X to": rewrite («… takket være …»)'),
    (r'\ben bruk for\b', '"a use for": «noe å bruke … til»'),
    (r'\bfor volum\b', '"for volume": «for å få mengde»'),
    (r'\b(og|,) en (\w+) en\b', '"and a good one" calque: repeat the noun («og en god sfoglina»)'),
    (r'\bi så lite som\b', '"as little as": «i bare»'),
    (r'\bsagt å være\b', '"said to be": «angivelig» / «etter sigende»'),
    (r'\bstrittende av\b', '"bristling with": «tett i tett med»'),
    (r'\bI tiår\b', '"for decades": «I flere tiår»'),
    (r'\bet (batteria|acetaia|osteria|trattoria|sfoglia)\b', 'these Italian nouns take «en» in Norwegian'),
    (r'\bbuegang\b(?!e)', '«buegang» is a count noun: «bueganger» when plural'),
]

def regions():
    src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    return [r for r in re.findall(r'<script src="content/(\w+)\.no\.js">', src) if r != 'course']

def code_of(region):
    src = open(os.path.join(ROOT, 'content', f'{region}.no.js'), encoding='utf-8').read()
    return re.search(r"READINGS_NO\['(IT-\d+)'\]", src).group(1)

def lessons(region, lang):
    from narrate import lessons_from
    f = f'{region}.js' if lang == 'en' else f'{region}.no.js'
    return lessons_from(os.path.join(ROOT, 'content', f))

def blocks(h):
    """Reading html -> ordered list of (kind, text) blocks, tags stripped."""
    out = []
    for m in re.finditer(r'<(h2|p|li|figcaption|td)\b[^>]*>(.*?)</\1>', h, flags=re.S):
        t = re.sub(r'<[^>]+>', '', m.group(2)); t = htmlmod.unescape(re.sub(r'\s+', ' ', t)).strip()
        if t: out.append((m.group(1), t))
    return out

def lint(text):
    hits = []
    for rx, msg in LINT:
        for m in re.finditer(rx, text):
            hits.append((m.start(), m.group(0), msg))
    return sorted(hits)

def captions(region, lang):
    f = f'{region}.js' if lang == 'en' else f'{region}.no.js'
    src = open(os.path.join(ROOT, 'content', f), encoding='utf-8').read()
    return [c.replace('\\"', '"') for c in re.findall(r'heroCaption:\s*"((?:[^"\\]|\\.)*)"', src)]

def report(region):
    os.makedirs(OUT, exist_ok=True)
    EN, NO = lessons(region, 'en'), lessons(region, 'no')
    for L, c in zip(EN, captions(region, 'en')): L['heroCaption'] = c
    for L, c in zip(NO, captions(region, 'no')): L['heroCaption'] = c
    lines = [f'# Norwegian review dump: {region} ({code_of(region)})', '',
             'Read each NO block against its EN neighbour. Judge whether a Norwegian writer would have produced it.',
             'Lint hits are heuristics; decide each one. Fixes go in a patch JSON for `--apply`.', '']
    nlint = 0
    for i, (e, n) in enumerate(zip(EN, NO), 1):
        lines += [f'## Lesson {i}: {n["title"]}  /  {e["title"]}', '']
        for fld in ('summary', 'heroCaption'):
            lines += [f'**{fld} EN:** {e.get(fld,"")}', f'**{fld} NO:** {n.get(fld,"")}', '']
        eb, nb = blocks(e['html']), blocks(n['html'])
        if len(eb) != len(nb):
            lines += [f'> STRUCTURE: EN has {len(eb)} blocks, NO has {len(nb)}. Alignment below may drift.', '']
        for j in range(max(len(eb), len(nb))):
            ek = eb[j] if j < len(eb) else ('', '')
            nk = nb[j] if j < len(nb) else ('', '')
            lines += [f'EN [{ek[0]}] {ek[1]}', f'NO [{nk[0]}] {nk[1]}']
            for pos, frag, msg in lint(nk[1]):
                lines.append(f'   !! «{frag}» — {msg}'); nlint += 1
            lines.append('')
    # fields outside html
    for i, n in enumerate(NO, 1):
        for fld in ('title', 'summary', 'heroCaption'):
            for pos, frag, msg in lint(n.get(fld, '')):
                lines.append(f'!! lesson {i} {fld}: «{frag}» — {msg}'); nlint += 1
    path = os.path.join(OUT, f'{region}.md')
    open(path, 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'{region}: {len(NO)} lessons, {nlint} lint hits -> {path}')

def check(region):
    code = code_of(region)
    r = subprocess.run(['node', '-e', f"global.window={{}};require('./content/{region}.js');global.window.READINGS_NO={{}};require('./content/{region}.no.js');const N=window.READINGS_NO['{code}'];const E=window.READINGS['{code}'];if(N.lessons.length!==4||E.lessons.length!==4)throw new Error('lesson count');console.log(N.lessons.map(l=>l.title).join(' | '))"],
                       cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode: print('PARSE FAILED', r.stderr.strip()[-400:]); return False
    E = open(os.path.join(ROOT, 'content', f'{region}.js'), encoding='utf-8').read()
    N = open(os.path.join(ROOT, 'content', f'{region}.no.js'), encoding='utf-8').read()
    a, b = set(re.findall(r'data-img="(\w+)"', E)), set(re.findall(r'data-img="(\w+)"', N))
    he, hn = re.findall(r'hero: "(\w+)"', E), re.findall(r'hero: "(\w+)"', N)
    ok = True
    if a != b: print('IMAGE KEYS differ: only EN', a - b, 'only NO', b - a); ok = False
    if he != hn: print('HERO keys differ', he, hn); ok = False
    if 'class="glass"' in N: print('class "glass" inside reading html'); ok = False
    for pat, name in [(r'Vin · Lesetekst \d av 4|Mat · Lesetekst \d av 4|Landemerke · Lesetekst \d av 4', 'kickers'),
                      (r'<h4>Før du går videre</h4>', 'Før du går videre')]:
        if len(re.findall(pat, N)) < 4: print('fixed heading/kicker missing or renamed:', name); ok = False
    for cls in ('facts', 'tasting', 'recap'):
        if E.count(f'class="{cls}"') != N.count(f'class="{cls}"'): print(f'box count differs for class {cls}'); ok = False
    if E.count('<figure') != N.count('<figure'): print('figure count differs'); ok = False
    for lab in ('Farge', 'Duft', 'Smak', 'Alkohol', 'Serveres', 'Ved bordet'):
        if E.count('<th>') and N.count(f'<th>{lab}</th>') != E.count('<th>Colour</th>'):
            print('tasting row label count off:', lab); ok = False
    print(('OK ' if ok else 'PROBLEMS ') + r.stdout.strip())
    return ok

def apply(region, patch_path):
    p = os.path.join(ROOT, 'content', f'{region}.no.js')
    s = open(p, encoding='utf-8').read()
    patch = json.load(open(patch_path, encoding='utf-8'))
    bounds = [m.start() for m in re.finditer(r'\n  \{\n    title:', s)]
    changed = set(); applied = 0
    for item in patch:
        old, new = item['old'], item['new']
        n = s.count(old)
        if n != 1:
            print(f'SKIP (found {n}x): {old[:70]}…'); continue
        pos = s.index(old)
        changed.add(sum(1 for b in bounds if b <= pos))
        s = s.replace(old, new); applied += 1
    open(p, 'w', encoding='utf-8', newline='').write(s)
    print(f'{region}: applied {applied}/{len(patch)}; lessons touched: {sorted(changed)}')
    return check(region)

def stale(region, quiet=False):
    from narrate import to_script
    d = os.path.join(ROOT, 'assets', 'audio', region)
    out = []
    for lang in ('en', 'no'):
        for i, L in enumerate(lessons(region, lang), 1):
            key = f'{lang}-{i}'
            txt = os.path.join(d, f'{key}.txt')
            cur = open(txt, encoding='utf-8').read() if os.path.exists(txt) else None
            if cur is None or cur.strip() != to_script(L, lang).strip() or not os.path.exists(os.path.join(d, f'{key}.mp3')):
                out.append(key)
    if not quiet: print(f'{region}: stale narrations: {out or "none"}')
    return out

def narrate(region):
    keys = stale(region, quiet=True)
    if not keys: print(f'{region}: nothing to regenerate'); return
    env = dict(os.environ, PYTHONIOENCODING='utf-8')
    d = os.path.join(ROOT, 'assets', 'audio', region)
    for k in keys:
        for attempt in range(3):
            print(f'== {region} {k} (attempt {attempt+1})', flush=True)
            subprocess.run([sys.executable, 'tools/narrate.py', region, '--only', k], check=True, cwd=ROOT, env=env)
            words = len(open(os.path.join(d, f'{k}.txt'), encoding='utf-8').read().split())
            secs = json.load(open(os.path.join(d, 'manifest.json'), encoding='utf-8'))[k]['seconds']
            if secs >= 0.28 * words: break
            print(f'!! {k} truncated ({secs}s for {words} words), retrying', flush=True)
        else:
            print(f'!! {k} still short after 3 attempts; check it by ear', flush=True)
    subprocess.run([sys.executable, 'tools/opus.py', region, '12'], check=True, cwd=ROOT, env=env)
    print(f'{region}: regenerated {keys}. Now run build.py, then commit and push (Pages rebuilds site/).')

if __name__ == '__main__':
    if len(sys.argv) < 3: print(__doc__); sys.exit(1)
    region, cmd = sys.argv[1], sys.argv[2]
    targets = regions() if region == 'all' else [region]
    for r in targets:
        if cmd == '--report': report(r)
        elif cmd == '--check': check(r)
        elif cmd == '--apply': apply(r, sys.argv[3])
        elif cmd == '--stale': stale(r)
        elif cmd == '--narrate': narrate(r)
        else: print(__doc__); sys.exit(1)
