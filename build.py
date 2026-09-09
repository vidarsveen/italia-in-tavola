"""Build the single-file distribution of Italia in Tavola.

Reads italia-course.html, inlines every content/*.js and assets/**/*.js module referenced by a
<script src="..."> tag, every assets/<dir>/<name>.jpg image and every assets/audio/<dir>/<name>.lo.mp3
narration file as data URIs, and writes dist/italia-course.html. The source tree stays modular;
the dist file is what gets hosted as one page. The low-bitrate audio keeps the page under the
hosting size limit; the self-hosted source tree uses the full-quality .mp3 files.
"""
import base64, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'italia-course.html')
OUT = os.path.join(ROOT, 'dist', 'italia-course.html')
NL = chr(10)
HOSTED_AUDIO = []   # regions whose narration is inlined in the single-file page (16 MB ceiling).
# Piemonte was dropped when Campania was added: each region's Opus narration costs ~4.5 MB inlined, photos only ~0.8 MB.
# Every region's full-quality narration is in site/ (tools/make_site.py); the hosted page offers the browser voice instead.

html = open(SRC, encoding='utf-8').read()

# audio manifests: written from manifest.json so the source page can load them as plain scripts
audio_dir = os.path.join(ROOT, 'assets', 'audio')
if os.path.isdir(audio_dir):
    for d in os.listdir(audio_dir):
        mp = os.path.join(audio_dir, d, 'manifest.json')
        if not os.path.exists(mp):
            continue
        m = json.load(open(mp, encoding='utf-8'))
        js = 'window.AUDIO_MANIFEST = Object.assign(window.AUDIO_MANIFEST || {}, ' + json.dumps({f'{d}:{k}': v for k, v in m.items()}) + ');' + NL
        open(os.path.join(audio_dir, d, 'manifest.js'), 'w', encoding='utf-8').write(js)

def inline_script(m):
    path = os.path.join(ROOT, m.group(1))
    if m.group(1).startswith('assets/audio/') and m.group(1).split('/')[2] not in HOSTED_AUDIO:
        return ''   # no manifest -> the page offers the browser voice for this region
    if not os.path.exists(path):
        print('missing script', m.group(1), file=sys.stderr)
        return ''
    return '<script>' + NL + open(path, encoding='utf-8').read() + NL + '</script>'
html = re.sub(r'<script src="((?:content|assets)/[\w./-]+\.js)"></script>', inline_script, html)

PREVIEW_PX, PREVIEW_Q = 620, 45   # photos are re-encoded smaller for the single-file preview (16 MB cap); site/ keeps the originals

def b64(path, mime):
    data = open(path, 'rb').read()
    if mime == 'image/jpeg':
        from PIL import Image
        import io as _io
        im = Image.open(_io.BytesIO(data)).convert('RGB')
        if max(im.size) > PREVIEW_PX:
            im.thumbnail((PREVIEW_PX, PREVIEW_PX))
        buf = _io.BytesIO(); im.save(buf, 'JPEG', quality=PREVIEW_Q, optimize=True, progressive=True)
        if buf.tell() < len(data): data = buf.getvalue()
    return f'data:{mime};base64,' + base64.b64encode(data).decode('ascii')

images = {}
for d in os.listdir(os.path.join(ROOT, 'assets')):
    dd = os.path.join(ROOT, 'assets', d)
    if not os.path.isdir(dd) or d == 'audio':
        continue
    for f in os.listdir(dd):
        if f.lower().endswith('.jpg'):
            images[f'assets/{d}/{f}'] = b64(os.path.join(dd, f), 'image/jpeg')
        elif f.lower().endswith('.png'):
            images[f'assets/{d}/{f}'] = b64(os.path.join(dd, f), 'image/png')

audio = {}
if os.path.isdir(audio_dir):
    for d in os.listdir(audio_dir):
        if d not in HOSTED_AUDIO: continue
        dd = os.path.join(audio_dir, d)
        for f in os.listdir(dd):
            if f.endswith('.ogg'):
                audio[f'assets/audio/{d}/{f}'] = b64(os.path.join(dd, f), 'audio/ogg')

html = html.replace('<!--__IMAGES__-->', '<script>window.IMAGE_DATA = ' + json.dumps(images) + ';' + NL + 'window.AUDIO_DATA = ' + json.dumps(audio) + ';</script>')

os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write(html)
print('wrote', OUT, f'{os.path.getsize(OUT)/1e6:.1f} MB', f'{len(images)} images, {len(audio)} audio files inlined')
