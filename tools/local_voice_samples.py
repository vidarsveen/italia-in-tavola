"""Generate an offline Kokoro English audition, without changing course recordings.

Run with voicelab/local-english-env/Scripts/python.exe tools/local_voice_samples.py.
Install kokoro-onnx==0.4.8, soundfile and imageio-ffmpeg in that isolated environment.
Model files from the kokoro-onnx model-files-v1.1 release belong in voicelab/kokoro-model/.
"""
import hashlib
import html
import importlib.metadata
import json
from pathlib import Path
import re
import socket
import shutil
import subprocess
import time

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

import normalise
import tts

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'voicelab' / 'local-english'
MODEL = ROOT / 'voicelab' / 'kokoro-model'
VOICES = [('bf_emma', 'Emma', 'British English · female', 'en-gb'),
          ('bm_george', 'George', 'British English · male', 'en-gb'),
          ('af_heart', 'Heart', 'American English · female', 'en-us'),
          ('am_michael', 'Michael', 'American English · male', 'en-us')]


def no_network(*args, **kwargs):
    raise RuntimeError('Network disabled during local voice generation')


class FloatSpeedKokoro(Kokoro):
    """The release model expects float speed; kokoro-onnx 0.4.8 sends int32.

    Keep the requested fractional speed and reject oversized input rather than truncate it.
    """
    def _create_audio(self, phonemes, voice, speed):
        tokens = self.tokenizer.tokenize(phonemes)
        if len(tokens) > 510:
            raise ValueError('Split this sentence before generating: over 510 tokens')
        inputs = {'input_ids': np.array([[0, *tokens, 0]], dtype=np.int64),
                  'style': np.array(voice[len(tokens)], dtype=np.float32),
                  'speed': np.array([speed], dtype=np.float32)}
        return self.sess.run(None, inputs)[0], 24000


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    script = '\n\n'.join((ROOT / 'assets/audio/toscana/en-1.txt').read_text(
        encoding='utf-8').strip().split('\n\n')[:2])
    (OUT / 'sample.txt').write_text(script, encoding='utf-8')
    # Models are already downloaded; prove inference needs no external service.
    socket.socket.connect = no_network
    socket.socket.connect_ex = no_network
    socket.create_connection = no_network
    engine = FloatSpeedKokoro(str(MODEL / 'kokoro-v1.0.onnx'), str(MODEL / 'voices-v1.0.bin'))
    versions = {p: importlib.metadata.version(p) for p in
                ['kokoro-onnx', 'onnxruntime', 'numpy', 'soundfile']}
    hashes = {p.name: hashlib.file_digest(p.open('rb'), 'sha256').hexdigest()
              for p in MODEL.iterdir() if p.suffix in ('.onnx', '.bin')}
    results = []
    for voice, name, accent, language in VOICES:
        print('Rendering ' + name, flush=True)
        began = time.monotonic()
        pieces = []
        sentences = re.split(r'(?<=[.!?])\s+', script)
        for i, sentence in enumerate(sentences):
            samples, rate = engine.create(sentence, voice=voice, speed=0.95, lang=language)
            if not len(samples) or not np.isfinite(samples).all():
                raise RuntimeError('Invalid audio for ' + voice)
            pieces.append(samples)
            if i < len(sentences) - 1:
                pieces.append(np.zeros(int(rate * (0.65 if i == 0 else 0.22)), dtype=np.float32))
        wav = OUT / (voice + '.wav')
        sf.write(wav, np.concatenate(pieces), rate)
        mp3 = OUT / (voice + '.mp3')
        subprocess.run([tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', str(wav),
                        '-c:a', 'libmp3lame', '-b:a', '48k', str(mp3)], check=True)
        stats = normalise.measure(str(mp3))
        if not stats:
            raise RuntimeError('Audio measurement failed')
        normalise.apply(str(mp3), stats)
        measured = normalise.measure(str(mp3))
        results.append(dict(voice=voice, name=name, accent=accent, language=language,
                            speed=0.95, seconds=tts.duration(str(mp3)),
                            lufs=float(measured['input_i']),
                            generation_seconds=round(time.monotonic() - began, 2)))
        print(json.dumps(results[-1]), flush=True)
    manifest = dict(model='Kokoro-82M v1.0 ONNX', model_hashes=hashes, versions=versions,
                    network_disabled=True, api_cost=0,
                    script_sha256=hashlib.sha256(script.encode()).hexdigest(), voices=results)
    (OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
    cards = ''.join(f'<section><h2>{html.escape(r["name"])}</h2>'
                    f'<p>{html.escape(r["accent"])} · {r["seconds"]:.0f} seconds</p>'
                    f'<audio aria-label="Listen to {r["name"]}" controls preload="metadata" '
                    f'src="{r["voice"]}.mp3"></audio></section>' for r in results)
    page = '''<!doctype html><html lang="en"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>English voice comparison · Italia in Tavola</title>
<style>body{font:18px/1.6 system-ui;background:#faf6ed;color:#27241f;max-width:800px;
margin:36px auto;padding:0 20px}h1{line-height:1.15;font-size:clamp(30px,6vw,44px)}
h2{font-size:23px;margin-bottom:0}section{padding:12px 0 24px;border-top:1px solid #d4c9b8}
audio{width:100%}a{color:#843d38}summary{cursor:pointer}p{margin:10px 0 16px}
.eyebrow{color:#843d38;font-size:14px;letter-spacing:.12em;text-transform:uppercase}</style>
<p class="eyebrow">Italia in Tavola · Voice studio</p><h1>Choose the English narrator</h1>
<p>Four local voices reading the same Sangiovese passage. Each uses the same pace and
matched volume. Listen for warmth, clarity and the pronunciation of Italian names.</p>
<p>Generated on this computer with Kokoro. No speech API charges.</p>'''
    page += cards
    page += '<details><summary>Read the sample</summary>' + ''.join(
        '<p>' + html.escape(p) + '</p>' for p in script.split('\n\n')) + '</details>'
    page += '''<section><h2>Your Norwegian choice</h2><p>Puck · approved Sangiovese sample</p>
<audio controls preload="metadata" src="puck-reference.mp3"></audio></section>
<p>These are audition samples. The published course still uses its existing recordings.</p>
<script>document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')
document.querySelectorAll('audio').forEach(a=>{if(a!==e.target)a.pause()})},true)</script></html>'''
    (OUT / 'index.html').write_text(page, encoding='utf-8')
    shutil.copyfile(ROOT / 'voicelab/no-puck-sangiovese-test.mp3', OUT / 'puck-reference.mp3')
    print('Comparison ready: ' + str(OUT / 'index.html'), flush=True)


if __name__ == '__main__':
    main()
