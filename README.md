# Globe Trotter

A Mario Galaxy-style 3D browser game: run around a tiny cartoon Earth, jump on mountains,
collect coins and visit 16 famous landmarks (Eiffel Tower, Big Ben, Pyramids, Taj Mahal,
Mount Fuji, Sydney Opera House, Statue of Liberty, ...) to stamp your passport.

## Play

Open `index.html` in any modern browser (Chrome, Edge, Firefox). No build step, no server needed.
Three.js is loaded from a CDN with `three.min.js` in this folder as an offline fallback.

| Key | Action |
| --- | --- |
| W A S D / arrows | walk (relative to the camera) |
| Space | jump |
| Q / E or mouse drag | rotate camera |
| Mouse wheel | zoom |
| P | show / hide passport |

## Debug URL parameters

`index.html?autostart&at=48,2` skips the title screen and drops the player at a latitude/longitude.
`&keys=KeyW,Space` holds keys down, `&debug` logs telemetry to the console, `&steps=20` runs 20 physics
steps per frame (used for automated testing).

---

# Italia in Tavola

A mobile-first 3D relief map of Italy that works as the navigation for a course on Italian regions, wine and food.
Real terrain from 300 m elevation data (AWS Terrain Tiles), a baked shaded-relief texture, real region boundaries
(simplified from the openpolis ISTAT GeoJSON) drawn as a cased cartographic layer, a pin per region at the overview
and a landmark model when a region is focused. Lazio, Piemonte, Toscana, Veneto, Campania, Sicilia and Lombardia are fully built out with four illustrated, narrated readings each in English and Norwegian; the other 13
regions have module summaries with lesson titles. See `PLAN.md` for the roadmap from prototype to production.

## Files

| Path | What it is |
| --- | --- |
| `italia-course.html` | the app (map, region sheet, reader, routing). Loads `content/*.js` and `assets/` at runtime. |
| `content/<region>.js` | reading content per region (English): four lessons, photo captions, credits. Lazio, Piemonte, Toscana, Veneto, Campania, Sicilia and Lombardia so far. |
| `content/<region>.no.js` | the same readings in Norwegian (bokmål). |
| `content/course.no.js` | Norwegian region summaries (intro, landmark, pairing, lesson titles) for all 20 regions. |
| `assets/<region>/*.jpg` | photographs (Wikimedia Commons, CC / public domain), `credits.json` lists author and licence. |
| `tools/bake_terrain.py` | bakes `assets/terrain/height.png` (16-bit heightmap), `relief.jpg` (shaded relief) and `meta.json` from `docs/dem_italy_z8.npy`. |
| `assets/terrain/` | the baked terrain assets (about 800 KB). |
| `build.py` | inlines content and images into `dist/italia-course.html`, a single file for hosting. |
| `dist/italia-course.html` | built single-file version for the hosted preview (16 MB ceiling: narration inlined only for the regions in `HOSTED_AUDIO` in build.py). |
| `tools/make_site.py` → `site/` | the full site as plain files with all narration at full quality, ready to upload to any static host. |

## Using it

- Map: one finger or left-drag pans, pinch or scroll zooms, the ◭ button (or right/alt-drag) tilts the relief into 3D. Taps on the sea just off a coast snap to the nearest region.
- Phone: tap a region or its pin, or a chip in the strip; the module opens as a bottom sheet (tap or drag the header to expand). Tap a lesson to read it full screen.
- Desktop: the region list is a left rail, the module a right panel. `N` / `P` or arrow keys step through regions, `Esc` goes back.
- Routes: `#/IT-62` opens Lazio, `#/IT-62/3` opens its third reading. Debug: `?region=IT-62&lesson=3&instant&scroll=2000`.
- Progress is stored in the browser. Reaching the recap at the end of a reading marks it as read; the button at the end toggles it.

## Languages

The EN / NO switch in the top bar changes the interface, the region summaries and the readings. The choice is remembered in the browser;
the first visit follows the browser language. `?lang=no` forces Norwegian for a link. Interface strings live in the `I18N` object in
`italia-course.html`; region text in `content/course.no.js`; readings in `content/<region>.no.js`, which share photos and credits with the English file.

## Listen instead of reading

Every reading has a **Listen** button under its summary. It plays a narration generated from the lesson text with a neural
voice (British English or Norwegian bokmål), in a player with play/pause, scrubbing, ±15 s and speed. Playback position is
remembered per lesson, finishing the audio marks the lesson as read, and lock-screen controls work on phones. If a region has
no narration file yet, the button falls back to the browser's own voice for that language.

Generate or refresh narration with `python tools/narrate.py <region>` (needs `edge-tts` and `imageio-ffmpeg`; `--only no-3`
regenerates one file), then `python tools/opus.py <region>` to make the small Opus versions. The self-hosted page plays the
full-quality MP3s; the single-file build inlines the Opus files (about 500 KB per lesson). Browsers without Opus-in-Ogg
support (Safari before iOS 18.4) get the same packets repackaged in the page into Apple's CAF container, verified
byte-identical to ffmpeg's muxer. The voices come from Microsoft's neural text-to-speech; for production, generate the same
scripts through a licensed service (Azure Speech, ElevenLabs, OpenAI TTS) or record a human narrator.

## Adding a region's readings

1. Create `content/<region>.js` following `content/lazio.js` (`window.READINGS['IT-xx'] = {credits, lessons:[...]}`).
2. Put photos in `assets/<region>/` and add the folder to `ASSET_DIRS` in `italia-course.html`.
3. Add a `<script src="content/<region>.js">` tag next to the Lazio one, then run `python build.py`.
