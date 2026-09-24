"""Stage an approved voice batch, with resumable chunks and cost records.

Run using voicelab/local-english-env/Scripts/python.exe tools/voice_batch.py.
Does not publish or replace the existing course recordings.
"""
import argparse
import concurrent.futures
import hashlib
import html
import json
from pathlib import Path
import re
import subprocess
import time
import urllib.error

import numpy as np
import soundfile as sf
import narrate
import normalise
import record_intros
import tts
from local_voice_samples import FloatSpeedKokoro, MODEL

ROOT = Path(tts.ROOT)
OUT = ROOT / 'voicelab/local-english/batch-three'
REGIONS = ['lazio', 'piemonte', 'toscana']
BATCHES = {'three': REGIONS, 'five': ['valledaosta', 'liguria', 'lombardia', 'trentino', 'veneto'],
           'next-five': ['friuli', 'emiliaromagna', 'umbria', 'marche', 'abruzzo'],
           'south-five': ['molise', 'campania', 'puglia', 'basilicata', 'calabria'],
           'islands': ['sicilia', 'sardegna']}
REGION_LABELS = {'valledaosta': "Valle d’Aosta", 'trentino': 'Trentino-Alto Adige',
                 'friuli': 'Friuli-Venezia Giulia', 'emiliaromagna': 'Emilia-Romagna'}


def configure(parser=None):
    global OUT, REGIONS
    parser = parser or argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--batch', choices=BATCHES, default='three')
    parser.add_argument('--lang', choices=['en', 'no', 'both'], default='both')
    args = parser.parse_args()
    REGIONS = BATCHES[args.batch]
    OUT = ROOT / 'voicelab/local-english' / ('batch-' + args.batch)
    return args

MODEL_NO = 'google/gemini-3.1-flash-tts-preview'
# Exact owner-selected kitchen-table direction, frozen for reproducibility.
DIRECTION = '''Read only the transcript aloud, word for word, in Norwegian Bokmål with a natural Oslo-area accent.
Imagine sitting at a kitchen table with a friend, a glass of wine in front of each of you. You know this subject and enjoy explaining it. Speak with the unforced rhythm of an ordinary friendly conversation. Let small words pass lightly and connect naturally to their neighbours. Keep consonants soft and easy, without lingering on them. Let each thought flow as a whole rather than carefully shaping every word. Keep the energy alive through curiosity and gentle changes of pitch. Say the Italian names easily within the flow. Take a short natural breath after the title.
No announcer or documentary-presenter delivery, no exaggerated mouth movements in the sound, no dramatic emphasis. Do not whisper or become breathy. Speak the written words exactly, without fillers, additions or paraphrasing.
'''


def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def split_script(script, limit=1800):
    units = []
    for paragraph in re.split(r'\n\s*\n', script.strip()):
        if len(paragraph) <= limit:
            units.append(paragraph)
        else:
            units.extend(re.split(r'(?<=[.!?])\s+', paragraph))
    result, current = [], ''
    for unit in units:
        if len(unit) > limit:
            raise ValueError('Sentence exceeds safe chunk size')
        if current and len(current) + len(unit) + 2 > limit:
            result.append(current)
            current = ''
        current = (current + '\n\n' + unit).strip()
    if current:
        result.append(current)
    assert ' '.join(' '.join(result).split()) == ' '.join(script.split())
    return result


def tasks():
    result = []
    for lang in ['no', 'en']:
        introductions = dict(record_intros.scripts(lang))
        for region in REGIONS:
            result.append((region, lang + '-intro', introductions[region]))
            source = ROOT / 'content' / (region + ('.no' if lang == 'no' else '') + '.js')
            for i, lesson in enumerate(narrate.lessons_from(str(source)), 1):
                script = narrate.to_script(lesson, lang, 'title', ('facts','recap','tasting','headings'), 'none')
                result.append((region, f'{lang}-{i}', script))
    return result


def generate(task, engine=None):
    region, key, script = task
    folder = OUT / region
    folder.mkdir(parents=True, exist_ok=True)
    norwegian = key.startswith('no-')
    settings = DIRECTION if norwegian else 'Kokoro-v1.0/af_heart/en-us/speed=.95/sentence-pauses=.22,title=.65'
    fingerprint = hashlib.sha256((settings + script).encode()).hexdigest()
    meta = folder / (key + '.json')
    dst = folder / (key + '.mp3')
    ogg = dst.with_suffix('.ogg')
    if meta.exists() and dst.exists() and ogg.exists():
        cached = json.loads(meta.read_text(encoding='utf-8'))
        if cached.get('fingerprint') == fingerprint:
            print(f'{region} {key}: cached', flush=True)
            return cached
    began = time.monotonic()
    (folder / (key + '.txt')).write_text(script, encoding='utf-8')
    if norwegian:
        parts = []
        for i, piece in enumerate(split_script(script)):
            chunk = folder / f'{key}-chunk-{i}'
            pcm = chunk.with_suffix('.pcm')
            cm = chunk.with_suffix('.json')
            chunkhash = hashlib.sha256((DIRECTION + piece).encode()).hexdigest()
            old = json.loads(cm.read_text(encoding='utf-8')) if cm.exists() else {}
            if pcm.exists() and old.get('fingerprint') == chunkhash:
                raw = pcm.read_bytes()
            else:
                print(f'{region} {key}: generating chunk {i+1}', flush=True)
                # Keep each provider attempt visible. Retry transient failures only.
                for attempt in range(3):
                    try:
                        raw, gid = tts.speak(DIRECTION + '\nTRANSCRIPT:\n' + piece,
                            model=MODEL_NO, voice='Puck', fmt='pcm', timeout=600, retries=1)
                        break
                    except (tts.TTSError, ConnectionError, TimeoutError, urllib.error.URLError) as error:
                        errors = folder / 'errors'
                        errors.mkdir(exist_ok=True)
                        save(errors / f'{key}-chunk-{i}-{time.time_ns()}.json',
                             dict(error=str(error), fingerprint=chunkhash, attempt=attempt + 1))
                        transient = not isinstance(error, tts.TTSError) or str(error).startswith(('HTTP 429:', 'HTTP 500:', 'HTTP 502:', 'HTTP 503:', 'HTTP 504:'))
                        if attempt == 2 or not transient:
                            raise
                        print(f'{region} {key} chunk {i+1}: temporary provider failure; retry {attempt+1}/2', flush=True)
                        time.sleep(5 * (attempt + 1))
                pcm.write_bytes(raw)
                old = dict(fingerprint=chunkhash, generation_id=gid, cost=None,
                           seconds=len(raw)/48000, words=len(piece.split()))
                save(cm, old)
                old['cost'] = tts.cost_of(gid, tries=2)
                save(cm, old)
            wpm = len(piece.split()) * 60 / (len(raw)/48000)
            if not 65 < wpm < 215:
                rejected = folder / 'rejected'
                rejected.mkdir(exist_ok=True)
                attempt_name = f'{key}-chunk-{i}-{time.time_ns()}'
                pcm.rename(rejected / (attempt_name + '.pcm'))
                cm.rename(rejected / (attempt_name + '.json'))
                raise RuntimeError(f'{region} {key} chunk {i}: suspect duration {wpm:.0f} wpm')
            parts.append(raw)
        tts.pcm_to_mp3(b''.join(parts), str(dst))
    else:
        pieces = []
        for i, sentence in enumerate(re.split(r'(?<=[.!?])\s+', script.strip())):
            samples, rate = engine.create(sentence, voice='af_heart', speed=.95, lang='en-us')
            if not len(samples) or not np.isfinite(samples).all():
                raise RuntimeError('Invalid local speech output')
            pieces.extend([samples, np.zeros(int(rate*(.65 if i == 0 else .22)),dtype=np.float32)])
        wav = dst.with_suffix('.wav')
        sf.write(wav, np.concatenate(pieces), rate)
        subprocess.run([tts.ffmpeg(), '-y', '-loglevel','error','-i',str(wav),
                        '-c:a','libmp3lame','-b:a','48k',str(dst)], check=True)
    stats = normalise.measure(str(dst))
    if not stats:
        raise RuntimeError('Loudness measurement failed')
    normalise.apply(str(dst), stats)
    measured = normalise.measure(str(dst))
    seconds = tts.duration(str(dst))
    if not seconds or not 60 < len(script.split())*60/seconds < 240:
        raise RuntimeError('Whole-track duration is suspect')
    subprocess.run([tts.ffmpeg(),'-y','-loglevel','error','-i',str(dst),'-ac','1',
                    '-c:a','libopus','-b:a','12k','-application','voip','-frame_duration','40',
                    '-vbr','on',str(ogg)],check=True)
    info = dict(region=region,key=key,seconds=seconds,words=len(script.split()),
                voice='Puck' if norwegian else 'af_heart',model=MODEL_NO if norwegian else 'Kokoro-82M-v1.0',
                fingerprint=fingerprint,script_sha256=hashlib.sha256(script.encode()).hexdigest(),
                lufs=float(measured['input_i']),bytes=dst.stat().st_size,ogg_bytes=ogg.stat().st_size,
                intro='region' if key.endswith('intro') else 'title',outro='none',
                drop='' if key.endswith('intro') else 'facts,recap,tasting,headings',
                generation_seconds=round(time.monotonic()-began,1))
    save(meta, info)
    print(f'{region} {key}: ready, {seconds}s',flush=True)
    return info


def english_batch(jobs):
    engine = FloatSpeedKokoro(str(MODEL/'kokoro-v1.0.onnx'),str(MODEL/'voices-v1.0.bin'))
    return [generate(job, engine) for job in jobs]


def report():
    OUT.mkdir(parents=True, exist_ok=True)
    scripts = {(region, key): script for region, key, script in tasks()}
    regions = []
    alltracks = []
    for region in REGIONS:
        folder = OUT/region
        charges = []
        for path in list(folder.glob('*-chunk-*.json')) + list((folder/'rejected').glob('*.json')):
            record = json.loads(path.read_text(encoding='utf-8'))
            if record['cost'] is None and record.get('generation_id'):
                record['cost'] = tts.cost_of(record['generation_id'],tries=2)
                save(path,record)
            charges.append(record)
        tracks = [json.loads(p.read_text(encoding='utf-8')) for p in folder.glob('*.json') if '-chunk-' not in p.name]
        alltracks.extend(tracks)
        regions.append(dict(region=region,tracks=len(tracks),
            known_cost_usd=sum(x['cost'] for x in charges if x['cost'] is not None),
            requests=len(charges),missing_costs=sum(x['cost'] is None for x in charges),
            norwegian_seconds=sum(x['seconds'] for x in tracks if x['key'].startswith('no-')),
            english_seconds=sum(x['seconds'] for x in tracks if x['key'].startswith('en-'))))
    total = dict(regions=regions,known_cost_usd=sum(r['known_cost_usd'] for r in regions),
                 missing_costs=sum(r['missing_costs'] for r in regions),english_api_cost_usd=0)
    save(OUT/'report.json',total)
    page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Three-region voice pilot</title><style>body{font:18px/1.6 system-ui;max-width:850px;margin:40px auto;padding:0 20px;background:#faf6ed;color:#27241f}audio{width:100%}section{border-top:1px solid #d4c9b8;padding:14px 0}h2{margin-top:40px}summary{cursor:pointer}</style><h1>Three-region voice pilot</h1><p>Norwegian: casual Puck. English: local Heart. Includes each regional introduction and all four readings. These recordings are staged for review; the live course is unchanged.</p>'''
    for region in REGIONS:
        page += '<h2>'+html.escape(REGION_LABELS.get(region, region.title()))+'</h2>'
        for lang in ['no','en']:
            page += '<details><summary>'+('Norsk · Puck' if lang=='no' else 'English · Heart')+'</summary>'
            for key in [lang+'-intro']+[f'{lang}-{i}' for i in range(1,5)]:
                title = scripts[region, key].splitlines()[0]
                if (OUT/region/(key+'.json')).exists():
                    page += f'<section><h3>{html.escape(title)}</h3><audio controls preload="none" src="{region}/{key}.mp3"></audio></section>'
                else:
                    page += f'<section><h3>{html.escape(title)}</h3><p>Recording pending.</p></section>'
            page += '</details>'
    page += "<script>document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')document.querySelectorAll('audio').forEach(a=>{if(a!==e.target)a.pause()})},true)</script></html>"
    page = page.replace('Three-region voice pilot', f'{len(REGIONS)}-region voice batch')
    (OUT/'index.html').write_text(page,encoding='utf-8')
    print(json.dumps(total,indent=2),flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--report', action='store_true')
    args = configure(parser)
    OUT.mkdir(parents=True,exist_ok=True)
    jobs = tasks()
    if args.report:
        report()
        raise SystemExit(0)
    report()
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
            english = pool.submit(english_batch,[j for j in jobs if j[1].startswith('en-')]) if args.lang != 'no' else None
            # Submit only two paid tracks at once. A failure prevents later submissions.
            if args.lang != 'en':
                remaining = iter(j for j in jobs if j[1].startswith('no-'))
                active = {pool.submit(generate, job) for job in [next(remaining, None), next(remaining, None)] if job}
                while active:
                    done, active = concurrent.futures.wait(active, return_when=concurrent.futures.FIRST_COMPLETED)
                    for future in done:
                        future.result()
                    for _ in done:
                        job = next(remaining, None)
                        if job:
                            active.add(pool.submit(generate, job))
            if english:
                english.result()
    finally:
        report()
