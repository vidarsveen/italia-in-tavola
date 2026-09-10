# Italia in Tavola — from prototype to real course navigation

Status: prototype 2 (3D map + module summaries) plus one region, Lazio, built out with real reading lessons and photographs. Mobile first from this round on.

## 1. What "real navigation" means here

The map is the table of contents. Every screen the learner sees must be reachable by URL, by the map, and by the previous/next buttons, and progress must survive a reload. Concretely:

- **Routes.** `#/` map, `#/IT-62` region module, `#/IT-62/3` lesson 3 of Lazio. Browser back works, links are shareable, a lesson can be sent to a student directly.
- **Three levels.** Map (orient) → region sheet (choose) → reader (learn). Never more than one tap between them.
- **Progress.** Lessons read, regions completed, overall percentage; stored locally now, synced to an account later (see 6).
- **Mobile first.** Phone layout is the default: bottom sheet, swipeable region strip, thumb-reach controls, 17px reading type. Desktop widens it into rail + side panel.

## 2. Content model (done for Lazio, to repeat for 19 regions)

```
content/<region>.js  → window.READINGS['IT-62'] = [ {title, minutes, hero, blocks...}, ... ]
assets/<region>/*.jpg + credits.json (author, licence, source link)
```

- Course text lives in content files, not in the app. A writer edits `content/lazio.js` without touching Three.js.
- Each lesson: hero photo, 500–800 words, key-facts box, "in the glass" table for wine lessons, figures with captions and credits, 3-point recap, next lesson.
- Images are Creative Commons or public domain from Wikimedia Commons, downsized to ≤1200px JPEG. Credits are shown under each photo and on a credits panel. Replace with commissioned photography region by region when available.
- `build.py` inlines content and images into `dist/italia-course.html` for single-file hosting (the artifact); the source tree stays modular.

## 3. Map and landmark quality

Done this round: peaks no longer spawn on top of landmarks; Lazio landmark rebuilt at high detail (elliptical Colosseum with three arcades, attic, broken south wall, arena and hypogeum; St Peter's with colonnade; Castelli Romani crater hill with vineyards).

Next, in order of visual payoff:
1. Rebuild the other 19 landmarks to the Colosseum standard (2–3 hours each with primitives) or replace with lightweight glTF models (Draco compressed, <300 KB each) loaded lazily when the camera is within range.
2. Real terrain: sample a 30 m DEM (Copernicus) into a 512×512 heightmap for the peninsula, displace the region meshes, drop the placeholder cone peaks.
3. Coast bevel and sea foam line along the shoreline shader; rivers (Po, Tiber, Arno) as simple polylines.
4. Level of detail: labels and vineyard rows only when zoomed in; instanced trees for the Alps and Apennines.
5. Night/day toggle is not needed; keep the single dusk atlas look.

## 4. Mobile experience

- Bottom sheet with three states (peek / half / full) driven by drag; region strip above it; map interactions are one-finger orbit, two-finger pinch, tap to select.
- Reader is a full-screen page with a scroll-progress bar, back-to-region, and next-lesson at the end.
- Targets ≥ 44 px, safe-area insets for notched phones, `prefers-reduced-motion` respected.
- Performance budget: first render < 3 s on a mid-range phone. Pixel ratio capped at 2, shadow map 2048 on mobile, texture-free region meshes.

## 5. Course features after reading

- **Tasting exercises**: a guided tasting card per wine (appearance, nose, palate) with the learner's own notes saved locally.
- **Recap questions** (3 per lesson, immediate feedback) once the reading pass is validated.
- **Glossary** of terms (DOCG, appassimento, quinto quarto…) opened inline from the text.
- **Itinerary mode**: North → South tour that unlocks regions in order for a cohort course, versus free exploration.
- **Audio**: optional narration per lesson for commuting learners.

## 6. Platform

- Accounts and progress sync (a small backend or an LMS via SCORM/xAPI export).
- Analytics: which lessons are read to the end, where readers drop.
- Localisation: Norwegian and Italian versions of the content files; the app already reads from a content object, so translation is a content task.
- Accessibility: keyboard navigation of the region list, screen-reader labels for the map (the list is the accessible equivalent), captions on every image.

## 6b. Hosting budget (learned 2026-09-09)

The hosted single-file page has a 16 MB ceiling and everything must be inlined (no external files). Two regions with
bilingual narration fit only with Opus at 12 kbit/s (~500 KB per lesson) and photos at ~100 KB. A third region with
audio will not fit. The document store is not an option for audio: 256 KB per document and, more importantly, declaring
it makes the artifact organisation-internal, so the link could not be shared outside. From region three onwards the
course needs its own static hosting (GitHub Pages, Netlify, any web server): the source tree already runs as plain
files with full-quality MP3s and no size limit.

## 6c. Status 2026-09-09, evening

Lazio, Piemonte and Toscana complete (text EN/NO, photos, narration EN/NO). The hosted preview inlines narration for Lazio and Piemonte only; Toscana's narration is in the project and in `site/` (run `python tools/make_site.py`), and the hosted page offers the browser voice for Toscana. Next regions in order: Veneto, Campania, Sicilia.

## 6d. Status 2026-09-09, later

Veneto (IT-34) complete: text EN/NO, 14 photos, narration EN/NO. The hosted page is now at 15.9 MB of the 16 MB
ceiling with photos for four regions and narration for two, so Veneto's photos were encoded at 720 px and lower
JPEG quality than the earlier regions. The next region cannot add photos to the hosted page without freeing space
(options: drop Piemonte from `HOSTED_AUDIO`, or re-encode the older regions' photos the same way). Veneto's narration
plays from `site/` and from the source tree; the hosted page offers the browser voice. Next: Campania, Sicilia.

## 6e. Status 2026-09-09, Campania

Campania (IT-72) complete: text EN/NO, 18 photos, narration EN/NO. To make room, `HOSTED_AUDIO` in build.py was cut
from ['lazio','piemonte'] to ['lazio'], which took the hosted page from 15.9 MB to 12.5 MB with all five regions'
photos. Piemonte now falls back to the browser voice on the hosted page; its full narration is unchanged in the
source tree and in `site/`. Roughly 3.5 MB of headroom remains, about four more regions of photos, after which
Lazio's narration is the last thing left to drop. Next: Sicilia.

## 6f. Status 2026-09-09, Sicilia

Sicilia (IT-82) complete: text EN/NO, 16 photos, narration EN/NO. Hosted page 13.6 MB of 16 MB, six regions of
photos and narration for Lazio only. Roughly 2.4 MB of headroom, about three more regions of photos; after that
Lazio's narration (about 4.5 MB) is the last thing to drop, which would buy the remaining eleven regions.
Next: Lombardia, Emilia-Romagna, Puglia.

## 6g. Status 2026-09-09, Lombardia and the Norwegian review

All six earlier Norwegian editions were language-reviewed (every reading changed, all 24 Norwegian narrations
regenerated); the rules learned are in CLAUDE.md §4b. Lombardia (IT-25) complete: text EN/NO written to those
rules, 19 photos, narration EN/NO. Hosted page 14.8 MB of 16 MB with seven regions of photos and Lazio's
narration. Emilia-Romagna's photos (about 1 MB inlined) will not fit beside Lazio's narration, so the next region
is the point where `HOSTED_AUDIO` in build.py becomes empty and the hosted page relies on the browser voice
everywhere; full narration stays in `site/`. Next: Emilia-Romagna, Puglia.

## 6h. Status 2026-09-09, Emilia-Romagna and the live site

The course now deploys to GitHub Pages (https://vidarsveen.github.io/italia-in-tavola/) from the public repo on every
push; the artifact is a 10.4 MB preview with `HOSTED_AUDIO = []`. Emilia-Romagna (IT-45) complete: text EN/NO,
19 photos, narration EN/NO. Eight regions done. Next: Puglia, then the remaining eleven in batches.

## 6i. Status 2026-09-09, Puglia

Puglia (IT-75) complete: text EN/NO, 19 photos, narration EN/NO. Nine regions done; preview 11.8 MB with no
inlined audio, so about 1.2 MB of photos per region leaves room for the remaining eleven only if photos are
encoded a little smaller (about 0.6 MB per region: 620 px, quality 45). Next: the remaining eleven.

## 6j. Status 2026-09-09, Trentino-Alto Adige

build.py now re-encodes photos for the preview (620 px, q45), so the artifact is 7.9 MB with ten regions and all
twenty will fit. The Norwegian review skill (`/norsk-review`, tools/review_no.py) is part of the recipe and has
been run on all ten regions. Trentino-Alto Adige (IT-32) complete. Ten regions done; ten to go.

## 6k. Status 2026-09-09, Friuli-Venezia Giulia and Liguria

Built as a pair by two parallel workers (each region end to end, including the Norwegian review and narration), with
the parent pre-wiring both into italia-course.html and doing build, tests, docs and push. Twelve regions done.
Next pairs: Umbria + Marche, Abruzzo + Sardegna, Calabria + Basilicata, Molise + Valle d'Aosta.

## 6l. Status 2026-09-10, all twenty regions complete

Umbria, Marche, Abruzzo, Sardegna, then Calabria, Basilicata, Molise and Valle d'Aosta were built in two batches
of four parallel workers, each region end to end including the Norwegian review and narration. The course is now
complete: 20 regions, 80 readings in each language, 348 photos, 160 narration files.

Two checks were strengthened by what the workers found. `review_no.py --check` now catches malformed and
unbalanced HTML tags, after a stray guillemet in a closing tag survived the JavaScript parse; and `--stale` now
requires a manifest entry of plausible length, after it reported "none" while a narration was still being written.

Workers corrected several errors in their own briefs, which is worth remembering when writing them: the 1922
national park is Abruzzo, Lazio e Molise (Gran Sasso's is 1991), Molise DOC is 1988, San Pietro Avellana is in
Molise, Gaglioppo is related to Sangiovese rather than Greek, and Cirò Classico became Calabria's first DOCG in
2023. The Marche intro no longer asserts the thirteen-fish brodetto, which nothing supports.

Preview photos are re-encoded by build.py at 520 px / q40 (`PREVIEW_PX`, `PREVIEW_Q`), which keeps the artifact
at 11.0 MB with all twenty regions. The live site keeps the 720 px originals.

Next: the course features rather than more regions. Recap questions, tasting cards, a glossary, capital-city
labels with collision avoidance, and progress that syncs across devices.

## 6m. Status 2026-09-10, recap questions

Every reading now ends with three multiple-choice questions that explain themselves after answering: 480
questions across both languages, written by four parallel workers from the readings themselves, with the format
frozen in docs/quiz-format.md and checked by tools/quizcheck.py. Answer positions are spread rather than
clustered, and no question is repeated.

Remaining roadmap: tasting cards, a glossary, capital-city labels with collision avoidance, and progress that
syncs between devices. Licensed narration (Azure Speech, about $12 for the whole course) would also replace the
unlicensed edge-tts route before this is published widely.

## 6n. Status 2026-09-10, tasting cards, glossary and map labels

All three shipped. Tasting cards: 89 wines, both languages, 31 lifted from the readings and 58 written by three
parallel workers. Glossary: 48 terms, linked on first mention only. Map: capital-city labels and collision
avoidance.

Three content bugs were found by the work rather than by testing. Vernaccia di Oristano was classified as a
sweet wine on the Sardegna sheet when the course's own reading describes it as dry, oxidative and flor-aged; it
is now white. Two wines already had tables under a different name (Romagna Sangiovese Superiore, Montefalco
Sagrantino) and were copied rather than paraphrased. My own glossary spec was wrong: one key cannot match two
languages, so terms carry per-language surface forms.

Remaining roadmap: progress that syncs between devices, and licensed narration (Azure Speech, about $12 for the
whole course) to replace the unlicensed edge-tts route before publishing widely.

## 6o. Status 2026-09-10, map framing and the first recipes

**Framing.** The portrait overview was aimed at world X = 9 (longitude 13.8) by two constants that answered to
nothing — not screen size, not orientation, and `resize` never re-ran them, so a rotation left the camera where
the previous orientation had put it. Italy's centre of mass is at X ≈ −4, so on a phone the north-west was
clipped off the left edge while a wedge of empty sea sat on the right, and the map floated small in the upper
half. `HOME()` now calls a `fitView` routine that projects every coastline vertex of the twenty regions and
iterates target and distance until they are centred in the area the title bar, region strip and sheet leave
free; `resize` and `orientationchange` re-frame. The capitals threshold moved to `dist < 200` on wide screens
so desktop keeps the city names it had at its old, closer home distance.

`tools/test/shot3.sh` turned out to be unreliable and is why this was hard to see: in `--headless=new`,
`--window-size=390,844` gives the page a 500×688 window and then crops the capture, so every screenshot of a
layout that reads `window.innerWidth` was of the wrong screen. `tools/test/shot.py` sets the viewport through
CDP instead.

**Recipes.** The cookbook the course has been missing: `#/recipes`, portions that rescale, both languages in
one data file so a quantity is written once. Lazio first, with the four Roman pastas. Two depths were written for
carbonara and compared on a phone; the long form won, so every recipe carries a headnote, notes and variations
as well as its ingredients and method.
Contract in `docs/recipe-format.md`, checker `tools/recipecheck.py`, flow test `tools/test/cooktest.py`,
handover in CLAUDE.md §14. Gricia had no photograph in the course; one was added from Commons.

Two latent bugs surfaced on the way. `review_no.py --check` set its `ok` flag *after* the photo audit, so a
missing or uncredited photo printed a warning and still passed; and the same audit did not know about recipe
heroes, so it called a recipe's own photo unused — the exact shape of the mistake that once deleted photos
from two regions.

Next: the remaining regions in batches of four parallel workers, as with the readings.

## 7. Suggested order of work

1. Validate the Lazio reading format with a few learners on phones (this round).
2. Write Toscana, Piemonte, Veneto, Campania, Sicilia next (the five regions most learners know).
3. Rebuild those five landmarks to the new standard while the text is written.
4. Add tasting cards and recap questions to all six regions.
5. Remaining 14 regions in batches of four to five.
6. Accounts and sync last, once the content is stable.

---

## 8. The map, rethought (added 2026-09-09)

**Diagnosis.** The current map fails as navigation for four reasons: borders are thin dark lines on similar earth tones and vanish at the oblique camera angle; the mountains and volcanoes are placeholder cones, so the terrain tells the learner nothing; twenty landmark models, vineyard rows, trees and labels all compete at the same visual weight; and the low camera angle foreshortens the south, so Sicily and Calabria are small and hard to hit.

**Direction: a real relief map you can tilt.** Replace the flat extruded regions and cone mountains with terrain built from real elevation data, draped with a baked shaded-relief texture, and put the region boundaries on top as a proper cartographic layer. See `docs/relief-preview.jpg` for the baked look (300 m elevation tiles, multi-directional hillshade, hypsometric tint, bathymetry, white-cased borders).

Data: AWS Terrain Tiles (Terrarium PNG, free, no key) at zoom 8 give ~300 m/pixel over Italy; already downloaded to `docs/dem_italy_z8.npy`. Vertical exaggeration 2–2.5× as on printed relief maps.

Rendering (Three.js, works inside the single-file page):
1. Terrain mesh: a 512×512 grid (256×256 on phones) displaced from a 16-bit heightmap; ~1 MB of data.
2. Relief texture: baked offline in Python (hillshade + tint + sea), one 2048² JPEG, ~600 KB. Countries outside Italy desaturated and darkened so Italy is the figure and the rest is ground.
3. Region layer: polygons rasterised to a second texture at runtime: a soft fill per region (four families for North/Centre/South/Islands) plus 2-px borders with a light casing. Selected region brighter, hovered region lifted, everything else dimmed while a module is open.
4. Region-ID texture: each pixel stores which region it belongs to. Picking becomes a texture lookup at the ray hit, exact even on slopes; highlights change with a shader uniform, no repaint.
5. Labels as HTML overlays projected from 3D (crisp Fraunces with a halo, collision avoidance, capital dots and names), not canvas sprites.
6. Landmarks as pins at overview (illustrated badge with the landmark's silhouette) and the 3D models only when a region is focused. Volcanoes need no model: they are in the terrain; add a faint smoke plume on Etna and Stromboli.
7. Camera: near top-down by default (about 20° tilt) for legibility, north-up on phones, tilt-able to 3D by drag; per-region framing computed from the region's bounding box so every region fills the free part of the screen above the sheet.
8. Lighting: fixed north-west hillshade in the texture plus a soft real-time key light for the models; atmospheric haze toward the horizon; no dynamic shadows on the terrain (they fight the hillshade).

**Alternative for the production site:** MapLibre GL JS with 3D terrain, a custom vector basemap (Protomaps PMTiles, self-hosted, no API keys) and the regions as GeoJSON layers. This is the "real map app" route: pan/zoom to street level, real place labels, terrain from the same data. It cannot run inside the hosted single-file page (map tiles are external), so it belongs to the self-hosted deployment. The Three.js relief above can ship in both.

**Status 2026-09-09: built.** Items 1–8 are in the app; `docs/italia-course.v2-extruded.html` keeps the previous map for reference. Still open: capital-city labels, label collision avoidance, an Etna smoke plume that reads at the overview, and the MapLibre route for the self-hosted site.

**Effort (original estimate).** Bake pipeline ½ day; terrain + region layer + picking 1 day; labels, pins, camera presets ½ day; mobile tuning and tests ½ day. About three days to a map that is both beautiful and usable as navigation.
