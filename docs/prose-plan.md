# Rewriting the prose of both courses — plan (2026-09-14)

Written for Vidar, after reading thirty-two readings myself (Punjab, Kerala, Bengal, Rajasthan; Emilia-Romagna,
Toscana, Sicilia, Molise, all four readings each), the spoken scripts, the manifests, the quiz bank and the tools.
Nothing in this plan is built yet. It asks for approval at three gates and nowhere else.

The brief, in the owner's words: the text is "okayish, not good enough", "staccato, not engaging", the start of a
chapter has "small cryptic messages" that are dull to listen to, the narration should not read the tables, and the
Punjab chapter about Partition and the border is the model, because "just stating the fact sounds very AI like".
Structure, images, wine and spice lists stay. Questions change with the content.

---

## 1. What I found by reading

### 1a. The two courses are not in the same state

The Italian course was written first, for the eye, before the prose rules existed. The Indian course was written
under those rules, and it shows. This matters for the plan: Italy needs a rewrite, India needs an edit.

**Italy** (80 readings, median 657 words, 447 of 2,067 sentences over 35 words):

- Openers are reference-book openers. *"Ask what Tuscany's wine is and the answer is one word: Sangiovese."*
  *"Lambrusco has a reputation problem, and it earned it honestly."* *"Molise has a problem that no other Italian
  region has: people are not sure it is there."* *"Sicily grows more vines than any other Italian region."*
  Each is a thesis statement. Nobody is anywhere; nothing is happening.
- The body is inventory. The Romagna reading has a section literally titled "The names to know", and it is four
  bold place names each with a producer attached. Sicilia 2 lists five whites in one paragraph and five Marsala age
  grades in the next. Emilia 4 gives Bologna's dishes as a bolded roll-call. On the page a reader skims a list; in
  audio every item costs the same and none of them lands.
- One template repeated: hook, grape family, how it is made, tasting box, "Why it works at the table", "Reading the
  label", recap. Once a listener knows the shape, the words stop mattering.
- The best passages are already the ones with a person and a sequence: John Woodhouse sheltering from a storm in
  Marsala in 1773; the black rooster starved so it would crow early; the innkeeper at Castelfranco peering through
  the keyhole at Venus's navel; the farmers who moved into Saepinum and used a Roman town as a barn; the imperial
  ruling carved on the Porta Bojano telling magistrates to leave the shepherds alone. These are the seeds. They are
  buried in the middle of paragraphs that open with a date.
- Fourteen of the eighty one-line summaries have no finite verb: *"What the grapes are, how the wine is made, and
  why the dry version belongs on the table."* That fragment is the second thing the narrator says in every Italian
  chapter. It is the "cryptic message".

**India** (56 readings, median 1,064 words, 168 of 2,922 sentences over 35 words):

- Openers are concrete and usually good. *"Stand beside a tandoor at a roadside dhaba and the heat reaches you a
  metre away."* *"A bajra roti is not rolled."* *"Cross Howrah Bridge on foot at eight in the morning and the crowd
  carries you."* *"The first ilish of the season is news. People telephone each other about it."*
- The body explains mechanisms rather than listing stages: why paneer does not melt (acid-set), why panch phoron is
  never ground (the five seeds cook at different rates), why yoghurt splits in a hot pan and how to stop it, why
  butter chicken made from raw chicken is dull. This is what the owner values and it must survive.
- History arrives at the plate: Radcliffe's five weeks, Delhi doubling, Moti Mahal's tandoor, butter chicken;
  a deposed Nawab at Metiabruz and the potato in Kolkata biryani; Amrita Devi and why the khejri is protected.
- What still reads as machine-made, and it is consistent enough to be a habit rather than an accident:
  - Bare section headings spoken as fragments: *"The line through Punjab."* *"Delhi doubles."* *"Five seeds, never
    ground."* Read aloud with a pause on either side, these are the other "cryptic messages".
  - Signposting tics: "worth" (45 uses: worth noting, worth knowing, worth copying, worth naming, worth being blunt
    about), "Two things follow from that" and "Three dishes carry" as paragraph openers, "Here is the part that
    surprises people", "that tells you", "deserves a note of its own". Each is the writer announcing that something is
    interesting instead of making it so.
  - Bolded catalogue paragraphs: the five breads of Punjab, the five tandoori items, the four coconut states. The
    facts are right; the form is a glossary.
  - The same closing move in two of the four history readings I read: a section headed *"Why any of this is in a
    cookery course"* that summarises the reading. A summary is the one ending a listener does not need.
  - Nobody speaks. There are people (a cook, a picker, a Nawab) but no one is ever quoted, and there is no narrator.
    Every sentence is delivered from the same distance.

### 1b. What the Partition chapter does that the owner responded to

Punjab reading 4 is the benchmark, so it is worth being exact about why it works, because "more history" is not it
(a Trentino draft full of South Tyrol politics was rejected on 2026-09-13 for exactly that reason).

1. It opens on **one person with a deadline**: a lawyer who had never been to India, given five weeks. That is a
   scene and a tension in one sentence.
2. Every number **carries a consequence**: ten to twelve million walking; Delhi from seven hundred thousand to one
   and a half million. The numbers are not data, they are what happened.
3. It is a **chain of causes**, not a sequence of facts: the line is drawn, so people walk, so Delhi doubles, so
   refugees need work and can cook, so a tandoor opens in Daryaganj, so unsold chicken gets simmered in tomato and
   butter. Delete any link and the dish disappears. That is the test every history paragraph must pass.
4. It is **honest about what is not known** and says why: the death toll, the Moti Mahal claim, the court case.
   Doubt handled openly is more trustworthy than confidence, and it sounds like a person.
5. It **ends on an idea, not a summary**: a European who thinks Indian food is butter chicken "has met one region of
   fourteen and mistaken it for a country."

Everything in §4 below is an attempt to make those five things the norm rather than the exception.

### 1c. The narration reads things that were never meant to be heard

From the manifests: all 80 Italian English files were rendered with `--intro full` and nothing dropped. So the
narrator reads the title, then the verbless summary, then every heading as a fragment, then the Key facts bullets,
then the tasting table as *"Colour: pale ruby to bright pink with a violet-tinged foam that fades quickly. Nose:
sour cherry, redcurrant…"*, then the recap. The Norwegian Italian files drop facts and recap but still read the
table. All 112 Indian files drop facts and recap, still read the table, and still read every heading.

This is a tooling fix and it is cheap. It is also the first thing to do, because the rewrite will make every
narration stale anyway, so the two re-records collapse into one.

---

## 2. What stays exactly as it is

- Every file format, every field name, every checker. `title, kicker, minutes, hero, heroCaption, summary, html`
  with `lead`, `h2`, `figure data-img`, `aside.facts`, `aside.tasting`, `div.recap`.
- Every photograph and caption key. Captions may be reworded; keys may not change.
- `COURSE.wines`, `COURSE.spices`, `COURSE.dishes`, the Vinmonopolet links, tasting cards, spice cards, glossary,
  recipes. None of these are narrated and none of them are the problem.
- The four-reading rhythm per region and the reading titles in `COURSE.lessons` (titles can be improved where
  they are inventories, but the count and order stay).
- The facts. Every date, rule, percentage and name in the current text is either kept in the prose, moved to the
  Key facts box, or dropped with a reason written down. No silent losses, and no invented ones: no named person,
  quotation or anecdote enters a reading unless it is in the current text or I can cite a source for it.

## 3. What changes

1. The prose of all 136 readings, English first, then Norwegian written from the new English and from the facts.
2. The 136 one-line summaries: each becomes a sentence a person would say, because it is the first thing on the
   page and, on the page, the promise of the chapter.
3. The spoken script: no summary, no headings, no tables, no facts, no recap. Title, then prose.
4. The quiz: re-checked reading by reading. Most questions are mechanism questions ("why does garam masala go in
   at the end?") and survive; any whose supporting sentence moved to the facts box or was cut gets rewritten.
5. The twenty Italian region intros on the sheet (*"Italy's food valley. Parmigiano Reggiano, prosciutto di Parma…"*)
   are inventories and can be fixed in one afternoon at the end; they are not narrated and are not urgent.

---

## 4. The writing rules for the rewrite

Two research passes fed this section (sources in Appendix A): one on what makes prose read as machine-made and
what audio scripting demands, one on how the best food writers carry history and place inside a paragraph about
a dish (Root, David, Lynch, Roddy, Jaffrey, Dunlop, Hazan, Nosrat, McGee, Dickie, Collingham, Gastro Obscura).
The rules below are the ones that survived contact with the readings I read. Each is checkable.

### 4a. One decision for the owner first: the voice

Third person, no narrator saying "I", the listener addressed as "you" only where it does work. But the writer's
judgement is allowed to show: Waverley Root stages the lobster-in-bouillabaisse war between two camps and then
confesses *"only one of them is a real bouillabaisse. Unfortunately, I do not know which."* Lizzie Collingham
says of butter chicken that she "can't rule on it either way". That candour is what makes Punjab 4 sound like a
person, and it is available without inventing a narrator. Recommendation: keep it that way, because the
Norwegian edition has to ring true too and a persona doubles the work.

### 4b. The rules

1. **Open on something happening to someone somewhere.** A person with a want or a deadline (Radcliffe's five
   weeks; Babur weeping over a melon from Kabul), a place at a time of day (Testaccio on a Friday morning, the
   smell of chickpeas), or a prejudice overturned inside the sentence (Elizabeth David on Lambrusco: *"a dry
   sparkling red wine, which sounds so dubious, and is in fact perfectly delicious"*). Never a thesis, a definition,
   a reputation, or the name of the grape. Zinsser: if the first sentence does not make the listener want the
   second, the reading is dead.
2. **Every paragraph is a chain, not a heap.** Between any two adjacent facts the hidden connector must be *but*
   or *therefore*. If it is *and then*, reorder or cut (the Parker and Stone rule; McKee: nothing moves except
   through a problem). This is the single rule that separates Punjab 4 from Sicilia 2.
3. **Mechanism in McGee's order: actors, event, result, because.** *Tandoori chicken dries out if it is not sold;
   the kitchen simmers the unsold pieces in tomato and butter; the sauce is better than the dish it rescued,
   because it was built for meat that had already been over fire.* Teach why it works before saying that it does.
4. **History arrives at a plate.** One date, then consequences (Hazan carries the whole argument for regional
   Italy on "until 1861"). History as habit, not date (Roddy: "served on Fridays before the baccalà" is the
   Catholic fast in seven words). The test from the Trentino failure: delete the food and wine sentences from a
   history paragraph; if it still stands, it does not belong.
5. **A number appears only when it carries a consequence.** Ten to twelve million walking; thirteen million cases
   sold as a soft drink. Alcohol ranges, hectares, minimum ageing and DOC dates go to the Key facts box. Context
   before detail: the place and the century before the figure, the region before the appellation.
6. **No inventory paragraphs.** Names appear as evidence inside a sentence with a verb, three at most. Sub-zones,
   producers, age grades and bread types go to the facts box, the sheet or the tasting card, which is where the
   wine list already lives. The sheet is the reference; the reading is the story.
7. **Sentences for the ear.** Subject and verb first, the rest branching right; typically under 25 words, ceiling
   35; three in a row never share a shape. No tacked-on "-ing" clause ("…, reflecting the region's heritage").
   No "not X but Y" or "isn't just… it's…". Literal phrase over figurative whenever one exists (no tapestries,
   nothing "earns its keep"). No brochure words: vibrant, renowned, rich heritage, nestled, testament. Copulas are
   fine: "Barolo is" beats "Barolo serves as".
8. **Do not announce interest, create it.** The signposting family goes: "worth noting/knowing/copying",
   "deserves a note", "that tells you", "two things follow", "here is the part that surprises people", "the point
   is". Clark: get the name of the dog. A named person, one witnessed detail, one thing you could photograph.
   Lynch introduces a grower by birth date, height, one feat he saw him do and his necktie; that is the standard.
9. **Doubt handled openly.** Where the sources disagree (Moti Mahal, the rasgulla, Tintilia's name, the tortellino
   legend) stage the dispute and say what cannot be known. Never "experts say"; never a confident claim the
   current text hedges.
10. **Endings.** End on an image, a callback to the opening, or the limit of the claim (Gastro Obscura on Babur:
    *"None of this was a conscious project"*). Never a summary, never buying advice, never "do not age it". The
    recap box on screen already summarises.
11. **Headings are for the eye and are not spoken.** The prose carries its own transitions. A heading may be a
    label ("Marsala"); it must not be a sentence fragment the listener has to interpret.
12. **The summary line is one plain sentence with a verb**, written last, never spoken.
13. **Facts are conserved.** Every fact in the current reading is kept, moved to the box, or cut with a written
    reason. No new named person, quotation or anecdote without a source in the ledger.
14. **Read it aloud before it ships.** Graham's test: would you say this to a friend? Anything you would not gets
    rewritten. Put one surprise in the middle of every reading, not only at the top (Clark's gold coins).

Norwegian: all of the above, plus CLAUDE.md §4b unchanged. Written from the outline and the facts, not from the
English sentence, then `/norsk-review`.

### 4c. Two illustrations, paragraph level (not approved prose; shown so the rules are concrete)

**Italy is a rewrite.** Toscana 1 opens today:

> Ask what Tuscany's wine is and the answer is one word: Sangiovese. It is the grape of Chianti, of Brunello di
> Montalcino, of Vino Nobile di Montepulciano and of Morellino di Scansano, and it is the most widely planted
> variety in Italy. Yet a Chianti Classico and a Brunello can taste as different as two wines from different
> countries. Understanding why is the first lesson of Tuscany.

Same facts, rules 1, 2 and 7:

> Pour a Chianti Classico and a Brunello di Montalcino side by side and most people would guess they came from
> different countries. One is pale, sharp, and smells of sour cherries and dried herbs. The other is dark, dense,
> and built to wait fifteen years in a cellar. They are the same grape, grown an hour's drive apart. Sangiovese
> does that. It is the most planted vine in Italy, and it shows you the hill it grew on and how much care it was
> given, and it forgives neither. Chianti, Brunello, Vino Nobile and Morellino are four versions of one grape,
> and this reading is about why they turn out so unlike each other.

**India is an edit.** Punjab 2 today gives the breads as a bolded glossary (roti, paratha, naan, kulcha,
bhatura, one sentence each). The same facts as one cook's sequence of actions:

> Watch the same ball of atta go five ways. Rolled thin, cooked dry on the iron pan and dropped onto the flame for
> a few seconds, it puffs into a roti, and that is what most meals are eaten with. Fold the dough around ghee and
> roll it again and it cooks in layers and becomes a paratha; stuff it with spiced potato or grated radish
> instead and it becomes breakfast. Naan is the odd one out, because it is not made from atta at all. It is white
> flour, raised with yoghurt or yeast and slapped onto the wall of a tandoor, which is why no home kitchen in
> Punjab makes it. Amritsar's kulcha is the same idea stuffed and baked, then finished with more butter than
> seems wise, and a bhatura is leavened dough dropped into hot oil, where it inflates like a balloon in seconds.

Nothing was added to either. The difference is that things happen in an order, and the listener can follow it
without seeing the bold type.

---

## 5. Method: three gates, then batches

**Gate 1 — the rules and one outline.** This document, §4 filled in, plus a paragraph-by-paragraph outline of one
reading (Emilia-Romagna 1, Lambrusco, because the owner already named it as the worst offender). Nothing written
until the outline is approved.

**Gate 2 — three pilot readings, one at a time.** Lambrusco (Italian wine), then Toscana 4 (Italian food and
landmark), then one Indian reading the owner picks as weak. Each: outline, approval, draft, the owner listens to it
narrated with the new script settings, revise. The rules in §4 get corrected after each one. Nothing scales until
the owner says the third one is what he wants.

**Gate 3 — one whole region as a batch**, four readings read together, because sameness only shows side by side.
Then the remaining regions in batches of two or three, reviewed as batches, Italy first because it needs it more.

Norwegian follows the English one region behind, written from the facts and the new English, then
`/norsk-review`. Narration is re-recorded per region as soon as both languages are final, with
`--intro title --drop facts,recap,tasting` and headings silent (§6).

### 5a. Progress

| Region | EN | NO | Reviews | Narration | Notes |
| --- | --- | --- | --- | --- | --- |
| Emilia-Romagna 1 | done | done | owner + outside | recorded (standard script, still with outro) | first pilot |
| Toscana 4 | done | done | reader + fact + NO reader | stale | second pilot |
| Emilia-Romagna 2–4 | done | done | reader + fact + NO reader, each | stale | first batch region; ledgers in `docs/rewrite/` |
| Toscana 1–3 | done (second pass 2026-09-15) | done | reader + fact each (old text = `bb7ff7f`), NO reader | stale | ledger `docs/rewrite/toscana-1-3.md`; glossary +5 |
| Valle d'Aosta 1–4 | done 2026-09-15 | done | reader + fact each (old text = `8d976cf`), NO reader each | stale | ledger `docs/rewrite/valledaosta.md`; glossary +2 (a piede franco, alpage); two old-text errors fixed (Issogne fresco date, Chambave "north-facing") |
| Piemonte 1–4 | done 2026-09-15 | done | research pass first, then reader + fact each (old text = `bd062f3`), NO reader each | stale | ledger `docs/rewrite/piemonte.md`; glossary +3 (botte, barrique, trifolau); seven old-text errors fixed (Vienna, DOP cheeses, tar and roses, 6%, truffle season, gold, San Carlo); two in the recipes |
| Liguria 1–4 | done 2026-09-15 | done | research pass (two agents, ~60 claims), reader + fact each (old text = `338414b`), NO reader each | stale | ledger `docs/rewrite/liguria.md`; glossary +4 (preboggion, sciamadda, caruggi, stockfish); about twenty old-text errors fixed (flood deaths, stockfish from "Norway and Iceland", sweet-and-sour cima, Biosfera date, San Lorenzo shell, largest port and old town, 0.2%…); quiz 1.2, 2.3, 4.2, 4.3 and the pesto recipe corrected |

### START HERE, next session (written 2026-09-15 for a fresh session, any model)

1. Read this file §4 (rules, incl. 4d) and §5b (sequence), `docs/rewrite/REVIEW_READER.md` and `REVIEW_FACTS.md`,
   and the memory notes. Then read, yourself, Emilia-Romagna 1–4 in `content/emiliaromagna.js` and Toscana 4 in
   `content/toscana.js`: they are the approved standard, and the owner's words on them were "much better,
   great, no negative feedback".
2. **Done 2026-09-15** (steps 2 and 3): Toscana 1–3 went through reader + fact reviews, a second pass, Norwegian and
   a Norwegian review, gained five glossary terms, and were published; every decision is in `docs/rewrite/toscana-1-3.md`.
   Lesson learned: the fact review's old text is the commit *before* the drafts (`bb7ff7f`), not HEAD, and a
   Norwegian reviewer can catch facts too (Ricasoli's premiership). **Done 2026-09-15: Valle d'Aosta 1–4**, all four
   readings at once: one ledger file, eight parallel EN reviews, then NO, four NO reviews, glossary, build, publish,
   commit. Lessons: the old text has errors worth checking before drafting (a fresco date, a slope facing the wrong
   way); a landmark reading reaches the table honestly through one sourced detail (Issogne's painted cheese shop), not
   by forcing food into every paragraph; a fact reviewer flags true-but-unsourced geography, so put the map facts in
   the ledger up front. **Done 2026-09-15: Piemonte 1–4**, same shape, but with a research subagent run *before* the
   outline on every doubtful or wanted claim (twenty items, sources in the ledger); it found seven errors in the old text
   and two in the recipes, and supplied the sourced stories the readings now open on (sweet Barolo and Staglieno, Cavazza,
   Altare, the salt roads). Do that first for every region from now on. Lesson: fact reviewers catch superlatives the
   writer adds for a hook ("the first vine to bud and the last to be picked"). **Done 2026-09-15: Liguria 1–4**, same
   shape; the research pass was split between two agents (wine; food and the city), found about twenty old-text errors,
   two of them repeated in the quiz and one in a recipe, and supplied the openings (the Volastra monorails, Francesca
   Bruna against the laboratory, the pesto championship, Ragno from Ragnar). Lessons: a fact reviewer also reports as
   "unsupported" details that sit in the research returns but not in the ledger, so copy every detail you use into the
   ledger's source list when drafting; a landmark reading about a city collects monuments, so end each history paragraph
   where its food ends and put the monuments in the box. **Next: Lombardia** (stem `lombardia`), then Trentino-Alto Adige. For the record, the original step 2: Toscana 1–3 were drafted in `content/toscana.js` and published to the preview unreviewed. Run the reader
   and fact reviews on each (the prompts are the ones in this session's pattern: brief + rules §4 + the lesson +
   for the fact review `git show HEAD:content/toscana.js` as the old text and the ledger section), apply the
   second pass, lint (`python tools/prose_lint.py toscana --lang en`), then write the Norwegian for all three
   from the outline and ledger, run `review_no.py toscana --check`, the Norwegian reader review with CLAUDE.md
   §4b, lint `--lang no`, build, publish with the artifact `url` in CLAUDE.md §1.
3. Add glossary entries (both files, both languages' match forms) for any new specialist word: from Toscana
   1–3 the candidates are galestro, alberese, fiasco, Gran Selezione, vino da tavola.
4. Then the next region in the batch order below. One region per stretch of work; publish after each.
5. The first day is committed (`bf79ee8`); the Toscana 1–3 second pass of 2026-09-15 is not, until the owner
   asks. Note that `tools/test/shot.py` defaults to `dist/`; set `IIT_URL=http://127.0.0.1:8765/italia-course.html`
   to screenshot unbuilt edits. The recordings are
   deliberately not being regenerated during review; `review_no.py <stem> --stale` lists what is stale.

Owner's verdicts so far: Lambrusco "good" after two passes; Toscana 4 "much better, great, no negative
feedback". No third pilot; batches from here. Nothing committed as of 2026-09-14 evening.

**Batch order from here (owner, 2026-09-14: "just keep working, Italy first").** Toscana 1–3 to complete
that region, then the rest of Italy in course order (`ORDER`): Valle d'Aosta, Piemonte, Liguria, Lombardia,
Trentino-Alto Adige, Veneto, Friuli, Marche, Umbria, Lazio, Abruzzo, Molise, Campania, Puglia, Basilicata,
Calabria, Sicilia, Sardegna. Then the twenty region intros as audiobook bridges. Then India as an edit pass.
Each region: outline+ledger files, EN drafts, lint, reader+fact reviews, second pass, NO, NO reviews,
glossary entries for new terms, build, publish. Recordings wait until the owner asks.

### 5b. The sequence for every reading (agreed with the owner 2026-09-14)

An outside review of the Lambrusco pilot found seven things, six of them real, none of which the writer
had caught: a writer cannot see their own habits, and a fresh context can. So every reading, from
Toscana 4 on, goes through this fixed sequence, once:

1. **Outline and ledger** (Gate 1 style, approved by the owner while the approach is still being proven;
   later, per batch).
2. **Draft**, English.
3. **Lint**: `python tools/prose_lint.py <stem> --lang en`. Fix everything it reports or note why not.
4. **Two reviews in fresh contexts**, run in parallel as subagents, each with its brief:
   - `docs/rewrite/REVIEW_READER.md`: rhythm, mannerisms, overclaims, announcing, order of information,
     opening and closing. Ranked, at most five, quoting sentences, proposing the smallest fix. May return
     zero.
   - `docs/rewrite/REVIEW_FACTS.md`: old text + ledger + draft. Lost, changed, unsupported. May return
     empty lists.
   Reviewers report findings; they never rewrite. Fact drift is the risk that matters most at scale and
   a style reviewer will not look for it, which is why there are two.
5. **Second pass** by the writer, accepting or rejecting each finding with a reason in the ledger.
6. **Lint again.** Then the owner reads. **One round only**: a second review round always finds
   something, and a reading gets worse from over-editing.
7. Norwegian, written from the outline and ledger; `/norsk-review`; the reader review again on the
   Norwegian if the Norwegian rules in CLAUDE.md §4b are given to the reviewer as well.
8. Narration for both languages, `stale` check, build, publish preview.

What no reviewer catches reliably, and stays with the owner: whether the chain of causes actually holds,
and whether the history reaches the plate.

---

## 6. Tooling changes, all small

_Status 2026-09-14: items 1 to 3 are done in both repos (uncommitted); `review_no.py --stale` also now reads
each file's intro/drop from the manifest, which it did not before, so it no longer calls every Norwegian file
stale. `tools/prose_lint.py <stem> [--lang no]` or `all` is item 3; it runs on every draft before the owner
sees it, and its MANNERED list grows with each thing he rejects. The Gate 1 outline is
`docs/rewrite/emiliaromagna-1.md`._

### 4d. Added after the owner's first review (2026-09-14)

15. **No punchy personification.** "The calendar did the work", "the tank changed the arithmetic", "the
    tank was never the villain": an inanimate thing performing a human act, three times in two paragraphs.
    The owner: "I don't fancy that type of style, or at least you are overdoing it." Rule 7 already said
    literal over figurative; this is the form the breach takes in practice. At most one such sentence in a
    reading, and only where no literal phrase does the job.
16. **No sentence about the reading.** "This reading is about how…" / «Denne leseteksten handler om …»
    is a lecturer's move, it repeats the summary line, and the owner called it academic. The lead ends on
    the thing itself.
18. **No references to the page** (agreed 2026-09-14, for the audiobook). "Reading four is about…",
    "the next reading", "this module": a listener hears a page number. Write "the last chapter of this
    region" or say what it is about. The lint flags it in both languages.
19. **The region intro doubles as the audiobook bridge.** The twenty (Italy) and fourteen (India) sheet
    intros are rewritten as one spoken paragraph each, and the audiobook reads them between regions.
20. **Openings and closings are the tool's job, not the prose's.** The script standard is now title, prose,
    and no closing line (`--outro none`); the audiobook tool will speak a chapter announcement
    ("Toscana. Four. Bread, beans and the Florentine steak.") when the batch re-record starts.
    Backlog for `tools/audiobook.py`: `--announce`, short synthesised clips joined before each track.
21. **Names in a synthetic voice.** Before the batch re-record, render one name-dense chapter (Sicilia 2)
    in both voices and listen for the words that break; keep a pronunciation list if any do.
17. **Apposition tails in Norwegian.** «…Grasparossa: mørk, tanninrik og fyldig, …, den Lambruscoen som
    …» is grammatical and still reads as a list with a label on the end. Give the tail its own sentence.

1. `narrate.py` (both repos): a `headings` drop target so `<h2>` text is not spoken. Today the regex turns each
   heading into a spoken fragment with a pause around it. The prose must carry its own transitions; that is a
   writing rule, not a tooling one, but the tool has to stop reading them first.
2. Italian `narrate.py` and `review_no.py --narrate`: default English to `--intro title --drop facts,recap,tasting`
   to match India, and record it in `manifest.json` so `--stale` compares against the right script.
3. A small `prose_lint.py` shared by both repos: sentence length ceiling, subject-to-verb distance, the tic list
   from §1a, a paragraph that opens with a bolded name, more than one list per reading, a closing section that is a
   summary. It reports; it does not decide. It exists so the batch review can be spent on the writing rather than on
   counting.
4. `quizcheck.py` already validates shape; add nothing. The re-check is a reading task, not a script.

## 7. Size of the job

| | Italy | India |
| --- | --- | --- |
| Readings | 80 | 56 |
| English words now | 53,000 | 60,000 |
| English words after (target 900–1,100) | ~80,000 | ~58,000 |
| Norwegian after | same again | same again |
| Narration files to re-record | 160 | 112 |
| Narration time (edge-tts EN ~2 min/file, nbtts NO ~2 min/file, background) | ~5–6 h | ~4 h |

The hosted 16 MB previews are unaffected: text is a rounding error and the Opus narration inlined there is
already minimal. The live sites carry everything.

## 8. Risks, and what guards each

- **Fact drift.** A rewrite that reads well and is wrong is worse than what exists. Guard: a per-reading fact
  ledger (kept / moved to box / cut, with reason) produced with each draft, and the current text kept beside the
  new one until the batch is approved.
- **Invented people and scenes.** The easiest way to make prose "engaging" is to make things up. Guard: the rule in
  §2; any new named person or quotation carries a source in the ledger.
- **History for its own sake.** Guard: the delete-the-food test from §1b, applied to every history paragraph.
- **Uniformity at scale.** Eighty readings that all open in a bar at dusk are as dead as eighty that open with a
  date. Guard: batch review, and a log of each reading's opening move so no two neighbours share one.
- **Norwegian calques.** Guard: the §4b rules and `/norsk-review`, unchanged, and writing from facts not sentences.
- **Stale audio shipped silently.** Guard: `stale.py` / `review_no.py --stale` before every publish, as now.

## 9. Order of work, and what I recommend

Italy first, because it needs a rewrite and India needs an edit, and because the owner named an Italian
reading as the one that made him stop. The Indian edit pass can run region by region afterwards at perhaps
twice the speed, since openers, mechanisms and history already work and the job is tics, catalogues, headings and
endings.

Honest sizing: roughly 140,000 words of new English and the same again in Norwegian, plus 272 narration files.
That is not one session; it is a project of some weeks at a region or two per session, and the gates in §5 are
what stop it going wrong at scale. If the owner wants a faster visible result, the narration change in §6 alone
(silent headings, no summary, no tables) can ship for both courses in one session and removes the "cryptic
messages" from every existing chapter without touching a word of prose. It makes every file stale, but they are
about to be re-recorded anyway.

---

## Appendix A. Sources behind §4

**Machine-made prose and writing for the ear**

- Wikipedia, *Signs of AI writing* — significance inflation, tacked-on "-ing" clauses, "serves as", "not X but Y",
  vague attribution, rule of three, the challenges-and-legacy closer. https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- Anthropic, *Prompting Claude Fable 5.1 — Writing density* — "Mannered prose substitutes metaphor and flourish for
  direct statement… When a literal phrase is available, use it." https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1#writing-density
- Carly Ayres, *Spotting machine-made prose* — the "[Topic] isn't just X; it's [metaphor] that [three things]"
  template, uniform sentence shapes. https://carly.substack.com/p/spotting-machine-made-prose
- David Perell on Parker and Stone, *The But & Therefore Rule*. https://perell.com/note/but-therefore-rule/
- Robert McKee, *Story* (Sivers' notes) — "Master storytellers never explain. They dramatize"; ration exposition,
  critical facts last. https://sive.rs/book/Story
- Paul Graham, *Write Simply* and *Write Like You Talk* — read it aloud; "the less energy they expend on your
  prose, the more they'll have left for your ideas." https://paulgraham.com/simply.html https://paulgraham.com/talk.html
- Steven Pinker on the curse of knowledge (Harvard Gazette) — concrete over abstract, drop the hedges, show a
  draft to a real reader. https://news.harvard.edu/gazette/story/2012/11/exorcising-the-curse-of-knowledge
- William Zinsser, *On Writing Well* — the first sentence; "when you're ready to stop, stop"; a place is shown
  through what people do in it. https://grahammann.net/book-notes/on-writing-well-william-zinsser
- Roy Peter Clark, *Fifty Writing Tools* — subjects and verbs first; get the name of the dog; set pace with
  sentence length; gold coins along the path; write toward an ending. https://www.poynter.org/reporting-editing/2006/fifty-writing-tools-quick-list/
- John McPhee, *Draft No. 4* (Nieman Storyboard) — "start somewhere, go somewhere, and sit down when it gets
  there"; pair two subjects so one plus one exceeds two. https://niemanstoryboard.org/2017/12/21/draft-no-4-the-legendary-john-mcphees-master-class-in-the-writers-craft/
- Mojo Manual, *Scriptwriting for audio* — 25 words a sentence; information in the order it must be heard.
  https://www.mojo-manual.org/storytelling/audio-storytelling/scriptwriting-for-audio-stories/
- Hearing Voices, *Narration: writing for the ear*; ALLi, *Ultimate guide to writing for audio* — context before
  detail, linear time, the sentence end as a breath. https://hearingvoices.com/tow/narration-writing-for-the-ear/ https://selfpublishingadvice.org/the-ultimate-guide-to-writing-for-audio/

**Food writers who carry history and place inside the dish**

- Rachel Roddy, *Pasta e ceci* — history as a Friday habit; a quarter, a morning, a smell. https://racheleats.wordpress.com/2009/05/15/pasta-ceci/
- Elizabeth David, *Italian Food* (Irish Times) — overturn the prejudice in the same sentence; a person in one
  balanced clause. https://www.irishtimes.com/culture/books/in-praise-of-older-books-italian-food-by-elizabeth-david-1954-1.3639718
- Waverley Root, *The Food of France / Italy* — two camps, then confess; history in a subordinate clause; long
  set-up, one-line payoff. https://www.goodreads.com/book/show/325238.The_Food_of_France
- Kermit Lynch, *Adventures on the Wine Route* — a grower in four concrete facts; teach a principle by
  contrasting two named wines. https://www.goodreads.com/work/quotes/40875
- Madhur Jaffrey, *Climbing the Mango Trees* (NPR excerpt) — ritual through one household; a meal in order of
  arrival. https://www.npr.org/2010/12/20/6525340/excerpt-from-climbing-the-mango-trees
- Gastro Obscura, *The Conqueror Who Longed for Melons* — person, craving, migration, named dishes, honest limit;
  the Babur chapter is the Partition chapter's shape. https://www.atlasobscura.com/articles/babur-mughlai-food-india
- Fuchsia Dunlop — anchor the foreign thing to a familiar one; teach a technique as the cook's question.
  https://www.goodreads.com/work/quotes/1183330
- Marcella Hazan, *Essentials* — one date carries the argument; "the most useful thing one can know about basil".
  https://www.goodreads.com/work/quotes/20777
- Samin Nosrat; Harold McGee, *The Maillard reactions* — rule before example; actors, event, result, because.
  https://app.ckbk.com/reference/food00011c14s001e001se002/the-maillard-reactions
- John Dickie, *Delizia!* — start from the stereotype and reverse it; a king eating maccheroni at the opera.
  https://italianjournal.it/the-epic-history-of-italians-and-their-food-interview-with-john-dickie/
- Lizzie Collingham and Madhur Jaffrey on butter chicken (NPR, 2024) — state the plausible cause, then the limit
  of the evidence; the one mouthful in sequence. https://www.npr.org/sections/goatsandsoda/2024/03/01/1234793757/butter-chicken-origins-india-madhur-jaffrey-recipe

Not used: the outside `handover/STYLE_BIBLE.md` from 2026-09-13. Its diagnosis overlaps with §1 but it was built
without reading the courses, its banned-heading list does not match the text (only three headings repeat in
eighty Italian readings), and its "one scene, one person, one surprise" checklist is the kind of rule a draft can
satisfy while missing the point. The rules above are about what a paragraph does.
