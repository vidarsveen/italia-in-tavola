# Calabria — wine readings 1 and 2: fact research

Research pass for the rewrite of `content/calabria.js` lessons 1 ("Magna Graecia and the oldest vineyard")
and 2 ("Gaglioppo and Cirò"). Date of research: 17 September 2026.

**Method note.** Web *search* quota for the session ran out early (200/200 calls), so roughly the first fifth of
this work was done by search and the rest by fetching named URLs directly — institutional pages, the
disciplinare aggregators, Semantic Scholar and Europe PMC APIs, Wikisource and LacusCurtius for the ancient
texts. Two consequences the writer should know: (a) the Italian ministry's own variety catalogue
(`catalogoviti.politicheagricole.it`) was down for the whole session (connection refused on two attempts), so
the *Registro Nazionale* entries below come from secondary aggregators, not from the register itself; (b) the
EUR-Lex page carrying the Cirò Classico single document returned empty on three attempts, so the DOCG's EU-side
text is sourced from MASAF's press release, the Italian Gazzetta reference and the published proposal.

**Health warning on the old text.** It is thinner than the regions already rewritten and several of its spine
claims trace to the English Wikipedia article "Calabrian wine", which is wrong on at least three counts (the
number of DOCs, the share bottled as DOC, and Milo of Croton drinking Cirò). Where the old text and English
Wikipedia agree word-for-word in substance, assume copying.

---

## Section 1 — Claim audit

### A. The Magna Graecia framing

**W1. "Greek colonists arrived from the eighth century BC and built cities here, Sybaris, Kroton, Locri."**
- Verdict: CONFIRMED (dates need tightening; two of the three are early 7th century by most reckonings).
- What is true: Sybaris was founded c. 720 BC by Achaean and Troezenian settlers; Kroton c. 710–708 BC by
  Myscellus of Rhypes in Achaea; Locri Epizephyrii "shortly before 720 BC" or in the early 7th century — the
  ancient sources conflict and modern scholarship is divided on whether the colonists came from Opuntian or
  Ozolian Locris. "From the eighth century BC" is defensible for the group; "eighth century" for Locri alone is
  not.
- Source: en.wikipedia, *Sybaris*, *Crotone*, *Locri Epizephyrii* (all citing Strabo and Diodorus);
  https://en.wikipedia.org/wiki/Sybaris , https://en.wikipedia.org/wiki/Crotone ,
  https://en.wikipedia.org/wiki/Locri_Epizephyrii . Strabo's own account: Geography 6.1.12 (Croton, founded by
  Myscellus after consulting the oracle, with Archias of Syracuse sailing up on his way to found Syracuse),
  6.1.13 (Sybaris, "its founder was Is of Helice"), 6.1.7 (Locri, "led out by Evanthes only a little while after
  the founding of Croton and Syracuse"); Loeb text at
  https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Strabo/6A*.html

**W2. "…that were richer than anything in mainland Greece."**
- Verdict: UNVERIFIABLE as stated — and the source tradition is anecdotal.
- What is true: Sybaris's wealth is attested, but by later moralising anecdote. Wikipedia's own summary, on the
  Sybarite luxury stories, is that "many such stories appear embellished"; the claim that the city "ruled over
  4 tribes and 25 cities" is reported as a possibility, and the naming of its founder rests on Strabo alone,
  "and it might be a corruption". No source I reached compares Magna Graecian wealth with mainland Greek
  wealth. Recommend dropping the comparison or replacing it with a concrete: 300,000 men allegedly marched
  against Kroton (Diodorus) — a figure no modern historian accepts, which is itself the interesting point.
- Source: en.wikipedia *Sybaris*, citing Diodorus Siculus and Strabo.

**W3. "Its neighbours destroyed it in 510 BC and, the story goes, diverted a river over the ruins."**
- Verdict: PARTLY RIGHT — the destruction is solid, the river diversion is contradicted by the site's
  geology.
- What is true: Kroton destroyed Sybaris in 510 BC after the tyrant Telys expelled wealthy citizens who took
  refuge at Kroton. Strabo is the source for the Krotoniates diverting the Crathis over the city. But: "An
  analysis of core samples taken from the site did not find such river deposits directly above the former
  city." The reason little of Sybaris is visible is different and better: the city lay near sea level and now
  lies about 6 m down, below the groundwater table, with excavation confined to the Stombi quarter and test
  pits at Parco del Cavallo.
- Source: en.wikipedia *Sybaris*; Strabo 6.1.13.
- Note for the writer: the old text's figure caption already says the water table is why little is visible.
  That caption is right and the body text's "the story goes" is doing honest work — but the core-sample result
  is a better, harder fact than "the story goes".

**W4. "They found a people the Greeks called the Oenotrians" / Calabria as *Enotria*, "the land of wine".**
- Verdict: PARTLY RIGHT. The people are real; the wine etymology is a modern gloss, not an ancient statement;
  and the territory was not Calabria.
- What is true, source by source:
  - Strabo 6.1.2: "Before the Greeks came, however, the Leucani were as yet not even in existence, and the
    regions were occupied by the Chones and the Oenotri."
  - Strabo 6.1.4, quoting Antiochus of Syracuse (FGrHist 555, 5th century BC): the territory "was once called
    Italy, although in earlier times it was called Oenotria."
  - Dionysius of Halicarnassus, *Roman Antiquities* 1.11–1.12, gives an **eponymous-hero** etymology with no
    wine in it: Oenotrus, son of Lycaon of Arcadia, born "seventeen generations before the Trojan expedition",
    left Greece "because he was dissatisfied with his portion of his father's land; for, as Lycaon had
    twenty-two sons, it was necessary to divide Arcadia into as many shares"; and "All the land he occupied,
    which was very extensive, was called Oenotria, and all the people under his command Oenotrians." Of the
    land itself: "Finding there much land suitable for pasturage and much for tillage, but for the most part
    unoccupied…" Text: https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Dionysius_of_Halicarnassus/1B*.html
  - Treccani, *Enotri*: an Italic population settled "in the period before the mid-5th century B.C., **in
    Lucania and Bruzio**", traditionally of Arcadian origin, archaeologically visible from the early Iron Age,
    who "disappeared around the mid-5th century B.C., overwhelmed by Greek colonization and Oscan invasion."
    https://www.treccani.it/enciclopedia/enotri/
  - The οἶνος ("wine") derivation is asserted by en.wikipedia, *Oenotrians*: "A likely derivation of the
    ethnonym Oenotrian is the Greek oînos (οἶνος, 'wine'), as the Oenotrians inhabited a territory rich in
    vineyards" — presented as *likely*, with no ancient citation.
  - A third derivation, from *oinotron* (a vine-stake, hence the "alberello enotrio"), circulates on Italian
    merchant sites (Tannico, https://www.tannico.com/blogs/guide/vini-italiani-vini-calabresi ). I found **no
    institutional or academic source** for it. Do not use it.
- Honest formulation for the course: Enotria is an ancient name for the region, an ancient author does derive
  it from a man not a grape, and the wine reading of the name is a modern inference. Also: Oenotria covered
  Lucania as well as Bruttium, so Basilicata's claim on the name is as good as Calabria's — relevant because
  the Basilicata reading already exists in this course.

**W5. "It is from this world that Calabria's oldest wine story comes: that the wine of Krimisa, near modern
Cirò, was given to victors at the ancient Olympic games."**
- Verdict: WRONG as history; the old text's own hedge ("almost impossible to source") is correct and can now be
  replaced with positive evidence against it. This is the single most important finding in this file.
- What is true:
  1. **Prizes at Olympia were wreaths, not wine.** "The prizes for the victors were olive leaf wreaths or
     crowns." (en.wikipedia, *Ancient Olympic Games*.) No source names wine as a prize.
  2. **Krimisa is real and has no wine attached.** Strabo 6.1.3 says Philoctetes founded Petelia and "the old
     Crimissa". The English Wikipedia article on Krimisa — which covers the site, its 7th-century BC origin,
     its identification at Punta Alice near Cirò Marina, Paolo Orsi's excavations of 1924–29, the later
     campaigns of 1970–90 and the marble acrolith of Apollo of c. 440 BC — **contains no reference to wine or
     to the Olympics at all.** https://en.wikipedia.org/wiki/Krimisa
  3. **The temple there is Apollo's, not Bacchus's.** The sanctuary at Punta Alice is of **Apollo Aleus**,
     founded in legend by Philoctetes, who dedicated the bow of Heracles there. The frequently repeated claim
     that "in Cremissa there was an important temple dedicated to Bacchus, the god of wine" (SMAF Ltd,
     Winetourism.com and others) is contradicted by the archaeology of the site.
  4. **The trade's own telling of the story cites nobody.** WineNews, reporting the EU recognition in 2025,
     writes that "'Krimisa' (or Cremissa), the ancestor of today's Cirò, was the 'official wine' of the Greek
     Olympics", attributing it to "some historians" and naming none.
     https://winenews.it/en/ciro-classico-once-the-official-wine-of-the-olympics-now-acknowledged-at-the-european-level_564530/
  5. **The Wine Scholar Guild, the most serious secondary source on Cirò I found, treats it as legend**:
     victorious athletes "used to be offered Krimisa as a prize" is given as tradition, not fact.
  6. **The modern half of the story is documented and is the real story**: Cirò was served as the official
     wine at the 1968 Mexico City Olympics, and bottles were given at Athens in 2004. That is a 1968 marketing
     act that has been retrojected 2,500 years.
- Source: as listed above.

**W6. "Milo of Croton drank Cirò" (not in the old text, but it is the next thing any writer will meet).**
- Verdict: WRONG. English Wikipedia's *Calabrian wine* states Milo "was reported to drink 10 litres (2.6 US
  gal) of Ciró wine each day", citing Toussaint-Samat, *A History of Food*, p. 263.
- What is true: the ancient source is Athenaeus, *Deipnosophistae* book 10, citing Theodorus of Hierapolis:
  Milo "ate twenty minae of meat, and an equal quantity of bread, and drank three choes of wine" — in the same
  breath as the anecdote that he carried a four-year-old bull round the stadium, killed it and ate it in a day.
  Three choes is roughly 9–10 litres, which is where the "10 litres" comes from, but (a) it is a single
  gluttony anecdote, not a daily regimen, and (b) **no wine is named**. Athenaeus text:
  https://www.attalus.org/old/athenaeus10.html
- Milo's victories, for reference: boys' wrestling at the 60th Olympiad (540 BC), then five wrestling titles
  from the 62nd to the 66th Olympiad (en.wikipedia, *Milo of Croton*).

**W7. "Kroton down the coast produced Pythagoras and the wrestler Milo, and was famous for athletes."**
- Verdict: CONFIRMED. Pythagoras arrived c. 530 BC and founded his school there; Milo as above; Democedes, the
  most celebrated physician of the 6th century BC, was Krotoniate and ended up serving Darius. The sanctuary of
  Hera Lacinia at Capo Colonna was the meeting place and "federal treasury" of the Italiote league.
- Source: en.wikipedia, *Crotone*.

**W8. "In 1972 a diver off Riace found two bronze warriors… cast around 460 and 430 BC, nearly two metres
tall, with eyes of glass and lips of copper."**
- Verdict: CONFIRMED, and can be made sharper.
- What is true: **16 August 1972**, freediver **Stefano Mariottini** saw "part of a dark-coloured shoulder
  projecting from the sand" about 220 m offshore at Riace Marina; recovery 21–22 August. Statue A is c. 1.98 m
  and B c. 1.97 m excluding the tenons — "standing slightly over life size", so "nearly two metres" is right.
  Inlays: copper for lips, eyelashes and nipples; silver teeth in A; eyes of stone and glass. Conventionally
  dated c. 460 BC (A) and c. 430 BC (B). Museo Nazionale della Magna Grecia, Reggio Calabria. But: "There is
  no agreement on the identity of the figures, their provenance or their makers" — so the old text's "the
  finest Greek bronzes anywhere" is a judgement, not a fact, and their Calabrian-ness is unproven (they were
  cargo).
- Source: en.wikipedia, *Riace bronzes*.

**W9. "In a handful of villages in the Aspromonte, the Grecanici speak a Greek dialect that survives from
Byzantine rule and perhaps from Magna Graecia itself."**
- Verdict: CONFIRMED, with the scholarly dispute worth naming.
- What is true: Calabrian Greek (Greko) is spoken in nine towns of the Bovesìa — Bova Superiore, Roghudi,
  Gallicianò, Chorìo di Roghudi, Bova Marina among them — with about **2,000 speakers as of 2010**. Scholars
  divide between derivation from Koine via Medieval Greek, and direct descent from the Doric Greek of Magna
  Graecia, the latter argued from archaisms and Doric words no longer used in Greece.
- Source: en.wikipedia, *Calabrian Greek*.

**W10. Pliny "included Calabrian wine in his listings of quality Italian wines."**
- Verdict: PARTLY RIGHT and booby-trapped. This claim is on English Wikipedia (cited to Hugh Johnson,
  *Vintage: The Story of Wine*, p. 64), and the trap is that **"Calabria" in Latin means the Salento, the heel
  of Italy — modern Puglia. Modern Calabria is ancient Bruttium.**
- What is true: Pliny *does* name wines from modern Calabria in the same sentence, and the sentence is worth
  having. *Naturalis Historia* 14.69: "Verum et longinquiora Italiae ab Ausonio mari non carent gloria,
  Tarentina et Servitia et Consentiae genita et Tempsae, Calabriae Lucanaque antecedentibus Thurinis." —
  the farther parts of Italy from the Ausonian sea are not without glory: the wines of Tarentum and Servitium
  and those born at **Consentia** (Cosenza) and **Tempsa** (on the Tyrrhenian coast of modern Calabria), of
  Calabria (the Salento) and Lucania, with the wines of **Thurii** ahead of them. Latin text:
  https://la.wikisource.org/wiki/Naturalis_Historia/Liber_XIV
- Caveat: this is Wikisource's Latin, not a critical edition, and the line has textual variants (some editions
  read "Babiana Calabriaeque atque Lucaniae"). If the writer quotes it, quote the place-names, not the whole
  clause, and do not translate "Calabriae" as Calabria.
- Better still, from Strabo 6.1.14: the Sybaris plain produced **Lagaritan wine**, "which is sweet, mild, and
  extremely well thought of among physicians", alongside the wine of Thurii. Pliny 14.69 also mentions
  Lagarinum "near Grumentum". So the ancient wine reputation of this coast attaches to the **plain of Sybaris**,
  not to Cirò.

### B. Appellations and law

**W11. "Cirò was the first Calabrian denomination, by decree of 2 April 1969."**
- Verdict: CONFIRMED.
- What is true: approved by **D.P.R. 2 April 1969**, published in **Gazzetta Ufficiale 139 of 4 June 1969**;
  the Italian Wikipedia article states it was the first Calabrian wine to receive the denomination. Later
  modifications: 25.09.1989 (GU 85, 11.04.1990), 09.12.2010 (GU 298), 21.11.2011 (GU 281), 30.11.2011 (GU
  295), **D.M. 07.03.2014**, and an ordinary modification approved **28 July 2025**, in force from the
  2025/2026 vintage.
- Source: https://www.quattrocalici.it/disciplinari/ciro-doc/ ;
  https://www.assovini.it/italia/calabria/item/127-ciro-doc ; https://it.wikipedia.org/wiki/Cirò_(vino) ;
  https://www.disciplinare.it/ciro-doc-approvazione-modifica-ordinaria-del-disciplinare-di-produzione.html
- Not checked this session: where 1969 ranks *nationally*. The DOC system dates from D.P.R. 930/1963 and the
  first denominations were granted from 1966, so Cirò is early-ish but not among the first; I could not verify
  the 1966 list with a source in this session, so do not print a national ranking without checking.
- One outlier: the Wine Scholar Guild article says "The Cirò DOC was established in 1959." That is wrong — the
  DOC law did not exist in 1959 — and it is a useful reminder that even the good secondary source has errors.

**W12. Cirò DOC rules — grapes.**
- Verdict: CONFIRMED (the old text's "at least 80% Gaglioppo" and "at least 80% Greco bianco" are right).
- What is true, from the disciplinare as modified 28 July 2025: **Rosso and Rosato** — Gaglioppo minimum 80%;
  other red varieties authorised for Calabria up to 20%, **except** Barbera, Cabernet franc, Cabernet
  sauvignon, Sangiovese and Merlot, which together may not exceed 10%. **Bianco** — Greco bianco minimum 80%,
  other authorised whites up to 20%.
- Source: disciplinare.it (2025 modification); agraria.org; assovini; it.wikipedia — all four agree.

**W13. Cirò DOC rules — alcohol, yields, ageing, release.**
- Verdict: the old text is right on alcohol and on the two-year Riserva; it omits everything else.
- What is true (2025 text): maximum yields **11.5 t/ha** for rosso and rosato, **12.5 t/ha** for bianco (the
  older text of the disciplinare expressed these as 115 and 125 quintals/ha — the same numbers). Grape-to-wine
  conversion capped at 70%. Minimum **natural** alcohol 12.0% (rosso/rosato) and 10.5% (bianco). Minimum
  **total** alcohol at consumption: Rosso 12.5%, Rosso Superiore 13.5%, Rosato 12.5%, Bianco 11.0%. Minimum
  total acidity 4.5 g/l; minimum dry extract 20 g/l (rosso), 17 (rosato), 16 (bianco). Rosso may not be
  released before **1 June of the year following the harvest**. **Superiore Riserva: minimum two years'
  ageing, counted from 1 January following the vintage.** Bottling in glass only; the Riserva requires a cork
  closure.
- Source: disciplinare.it (2025 modification) for yields/natural alcohol/release dates; it.wikipedia for the
  acidity and extract minimums; assovini for the 24-month Riserva.

**W14. "The zone is Cirò and Cirò Marina in the province of Crotone, with parts of Melissa and Crucoli. Only
red may be labelled classico."**
- Verdict: the zone is CONFIRMED; the Classico restriction is PROBABLY RIGHT but I could not confirm it from
  the current disciplinare text.
- What is true: the DOC covers the entire communes of **Cirò and Cirò Marina** and **part** of **Melissa and
  Crucoli**, province of Crotone. The Italian Wikipedia type list contains Cirò Classico, Classico Superiore
  and Classico Superiore Riserva — all red — and no Classico bianco or rosato, which supports the old text,
  but none of the four sources I reached states the restriction explicitly. Flag for a second check against
  the disciplinare PDF when catalogoviti is up.

**W15. "In November 2023 the classico heartland was raised to the region's first DOCG."**
- Verdict: PARTLY RIGHT — right in substance, incomplete in fact, and now out of date.
- What is true, in order:
  - The project began in **2019**, run by the **Consorzio di Tutela Vini DOC Cirò e Melissa**, president
    **Raffaele Librandi**.
  - The national committee's public assessment (*pubblico accertamento*) took place on **16 November 2023 at
    17:00 at Borgo Saverona, Cirò Marina**, with two MASAF officials and **Francesco Ferreri** for the
    Committee for PDO and PGI wines present.
  - The disciplinare was published in the **Gazzetta Ufficiale of 16 December 2023, n. 293**.
  - The EU step came much later: the Commission granted protection and the **"Cirò Classico" PDO was
    registered in the Official Journal on 25 July 2025**; MASAF announced it the same day, with Minister
    Lollobrigida quoted. The MASAF release itself does **not** claim it is Calabria's first DOCG.
  - What was elevated is specifically the old **Cirò Rosso Superiore Riserva**, renamed Cirò Classico.
- Source: https://www.masaf.gov.it/ciro-classico-dop ;
  https://www.assovini.it/italia/calabria/item/2663-ciro-classico-docg (Gazzetta 16/12/2023 n.293);
  https://www.corrieredellacalabria.it/2023/11/09/ciro-si-avvera-il-sogno-della-docg-nel-ricordo-di-nicodemo-librandi/ ;
  https://www.italiaatavola.net/wine/2023/12/21/perche-ciro-classico-docg-sara-vanto-per-calabria-per-l-italia-intera/101825/ ;
  https://www.laprovinciakr.it/news/306819010054/nasce-il-ciro-classico-docg-nuovo-disciplinare-pubblicato-in-gazzetta-ue

**W16. Cirò Classico DOCG — what the rules actually say.**
- Verdict: CONFIRMED across three independent renderings of the text.
- What is true: **Gaglioppo minimum 90%**, with **Magliocco and/or Greco nero** alone or together up to 10% —
  and **international varieties prohibited outright**, where the DOC allows up to 10% Merlot, Cabernet and
  friends. Zone: the **entire** communes of Cirò and Cirò Marina, from sea level to **462 m**. Maximum yield
  **8 t/ha** (production above 120% of the limit loses the denomination for the whole lot). Minimum natural
  alcohol **13%**. Ageing **at least 36 months, of which at least 6 in wooden containers**, counted from **1
  January of the year following the harvest**. Training: **alberello or spalliera with cordon pruning**.
  Minimum density **4,000 vines/ha** for new plantings. Bottling within the zone is compulsory.
- Source: https://www.disciplinare.it/ciro-classico-docg-proposta-disciplinare-di-produzione-2023.html
  (proposal text, published 18 December 2023); assovini (Gazzetta reference, 90/10, 8 t/ha, 13%);
  Wine Scholar Guild (36 months, 6 in wood); Italia a Tavola ("un anno di affinamento in più, di cui 6 mesi in
  legno" — i.e. one year more than the DOC Riserva's two).

**W17. "The region has twelve DOCs, among them Cirò, Melissa, Savuto, Lamezia, Bivongi, Pollino and Greco di
Bianco."**
- Verdict: WRONG, and instructively so. This is the pre-2011 list. It matches English Wikipedia's "12 DOC
  regions… established in 1968", which is wrong about the date as well.
- What is true today: **nine DOC and one DOCG**, plus **ten IGT**. The DOCs are Bivongi, Cirò, Greco di
  Bianco, Lamezia, Melissa, S. Anna di Isola Capo Rizzuto, Savuto, Scavigna and Terre di Cosenza. The IGTs are
  Arghillà, Calabria, Costa Viola, Lipuda, Locride, Palizzi, Pellaro, Scilla, Val di Neto and Valdamato.
  **Pollino, Donnici, San Vito di Luzzi, Verbicaro, Colline del Crati, Esaro and Condoleo ceased to be DOCs in
  2011**: they became the seven sub-zones of **Terre di Cosenza DOC**. That consolidation, not a collapse, is
  why the old count of twelve is now nine.
- Source: https://www.quattrocalici.it/regione/calabria/denominazioni/ (the page still shows "nessuna DOCG",
  i.e. it has not been updated for Cirò Classico — use it for the DOC/IGT list only);
  https://www.quattrocalici.it/denominazioni/terre-di-cosenza-doc/

**W18. Calabrian DOC dates, in full.**
- Verdict: CONFIRMED (each from the aggregator's decree citation).
- Cirò — D.P.R. 02.04.1969, GU 139 of 04.06.1969
- Savuto — D.P.R. 19.05.1975, GU 291 of 03.11.1975
- Lamezia — D.P.R. 21.12.1978, GU 96 of 05.04.1979
- S. Anna di Isola Capo Rizzuto — D.P.R. 10.01.1979, GU 158 of 11.06.1979
- Melissa — D.P.R. 31.05.1979, GU 326 of 29.11.1979
- Greco di Bianco — D.P.R. 18.06.1980, GU 340 of 12.12.1980
- Scavigna — D.M. 17.10.1994, GU 251 of 26.10.1994
- Bivongi — D.M. 24.05.1996, GU 131 of 06.06.1996
- Terre di Cosenza — D.M. 18.10.2011, GU 256 of 03.11.2011 (modified D.M. 23.11.2015)
- Cirò Classico DOCG — Gazzetta 16.12.2023 n. 293; EU registration 25.07.2025
- Source: the corresponding `quattrocalici.it/denominazioni/…` pages; the Terre di Cosenza decree is also cited
  in the peer-reviewed literature (Fanelli et al. 2021, ref. 6).

**W19. "Greco di Bianco DOC (1980): a passito of at least 95% Greco bianco, minimum 13%, from the commune of
Bianco at the southern tip."**
- Verdict: PARTLY RIGHT — **the minimum alcohol is wrong, and badly**; the zone is bigger than one commune.
- What is true: D.P.R. 18.06.1980. Zone: the commune of **Bianco and part of Casignana**, province of Reggio
  Calabria. Grapes: **Greco bianco minimum 95%**, other authorised whites up to 5%. The wine exists only as a
  passito. Grapes are dried on *graticci* (cane racks) in the sun or in forced-air chambers for **about ten
  days**, losing **35–50% of their weight**. **Minimum total alcohol 17%** (one source parses this as 14%
  actual / 17% potential — see the disagreement below). It may not be released before **1 November of the
  year following the harvest**. The appellation covers roughly **12 hectares** — one of the smallest DOCs in
  Italy.
- Source: https://www.enogastronomia.it/greco-di-bianco-doc/ (10 days, 35–50%, 17% total, release date);
  https://www.arsacweb.it/greco-di-bianco/ (ARSAC, the Calabrian regional agriculture agency: 95% minimum,
  zone, drying method, release date); https://www.quattrocalici.it/denominazioni/greco-di-bianco-doc/ (decree);
  12 ha figure from two secondary sources.
- Disagreement to report: enogastronomia.it and quattrocalici give "17% or more" as the wine's strength;
  winewithseth.com gives "minimum 14% actual alcohol and 17% potential". Both are incompatible with the old
  text's "13 per cent or more". The primary text (the disciplinare PDF) was not reachable; whichever is used,
  the figure must be ≥14%, and the safest sentence is "seventeen degrees of potential alcohol".

**W20. "Almost none is made, and it is one of the oldest continuous sweet-wine traditions in Italy."**
- Verdict: the first half is CONFIRMED; the second half is UNVERIFIABLE.
- What is true: twelve hectares; the new **Consorzio del Greco di Bianco DOP was founded in July 2025** with
  **eleven producers**, led by **Umberto Ceratti**, and its stated ambition is a DOCG. Ceratti's own firm makes
  about **20,000 bottles a year** in half-litre *pulcianella* flasks; Cantine Ielasi makes about 4,000 litres.
  The "oldest tradition" claim appears on the Reggio Calabria tourist board's page as "considered the oldest
  wine in Italy alongside Moscato di Siracusa", with the origin story that Greek colonists landed at the
  Zefirio promontory in the 7th century BC — legend, presented as legend.
- Source: https://www.cronachedigusto.it/vino-e-dintorni/greco-di-bianco-doc-una-nuova-stagione-per-il-passito-della-calabria-ionica-che-punta-alla-docg/ ;
  https://turismo.reggiocal.it/en/food-and-wine/calabrian-wines/greco-di-bianco ;
  https://www.winewithseth.com/winewiki/greco-di-bianco-doc-sweet-greco-passito/

### C. The grapes

**W21. "In 2008 a DNA study took that apart. Gaglioppo turned out to be closely related to Sangiovese, most
probably its offspring, crossed with a second parent nobody has identified."**
- Verdict: PARTLY RIGHT — and four years out of date. The second parent has been identified, twice, and it is
  Calabrian.
- What is true: **Gaglioppo is the offspring of Sangiovese × Mantonico bianco.**
  - Primary finding: Gasparro, M.; Caputo, A.R.; Bergamini, C.; Crupi, P.; Cardone, M.F.; Perniola, R.;
    Antonacci, D., **"Sangiovese and Its Offspring in Southern Italy"**, *Molecular Biotechnology* (2013; online
    2012), DOI 10.1007/s12033-012-9600-1. Molecular characterisation at **52 SSR loci** showed that
    **Sangiovese and Mantonico bianco are the parents of Gaglioppo, of Mantonicone and of Nerello Mascalese**.
  - Independent confirmation: D'Onofrio, C.; Tumino, G.; Gardiman, M.; Crespan, M.; Bignami, C.; de Palma, L.
    et al., **"Parentage Atlas of Italian Grapevine Varieties as Inferred from SNP Genotyping"**, *Frontiers in
    Plant Science* 11:605934 (2021), DOI 10.3389/fpls.2020.605934. SNP genotyping of **1,232 unique varieties**
    (18,775 SNPs on the Infinium 18K array, 6,770 retained after filtering) again gives Gaglioppo as the
    offspring of Sangiovese and Mantonico bianco, and Nerello Mascalese likewise. Mantonico bianco emerges from
    that paper as one of the **founder varieties of south-western Italy**, with 13 parent–offspring
    relationships.
- Source: as cited; Semantic Scholar metadata for the 2013 paper; the Frontiers paper read directly.
- Where the 2008 date comes from: the Italian Wikipedia article on Gaglioppo says a 2008 Italian study showed
  a relationship with Sangiovese and "the Gaglioppo is probably a cross of Sangiovese and another, as yet
  unidentified, variety." That is what the old text copied. It was true in 2008 and stopped being true in 2012.

**W22. "…for most of the twentieth century everyone assumed it had come over with the Greeks."**
- Verdict: CONFIRMED as a description of the tradition.
- What is true: the Greek-origin tradition is recorded on Italian Wikipedia ("According to tradition, ancient
  Greeks introduced the grape to Calabria's Ionian coast") and the name is explained as Calabrian dialect for
  "closed fist", after the compact bunch. Quattrocalici adds that medieval feudal documents and Cistercian
  abbey inventories record its cultivation in the Marchesato of Crotone.
- Note: the genetics do not make the Greek story absurd — Mantonico bianco itself is "an ancient cultivar
  attested in Sicily and Calabria" and the whole Magna Graecia germplasm shows a robust genetic link to Greek
  material (De Lorenzis et al. 2019, below). What the genetics kill is the idea that Gaglioppo *itself* is a
  Greek import: it is a local cross, one of whose parents is Tuscan.

**W23. The wider genetic context of "Greek" grapes in the south.**
- Verdict: worth having, and it is primary.
- What is true: De Lorenzis, G.; Mercati, F.; Bergamini, C. et al., **"SNP genotyping elucidates the genetic
  diversity of Magna Graecia grapevine germplasm and its historical origin and dissemination"**, *BMC Plant
  Biology* 20 (2019), DOI 10.1186/s12870-018-1576-y. Using the 18K SNP array on a large collection from
  southern Italy compared with material from Georgia to Iberia, it found "genetic relationships among
  genotypes from South Italy and the Eastern Mediterranean (Greece)", gene flow from east to west, and
  concluded that "Magna Graecia germplasm was shaped by historical events that occurred in the area due to the
  robust link between South Italian and Greek genotypes". So: the *population* is Greek-linked; the individual
  varieties are mostly local crosses.
- Source: abstract via Semantic Scholar API; open access at BMC.

**W24. "Gaglioppo has thin, pale skins and makes a red that can look almost like a dark rosé."**
- Verdict: CONFIRMED by the oenological literature, and CONTRADICTED by two popular sources — worth stating
  carefully because the mechanism is the interesting part.
- What is true: Calabrian oenologists use Gaglioppo as the standard low-pigment red. Caridi, A.; De Bruno, A.;
  De Salvo, E.; Piscopo, A.; Poiana, M.; Sidari, R., "Selected yeasts to enhance phenolic content and quality
  in red wine from low pigmented grapes", *European Food Research and Technology* (2017), DOI
  10.1007/s00217-016-2750-9, describes Gaglioppo as "a model for grapes with **reduced synthesis of
  anthocyanins**". The same group's earlier work (Caridi, Cufari, Ramondino, *Folia Microbiologica*, 2002, DOI
  10.1007/bf02818698) set out to get "high content of polyphenols from a grape must with a **limited phenolic
  content**". Coppola et al., *Molecules* 26:815 (2021), DOI 10.3390/molecules26040815, found Gaglioppo and
  Magliocco wines varied little under accelerated oxidation "probably due to the **lower anthocyanin/tannin
  ratio**" — i.e. little colour, plenty of tannin, which is exactly the old text's tasting observation, now
  with a mechanism.
- Contradicting sources: Quattrocalici's variety page claims Gaglioppo berries are "rich in anthocyanins and
  tannins" and gives "bright ruby red" wine; Italian Wikipedia says "deep ruby red". Both are variety-profile
  boilerplate. The peer-reviewed measurements win.
- Source: Europe PMC records for the four papers above.

**W25. "Colour: light to medium ruby, turning orange at the rim within a few years."**
- Verdict: CONFIRMED, with a measurement.
- What is true: Caridi, A.; Romeo, R.; De Bruno, A.; Masaneo, C.; Poiana, M., "Long-term effects of different
  starter yeasts on colour and natural antioxidant power of red wines", *European Food Research and
  Technology* (2021), DOI 10.1007/s00217-021-03800-3, followed **87 red wines made from Gaglioppo grapes
  (Calabria, 2009 vintage)** with 29 yeast strains, measured at 4 and 120 months: "Wine ageing decreased the
  red component, the colour intensity, and the DPPH values while the **colour hue values increased**." Rising
  hue is the orange rim, measured over ten years on this grape.

**W26. Where Gaglioppo's tannin comes from.**
- Verdict: new material, mechanism-level, not in the old text.
- What is true: Guaita, M. et al., "Influence of early seeds removal on the phenolic composition of Gaglioppo
  wines", *European Food Research and Technology* (2017), DOI 10.1007/s00217-017-2842-1, found that removing
  the seeds during fermentation cut "total flavonoids, low molecular weight flavans and condensed tannins"
  **without affecting anthocyanin levels**. In other words the grape's famous grip is largely a seed tannin —
  removable — while the little colour it has is skin-bound and unaffected. This is the single best technical
  explanation for why modern Cirò can be perfumed and fine where the old style was hard.

**W27. "Gaglioppo… covers the Ionian hills around Cirò."**
- Verdict: CONFIRMED. **4,214 hectares** nationally, effectively all Calabrian, concentrated in the
  centre-north Ionian sector — Cirò, Melissa, Strongoli, Scandale — with minor plantings elsewhere; registered
  in the national catalogue in **1970**; it appears in 27 denominations including one Sicilian (Faro).
- Source: https://www.quattrocalici.it/vitigni/gaglioppo/
- Caution: quattrocalici gives no census year for its hectare figures. Treat all the hectare numbers in this
  file (W27, W29, W31, W32) as "recent, year unstated" and do not print them with a false year.

**W28. "Greco bianco makes the white of Cirò and, at the far southern tip, the region's most unusual wine."**
- Verdict: WRONG in the way that matters most. **The two are not the same grape.**
- What is true, and this is the second-biggest finding in this file:
  1. Calabria's registered "Greco bianco" (registered 1970, **774 ha**) is **genetically distinct from the
     Greco of Greco di Tufo in Campania**, despite the shared name. (Quattrocalici's variety page states this
     outright: "geneticamente diverso" from the Greco di Tufo grape.)
  2. The grape that makes the **Greco di Bianco passito** is, on molecular evidence, **a Malvasia** — the same
     profile as **Malvasia di Lipari**, and as Malvasia di Sardegna (di Bosa, di Cagliari), Malvasia di Sitges
     in Spain, Malvasia dubrovačka in Croatia and the Malvasia Candida of Madeira and Tenerife. The Reggio
     Calabria tourist board puts it plainly: the grape "does not actually belong to the Greco family, but that
     of Malvasia". A second secondary source describes it as "a distinct local biotype belonging to the
     Malvasia family… **genetically distinct from the Greco Bianco of Cirò DOC**."
  3. There is a further, weaker claim that the "Greco bianco" of **Cirò, Donnici and Lamezia** is in fact
     **Guardavalle** — a separate registered variety (registered 1970, **33 ha**, epicentre at Guardavalle,
     Badolato and Sant'Andrea Apostolo dello Ionio, named in the Bivongi DOC only). I found this asserted in an
     Italian wine-blog summary but **not** in the peer-reviewed material or on the Guardavalle variety page,
     which mentions no such synonymy. **Treat as DISPUTED and do not print it as fact.**
- Source: https://www.ilcalicediebe.com/2018/09/27/il-greco-di-bianco-e-le-malvasie-del-mediterraneo/ (reports
  the Istituto Sperimentale per la Viticoltura di Conegliano work on the Mediterranean Malvasias);
  https://turismo.reggiocal.it/en/food-and-wine/calabrian-wines/greco-di-bianco ;
  https://www.quattrocalici.it/vitigni/greco-bianco/ ; https://www.quattrocalici.it/vitigni/guardavalle/ ;
  https://www.winewithseth.com/winewiki/greco-di-bianco-doc-sweet-greco-passito/
- Cross-reference for the writer: this course established in the Campania readings that Campania's Greco and
  Asprinio share a profile (en.wikipedia, *Greco (grape)*: "DNA profiling confirmed that some plantings in
  Italy described as 'Greco' are genetically identical to the grape variety Asprinio"). So the course can now
  say something precise and unusual: **"Greco" on a Calabrian label, a Campanian label and an Aversa label
  names three different plants.** That is a genuinely new paragraph.

**W29. "Magliocco is the other native red… Confusingly, 'Magliocco' is also one of the thirty-odd synonyms
recorded for Gaglioppo."**
- Verdict: PARTLY RIGHT, and the real picture is better than the muddle the old text leaves.
- What is true, from the one full-text study I read end to end — Fanelli, V.; Roseti, V.; Savoia, M.A.;
  Miazzi, M.M.; Venerito, P.; Savino, V.N.; Pirolo, C.; La Notte, P.; Falbo, M.; Petrillo, F.; Montemurro, C.,
  **"New Insight into the Identity of Italian Grapevine Varieties: The Case Study of Calabrian Germplasm"**,
  *Agronomy* 2021, 11, 1538, DOI 10.3390/agronomy11081538 (12 SSR markers, 97 grape accessions, 64 sampled and
  33 retrieved from the INRGV, Italian Vitis and European Vitis databases):
  - **Magliocco Dolce and Magliocco Canino are two different varieties.** "The genetic analysis showed
    different molecular profiles for Magliocco Dolce and Magliocco Canino, and genetic similarity of the latter
    with the variety Perricone." (Perricone is Sicilian.)
  - **Arvino, Lagrima Nera and Magliocco Dolce are the same variety** — "shared the same molecular profile
    indicating a case of synonymy".
  - **Magliocco Dolce is *not* Greco Nero.** ARSAC's authenticated Magliocco Dolce "showed to be completely
    different from ARSAC-authenticated Greco Nero… which, thus, cannot be considered synonymous of Magliocco
    Dolce" — explicitly overturning Sunseri et al. (2018), who had reported that synonymy.
  - **Magliocco Dolce is not Notardomenico** either, excluding an earlier hypothesis.
  - Separately, **Mantonico Nero is genetically identical to Brettio Nero and is a different variety from
    Mantonico Bianco** — which is why the name **Brettio Nero** was proposed for its registration, "in order to
    clearly distinguish this cultivar from the Mantonico Bianco variety".
  - The paper's own framing of the problem: "The name Magliocco is used to indicate two different grapevine
    varieties: Magliocco Dolce and Magliocco Canino. These are two of the most widespread grapevine varieties
    in Calabria, cultivated mainly in the provinces of Crotone, Catanzaro, and Cosenza."
- English Wikipedia's *Magliocco Canino* page still lists "Gaglioppo" among its synonyms (sourced only to
  Jancis Robinson's 1996 *Guide to Wine Grapes*), while its *Magliocco Dolce* page says DNA shows Magliocco
  Dolce is "unrelated to Magliocco Canino or related varieties, most notably Gaglioppo" (sourced to *Wine
  Grapes*, 2012). Both can be true as statements about **names**; neither supports treating Magliocco as a
  synonym of Gaglioppo in fact. The honest sentence is that the *name* Magliocco has been applied to Gaglioppo
  in some valleys, not that they are the same vine.

**W30. "Magliocco… is darker and softer than Gaglioppo… grown on the Tyrrhenian side around Savuto and
Lamezia."**
- Verdict: PARTLY RIGHT. The geography is displaced: the Magliocco heartland is the **Cosentino**, not the
  Lamezia plain.
- What is true: **Magliocco Canino** (registered 1971, **539 ha**) is centred on the Cosentino — Altomonte,
  San Marco Argentano, the Esaro valley — at 250–500 m, and is the backbone of **Terre di Cosenza DOC**, whose
  *rosso* must be **at least 60% Magliocco**. **Magliocco Dolce** (registered only in **2019**, **45 ha**) sits
  around Donnici south of Cosenza, the Savuto valley, the Tyrrhenian coast between Fiumefreddo and Fuscaldo,
  and parts of the Crati valley. On the measured chemistry, Magliocco Dolce is the **more** phenolic of the two
  Calabrian varieties studied by Fanelli et al., with significantly higher skin flavonoids and
  proanthocyanidins than Brettio Nero, and monovarietal wine at 14.02% alcohol, 171.81 mg/L total anthocyanins
  and 2207 mg/L total polyphenols (2016–2017 seasons). Descriptions of it as "soft" are trade shorthand for
  riper tannin, not for less of it.
- Source: Fanelli et al. 2021, Tables 1 and 4 and the Discussion;
  https://www.quattrocalici.it/vitigni/magliocco-canino/ ;
  https://www.quattrocalici.it/vitigni/magliocco-dolce/ ;
  https://www.quattrocalici.it/denominazioni/terre-di-cosenza-doc/

**W31. Mantonico bianco — the parent nobody planted.**
- Verdict: new material, and the best single fact in the grape section.
- What is true: Mantonico bianco is a parent of Gaglioppo (W21) and of Nerello Mascalese, and — per Crespan,
  M.; Storchi, P.; Migliaro, D., "Grapevine cultivar Mantonico bianco is the second parent of the Sicilian
  Catarratto", *American Journal of Enology and Viticulture* 2017, 68, 258–262 — of **Catarratto**, Sicily's
  most planted white. D'Onofrio et al. (2021) make it one of the founder varieties of south-western Italian
  germplasm, with 13 parent–offspring links. And yet: it was entered in the Italian national catalogue of vine
  varieties only in **2014**, and there are about **10 hectares** of it. It is grown on the Ionian side in the
  Locride and around the Piana di Gioia Tauro, makes both dry and passito wine, and appears in only three
  denominations (Bivongi DOC, Terre di Cosenza DOC — especially the Donnici sub-zone — and Val di Neto IGT).
- Source: https://www.quattrocalici.it/vitigni/mantonico-bianco/ ; Crespan et al. 2017 as cited in Fanelli et
  al. 2021 (reference 10) — I did not read the Crespan paper itself, so attribute it as "reported by".
- Caution: English Wikipedia's *Mantonico bianco* page hedges ("may be one of the parent varieties") because it
  is written off *Wine Grapes* (2012), which predates the confirmations. Do not follow its hedge.

**W32. Calabria's other natives, with numbers.**
- Verdict: CONFIRMED (hectares from the same aggregator, census year unstated).
- Greco nero — registered 1970, **827 ha**, effectively Calabria-only, on ventilated clay-limestone hills of
  the north: Tyrrhenian coast, Crati valley, Pollino slopes. In Bivongi, Lamezia, Melissa, Savuto and Terre di
  Cosenza.
- Nerello Cappuccio — registered 1970, **508 ha** nationally, mostly Etna; authorised in Calabria and named in
  Savuto DOC and S. Anna di Isola Capo Rizzuto DOC and eight Calabrian IGTs.
- Pecorello — registered 1971, **34 ha**, a white of the centre-north on the Sila slopes; in 17 Calabrian
  denominations including Terre di Cosenza.
- Guardavalle — registered 1970, **33 ha**, Ionian Catanzaro; named in Bivongi DOC only.
- Nocera — registered 1970, **15 ha**, historically of Messina province, present in Calabria; in Faro and
  Mamertino in Sicily and several Calabrian IGTs.
- Mantonico bianco — registered 2014, **10 ha** (W31).
- Source: the corresponding `quattrocalici.it/vitigni/…` pages.
- The shape of that list is the story: Calabria's "native heritage" is, in planted fact, **one grape
  (Gaglioppo, 4,214 ha) and a long tail of varieties measured in tens of hectares.**

**W33. "Around Cirò the other Ionian denominations follow the same pattern… Melissa, immediately south… On the
Tyrrhenian side Savuto and Lamezia blend Gaglioppo with Magliocco and Greco nero."**
- Verdict: BROADLY CONFIRMED, with one correction: **Savuto's Gaglioppo minimum is only 35%**, so it is not a
  small-scale Cirò.
- What is true: **Melissa DOC** (1979) — red from Gaglioppo with up to 25% Greco nero; white from Greco bianco
  with Trebbiano and/or Malvasia bianca, though white production has largely ceased; zone in Crotone and
  Catanzaro provinces, sea level to about 300 m, some 10 km from Cirò. **Savuto DOC** (1975) — Gaglioppo at
  least 35%, plus Malvasia nera, Greco nero and Sangiovese, across about twenty communes on both sides of the
  river Savuto in Cosenza and Catanzaro. **Lamezia DOC** (1978/79) — Greco nero, Gaglioppo and Brettio nero for
  reds; Greco bianco and Montonico bianco for whites; a Mantonico type requires **85%** of that variety, and a
  Lamezia rosso can be made from Magliocco with other Calabrian blacks. **Bivongi DOC** (1996) — Gaglioppo,
  Greco nero, Nocera, Calabrese for reds; Greco bianco, Malvasia bianca, Ansonica for whites; Riserva requires
  two years with at least six months in barrel. **S. Anna di Isola Capo Rizzuto** (1979) — Gaglioppo 40–60%
  with Nocera, the two Nerelli and Malvasia nera. **Scavigna** (1994) — two communes, Nocera Terinese and
  Falerna, on a plateau at about 600 m.
- Source: the corresponding `quattrocalici.it/denominazioni/…` pages.

**W34. "The 1969 disciplinare demanded a very high proportion of Gaglioppo and allowed only a little white
grape to soften it. Over the years the minimum came down to 80 per cent."**
- Verdict: UNVERIFIED in its first half. The 1969 text was not reachable this session.
- What is true: the current minimum is 80% and the 2014 and 2025 texts both carry it; the 10% cap on
  international varieties is in the current text; and the DOCG deliberately raises the minimum to 90% and bans
  internationals. The claim about the *original* 1969 composition (reputedly Gaglioppo with up to 5% Trebbiano
  toscano and Greco bianco) is plausible and often repeated but I could not source it. **Either check the 1969
  D.P.R. text or drop the "came down to" narrative and write the DOC-versus-DOCG contrast instead, which is
  fully sourced.**

**W35. "…opinion in the zone is divided about whether that was a rescue or a dilution."**
- Verdict: CONFIRMED, and it has a name and a date.
- What is true: **Cirò Revolution**, founded in **2010**, a coalition of small estates championing Cirò made
  from 100% Gaglioppo without barriques and **opposing the DOC amendments that allowed international
  varieties**. The DOCG of 2023–25, which bans those varieties outright, is that argument's outcome.
- Source: https://www.winescholarguild.com/blog/regions-and-producers/the-wines-of-ciro-what-makes-calabrias-first-docg-so-special

### D. The region's numbers

**W36. "The region has… something over ten thousand hectares of vineyard."**
- Verdict: ROUGHLY RIGHT and falling. Give a year or don't give a number.
- What is true: **9,160 ha as at March 2021**, "less than 2% of the Calabrian cultivated area", citing ISTAT —
  from the peer-reviewed paper, which is the best-sourced figure available: Fanelli et al., *Agronomy* 2021,
  11, 1538, Introduction. Earlier: **11,500 ha** with **368,000 hl** produced, from UIV-ISTAT data **for 2013**
  (Assovini); Quattrocalici's regional page rounds the same dataset to "about 10,000 hectares". Production:
  ~370,000 hl in 2013, **428,000 hl in 2016** (I Numeri del Vino, ISTAT-derived).
- Source: Fanelli et al. 2021; https://www.assovini.it/italia/calabria ;
  https://www.quattrocalici.it/regione/calabria/ ;
  https://www.inumeridelvino.it/2017/08/calabria-molise-e-basilicata-produzione-di-vino-aggiornamento-2016.html
- Note: I could not reach a 2023 or 2024 regional figure. ISMEA's per-denomination tables exist at I Numeri del
  Vino but are published as images, so the numbers are not extractable by fetch.

**W37. "Only about four per cent of the wine the region makes each year is bottled under a DOC."**
- Verdict: WRONG, or at best decades out of date. This is the old text's headline number and it should go.
- What is true: on UIV-ISTAT figures for **2013**, **DOP wines were 43% of Calabrian production and IGP wines
  34.6%**; red and rosé were 75%, white 25%. The "4%" figure comes from English Wikipedia's *Calabrian wine*
  ("only 4% of the yearly production is classified as DOC wine"), cited to the *Oxford Companion to Wine* — an
  entry that also gets the number of DOCs and the Milo story wrong.
- Source: https://www.assovini.it/italia/calabria (UIV-ISTAT 2013); https://en.wikipedia.org/wiki/Calabrian_wine
- Caveat worth writing into the reading rather than hiding: **claimed** DOP entitlement and **bottled** DOP wine
  are different things, and the gap is where the old text's instinct was right. Cirò itself certifies about
  **31,550 hl on a five-year average** and sells about **4 million bottles a year**; against a regional 368,000
  hl that is under a tenth of Calabria's wine in its most famous appellation. If the reading wants a number for
  "how little of it reaches a bottle with a name on it", that comparison is defensible and the 4% is not.

**W38. "The region is 42% mountain and 49% hill."**
- Verdict: CONFIRMED. Italian Wikipedia gives **41.8% mountain, 49.2% hill, 9% plain**; the *Agronomy* paper
  says the region is "prevalently hilly or mountainous (90% of the territory)".
- Source: https://it.wikipedia.org/wiki/Calabria ; Fanelli et al. 2021.

**W39. "…mountains that reach 2,267 metres in the Pollino massif, and inland the granite plateau of the Sila is
forest and pasture at 1,300 metres."**
- Verdict: CONFIRMED on Pollino; the Sila figure is a fair average but its summit is higher.
- What is true: **Serra Dolcedorme 2,267 m** (the highest point in Calabria), Monte Pollino 2,248 m, **Monte
  Botte Donato 1,928 m** in the Sila, Montalto 1,956 m in the Aspromonte.
- Source: https://it.wikipedia.org/wiki/Calabria

**W40. "Vineyards run from sea level to about 700 metres."**
- Verdict: UNVERIFIED regionally; for Cirò it is much lower. The **Cirò Classico zone runs from sea level to a
  maximum of 462 m** (MASAF). Magliocco Canino's Cosentino sites are at 250–500 m; Scavigna's plateau is at
  about 600 m. Nothing I found supports 700 m as a regional ceiling, though it is not implausible.

**W41. Cirò's size — the sources disagree and the writer must choose carefully.**
- Verdict: DISPUTED. Four numbers are in circulation and they measure different things.
  - **530 hectares**, 300 growers and 60 wineries — Corriere della Calabria (Nov 2023), describing what the
    DOCG would cover.
  - **1,500 ha** under the DOC, of which **500 ha** in the Classico zone, 65 wineries and 300 growers in the
    consorzio — Wine Scholar Guild.
  - **about 9,000 hectares**, 300+ growers and 71 wineries — La Provincia KR (April 2025), describing the
    denomination's territory.
  - **about 20,000 hectares**, 25 km of coast and 10 km inland — Italia a Tavola (Dec 2023), describing the
    communal territory of Cirò and Cirò Marina.
- The reconcilable reading: the *communes* cover roughly 20,000 ha, the *delimited zone* several thousand, and
  the *planted vineyard* in the classico heart is around 500. Do not print 9,000 or 20,000 as "vineyard".
- Production, for scale: **about 4 million bottles a year** across the consorzio, 70% sold in Italy; the Rosso
  Classico Superiore Riserva that became the DOCG is about **300,000 bottles a year**; varietal split roughly
  50% Gaglioppo, 30% Greco bianco, 20% others; by colour roughly 40% red, 30% white, 30% rosé.
- Source: Wine Scholar Guild; Corriere della Calabria; La Provincia KR; Italia a Tavola.

### E. Viticulture, phylloxera, emigration, the bulk trade

**W42. "Old vines, old varieties and old bush-trained plots survived here through decades when Tuscany and
Piedmont were pulling theirs out, simply because nobody had the money to change anything."**
- Verdict: WRONG as a general explanation, and contradicted by the best contemporary source.
- What is true: the *Enciclopedia Italiana* entry on Calabria (Treccani, written around 1930) records that **"i
  comuni calabresi sono tutti fillosserati"** — every Calabrian commune had been reached by phylloxera — and
  that the region's vineyard was **"tuttora in lenta ricostruzione"**, still being slowly rebuilt. Phylloxera
  did not skip the poor south; it took it, and the replanting was still unfinished half a century later. What
  survived is therefore **post-phylloxera grafted vineyard**, most of it planted in the twentieth century — for
  example Sergio Arcuri's *alberello* plot at Cirò, explicitly dated by the estate to **1948**.
- Source: https://www.treccani.it/enciclopedia/calabria_%28Enciclopedia-Italiana%29/ ;
  https://www.vinicirosergioarcuri.it/
- The defensible version of the old text's instinct: Calabria was too poor to *replant with something
  fashionable* after the war, so the varieties that went back into the ground after phylloxera were the local
  ones — and the mid-century *alberello* plots are now the old vines. That is a different and better sentence
  than "nobody grubbed anything up".

**W43. Phylloxera dates.**
- Verdict: CONFIRMED for Europe and Italy; Calabria-specific dates not found.
- What is true: first appearance in Europe **1863 at Pujaut in the Gard**; first Italian report **1875 near
  Lecco**, then **1879 at Valmadrera and Agrate**; by **1880** new outbreaks at **Caltanissetta in Sicily** and
  Imperia; grafting onto American rootstock spread through Italy **after 1890**. Treccani's *fillossera* entry
  dates the Italian arrival to 1879 and says the insect destroyed or seriously damaged about a quarter of the
  country's vineyards over the following fifty years.
- Source: https://it.wikipedia.org/wiki/Fillossera_della_vite ;
  https://www.treccani.it/enciclopedia/fillossera/
- Constraint reminder: Campania owns phylloxera-and-sand in this course. Use these dates for chronology only.

**W44. "Between 1880 and the First World War a great part of the population left for America, and emigration
continued into the 1970s."**
- Verdict: DIRECTIONALLY RIGHT, NOT QUANTIFIED. I could not find a Calabria-specific figure for 1880–1915 in
  any source I could reach, and the writer must not invent one.
- What is available:
  - National: emigration "averaged almost 220,000 [a year] in the period 1876 to 1900, and almost 650,000 from
    1901 through 1915"; between 1860 and 1914, 9 million Italians left permanently out of 16 million who
    emigrated (en.wikipedia, *Italian diaspora*, which reproduces a regional chart as an image whose numbers
    are not in the text).
  - Regional grouping: "almost three million people emigrated solely from Calabria, Campania, Puglia and
    Sicily" in the early twentieth century (en.wikipedia, *Italian emigration*).
  - Calabria specifically, from Treccani's *Enciclopedia Italiana*: emigration was high through 1901–1916 with
    a "fortissimo accrescimento" in 1905 and the highest figures of the whole period in **1905–1913**,
    attributed in part to the earthquakes; a strong resumption in 1919–20; then **22,911 (1926), 20,931 (1927),
    9,714 (1928)**; returns peaked at 22,711 in 1908 and bottomed at 10,214 in 1905.
  - Population: Calabria had 1,154,840 inhabitants in 1861, peaked at **2,044,287 in 1951**, and is down to
    **1,827,571 in 2026** — a region that has been losing people for seventy-five years.
- Source: en.wikipedia *Italian diaspora*; Treccani *Calabria* (Enciclopedia Italiana); it.wikipedia *Calabria*
  (population table).

**W45. "The bulk wine… sold in bulk, much of it northwards, to add colour and strength to blends."**
- Verdict: PARTLY RIGHT, and the true version is more surprising than the cliché.
- What is true, and in tension:
  - The generic claim, from a merchant guide: "for many years Calabria supplied blending wines to both Italian
    and foreign producers" on account of "intense colour and high alcohol" (Tannico).
  - The specific and much better claim, from the Wine Scholar Guild: "up to the 2000s, **Gaglioppo was even
    sent up to Piemonte in poor vintages to boost the tannins** of some local wines."
  - These cannot both be about Gaglioppo, which is a low-anthocyanin grape (W24). The colour-and-strength
    trade must have run on other varieties; the Gaglioppo trade ran on **tannin**. If the writer uses the
    Piedmont detail — and it is the best single line in the bulk-wine story, because it inverts the standard
    "southern wine for colour" account — attribute it as reported by the Wine Scholar Guild and do not extend
    it to "colour".
- Source: https://www.tannico.com/blogs/guide/vini-italiani-vini-calabresi ; Wine Scholar Guild, as above.

**W46. Why the vineyard shrank.**
- Verdict: additional, sourced, and absent from the old text.
- What is true: the collapse is attributed to phylloxera, then to cooperatives that prioritised volume over
  quality, then to competition from more profitable crops — **citrus and kiwi** — and then to **EU-funded
  grubbing-up schemes** (Tannico, a merchant guide; the grubbing-up premiums are a matter of EU record but I
  did not source the Calabrian uptake). The measurable outcome is in W36: from 11,500 ha (2013) to 9,160 ha
  (2021).

**W47. Alberello in Calabria.**
- Verdict: thin. What is documented is narrow and should be used narrowly.
- What is true: the **Cirò Classico DOCG permits alberello or spalliera with cordon pruning**, and requires at
  least 4,000 vines/ha for new plantings — so the bush vine is written into the region's top appellation as a
  permitted, not a required, form. Sergio Arcuri's estate at Cirò documents an **alberello plot planted in
  1948**, worked organically ("senza concimi, senza preparati e solamente 2 trattamenti"). The claim that
  Greeks found the Oenotrians training vines on a stake called an *oinotron*, hence "alberello enotrio", comes
  from a merchant site and has no institutional source (see W4) — **do not use it**.
- Source: disciplinare.it (DOCG proposal); https://www.vinicirosergioarcuri.it/
- Constraint reminder: Puglia has already defined *alberello* for this course. The Calabrian specifics
  available are (a) it is one of two permitted forms in the DOCG and (b) individual dated plots like Arcuri's
  1948 vineyard.

**W48. Cirò's soils and climate.**
- Verdict: CONFIRMED at secondary level; no primary soil study found.
- What is true: soils are "primarily clay limestone with some sand outcrops"; the zone lies about 6 km from the
  Ionian in eastern Crotone province; the climate is Mediterranean with hot dry summers and autumn/winter
  rain, and "marine breezes that moderate the heat and help keep the vineyards free of fungal diseases". The
  DOCG-era description adds river terraces, regular hills and sandy-conglomerate rises, sedimentary
  mineral-rich soils, and a microclimate shaped by the Ionian on one side and the Sila highlands on the other.
  Gaglioppo itself is described as suited to clay-limestone, well-drained, hot, bright, low-rainfall sites,
  short-pruned, thick-skinned enough to resist botrytis, with moderate susceptibility to oidium.
- Source: Wine Scholar Guild; La Provincia KR; https://www.quattrocalici.it/vitigni/gaglioppo/

### F. The producers

**W49. Librandi — the full chronology (the old text gives only the name).**
- Verdict: CONFIRMED, with one internal conflict about the founding year.
- What is true, from the firm's own pages: **Raffaele Librandi**, a vine-grower and small entrepreneur,
  fathered six children with Teresa De Franco; the eldest, **Antonio**, left school after the elementary years
  and worked with his father. In **1953**, aged 21 and just out of military service, Antonio took over and
  founded **"Scala e Librandi"** with Antonio Scala to begin bottling Cirò. **1955**: Tenuta Ponta bought.
  **1956**: married Filomena Zito; three children, Raffaele, Walter and Daniela Anna. **1967**: began bottling
  independently as *Azienda Agricola Librandi Antonio Cataldo*, debuting with the **1968** vintage. **1972**:
  engaged the oenologist **Severino Garofano**. Early 1970s: brother **Nicodemo** joined; exports to Germany,
  the Benelux countries, Britain, Switzerland, Austria and Scandinavia by the mid-1970s. **1975**: new winery
  at Contrada San Gennaro on the SS 106 at Cirò Marina. **1983**: first Cirò Rosso Riserva **Duca Sanfelice**.
  **1988**: **Gravello**, Critone and Terre Lontane. **1993**: experimental vineyard programme begun at Tenuta
  Ponta. **1994**: Gravello 1989 took Tre Bicchieri (repeated ten times to 2016). **1997**: 160 ha bought at
  Rosaneti; another 89 ha in 2003. Oenologist **Donato Lanati** brought in for precision viticulture and the
  varietal recovery programme. **1998**: **Magno Megonio** launched (1995 vintage, magnums only). **2002**:
  Asylia. **2003**: **Efeso** launched (2001 vintage). **2009**: 2.5 million bottles, 50% exported to 40+
  countries. **2014**: the firm's first registered clones of Calabrian varieties entered the National Register
  of Vine Varieties. Antonio Librandi died **26 October 2012**, aged 80; the brothers led the firm until 2012.
  **Nicodemo Librandi died in August 2023**, three months before the DOCG vote.
- Source: https://www.librandi.it/chi-siamo ; https://www.librandi.it/antonio-librandi-la-storia-il-ricordo ;
  https://www.corrieredellacalabria.it/2023/11/09/ciro-si-avvera-il-sogno-della-docg-nel-ricordo-di-nicodemo-librandi/
- Conflict to note: Forbes Italia says the company was "founded by Raffaele Librandi in 1953", the firm's own
  history page dates bottling to 1953 and the independent company to 1967, and one trade page says the modern
  business dates from 1950. Use the firm's own memorial page, which is the most circumstantial.
- The old text says Librandi is "the one that funded the grape research". The firm's pages describe an
  in-house experimental vineyard from 1993 and a recovery programme for Magliocco and Mantonico with Lanati;
  the *published* genetics were done by university and CNR groups (Bari, Milan, Reggio Calabria) with ARSAC
  material and, in the case of Fanelli et al. 2021, funding from the **Chamber of Commerce of Cosenza**
  (Deliberazione n. 28, 19/04/2016) and a MIUR-PON project. **Do not write that Librandi paid for the DNA
  work.**

**W50. The smaller estates the old text names.**
- Verdict: PARTLY VERIFIABLE. Founding dates were not obtainable for two of the three.
- What is true: **'A Vita** is at Cirò Marina (SS 106, km 279.8), trading as *Vigna De Franco s.r.l. Società
  Agricola*, founded by **Francesco** (a Calabrian oenologist) and **Laura** (from the north — the site says
  Friulian), who describe their work as "acting responsibly on the territory, favouring biodiversity,
  respecting the slow rhythms proper to agriculture". **No founding year is stated on the site and I could not
  source one** — the importer page I tried returned 404. **Sergio Arcuri**: Cirò, organic, with a documented
  *alberello* plot from **1948**; no founding date on the site. **Cataldo Calabretta**: the site returned no
  readable content. If the rewrite names any of them, name what is documented (the 1948 vines; the Cirò
  Revolution of 2010) rather than a founding date.
- Source: https://www.avitavini.it/ ; https://www.vinicirosergioarcuri.it/
- Also in the zone, and better documented for age: **Ippolito 1845**, which claims "over 170 years" and to be
  "the most ancient wine reality currently existing in Calabria", farming over 100 ha in the classico zone and
  working Gaglioppo, Greco bianco, Calabrese, Pecorello and Greco nero.
  https://www.ippolito1845.it/
- The full producer roll from the Wine Scholar Guild, for reference: Librandi, 'A Vita, Sergio Arcuri, Baroni
  Capoano, Brigante, Cantina Enotria, Caparra & Siciliani, Cote di Franze, Fratelli Cerminara, Fratelli
  dell'Aquila, Ippolito 1845, L'Arciglione di Cataldo Calabretta, Santa Venere, Scala Francesco, Senatore Vini,
  Tenuta del Conte, Vigneti Vumbaca, Zito.

**W51. "Cirò Rosato… is one of the better rosés in the south and costs very little."**
- Verdict: the *proportion* is confirmed, the judgement is a judgement.
- What is true: rosé is about **30% of Cirò's production** — an unusually high share for an Italian red
  appellation, and a direct consequence of the grape's pale skins. That figure is worth having; the price
  claim is not sourced and prices do not belong in the course anyway (see the Vinmonopolet rules in CLAUDE.md
  §11).

**W52. "Traditional Cirò is austere and needs time, three or four years at least, and the old style was often
oxidative and rustic."**
- Verdict: PLAUSIBLE, UNSOURCED as a historical statement; but see W25, where measured colour change over 120
  months on 87 Gaglioppo wines gives the ageing behaviour, and W26, where the seed-tannin result gives the
  mechanism of the style change. The writer can make the same point with evidence instead of assertion.

**W53. "Cirò… at least 80% Gaglioppo, minimum 12.5% alcohol. Superiore needs 13.5%, and Superiore Riserva two
years of ageing."**
- Verdict: CONFIRMED. See W12 and W13. The only thing missing is that the two years run from 1 January
  following the vintage, and that the plain Rosso may not be sold before 1 June of the following year.

**W54. "Alcohol 13–14.5%" in the tasting table.**
- Verdict: consistent with the rules (12.5% minimum for Rosso, 13.5% for Superiore, 13% natural minimum for the
  DOCG) but not independently sourced. Leave as a tasting note, not a fact.

**W55. "Grilled lamb and kid, pork with chilli, aged pecorino crotonese, fileja with 'nduja" (food pairings).**
- Verdict: not audited here; belongs to the food readings' research.

---

## Section 2 — Candidate openings

Ten, with sources and what each opens onto. The banned territory (Greek colonists arriving; transhumance;
phylloxera-and-sand; a named producer introduced with a date) is flagged where a candidate brushes against it.

**O1. Paolo Orsi at Punta Alice, 1924–1929: the temple is Apollo's.**
An archaeologist digging the sand spit north of Cirò Marina through the late 1920s uncovered a sanctuary and,
in the later campaigns, a marble head of Apollo of about 440 BC. The god of the place is Apollo Aleus, to whom
Philoctetes is said to have dedicated the bow of Heracles. There is no Bacchus at Krimisa and no wine in the
record — though the labels will tell you otherwise.
- Source: en.wikipedia *Krimisa* (Orsi 1924–29; campaigns 1970–90; acrolith c. 440 BC); Strabo 6.1.3.
- Opens onto: the whole Olympic-wine myth dismantled in the first paragraph, which frees the rest of the
  reading to be about what Calabria actually has. Unique to Calabria. My first choice.

**O2. Gissing at Cotrone, late autumn 1897, feverish in a bad hotel.**
An English novelist travelling the Ionian coast lies ill at the Concordia, eats badly, and writes of the local
wine that "it was very heady, and smacked of drugs rather than of grape juice"; of the table that "the dishes
were poor and monotonous and infamously cooked"; and of the people he passes that one "meets peasants horribly
disfigured with life-long malaria". The only thing he praises is a radish "from six to eight inches long…
thoroughly crisp and sweet".
- Source: George Gissing, *By the Ionian Sea* (journey 1897, published 1901), chapter VII; Project Gutenberg
  text at https://www.gutenberg.org/files/4354/4354-h/4354-h.htm
- Opens onto: why a region with 2,700 years of vines had no reputation in 1900, and what had to change. A named
  person, a moment, a verdict — and a wine the reading can then take away from him. Unique to Calabria.

**O3. A laboratory result that dispossesses a legend.**
Fifty-two genetic markers, read in a laboratory in Bari, said that Calabria's Greek grape had a Tuscan mother
and a Calabrian father: Sangiovese crossed with Mantonico bianco. Of the father there are about ten hectares
left, and it did not enter Italy's national register of vine varieties until 2014.
- Source: Gasparro et al., *Molecular Biotechnology* 2013, DOI 10.1007/s12033-012-9600-1 (52 SSR loci);
  confirmed by D'Onofrio et al., *Front. Plant Sci.* 11:605934 (2021); 10 ha and the 2014 registration from
  https://www.quattrocalici.it/vitigni/mantonico-bianco/
- Opens onto: reading 2 entire — the grape, the story it lost, and the nearly-extinct parent. A prejudice
  overturned inside two sentences.

**O4. 16 November 2023, five in the afternoon, Borgo Saverona.**
Two officials from the agriculture ministry and a man from the national committee sat down in a hall at Cirò
Marina to decide whether the toe of Italy could have a guaranteed denomination. Three months earlier the man
who had spent his life arguing for it had died.
- Source: https://www.corrieredellacalabria.it/2023/11/09/ciro-si-avvera-il-sogno-della-docg-nel-ricordo-di-nicodemo-librandi/
  (date, time, place, Francesco Ferreri, MASAF officials, Nicodemo Librandi's death in August 2023).
- Opens onto: what the DOCG actually changed — 90% Gaglioppo, no international varieties, 36 months — and
  therefore what the DOC had allowed. **Caution:** it leans on a named producer, though he is named as absent
  rather than introduced with a founding date. If that reads as a breach of the constraint, the same scene
  works with the committee alone.

**O5. The quarrel of 2010.**
A group of small growers around Cirò organised themselves under a name that told you what they thought of the
rules — Cirò Revolution — and set out to make the wine from Gaglioppo alone, without new oak, against a
disciplinare that allowed a tenth of the blend to be Merlot or Cabernet. Fifteen years later the rule they
objected to is gone from the top of the appellation.
- Source: Wine Scholar Guild (Cirò Revolution, founded 2010, 100% Gaglioppo, no barriques, opposed the DOC
  amendments); the DOCG's ban on international varieties from disciplinare.it and assovini.
- Opens onto: the rules as a live argument rather than a table of percentages. Unique to Calabria.

**O6. A vineyard planted in 1948.**
On the hills behind Cirò there is a plot of bush vines that went into the ground in 1948, three years after the
war and twenty-one years before the appellation existed, and it is still cropping — worked without fertiliser
and with two sprays a year.
- Source: https://www.vinicirosergioarcuri.it/ ("Vigna ad alberello del 1948"; "senza concimi, senza preparati
  e solamente 2 trattamenti").
- Opens onto: what "old vines" in Calabria actually means — post-phylloxera, mid-century, planted by people
  who then left — which sets up the honest version of W42. Place at a moment, no name needed.

**O7. Twelve hectares and eleven growers, July 2025.**
The whole of one of Italy's smallest appellations is about twelve hectares at the bottom of the peninsula, and
in July 2025 eleven producers finally formed a consortium to defend it. The wine they make is sold in
half-litre flasks and there is almost none of it.
- Source: https://www.cronachedigusto.it/… (consortium founded July 2025, 11 producers, president Umberto
  Ceratti); 12 ha and the *pulcianella* format from winewithseth.com and secondary sources.
- Opens onto: Greco di Bianco, the drying racks, and the fact that the grape is not a Greco at all.

**O8. Three different plants called Greco.**
Ask for a Greco in Avellino, in Cirò and at Bianco and you will be handed wine from three different vines. At
Bianco the grape in the bottle shares its genetic profile with Malvasia di Lipari, with the Malvasia of Sitges
in Catalonia and with the Malvasia Candida of Madeira.
- Source: turismo.reggiocal.it ("does not actually belong to the Greco family, but that of Malvasia");
  ilcalicediebe.com on the Mediterranean Malvasias; quattrocalici on Greco bianco being genetically distinct
  from Greco di Tufo's Greco; en.wikipedia *Greco (grape)* on Greco/Asprinio.
- Opens onto: how much of "Greek" Calabria is a name rather than a plant — which is the same point as the
  Krimisa myth, made with a grape instead of a temple. **Caution:** a naming-puzzle opener risks reading as a
  thesis; it needs a person or a counter in front of it.

**O9. Milo's three choes.**
Athenaeus, writing around AD 200 and citing Theodorus of Hierapolis, says the wrestler from Kroton ate twenty
minae of meat and as much bread and drank three choes of wine — about ten litres — after carrying a bull round
the stadium and killing it. The story is 700 years later than Milo. It does not say what the wine was, and
neither did anyone else for the next two thousand years.
- Source: Athenaeus, *Deipnosophistae* 10, at https://www.attalus.org/old/athenaeus10.html ; the modern
  attribution to Cirò is en.wikipedia *Calabrian wine*, citing Toussaint-Samat.
- Opens onto: the whole apparatus of ancient authority the region's labels lean on. A person with an appetite,
  and the prejudice overturned inside the paragraph.

**O10. The tanker at the cellar door.**
For most of the twentieth century the wine of the Ionian hills left Calabria before it had a name on it, and
some of it went to Piedmont — not for colour, which this grape has little of, but to put tannin into thin
vintages of wines that would be sold under a famous name.
- Source: Wine Scholar Guild ("up to the 2000s, Gaglioppo was even sent up to Piemonte in poor vintages to
  boost the tannins of some local wines"); the low-anthocyanin chemistry from Caridi et al. 2017 and Coppola et
  al. 2021.
- Opens onto: bulk wine, the 43%/34.6% split, and the inversion of the usual southern-blending story.
  **Caution:** single secondary source for the Piedmont detail; attribute it.

**Genuinely unique to Calabria, for the writer's shortlist:** the Apollo temple at Krimisa (O1); Gissing's
verdict on the wine (O2); Mantonico bianco as a founder variety of southern Italy with ten hectares left (O3);
the 2010 Cirò Revolution and its vindication in 2023–25 (O5); the Greco-that-is-a-Malvasia (O8); the
tannin-not-colour bulk trade (O10).

---

## Section 3 — Unguarded claims

Statements in readings 1–2 that are plausible, widely repeated and for which I found **no** primary or
institutional source. Each needs rewriting, hedging or dropping.

1. **"The wine of Krimisa was given to victors at the ancient Olympic games."** No ancient citation exists;
   Olympic prizes were wreaths; the Krimisa sanctuary is Apollo's; the trade's own reporting attributes it to
   unnamed "historians". The 1968 Mexico City service is the documented part. (W5)
2. **"It has been growing wine for longer than almost anywhere in the country"** and the reading's title,
   **"the oldest vineyard"**. Nothing establishes a Calabrian precedence over Sicily, Campania, Puglia or
   Basilicata; the *Agronomy* paper calls Calabria "supposed to be a secondary centre of grapevine
   domestication along with Sicily", which is a hypothesis about domestication, not a claim about continuous
   cultivation. Note the same paper calls Magna Graecia as a whole "the oldest wine growing region of Italy" —
   a regional, not a Calabrian, claim.
3. **"Cities… richer than anything in mainland Greece."** (W2)
4. **"Only about four per cent of Calabrian production is classified DOC."** Contradicted by UIV-ISTAT. (W37)
5. **"Twelve DOCs."** Nine, plus the DOCG. (W17)
6. **"Old vines… survived because nobody had the money to change anything."** Contradicted by the 1930
   statement that every Calabrian commune was phylloxerated and replanting still unfinished. (W42)
7. **"Between 1880 and the First World War a great part of the population left."** Directionally supported, but
   no Calabria-specific figure was obtainable. Do not put a number on it. (W44)
8. **"What flat land there was on the coast was malarial until the middle of the twentieth century."** Gissing
   in 1897 supports the malaria; the *eradication date* is unsourced here, as is the land reform ("legge Sila",
   12 May 1950) — the pages I reached document only the *legge stralcio* n. 841 of 21 October 1950 and give no
   Calabrian figures.
9. **"Vineyards run from sea level to about 700 metres."** (W40)
10. **"One of the oldest continuous sweet-wine traditions in Italy"** (Greco di Bianco). Asserted by the
    regional tourist board as tradition. (W20)
11. **"Greco di Bianco… at 13 per cent or more."** Wrong; every source says 14% actual or 17% total/potential.
    (W19)
12. **"Melissa… is often better value than its famous neighbour."** A trade opinion; no source.
13. **"'Magliocco' is also one of the thirty-odd synonyms recorded for Gaglioppo."** The number "thirty-odd" is
    unsourced; the synonym relationship is a naming fact, not a genetic one. (W29)
14. **"The 1969 disciplinare demanded a very high proportion of Gaglioppo and allowed only a little white grape
    to soften it."** The 1969 text was not reachable. (W34)
15. **"Librandi… the one that funded the grape research."** The published genetics were funded elsewhere; the
    firm funded its own varietal recovery. (W49)
16. **"Only red may be labelled classico."** Probably right; not confirmed from the current disciplinare. (W14)
17. **"It is never a soft, jammy southern red"** and the rest of the tasting prose: fine as tasting notes,
    but they are judgements and should not be dressed as facts.

---

## Section 4 — What the old text misses

Ordered by how much I think each would improve the readings.

**1. The second parent, and what it costs to lose a grape.** Gaglioppo's parents are Sangiovese and **Mantonico
bianco** — and Mantonico bianco is not a footnote: D'Onofrio et al. make it one of the founder varieties of
south-western Italian germplasm, a parent of Nerello Mascalese, and (per Crespan et al. 2017) of Catarratto,
the most-planted white grape in Sicily. There are about ten hectares of it, and Italy did not enter it in the
national register until 2014. A grape that made three of the south's important varieties was nearly farmed out
of existence.

**2. The mechanism of Gaglioppo.** The grape is a measured low-anthocyanin variety used by Calabrian
researchers as the model for pigment-poor reds; its wines lose red and gain hue over ten years (87 wines, 2009
vintage, measured at 4 and 120 months); and its tannin is substantially seed tannin, which can be removed
during fermentation without touching the colour. That is the whole "pale but tannic" paradox with a cause, and
it explains both the old austere style and the modern perfumed one. (W24, W25, W26)

**3. "Greco" is a name, not a plant.** Three claims, each separately sourced: Calabria's registered Greco
bianco is genetically distinct from the Greco of Greco di Tufo; the grape in the Greco di Bianco passito is a
Malvasia, sharing a profile with Malvasia di Lipari and the Malvasias of Sardinia, Sitges, Dubrovnik, Madeira
and Tenerife; and the course has already established that Campania's Greco and Asprinio are the same. Given the
reading's theme — a Greek inheritance that turns out to be mostly a Greek *name* — this is the strongest new
paragraph available. (W28)

**4. The DOCG as the end of an argument.** The old text has the 2023 date and nothing about what it means.
What it means: minimum Gaglioppo up from 80% to 90%; Magliocco and Greco nero the only permitted companions;
**international varieties prohibited**, where the DOC allows 10% Merlot, Cabernet, Sangiovese or Barbera;
thirty-six months' ageing including six in wood, against the DOC Riserva's twenty-four; eight tonnes a hectare;
four thousand vines a hectare on new plantings; bottling in the zone. And the EU completed it only on 25 July
2025. The small growers who formed **Cirò Revolution in 2010** to oppose exactly that 10% won. (W16, W35)

**5. Nine DOCs, not twelve — because seven became one.** Pollino, Donnici, San Vito di Luzzi, Verbicaro, Esaro,
Condoleo and Colline del Crati stopped being separate denominations in 2011 and became the sub-zones of **Terre
di Cosenza DOC**, whose red must be at least 60% Magliocco. That consolidation is the most consequential piece
of Calabrian wine administration since 1969 and the old text does not mention it. (W17, W30)

**6. Magliocco is two grapes and the important one is in Cosenza.** Magliocco Canino (539 ha, registered 1971,
genetically close to Sicily's Perricone) and Magliocco Dolce (45 ha, registered 2019, identical to Arvino and
Lagrima Nera) are different varieties; neither is Gaglioppo; and Magliocco Dolce is *not* Greco Nero, contrary
to a 2018 paper that the 2021 study explicitly overturns. The heartland is the Cosentino at 250–500 m, not
Lamezia. (W29, W30)

**7. The vineyard is still shrinking.** 11,500 ha in 2013; **9,160 ha in March 2021**, under 2% of the region's
cultivated land. The reading frames Calabria as a region on the way up; on planted area it is a region still
contracting, and the recovery is a quality recovery inside a shrinking base. (W36, W46)

**8. What the ancients actually praised on this coast.** Not Cirò. Strabo 6.1.14 singles out **Lagaritan**
wine, "sweet, mild, and extremely well thought of among physicians", and the wine of **Thurii** — both in the
plain of Sybaris, at the other end of the region. Pliny 14.69 names wines "born at **Consentia** and
**Tempsa**" and puts the **Thurian** ahead of them. If a reading wants an ancient wine reputation for modern
Calabria, it is northern and Tyrrhenian, and it is not the one on the labels. (W10)

**9. The scale of Cirò, honestly.** About 4 million bottles a year from the consorzio; roughly 500 ha in the
classico heart; 60–71 wineries and about 300 growers; 40% red, 30% white, 30% rosé — that last split being a
direct consequence of the grape's pale skins and worth saying, because a third of a famous red appellation
being rosé is genuinely unusual. (W41, W51)

**10. Ten days on the racks.** Greco di Bianco's grapes dry on *graticci* in the sun or in forced-air chambers
for about ten days and lose 35–50% of their weight; the wine reaches seventeen degrees of potential alcohol and
cannot be sold before 1 November of the year after the harvest; the appellation is about twelve hectares and
got its first consortium in **July 2025**, eleven producers strong. The old text's "almost none is made" is
right and can now be given a size. (W19, W20)

**11. Sybaris is under the water table, and the river story is disproved.** Core samples found no river
deposits above the city; it lies about six metres down, below groundwater. The old text's caption already knows
this; the body text should.

**12. The Piedmont tannin trade.** Reported up to the 2000s: Gaglioppo sent north to stiffen thin vintages.
Single secondary source, so attribute — but it inverts the standard story of southern bulk wine, which was
about colour and alcohol, and it fits the chemistry exactly. (W45)

---

## Appendix — sources by rank

**Primary / institutional**
- MASAF, *Riconosciuto il Cirò Classico DOP*, 25 July 2025 — https://www.masaf.gov.it/ciro-classico-dop
- Cirò Classico DOCG proposed disciplinare, published 18 December 2023 —
  https://www.disciplinare.it/ciro-classico-docg-proposta-disciplinare-di-produzione-2023.html
- Cirò DOC disciplinare, ordinary modification approved 28 July 2025 —
  https://www.disciplinare.it/ciro-doc-approvazione-modifica-ordinaria-del-disciplinare-di-produzione.html
- ARSAC (Agenzia Regionale per lo Sviluppo dell'Agricoltura in Calabria), *Greco di Bianco* —
  https://www.arsacweb.it/greco-di-bianco/
- Treccani, *Calabria* (Enciclopedia Italiana, c. 1930) and *Enotri*, *Fillossera*

**Peer-reviewed**
- Fanelli, V. et al. (2021). New Insight into the Identity of Italian Grapevine Varieties: The Case Study of
  Calabrian Germplasm. *Agronomy* 11, 1538. DOI 10.3390/agronomy11081538. (Read in full.)
- D'Onofrio, C. et al. (2021). Parentage Atlas of Italian Grapevine Varieties as Inferred from SNP Genotyping.
  *Frontiers in Plant Science* 11, 605934. DOI 10.3389/fpls.2020.605934
- Gasparro, M. et al. (2013). Sangiovese and Its Offspring in Southern Italy. *Molecular Biotechnology*. DOI
  10.1007/s12033-012-9600-1
- De Lorenzis, G. et al. (2019). SNP genotyping elucidates the genetic diversity of Magna Graecia grapevine
  germplasm. *BMC Plant Biology* 20. DOI 10.1186/s12870-018-1576-y
- Sunseri, F. et al. (2018). SNP profiles reveal an admixture genetic structure of grapevine germplasm from
  Calabria. *Australian Journal of Grape and Wine Research* 24, 345–359. DOI 10.1111/ajgw.12339 (abstract not
  retrievable; cited here only as the study that Fanelli et al. 2021 contradicts on Magliocco Dolce = Greco
  Nero)
- Caridi, A. et al. (2017), *Eur. Food Res. Technol.*, DOI 10.1007/s00217-016-2750-9 (Gaglioppo as the model
  low-anthocyanin grape); Caridi, A. et al. (2021), DOI 10.1007/s00217-021-03800-3 (colour over 120 months);
  Guaita, M. et al. (2017), DOI 10.1007/s00217-017-2842-1 (seed tannin); Coppola, F. et al. (2021),
  *Molecules* 26, 815, DOI 10.3390/molecules26040815 (anthocyanin/tannin ratio)
- Crespan, M.; Storchi, P.; Migliaro, D. (2017). *Am. J. Enol. Vitic.* 68, 258–262 (Mantonico bianco as parent
  of Catarratto) — cited via Fanelli et al. 2021, not read directly

**Ancient texts**
- Strabo, *Geography* 6.1.2, 6.1.3, 6.1.4, 6.1.7, 6.1.12, 6.1.13, 6.1.14 (Loeb, Jones) —
  https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Strabo/6A*.html
- Dionysius of Halicarnassus, *Roman Antiquities* 1.11–1.12 —
  https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Dionysius_of_Halicarnassus/1B*.html
- Pliny, *Naturalis Historia* 14.69 (Latin Wikisource — not a critical edition)
- Athenaeus, *Deipnosophistae* 10 — https://www.attalus.org/old/athenaeus10.html
- George Gissing, *By the Ionian Sea* (1901) — https://www.gutenberg.org/files/4354/4354-h/4354-h.htm
- Edward Lear, *Journals of a Landscape Painter in Southern Calabria* (1852; journey of 1847) —
  archive.org text. Wine mentions are thin and incidental: "supper, an unostentatious meal, accompanied by
  tolerable wine" (29 July, Motta San Giovanni); "a substantial meal of maccaroni, &c., good wine, and
  sparkling snow" (30 July, Bagaladi); "a feeble dinner of eggs, figs and cucumber, wine and snow" (3 August,
  Palizzi). Useful for the food readings; not enough for a wine opening.

**Trade and secondary (use with attribution)**
- Wine Scholar Guild on Cirò (the most detailed secondary source; but it dates the DOC to 1959, which is
  wrong)
- Quattrocalici (decree dates, variety registrations and hectares — hectare figures carry no census year)
- Assovini (regional UIV-ISTAT 2013 statistics; decree details)
- Corriere della Calabria, Italia a Tavola, La Provincia KR, Cronache di Gusto, WineNews (DOCG and consortium
  reporting)
- librandi.it, ippolito1845.it, vinicirosergioarcuri.it, avitavini.it (estate histories)

**Known to be wrong, listed so nobody re-imports them**
- English Wikipedia, *Calabrian wine*: "12 DOC regions… established in 1968"; "only 4% of the yearly
  production is classified as DOC wine"; Milo "reported to drink 10 litres of Ciró wine each day".
- SMAF Ltd and Winetourism.com: "a temple dedicated to Bacchus" at Cremissa.
- Tannico: the *oinotron* / "alberello enotrio" etymology of Enotria.
- Quattrocalici's Gaglioppo page: berries "rich in anthocyanins" (contradicted by the measurement literature).
