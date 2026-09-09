"""Count Vinmonopolet search hits for every wine listed in COURSE, so weak search terms can be overridden."""
import json, re, urllib.request, urllib.parse, time, os

ROOT = r"C:/Users/vidar/PycharmProjects/3dgame"
src = open(os.path.join(ROOT, 'italia-course.html'), encoding='utf-8').read()
blocks = re.findall(r"'(IT-\d+)':\{name:'([^']+)'.*?wines:\[(.*?)\], pairing:", src, re.S)
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36',
      'Accept': 'application/json'}
B = 'https://www.vinmonopolet.no/vmpws/v2/vmp/products/search'


def count(term):
    q = re.sub(r'\s*\(.*?\)\s*', ' ', term).strip() + ':relevance:mainCountry:italia'
    u = B + '?q=' + urllib.parse.quote(q) + '&fields=FULL&pageSize=1'
    for attempt in range(2):
        try:
            j = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))
            return j.get('pagination', {}).get('totalResults')
        except Exception as e:
            if attempt:
                return 'ERR ' + type(e).__name__
            time.sleep(2)


weak = []
for code, name, wl in blocks:
    wines = [w.replace("\\'", "'") for w in re.findall(r"\['((?:[^'\\]|\\.)*)'", wl)]
    out = []
    for w in wines:
        n = count(w)
        out.append('%s=%s' % (w, n))
        if isinstance(n, int) and n < 3:
            weak.append((name, w, n))
        time.sleep(0.4)
    print('%-22s %s' % (name, '  '.join(out)), flush=True)

print('\nWEAK (fewer than 3 results):')
for n, w, k in weak:
    print('  %-20s %-38s %s' % (n, w, k))
