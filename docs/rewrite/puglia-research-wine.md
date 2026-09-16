# Puglia — research pass for the two wine readings (1: olives, sun and the Salento; 2: Primitivo and Negroamaro)

Research done 2026-09-16 for the rewrite of `content/puglia.js` readings 1 and 2 (`window.READINGS['IT-75']`).
Claims extracted from the existing text; verdicts CONFIRMED / CORRECTED / DISPUTED / UNSUPPORTED / CANNOT VERIFY.
Labels: **[producer]** the estate's own account, **[promotional]** consortium/marketing/tourism, **[press]** trade or
local press, **[reference]** encyclopaedia or appellation mirror, **[official]** government/EU/region, **[academic]**
peer-reviewed, **[advocacy]** farmers' union or campaigning body, **[calculated]** arithmetic of mine.

**Note on primary sources.** `catalogoviti.politicheagricole.it` (the Ministry's register) refused every connection
again (`ECONNREFUSED 93.32.50.151`), and the Regione Puglia disciplinare PDF for Primitivo di Manduria refused too.
Every rulebook below therefore comes from mirrors (disciplinare.it, agraria.org, assovini, quattrocalici,
italianwinecentral) plus the Consorzio's own site. They agreed on every number I checked twice **except** the Gioia
del Colle Primitivo composition (W38) and the Salice Salentino Negroamaro minimum (W40), both flagged. The web-search
budget ran out near the end; the last few items were closed by direct fetch, and two remain open (marked CANNOT
VERIFY THIS PASS).

**Headline: reading 2 contains a flat factual error in its most quotable sentence — Dolce Naturale is not "the
region's only DOCG"; Puglia has four, and the other three were all created in the same year. Reading 1's Xylella
section is three years out of date in the one dimension that matters (the front is in the province of Bari, not
"around Brindisi and Taranto", and the Valle d'Itria is inside the delimited area, not north of it), calls tolerance
"resistance" when the CNR explicitly refuses that word, and carries a 21-million-tree figure that comes from a
farmers' union press release, not from any scientific count. Beyond that: the coast is twice as long as the text
says, the DOP oils are five not four, Puglia is not Italy's largest producer of table olives (Sicily is) nor its
largest producer of wine (Veneto has been for years), Minutolo is not a Fiano, Gioia del Colle's altitudes and
Fino's vine age are both wrong, and the Benedictine-cutting story has no source at all.**

---

## Part A — verification

### Reading 1 — geography, oil, Xylella

### W1. "four hundred kilometres of coast on two seas"
**Verdict: CORRECTED, and the real figure is the better one.**
Puglia's coastline is about **800 km** — the longest of any mainland Italian region (only Sardinia and Sicily,
islands, have more). Region area **19,540.90 km²**.
URLs: https://en.wikipedia.org/wiki/Apulia **[reference]** , https://www.laterradipuglia.it/benvenuti-in-puglia/regione-puglia/le-coste-della-puglia **[promotional, agrees]**
**Use:** "eight hundred kilometres of coast, more than any other region on the mainland."

### W2. "almost no mountains"
**Verdict: CORRECTED as stated; true in spirit, false as written.**
The highest point of Puglia is **Monte Cornacchia, 1,152 m**, in the Monti Dauni on the Campanian border; the Gargano
promontory also rises above 1,000 m. Puglia is the flattest of the southern regions, but it is not mountainless.
URL: https://en.wikipedia.org/wiki/Apulia **[reference]**
**Safe wording:** "no mountain spine down the middle" — the Apennine chain ends west of the region.

### W3. "sun, three hundred days of it"
**Verdict: UNSUPPORTED — no meteorological source gives such a count.**
What is measured, for Brindisi over the standard 1961–1990 thirty-year period: **6.8 sunshine hours a day on
average**, **69 rain days a year**, **574.3 mm of rainfall**, mean annual max 20.2 °C, mean annual min 12.9 °C.
URL: https://it.wikipedia.org/wiki/Brindisi **[reference, climate table]**
**Recommendation:** drop "three hundred days". "Sixty-nine days of rain in a year" says the same thing and is a real
number. (A thorough check of ISPRA/Aeronautica Militare eliofania tables was not possible before the search budget
ran out — CANNOT VERIFY THIS PASS whether any official body publishes a "clear days" count for Lecce or Brindisi.)

### W4. "more olive trees than any other region in Europe: around sixty million"
**Verdict: the 60 million is the standard figure but it is an advocacy figure; the European superlative is
UNSUPPORTED.**
- **60 million trees** is quoted by Coldiretti Puglia and by regional officials (it was given at the presentation of
  the first regional census by the then assessor Lorenzo Nicastro), together with "40% of the southern olive
  surface, almost 32% of the national and 8% of the EU total, a billion euro of gross saleable production".
  English Wikipedia hedges to "**an estimated 50–60 million olive trees**".
  URLs: https://puglia.coldiretti.it/news/xylella-infettato-40-puglia-addio-a-21-mln-ulivi/ **[advocacy]** ,
  https://www.lagazzettadelmezzogiorno.it/news/home/325203/ricchezza-di-puglia-60-milioni-di-ulivi-oggi-piu-tutelati.html **[press]** ,
  https://en.wikipedia.org/wiki/Apulia **[reference]**
- Hard census numbers instead: **161,009 olive-growing holdings** in Puglia at the 2020 agricultural census;
  Italy's olive area fell to **994,318 ha in 2020** from **1,123,330 ha** ten years earlier; Puglia is **27.3% of its
  own utilised agricultural area under olives**, down 2.7% since 2014.
  URLs: https://olivonews.it/gli-oliveti-in-italia-scendono-sotto-il-milione-di-ettari/ **[press citing ISTAT]** ,
  https://www.regione.puglia.it/web/ufficio-statistico/-/mediobanca.-l-industria-dell-olio-d-oliva.-anni-2024-2025 **[official, Mediobanca report]**
- No source I reached compares Puglia with Andalusia, which has far more trees. **Delete "than any other region in
  Europe".** Andalusia alone is usually credited with 170–180 million.

### W5. "something like 40% of Italy's olive oil in a normal year"
**Verdict: CORRECTED — the number is low, and the spread between years is the real story.**
Sources, all different years and bases:
- **45.1% of national production**, Puglia first, ahead of Sicily 10.7% and Calabria 10.3%, Tuscany 8.3%, Lazio 6.8%
  — Area Studi Mediobanca, olive-oil industry report, published February 2026.
  URL: https://www.statoquotidiano.it/18/02/2026/puglia-prima-in-italia-per-produzione-dolio-doliva-report-sullindustria-dellolio-doliva/1286462/ **[press citing Mediobanca]**
- **Just under 50%** of the 2024/25 crop: about **100,000 t of a national 224,000 t** (ISMEA with Unaprol). Within
  Puglia: Bari 41,495.1 t, BAT 35,007.4 t, Brindisi 13,541.3 t, Foggia 13,254.8 t.
  URL: https://ilikepuglia.it/14/11/2024/puglia-olio-oliva-evo/ **[press citing ISMEA/Unaprol]**
- **Over 60%** in 2023/24, reported as a first, and explained partly by the collapse of the centre-north that year.
  URL: https://olivonews.it/olio-la-puglia-sopra-il-60-della-produzione-nazionale/ **[press]**
- **38% of national oil production / 35.5% of national olive area** at the 2020 census basis.
  URL: https://olivonews.it/gli-oliveti-in-italia-scendono-sotto-il-milione-di-ettari/ **[press citing ISTAT]**
**Recommendation:** "between a third and a half of Italy's oil, depending on the year" is defensible on all of these;
a single percentage is not. If one number is wanted, use the Mediobanca 45.1% and name the source and decade.

### W6. "largest producer of table olives"
**Verdict: WRONG. Sicily leads.**
Italian table-olive production runs **40,000–75,000 t** a year. **Sicily is about half of it** (one source says 42%),
**Puglia a distant second** (about 27%), then Calabria. Main cultivars: Nocellara del Belice in Sicily, **Bella di
Cerignola in Puglia**, Ascolana Tenera in the Marche/Abruzzo, Itrana in Lazio/Campania. Only about a third of Italian
table olives come from cultivars intended for the table; Italy is a net importer, over 100,000 t in, rarely 40,000 t out.
URL: https://olivoeolio.edagricole.it/prezzi-olio/olive-da-mensa-i-numeri-italia/ **[press, trade, 2018 data]**
**Flagged disagreement:** a search-engine summary of ISTAT tables returned "Puglia 7,548,500 quintals of olive da
tavola, Calabria 5,558,490, Sicilia 3,572,591" — those are almost certainly *total* olives, not table olives, and
they contradict every trade source. Do not use them. **Replace the claim with Bella di Cerignola**, which is a real
Puglian table-olive fact.

### W7. The three-part division: Tavoliere / Murge / Salento, and "second only to the Po valley in size"
**Verdict: CONFIRMED.**
The **Tavoliere delle Puglie is about 3,000 km²** (some sources up to 4,000) and is **the second-largest plain in
Italy after the Po plain**. It is bounded by the Daunian Apennines to the west, the Gargano and the Adriatic to the
east, the Murge to the south.
URLs: https://en.wikipedia.org/wiki/Tavoliere_delle_Puglie **[reference]** ,
https://www.treccani.it/enciclopedia/tavoliere-di-puglia/ **[reference]**

### W8. "the Murge, a limestone plateau that rises to 600 metres behind Bari and Andria"
**Verdict: CORRECTED.** The Murge plateau covers roughly **200,000 ha**, averages **400–500 m**, and reaches
**679 m at Monte Caccia** (one source rounds to 680). "600 metres" understates it; 679 m is the figure.
URLs: https://it.wikivoyage.org/wiki/Murge **[reference]** , https://www.winetourism.com/wine-appellation/gioia-del-colle/ **[promotional, agrees on the plateau]**

### W9. "its language was Greek until a few centuries ago and still is in a handful of villages"
**Verdict: CONFIRMED, and the detail is much better than the sentence.**
- Griko was spoken across most of the Salento **at least until the 16th century**. Byzantine-era immigration produced
  **about forty Greek-speaking villages** in the band between Otranto and Gallipoli. By the early 19th century the
  survivors were the **Decatría Choría, the thirteen villages** of Terra d'Otranto that still kept the language.
  URL: https://www.unionegreciasalentina.le.it/vivere-il-comune/territorio/cenni-storici.html **[official, comuni union]** ,
  https://www.fiabbari.it/imesta-griki-siamo-griki-note-storiche-formazione-ed-evoluzione-della-grecia-salentina **[reference/local history]**
- Today the **Unione dei Comuni della Grecìa Salentina has twelve comuni**, but Griko is actually spoken in **seven**:
  Calimera, Castrignano de' Greci, Corigliano d'Otranto, Martano, Martignano, Sternatia, Zollino. In Carpignano
  Salentino, Cutrofiano, Melpignano and Soleto it has not been spoken for one or two centuries.
  URL: https://it.wikipedia.org/wiki/Grecia_salentina **[reference]**
- Speakers: **20,000 native speakers recorded in 1981** plus 40,000–50,000 with second-language competence; the
  population of the Grecìa Salentina is about 40,000. Present-day estimates are **"several hundred fluent speakers,
  almost all elderly"**. **UNESCO classified both Griko dialects as severely endangered in 2011.**
  URL: https://en.wikipedia.org/wiki/Griko_dialect **[reference]**
- Two competing origin theories, both live: descent from the Magna Graecia colonies (8th c. BC) versus a
  Doric-influenced descendant of medieval Greek brought by Byzantine settlers — the second proposed by **Giuseppe
  Morosi in the 19th century**. Do not assert either.

### W10. Facts box: "Main cultivars: Coratina … with the highest polyphenol content of any Italian olive"
**Verdict: DISPUTED — universally repeated in the trade press, never with a study behind it.**
Coratina is quoted at **around 1,000 ppm total polyphenols**, against **300–400 ppm for average extra virgin** and
**500–600 ppm for Italian varieties generally**; the profile is high in oleuropein, oleocanthal and ligstroside, with
high oleic acid. Every source calling it "the highest" is trade or producer copy; the underlying agronomic work
(harvest date and ripening index in two Puglian environments) measures Coratina's own variation, not a national
ranking.
URLs: https://www.cronachedigusto.it/archivio-articoli-dal-05042011/il-prodotto/olio-quel-che-c-e-da-sapere-sulla-coratina/ **[press]** ,
https://olivoeolio.edagricole.it/oliveto-e-frantoio/la-qualita-dell-olio-ha-origine-in-campo/ **[press citing research]** ,
https://olivonews.it/coratina-la-varieta-olivicola-che-rompe-gli-schemi/ **[press]**
**Safe wording:** "one of the richest in polyphenols of any olive grown in Italy — about a thousand parts per
million where an average extra virgin has three or four hundred." The comparison is the interesting part; the
superlative is not defensible.

### W11. "Protected oils: Terra di Bari, Terra d'Otranto, Collina di Brindisi and Dauno DOP"
**Verdict: CORRECTED — there are five, and the fifth is missing.**
Puglia's olive-oil DOPs are **Terra di Bari, Terra d'Otranto, Collina di Brindisi, Dauno and Terre Tarentine**.
Terra di Bari covers Bari and BAT with Coratina prevalent; Terra d'Otranto the whole of Lecce province plus parts of
Taranto and Brindisi; Dauno is Foggia, with four sub-zones (Alto Tavoliere, Basso Tavoliere, Gargano,
Sub-Appennino); Collina di Brindisi is mainly Ogliarola; Terre Tarentine is Frantoio and Ogliarola tarantina.
URLs: https://www.csoqualita.it/olio-del-salento/gli-olii-dop-della-puglia **[promotional]** ,
https://www.regione.puglia.it/en/web/produzioni-di-qualita/-/terra-d-otranto-dop **[official]** ,
https://www.quattrocalici.it/denominazioni/terra-di-bari-dop/ **[reference]**
Note English Wikipedia also says "four" — it is wrong, and is probably where the reading's four came from.

### W12. "A regional law of 2007 protects the *olivi monumentali*"
**Verdict: CONFIRMED, with far better detail available.**
**Legge Regionale n. 14 of 4 June 2007**, "Tutela e valorizzazione del paesaggio degli ulivi monumentali della
Puglia". It **forbids damaging, felling, uprooting and trading** monumental olives on the regional list of article 5;
during the transition before the list was complete (max three years) the ban applied region-wide to any centuries-old
olive meeting the article 2 criteria. Derogations only for public utility. Monumentality is attributed on documented
historical-anthropological value, or trunk dimensions/form, or proximity to recognised historic, architectural or
archaeological heritage.
**The register now lists 332,498 trees**, after definitive approvals of 23,658 and 635 specimens under DGR 501/2016
and 2225/2017, plus a provisional list of a further 1,751 in Barletta, Carovigno, Cisternino, Fasano, Francavilla
Fontana, Manduria, Melendugno, Molfetta, Monopoli, Oria, Ostuni, San Giovanni Rotondo, San Marco in Lamis and
Sternatia.
URLs: https://www.ambientediritto.it/Legislazione/beni%20culturali/2007/puglia_lr2007_n.14.htm **[official, law text]** ,
https://pugliacon.regione.puglia.it/web/sit-puglia-ambiente/-/ulivi-monumentali-aggiornamento-dell-elenco-regionale **[official]**
**The number 332,498 is the best single fact in this whole file for reading 1** — a region that has counted and
registered a third of a million individual trees, one at a time.

### W13. "Xylella fastidiosa … was found near Gallipoli in 2013"
**Verdict: CONFIRMED.** Italy notified the Commission of the first outbreak of *X. fastidiosa* subsp. *pauca* in the
province of Lecce in **October 2013** (13 October in the Italian press); the identification in Puglia was made by the
team led by **Maria Saponari** (CNR). The strain is **subsp. *pauca*, genotype ST53**, known as CoDiRO or "De Donno".
URLs: https://food.ec.europa.eu/plants/plant-health-and-biosecurity/legislation/control-measures/xylella-fastidiosa-it_en **[official, European Commission]** ,
https://it.wikipedia.org/wiki/Xylella_fastidiosa **[reference]** ,
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11175074/ **[academic — decade review]**
**Important nuance the reading misses:** the epidemic was not new in 2013. At the time of the first record the
disease was **already spread over 8,000–10,000 hectares, about 800,000–1,000,000 olive trees**, and Italian Wikipedia
places the first appearance in the Gallipoli hinterland in **2009/2010**. It was found late, not caught early.
URL: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8228964/ **[academic]**

### W14. "a bacterium from the Americas … carried from tree to tree by the meadow spittlebug"
**Verdict: CONFIRMED on the vector; the American origin is standard but I did not source the specific import route.**
**Philaenus spumarius**, the meadow spittlebug (*sputacchina*), is the main vector in Europe and in the Puglian
groves; **three aphrophorid species** were identified as vectors on olive in Puglia. The bacterium occludes the
**xylem**, the water-conducting vessels.
URLs: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9423658/ **[academic]** ,
https://agricoltura.regione.campania.it/difesa/schede/Xylella_fastidiosa.pdf **[official]**
**Not checked this pass:** the widely repeated claim that ST53 arrived on ornamental coffee plants from Costa Rica.
It is in the literature (genomic comparison work) but I did not reach the paper — **CANNOT VERIFY THIS PASS**; do not
put an import route in the text without checking it.

### W15. "has since killed or infected an estimated 21 million trees in the Salento"
**Verdict: the figure is real but it is Coldiretti's, and the scientific counts are an order of magnitude smaller.**
- **Coldiretti (April 2023):** over **21 million** olive trees affected, **8,000 km² of infected territory, 40% of
  the region**, damage "almost 3 billion euro", **5,000 jobs** lost in the oil chain, **3 olives in 4 lost in the
  province of Lecce** (a 75% collapse in oil production), and of the 21 million only **3 million replanted (14%)**.
  URLs: https://puglia.coldiretti.it/news/xylella-infettato-40-puglia-addio-a-21-mln-ulivi/ **[advocacy]** ,
  https://www.ansa.it/puglia/notizie/2023/04/30/xylella-colpisce-40-della-puglia-addio-21-milioni-di-ulivi_2b90eae8-6eed-4296-94d3-97739ce9a20d.html **[press relaying it]**
- **Scientific/technical figures:** the De Donno strain has **infected about 4 million trees** in the outbreak area;
  the outbreak has spread **over 100 km**; **over 2.6 million olive trees have been uprooted** in the control effort;
  productivity loss is put at **€132 million a year** plus over a million lost working hours.
  URLs: https://pmc.ncbi.nlm.nih.gov/articles/PMC8397937/ **[academic review]** ,
  https://olivoeolio.edagricole.it/attualita/xylella-puglia-12-anni-dopo-emergenza-e-adattamento/ **[press, technical]**
**Recommendation:** attribute or drop. "Twenty-one million" is an estimate of trees inside the infected territory, not
a count of dead trees, and the reading currently presents it as the latter. The **2.6 million felled** is a hard,
sourced number and is more shocking for being verifiable.

### W16. "the only response is to fell infected trees and the healthy trees around them"
**Verdict: CONFIRMED in substance.** Under the EU regime the infected zone is managed by **containment**, not
eradication, with mandatory removal of infected plants and host plants around them, vector control, and movement of
specified plants out of the demarcated area allowed only for a few nurseries under strict control. In **June 2018**
the Commission extended the demarcated area **by 20 km northwards**.
URL: https://food.ec.europa.eu/plants/plant-health-and-biosecurity/plant-health-rules/control-measures/xylella-fastidiosa/latest-developments-xylella-fastidiosa-eu-territory_en **[official]**

### W17. "by the time the courts and the European Union had argued it out, the infection had moved a hundred kilometres north"
**Verdict: CONFIRMED in outline; the detail is stronger and it is not what the reading implies.**
- **18 December 2015:** the Lecce prosecutor's office seized all the olive trees due to be felled, blocking the
  containment plan of the extraordinary commissioner **Giuseppe Silletti**; **ten people** were placed under
  investigation, including university researchers and Regione Puglia officials, on a theory that there was no causal
  link between the drying and the bacterium. Seizure decree **21 December 2015**.
- **May 2019:** the investigation was **archived**. The GIP Alcide Maritati accepted the prosecutors' own request to
  close it; the scientists were cleared.
- **5 September 2019:** the Court of Justice of the EU (**C-443/18, Commission v Italy**) held that Italy had failed
  to fulfil its obligations, in particular by not immediately removing, in the containment area, at least all the
  infected plants in the **20-kilometre strip** of the infected zone. The Commission later closed the infringement.
URLs: https://www.ilfattoquotidiano.it/2015/12/18/xylella-sequestrati-tutti-gli-ulivi-da-abbattere-10-indagati-ce-anche-commissario-silletti/2317258/ **[press]** ,
https://www.lecceprima.it/settimana/archiviazione-inchiesta-xylella-lecce-7-maggio-2019.html **[press]** ,
https://curia.europa.eu/site/upload/docs/application/pdf/2019-09/cp190106en.pdf **[official, CJEU press release]** ,
https://bexylproject.org/updates/news/european-commission-closes-infringement-case-against-italy-on-xylella-fastidiosa/ **[official-adjacent]**
**Note for the writer:** the owner's brief forbids opening on a lawsuit, and this material is legally intricate. It
belongs in the body, in two sentences, not at the top.

### W18. "the front is somewhere around Brindisi and Taranto" and "the monumental trees near Ostuni and in the Valle d'Itria, for now, are north of the line"
**Verdict: OUT OF DATE — both sentences are wrong in 2026. This is the single most important correction in reading 1.**
- The delimited area now reaches **the province of Bari**. A focus of subsp. *pauca* ST53 was found on the
  south-eastern edge of Bari itself, towards **Torre a Mare** — **six olives and three almonds** — reported as the
  first time the pauca epidemic from the Salento passed **north of the 41st parallel**, eleven years after Gallipoli.
  In the same area some dozens of almonds were infected with subsp. *multiplex* ST26.
- A separate focus of subsp. ***fastidiosa*** at **Triggiano** (on vines) has been held: after two years, no
  expansion, **over 50,000 samples** analysed, **more than 30 hectares of vineyard** uprooted. Monitoring closed in
  2026 with no spread.
- 2025–26 monitoring in the ST53 delimited area: **40,379 plants sampled, 96 positive**. Infected area in the Bari
  monitoring context: **183,000 hectares**.
- Detections also reported at **Bitonto** (Bari) and in the **province of Foggia**.
- The **Valle d'Itria comuni — Monopoli, Polignano a Mare, Castellana Grotte, Alberobello and part of Putignano —**
  are covered by a targeted search programme for infected plants (2023–2025). Coldiretti Puglia titled a November 2024
  release "the plain of monumental olives under attack". They are inside the story, not north of it.
URLs: https://www.lagazzettadelmezzogiorno.it/news/home/1267373/xylella-299-ulivi-infetti-2-focolai-nel-barese-preoccupa-situazione-nel-tarantino.html **[press]** ,
https://terraevita.edagricole.it/attualita/xylella-aggiornamenti-monitoraggio-barese-tre-sottospecie/ **[press, technical]** ,
https://www.pugliapress.org/2026/03/02/xylella-triggiano-monitoraggio-2026-chiuso/ **[press]** ,
https://www.regione.puglia.it/web/agricoltura/-/aggiornate-le-aree-delimitate-alla-xylella-fastidiosa-sottospecie-pauca-st53 **[official]** ,
https://www.ansa.it/canale_terraegusto/notizie/mondo_agricolo/2024/11/12/coldiretti-puglia-piana-ulivi-monumentali-sotto-attacco-xylella_899efc3e-8e71-49eb-b1b9-43b6bb554d4b.html **[advocacy via press]**

### W19. The epidemic has slowed — a fact the reading does not have
**Verdict: CONFIRMED, and it changes the emotional shape of the section.**
Donato Boscia (CNR-IPSP Bari): the first five years, **2013–2018, were very fast**; since then the northward advance
has **decelerated sharply**, limited to Adriatic-facing comuni of the Bari province. In new foci in the Barese,
**after a year the bacterium had spread from the first infected tree to only 10–15 further plants**. Five causes are
given: a less favourable climate in central Puglia than the mild Salento winters; better containment and phytosanitary
organisation; grafting of tolerant material onto heritage trees; different farming practice; lower vector density.
**Since about 2021 there has been symptom remission in surviving trees, notably Cellina di Nardò** — partial recovery,
still under study.
Two press figures for spread rate circulate and contradict each other: **20 km a year** over the decade, and **30 km
a year** on average since 13 October 2013 (both Coldiretti-sourced). **Flagged disagreement**; the scientific account
above says the rate was not constant at all, which is the point.
URLs: https://olivoeolio.edagricole.it/ricerca-scientifica/xylella-fastidiosa-evoluzione-epidemia-in-puglia/ **[press, interviewing CNR]** ,
https://www.corrieredelleconomia.it/2025/10/13/xylella-lulivo-pugliese-sotto-assedio-il-batterio-killer-ha-raggiunto-tutto-il-territorio-regionale/ **[press]**

### W20. "two cultivars that resist the disease, Leccino and the new Favolosa"
**Verdict: CORRECTED on the word, and the numbers are worth having.**
CNR-IPSP with the University of Bari and the Basile Caramia centre tested several hundred plants in multi-variety
groves under very high inoculum pressure, by ELISA and qPCR: **FS-17 (sold abroad as Favolosa) was asymptomatic with
only 12% of plants infected, against 50% for Leccino and 100% for Ogliarola salentina.** **Francesco Loreto**,
director of the CNR's bio-agrifood department, is explicit: *"this is not a resistance, but a tolerance"* — the
bacterium still infects the plant; the plant survives and coexists with the infection.
**FS-17 is a seedling selection of Frantoio made by Prof. Giuseppe Fontanazza and patented by CNR-ISAFOM** — so
"the new Favolosa" is right, and it is an Italian research product, not a foreign import.
A PONTE-project screening found **six cultivars** with promising resistance/tolerance traits, so "two" is the
practical replanting answer, not the whole scientific picture.
URLs: https://www.cnr.it/it/comunicato-stampa/7411/scoperta-un-altra-cultivar-di-olivo-resistente-alla-xylella **[official, CNR]** ,
https://www.teatronaturale.it/strettamente-tecnico/l-arca-olearia/24156-fs17-e-leccino-sono-tolleranti-a-xylella-fastidiosa.htm **[press, technical]** ,
https://terraevita.edagricole.it/olivicoltura/xylella-sei-cultivar-hanno-dimostrato-nel-progetto-ponte-promettenti-caratteri-di-resistenza-tolleranza/ **[press]**
**And the replanting has largely not happened:** of **9,000 replanting applications, only 440 were completed**; of
**€30 million available for grafting, €5 million was spent**, mainly for want of certified propagation material.
URL: https://olivoeolio.edagricole.it/attualita/xylella-puglia-12-anni-dopo-emergenza-e-adattamento/ **[press, technical]**

### W21. "Cellina di Nardò and Ogliarola Salentina in the Salento"
**Verdict: CONFIRMED, and the reason they matter is epidemiological.**
Olive quick decline syndrome is particularly devastating **on exactly these two cultivars**, and the Salento was a
near-monoculture of them over large stretches, which is a large part of why the epidemic ran as it did. Where Xylella
passed, groves of Cellina and Ogliarola were destroyed outright; the Salento saw a decline of roughly **60–70% in
five or six years**.
URLs: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8228964/ **[academic]** ,
https://pmc.ncbi.nlm.nih.gov/articles/PMC13358715/ **[academic — xylem anatomy of infected Cellina di Nardò]**

### W22. Otranto: "its chapel holds the bones of the eight hundred townspeople the Ottomans killed in 1480"
**Verdict: CONFIRMED with a correction of the count and a much better set of details.**
- A fleet of Mehmed II arrived from Valona on **28 July 1480**: about 150 vessels and some 18,000 soldiers against a
  town of about 2,000 inhabitants. The walls were breached after fifteen days, on **11 August**.
- **14 August 1480**, on the **Colle della Minerva**: the traditional count is **813 martyrs**; the men offered the
  choice were **about 800**. Tradition names the tailor **Antonio Primaldo** as the first to die.
- Beatified by **Clement XIV on 14 December 1771**; **canonised by Pope Francis on 12 May 2013**.
- The relics are kept in **seven large cabinets** in the chapel at the end of the right nave, with the "stone of
  martyrdom" behind the altar.
URLs: https://it.wikipedia.org/wiki/Martiri_di_Otranto **[reference]** ,
https://en.wikipedia.org/wiki/Martyrs_of_Otranto **[reference]** ,
https://it.wikipedia.org/wiki/Cattedrale_di_Otranto **[reference]**
**The 2013 canonisation is the fact the reading is missing** — this is not only medieval history; it was settled
thirteen years ago.

### W23. "Otranto's cathedral floor is a twelfth-century mosaic of the tree of life"
**Verdict: CONFIRMED and datable.** Executed by the priest **Pantaleone** for archbishop **Gionata**, **between 1163
and 1165** — the dates, artist and patron are recorded in the mosaic itself. It runs **16 metres**, the whole floor,
with the Tree of Life rising from the door almost to the presbytery, carrying Old Testament scenes, apocryphal
gospels, chivalric cycles and medieval bestiaries.
URL: https://it.wikipedia.org/wiki/Mosaico_di_Otranto **[reference]**

### W24. "a wind that comes straight from Albania across seventy kilometres of water"
**Verdict: CONFIRMED, and the exact figure is 72 km.** The Strait of Otranto's minimum width is **72 km**, between
**Punta Palascìa** in eastern Salento and the **Karaburun peninsula** in Albania; Punta Palascìa is **71 km** from the
Albanian coast. The strait as a whole is 85–100 km.
URLs: https://it.wikipedia.org/wiki/Canale_d%27Otranto **[reference]** , https://en.wikipedia.org/wiki/Strait_of_Otranto **[reference]**
**Also:** Punta Palascìa, not Santa Maria di Leuca, is the easternmost point of Italy, and it has its own lighthouse.
Leuca is the southern tip. The reading's "ends at the lighthouse of Santa Maria di Leuca" is fine for the Salento's
southern point but should not imply it is the eastern extremity.

### W25. "the *pajare*, the Salento's own cone-roofed field huts"
**Verdict: CONFIRMED, and the contrast with trulli is sharper than the reading has it.**
Pajare are circular dry-stone structures built from field-clearance stone without mortar. Against trulli: trulli are
generally larger, with a classic limestone-slab dome, often whitewashed, and were made for **permanent living**;
pajare are smaller, with a **rough dome that is never whitewashed**, for **agricultural and temporary** use — shelter
from weather or heat, tool storage, sleeping during long spells of work. Local names: pagghiara, **furnieddhu**,
furnu, truddu, chipuru, caseddhu, làmia. The furnieddhu is often rectangular with a central cone and larger.
URLs: https://it.wikipedia.org/wiki/Pajaru **[reference]** ,
https://www.salentoviaggi.it/architettura/trulli-e-pajare.htm **[promotional, agrees]**

### W26. "Ostuni, the white city … The whitewash was a defence against plague"
**Verdict: DISPUTED — one of at least three accounts, and the reading states it as fact.**
The accounts found: (a) a **medieval** habit of liming to bring light into narrow alleys, helped by the abundance of
quicklime; (b) during the **1657 plague** the inhabitants limed the houses for hygiene, lime being a natural
disinfectant, and the town was largely spared — an authority-imposed practice; (c) a **19th-century mayoral
ordinance** obliging citizens to whitewash for cleanliness. The white is now protected by municipal regulation.
URLs: https://www.puglia24news.it/turismo/la-citta-bianca-non-nasce-per-caso-la-vera-storia-della-calce-di **[press/tourism]** ,
https://localitaitaliane.it/puglia/brindisi/centro-storico-ostuni-la-citta-bianca/ **[promotional]**
**Recommendation:** "the story told in Ostuni is that…" or drop. No academic source reached.

### W27. "Polignano a Mare … the town that gave Italy the singer of 'Volare'"
**Verdict: CONFIRMED.** **Domenico Modugno, born in Polignano a Mare on 9 January 1928.** He performed "Nel blu,
dipinto di blu" at Sanremo on **29 January 1958** and won; the single was released **1 February 1958**; it won the
first **Grammy** awards for Record of the Year and Song of the Year. Lyrics with **Franco Migliacci**.
URLs: https://en.wikipedia.org/wiki/Domenico_Modugno **[reference]** , https://en.wikipedia.org/wiki/Nel_blu,_dipinto_di_blu **[reference]**

### W28. "the clearest water in Italy" (Salento coast)
**Verdict: UNSUPPORTED.** No ranking source reached. It is tourism copy. Drop or rewrite as something measurable
(98% of the Puglian coast is classified bathable, per a regional/tourism source — itself promotional).
URL: https://www.laterradipuglia.it/benvenuti-in-puglia/regione-puglia/le-coste-della-puglia **[promotional]**

### W29. "Tankers of it went north to be blended and bottled in Tuscany and Liguria"
**Verdict: CANNOT VERIFY THIS PASS for oil.** The equivalent claim for *wine* is well documented (W30). For oil, the
structural fact I can source is that Puglia supplies close to half the national crop while the large bottling brands
are based elsewhere, and that Puglia is now first in Italy for DOP/IGP olive turnover at €26 million — which is a
small number and tells the same story from the other side.
URL: https://www.agricultura.it/2024/03/08/la-puglia-con-26-milioni-di-euro-e-la-prima-regione-per-fatturato-olivicolo-dop-igp/ **[press]**

---

### Reading 2 — the grapes, the DOCs, the rosé

### W30. "For most of the twentieth century Puglia was the wine cellar of northern Europe … shipped north in tankers"
**Verdict: CONFIRMED in outline; the sourcing is weak and the chronology should be the 19th century first.**
From the second half of the 19th century Puglia produced large quantities of dark, high-extract, high-alcohol,
low-acid reds destined to **cut** wines from northern Italy and France. When phylloxera struck France, Puglian wine
went there in quantity and French entrepreneurs set up to export to France, Germany and Austria; phylloxera then
reached Puglia and ended that trade. In the 20th century the cantine sociali favoured bulk; **from the 1950s and for
decades after, cisterns of red went north by rail**. Quality ambition is dated to after the Second World War, with
real recognition in the 1990s.
URLs: https://it.wikipedia.org/wiki/Vini_pugliesi **[reference, thin]** ,
https://www.quattrocalici.it/regione/puglia/ **[reference]** ,
https://archividituglie.wordpress.com/2023/09/08/storia-dellinvasione-fillosserica-in-europa/ **[local history]**
**No source reached gives dates for phylloxera's arrival in Puglia or tonnages of the cutting-wine trade.** If the
reading wants a number, use the present-day one instead: see W31.

### W31. "the region produced more wine than any other in Italy and bottled almost none of it"
**Verdict: half CORRECTED, half CONFIRMED — and the true half is startling.**
- **Not the largest.** Veneto has led for years: **2021 Veneto 11 Mhl v Puglia 9.6; 2022 Veneto 12 v Puglia 10.6;
  2025 Veneto 11.4 Mhl (about 24% of the national total) v Puglia**, for which two figures circulate — **7.3 Mhl
  (15%)** in the inumeridelvino reading of ISTAT and **8.4 Mhl (19%, +9.7% on 2024)** in regional press. **Flagged
  disagreement.** Italy's 2025 total: 44.4 Mhl. Puglia is **second**.
  URLs: https://www.inumeridelvino.it/2026/07/produzione-di-vino-italia-2025-dati-istat.html **[reference, ISTAT]** ,
  http://www.inumeridelvino.it/2022/07/puglia-produzione-di-vino-e-superfici-vitate-2021-dati-istat.html **[reference, ISTAT]** ,
  https://www.foggiatoday.it/economia/settore-vitivinicolo-la-puglia-seconda-produttrice-in-italia.html **[press]**
  **Whether Puglia was ever first in the modern era is CANNOT VERIFY THIS PASS** — the search budget ran out before I
  could test it. Do not write "was Italy's largest" without checking.
- **The bottling half is confirmed and is the better sentence.** Of Puglia's output (2021 ISTAT): **70% table wine,
  23% IGT, 7% DOC.** Quattrocalici gives DOP 7% / IGP 23% on about **9 million hl** from **86,400 ha**. Puglia has
  **4 DOCG, 28 DOC, 6 IGT**; vineyard area 86,240 ha in 2021, about 89,000 ha per SIAN 2020.
  URLs: as above, and https://www.quattrocalici.it/regione/puglia/ **[reference]**
  **Seven per cent DOC is the number the reading should carry.** English Wikipedia's "106,715 ha, first nationally"
  is out of date or on a different basis — do not use it.

### W32. "the grape was recorded in Gioia del Colle in the late eighteenth century, when a priest named Francesco Filippo Indellicati selected it and gave it its name: *primativus*"
**Verdict: CONFIRMED, with dates that can be made exact and one caveat.**
**Don Francesco Filippo Indellicati**, priest and *primicerio* of Gioia del Colle, with a working knowledge of botany
and agronomy, selected the early-ripening plant at the end of the 18th century and recorded it in the town archive as
**Primativo**, "the first to ripen". He planted it in a plot of eight *quarte* in the **Liponti** area near the Terzi
district; **the planting year 1799** comes from the agronomist **Francesco Antonio Sannino (1864–1927)**, i.e. it is
a 19th/20th-century attribution, not a contemporary document. The variety spread among Apulian growers; **by about
1860 the name Primitivo had settled**, and the term appears in Italian government publications **in the 1870s**.
URLs: https://www.gioiadelcolle.info/don-francesco-filippo-indellicati/ **[local reference]** ,
https://it.wikipedia.org/wiki/Gioia_del_Colle_Primitivo **[reference]** ,
https://en.wikipedia.org/wiki/Zinfandel **[reference]**
**Note:** Wikipedia calls him "a priest near Bari in the 1790s"; quattrocalici calls him Franciscan; the Gioia del
Colle source calls him primicerio. Say "a priest" and name the town.

### W33. "In the early 1990s Carole Meredith … showed by DNA that Primitivo and Zinfandel were the same grape, and in 2001 both were traced to Crljenak Kaštelanski"
**Verdict: CONFIRMED, and the full chain is better than the summary.**
- **1967:** Austin Goheen of UC Davis, visiting Italy, notices that wine from Primitivo reminds him of Zinfandel.
- **1972:** ampelographers declare Primitivo and Zinfandel identical.
- **1975:** the doctoral student **Wade Wolfe** shows identical **isozyme** fingerprints.
- **1993:** **Carole Meredith** uses **DNA fingerprinting** and confirms they are the same variety. (Some sources date
  the Meredith/Bowers work 1994 and describe the collaboration as running 1994–2011. **Flagged; 1993 is Wikipedia's
  date for the result.**)
- **December 2001:** with the Croatian scientists **Ivan Pejić and Edi Maletić**, after sampling **over 150** vines
  in old Dalmatian vineyards, a match is found in a vine sampled at **Kaštel Novi**, near Split: **Crljenak
  kaštelanski**.
- **2008:** a new technique allows DNA from **century-old dried herbarium leaves**, establishing that **Tribidrag,
  Pribidrag, Crljenak, Primitivo and Zinfandel are one variety**; **Tribidrag** is the oldest documented name, in a
  Croatian record of **1444**. Published in **Malenica et al. (2011)** and **Robinson et al. (2012)**.
URLs: https://en.wikipedia.org/wiki/Zinfandel **[reference]** ,
https://www.jancisrobinson.com/articles/the-politics-of-zin **[press, expert]** ,
https://www.wineandmore.com/croatian-origins-of-zinfandel-wines/ **[promotional but detailed]**
**The order matters and the reading has it right:** Italy first (the American grape turns out to be Italian), Croatia
second (both turn out to be Croatian). Keep that shape; fix "early 1990s" to 1993 and add the 1444 record.

### W34. "How it crossed the Adriatic is not known; a Benedictine cutting is the usual story"
**Verdict: UNSUPPORTED — I found no source for the Benedictine cutting anywhere.**
What the sources say instead: the grape "is assumed to have been introduced as a distinct clone into Apulia in the
**18th century**". Wikipedia's Negroamaro entry mentions monastic survival of viticulture in Puglia generally
(Benedictines on the Murgia, Greek Orthodox monks in the Salento) — which may be where the story leaked in from, but
it is about viticulture, not about Primitivo crossing the Adriatic.
URLs: https://en.wikipedia.org/wiki/Zinfandel **[reference]** , https://en.wikipedia.org/wiki/Negroamaro **[reference]**
**Recommendation:** drop the Benedictine sentence, or write the honest version: nobody knows, and the 18th-century
Gioia del Colle selection is the first firm record on the Italian side. (A second popular story — the vine reaching
Manduria as a bride's dowry, the Countess Sabini of Altamura marrying a Schiavoni around 1881 — is also repeated
widely; **I did not source it and the budget ran out. Do not use it unverified.**)

### W35. "its sweet *Dolce Naturale* version … is the region's only DOCG"
**Verdict: FALSE. Puglia has four DOCGs, and the other three date from the same year.**
- **Primitivo di Manduria Dolce Naturale DOCG** — **DM 23 February 2011, GU n. 57 of 10 March 2011**. Puglia's first
  DOCG, by about seven months.
- **Castel del Monte Bombino Nero DOCG**, **Castel del Monte Nero di Troia Riserva DOCG**, **Castel del Monte Rosso
  Riserva DOCG** — all **DM 4 October 2011, GU n. 243 of 18 October 2011**, modified **DM 30 November 2011**.
  Bombino Nero requires **minimum 90% Bombino Nero** and is a **rosé DOCG** — rare in Italy, and Puglia is described
  as the only region with a DOCG specifically for a rosé. Nero di Troia Riserva requires **90% Nero di Troia**; Rosso
  Riserva **minimum 65%**.
URLs: https://it.wikipedia.org/wiki/Castel_del_Monte_Bombino_Nero **[reference]** ,
https://www.assovini.it/italia/puglia/item/377-castel-del-monte-bombino-nero-docg **[promotional]** ,
https://www.assovini.it/italia/puglia/item/380-primitivo-di-mandura-dolce-naturale-docg **[promotional]** ,
https://www.quattrocalici.it/regione/puglia/ **[reference — "4 DOCG, 28 DOC, 6 IGT"]**
**This is the error to fix first.** It is also a gift: Puglia's four DOCGs were all created in 2011, i.e. the region's
formal top tier is fifteen years old, which is exactly the argument reading 2 is trying to make.

### W36. Dolce Naturale DOCG — the rules the reading does not give
**Verdict: CONFIRMED, from the Consorzio's own publication of the disciplinare.**
**100% Primitivo**; **minimum natural alcohol 16% vol** at harvest; finished wine **16% total of which at least 13%
actual**; **minimum 50 g/l residual sugar**; drying permitted **on the vine and/or on racks and/or in crates in the
open**, or in climate-controlled premises; **maximum 7 t/ha of grapes and 60% conversion = 42 hl/ha**.
URL: https://www.consorziotutelaprimitivo.com/disciplinare-di-manduria-docg/ **[promotional but authoritative — the consortium republishing the decree]**
**Note:** the wine is **not fortified**; several English sources (Wine-Searcher among them) call it "fortified sweet
red", which is wrong. The sugar is natural, from shrivelling on the plant or drying after picking.

### W37. Facts box: "Primitivo di Manduria DOC (1974): at least 85% Primitivo, 13.5% alcohol minimum, 14% for Riserva"
**Verdict: CONFIRMED, and one large rule is missing.**
**D.P.R. 30 October 1974** (GU 60 of 4 March 1975); most recent modifications **D.M. 7 March 2014**. **Minimum 85%
Primitivo**, up to 15% other non-aromatic black varieties authorised for Taranto and Brindisi. Minimum total
alcohol **13.50%** for the base type, **14.00%** for Riserva. **Riserva must age 24 months, of which at least 9 in
wood** — the reading omits this. Also: minimum total acidity 5.0 g/l, minimum non-reducing extract 26.0 g/l, residual
sugar not above 18.0 g/l. Zone: fifteen comuni of Taranto province (Manduria, Carosino, Monteparano, Leporano,
Pulsano, Faggiano, Roccaforzata, San Giorgio Jonico, San Marzano di San Giuseppe, Fragagnano, Lizzano, Sava,
Torricella, Maruggio, Avetrana) plus the Talsano fraction and administrative islands of Taranto, and **Erchie, Oria
and Torre Santa Susanna** in Brindisi province.
URLs: https://www.agraria.org/vini/primitivo-di-manduria-doc.htm **[reference]** ,
https://www.assovini.it/italia/puglia/item/402-primitivo-di-manduria-doc **[promotional, agrees on all figures]** ,
https://www.disciplinare.it/primitivo-di-manduria-doc.html **[reference]**
**A live detail the reading could use:** the 85% rule is recent. The DOC originally required **100% Primitivo**; the
change to 85% plus up to 15% other authorised black varieties was pushed through by the consortium (president
Roberto Erario) after about two years of work and reported in *Corriere Vinicolo* on **9 March 2009**, on the
argument that it let producers cope with difficult vintages.
URL: https://www.rosariofaggiano.it/primitivo-di-manduria-addio-alla-regola-del-100_content_105_5.htm **[press]**

### W38. "Gioia del Colle DOC (1987) covers the Murge" and "from the Murge plateau at 350 to 500 metres"
**Verdict: date CONFIRMED, altitudes CORRECTED, composition needs care.**
- **D.P.R. 11 May 1987**, published in the Gazzetta Ufficiale **23 October 1987**; latest modifications **D.M. 7
  March 2014** (one source says 30 November 2011).
- **The disciplinare's zone is 200–450 m above sea level**, not 350–500. The town of Gioia del Colle itself sits at
  about **360 m**.
- **Composition — flagged disagreement, resolved as follows.** The **Primitivo** and **Primitivo Riserva** types are
  **100% Primitivo**, minimum **13%** (Riserva **14%**, aged **at least 24 months**, vintage compulsory on the
  label). The 50–60% and "minimum 60%" figures found on disciplinare.it and quattrocalici belong to the **Rosso** and
  **Rosato** types (50–60% Primitivo with Montepulciano, Sangiovese, Negroamaro and Malvasia nera making up the
  rest), not to the varietal Primitivo. Two independent sources agree on 100% for the varietal type.
- Zone: fifteen or sixteen comuni of the province of Bari (Acquaviva delle Fonti, Adelfia, Casamassima, Cassano
  Murge, Castellana Grotte, Conversano, Gioia del Colle, Grumo Appula, Noci, Putignano, Rutigliano, Sammichele di
  Bari, Sannicandro di Bari, Santeramo in Colle, Turi) plus part of Altamura outside the Gravina DOC zone.
- **Scale, and it is tiny:** **123 ha** and about **4,200 hl** (roughly 46,700 cases) on Italian Wine Central's 2021
  figures.
URLs: https://www.assovini.it/italia/puglia/item/390-gioia-del-colle-doc **[promotional]** ,
https://italianwinecentral.com/denomination/gioia-del-colle-doc/ **[reference]** ,
https://www.disciplinare.it/gioia-del-colle-doc.html **[reference]** ,
https://www.quattrocalici.it/denominazioni/gioia-del-colle-doc/ **[reference]** ,
http://www.consorziovinigioiadelcolle.it/la-doc-gioia-del-colle.html **[promotional — site's TLS certificate is broken, could not fetch]**

### W39. "Primitivo makes a big wine … 14 to 16% alcohol … because the grape ripens unevenly"
**Verdict: CONFIRMED on the mechanism, with harvest dates.**
Primitivo is among the first varieties picked in Italy, **from late August**; harvest runs **late August to the first
week of September**, **mid-September at altitude**, late August to early September near the coast. It has
**irregular productivity from uneven fruit set**, and the drying of berries on the bunch is the basis of the passito
and Dolce Naturale styles. National planted area **12,200 ha**.
URLs: https://www.quattrocalici.it/vitigni/primitivo/ **[reference]** ,
https://www.dominaapuliae.it/?p=281 **[promotional, agrees on dates]**

### W40. "Salice Salentino DOC (1976): mostly Negroamaro with a share of Malvasia Nera, aged from a year; Riserva two years"
**Verdict: date CONFIRMED; the composition and ageing need rewriting, and the rulebook changed in 2024.**
- **Established 1976.** Origin of the denomination is credited to producers who from the **1930s** made red and
  rosato on Negroamaro with Malvasia Nera.
- **Original rule: minimum 75% Negroamaro** for rosso and rosato without varietal mention.
- **The 2024 revision raised Negroamaro to a minimum 85%** for reds and rosés, allowed other black varieties up to
  15% of the registered vineyard, **cut the Riserva to 18 months total with at least 6 in wood**, added a
  **Superiore** type (12 months) and a **metodo classico spumante** (12 months in bottle, 9 on the lees), and
  admitted **Verdeca** to the white blend alongside Chardonnay, Fiano and Pinot Bianco. Reported 2 February 2024 as
  approved and awaiting ministerial confirmation.
- **Italian Wine Central, last amended 27 May 2026, gives: Rosato minimum 85% Negroamaro, Rosso and the Negroamaro
  varietal minimum 90%, Riserva minimum 24 months including 6 in barrel, release 1 November of the second year;
  minimum alcohol whites 11.0%, rosato 11.5%, rosso/Negroamaro 12.0%, Superiore 12.5%, Dolce 14.0%.**
  **Flagged disagreement on the red minimum (85% v 90%) and on the Riserva (18 v 24 months).** Both post-date the
  reading; whichever is quoted must be attributed, and the safest wording avoids a number for the red.
- **Malvasia Nera is no longer the named partner.** In the text of the disciplinare it appears explicitly only in
  the Aleatico type (Aleatico min 85%; Negroamaro, Malvasia nera and Primitivo up to 15% combined). In the rosso and
  rosato it is now covered by the anonymous residual share. The traditional blend is a historical fact, not a current
  rule.
- **Scale:** the consortium has **45 member companies and 1,540 hectares**, with capacity of about 100,000 hl.
URLs: https://italianwinecentral.com/denomination/salice-salentino-doc/ **[reference]** ,
https://www.cronachedigusto.it/la-degustazione/salice-salentino-doc-novita-nel-disciplinare-aumenta-la-quantita-di-negroamaro-e-spunta-la-verdeca/ **[press]** ,
https://www.disciplinare.it/salice-salentino-doc.html **[reference, older text]**

### W41. "Squinzano, Copertino and Brindisi are the neighbouring Negroamaro DOCs"
**Verdict: CONFIRMED, with dates — and with a scale fact that undercuts the whole DOC frame.**
- **Squinzano DOC, 1976:** Rosso minimum 70% Negroamaro; the Negroamaro varietal (still and rosato) minimum 85%;
  rosato made with **12–24 hours of maceration before pressing**; Riserva minimum 2 years. **52 hectares in 2021.**
- **Copertino DOC, 1976:** minimum 70% Negroamaro, up to 30% Malvasia Nera, Montepulciano and/or Sangiovese;
  Riserva minimum 2 years.
- **Brindisi DOC, 1979:** rosato minimum 70% Negroamaro, reds minimum 85%; Riserva minimum 2 years, released
  1 November of the second year. **394 hectares, about 11,700 hl (≈130,000 cases) on a five-year average.**
URLs: https://italianwinecentral.com/denomination/squinzano-doc/ , https://italianwinecentral.com/denomination/copertino-doc/ ,
https://italianwinecentral.com/denomination/brindisi-doc/ **[reference]**
**The scale fact:** Salice Salentino Rosato DOC amounts to about **140,000 bottles**, while **IGT Salento runs to 6.8
million bottles**. The names on the map are tiny; the volume is IGT.
URL: https://www.edoardofreddi.it/una-panoramica-dei-vini-rosati-in-italia/?lang=it **[press/trade]**
(Leverano, Alezio, Matino, Nardò, Galatina and Lizzano are the other Negroamaro DOCs; **their dates are CANNOT
VERIFY THIS PASS** — the search budget ran out.)

### W42. "Negroamaro is the Salento's own grape, grown almost nowhere else"
**Verdict: CONFIRMED, and the area trend is the story the reading is missing.**
Negroamaro is cultivated "almost exclusively in Apulia and particularly in Salento"; the first American producer,
Chiarito Vineyards in Mendocino, is a curiosity, not a counter-example.
**Area (ISTAT 2010, the last full varietal census I reached): Negroamaro 11,390–11,400 ha, down from 16,670 ha in
2000; Primitivo 11,766 ha, up from 7,440 ha in 2000 — and rising to 12,200 ha nationally now.** Sangiovese (12,510
ha) was actually the largest single variety in Puglia at that census. Together the three were 43% of the region's
vineyard.
URLs: https://en.wikipedia.org/wiki/Negroamaro **[reference]** ,
https://www.unioneitalianavini.it/puglia-la-regione-rossa/ **[press/trade, ISTAT figures]** ,
https://www.inumeridelvino.it/2013/11/puglia-principali-vitigni-aggiornamento-istat-2010.html **[reference, ISTAT]**
**Use it:** in one decade Primitivo overtook Negroamaro. The reading treats them as a stable pair; they are not.

### W43. "the name is usually explained as 'black and bitter', though it may simply be black twice over"
**Verdict: CONFIRMED as a genuine dispute — the reading has this right and should keep the hedge.**
Linguistic accounts trace the name to **niger + mavros** (Latin and Greek, both "black"), an etymological doubling
typical of the southern lexicon; against that, *amaro* may simply be the Italian for bitter. English Wikipedia states
the dispute plainly. One further speculation, if the Greek derivation holds, links it to *merum*, wine said to have
been brought to Apulia by Illyrian colonists before the Greeks arrived in the 7th century BC. Roman writers mention
*mera tarantina* from Taranto, and **Pliny describes Manduria as *viticulosa*, full of vineyards**.
URLs: https://en.wikipedia.org/wiki/Negroamaro **[reference]** ,
https://www.fondazioneterradotranto.it/2016/06/04/negro-amaro-la-parola-alla-storia/ **[local history]** ,
https://dobianchi.com/2009/04/22/negro-amaro-false-friends-and-folkloric-etymologies/ **[press, wine-linguistics]**
**No ampelographer has settled it.** Do not let the text pick a side; the Pliny line is a better fact than the
etymology.

### W44. "the tradition here is to run off part of the juice after a night on the skins, the *lacrima* or 'tear'"
**Verdict: CORRECTED — the reading conflates two different methods that Salento winemakers distinguish.**
- **Lacrima:** the must is obtained **not by pressing but by natural drainage**. After destemming, the grapes go into
  cement tanks and after **20–24 hours of contact** only the **mosto fiore**, about **30% of the mass**, is drawn off.
- **Salasso (saignée):** the historic Salice Salentino variant, removing **30–40% of the liquid at the *alzata del
  cappello***, generally **18–24 hours after crushing**, leaving all the skins with the remainder.
- **"Vino di una notte":** where maceration lasts only **6–12 hours**, skins separated the following morning.
URLs: https://www.salentowineshop.com/la-caratteristica-lavorazione-a-lacrima-dei-rosati-salentini/ **[producer/retail]** ,
https://www.aislombardia.it/viniplus/speciali-viniplus/il-volto-rose-del-salento.htm **[press, sommelier association]** ,
https://www.slowfood.it/slowine/salice-salentino-rosato-storia-territorio-e-modalita-di-produzione/ **[press]** ,
https://www.aivv.it/download/atti/p027_0910_1055_antonacci.pdf **[academic — Donato Antonacci, conference paper on the rosé grapes of Puglia]**
**Note also:** the Squinzano disciplinare writes the maceration into law — **12–24 hours before pressing** for the
rosato (W41). A rosé whose method is in the rulebook is a strong, checkable detail.

### W45. "Leone de Castris bottled the first Italian rosé, Five Roses, in 1943, from Negroamaro, for the American forces at Brindisi"
**Verdict: essentially CONFIRMED, but the claim of primacy rests on the producer, and the best details are missing.**
The estate's own account: **1943**; **90% Negroamaro, 10% Malvasia Nera**; **General Charles Poletti**, responsible
for Allied procurement, asked for a large supply of rosé — an Italian wine with an American name; the name came from
the **contrada "Cinque Rose"** in the Salice Salentino fief **and** from the family tradition by which every Leone de
Castris generation had five children; the house calls it **"the first rosé wine bottled and sold in Italy"**.
**The detail worth having:** the glassworks of southern Italy were not producing during the war, so the wine went
into **recycled beer bottles** — Don Piero bottled it in every beer bottle that could be found in **Brindisi**.
A separate, softer version of the naming story has American officers quartered at the estate coining "Five Roses" as
one better than "Four Roses" — treat as legend.
URLs: https://www.leonedecastris.com/en/company/five-roses/ **[producer]** ,
https://www.lucianopignataro.it/a/vini-leone-de-castris-five-roses/101772/ **[press, expert]** ,
https://www.spazioapertosalento.it/news/il-five-roses-di-leone-de-castris-da-80-anni-eccellenza-del-made-in-italy/ **[press]**
**On primacy:** I found no counterclaim and no independent verification. Every source repeating "first Italian rosé
bottled" traces to the estate. **Attribute it** ("the house has always claimed…"), and note that the *rosé itself* is
much older than the bottle — it was drunk from the barrel, which is what the reading already says and is the
defensible half.

### W46. "Today the Salento makes more serious rosé than any part of Italy"
**Verdict: DISPUTED — two credible sources flatly contradict each other on volume, and "serious" is a judgement.**
- **Puglia produces 40% of Italy's rosé**, and in Puglia still rosés dominate; Puglia is also the only region with a
  DOCG specifically for a rosé (Castel del Monte Bombino Nero). Source: coverage of **Rosautoctono**, the Istituto
  del Vino Rosa Autoctono Italiano, founded 2019 by the consortia of Bardolino Chiaretto, Valtènesi Chiaretto,
  Cerasuolo d'Abruzzo, Castel del Monte Bombino Nero e Rosato, Salice Salentino Rosato and Cirò Rosato.
- **The contrary figures:** Veneto about **30%** of rosé production, Emilia-Romagna **25%**, with Puglia, Lombardy
  and Abruzzo sharing **24%**; rosé is about **5%** of all Italian wine. Veneto's lead is sparkling (44% of its rosé)
  after the introduction of Prosecco Rosé, which is a different product from a still Salento rosato.
URLs: https://www.edoardofreddi.it/una-panoramica-dei-vini-rosati-in-italia/?lang=it **[press/trade]** ,
https://excellencemagazine.it/rosautoctono/ **[press]** , https://www.rosautoctono.it/ **[promotional]**
**Recommendation:** the honest sentence is about **kind**, not quantity: the Salento's rosato is a still, deep,
food-weight wine made by a defined method, and it was being made that way before the pale Provençal style became the
world's default. That claim survives both datasets.

### W47. "Gianfranco Fino's Es, a Primitivo di Manduria from ninety-year-old bush vines"
**Verdict: CORRECTED — the vines are about sixty years old, not ninety.**
The estate was founded in **January 2004** with the purchase of a **1.3 hectare** plot (about three acres) of
alberello Primitivo near Manduria, planted with vines then **60–80 years old** (the importer says 50 years; the
estate's vines are described as averaging **60 years**). The house now farms **14.5 ha**; Es is made in the **Sava**
area, from grapes left to shrivel slightly on the vine, matured about **9 months in French barriques, 50% new**; the
name refers to Freud's *Es* (the Id).
URLs: https://www.winebow.com/our-brands/gianfranco-fino/es-primitivo-di-manduria-doc/ **[importer]** ,
https://www.callmewine.com/en/winery/gianfranco-fino-B188.htm **[retail]**
**Note the brief's rule:** a named producer introduced with a date is spent elsewhere in the course. Fino belongs in
the body if at all, and the age must be fixed.

### W48. "Polvanera and Fatalone in Gioia del Colle proved the cooler, fresher style"
**Verdict: CONFIRMED, with dates that reverse the order the sentence implies.**
- **Fatalone** is the older claim: the Petrera family has made wine at Gioia del Colle since the **late 1800s**; the
  **first bottle of Gioia del Colle DOC Primitivo under the Fatalone name was the 1987 vintage, bottled in 1988** in
  a cellar dug into the rock — and the house says it was **the first to bottle Gioia del Colle DOC as a varietal
  Primitivo**, in the DOC's own first year. Founding member of the consortium; certified organic with biodynamic
  practice; zero-emission winery on solar power. The brand name comes from **Filippo Petrera**, second generation,
  nicknamed *il Fatalone*.
- **Polvanera** was founded in **2003** by **Filippo Cassano**, organic, with a cellar dug into the karst rock; about
  **300,000 bottles** a year. The name comes from the dark "black dust" soils of Gioia del Colle.
URLs: https://www.fatalone.it/en/la-nostra-storia_our-history/ **[producer]** ,
https://www.cantinepolvanera.it/en/home-2/ **[producer]** ,
https://www.vino.com/en/produttore/polvanera **[retail, agrees]**

### W49. "the vineyards of the Salento have been pulled up faster than anywhere in Italy, with EU grants for grubbing up vines"
**Verdict: the scheme is CONFIRMED and the numbers are good; "faster than anywhere in Italy" is UNSUPPORTED.**
The **2008 OCM wine reform** allowed **up to 58,435 ha** to be grubbed up in Italy (**175,000 ha** across the EU) over
three campaigns. **Puglia, then second nationally with 105,601 ha of vineyard, was allotted a ceiling of 10,560 ha,
10% of its regional area.** Italy was to grub just under 12,000 ha in 2008–09 with **€116.11 million** of EU
compensation, a quarter of the €464 million the EU put up to cut low-quality production; Puglia received **€11.4
million in 2007/08 and €8.4 million in 2008/09**; Italy was allocated up to **€101.6 million** for the 2009/10
campaign.
URLs: http://www.inumeridelvino.it/2008/09/programma-di-estirpazione-e-riconversione-dei-vigneti-contributi-2008-e-2009-per-regione.html **[reference]** ,
https://www.rosariofaggiano.it/migliaia-di-ettari-pronti-allestirpazione_content_62_5.htm **[press]** ,
https://winenews.it/it/unione-europea-estirpazione-vigneti-2009-2010-a-italia_303183/ **[press]**
**How many hectares were actually pulled up in Puglia is not published in anything I reached — CANNOT VERIFY THIS
PASS.** What can be shown is the trajectory of the area: **105,601 ha (2008) → about 95,000 ha (2010) → 86,570 ha
(2020) → 86,240 ha (2021)**, with SIAN giving about 89,000 ha for 2020 on a different basis. **Flagged
disagreement** between bases; use the pair 105,601 → 86,240 and name the years.

### W50. "much of what remains is trained on the high *tendone* pergola for volume"
**Verdict: UNSUPPORTED for Puglia specifically.**
What is sourced: in the area **between Brindisi and Taranto the alberello is the most widespread training system**,
though increasingly replaced by **spalliera** (espalier, wire-trained), not by tendone; disciplinari allow tendone and
pergola pugliese only for **pre-existing** vineyards. National training-system shares are quoted inconsistently
(alberello 35% / spalliera 45% / tendone 12% in one place; tendone "the most widespread, over 20%, 180,000 ha" in
another). **No regional breakdown found.**
URLs: https://www.quattrocalici.it/glossario-vino/tipi-di-allevamento-per-la-vite/alberello/ **[reference]** ,
https://www.regione.puglia.it/documents/2096627/0/Tavoliere+delle+Puglie+o+Tavoliere.pdf **[official — disciplinare allowing tendone only for existing plantings]**
**Recommendation:** the defensible sentence is that new plantings go to wire, old ones are alberello, and the
tendone belongs to the volume era and to table grapes — **Puglia is the European leader for table grapes**, which is
where the tendone genuinely dominates and is a better place to put the fact.
URL: https://winenews.it/it/non-solo-olive-la-puglia-e-leader-in-europa-per-la-produzione-di-uva-da-tavola_506627/ **[press]**

### W51. "Whites: Verdeca from Locorotondo, Fiano Minutolo, Bombino Bianco"
**Verdict: CORRECTED — "Fiano Minutolo" is a misnomer that DNA disposed of twenty-five years ago.**
- **Minutolo** was long called **Fiano Minutolo** or **Moscatellina** in the Valle d'Itria. **DNA analysis in 2001
  established that it is not a sub-variety of Fiano but an independent variety of the Moscato group**, and it entered
  the national vine catalogue that year. Ampelographic comparison of Avellino Fiano against Valle d'Itria material
  found numerous differences in shoot, adult leaf and fruit. **2021 work suggests a natural cross between an unknown
  parent and Visparola.** The variety had nearly disappeared — lost from sight since the 1970s — and was recovered in
  searches for old scattered vineyards.
  URLs: https://www.quattrocalici.it/vitigni/minutolo/ **[reference]** ,
  http://catalogoviti.politicheagricole.it/scheda.php?codice=455 **[official register entry — host was unreachable this session, cited from search results]** ,
  https://www.lucianopignataro.it/a/fiano-minutolo-primo-studio-scientifico-sulla-piu-importante-varieta-bianca-pugliese/39515/ **[press, expert]**
- **Verdeca:** synonyms **Pampanuto / Pampanino**; **800 hectares nationally**; grown in Taranto province (Martina
  Franca, Crispiano, Massafra), Brindisi province (Ostuni, Ceglie Messapica) and the Bari Murge, with small parcels in
  Basilicata. **Historically used for fortified wines and vermouth base, for its acid stability.** Appears in
  **Locorotondo DOC and Martina Franca DOC, both established June 1969**, and Ostuni DOC, usually with Bianco
  d'Alessano and Minutolo.
  URLs: https://www.quattrocalici.it/vitigni/Verdeca/ **[reference]** ,
  https://www.quattrocalici.it/denominazioni/locorotondo-doc/ **[reference]**
  (The claimed identity of Verdeca with **Lagarino bianco** is not confirmed by any source reached — do not state it.)

### W52. "Nero di Troia in the north around Castel del Monte, tannic and dark; Bombino Nero for rosé"
**Verdict: CONFIRMED, with the origin left open.**
Uva di Troia / Nero di Troia is the third historic native variety of Puglia, most widespread in the north. Origin is
speculative and contested: Asia Minor (the city of Troy, refounded in the province of Foggia by Greek colonists) or
the Albanian city of **Kruja** — both are hypotheses, neither established. In the cellar it gives musts of high
phenolic concentration, deep colour and good to medium-high acidity, thick skins and firm tannins, suited to ageing
in wood. **Bombino Nero** is the Castel del Monte rosé grape (W35) and is also used in blends for colour and
structure.
URLs: https://www.quattrocalici.it/vitigni/uva-di-troia/ **[reference]** ,
https://www.quattrocalici.it/vitigni/nero-di-troia/ **[reference]**

---

## Part B — candidate openings

Ten, each with a documented act, a date or a measurement, and a source. None of them opens on a named producer or
writer with a date, on an archaeological feature in the present tense, on a hypothetical person, or on a court case —
all four are spent or barred by the brief.

### B1. **A third of a million trees, each one on a list** *(strongest for reading 1)*
The Regione Puglia's register of *olivi monumentali* now names **332,498 individual olive trees**. A tree gets on it
by documented historical value, or by the girth and shape of its trunk, or by standing next to something
historically or archaeologically protected. Once listed, it is illegal to damage it, fell it, uproot it or trade it.
The law is **L.R. 14 of 4 June 2007**, and while the list was being compiled the ban applied to every centuries-old
olive in the region, region-wide, for up to three years.
**Documented:** the law, its date, the prohibitions, the criteria, the derogations, the count and the decrees that
built it (DGR 501/2016, 2225/2017), and the provisional list of a further 1,751 trees with its fourteen comuni.
**Not documented:** how many of those 332,498 are now inside the Xylella delimited area. That gap is the paragraph.
URLs: ambientediritto (law text); pugliacon.regione.puglia.it (register) — W12.
*Chain:* a region counts its old trees one by one → makes cutting one a crime → then a bacterium arrives whose only
control is cutting → and the two laws meet in the same field.

### B2. **Twelve per cent, fifty per cent, one hundred per cent**
Several hundred olive trees in mixed groves in the infected zone, under the heaviest natural infection pressure
available, tested by ELISA and qPCR. **Ogliarola salentina: 100% of plants infected. Leccino: 50%. FS-17, sold
abroad as Favolosa: 12%, and asymptomatic.** And the CNR's own department director, Francesco Loreto, refusing the
word everyone else uses: *"this is not a resistance, but a tolerance."* The plants still get infected. They just
live with it.
**Documented:** the method, the three numbers, the quotation, FS-17's parentage as a Frantoio seedling selected by
Giuseppe Fontanazza and patented by CNR-ISAFOM, and the PONTE screening that found six promising cultivars.
**Not documented:** how the tolerant trees will taste, or whether Favolosa oil resembles what the Salento lost.
URLs: cnr.it press release; teatronaturale; terraevita — W20.
*Chain:* a monoculture of two susceptible varieties → total loss → a lab number that is not a cure → replanting that
has barely started (440 completed applications out of 9,000).

### B3. **Six olives and three almonds on the edge of Bari**
Monitoring in the south-eastern outskirts of Bari, towards Torre a Mare, turns up a focus of *Xylella fastidiosa*
subsp. *pauca* ST53: **six olive trees and three almond trees**. It is the first time the Salento epidemic has been
found north of the **41st parallel** — eleven years after Gallipoli. Nearby, some dozens of almonds carry a different
subspecies, *multiplex* ST26; at Triggiano a third, *fastidiosa*, is in the vines, and **more than 30 hectares of
vineyard** have been uprooted to hold it.
**Documented:** the counts, the three subspecies, the parallel, the Triggiano uprooting and the 50,000 samples, the
2025–26 sampling (40,379 plants, 96 positive).
**Not documented:** whether the Bari focus is contained. As of the 2026 monitoring, Triggiano is; the ST53 focus is
too new to say.
URLs: Gazzetta del Mezzogiorno; Terra e Vita; Pugliapress; Regione Puglia — W18.
*Chain:* the front that the old text puts at Brindisi is at the gates of Bari → but advancing far more slowly than it
did in the south → and the reason is climate, organisation and the spittlebug's own numbers.

### B4. **10–15 plants a year**
Donato Boscia of the CNR, on what the epidemic looks like now: in the new foci in the province of Bari, **a year
after an infected tree is found, the bacterium has reached only ten or fifteen more plants**. Between 2013 and 2018,
in the Salento, it moved by kilometres a year. Five reasons are offered — colder winters in central Puglia, better
phytosanitary organisation, grafting of tolerant material onto old trees, different farming, fewer spittlebugs — and
since about 2021 some surviving Cellina di Nardò have been putting out clean growth again.
**Documented:** the quotation, the two phases with their dates, the five causes, the remission since 2021.
**Not documented, and worth saying so:** nobody yet knows whether the remission lasts.
URL: olivoeolio, interview with CNR — W19.
*Chain:* the catastrophe is real and it is also over, in the sense that matters → what is left is a landscape
question, not an emergency.

### B5. **A thousand parts per million**
Average extra virgin olive oil carries **300 to 400 parts per million** of polyphenols. Good Italian varieties reach
**500 to 600**. **Coratina, from the plain between Bari and Andria, is quoted at around a thousand** — oleuropein,
oleocanthal, ligstroside — and that is the burn at the back of the throat, the thing that makes people who are new to
it think the oil has gone off.
**Documented:** the three figures and the compounds; the agronomic work on harvest date and ripening index in two
Puglian environments.
**Not documented:** that it is the highest of any Italian olive. Every source saying so is trade copy (W10). Give the
comparison, not the crown.
URLs: cronachedigusto; olivoeolio; olivonews — W10.

### B6. **Sixty-nine days of rain**
Brindisi, on the thirty-year standard period 1961–1990: **6.8 hours of sunshine a day**, **574.3 mm of rain**, and
**sixty-nine days in the year on which it rains at all**. Not "three hundred days of sun" — a number nobody measures —
but the real shape of a year in which the sky is the constant and the water is the exception, which is why the
landscape is what it is and why the vines are trained low.
**Documented:** the whole climate table and its reference period.
**Not documented:** any official "clear days" count for Lecce or Brindisi.
URL: it.wikipedia Brindisi climate table — W3.

### B7. **Seventy-two kilometres**
The narrowest part of the Strait of Otranto is **72 km**, from **Punta Palascìa** — the easternmost point of Italy,
with its own lighthouse — to the **Karaburun peninsula** in Albania. Everything the Salento is came across that gap:
the Greek that is still spoken in seven villages, the Byzantine settlers who founded about forty Greek-speaking
villages between Otranto and Gallipoli, the fleet of 150 ships that arrived on **28 July 1480**, and the wind.
**Documented:** the distance, the cape, the forty villages, the thirteen that still had Greek in the early 19th
century, the seven that have it now, the 1480 fleet and its size.
**Not documented:** that the Ionian side is "warmer by a few degrees".
URLs: it.wikipedia Canale d'Otranto; Unione Grecìa Salentina; Martiri di Otranto — W24, W9, W22.

### B8. **December 2001, a vineyard at Kaštel Novi** *(strongest for reading 2)*
After sampling **more than 150** old vines along the Dalmatian coast, a match finally appears: a single vine at
Kaštel Novi, near Split, called **Crljenak kaštelanski**, with the same DNA profile as California's Zinfandel — which
had been shown in **1993** to be the same variety as Puglia's Primitivo. In **2008** a new technique reads DNA from
**century-old dried leaves** and puts the oldest name to it: **Tribidrag**, written down in Croatia in **1444**. One
grape, four countries, and America's signature variety turns out to have been an immigrant twice over.
**Documented:** the 1967 observation, the 1972 ampelographic verdict, the 1975 isozymes, the 1993 DNA result, the
150 samples, the 2001 vine, the names of Pejić and Maletić, the 2008 herbarium work, the 1444 record, the 2011 and
2012 publications.
**Not documented:** how Primitivo reached Italy. The Benedictine cutting the old text offers has no source at all
(W34), and saying so is better than repeating it.
URLs: en.wikipedia Zinfandel; Jancis Robinson — W33.

### B9. **Seven per cent**
Puglia makes about **nine million hectolitres** of wine a year, second only to the Veneto. **Seven per cent of it is
DOC.** Twenty-three per cent is IGT. **Seventy per cent leaves as table wine.** The region has four DOCGs and all
four were created in **2011**. Salice Salentino Rosato DOC amounts to about **140,000 bottles**; IGT Salento to
**6.8 million**. The famous names on the map are very small things sitting on top of a very large trade.
**Documented:** the ISTAT split, the hectares, the DOCG count and the 2011 decrees, both bottle figures.
**Not documented:** whether Puglia was ever Italy's largest producer by volume (W31). Do not assert it.
URLs: inumeridelvino (ISTAT); quattrocalici; assovini; Edoardo Freddi — W31, W35, W41.

### B10. **1799, a plot called Liponti**
At Gioia del Colle a priest with a working knowledge of botany picks out, from among the vines, the one plant that
ripens first, and plants a block of it — eight *quarte* of land in the Liponti district. He writes the name he gives
it into the town archive: **Primativo**, the early one. The year **1799** comes from the agronomist Francesco
Antonio Sannino a century later, so it is an attribution, not a receipt. By about **1860** the name had settled as
Primitivo; in the **1870s** it turns up in government publications; two hundred years later it is the most planted
red grape in the region, **12,200 hectares**, having passed Negroamaro in a single decade.
**Documented:** the man, the place, the plot, the name and its meaning, the Sannino attribution, the 1860s and 1870s,
the areas from the 2010 census (Primitivo 7,440 ha in 2000 → 11,766 in 2010 → 12,200 now; Negroamaro 16,670 → 11,400).
**Not documented:** that he was Franciscan (sources differ); whether the 1799 planting was the first anywhere.
URLs: gioiadelcolle.info; it.wikipedia Gioia del Colle Primitivo; Unione Italiana Vini — W32, W42.
*Chain:* one man choosing the earliest-ripening plant in a field → a grape named for its clock → a grape whose clock
is now its commercial problem and its stylistic signature, picked in the last week of August at 15% potential.

---

## Part C — unguarded claims

Things in the current text for which I could find **no source at all**, or only marketing copy. Each should be
dropped, attributed, or replaced with the sourced fact beside it.

1. **"three hundred days of sun"** — no meteorological source counts such a thing (W3). Replace with 69 rain days or
   6.8 sunshine hours a day, Brindisi 1961–90.
2. **"more olive trees than any other region in Europe"** — no comparison with Andalusia found anywhere (W4).
3. **"around sixty million"** olive trees — Coldiretti and regional officials; Wikipedia hedges to 50–60 million.
   Attribute (W4).
4. **"40% of Italy's olive oil"** — the sourced values range from 32% (area) to 45.1% (Mediobanca) to just under 50%
   (ISMEA 2024/25) to over 60% (2023/24). Pick one and name it (W5).
5. **"the largest producer of table olives"** — false; Sicily leads with about half (W6).
6. **"the highest polyphenol content of any Italian olive"** — trade copy only (W10).
7. **"Terra di Bari, Terra d'Otranto, Collina di Brindisi and Dauno"** — there are five; Terre Tarentine is missing
   (W11).
8. **"an estimated 21 million trees"** — Coldiretti's figure for trees inside the infected territory, not a count of
   dead trees; the scientific count of infections is about 4 million and the felled count 2.6 million (W15).
9. **"the front is somewhere around Brindisi and Taranto"** and **"the monumental trees near Ostuni and in the Valle
   d'Itria … are north of the line"** — both out of date (W18).
10. **"two cultivars that resist the disease"** — the CNR explicitly says tolerance, not resistance (W20).
11. **"the clearest water in Italy"** — tourism copy (W28).
12. **"the whitewash was a defence against plague"** — one of at least three accounts, stated as fact (W26).
13. **"tankers of oil went north to be blended and bottled in Tuscany and Liguria"** — could not source for oil this
    pass (W29).
14. **"the region produced more wine than any other in Italy"** — not true now (Veneto), and the historical version
    is unverified (W31).
15. **"a Benedictine cutting is the usual story"** — no source anywhere (W34).
16. **"the region's only DOCG"** — false; there are four (W35).
17. **"350 to 500 metres"** for Gioia del Colle — the disciplinare says 200–450 (W38).
18. **"mostly Negroamaro with a share of Malvasia Nera, aged from a year; Riserva two years"** for Salice Salentino —
    the rulebook has moved and Malvasia Nera is no longer named in the red (W40).
19. **"the Salento makes more serious rosé than any part of Italy"** — the volume data contradict each other and
    "serious" is a judgement (W46).
20. **"ninety-year-old bush vines"** for Fino's Es — about sixty (W47).
21. **"pulled up faster than anywhere in Italy"** — the scheme and Puglia's 10,560 ha ceiling are documented; the
    comparative superlative is not (W49).
22. **"much of what remains is trained on the high tendone"** — no regional figure found; alberello is documented as
    the most widespread system between Brindisi and Taranto (W50).
23. **"Fiano Minutolo"** — the name itself is the error (W51).

---

## Part D — what the region's wine story actually is

The frame the old text uses — *Europe's blending tank redeems itself through two native grapes* — survives the
research, but it is out of focus in two places, and one of them is load-bearing.

**First, the redemption has barely happened in the numbers.** Seven per cent of Puglia's nine million hectolitres is
DOC. Seventy per cent still leaves as table wine. The denominations the reading names are minute: Gioia del Colle is
**123 hectares**, Squinzano **52**, Brindisi **394**, Salice Salentino **1,540**; Salice Salentino Rosato DOC is about
**140,000 bottles** against **6.8 million** of IGT Salento. All four of Puglia's DOCGs were created in **2011**, and
the top of the pyramid is therefore fifteen years old. The honest story is not "Puglia stopped being a bulk region";
it is that a very small, very good layer formed on top of a bulk region that is still there underneath, still second
in Italy by volume, and that the interesting wines are a rounding error in the region's own production. That is more
interesting than the redemption arc, and it is checkable.

**Second, the two grapes are not a stable pair — one of them is eating the other.** Between the 2000 and 2010
censuses Negroamaro fell from **16,670 to about 11,400 hectares** while Primitivo rose from **7,440 to 11,766**, and
Primitivo is now about **12,200 hectares** nationally. The Salento's own grape is in retreat in the Salento, pushed
by a name that sells abroad because an American wine magazine's readers already knew it. The reading treats
Negroamaro and Primitivo as equal partners in a recovery; the decade of data says one of them won.

**Third, the Primitivo story runs the right way round and should be kept that way.** The chain is: a priest picks the
earliest-ripening plant in a field at Gioia del Colle around 1799 and names it for its clock; a UC Davis professor
notices in 1967 that an Italian wine tastes like the American grape; enzymes say identical in 1975; DNA says
identical in 1993; a vine at Kaštel Novi closes the circle in December 2001; dried leaves and a 1444 Croatian record
give the whole thing its oldest name in 2008. Every step is a technique producing an answer the previous technique
could not reach. The Benedictine cutting the text currently offers as "the usual story" has no source and should be
replaced by the admission that the crossing is unknown.

**For reading 1 the frame does need changing.** The reading is written as an unfolding catastrophe — the bacterium is
"quietly destroying" the landscape, the front is advancing, the growers are replanting. In 2026 that is three years
out of date in every particular. The front is at the edge of Bari and has been for a while, having crossed the 41st
parallel in a focus of **six olives and three almonds**; the northward advance has slowed from kilometres a year to
**ten or fifteen plants a year** around a new focus; there is symptom remission in surviving Cellina di Nardò since
about 2021; the replanting has largely *not* happened — **440 completed applications out of 9,000**, **€5 million
spent of €30 million** for grafting — and the tolerant cultivars are tolerant, not resistant, at **12% infected
against Leccino's 50% and Ogliarola salentina's 100%**. The Salento is not being destroyed now. It was destroyed,
between 2013 and 2018, and what is happening now is a slow, badly funded, partly stalled attempt to decide what
replaces it — while a regional register lists **332,498 individual trees** it is a crime to cut down. That
tension — a law that counts trees one by one against a disease whose only control is felling them — is the reading's
real subject, and it is fully documented.
