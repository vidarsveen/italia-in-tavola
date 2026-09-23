"""Validate completed pilot tracks; pass region stems or omit for all three."""
import hashlib
import json
import subprocess
import sys
import voice_batch as batch

completed_only = '--completed' in sys.argv
regions = [arg for arg in sys.argv[1:] if arg != '--completed'] or batch.REGIONS
count = 0
levels = []
for region, key, script in batch.tasks():
    if region not in regions:
        continue
    path = batch.OUT / region / (key + '.mp3')
    if completed_only and not path.with_suffix('.json').exists():
        continue
    info = json.loads(path.with_suffix('.json').read_text(encoding='utf-8'))
    assert info['script_sha256'] == hashlib.sha256(script.encode()).hexdigest(), (region,key,'hash')
    assert path.with_suffix('.txt').read_text(encoding='utf-8') == script, (region,key,'script')
    assert abs(info['lufs'] + 19) < 1, (region,key,'volume')
    assert info['voice'] == ('Puck' if key.startswith('no-') else 'af_heart')
    assert info['outro'] == 'none'
    for ext in ['.mp3','.ogg']:
        audio = path.with_suffix(ext)
        subprocess.run([batch.tts.ffmpeg(),'-v','error','-xerror','-i',str(audio),
                        '-f','null','-'],check=True,capture_output=True)
    if key.startswith('no-'):
        chunks = batch.split_script(script)
        for i, text in enumerate(chunks):
            meta = path.parent / f'{key}-chunk-{i}.json'
            part = json.loads(meta.read_text(encoding='utf-8'))
            assert part['fingerprint'] == hashlib.sha256((batch.DIRECTION+text).encode()).hexdigest()
            assert meta.with_suffix('.pcm').stat().st_size > 0
    count += 1
    levels.append(info['lufs'])
print(f'{count} tracks verified: source scripts, settings, cached chunks, MP3/Opus decode; LUFS {min(levels)} to {max(levels)}')
