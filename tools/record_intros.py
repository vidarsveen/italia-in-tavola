"""Record the twenty region introductions from the sheet's own text.
Usage: python tools/record_intros.py [--check] [--lang en|no] [--region stem]
Each introduction is a separate audiobook chapter; reading audio is untouched.
"""
import argparse, asyncio, json, re, subprocess
from pathlib import Path
import audiobook, narrate, normalise, tts

ROOT = Path(tts.ROOT)

def scripts(lang):
    source = (ROOT / ('italia-course.html' if lang == 'en' else 'content/course.no.js')).read_text(encoding='utf-8')
    result = []
    for code, region, name in audiobook.course_order():
        match = re.search(r"'" + code + r"':\{[^\n]*?intro:(\"(?:[^\"\\]|\\.)*\")", source)
        if not match:
            raise ValueError(f'Missing introduction: {code} {lang}')
        result.append((region, name + '.\n\n' + json.loads(match[1])))
    return result

def stale(region, lang, script):
    folder = ROOT / 'assets/audio' / region
    key = lang + '-intro'
    manifest = json.loads((folder / 'manifest.json').read_text(encoding='utf-8'))
    textfile = folder / (key + '.txt')
    return (not textfile.exists() or textfile.read_text(encoding='utf-8') != script
            or not all((folder / (key + ext)).exists() for ext in ('.mp3','.ogg'))
            or not manifest.get(key, {}).get('seconds')
            or manifest.get(key, {}).get('suspect'))

async def record(region, lang, script):
    folder = ROOT / 'assets/audio' / region
    key = lang + '-intro'
    # Only replace the published files after synthesis and validation succeed.
    temp = folder / (key + '.pending.mp3')
    try:
        if lang == 'no':
            info = narrate.synth_nbtts(script, str(temp), 'Kvinne · Oslo', 'Rolig', .95)
            if info.get('suspect'):
                raise RuntimeError(f'{region}: narration failed length check')
        else:
            await narrate.synth(script, 'en-GB-SoniaNeural', str(temp))
            info = {'voice':'en-GB-SoniaNeural'}
        seconds = tts.duration(str(temp))
        ok, _, why = narrate.rate_ok(seconds, len(script.split()), .95 if lang == 'no' else 1)
        if not seconds or not ok:
            raise RuntimeError(f'{region}: invalid recording duration: {why}')
        stats = normalise.measure(str(temp))
        if not stats:
            raise RuntimeError('Loudness measurement failed')
        normalise.apply(str(temp), stats)
        oggtemp = folder / (key + '.pending.ogg')
        subprocess.run([tts.ffmpeg(), '-y','-loglevel','error','-i',str(temp),'-ac','1',
                        '-c:a','libopus','-b:a','12k','-application','voip',
                        '-frame_duration','40','-vbr','on',str(oggtemp)],check=True)
        temp.replace(folder / (key + '.mp3'))
        oggtemp.replace(folder / (key + '.ogg'))
        (folder / (key + '.txt')).write_text(script,encoding='utf-8')
        # Re-read here: a reading may have finished recording in the meantime.
        path = folder / 'manifest.json'
        manifest = json.loads(path.read_text(encoding='utf-8'))
        manifest[key] = dict({k:v for k,v in info.items() if k in ('voice','pace','tempo','model')}, seconds=seconds, bytes=(folder/(key+'.mp3')).stat().st_size,
                             ogg_bytes=(folder/(key+'.ogg')).stat().st_size, kind='region-intro',
                             intro='region', drop='', outro='none', loudness=-19)
        path.write_text(json.dumps(manifest,ensure_ascii=False,indent=1),encoding='utf-8')
        print(f'{region} {key}: {seconds:.1f}s',flush=True)
    finally:
        temp.unlink(missing_ok=True)

async def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check',action='store_true')
    parser.add_argument('--lang',choices=['en','no'])
    parser.add_argument('--region')
    args=parser.parse_args()
    pending=[]
    for lang in ([args.lang] if args.lang else ['en','no']):
        for region,script in scripts(lang):
            if args.region and region != args.region: continue
            if stale(region,lang,script): pending.append((region,lang,script))
    if args.check:
        for region,lang,_ in pending: print(f'Stale or missing: {region} {lang}')
        print(f'{len(pending)} introductions need recording')
        return int(bool(pending))
    for region,lang,script in pending: await record(region,lang,script)
    print(f'{len(pending)} introductions recorded')
    return 0

if __name__ == '__main__':
    raise SystemExit(asyncio.run(main()))
