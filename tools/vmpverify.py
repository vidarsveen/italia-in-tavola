"""Check every Vinmonopolet link in italia-course.html actually returns products.

Each wines[] entry may carry a third element telling the page how to build the link:
    ''                       link at region level (COURSE.vmp)
    'italia_x_y'             mainSubDistrict, an appellation inside the region
    '@italia_x'              a different mainDistrict (Prosecco, Lugana, Colli di Luni)
    '#Grape Name'            singleGrape inside the region, for wines named after their grape

Run it after editing the mapping, or when the assortment may have moved:
    PYTHONIOENCODING=utf-8 python tools/vmpverify.py
Anything printed as ZERO needs a different code; use tools/vmpmap.py to see what exists.
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = r'C:/Users/vidar/PycharmProjects/3dgame'
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36',
      'Accept': 'application/json'}
B = 'https://www.vinmonopolet.no/vmpws/v2/vmp/products/search'


def query(district, spec):
    """Build the same facet query the page builds."""
    q = ':relevance:mainCountry:italia'
    if spec.startswith('@'):
        return q + ':mainDistrict:' + spec[1:]
    q += ':mainDistrict:' + district
    if spec.startswith('#'):
        return q + ':singleGrape:' + spec[1:]
    if spec:
        return q + ':mainSubDistrict:' + spec
    return q


def count(q, page=2):
    u = B + '?q=' + urllib.parse.quote(q) + '&fields=FULL&pageSize=%d' % page
    for attempt in range(3):
        try:
            j = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
            return j['pagination']['totalResults'], [p['name'] for p in j.get('products', [])[:2]]
        except Exception:
            if attempt == 2:
                return None, []
            time.sleep(6)


def main():
    src = open(ROOT + '/italia-course.html', encoding='utf-8').read()
    entries = re.findall(r"'(IT-\d+)':\{name:(?:'([^']*)'|\"([^\"]*)\").*?vmp:'((?:[^'\\]|\\.)*)',\s*\n\s*wines:\[(.*?)\], pairing:",
                         src, re.S)
    if not entries:
        print('no regions carry a vmp district code yet')
        return
    bad = 0
    for code, n1, n2, district, wl in entries:
        name = n1 or n2
        district = district.replace(chr(92) + chr(39), chr(39))
        wines = re.findall(r"\['((?:[^'\\]|\\.)*)','(\w+)'(?:,'((?:[^'\\]|\\.)*)')?\]", wl)
        print('%s %s   (%s)' % (code, name, district))
        for wname, _kind, spec in wines:
            wname = wname.replace("\\'", "'")
            spec = (spec or '').replace("\\'", "'")
            n, ex = count(query(district, spec))
            tag = 'region' if not spec else ('grape ' + spec[1:] if spec.startswith('#')
                                             else ('district ' + spec[1:] if spec.startswith('@') else spec))
            flag = ''
            if n is None:
                flag = '  REQUEST FAILED'
            elif n == 0:
                flag = '  ZERO'
                bad += 1
            print('    %-34s %-46s %-5s %s%s' % (wname, tag, n, ex[:1], flag))
            time.sleep(1.2)
    print('\n%d link(s) return nothing' % bad)
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
