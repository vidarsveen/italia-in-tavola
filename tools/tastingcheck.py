"""Check the tasting cards against docs/tasting-format.md.

    PYTHONIOENCODING=utf-8 python tools/tastingcheck.py

Exits non-zero if a wine on a region sheet has no card, a field is missing or empty,
the two languages disagree on which cards exist, or the alcohol field is not a percentage.
"""
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIELDS = ['colour', 'nose', 'palate', 'alcohol', 'serve', 'table']

NODE = """
global.window = {};
require('./content/tasting.js');
require('./content/tasting.no.js');
console.log(JSON.stringify({en: window.TASTING || {}, no: window.TASTING_NO || {}}));
"""


def main():
    r = subprocess.run(['node', '-e', NODE], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED\n' + (r.stderr or '')[-800:])
        sys.exit(1)
    d = json.loads(r.stdout)
    en, no = d['en'], d['no']

    src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
    order = [c.strip().strip("'") for c in re.findall(r'const ORDER = \[(.*?)\]', src, re.S)[0].split(',')]
    wines = {}
    for m in re.finditer(r"'(IT-\d+)':\{name:(?:'[^']*'|\"[^\"]*\").*?wines:\[(.*?)\], pairing:", src, re.S):
        wines[m.group(1)] = [w.replace("\\'", "'")
                             for w in re.findall(r"\['((?:[^'\\]|\\.)*)'", m.group(2))]

    problems = []
    wanted = ['%s|%s' % (c, w) for c in order for w in wines.get(c, [])]
    for k in wanted:
        if k not in en:
            problems.append('no English card: %s' % k)
        if k not in no:
            problems.append('no Norwegian card: %s' % k)
    for extra in set(en) - set(wanted):
        problems.append('English card for a wine not on any sheet: %s' % extra)
    for extra in set(no) - set(wanted):
        problems.append('Norwegian card for a wine not on any sheet: %s' % extra)

    for lang, data in (('EN', en), ('NO', no)):
        for k, rec in data.items():
            for f in FIELDS:
                if f not in rec or not str(rec.get(f, '')).strip():
                    problems.append('%s %s: %s is missing or empty' % (lang, k, f))
            alc = str(rec.get('alcohol', ''))
            if alc and '%' not in alc:
                problems.append('%s %s: alcohol "%s" has no percent sign' % (lang, k, alc))
            for f in FIELDS:
                if len(str(rec.get(f, ''))) > 160:
                    problems.append('%s %s: %s is too long to scan' % (lang, k, f))

    print('%d wines on the sheets, %d English cards, %d Norwegian cards'
          % (len(wanted), len(en), len(no)))
    if problems:
        for p in problems[:60]:
            print('  ' + p)
        if len(problems) > 60:
            print('  … and %d more' % (len(problems) - 60))
        print('%d problem(s)' % len(problems))
        sys.exit(1)
    print('OK')


if __name__ == '__main__':
    main()
