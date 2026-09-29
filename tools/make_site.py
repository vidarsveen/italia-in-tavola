"""Assemble a ready-to-upload static site in site/ (no size limit, full-quality audio).

Copies italia-course.html (as index.html), three.min.js, content/, assets/ (photos, terrain, audio MP3 + manifest.js)
and the docs preview. Upload the site/ folder to any static host (GitHub Pages, Netlify Drop, Cloudflare Pages,
or an ordinary web server) and open index.html. Run build.py first so the audio manifest.js files exist.

Usage: python tools/make_site.py
"""
import os, shutil
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'site')
if os.path.exists(OUT): shutil.rmtree(OUT)
os.makedirs(OUT)
shutil.copy(os.path.join(ROOT, 'italia-course.html'), os.path.join(OUT, 'index.html'))
shutil.copy(os.path.join(ROOT, 'three.min.js'), os.path.join(OUT, 'three.min.js'))
shutil.copytree(os.path.join(ROOT, 'content'), os.path.join(OUT, 'content'))
def keep(dirname, files):
    # skip the low-bitrate variants and scripts' text dumps; keep mp3, ogg, manifest.js, jpg, png, json
    return [f for f in files if f.endswith(('.lo.mp3', '.txt', 'manifest.json'))]
shutil.copytree(os.path.join(ROOT, 'assets'), os.path.join(OUT, 'assets'), ignore=keep)

# Publish only the intro's runtime assets, not capture tools or review outputs.
intro_src = os.path.join(ROOT, 'previews', 'mobile-intro')
intro_out = os.path.join(OUT, 'previews', 'mobile-intro')
os.makedirs(intro_out, exist_ok=True)
for name in ('index.html', 'credits.html', 'bushwick-tarantella-20s.mp3', 'AUDIO-LICENSE.md'):
    shutil.copy(os.path.join(intro_src, name), intro_out)
shutil.copytree(os.path.join(intro_src, 'screens'), os.path.join(intro_out, 'screens'),
                ignore=lambda dirname, files: [f for f in files if '-wine.' in f])
total = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(OUT) for f in fs)
print('site/ ready:', f'{total/1e6:.1f} MB')
