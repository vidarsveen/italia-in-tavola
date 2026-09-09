"""List Vinmonopolet's own district / sub-district codes for the Italian regions.

Vinmonopolet classifies every product by mainDistrict (our region) and mainSubDistrict (the appellation),
so a link built from those codes is exact, unlike a free-text search. This script prints the codes so the
right one can be pasted into the wines[] entries in italia-course.html.

  python tools/vmpmap.py                 all Italian districts, with their sub-districts
  python tools/vmpmap.py piemonte        just one district (match on the code or name)

Set PYTHONIOENCODING=utf-8 on Windows.
"""
import json, sys, time, urllib.parse, urllib.request

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36',
      'Accept': 'application/json'}
B = 'https://www.vinmonopolet.no/vmpws/v2/vmp/products/search'


def search(q, page=1):
    u = B + '?q=' + urllib.parse.quote(q) + '&fields=FULL&pageSize=%d' % page
    for attempt in range(3):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
        except Exception:
            if attempt == 2:
                return None
            time.sleep(2)


def facet(j, code):
    """[(name, count, facet value)] for one facet of a search response."""
    out = []
    for f in (j or {}).get('facets', []):
        if f.get('code') == code:
            for v in f.get('values', []):
                q = v.get('query', {}).get('query', {}).get('value', '')
                val = q.split(code + ':')[1].split(':')[0] if code + ':' in q else ''
                out.append((v.get('name'), v.get('count'), val))
    return out


def main():
    want = sys.argv[1].lower() if len(sys.argv) > 1 else None
    top = search(':relevance:mainCountry:italia')
    districts = facet(top, 'mainDistrict')
    print('%d Italian districts, %d products in total\n' % (len(districts), top['pagination']['totalResults']))
    for name, count, code in districts:
        if want and want not in code.lower() and want not in (name or '').lower():
            continue
        print('%-26s %-5s %s' % (name, count, code))
        j = search(':relevance:mainCountry:italia:mainDistrict:' + code)
        subs = facet(j, 'mainSubDistrict')
        for sname, scount, scode in subs:
            print('      %-30s %-5s %s' % (sname, scount, scode))
        if not subs:
            print('      (no sub-districts: link at region level)')
        time.sleep(0.4)


if __name__ == '__main__':
    main()
