"""Lift the tasting tables that already exist in the readings into content/tasting.js and tasting.no.js.

The readings carry `<aside class="tasting">` tables for the wines they discuss in depth. Rather than retype
them, extract them, so the card and the essay can never disagree. Wines with no table are left for a writer.

    PYTHONIOENCODING=utf-8 python tools/tastingextract.py
"""
import io
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_ROWS = ['Colour', 'Nose', 'Palate', 'Alcohol', 'Serve', 'At the table']
NO_ROWS = ['Farge', 'Duft', 'Smak', 'Alkohol', 'Serveres', 'Ved bordet']
FIELDS = ['colour', 'nose', 'palate', 'alcohol', 'serve', 'table']


def strip(html):
    t = re.sub(r'<[^>]+>', '', html)
    t = (t.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
          .replace('&nbsp;', ' ').replace('&#39;', "'").replace('&quot;', '"'))
    return re.sub(r'\s+', ' ', t).strip()


def tables_in(path, rows, title_re):
    """{table title: {field: value}} for one reading file."""
    s = io.open(path, encoding='utf-8').read()
    out = {}
    for m in re.finditer(r'<aside class="tasting"><h4>(.*?)</h4>(.*?)</aside>', s, re.S):
        title = strip(m.group(1))
        tm = re.match(title_re, title)
        if not tm:
            continue
        cells = {}
        for r in re.finditer(r'<tr><th>(.*?)</th><td>(.*?)</td></tr>', m.group(2), re.S):
            cells[strip(r.group(1))] = strip(r.group(2))
        rec = {}
        for field, row in zip(FIELDS, rows):
            if row in cells:
                rec[field] = cells[row]
        if len(rec) == 6:
            out[tm.group(1).strip()] = rec
    return out


def norm(x):
    x = re.sub(r'\s*\(.*?\)', ' ', x)
    return re.sub(r'\s+', ' ', x).strip().lower()


def main():
    src = io.open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    dirs = dict(re.findall(r"'(IT-\d+)':'(\w+)'",
                           re.findall(r'const ASSET_DIRS = \{(.*?)\};', src, re.S)[0]))
    order = [c.strip().strip("'") for c in re.findall(r'const ORDER = \[(.*?)\]', src, re.S)[0].split(',')]
    wines = {}
    for m in re.finditer(r"'(IT-\d+)':\{name:(?:'[^']*'|\"[^\"]*\").*?wines:\[(.*?)\], pairing:", src, re.S):
        wines[m.group(1)] = [w.replace("\\'", "'")
                             for w in re.findall(r"\['((?:[^'\\]|\\.)*)'", m.group(2))]

    en_out, no_out, unmatched = {}, {}, []
    for code in order:
        stem = dirs[code]
        en = tables_in(os.path.join(ROOT, 'content', '%s.js' % stem), EN_ROWS, r'In the glass:\s*(.+)')
        no = tables_in(os.path.join(ROOT, 'content', '%s.no.js' % stem), NO_ROWS, r'I glasset:\s*(.+)')
        en_titles, no_titles = list(en), list(no)
        for wine in wines.get(code, []):
            w = norm(wine)
            te = next((t for t in en_titles if norm(t) == w or w in norm(t) or norm(t) in w), None)
            if not te:
                continue
            i = en_titles.index(te)
            tn = no_titles[i] if i < len(no_titles) else None
            if not tn:
                unmatched.append('%s %s: English table but no Norwegian one' % (code, wine))
                continue
            en_out['%s|%s' % (code, wine)] = en[te]
            no_out['%s|%s' % (code, wine)] = no[tn]

    def write(path, var, data):
        body = ',\n'.join(
            '  %s: {\n%s\n  }' % (json.dumps(k, ensure_ascii=False),
                                  ',\n'.join('    %s: %s' % (f, json.dumps(v[f], ensure_ascii=False))
                                             for f in FIELDS))
            for k, v in data.items())
        io.open(os.path.join(ROOT, path), 'w', encoding='utf-8', newline='').write(
            'window.%s = window.%s || {};\n// Lifted from the readings by tools/tastingextract.py — do not hand-edit these;\n'
            '// edit the table in the reading and run the tool again. Hand-written cards go below, appended by writers.\n'
            'Object.assign(window.%s, {\n%s,\n});\n' % (var, var, var, body))

    write('content/tasting.js', 'TASTING', en_out)
    write('content/tasting.no.js', 'TASTING_NO', no_out)
    print('extracted %d card(s) in each language' % len(en_out))
    for u in unmatched:
        print('  note:', u)


if __name__ == '__main__':
    main()
