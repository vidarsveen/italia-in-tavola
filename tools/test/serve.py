"""Serve the project locally with byte ranges so audio seeking matches production.
Run python tools/test/serve.py (port 8766). Stop with Ctrl+C.
"""
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
import os,re
class Handler(SimpleHTTPRequestHandler):
 def send_head(self):
  path=self.translate_path(self.path)
  value=self.headers.get('Range','')
  if not value or not os.path.isfile(path): return super().send_head()
  match=re.fullmatch(r'bytes=(\d+)-(\d*)',value)
  if not match: return super().send_head()
  size=os.path.getsize(path); start=int(match[1]); end=min(int(match[2]) if match[2] else size-1,size-1)
  if start>=size or end<start:
   self.send_error(416);return None
  f=open(path,'rb');f.seek(start);self.remaining=end-start+1
  self.send_response(206);self.send_header('Content-Type',self.guess_type(path))
  self.send_header('Content-Length',str(self.remaining));self.send_header('Accept-Ranges','bytes')
  self.send_header('Content-Range',f'bytes {start}-{end}/{size}');self.end_headers()
  return f
 def copyfile(self,src,dst):
  remain=getattr(self,'remaining',None)
  if remain is None:return super().copyfile(src,dst)
  while remain>0:
   block=src.read(min(remain,65536))
   if not block:break
   dst.write(block);remain-=len(block)
  del self.remaining
if __name__ == '__main__':
 from pathlib import Path
 os.chdir(Path(__file__).resolve().parents[2])
 ThreadingHTTPServer(('127.0.0.1',8766),Handler).serve_forever()
