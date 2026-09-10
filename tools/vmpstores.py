"""Fetch the Vinmonopolet store list (name + id) from the availableInStores facet."""
import json
import urllib.parse
import urllib.request

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36',
      'Accept': 'application/json'}
q = ':relevance:mainCountry:italia'
u = ('https://www.vinmonopolet.no/vmpws/v2/vmp/products/search?q=' + urllib.parse.quote(q)
     + '&fields=FULL&pageSize=1')
j = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))

stores = []
for f in j.get('facets', []):
    if f.get('code') == 'availableInStores':
        for v in f.get('values', []):
            qv = v.get('query', {}).get('query', {}).get('value', '')
            sid = qv.split('availableInStores:')[1].split(':')[0] if 'availableInStores:' in qv else ''
            if sid:
                stores.append((v['name'], sid, v['count']))

stores.sort(key=lambda s: s[0])
print('%d stores' % len(stores))
out = ','.join("['%s','%s']" % (n.replace("'", "\\'"), i) for n, i, _ in stores)
open(r'C:/Users/vidar/AppData/Local/Temp/claude/C--Users-vidar-PycharmProjects-3dgame/2c0b16f6-8e2a-4e87-851e-2525be1507a8/scratchpad/stores.js',
     'w', encoding='utf-8').write('const VMP_STORES = [' + out + '];\n')
print('bytes:', len(out))
print('sample:', stores[:3], '...', [s for s in stores if s[0].startswith('Oslo')][:3])
