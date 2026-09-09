---
name: norsk-review
description: Review and repair the Norwegian bokmål of one region's readings in Italia in Tavola so it reads as written by a Norwegian, apply the fixes, verify structure, and regenerate the narration that the edits made stale. Use when the owner asks to check, scrutinise or fix Norwegian text, or after writing a new region's Norwegian edition. Argument: the region's content-file stem (lazio, piemonte, toscana, veneto, campania, sicilia, lombardia, emiliaromagna, puglia) or "all".
---

# Norwegian review of a region

You are a Norwegian-speaking editor. The English edition is the source of fact; the Norwegian edition must read as
if a Norwegian wrote it from the same facts. Judge every sentence on that, not on faithfulness to the English.
The rules you apply are in `CLAUDE.md` §4b (read them first). The helper is `tools/review_no.py`; run every Python
command with `PYTHONIOENCODING=utf-8`.

Region: `$ARGUMENTS` (a content-file stem, or `all`). For `all`, do the steps region by region.

## 1. Dump and read

```
python tools/review_no.py <region> --report
```

writes `_review/<region>.md`: every Norwegian block next to its English neighbour, with `!!` lint hits under
suspicious Norwegian blocks. Read the whole file. The lint is a heuristic starting list, not the review: most
problems are unflagged, and some hits are fine (an Italian name, a legitimate «hvis du …»). Decide each one.

Look for, in this order of frequency: clefts («Det som …, er …»), comparatives and adjectives with no noun
(«er varmere og tidligere»), participle chains where Norwegian needs a relative clause, colon-led lists used as
apposition, bare-infinitive subjects, English word order (adverb before subject, sentence adverbs between commas),
calques and false friends (§4b rules 8–9), hyphenated articles on Italian nouns, «hvis» as a relative pronoun,
and formatting (« », decimal comma, space before %, thin space in thousands, en dash for ranges).

Do not manufacture changes where the Norwegian already reads well. Do not change facts: if the Norwegian and
English disagree on a fact, list it in the report and leave both.

## 2. Write the patch

Write `_review/<region>.patch.json`: a list of `{"old": "...", "new": "..."}` pairs. `old` is the exact current
text (copy it from the content file, not from the dump: the dump has tags stripped) and must occur exactly once in
`content/<region>.no.js`; include enough surrounding words to make it unique. Keep Italian names, image keys, hero
keys, the credits line, kickers, the fixed headings (Nøkkelfakta, I glasset: …, Før du går videre) and the tasting
row labels (Farge, Duft, Smak, Alkohol, Serveres, Ved bordet) untouched. Never introduce the class name `glass`.

## 3. Apply and verify

```
python tools/review_no.py <region> --apply _review/<region>.patch.json
```

applies each pair (pairs that do not match exactly once are skipped and listed: fix and re-run), reports which
lessons were touched, and runs the parse, image-key, hero, kicker, heading and tasting-label checks. It must end
with `OK`. If it prints `PROBLEMS`, fix the file before going on.

## 4. Re-narrate what changed

```
python tools/review_no.py <region> --stale
python tools/review_no.py <region> --narrate
```

`--stale` regenerates each reading's spoken script and compares it with the script the existing audio was made
from, so it lists exactly the narrations your edits invalidated (both languages, in case the English was touched).
`--narrate` regenerates those, retries any file the speech service cut short, and re-encodes the Opus files. About
two minutes per file; run it in the background if there are more than two. Then:

```
python build.py
```

and commit and push (`git add -A && git commit && git push`); GitHub Pages rebuilds the live site from `main`.
Do not publish the Claude artifact unless asked.

## 5. Report

Reply with, for each region:

1. Number of sentences changed per lesson and the kinds of problems found, with three to five before → after examples.
2. Lint hits you judged to be fine, in one line, so the owner knows they were seen.
3. Facts where the Norwegian and English disagree (listed, not fixed).
4. The narrations regenerated, and confirmation that `--stale` now prints `none` and the push succeeded.
5. Any new pattern worth adding to `CLAUDE.md` §4b or to the `LINT` list in `tools/review_no.py`.
