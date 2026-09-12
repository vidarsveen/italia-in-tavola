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

## 6p. Status 2026-09-11, the recipe collection is complete

102 recipes, all twenty regions, both languages, roughly 175,000 words across the pair. Written by twenty
workers in five batches of four, one region each, against `docs/recipe-format.md` and the long-form depth the
owner chose after comparing a short and a long carbonara on a phone. Every recipe carries a headnote drawn from
its own region's reading, 8-12 steps, mechanism notes and variations.

The scope was "every cookable dish the course names". The ~30 chips left without a recipe are things you buy
rather than cook, plus six deliberate skips that say so in their own text: cannoli shells, cicchetti (a
category, not a dish), lampredotto, pane carasau, panettone and limoncello.

What made the collection worth having, beyond the recipes themselves:

**Honesty about what a kitchen can do.** Three dishes cannot be reproduced at home and say so in their own
first paragraph rather than in a footnote -- porceddu ("So this is not porceddu. It is what a kitchen can
honestly borrow from it"), porchetta and pane carasau. Bought filo for a strudel is rated "half honest".

**Honesty about photographs.** Five dishes have no free photograph anywhere on Commons. Rather than pass off
something else, the hero shows what the dish is built from and the caption says outright that no photograph of
it exists: the seupa, fonduta, pampanella, grilled scamorza and the goat ragu.

**Norwegian sourcing notes**, which are the part of this that could not have been translated into existence:
torrfisk is not klippfisk and only the unsalted kind whips; jarred *ansjos* in Norway is spiced sprat, so buy
sardeller; Norwegian surkal is boiled cabbage with caraway and sugar and would sweeten a jota; castrato,
farekjott and lammekjott are three different things; semulegryn is not semola rimacinata; most polenta sold
here is instant.

**The work proofread the course.** Writing a recipe against a reading turned out to be a decent audit of the
reading. It found the Piemonte reading calling bonet "the chocolate and amaretto pudding" (the liqueur) where
the Norwegian correctly said amaretti; the Abruzzo sheet claiming bears roam the Gran Sasso park while the
reading says the Marsican bear survives only in the Abruzzo, Lazio e Molise park; and five chips naming a dish
no reading describes. One flag was investigated and rejected -- the Marche brodetto's "thirteen fish" is
properly attributed to tradition and immediately qualified, so it stands.

Tooling learned the same lessons. `recipecheck` no longer regex-scrapes the COURSE object (a dish name with an
apostrophe defeated the pattern) and is now also a syntax guard on it; its cup-and-spoon rule no longer rejects
the English verb "pound"; `recipegap` audits orphan chips; `cooktest` counts against `window.RECIPES` rather
than literals that go stale every batch; and `tools/test/shot.py` replaces `shot3.sh`, which framed every
screenshot for the wrong screen.

Remaining roadmap: licensed narration (Azure Speech, about $12 for the whole course) to replace the unlicensed
edge-tts route before publishing widely, and progress that syncs between devices.

## 6q. Status 2026-09-11, the Norwegian narration re-recorded

The Norwegian edition was re-recorded in the National Library of Norway's own voice
(`NbAiLab/nb-tts-voxcpm2-voices-2607`, «Kvinne · Oslo», pace Rolig, stretched to 95%), free
and keyless through its public Space. Openings are the lesson title only; the `Nøkkelfakta`
box and the `Før du går videre` recap are no longer spoken, because read aloud they are lists
that interrupt the prose. See CLAUDE.md §16 for the tooling and the numbers.

The route there is worth remembering. Gemini 3.1 Flash TTS was tried first and rejected on
listening: `tools/voicemetrics.py` put its pitch spread at 4.7–5.3 semitones against 3.5 for a
steady narrator, and — worse for an audiobook — it drifted between files, 165–186 Hz and
−16.6 to −18.2 LUFS across four readings where the old voice held 163–165 Hz and −21.8 LUFS.
A narrator that changes character between chapters makes the listener reach for the volume.
Note that Gemini is eighth in the world on the Artificial Analysis Speech Arena: that benchmark
asks which of two short clips "sounds more natural", which rewards the expressiveness that
makes long-form listening tiring. For a course, a narrator who disappears beats a charismatic one.

### Backlog: English narration

English still uses edge-tts `en-GB-SoniaNeural` and was deliberately left alone. Two separate
items when it comes up:

1. **Pace varies 138–166 wpm across readings** — `valledaosta en-3` at 165.9 is genuinely
   rushed. The voice itself is rock-steady (F0 197.5–200 Hz, pitch 3.53–3.62, −19.3 to
   −19.5 LUFS on every file measured); the variation comes from pause density in the text, so
   it would survive any change of voice. A per-file `atempo` pass fixes it with no
   re-synthesis and no cost.
2. **A steadier voice, if wanted.** Deepgram Aura-2 is an English specialist (41 English
   voices, no Norwegian at all) and sweeps the top of the measurements: Andromeda 2.95 st,
   Thalia 3.24, Asteria 3.19, Helena 3.27, against Sonia's 3.47. Aura-2 runs quiet, −25 to
   −27 LUFS, so it would need normalising to about −19 to sit beside the rest. Roughly $25 for
   all 80 readings. Clips are in the voice lab; rebuild it with
   `python tools/voicelab.py --rebuild`.

## 7. Suggested order of work

1. Validate the Lazio reading format with a few learners on phones (this round).
2. Write Toscana, Piemonte, Veneto, Campania, Sicilia next (the five regions most learners know).
3. Rebuild those five landmarks to the new standard while the text is written.
4. Add tasting cards and recap questions to all six regions.
5. Remaining 14 regions in batches of four to five.
6. Accounts and sync last, once the content is stable.

---

## 9. A second course: what is reusable and what is welded to Italy (assessed 2026-09-12)

Written when the owner said the next course would be Indian cuisine. Surveyed, not guessed:
`italia-course.html` is 2004 lines / 226 KB, of which the Italy-specific parts are mostly data
concentrated in a few named constants, plus two features that are genuinely coupled.

### Already course-agnostic, reusable untouched

The whole narration pipeline (`narrate.py`, `tts.py`, `nbtts.py`, `opus.py`, `voicelab.py`,
`voicemetrics.py`, `normalise.py`) contains no Italy knowledge. The audiobook page and
`tools/audiobook.py` read `ORDER` and `ASSET_DIRS` and would work on any course. The content
formats — readings, recipes (`docs/recipe-format.md`), quiz (`docs/quiz-format.md`), tasting
cards (`docs/tasting-format.md`), glossary — are keyed by region code and are structurally
generic. So are the reader, the cookbook, the quiz renderer, the intro, progress, the router,
the language machinery and every test in `tools/test/`. `build.py` and `tools/make_site.py`
know only the filename.

### Italy data, which a new course replaces anyway

`REGIONS` polygons, `COURSE` (23 KB — this *is* the course), `ORDER`, `ASSET_DIRS`,
`LABEL_POS`, `CAPITAL_POS`, `FAMILY` areas, `TM` plus the baked terrain, the 24 landmark
builders, and the decorative `VINEYARDS` / `ALPS` / `APENNINES` arrays. Not debt: content.

### Three things to fix before starting course two

1. **The wine layer is welded in.** 124 mentions of "wine" and 72 of `vmp` in the app: the
   region sheet renders `C.wines.map(...)`, every wine links to Vinmonopolet, tasting cards are
   keyed `IT-xx|Wine Name`, and five tools (`vmpmap`, `vmpcheck`, `vmpverify`, `vmpstores`,
   `tastingextract`) exist only to serve it. Indian cuisine has no wine and no Vinmonopolet, so
   this has to become a pluggable "products" concept or be switchable off. It is a content-design
   decision before it is a code one: decide what occupies the slot wine occupies now.
2. **`italia-course.html` is named in twelve tools.** One constant, but fix it while there is
   still only one course.
3. **The 67 content `<script src>` tags and 20 audio manifest tags are hand-maintained**, so
   adding a region means editing HTML in three places (§4.4). Generate them from a manifest.
   With India's 28 states plus 8 union territories this stops being a nuisance and becomes a
   source of mistakes.

### Genuinely new problems for India

- 28 states and 8 union territories against 20 regions: nearly double the content, and a much
  denser map, so label collision avoidance (§6n) stops being optional.
- India is roughly eleven times Italy's area. The zoom-8 Terrarium approach in
  `tools/bake_terrain.py` does not transfer directly (its tile ranges are hardcoded for Italy);
  expect zoom 7 and a different crop.
- A transliteration rule, decided before any writing: the Italian course keeps wine, dish and
  place names untranslated (§4b.8), and Devanagari, Tamil and the rest need an equivalent policy
  that survives both English and Norwegian editions.
- The four-reading rhythm is currently wine / wine / food / landmark. Decide the Indian
  equivalent before writing region one, because `COURSE.lessons` and the kickers encode it.

### What not to do

Do not build a general course CMS. Two courses is not enough evidence for the right abstraction,
and the time goes into framework instead of content. Extract what is demonstrably shared, copy
what is cheap to copy, and let a third course show what actually generalises.

## 10. The India course: shape and prose (proposed 2026-09-12)

Direction from the owner: the point is Indian cuisine with some history, not detailed geography.
He knows India less well than Italy, so the regional differences are the thing worth teaching.
He wants a map, but it need not be as detailed. Wine has no Indian equivalent and the
Vinmonopolet layer cannot come along. Nothing here is built yet; §9 lists what must be
un-welded first.

### What occupies the slot wine occupied

**The spice pantry.** Wine earned two readings because it is a system with names, places and
rules. Techniques (tandoor, dum, bhuna, tadka) cut across regions and belong in the glossary,
and dishes are already reading three. What is genuinely regional and systematic is what sits in
the masala dabba: Bengali panch phoron, Maharashtrian goda masala, Kashmiri ver, Chettinad's
roasted spices, Gujarati dhana-jeera. It is also the thing a European most reliably gets wrong,
"curry powder" being the equivalent of thinking all Italian red is Chianti.

Proposed four-reading rhythm, which keeps the existing shape so `COURSE.lessons`, the kickers
and every content format survive:

1. The spice logic of this region: what is in the pantry and why (climate, trade, conquest).
2. The staple and the table: rice, wheat or millet, and how a meal is built. The thali.
3. The dishes.
4. The place and its history: pre-colonial (Mughal kitchens, the Portuguese in Goa, Parsi
   settlement, the spice trade) and what the British changed. History enough to explain the
   food, not a history lesson. Readings 1-3 stay about food.

**The tasting card becomes a spice card** - aroma, flavour, what it does, when to add it, what
to substitute - which is a direct structural analogue of colour/nose/palate, so `tasting.js`,
`tastingcheck.py` and the renderer survive with renamed fields.

**The Vinmonopolet link becomes a sourcing note**, and this is an upgrade rather than a loss.
§14 already records that the Norwegian recipes earn their keep through sourcing notes, the part
that could not be translated into existence. For India in Norway that means asafoetida, fresh
curry leaves, kokum, real jaggery, and whether the garam masala on a supermarket shelf is worth
buying. Grønland in Oslo against ordering online. No commerce links, no shop IDs, no
alcohol-advertising question.

### The map

Roughly **fourteen culinary regions built by grouping whole states**, not 28 states plus 8
union territories: Kashmir and the Himalaya, Punjab and the north-west, Rajasthan, Gujarat,
Awadh, Bengal, the North-East, Maharashtra, Goa and Konkan, Karnataka, Andhra and Telangana,
Tamil Nadu, Kerala, the centre. Comparable to Italy's twenty, less work, and more accurate to
the subject, because Indian food regions genuinely do not follow state lines. Grouping whole
states keeps the polygon data a union of existing shapes, so nothing is hand-drawn.

**Keep the 3D relief**, baked at a lower zoom than Italy's. For India it teaches more than it
did for Italy: the Himalaya, the Gangetic plain, the Thar, the Western Ghats and the Deccan
explain where the food comes from. Spice country is where it is because of those mountains and
that monsoon.

### Names in the Norwegian edition

Translate ingredients (linser, kikerter, spisskummen, sennepsfrø), keep dish and spice-blend
names in the original (dal, panch phoron, dosa, thali), and gloss the first mention. The same
policy as the Italian course (§4b.8), and it works because Indian dish names have no Norwegian
equivalent while the ingredients all do. Common English spelling, no diacritics: paneer, not
panīr.

### Vegetarian

A marker, not a division: a small badge on dishes and recipes. India labels food this way
formally, so it is authentic rather than imposed, and it is useful when scanning a region sheet.

### 10b. Prose rules, from the owner's own reading

The owner found some of the Italian English "not that engaging or hard to follow", citing the
Lambrusco passage in `emiliaromagna.js`. He is right, and the cause is worth recording because
it is systematic rather than a one-off.

The text reads: *"Before the tank, Lambrusco was made the way every farm made it: fermentation
stopped by the winter cold, wine bottled in spring with a little sugar left, and the warmth of
May finishing the job in the bottle."* That is a colon followed by **three clauses with no
finite verb in any of them**. On the page the eye re-scans and assembles it. Read aloud it is
three noun phrases in a row with nobody doing anything, and a listener has nothing to hold.
The next sentence wedges twenty words between "The Charmat method" and its verb "made", and the
paragraph closes with a single sixty-word sentence carrying an appositive and a three-item list.

**The root cause: the readings were written for the eye and are now listened to.** Audio cannot
re-scan. Note the irony that these are close to the faults the Norwegian review already banned
(§4b.3 no colon-led apposition, §4b.5 participle phrases become relative clauses). The Norwegian
was repaired; the English original never got the same pass.

Rules for the India course, and for the recipes:

1. **Every clause gets a finite verb.** Never a colon followed by a list of fragments.
2. **Subject and verb within about eight words of each other.**
3. **Sentences average about eighteen words, ceiling about thirty-five.** Vary the rhythm, but
   no sixty-word sentences and no run of verbless fragments.
4. **Connect with logic, not commas**: because, so, which is why, and that meant. Facts placed
   side by side make the reader do work the writer should have done.
5. **Read every paragraph aloud before it ships.** It is narrated. If you lose the subject or
   run out of breath, rewrite it.
6. **Open a section with something concrete** - a scene, a person, a smell - then bring the
   facts in behind it. Teach the mechanism rather than listing the stages.

Worked example, same facts, nothing dropped:

> Before the tank, every farm made Lambrusco the same way, and the calendar did the work.
> Winter cold stopped the fermentation before the yeast had finished. In spring the wine went
> into bottles with a little sugar still in it. Then May warmed the cellar, the yeast woke up,
> and the wine finished fermenting where it lay. That is where the bubbles came from. What you
> poured was cloudy, dry and alive, and you drank it inside the year.

**Backlog for the Italian course:** the English readings would benefit from the same pass the
Norwegian got. Eighty readings, and every edit makes its narration stale
(`python tools/review_no.py <region> --stale` reports which), so it is a deliberate project
rather than something to start casually.

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
