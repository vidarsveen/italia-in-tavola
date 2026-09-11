"""Norwegian text-to-speech from the National Library of Norway.

NbAiLab publishes a VoxCPM2 model fine-tuned on Norwegian (NbAiLab/nb-tts-voxcpm2-voices-2607)
and runs it as a public Hugging Face Space. Unlike every multilingual model, this one was built
for Bokmål, so its pitch accent — the tonelag that separates «bønder» from «bønner» — is native
rather than borrowed from English prosody.

Two voices, both Oslo: «Kvinne · Oslo» and «Mann · Oslo». Three paces: Rolig, Normal, Rask.
The Space splits long text at sentence boundaries itself and returns 48 kHz wav.

It is a shared, queued GPU, not an API: a minute of audio can take several minutes wall clock
and there is no uptime promise. Fine for auditioning a voice, not something to pin a 160-file
production run on without mirroring the model locally.

    python tools/nbtts.py "Kjører du sørover fra Torino …" --out sample.mp3
    python tools/nbtts.py --sample --pace Rolig        # the voicelab passage, both voices
"""
import os, shutil, subprocess, sys, time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts

SPACE = 'NbAiLab/nb-tts-voxcpm2-voices-2607-demo'
MODEL = 'NbAiLab/nb-tts-voxcpm2-voices-2607'
VOICES = ['Kvinne · Oslo', 'Mann · Oslo']
PACES = ['Rolig', 'Normal', 'Rask']
_client = None


def client():
    global _client
    if _client is None:
        try:
            from gradio_client import Client
        except ImportError:
            sys.exit('pip install gradio_client')
        _client = Client(SPACE, verbose=False)
    return _client


def speak_to_file(text, dst, voice='Kvinne · Oslo', pace='Normal', bitrate='48k'):
    """Synthesise and transcode to mp3 so it sits beside the other voicelab clips."""
    t0 = time.time()
    out = client().predict(text=text, voice=voice, pace=pace, api_name='/synthesize')
    wav = out[0] if isinstance(out, (list, tuple)) else out
    status = out[1] if isinstance(out, (list, tuple)) and len(out) > 1 else ''
    os.makedirs(os.path.dirname(os.path.abspath(dst)) or '.', exist_ok=True)
    if dst.lower().endswith('.wav'):
        shutil.copy(wav, dst)
    else:
        subprocess.run([tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', wav, '-ac', '1',
                        '-b:a', bitrate, '-codec:a', 'libmp3lame', dst], check=True)
    return {'path': dst, 'voice': voice, 'pace': pace, 'model': MODEL, 'cost': 0.0,
            'seconds': tts.duration(dst), 'bytes': os.path.getsize(dst),
            'wall': round(time.time() - t0, 1), 'status': status.replace('\n', ' ')[:200]}


if __name__ == '__main__':
    a = sys.argv[1:]
    def opt(n, d=None):
        return a[a.index(n) + 1] if n in a else d
    pace = opt('--pace', 'Normal')
    if '--sample' in a:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        import voicelab
        text = voicelab.sample(opt('--region', 'lazio'), int(opt('--lesson', '1')), 'no',
                               int(opt('--chars', '850')))
        for voice in VOICES:
            name = 'nb-%s-%s' % (voice.split()[0].lower(), pace.lower())
            dst = os.path.join(voicelab.OUT, f'no-{name}.mp3')
            print(f'  {voice} · {pace} …', end='', flush=True)
            try:
                info = speak_to_file(text, dst, voice=voice, pace=pace)
                print(f' {info["seconds"]}s in {info["wall"]:.0f}s -> {dst}')
            except Exception as e:
                print(f' FAILED: {str(e)[:160]}')
    else:
        text = a[0]
        if os.path.exists(text):
            text = open(text, encoding='utf-8').read()
        print(speak_to_file(text, opt('--out', 'nbtts.mp3'), opt('--voice', VOICES[0]), pace))
