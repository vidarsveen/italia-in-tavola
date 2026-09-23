"""Promote the validated pilot tracks; leave incomplete tracks untouched."""
import hashlib
import json
import shutil
import voice_batch as batch

jobs = batch.tasks()
ready = []
for region, key, script in jobs:
    source = batch.OUT / region
    meta = source / (key + '.json')
    if not meta.exists():
        continue
    info = json.loads(meta.read_text(encoding='utf-8'))
    assert info['script_sha256'] == hashlib.sha256(script.encode()).hexdigest()
    assert (source/(key+'.txt')).read_text(encoding='utf-8') == script
    assert all((source/(key+ext)).is_file() for ext in ['.txt','.mp3','.ogg'])
    assert abs(info['lufs'] + 19) < 1
    ready.append((region,key,info))
assert len(ready) >= 28, 'Unexpectedly incomplete pilot'
for region in batch.REGIONS:
    folder = batch.ROOT/'assets/audio'/region
    path = folder/'manifest.json'
    manifest = json.loads(path.read_text(encoding='utf-8'))
    for r,key,info in ready:
        if r != region:
            continue
        for ext in ['.txt','.mp3','.ogg']:
            shutil.copyfile(batch.OUT/r/(key+ext),folder/(key+ext))
        entry = {k:info[k] for k in ['seconds','voice','model','bytes','ogg_bytes','intro','drop','outro','fingerprint']}
        entry['revision'] = hashlib.sha256((folder/(key+'.mp3')).read_bytes()).hexdigest()[:16]
        entry['loudness'] = info['lufs']
        if key.startswith('no-'):
            entry['delivery'] = 'casual-v3'
        else:
            entry['speed'] = .95
        if key.endswith('intro'):
            entry['kind'] = 'region-intro'
        manifest[key] = entry
    path.write_text(json.dumps(manifest,ensure_ascii=False,indent=1)+'\n',encoding='utf-8')
print(f'Installed {len(ready)} recordings. Incomplete tracks retain existing audio.')
