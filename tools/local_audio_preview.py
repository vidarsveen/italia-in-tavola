"""Serve only the English audition directory, never the project or its .env."""
from functools import partial
from http.server import ThreadingHTTPServer
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tools/test'))
from serve import Handler

if __name__ == '__main__':
    folder = ROOT / 'voicelab/local-english'
    if not (folder / 'index.html').is_file():
        raise SystemExit('Generate the audition first.')
    print('English audition: http://127.0.0.1:8767/', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8767), partial(Handler, directory=str(folder))).serve_forever()
