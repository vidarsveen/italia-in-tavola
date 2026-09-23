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
