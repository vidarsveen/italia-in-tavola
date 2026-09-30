# Standalone mobile intro — review 01

This directory is separate from the course. No course source, narration, build or deployment files were changed.

Open `index.html` directly, or run `node previews/mobile-intro/server.cjs` and visit
http://127.0.0.1:8778/previews/mobile-intro/ . The server binds only to localhost.

The 20-second animated storyboard uses actual 390 × 844 course screenshots, captured at 2× resolution,
as a stacked deck. Each card holds for 1.65 seconds then slides aside over 1.35 seconds revealing the stationary, exactly aligned next card. No rotation, offsets or zoom. It includes an actual quiz answer reveal. It is an HTML preview, not an encoded video.
There are separate English and Norwegian screenshots and captions, a pause/replay control and a seek bar.
Playback starts on request. Reduced-motion settings replace throws with stationary cuts.

Timing: map 0–3s; illustrated reading 3–6s; quiz 6–9s; Bistecca recipe 9–12s;
audiobook 12–15s; recipes 15–18s; bilingual-course end card 18–20s.

The owner cancelled synthesized music. The player no longer loads, references or plays it.
Historical synthesis files are inactive and are not part of this preview. The approved replacement is
Kevin MacLeod's existing recording **Bushwick Tarantella**, licensed CC BY 4.0 with visible credit.
The preview uses its opening 0:00–0:20, with a 0.4-second fade-in and 1.5-second fade-out, at player
volume 0.32. This is a review cut, not an audibly verified musical phrase boundary; the assistant
verified decoding, duration and playback behaviour, not listening quality. See AUDIO-LICENSE.md.
Play/pause/replay/scrub and language switching follow one audio clock. Mute leaves the visual timeline running.
No narration was regenerated. This preview has not been published or integrated into the course.
Course screens retain their original content and imagery; source photo attribution remains in the course's
`content/emiliaromagna.js`, regional recipe content and corresponding `assets/*/credits.json` files.
Before distributing a video, include the exact pictured-photo credits in the accompanying credits.

`capture.cjs` reproduces screenshots in an isolated headless Chrome profile; `check.cjs` verifies the preview.
These scripts use the available bundled Playwright, overridable through PLAYWRIGHT_MODULE for capture.
Review PNGs are QA outputs. `screens/` is required by the standalone page.

Active local review URL: http://127.0.0.1:8779/previews/mobile-intro/ (server launched with PORT=8779).
Next after review: refine the musical cut if requested, export vertical video, and integrate only if approved.



Publication: approved 29 September 2026. The welcome/About screen links here; Open the map returns to the course. make_site.py ships only runtime assets, compressed MP3, screenshots and credits. Earlier statements above describe the standalone review phase.

30 September: The intro is now an automatic splash on app entry, with Skip and a persistent Hide next time checkbox (iit-hide-splash). It exits to the map at 20 seconds. Visual timing is independent of audio autoplay permission; Sound on enables music when blocked. About can replay it. Add ?review=1 for manual preview controls. check-splash.cjs covers automatic entry, blocked-audio policy, skip, persistence, replay, languages and completion.
