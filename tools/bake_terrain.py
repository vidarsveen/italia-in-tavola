"""Bake the terrain assets for the relief map.

Input : docs/dem_italy_z8.npy  (Terrarium elevation mosaic, Web Mercator zoom 8, tiles x 132-141, y 88-100)
        docs/regions.min.json  (simplified region polygons, lon/lat)
Output: assets/terrain/height.png   16-bit elevation packed in R,G (value = elevation + 6000 m), 512 px wide
        assets/terrain/relief.jpg   shaded relief with hypsometric tint and bathymetry, 2048 px wide,
                                    land outside Italy desaturated and darkened
        assets/terrain/meta.json    crop origin/size in zoom-8 pixels and the encoding offset

Usage: python tools/bake_terrain.py
"""
import json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Z, X0, Y0 = 8, 132, 88
N = 2 ** Z * 256
OUT = os.path.join(ROOT, 'assets', 'terrain'); os.makedirs(OUT, exist_ok=True)
LON0, LON1, LAT0, LAT1 = 6.0, 19.2, 47.5, 36.3     # crop box (west, east, north, south)
OFFSET = 6000

def merc(lon, lat):
    x = (lon + 180) / 360 * N - X0 * 256
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * N - Y0 * 256
    return x, y

dem = np.load(os.path.join(ROOT, 'docs', 'dem_italy_z8.npy'))
cx0, cy0 = merc(LON0, LAT0); cx1, cy1 = merc(LON1, LAT1)
cx0, cy0, cx1, cy1 = int(cx0), int(cy0), int(cx1), int(cy1)
dem = dem[cy0:cy1, cx0:cx1]
H, W = dem.shape
print('crop', W, 'x', H, 'px; elevation', dem.min(), '..', dem.max())

# ---- Italy mask from the region polygons (dilated a little so coasts keep their colour)
regions = json.load(open(os.path.join(ROOT, 'docs', 'regions.min.json'), encoding='utf-8'))
mask = Image.new('L', (W, H), 0); d = ImageDraw.Draw(mask)
for R in regions:
    for ring in R['rings']:
        pts = [(merc(lo, la)[0] - cx0, merc(lo, la)[1] - cy0) for lo, la in ring]
        d.polygon(pts, fill=255)
mask = mask.filter(ImageFilter.MaxFilter(9))
italy = np.asarray(mask) > 127

# ---- shaded relief
land = dem > 0
mpp = 40075016.686 * math.cos(math.radians(42)) / N
gy, gx = np.gradient(dem * 2.2, mpp)
slope = np.arctan(np.hypot(gx, gy)); aspect = np.arctan2(-gx, gy)
def hs(az, alt):
    az, alt = math.radians(az), math.radians(alt)
    return np.clip(np.sin(alt) * np.cos(slope) + np.cos(alt) * np.sin(slope) * np.cos(az - aspect), 0, 1)
shade = 0.55 * hs(315, 40) + 0.25 * hs(270, 35) + 0.2 * hs(0, 50)
stops = [(0, (124, 162, 98)), (250, (166, 188, 110)), (700, (202, 186, 124)), (1400, (180, 148, 108)), (2300, (152, 142, 132)), (2900, (242, 244, 246))]
img = np.zeros((H, W, 3), dtype=np.float32); e = np.clip(dem, 0, 3400)
for i in range(len(stops) - 1):
    (e0, c0), (e1, c1) = stops[i], stops[i + 1]
    t = np.clip((e - e0) / (e1 - e0), 0, 1)[..., None]; m = ((e >= e0) & (e < e1))[..., None]
    img = np.where(m, np.array(c0) * (1 - t) + np.array(c1) * t, img)
img = np.where((e >= 2900)[..., None], np.array(stops[-1][1], dtype=np.float32), img)
img = img * (0.5 + 0.65 * shade[..., None])
# outside Italy: quieter
gray = img @ np.array([0.3, 0.59, 0.11]); gray = np.repeat(gray[..., None], 3, axis=2)
outside = (land & ~italy)[..., None]
img = np.where(outside, (0.35 * img + 0.65 * gray) * 0.82, img)
# sea with bathymetry and a lighter shelf
depth = np.clip(-dem, 0, 3000) / 3000
sea = np.array([76, 140, 180]) * (1 - depth[..., None]) + np.array([20, 54, 94]) * depth[..., None]
shelf = np.clip(-dem, 0, 200) / 200
sea = sea * (1 - 0.15 * (1 - shelf)[..., None]) + np.array([205, 224, 232]) * 0.15 * (1 - shelf)[..., None]
img = np.where(land[..., None], img, sea)
relief = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
RW = 2048; relief = relief.resize((RW, int(RW * H / W)), Image.LANCZOS)
relief.save(os.path.join(OUT, 'relief.jpg'), 'JPEG', quality=82, optimize=True, progressive=True)

# ---- heightmap (sea clamped to 0 so the mesh is flat at sea level)
HW = 512; HH = int(HW * H / W)
h = Image.fromarray(np.clip(dem, 0, None).astype(np.float32)).resize((HW, HH), Image.BILINEAR)
v = (np.asarray(h) + OFFSET).astype(np.int32)
rgb = np.zeros((HH, HW, 3), dtype=np.uint8); rgb[..., 0] = v >> 8; rgb[..., 1] = v & 255
Image.fromarray(rgb).save(os.path.join(OUT, 'height.png'), 'PNG', optimize=True)

json.dump({'z': Z, 'tileX0': X0, 'tileY0': Y0, 'cropX': cx0, 'cropY': cy0, 'cropW': W, 'cropH': H, 'heightW': HW, 'heightH': HH, 'offset': OFFSET,
           'bounds': {'west': LON0, 'east': LON1, 'north': LAT0, 'south': LAT1}, 'maxElevation': float(dem.max())},
          open(os.path.join(OUT, 'meta.json'), 'w'), indent=1)
for f in ('relief.jpg', 'height.png'):
    print(f, os.path.getsize(os.path.join(OUT, f)) // 1024, 'KB')
