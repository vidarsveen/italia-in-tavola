"""Which wines listed on a region sheet already have a tasting note, and which still need one.

The readings carry `<aside class="tasting"><h4>In the glass: NAME</h4>` tables for the wines they discuss
in depth. The region sheet lists more wines than that, so this reports the gap.

    PYTHONIOENCODING=utf-8 python tools/tastinggap.py            summary + write _tastinggap.json
    PYTHONIOENCODING=utf-8 python tools/tastinggap.py --list     every missing wine, region by region
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load():
    src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    dirs = dict(re.findall(r"'(IT-\d+)':'(\w+)'",
                           re.findall(r'const ASSET_DIRS = \{(.*?)\};', src, re.S)[0]))
    order = [c.strip().strip("'") for c in re.findall(r'const ORDER = \[(.*?)\]', src, re.S)[0].split(',')]
    wines, names = {}, {}
    for m in re.finditer(r"'(IT-\d+)':\{name:(?:'([^']*)'|\"([^\"]*)\").*?wines:\[(.*?)\], pairing:", src, re.S):
        code, n1, n2, wl = m.groups()
        names[code] = n1 or n2
        out = []
        for w in re.finditer(r"\['((?:[^'\\]|\\.)*)','(\w+)'", wl):
            out.append((w.group(1).replace("\\'", "'"), w.group(2)))
        wines[code] = out
    tables = {}
    for code, stem in dirs.items():
        s = open(os.path.join(ROOT, 'content', '%s.js' % stem), encoding='utf-8').read()
        tables[code] = re.findall(r'<aside class="tasting"><h4>In the glass: (.*?)</h4>', s)
    return order, dirs, names, wines, tables


def norm(x):
    x = re.sub(r'\s*\(.*?\)', ' ', x)
    return re.sub(r'\s+', ' ', x).strip().lower()


def main():
    order, dirs, names, wines, tables = load()
    missing, matched = [], 0
    for code in order:
        tt = [(t, norm(t)) for t in tables.get(code, [])]
        for wine, kind in wines.get(code, []):
            w = norm(wine)
            hit = next((t for t, tn in tt if tn == w or w in tn or tn in w), None)
            if hit:
                matched += 1
            else:
                missing.append({'code': code, 'region': names[code], 'stem': dirs[code],
                                'wine': wine, 'kind': kind})
    total = sum(len(v) for v in wines.values())
    print('wines on the region sheets : %d' % total)
    print('already have a tasting note: %d' % matched)
    print('still need one             : %d' % len(missing))
    out = os.path.join(ROOT, '_tastinggap.json')
    json.dump(missing, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('written to %s' % out)
    if '--list' in sys.argv:
        cur = None
        for m in missing:
            if m['code'] != cur:
                cur = m['code']
                print('\n%s %s (%s)' % (m['code'], m['region'], m['stem']))
            print('    %-38s %s' % (m['wine'], m['kind']))


if __name__ == '__main__':
    main()
