# Handover — Italia in Tavola prose rewrite

For: Claude Code, working with Vidar.
Companion file: `STYLE_BIBLE.md` (read it first — it is the spec).

---

## 1. What this project is

`https://vidarsveen.github.io/italia-in-tavola` — an interactive, map-based course on Italian food and wine. Twenty regions, four readings each (80 total), each with a data box, tasting table, quiz, audiobook player, and linked recipes. English and Norwegian. Content is loaded dynamically by JS from the repo (`vidarsveen/italia-in-tavola` on GitHub).

There is a **sister project with the same structure for Indian cuisine**. Everything decided here should be reusable there. Keep the tooling region-agnostic.

## 2. The problem being solved

The content is factually solid. The prose reads like a wine reference: same paragraph shape, same article template, no people or scenes, and the structured boxes are dead air in the audiobook. Full diagnosis in `STYLE_BIBLE.md` §1.

The goal is not "more engaging" in the abstract. It is: a reader can tell any two articles apart, and would want to hear one read aloud.

## 3. The approach — reference set first, then scale

Do **not** run one prompt over eighty articles. That produces eighty articles that all open with a foggy plain.

### Phase 0 — Inventory (Claude Code, no writing yet)
1. Locate the content source in the repo (JSON / markdown / whatever the map loads). Map the schema: region intro, reading title, subtitle, body sections, key facts, tasting table, recap, quiz, recipe links, audio file reference, NO translation.
2. Produce `content/INVENTORY.md`: all 80 readings with region, module number, title, word count, and which of the current section headers they use.
3. Grep the existing text for the banned list (`STYLE_BIBLE.md` §3). Report frequency per phrase. Add anything else that appears ≥3 times.
4. Confirm how the audiobook is generated (TTS pipeline? which voice? from which field?). This determines whether "audio rendering" is a separate text field or a transformation.

### Phase 1 — Reference set (six articles, hand-argued)
Pick six that are **deliberately different** from each other. Suggested:

| # | Reading | Why this one |
|---|---|---|
| 1 | Emilia-Romagna — Lambrusco | Already partly rewritten in the bible; a wine with a story |
| 2 | Toscana — Sangiovese | Already partly rewritten; a grape-as-concept article |
| 3 | Toscana — Bread, beans and the Florentine steak | A **food** reading, not wine — the bible must work for both |
| 4 | Emilia-Romagna — Parmigiano, prosciutto, balsamic | A three-product article — tests how to avoid a list |
| 5 | A southern region (Sicilia or Campania), any wine reading | Different landscape, different register |
| 6 | A small/obscure region (Molise or Basilicata) | Tests whether the method works when there is less to say |

For each: rewrite → Vidar reviews → argue → revise, until it is genuinely good. Log the opening move used. **Every approved rewrite becomes a new before/after in the bible.** The bible grows from the reference set, not the other way round.

Exit criterion for Phase 1: all six approved, and the bible updated with at least eight before/after pairs.

### Phase 2 — Scaling test (one batch of five)
1. Generate five new articles using the bible + the six reference articles as context.
2. **Blind test:** Vidar reads the five new ones mixed with three reference ones, without labels. If he can reliably pick out the handmade ones, the bible is not strong enough. Fix the bible, not the batch.
3. Repeat until the blind test fails to distinguish.

### Phase 3 — Full run
- Batches of 4–5, always reviewed **together**, never individually. Sameness only shows side by side.
- Maintain `content/OPENINGS.md`: a running table of reading → opening move (§4 of the bible). The generator must be told the previous two articles' moves and forbidden from reusing them.
- Run the definition-of-done checklist (bible §9) on every article. Automate what can be automated: banned-phrase grep, subject-plus-linking-verb paragraph openers, list count, word count, presence of "Before you move on" outside the audio field.
- Fact-preservation check: diff the factual claims of original vs. rewrite. Any fact that vanished must be either in the data box or explicitly dropped with a reason.

### Phase 4 — Audio and Norwegian
- Audio is a separate rendering per bible §6. Generate the audio text field from the final prose, strip the structured elements, verify 700–950 words.
- Norwegian: translate the **final** English, article by article. Do not run the rewrite process in parallel in two languages.

### Phase 5 — Region intros (all twenty)
Short, high-value, do them as one pass after the readings, using bible §8 and examples 5.1–5.2. Read all twenty in a row; they must not share an image or an opening shape.

## 4. Suggested repo additions

```
content/
  INVENTORY.md          # Phase 0 output
  OPENINGS.md           # running table of opening moves
  reference/            # the six approved reference articles, original + rewrite side by side
STYLE_BIBLE.md          # this spec, grows with every approved rewrite
scripts/
  lint_prose.py         # banned phrases, linking-verb openers, list count, word count
  extract_audio.py      # prose → audio text field
  fact_diff.py          # original vs rewrite factual-claim check (can be LLM-assisted)
```

## 5. Generator prompt shape (for Phase 2 onward)

Context to include on every call:
1. `STYLE_BIBLE.md` in full
2. The six reference articles (original + rewrite)
3. The article to rewrite, in full, including data box
4. The opening moves used by the previous two articles in sequence (forbidden for this one)
5. Instruction: preserve every fact; anything removed from prose must appear in the data box; output prose + data box + audio text as separate fields

Do not ask it to "be engaging". Ask it to satisfy the fifteen rules and the checklist.

## 6. Open decisions for Vidar

1. **Voice of the book.** Third person throughout, or is there a narrator ("I")? The bible currently assumes no "I". This is the single biggest decision and should be made before Phase 1.
2. **Audio as separate field vs. derived.** Depends on Phase 0 finding.
3. **Section headers.** Keep them on the page (visual) but not in audio, or drop them entirely and let the prose carry transitions? Bible currently says: keep visually, never read.
4. **How far to go on the quiz.** Currently untouched. The question stems could be sharpened later; out of scope for now.
5. **Photo captions.** Read in audio or not. Bible says optional.
6. **Indian cuisine project.** Run the same Phase 0 inventory there once this method is proven, or in parallel?

## 7. Things not to do

- Do not rewrite in place before the reference set is approved. Work in `content/reference/` or a branch.
- Do not let the generator invent facts, producers, dates or people. Scenes and people must be either from the original, generic ("a farmer"), or verified. Flag any named real person the generator introduces.
- Do not change the data box schema during the prose work.
- Do not touch the Norwegian until the English is final.
- Do not ship a batch that hasn't been read as a batch.
