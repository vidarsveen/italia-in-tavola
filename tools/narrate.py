"""Generate narration audio for the readings.

Reads content/<region>.js (English) and content/<region>.no.js (Norwegian), turns each
lesson into a spoken script (figures and credits dropped, fact boxes and tasting tables read as
sentences), synthesises it with a neural voice, and writes:

  assets/audio/<region>/<lang>-<n>.mp3      48 kbit/s, for self-hosting
  assets/audio/<region>/<lang>-<n>.lo.mp3   20 kbit/s mono, small enough to inline in the artifact
  assets/audio/<region>/manifest.json       durations in seconds

Usage: python tools/narrate.py lazio [--only en-3]
"""
import asyncio, html, json, os, re, subprocess, sys
import edge_tts, imageio_ffmpeg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = {'en': 'en-GB-SoniaNeural', 'no': 'nb-NO-PernilleNeural'}
RATE = '-4%'

def lessons_from(path):
    src = open(path, encoding='utf-8').read()
    pat = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)",\s*kicker:\s*"((?:[^"\\]|\\.)*)",\s*minutes:\s*(\d+),\s*hero:\s*"[^"]*",\s*heroCaption:\s*"(?:[^"\\]|\\.)*",\s*summary:\s*"((?:[^"\\]|\\.)*)",\s*html:\s*`(.*?)`', re.S)
    out = []
    for m in pat.finditer(src):
        unesc = lambda t: t.replace("\\'", "'").replace('\\"', '"')
        out.append({'title': unesc(m.group(1)), 'kicker': unesc(m.group(2)), 'minutes': int(m.group(3)), 'summary': unesc(m.group(4)), 'html': m.group(5)})
    return out

def to_script(lesson, lang):
    h = lesson['html']
    h = re.sub(r'<figure.*?</figure>', ' ', h, flags=re.S)
    # tables: "Colour: value."
    h = re.sub(r'<tr><th>(.*?)</th><td>(.*?)</td></tr>', lambda m: f' {m.group(1)}: {m.group(2)}.\n', h, flags=re.S)
    h = re.sub(r'<h4>(.*?)</h4>', r'\n\1.\n', h, flags=re.S)
    h = re.sub(r'<h2>(.*?)</h2>', r'\n\n\1.\n\n', h, flags=re.S)
    h = re.sub(r'<li>(.*?)</li>', lambda m: '\n' + m.group(1).strip().rstrip('.') + '.\n', h, flags=re.S)
    h = re.sub(r'</p>|</aside>|</div>|</ul>', '\n', h)
    h = re.sub(r'<[^>]+>', '', h)
    h = html.unescape(h)
    h = re.sub(r'[ \t]+', ' ', h)
    h = re.sub(r'\n\s*\n+', '\n\n', h).strip()
    intro = f"{lesson['title']}.\n\n{lesson['summary']}\n\n"
    outro = "\n\nSlutt på leseteksten." if lang == 'no' else "\n\nEnd of this reading."
    return intro + h + outro

async def synth(text, voice, out):
    c = edge_tts.Communicate(text, voice, rate=RATE)
    await c.save(out)

def duration(path):
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    r = subprocess.run([ff, '-i', path], capture_output=True, text=True)
    m = re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)', r.stderr)
    return round(int(m.group(1))*3600 + int(m.group(2))*60 + float(m.group(3)), 1) if m else None

def compress(src, dst):
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    subprocess.run([ff, '-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', '16000', '-b:a', '20k', '-codec:a', 'libmp3lame', dst], check=True)

async def main():
    region = sys.argv[1]
    only = sys.argv[sys.argv.index('--only')+1] if '--only' in sys.argv else None
    outdir = os.path.join(ROOT, 'assets', 'audio', region); os.makedirs(outdir, exist_ok=True)
    manifest_path = os.path.join(outdir, 'manifest.json')
    manifest = json.load(open(manifest_path, encoding='utf-8')) if os.path.exists(manifest_path) else {}
    for lang, fname in [('en', f'{region}.js'), ('no', f'{region}.no.js')]:
        path = os.path.join(ROOT, 'content', fname)
        if not os.path.exists(path): continue
        for i, L in enumerate(lessons_from(path), start=1):
            key = f'{lang}-{i}'
            if only and only != key: continue
            script = to_script(L, lang)
            open(os.path.join(outdir, f'{key}.txt'), 'w', encoding='utf-8').write(script)
            out = os.path.join(outdir, f'{key}.mp3'); lo = os.path.join(outdir, f'{key}.lo.mp3')
            print(f'{key}: {len(script.split())} words -> synthesising', flush=True)
            await synth(script, VOICES[lang], out)
            compress(out, lo)
            manifest[key] = {'seconds': duration(out), 'voice': VOICES[lang], 'bytes': os.path.getsize(out), 'lo_bytes': os.path.getsize(lo)}
            print(f'   {manifest[key]}', flush=True)
            json.dump(manifest, open(manifest_path, 'w', encoding='utf-8'), indent=1)
    print('done')

if __name__ == '__main__':
    asyncio.run(main())
