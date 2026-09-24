# Voice upgrade — 23 September 2026

The owner selected Kokoro Heart (`af_heart`) for locally generated English on 23 September.
The audition used speed 0.95. The owner subsequently selected casual Puck (variant 3) for Norwegian
and authorised an initial three-region batch, with a cost report before proceeding further.
Specific feedback: Puck over-articulates and sounds as if making exaggerated mouth movements.
Keep engagement, but relax pronunciation and articulation. Owner requested multiple instruction
variants of Puck on the same passage. Audition generator: `voicelab/make-relaxed-puck.py`
with `--variant light|relaxed|casual`; output page `/puck-relaxed.html` on the audition server.
Text and regional introductions already exist. The owner has requested publishing the completed
pilot recordings for phone testing; release preparation is recorded below.

## English audition ready

Four Kokoro-82M v1.0 voices read the title and first paragraph of Toscana reading 1:
Emma (British female), George (British male), Heart (American female), Michael (American male).
Generated locally with Python socket connections disabled during inference. No API charge.
Speed 0.95, sentence breaks, extra pause after title, mono MP3 48 kbit/s, normalised to -19 LUFS.
Measured finished levels: -19.47 to -19.53 LUFS; durations 33.5 to 40.2 seconds.
These technical checks do not establish pronunciation quality. The owner chose Heart after listening.

- Generator: `tools/local_voice_samples.py`.
- Environment: `voicelab/local-english-env/Scripts/python.exe`.
- Dependencies: kokoro-onnx 0.4.8, soundfile, imageio-ffmpeg; exact runtime versions and model
  SHA-256 hashes are recorded in `voicelab/local-english/manifest.json`.
- Model files: `voicelab/kokoro-model/kokoro-v1.0.onnx` and `voices-v1.0.bin` from
  https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.1.
- Output: `voicelab/local-english/index.html`, four English MP3s and an existing Puck sample.
- Preview: `tools/local_audio_preview.py`, http://127.0.0.1:8767/ . Serves only the audition
  directory with byte ranges. Do not use a project-root server that exposes `.env`.
- Model license: Apache 2.0; runtime: MIT. See https://huggingface.co/hexgrad/Kokoro-82M
  and https://github.com/thewh1teagle/kokoro-onnx.

The wrapper in kokoro-onnx 0.4.8 and 0.4.9 sends integer speed for this export, but the model
expects float. The audition subclass supplies float32 speed without losing 0.95, and rejects
oversized input instead of silently truncating it. Keep this fix when integrating production.

## Remaining work

1. Voices selected: Heart and casual Puck. Initial batch: Lazio, Piemonte, Toscana, both languages,
   with introductions (30 tracks). Stop after those three regions and report cost.
2. Integrate Heart and casual Puck in reading and intro generation,
   including resumable generation, provenance, script fingerprints and failure checks.
3. Audit Puck Toscana scripts before reuse. Generate 100 tracks per language (80 readings + 20 intros),
   reusing only recordings that match the final script and settings.
4. Check completeness, pronunciation, consistency and chapter joins. Update MP3, Opus, durations
   and manifests; verify fresh scripts, audiobook order, seeking/resume and both languages on phones.
5. Build, publish and verify the live deployment. Downloadable M4B files are separate optional outputs.

The India upgrade is tracked in its separate repository; this document covers Italy only.

## Three-region pilot

`tools/voice_batch.py` stages the 30 tracks in `voicelab/local-english/batch-three` and creates
a listening page and cost report. Run with the isolated local-English environment. It derives
scripts from current reading content and regional introductions, caches Norwegian chunks by
script plus direction fingerprint, saves generation IDs before cost lookup, and keeps unknown
charges unknown. Two Norwegian requests run concurrently while English runs locally.
Existing Toscana recordings used an older Puck direction and are not reused for this pilot.
The pilot does not publish or overwrite the existing course audio.

### Result of the first run

28 of 30 tracks finished and passed source-script/settings checks, MP3/Opus decoding and
loudness checks. All 15 English Heart tracks are complete. Lazio and Piemonte are complete
in both languages. Toscana Norwegian reading 3 has one cached section; its remaining section
and reading 4 could not be generated because OpenRouter returned insufficient account credits.
No automatic retries were made for those rejected requests. Resume the same batch command
after credits are restored; completed tracks and matching sections are reused.

| Region | Finished tracks | Verified Puck charges (USD) |
| --- | --- | --- |
| Lazio | 10/10 | 1.221877 |
| Piemonte | 10/10 | 0.703713 |
| Toscana | 8/10 | 0.337503 |
| Total | 28/30 | 2.263093 |

All 43 successful requests have retrieved costs; none are missing. Toscana's amount includes
the saved first section of the incomplete third reading. Earlier auditions are excluded.
English API cost is zero. Remaining generation will add to this total.
Review at http://127.0.0.1:8767/batch-three/ while the audio-only server is running.
The recorded generation IDs and detailed report are saved under that local batch folder.

### Phone-test release

The owner authorised pushing the completed pilot to GitHub. `tools/install_voice_batch.py`
installs the 28 validated tracks into the course and updates metadata; Toscana's Norwegian
readings 3 and 4 retain their previous recordings. All other regions retain their existing voices.
MP3 revisions are included in self-hosted playback URLs to avoid stale cached audio on phones.
The preview build is 14.5 MB; the full site is approximately 452 MB. Reading freshness and all
regional intro checks pass. The phone reader plays the new Puck audio, seeks forward and pauses.

The release completed successfully on GitHub Pages at commit `168a496`; live manifests and
intro audio hashes were verified against the local files.

## Next five regions

The owner authorised five more regions: Valle d'Aosta, Liguria, Lombardia, Trentino-Alto Adige
and Veneto, following course order while skipping the pilot regions. Each gets an introduction
and four readings in both languages. English generation started locally with Heart; Norwegian
is awaiting an OpenRouter top-up (funded account balance $0.61328193 at the preflight check,
distinct from the API key's larger spending allowance).

Run `tools/voice_batch.py --batch five --lang en` using the isolated voice environment.
After funding, run the same command with `--lang no`. Outputs and costs are under
`voicelab/local-english/batch-five`; the preview is http://127.0.0.1:8767/batch-five/.
Use `--report` to refresh the listening page without generating anything.
Validate with `tools/check_voice_batch.py --batch five --lang en` (or `--lang both` when ready).
The installer accepts the same batch/language options and requires all selected tracks unless
`--completed` explicitly permits a partial release. The two incomplete pilot tracks remain
separately resumable with `tools/voice_batch.py --batch three --lang no`.

### English batch complete

All 25 English tracks are generated, validated and installed: 6,818.3 seconds (1 h 53 m 38 s).
Source hashes and scripts match; MP3 and Opus decode successfully, with measured loudness
between -19.72 and -19.32 LUFS. Heart API cost is $0. No paid Norwegian requests were made
for this batch; the funded balance was rechecked and remained $0.613282. Existing Norwegian
audio is retained. The phone player test on Veneto reading 3 passed playback, +15 s seek
and pause. All five regions have no stale narrations; all regional intro checks pass.
The full site build is 452.9 MB and the inlined preview remains 14.5 MB.

### Norwegian resumed after top-up

The owner added credits and requested continuation. The funded balance was $25.61328193
before resuming. The two remaining Toscana tracks are now complete and validated; their
additional successful-request charges are $0.288745, bringing the complete three-region
pilot to $2.551838. One empty-stream HTTP 502 required retrying Toscana's last section.
The five-region Puck batch is in progress; a second empty-stream 502 in Liguria was resumed
from cached sections. All charges will be reported from the saved generation records.

### Norwegian batch complete — 24 September 2026

All 25 Norwegian recordings for the five regions and the two pending Toscana readings are
complete, validated and installed. The five regions contain 7,867 seconds of Puck audio
(2 h 11 m 7 s). All source fingerprints, MP3/Opus decodes and loudness checks passed;
all six affected regions have no stale audio and all regional introductions match their scripts.
The finished site is 462.2 MB; the inlined preview remains 14.5 MB.

| Region | Verified Puck cost (USD) |
| --- | ---: |
| Valle d'Aosta | 0.591576 |
| Liguria | 0.840849 |
| Lombardia | 0.840952 |
| Trentino-Alto Adige | 0.830096 |
| Veneto | 0.874215 |
| Five-region total | 3.977688 |
| Completing Toscana | 0.288745 |
| New charges after top-up | 4.266433 |

All 78 successful requests in the five-region batch have retrieved costs. English API cost
remains $0. The funded balance decreased from $25.61328193 to $21.34684893, exactly matching
the new successful-request charges; the failed requests therefore added no net charge.
The complete three-region pilot costs $2.551838, and both batches together cost $6.529526
(excluding auditions). Eight regions now have Heart English and casual Puck Norwegian,
including all introductions; twelve regions retain their earlier voices.

Temporary empty-stream responses and one dropped connection required resuming from saved
sections. The generator now logs and retries transient failures at most twice per section;
credit and other permanent errors stop immediately. Completed recordings and sections retain
their original fingerprints and are reused. Logs are under each local region's `errors/` folder.
Phone playback, seeking and pause passed on Veneto's new Norwegian food chapter. The full
audiobook test passed all checks, including introductions, chapter navigation, language-specific
progress, resume and migration of old saved positions.

The completed Puck release was deployed at commit `3fc519b`; the live page, all six affected
manifests, five new Puck introductions and both Toscana replacement readings were verified.

## Third batch — next five regions

The owner authorised five more regions on 24 September: Friuli-Venezia Giulia (`friuli`),
Emilia-Romagna (`emiliaromagna`), Umbria, Marche and Abruzzo. This follows course order,
skipping the eight already upgraded regions. Both approved voices and all introductions
are included (50 tracks). Starting funded balance after the previous batch: $21.34684893.
Run `tools/voice_batch.py --batch next-five --lang both`; use the same `--batch next-five`
option for validation and installation. Files and charges are kept separately under
`voicelab/local-english/batch-next-five`, with a listening preview at
http://127.0.0.1:8767/batch-next-five/. Generate, validate, publish and report actual cost.

### Third batch complete

All 50 tracks (25 per language, including introductions) are generated, validated and
installed. English totals 6,643.2 seconds and Norwegian 7,818.7 seconds. Source scripts,
fingerprints, MP3/Opus decoding and loudness checks passed. All five regions have no stale
narration and all introductions match current content. Site size is 472.8 MB; preview 14.5 MB.

| Region | Verified Puck cost (USD) |
| --- | ---: |
| Friuli-Venezia Giulia | 0.718362 |
| Emilia-Romagna | 0.771771 |
| Umbria | 0.763926 |
| Marche | 0.730603 |
| Abruzzo | 0.996168 |
| Total | 3.980830 |

All 78 charged generations have retrieved costs. This includes one rejected Umbria section:
the duration check measured 250 words/minute, above the 215 limit. Its PCM and charge record
were preserved under `umbria/rejected/`, and only that section was replaced. Reports now count
rejected attempts so they cannot disappear from cost totals. Other temporary errors were
handled through the bounded retry mechanism.

The funded balance fell from $21.34684893 to $17.36601893, exactly matching $3.980830.
English API cost is $0. The three batches together cost $10.510356, excluding auditions.
Thirteen regions now have both approved voices and introductions; the seven remaining regions
are Molise, Campania, Puglia, Basilicata, Calabria, Sicilia and Sardegna. No generation for
those seven is authorised by this batch request.
The phone test on Abruzzo's Norwegian food chapter passed playback, seek and pause. The
audiobook test passed all checks, including chapter transitions, resume, language-specific
progress and migration of saved positions.

## Fourth batch — southern five regions

The third batch was published at `6283641` and its live manifests and ten introduction audio
hashes were verified. The owner then authorised the next five: Molise, Campania, Puglia,
Basilicata and Calabria. Both voices and all introductions are included (50 tracks).
Starting funded balance: $17.36601893. Run generation, validation and installation with
`--batch south-five`; outputs are under `voicelab/local-english/batch-south-five` and the
preview is http://127.0.0.1:8767/batch-south-five/. Publish after checks and report actual cost.
Sicilia and Sardegna remain outside this batch.

### Fourth batch complete

All 50 tracks are generated, validated and installed, including all ten introductions.
English totals 8,521.5 seconds and Norwegian 9,794.4 seconds. Script fingerprints, source
text, MP3/Opus decoding and loudness checks passed. All five regions have no stale narration.
The site is 485.6 MB and the inlined preview remains 14.5 MB.

| Region | Verified Puck cost (USD) |
| --- | ---: |
| Molise | 0.994255 |
| Campania | 1.191483 |
| Puglia | 1.226915 |
| Basilicata | 0.748014 |
| Calabria | 0.790130 |
| Total | 4.950797 |

All 93 successful requests have retrieved costs. Temporary provider errors were recovered
through bounded retries; no duration-rejected recordings were needed in this batch.
The funded balance decreased from $17.36601893 to $12.41522193, exactly matching $4.950797.
English API cost remains $0. All four batches together cost $15.461153, excluding auditions.
Eighteen regions now have both approved voices and introductions; only Sicilia and Sardegna
retain their earlier voices. This batch does not authorise generating those final two regions.
The phone player passed playback, seek and pause on Calabria's new Norwegian food chapter.
The audiobook test passed all checks, including introductions, chapter transitions, resume,
language-specific progress and migration of old saved positions. All regional intro checks passed.
