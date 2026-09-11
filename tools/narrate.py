"""Generate narration audio for the readings.

Reads content/<region>.js (English) and content/<region>.no.js (Norwegian), turns each
lesson into a spoken script (figures and credits dropped, fact boxes and tasting tables read as
sentences), synthesises it with a neural voice, and writes:

  assets/audio/<region>/<lang>-<n>.mp3      48 kbit/s, for self-hosting
  assets/audio/<region>/<lang>-<n>.lo.mp3   20 kbit/s mono, small enough to inline in the artifact
  assets/audio/<region>/manifest.json       durations in seconds

Two engines:
  --engine edge        Microsoft Edge neural voices, free, the default (all 160 files use it)
  --engine openrouter  OpenRouter's OpenAI-compatible speech endpoint (tools/tts.py, needs
                       OPENROUTER_API_KEY in .env). Pick the voice with tools/voicelab.py.

The spoken script normally opens with the lesson title and its one-line summary. --intro
controls that: full (default, what every existing file has), title (title only, then straight
into the prose) or none. Changing it changes the script, so every file rendered with a
different setting is a deliberate re-record.

Usage: python tools/narrate.py lazio [--only en-3]
       python tools/narrate.py lazio --engine openrouter --voice nova --intro title
"""
import asyncio, html, json, os, re, subprocess, sys
import edge_tts, imageio_ffmpeg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = {'en': 'en-GB-SoniaNeural', 'no': 'nb-NO-PernilleNeural'}
RATE = '-4%'
ARGS = sys.argv[1:]

def arg(name, default=None):
    return ARGS[ARGS.index(name) + 1] if name in ARGS else default

def lessons_from(path):
    src = open(path, encoding='utf-8').read()
    pat = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)",\s*kicker:\s*"((?:[^"\\]|\\.)*)",\s*minutes:\s*(\d+),\s*hero:\s*"[^"]*",\s*heroCaption:\s*"(?:[^"\\]|\\.)*",\s*summary:\s*"((?:[^"\\]|\\.)*)",\s*html:\s*`(.*?)`', re.S)
    out = []
    for m in pat.finditer(src):
        unesc = lambda t: t.replace("\\'", "'").replace('\\"', '"')
        out.append({'title': unesc(m.group(1)), 'kicker': unesc(m.group(2)), 'minutes': int(m.group(3)), 'summary': unesc(m.group(4)), 'html': m.group(5)})
    return out

def to_script(lesson, lang, intro='full', drop=()):
    h = lesson['html']
    h = re.sub(r'<figure.*?</figure>', ' ', h, flags=re.S)
    # Boxes that are lists rather than prose. Spoken, they interrupt the reading; on screen
    # they are what the eye goes to. --drop facts,recap leaves them out of the narration only.
    if 'facts' in drop:
        h = re.sub(r'<aside class="facts">.*?</aside>', ' ', h, flags=re.S)
    if 'recap' in drop:
        h = re.sub(r'<div class="recap">.*?</div>', ' ', h, flags=re.S)
    if 'tasting' in drop:
        h = re.sub(r'<aside class="tasting">.*?</aside>', ' ', h, flags=re.S)
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
    head = {'full': f"{lesson['title']}.\n\n{lesson['summary']}\n\n",
            'title': f"{lesson['title']}.\n\n",
            'none': ''}[intro]
    outro = "\n\nSlutt på leseteksten." if lang == 'no' else "\n\nEnd of this reading."
    return head + h + outro

async def synth(text, voice, out):
    c = edge_tts.Communicate(text, voice, rate=RATE)
    await c.save(out)

# Every existing Norwegian file sits between 126 and 157 words a minute. A rendering that
# comes back far shorter than that means the model silently dropped part of the script, which
# a preview TTS will do on a 5000-character input. Catch it here rather than on the phone.
SLOWEST_WPM = 190

def synth_openrouter(text, lang, out, model, voice, instructions=None, tries=2):
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import tts
    # No tone steering unless asked for: only some providers honour `instructions`, and the
    # voice was chosen from voicelab clips rendered without it. Match what was approved.
    floor = len(text.split()) / SLOWEST_WPM * 60
    for attempt in range(1, tries + 1):
        info = tts.speak_to_file(text, out, model=model, voice=voice,
                                 instructions=instructions)
        if (info.get('seconds') or 0) >= floor:
            return info
        print(f'   short: {info["seconds"]}s for {len(text.split())} words '
              f'(expected {floor:.0f}s+)' + (', retrying' if attempt < tries else ', KEEPING ANYWAY'),
              flush=True)
    info['short'] = True
    return info

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
    only = arg('--only')
    engine = arg('--engine', 'edge')
    intro = arg('--intro', 'full')
    model = arg('--model')
    voice_override = arg('--voice')
    instructions = arg('--instructions')
    drop = tuple(s.strip() for s in (arg('--drop') or '').split(',') if s.strip())
    if intro not in ('full', 'title', 'none'):
        sys.exit('--intro takes full, title or none')
    bad = [d for d in drop if d not in ('facts', 'recap', 'tasting')]
    if bad:
        sys.exit(f'--drop takes facts, recap and/or tasting, not {bad}')
    outdir = os.path.join(ROOT, 'assets', 'audio', region); os.makedirs(outdir, exist_ok=True)
    manifest_path = os.path.join(outdir, 'manifest.json')
    manifest = json.load(open(manifest_path, encoding='utf-8')) if os.path.exists(manifest_path) else {}
    want = arg('--lang')
    for lang, fname in [('en', f'{region}.js'), ('no', f'{region}.no.js')]:
        if want and lang != want: continue
        path = os.path.join(ROOT, 'content', fname)
        if not os.path.exists(path): continue
        for i, L in enumerate(lessons_from(path), start=1):
            key = f'{lang}-{i}'
            if only and only != key: continue
            script = to_script(L, lang, intro, drop)
            open(os.path.join(outdir, f'{key}.txt'), 'w', encoding='utf-8').write(script)
            out = os.path.join(outdir, f'{key}.mp3'); lo = os.path.join(outdir, f'{key}.lo.mp3')
            print(f'{key}: {len(script.split())} words -> synthesising ({engine})', flush=True)
            if engine == 'openrouter':
                import tts as _tts
                info = synth_openrouter(script, lang, out, model or _tts.DEFAULT_MODEL,
                                        voice_override or 'nova', instructions)
                used = f'{info["model"]}/{info["voice"]}'
                cost = info.get('cost')
            else:
                await synth(script, voice_override or VOICES[lang], out)
                used, cost = voice_override or VOICES[lang], None
            compress(out, lo)
            manifest[key] = {'seconds': duration(out), 'voice': used, 'bytes': os.path.getsize(out), 'lo_bytes': os.path.getsize(lo)}
            if cost: manifest[key]['cost'] = cost
            if intro != 'full': manifest[key]['intro'] = intro
            if drop: manifest[key]['drop'] = ','.join(drop)
            print(f'   {manifest[key]}', flush=True)
            json.dump(manifest, open(manifest_path, 'w', encoding='utf-8'), indent=1)
    print('done')

if __name__ == '__main__':
    asyncio.run(main())
