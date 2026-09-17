# Basilicata — research pass for the two wine readings (1: "Vulture: wine on a volcano", 2: "Aglianico, the Barolo of the south")

Research done 2026-09-17 for the rewrite of `content/basilicata.js` readings 1 and 2 (`window.READINGS['IT-77']`).
Claims extracted from the existing text; verdicts CONFIRMED / CORRECTED / PARTLY RIGHT / DISPUTED / UNSUPPORTED /
CANNOT VERIFY.

Source labels: **[official]** government, EU, ministry, ISTAT, civil protection; **[academic]** peer-reviewed;
**[reference]** encyclopaedia or appellation mirror; **[consortium]** the Consorzio di Tutela or a regional
agency; **[producer]** the estate's own account; **[press]** trade or local press; **[merchant]** a shop or
importer; **[calculated]** arithmetic of mine.

**Note on primary sources.** The ministry's own database `catalogoviti.politicheagricole.it` refused every
connection again (`ECONNREFUSED 93.32.50.151`), as it did for Puglia, so the *disciplinare* below is
reconstructed from four independent mirrors (agraria.org, accademiavino.it, hellotaste.it, italianwinecentral)
which agree on everything except one clause, flagged at W19. ScienceDirect, ResearchGate, Wine-Searcher,
Gambero Rosso and the Smithsonian GVP all returned 403; the volcanology was closed through OpenAlex's open API,
which does return abstracts, plus the Gazzetta Ufficiale for the 2018 variety decree. WebSearch was degraded
throughout this session (frequently returning only a Wikipedia index, and erroring outright perhaps one call in
six), so most of what follows was closed by direct fetch.

---

**Headline: the geology paragraph is wrong by an order of magnitude, and in a way the writer will enjoy fixing.
Monte Vulture did not fall quiet "tens of thousands of years" ago — its last eruptions were the phreatomagmatic
blasts that dug the two Monticchio maars, dated 132 ± 12 ka and 141 ± 11 ka. The lakes in the old reading are
not incidental scenery; they are the craters of the final eruption, and the sediment that has settled in one of
them since is a 133,000-year climate archive holding more than 340 ash layers from every volcano in Italy. The
second-biggest error is a legal one: there is no rosato in the Aglianico del Vulture DOC, so the "deep pink
rosato" sentence describes a wine that exists only as Basilicata IGT. Third: Paternoster is at Barile, not
Rionero — and Barile is the town with the 131 rock-cut cellars the reading already describes, which makes the
error a wasted connection. Fourth: "DNA has found little relationship with Greek varieties" is presented as
settled and is not; the largest SNP study of Magna Graecia germplasm (De Lorenzis et al., 2019) concludes the
opposite. Against that, several things the old text gets right and could press harder: 2010 for the DOCG is
correct and English Wikipedia's "2011" is wrong; "extinct" is the correct official word here (unlike the Alban
Hills); "fifteen communes" is right; "more than a hundred" cellars is right and the real figure is 131; and the
Riserva's "five years, two in wood" is right.**

---

## Section 1 — Claim audit

### Reading 1 — geology, geography, appellation, towns

### W1. "a cone of basalt, tuff and volcanic ash rising to 1,326 metres"
**Verdict: CONFIRMED (height), CONFIRMED in substance (rocks).**
1,326 m a.s.l., prominence 696 m. The edifice is built of pyroclastics, tuffs and lavas; it is unusual among
large Italian volcanoes in lying *east* of the Apennine chain, and its magmas are strongly alkaline —
melilitite–carbonatite, not ordinary basalt. Carnevale & Zanon (2024), *Geosciences* 14:349, is on the pelletal
lapilli of its "explosive melilitite–carbonatite eruptions".
URLs: https://it.wikipedia.org/wiki/Monte_Vulture **[reference]**, https://en.wikipedia.org/wiki/Monte_Vulture
**[reference]**, https://doi.org/10.3390/geosciences14120349 **[academic]**
**Use:** "basalt" is loose. "lava, tuff and ash" is safe; the precise word for the magma is carbonatitic.

### W2. "Vulture last erupted long before anyone was there to write it down, and it has been quiet for tens of thousands of years."
**Verdict: CORRECTED — the real figure is ten times larger, and far more interesting.**
The volcano's last activity was the phreatomagmatic eruption pair that excavated the two Monticchio maars:
**Lago Grande di Monticchio 132 ± 12 ka BP** and **Lago Piccolo di Monticchio 141 ± 11 ka BP**. The Smithsonian
Global Volcanism Program dates the Lago Piccolo maar at **0.141 Ma**. Carnevale et al. (2024), *Terra Nova*,
speak of "the last Mt. Vulture volcano activity (140 ka)". Italian Wikipedia says the volcano was active "fino a
circa 130 000 anni or sono".
So: roughly **130,000–141,000 years**, not "tens of thousands".
URLs: https://doi.org/10.1016/j.quascirev.2012.10.020 (Wulf et al. 2012, *Quaternary Science Reviews*, "The
100–133 ka record of Italian explosive volcanism and revised tephrochronology of Lago Grande di Monticchio")
**[academic]**; https://doi.org/10.1016/j.yqres.2004.02.001 area — Wulf et al. 2004, *Quaternary Research*,
"Tephrochronology of the 100 ka lacustrine sediment record of Lago Grande di Monticchio" **[academic]**;
https://doi.org/10.1111/ter.12745 **[academic]**; https://volcano.si.edu/volcano.cfm?vn=211812 **[official,
retrieved via search summary — the page itself returned 403]**
**Warning about the obvious source:** **English Wikipedia says "phreatomagmatic explosions around 40 ka ago"**
and is out by a factor of three against the tephrochronology it would need to rely on. Do not use it. (This is
the same failure mode as Campania and Lazio: the English article is the one that is wrong.)

### W3. Is Vulture properly "extinct", "dormant" or "quiescent"?
**Verdict: CONFIRMED — "extinct" is correct here, unlike the Alban Hills.**
The Dipartimento della Protezione Civile classifies Italian volcanoes by date of last eruption: **estinti** =
last eruption more than 10,000 years ago; **quiescenti** = erupted within the last 10,000 years but now at rest;
**attivi** = erupting in recent years. **Monte Vulture is listed as extinct**, with Salina, Amiata, Vulsini,
Cimini, Vico, Sabatini, the Pontine islands and Roccamonfina. The Colli Albani — the Lazio case where the old
text was wrong — are in the *quiescent* list.
URL: https://rischi.protezionecivile.gov.it/it/vulcanico/vulcani-italia/ **[official]**
**Use:** the reading may say "extinct" without hedging, and it is worth saying *why* the word applies: the
10,000-year line, which Vulture is on the far side of by a factor of thirteen.

### W4. "A volcano that stopped" — is it inert?
**Verdict: PARTLY RIGHT — it has stopped erupting; it has not stopped degassing.**
Mt Vulture still discharges **mantle-derived CO₂**. The reference study is Caracausi, Paternoster & Nuccio
(2015), "Mantle CO₂ degassing at Mt. Vulture volcano (Italy): Relationship between CO₂ outgassing of volcanoes
and the time of their last eruption", *Earth and Planetary Science Letters* 411: 268–280
(doi:10.1016/j.epsl.2014.11.049) — the title itself makes the point that a volcano can outgas long after its
last eruption. Carnevale et al. (2024, *Terra Nova*) find CO₂-dominated fluid inclusions in mantle xenoliths
brought up by that last eruption, equilibrating at 1039–1142 °C, and constrain magma storage at the
**crust–mantle boundary (32 km)** and a **shallow reservoir at 12–14 km**.
URLs: https://doi.org/10.1016/j.epsl.2014.11.049 **[academic]**, https://doi.org/10.1111/ter.12745 **[academic]**
**Use:** a good, true, unexpected line — the mountain that stopped erupting 130,000 years ago is still breathing
carbon dioxide from the mantle. Note that one of the three authors of the CO₂ paper is named **Michele
Paternoster** (a geologist at the Università della Basilicata) — same surname as the wine family; do not imply a
connection, but do not be startled by it either.

### W5. "Two crater lakes, the Laghi di Monticchio, sit in the old caldera under beech forest"
**Verdict: PARTLY RIGHT — they are maars, and that is the better fact.**
They are two adjacent **maar** lakes (explosion craters, not a collapse caldera), lying within a caldera on the
western flank. **Lago Grande**: 38 ha, perimeter 2,700 m, depth ~36 m, 656 m a.s.l. **Lago Piccolo**: 16 ha,
perimeter 1,800 m, depth ~38 m, 658 m a.s.l. The beech wood is real and unusual: a *faggeta* at only ~650 m,
low for the species. The Abbazia di Sant'Ippolito stands between the lakes (11th–12th c., damaged in the 1456
earthquake).
URLs: https://it.wikipedia.org/wiki/Laghi_di_Monticchio **[reference]**,
https://www.gfz.de/en/section/geomorphology/projects/lago-grande-di-monticchio **[academic, project page]**
**Use:** "the last thing the volcano did was blow these two holes, and they filled with water."

### W6. The Monticchio sediment record (the old text does not mention it)
**Verdict: CONFIRMED and strongly recommended.**
Lago Grande di Monticchio holds a partly varved sediment sequence of about **100 m** covering the last
**~133,000 years** — one of the longest continuous terrestrial climate archives in the Mediterranean. It
contains **more than 340 visible tephra layers**, 0.1 mm to 33.2 cm thick, from the explosive eruptions of
Italian volcanoes 100–540 km away. Chronology by varve counting and sedimentation rates (Zolitschka &
Negendank; Brauer et al.), independently tested by radiocarbon and tephra, mean deviation ±5%.
URLs: Wulf et al. 2012, *Quaternary Science Reviews*, doi:10.1016/j.quascirev.2012.10.020 **[academic]**;
Martín-Puertas et al. 2014, *Climate of the Past* 10:2099 **[academic]**;
https://www.gfz.de/en/section/geomorphology/projects/lago-grande-di-monticchio **[academic]**
**Use:** the crater of the last eruption has been quietly recording every eruption in Italy ever since.

### W7. "the mineral water bottled at their foot is sold across Italy"
**Verdict: CONFIRMED, and understated.**
Monticchio Gaudianello SpA (Melfi) bottles from springs on Vulture's flanks; the Melfi plant can fill **2
million bottles a day**. Gaudianello is **fourth in Italy** in naturally sparkling mineral water. Norda acquired
the company in 2010 (announced 26 October 2010; completed December 2010), which made Norda the fifth national
group with 6.7% of the market. The AMI group (Gaudianello, Ninfa Leggera, Toka, Solaria) was Basilicata's
largest bottler in 2019 at about **450 million litres**. Other springs: Fonti del Vulture (Coca-Cola), Fonte
Cutolo Rionero (San Benedetto). *Il Sole 24 Ore* has run the regional figure as "un miliardo di litri
imbottigliati".
URLs: https://www.beverfood.com/norda-acquisisce-sorgenti-lucane-monticchio-gaudianello-wd3832/ **[press]**,
https://it.wikipedia.org/wiki/Rionero_in_Vulture **[reference]**,
https://www.ilsole24ore.com/art/basilicata-record-le-minerali-miliardo-litri-imbottigliati-AClo5m2 **[press]**
**Use:** "two million bottles a day" is the figure to use, not "sold across Italy".

### W8. "The soil on its slopes is dark, porous and full of potassium"
**Verdict: UNSUPPORTED as to potassium — no soil analysis of Vulture vineyards found.**
That volcanic soils are generally rich in potassium, phosphorus and magnesium is a commonplace in Italian wine
writing; I found no pedological study measuring exchangeable potassium in Vulture vineyard soils. What *is*
documented for the Vulture specifically: pyroclastic cover, tuff, lava flows, and a mix of black clay with
coarse sand from friable sandy tuff; Barile sits on lava flows, Ginestra on ash, volcanic sand, rock and
calcareous clay.
URLs: https://www.quattrocalici.it/glossario-vino/viticoltura-e-tipologie-di-suolo/suoli-vulcanici/
**[reference, generic]**, https://v1.vinous.com/articles/getting-in-on-the-ground-floor-aglianico-del-vulture-may-2024
**[press, Eric Guido, May 2024]**
**Recommendation:** drop "full of potassium" or attribute it as a generality about volcanic soils. The specific,
sourceable claim is about *texture* — see W46.

### W9. "it drains fast, and it holds the heat of the day into the night"
**Verdict: UNSUPPORTED, and internally contradictory with the paragraph that follows.**
Fast drainage on porous pyroclastics is well attested. "Holds the heat into the night" has no source I could
find — and the very next paragraph of the old reading argues the opposite case, that "the nights are cold from
September onward" and that the wide day–night difference is what preserves acidity. Both cannot be doing the
work. Cut one.

### W10. "The vineyards ring the mountain between roughly 200 and 600 metres, and some climb higher."
**Verdict: PARTLY RIGHT — the legal range is 200–700 m, and it is a rule, not an observation.**
The *disciplinare* requires vineyards between **200 and 700 m a.s.l.**; grapes outside that band cannot carry
the denomination. Vinous (2024) reports vineyards "upwards of 600 metres" at Barile and around 500 m at
Maschito. One Italian source says Aglianico is grown in the zone up to 800 m but does best between 200 and 600.
URLs: https://www.accademiavino.it/disciplinare/aglianico-vulture-doc **[reference, disciplinare mirror]**,
https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference, disciplinare mirror]**,
https://v1.vinous.com/articles/getting-in-on-the-ground-floor-aglianico-del-vulture-may-2024 **[press]**
**Use:** "the law draws the vineyard between 200 and 700 metres" is stronger than "roughly".

### W11. "This is the far south, on the latitude of Naples"
**Verdict: CORRECTED — the Vulture is slightly north of Naples.**
Naples 40°51′N. Rionero in Vulture **40°55′N** (643 m). Barile **40°57′N**. Melfi **41°00′N**. So the wine
country sits a few minutes of latitude *north* of Naples, not on its latitude.
URLs: https://en.wikipedia.org/wiki/Rionero_in_Vulture **[reference]**, https://en.wikipedia.org/wiki/Melfi
**[reference]**, https://www.comuni-italiani.it/063/049/clima.html **[reference]**
**Use:** "a little further north than Naples, and a thousand metres further up" is both true and sharper.

### W12. "It has half a million people, two provinces and eight per cent flat land"
**Verdict: CONFIRMED on all three.**
- Population **522,952** (30 June 2026) / **525,281** (1 January 2026, ISTAT). Area 10,073 km², 131 comuni.
- Two provinces: **Potenza** and **Matera**.
- ISTAT altimetric zones, surface: **montagna 468,215 ha = 46.8%**, **collina 450,934 ha = 45.1%**, **pianura
  80,312 ha = 8.0%**. ISTAT's thresholds: mountain above 700 m in the centre-south, hill below that, plain where
  significant relief is absent.
URLs: https://it.wikipedia.org/wiki/Basilicata **[reference]**, https://www.tuttitalia.it/basilicata/
**[reference, ISTAT-derived]**, https://it.wikipedia.org/wiki/Zone_altimetriche_d'Italia **[reference,
reproducing the ISTAT table]**
**Use:** "eight per cent" is exactly right; "46.8 mountain, 45.1 hill, 8.0 plain" is the full triple and reads
better than "the rest is mountain and hill".

### W13. "Basilicata is hard to reach and has almost no coast"
**Verdict: CONFIRMED, with figures.**
Tyrrhenian coast ~**30 km**, all of it in the single commune of **Maratea** (some sources say 32 km). Ionian
coast ~**35–40 km**, from the mouth of the Bradano at Metaponto to Nova Siri. Total roughly **70 km** for a
region of 10,073 km². Highest point Monte Pollino, 2,248 m.
URLs: https://www.basilicataturistica.it/en/discover-basilicata/sea-and-coasts-in-basilicata-2/ **[promotional]**,
https://campaniliditalia.it/maratea-basilicata/ **[press]**, https://it.wikipedia.org/wiki/Basilicata
**[reference]**
**Note:** no single official coastline measurement was found; both figures come from tourism sources. Treat as
approximate.

### W14. "Aglianico del Vulture DOC dates from 1971"
**Verdict: CONFIRMED, with the precise instrument.**
**DPR 18 February 1971**, published in *Gazzetta Ufficiale* n. 129 of 22 May 1971. Subsequently modified by DM
9 March 1987, DM 2 August 2010, DM 30 November 2011 and DM 7 March 2014 (the version in force).
URLs: https://it.wikipedia.org/wiki/Aglianico_del_Vulture **[reference]**,
https://www.quattrocalici.it/denominazioni/aglianico-del-vulture-doc/ **[reference]**,
https://consorzioaglianico.it/ **[consortium]**

### W15. "which makes it one of the older appellations in the south"
**Verdict: CONFIRMED as written — but it is not the oldest, and the reading should not drift into implying it.**
Order of the early southern DOCs: **Ischia**, DPR 3 March 1966 (GU 9 May 1966) — the second DOC in Italy after
Vernaccia di San Gimignano; **Etna**, DPR 11 August 1968, the first in Sicily; **Cirò**, 2 April 1969, the first
in Calabria; **Taurasi**, 1970; **Aglianico del Vulture**, 18 February 1971.
It was, however, **Basilicata's first DOC and its only one for thirty-two years**: Terre dell'Alta Val d'Agri
followed by DM 4 September 2003, Grottino di Roccanova by DM 24 July 2009, then Matera. Basilicata today has one
DOCG, four DOC and one IGT (Basilicata IGT).
URLs: https://www.quattrocalici.it/regione/basilicata/denominazioni/ **[reference]**,
https://www.assovini.it/italia/campania/item/157-ischia-doc **[reference]**,
https://www.ischia.it/it/ischia-i-50-della-doc **[press]**,
https://www.ilcirotano.it/2019/07/01/il-ciro-doc-compie-50-anni-il-primo-vino-in-calabria-ad-ottenere-la-doc/ **[press]**
**Use:** "the only DOC Basilicata had for thirty-two years" is the fact worth having.

### W16. "The wine is 100% Aglianico"
**Verdict: CONFIRMED, with a wrinkle worth a sentence.**
Both DOC and DOCG require 100% of "**Aglianico del Vulture N. e/o Aglianico N.**" — i.e. the rules name *two*
registered varieties and allow either or both. Since 2018 those two names are official synonyms (see W33).
URLs: https://www.accademiavino.it/disciplinare/aglianico-vulture-doc **[reference]**,
https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference]**

### W17. "minimum 12.5% alcohol, and may not be sold until a year after the harvest" (the DOC)
**Verdict: PARTLY RIGHT — 12.5% is the figure at consumption; the release rule is a date, not a duration.**
DOC: minimum **natural** alcohol at harvest **12.00%**; minimum **total** alcohol at consumption **12.50%**;
maximum yield **10 t/ha** with a 70% grape-to-wine conversion; release **from 1 September of the year following
the harvest**. The spumante needs a minimum natural 11.00% and at least 9 months of second fermentation in
bottle, released around 1 August of the following year. Residual sugar for the still wine max 10 g/l.
URLs: https://www.accademiavino.it/disciplinare/aglianico-vulture-doc **[reference]**,
https://italianwinecentral.com/denomination/aglianico-del-vulture-doc/ **[reference]**,
https://www.assovini.it/italia/basilicata/item/122-aglianico-del-vulture-doc **[reference]**
**Use:** "on sale from the first of September the year after the harvest" — about eleven months, not a year.

### W18. "Aglianico del Vulture Superiore was raised to DOCG in 2010"
**Verdict: CONFIRMED — and the common alternative date, 2011, is wrong.**
**DM 2 August 2010**, *Gazzetta Ufficiale* n. 188 of 13 August 2010. The DM of 30 November 2011 (GU 295, 20
December 2011) is a later modification of the same rules, which is where "2011" comes from — **English
Wikipedia gives 2011, citing the Oxford Companion**, and Italian Wikipedia's infobox also leads with 30 November
2011. The original elevation is 2010.
URLs: https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference]**,
https://www.quattrocalici.it/denominazioni/aglianico-del-vulture-superiore-docg/ **[reference]**,
https://it.wikipedia.org/wiki/Aglianico_del_Vulture **[reference]**
**Use:** the old text is right. Keep 2010 and do not let a reviewer "fix" it to 2011.

### W19. "minimum 13.5% alcohol and at least three years of ageing. The Riserva needs five years, two of them in wood."
**Verdict: CONFIRMED, and the missing detail is the good one.**
Superiore DOCG, Article 5: ageing of at least three years **counted from 1 November of the harvest year**, of
which **at least 12 months in wood and at least 12 months in bottle**; released from **1 November of the third
year** after the vintage.
Riserva: released from **1 November of the fifth year**, after **at least 24 months in wood** and **at least 12
months in bottle**.
Article 4: max **8 t/ha**, minimum natural alcohol **13.00%**, planting density ≥3,350 vines/ha for new
plantings, irrigation forbidden, hillside sites of prevalently volcanic origin, 200–700 m.
Article 5 yield: 65% (**52 hl/ha**). Article 6 at consumption: total alcohol **13.50%** minimum, total acidity
**≥4.5 g/l**, non-reducing extract **≥26 g/l**.
**One dissenting mirror:** agraria.org gives the Riserva as "24 months in wood **and 24 months in bottle**".
Three other reproductions (accademiavino, hellotaste, italianwinecentral) all say **24 + 12**. Go with 24 + 12
and do not put the bottle figure in the reading unless it can be checked against the ministry's own text.
URLs: https://www.accademiavino.it/disciplinare/aglianico-vulture-superiore-docg **[reference]**,
https://www.hellotaste.it/vino/denominazioni/docg/aglianico-del-vulture-superiore **[reference]**,
https://italianwinecentral.com/denomination/aglianico-del-vulture-superiore-docg/ **[reference]**,
https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference, dissenting]**
**Use:** the clock starting on **1 November of the harvest year** is the detail the old text misses, and it is
the one that explains why a Superiore is a four-year-old wine before you can buy it.

### W20. "Fifteen communes may use the name"
**Verdict: CONFIRMED — fifteen, named.**
Rionero in Vulture, Barile, Rapolla, Ripacandida, Ginestra, Maschito, Forenza, Acerenza, Melfi, Atella, Venosa,
Lavello, Palazzo San Gervasio, Banzi, Genzano di Lucania — **excluding three administrative enclaves of Atella
(Sant'Ilario, Riparossa, Macchia)**. All in the province of Potenza.
Beware two nearby numbers that are *not* this one: the **Vulture as a geographic region** is usually given as 13
comuni (adding Ruvo del Monte, Rapone, San Fele and dropping the eastern ones), and the **consortium's own
website** lists 12. The appellation's list is fifteen.
URLs: https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference]**,
https://it.wikipedia.org/wiki/Aglianico_del_Vulture **[reference]**,
https://en.wikipedia.org/wiki/Vulture_(region) **[reference]**, https://consorzioaglianico.it/ **[consortium]**
**Note:** the old text names Rionero, Barile, Rapolla, Venosa, Melfi and Ginestra — all six are on the list.

### W21. The 70 *menzioni geografiche aggiuntive* (the old text does not mention them)
**Verdict: CONFIRMED and recommended.**
The DOCG *disciplinare* carries an Allegato A of **70 additional geographic mentions** — contrade and frazioni
that may be printed on the label, a cru system in all but name. They run alphabetically from **Accovatura** to
**Vizzarro** and include **Il Titolo** (Elena Fucci's vineyard), **Piano del Cerro**, **Macarico**,
**Notarchirico**, **Serra del Trono**, **Pipoli**, **Le Querce**, **Gelosia**, **Caldara**.
URLs: https://www.hellotaste.it/vino/denominazioni/docg/aglianico-del-vulture-superiore **[reference]**,
https://www.agraria.org/vini/disciplinareaglianicodelvulturesuperiore.htm **[reference]**
**Bonus:** **Notarchirico** is also the name of a Lower Palaeolithic Acheulean site at Venosa, dated by Vulture's
own tephra layers — a vineyard mention named after one of the oldest human settlements in southern Italy.

### W22. Is there a rosato or a spumante inside the DOC?
**Verdict: MIXED — spumante yes, rosato NO. This is a factual error in reading 2 (see W40).**
The DOC recognises exactly two types: **Aglianico del Vulture** (red) and **Aglianico del Vulture spumante**
(traditional method, brut to extra dry, min 9 months on the second fermentation). The DOCG recognises
**Superiore** and **Superiore Riserva**. Neither has a rosato. A pink Aglianico exists and is made, but it is
sold as **Basilicata IGT**.
URLs: https://www.accademiavino.it/disciplinare/aglianico-vulture-doc **[reference]**,
https://www.assovini.it/italia/basilicata/item/122-aglianico-del-vulture-doc **[reference]**,
https://www.quattrocalici.it/regione/basilicata/denominazioni/ **[reference]**
**Note:** older editions of the DOC carried "Vecchio" (3 years) and "Riserva" (5 years) qualifications; those
requirements migrated to the DOCG in 2010, and mirrors that still list them are describing the pre-2010 rules.
Do not write that the DOC has a Riserva.

### W23. Planted hectares and annual production
**Verdict: DISPUTED — the sources differ by a factor of eight, so attach a year and a source to whatever is used.**
- **State seals applied (the hardest series; Consorzio/Chamber of Commerce data via ALSIA, 2020):** 2015
  1,199,042 DOC + 11,344 DOCG; 2016 2,346,949 + 59,299; 2017 2,408,174 + 46,980; 2018 2,606,569 + 61,111;
  **2019 2,593,124 DOC + 119,011 DOCG**, about 20,000 hl in all.
- **Producers:** **254 companies** in the control system (2019); **58** requested seals in 2019. Historically:
  1,361 registered companies in 1996, 306 in 1997.
- **italianwinecentral (2021):** DOC **582 ha**, five-year average **22,350 hl**; DOCG **71 ha**, **500 hl**.
- **English Wikipedia:** 375 ha, 22,200 hl (citing italianwinecentral, so an older edition of the same figure).
- **AIS Lombardia:** "~200 ha, 2 million bottles, 40 bottlers".
- **Assoenologi:** the DOCG makes "poco più di 150mila bottiglie l'anno"; the DOC about 2.5 million.
- **Regional context (AGEA via ALSIA, 2018):** Basilicata's whole vineyard is about **4,000 ha** producing
  **94,000 hl**; Aglianico is over 60% of the region's vine surface.
- Real production of the denomination in the 1990s: 15,442 hl (1990), 9,835 hl (1996).
URLs: https://alsia.it/opencms/opencms/agrifoglio/agrifoglio_online/dettaglio/articolo/Aglianico-del-Vulture-tutti-i-numeri-della-prima-eccellenza-lucana/
(Baldantoni & Ippolito, *Agrifoglio* 99, 30 September 2020) **[official, regional agency]**;
https://italianwinecentral.com/denomination/aglianico-del-vulture-doc/ **[reference]**;
https://www.assoenologi.it/enologonlinerubriche/aglianico-del-vulture-superiore-basilicata/ **[press]**
**Use:** "about two and a half million bottles a year, of which the DOCG is roughly 150,000" is defensible and
memorable. Avoid a bare hectare figure.

### W24. The Consorzio
**Verdict: CONFIRMED (the old text does not mention it; it is useful).**
Consorzio di Tutela dell'Aglianico del Vulture, constituted **12 April 1986**, entered in the Potenza business
register 19 February 1996, seat in Rionero in Vulture at Palazzo Giustino Fortunato. State seals have been
compulsory on every DOC bottling since **1 May 2015** (cost of a seal at the time: €0.014).
URLs: https://consorzioaglianico.it/ **[consortium]**,
https://www.basilicata.camcom.it/sites/default/files/contenuto_redazione/pagina_base/allegati/procedure_e_modalita_sperimentali_aglianico.pdf
(Consorzio circular, Rionero, 15 April 2015, signed by president Carolin Martino) **[official]**

### W25. "The harvest here runs from late October into November, later than almost anywhere else in the country."
**Verdict: CONFIRMED as a norm; the superlative is fair but unquantified; and the trend needs a hedge.**
Quattrocalici: harvest "generally between the end of October and the beginning of November, when phenolic
ripeness is complete". The Oxford Companion (via English Wikipedia) has Aglianico "picked from late October to
early November". Vinous reports the 2022 vintage picked "from October into November". Assoenologi's 2025 vintage
report says Aglianico del Vulture must wait "at least until the second half of October".
**The hedge:** the national harvest has moved earlier. Italy's 2026 vintage was the earliest on record, 10–15
days ahead of historical averages and up to three weeks in places. I found **no Vulture-specific time series**
of harvest dates, so do not write that the date has held.
URLs: https://www.quattrocalici.it/vitigni/aglianico-del-vulture/ **[reference]**,
https://www.materanews.net/vendemmia-2025-in-basilicata-produzione-in-crescita-i-dati/ **[press, citing
Assoenologi/UIV/Ismea]**, https://agronotizie.imagelinenetwork.com/agricoltura-economia-politica/2026/07/30/vendemmia-2026-in-anticipo-di-dieci-giorni-e-dall-esito-imprevedibile/89592
**[press]**
**One dated, concrete harvest fact:** Cantina di Venosa took in **48,000 quintals** of grapes in 2025, **40,000
of them Aglianico**, after "a cool spring, a dry summer and a bright, regular autumn".
URL: https://cantinadivenosa.it/notizie/vendemmia-2025-larmonia-perfetta-del-vulture-firmata-cantina-di-venosa
**[producer]**

### W26. "At 450 to 600 metres the nights are cold from September onward, the difference between day and night temperature is wide"
**Verdict: UNSUPPORTED as a measured claim — no diurnal-range figures for the Vulture found.**
The mechanism is standard viticultural physiology (cool nights slow respiration, conserving malic acid and
favouring anthocyanin accumulation) and there is a measured study for *another* variety: Gaiotti et al. (2018),
*Scientific Reports*, "Low night temperature at veraison enhances the accumulation of anthocyanins in Corvina
grapes". Nothing Vulture-specific, and no published °C spread for Rionero or Barile.
**Recommendation:** state the mechanism, attribute it as general viticulture, and do not invent a number.

### W27. "the hillside is honeycombed with cellars cut straight into the rock, more than a hundred of them" (Barile)
**Verdict: CONFIRMED — 131, and they have a name.**
The **Parco Urbano delle Cantine** at Barile comprises **131 cellars cut into volcanic tuff** in the **Sheshë**
quarter (Albanian *sheshë*, "square" or "plaza", from the open space that stood there in the 15th century). They
are about 500 years old, dug first as shelters by the Albanian settlers and then used — and still used, if less
— for storing Aglianico. The commune's own page confirms "grotte scavate nel tufo" used "nel passato ed oggi in
misura minore, a depositi per la custodia del vino".
URLs: http://www.comune.barile.pz.it/le_cantine_dello_sheshe.php **[official, municipal]**,
https://www.italia.it/it/basilicata/potenza/barile/parco-urbano-delle-cantine **[official, tourism]**,
https://it.wikipedia.org/wiki/Barile_(Italia) **[reference]**
**Use:** "131" beats "more than a hundred", and *sheshë* is a word worth teaching.

### W28. "Rionero and Barile have Albanian roots, settled in the fifteenth century by refugees from the Ottoman advance"
**Verdict: CONFIRMED, and the dates can be made specific.**
**Barile:** first Arbëreshë settlement about **1477**, after the fall of Scutari (1477); further waves in
**1534** (from Corone in the Morea, taken 1532), **1597**, **1664**, **1675**.
**Rionero:** existed as a *casale* from the 12th century; repopulated after the 1456 earthquake by survivors
from Atella; Albanian refugees arrived after Skanderbeg's death in **1468**, and in **1477–78** exiles fleeing
Mehmed II's campaigns were settled there by King Ferdinand I. Byzantine rite until **1627**. Rionero became an
autonomous commune on 4 May 1811 by decree of Joachim Murat.
URLs: https://it.wikipedia.org/wiki/Barile_(Italia) **[reference]**,
https://it.wikipedia.org/wiki/Rionero_in_Vulture **[reference]**
**Correction to note:** the two towns' settlements are *related but not the same event* — Rionero's Albanian
influx followed Skanderbeg's death and Ferdinand I's resettlement policy; Barile's is dated to the fall of
Scutari with four later waves.

### W29. "Barile still keeps traces of the Arbëreshë language"
**Verdict: CONFIRMED, and stronger than "traces" — while Rionero has lost it.**
Italian Wikipedia says the people of Barile "conservano l'uso corrente della lingua arbëreshe". English
Wikipedia says of Rionero that the village "was founded and historically inhabited by the Arbëreshë minority,
who no longer retain the language". Arbërisht is a protected historic linguistic minority under **Law 482/1999**,
and Basilicata's own **Regional Law 40/1998** protects the Arbëreshë communities of Barile, Brindisi di
Montagna, Ginestra, Maschito, San Costantino Albanese and San Paolo Albanese. Note that **Ginestra and Maschito
are also wine communes of the denomination**.
URLs: https://www.mimit.gov.it/images/stories/mise_extra/Scheda-minoranze.pdf (Fiorenzo Toso for the ministry)
**[official]**, https://www.regione.basilicata.it/giunta/site/giunta/department.jsp?dep=100056&area=109477
**[official]**, https://it.wikipedia.org/wiki/Barile_(Italia) **[reference]**
**Use:** three of the fifteen wine communes are Albanian-speaking or Albanian-founded. That is a better sentence
than "traces".

### W30. "Melfi has a Norman castle where Frederick II issued his constitutions in 1231"
**Verdict: CONFIRMED — and the date has a day.**
The **Constitutions of Melfi** (*Liber Augustalis*, *Liber Constitutionum Regni Siciliae*) were promulgated by
Frederick II at Melfi on **1 September 1231**, drafted with Pier della Vigna, Michael Scot, Roffredo of
Benevento, Giacomo Amalfitano and Berardo of Castacca. The castle is Norman; Robert Guiscard confined his first
wife there; the Angevins restored it; the Doria held it until 1950. **Five papal councils** were held at Melfi
between 1059 and 1137 — at the first, in 1059, Nicholas II recognised the Norman conquests and made Robert
Guiscard duke; at the third, in 1089, Urban II proclaimed the First Crusade.
URLs: https://it.wikipedia.org/wiki/Costituzioni_di_Melfi **[reference]**, https://it.wikipedia.org/wiki/Melfi
**[reference]**
**Modern Melfi, for contrast:** a Fiat (now Stellantis) plant and a Barilla plant arrived in the 1990s at San
Nicola di Melfi, making it one of Italy's larger industrial poles. Population 16,753 (31 May 2026).

### W31. "Venosa... was a Roman colony and the birthplace of the poet Horace in 65 BC; its unfinished abbey church, the Incompiuta, was begun in the eleventh century over a Roman site and never roofed."
**Verdict: MOSTLY CONFIRMED; one detail unverified.**
- Latin colony **291 BC**, founded by the consul Lucius Postumius Megellus with about 20,000 settlers. CONFIRMED.
- Horace born **8 December 65 BC** at Venusia. CONFIRMED.
- The **Incompiuta**: the "new church" of the Abbazia della Santissima Trinità, begun in the **11th–12th
  century** to enlarge the existing early-Christian church (itself raised over a pagan temple), built partly
  with stone robbed from the **Roman amphitheatre**, and never completed. CONFIRMED.
- **"Never roofed"**: not stated by any source I found. The sources say only that construction was never
  finished. **CANNOT VERIFY** — soften to "never finished".
- Also at Venosa: **Jewish catacombs** of the 3rd–7th centuries AD, with Christian burials alongside.
URLs: https://it.wikipedia.org/wiki/Venosa **[reference]**
**Bonus, and better than the abbey:** Horace names the mountain. *Odes* 3.4.9–16: "**Me fabulosae Volture in
Apulo / nutricis extra limina Pulliae / ludo fatigatumque somno / fronde nova puerum palumbes / texere**" — the
doves covering the exhausted child with fresh leaves on Apulian Vultur, a wonder to all who hold "celsae nidum
Aceruntiae / saltusque Bantinos et arvum / pingue tenent humilis Forenti" (Acherontia, Bantia, Forentum — all
within sight of the vineyards; Forenza is a wine commune of the denomination).
URLs: https://www.thelatinlibrary.com/horace/carm3.shtml **[reference, Latin text]**,
https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0025:book%3D3:poem%3D4 (Conington
translation) **[reference]**

### Reading 2 — the grape

### W32. "There are three Italian red grapes that everybody agrees belong in the first rank: Nebbiolo, Sangiovese, Aglianico"
**Verdict: ATTRIBUTABLE — name Ian D'Agata and the sentence becomes sourced.**
D'Agata, *Native Wine Grapes of Italy* (University of California Press, 2014): Aglianico is "generally believed
to be one of Italy's three best wine grapes" — and he argues it is "at the very least, one of the world's dozen
or so best wine grapes". So the ranking is a reported consensus with a named reporter who then dissents upward.
URLs: https://www.amazon.com/Italys-Native-Wine-Grape-Terroirs/dp/0520290755 **[reference, book]**,
https://www.unicornauctions.com/unicorn-review/aglianico **[press, quoting D'Agata]**
**Use:** "everybody agrees" is the weak form. "The standard ranking puts it third after Nebbiolo and Sangiovese;
Ian D'Agata thinks that undersells it" is the strong one.

### W33. "the name is a worn-down form of *ellenico*... or from *Apulianicum*... or from the Spanish *llano*"
**Verdict: CONFIRMED as the three live hypotheses, with named sources — and one date the old text lacks.**
- *vitis hellenica* / *ellenico* — Jancis Robinson (1986), via English Wikipedia.
- *Apulianicum*, the Roman name for the southern land — Robinson (1986).
- Spanish *llano*, "plain", with the Latin suffix *-anicus*, from the Aragonese period; Italian Wikipedia adds
  that Spanish phonetics turned the doubled *l* into "gli", so *Elleanico* → *Aglianico*.
- A fourth: from **Elea**, the Greek colony — *Eleanico* (Italian Wikipedia).
- **The name first appears in print in 1520, as the feminine plural *Aglianiche*** (D'Agata, 2014). That is the
  hardest fact in the paragraph and the old text does not have it.
URLs: https://en.wikipedia.org/wiki/Aglianico **[reference, English]**, https://it.wikipedia.org/wiki/Aglianico
**[reference, Italian]**
**Note the disagreement between editions:** English Wikipedia attributes the derivations to Robinson and
D'Agata; Italian Wikipedia gives the Elea theory and asserts flatly that the grape is "probably originating in
Greece" and was "introduced to Italy around the 7th–6th century BC". They do not agree.

### W34. "DNA work has found little relationship between Aglianico and the Greek varieties it would be related to if the story held."
**Verdict: DISPUTED — this is presented as settled and is not. The most recent large study concludes the opposite.**
- **Against Greek origin:** English Wikipedia states "modern DNA analysis of Aglianico does not support this
  view, revealing little relation to other Greek grape varieties", citing D'Agata (2014) and Clarke & Rand
  (2001), and adds that Aglianico's parentage "remains unknown", which suggests an endemic origin.
- **For a Greek link:** **De Lorenzis, Mercati, Bergamini et al. (2019), "SNP genotyping elucidates the genetic
  diversity of Magna Graecia grapevine germplasm and its historical origin and dissemination", *BMC Plant
  Biology*** — finds "a robust link between South Italian and Greek genotypes", groups Italian and Greek samples
  in the same clusters "in agreement with the historical events joining these two areas", and describes
  Aglianico as "strongly related with the establishment of Greek colonies in Campania", with imported varieties
  subsequently crossed with local vines.
- **On the biotypes:** an SSR study of **41 Aglianico accessions across the three biotypes (Taurasi, Taburno,
  Vulture), using 21 + 22 microsatellite markers**, confirmed their **monophyletic origin** and found a
  **second-degree relationship between Aglianico and Syrah** (*Molecular Biotechnology*, 2012,
  doi:10.1007/s12033-012-9605-9).
URLs: https://pmc.ncbi.nlm.nih.gov/articles/PMC6322315/ **[academic]**,
https://link.springer.com/article/10.1007/s12033-012-9605-9 **[academic, paywalled — abstract via search]**,
https://en.wikipedia.org/wiki/Aglianico **[reference]**
**Recommendation:** rewrite the sentence as a live argument, not a verdict. The honest form is: the philology is
undecided, the vine's parents are unknown, and the genetics has swung back towards a Greek connection in the
last decade without proving the etymology. **Do not assert that DNA has refuted the Greek story.**

### W35. Is Aglianico del Vulture a different variety from the Aglianico of Taurasi?
**Verdict: RESOLVED, by decree, in 2018 — and this is the best small fact in the whole research pass.**
For decades the Registro Nazionale delle Varietà di Vite carried **two entries**: **Aglianico N. (code 002)** and
**Aglianico del Vulture N. (code 266)**, the latter registered in 1971. The *disciplinare* still names both,
which is why the rules read "Aglianico del Vulture N. e/o Aglianico N.".
Then **DM 30 May 2018**, *Gazzetta Ufficiale* n. 133 of 11 June 2018, recorded the reciprocal synonymy:
"266 – Aglianico del Vulture N., sinonimo 002 Aglianico N." and "002 – Aglianico N., sinonimo 266 Aglianico del
Vulture N."
So they are officially the same variety, with three recognised **biotypes** (Taurasi, Taburno, Vulture) whose
common descent the SSR work confirms (W34).
URLs: https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticoloDefault/originario?atto.dataPubblicazioneGazzetta=2018-06-11&atto.codiceRedazionale=18A03976&atto.tipoProvvedimento=DECRETO
**[official]**, http://catalogoviti.politicheagricole.it/scheda.php?codice=266 **[official, unreachable this
session]**, https://www.quattrocalici.it/vitigni/aglianico-del-vulture/ **[reference]**
**Use:** a grape that spent forty-seven years registered twice under two names, until a ministerial decree in
2018 declared the two names the same vine.

### W36. "it appears in Basilicata and in Campania, where it makes Taurasi, and nowhere much else"
**Verdict: CORRECTED — it is planted more widely than that, in Italy and abroad.**
Italy total: **9,579 ha** (italianwinecentral), of which **Campania 79%** and **Basilicata 12%**; other Italian
sources give about 7,500 ha rising towards 10,000. Also grown in **Puglia and Molise**, and outside Italy in
**Australia (Murray Darling, Mudgee, Riverland, McLaren Vale), California (Sierra Foothills), Arizona, and
Ontario**.
URLs: https://italianwinecentral.com/aglianico/ **[reference]**, https://en.wikipedia.org/wiki/Aglianico
**[reference]**
**Flag:** the national hectare figure is not firm — treat 9,000–10,000 ha as the honest range and attach the
source.

### W37. "Its other great appellation is Taurasi DOCG in Campania; Aglianico del Taburno became a DOCG in 2011."
**Verdict: CONFIRMED; add Taurasi's dates.**
**Taurasi**: DOC **1970**, DOCG **1993**; minimum 85% Aglianico; Rosso 3 years with 1 in barrel, Riserva 4 years
with 18 months in barrel; 472 ha (2021), five-year average 6,370 hl.
**Aglianico del Taburno**: DOC **1986**, DOCG **2011**; minimum 85% Aglianico; Rosso 2 years, Riserva 3 years;
127 ha (2021), 2,250 hl.
Note the contrast worth drawing: Taurasi and Taburno permit 15% of other red grapes; **Aglianico del Vulture
requires 100%**.
URLs: https://italianwinecentral.com/denomination/taurasi-docg/ **[reference]**,
https://italianwinecentral.com/denomination/aglianico-del-taburno-docg/ **[reference]**

### W38. "The grape buds early and ripens very late, wants sun and dry weather, and keeps high acidity even in the south."
**Verdict: CONFIRMED.**
Early budbreak and a tendency to ripen late, "as late as November in some parts of southern Italy" (Robinson,
2006, via English Wikipedia). Quattrocalici: a long vegetative cycle; good vigour needing short pruning; small
berries with thick waxy skins "exceptionally rich in anthocyanins and condensed tannins"; high sugar
accumulation alongside "excellent acidity"; drought-resistant but vulnerable to prolonged humidity; altitude and
constant ventilation reduce fungal pressure. Typical yields 50–60 q/ha against a legal ceiling of 80.
URLs: https://www.quattrocalici.it/vitigni/aglianico-del-vulture/ **[reference]**,
https://en.wikipedia.org/wiki/Aglianico **[reference]**

### W39. The tasting table ("13.5–14.5%", "drink from six years, the best keep twenty")
**Verdict: TRACEABLE, and worth knowing where it came from.**
13.5% is the DOCG legal minimum (W19), so the range is plausible rather than measured. "Six to twenty years" is
not an independent observation: English Wikipedia carries "potential to improve in the bottle for 6 to 20 years"
sourced to **Sotheby's**, which is almost certainly the ultimate origin of the old text's line. Treat as a
merchant's estimate, not a fact.
URL: https://en.wikipedia.org/wiki/Aglianico_del_Vulture **[reference, citing Sotheby's]**

### W40. "The same grape run off its skins after a few hours makes a deep pink rosato... There is a sparkling version"
**Verdict: HALF WRONG. The spumante is a DOC category; the rosato is not.**
See W22. The sparkling wine is inside the DOC (traditional method, brut or extra dry, ≥9 months). A rosato of
Aglianico is made in the Vulture but is sold as **Basilicata IGT**, outside the denomination the reading is
describing. As written, the sentence tells the reader that a DOC wine exists which does not.
**Fix:** either move the rosato outside the appellation explicitly ("outside the DOC, as Basilicata IGT") or cut
it.

### W41. "the plain Aglianico del Vulture DOC, released a year after harvest and drunk at three or four, is the bottle that actually appears on tables in Potenza and Matera"
**Verdict: the release rule is PARTLY RIGHT (see W17); the sociology is UNSUPPORTED.**
No source establishes what is drunk domestically in Potenza and Matera. Note also that **Matera is not in the
Vulture** — it is 100 km away at the other end of the region, in the other province, and has its own DOC.

### W42. "Lucanica, the sausage the Romans named after this region" / "Caciocavallo podolico... aged for years"
**Verdict: out of scope for this pass (they belong to readings 3–4), but flagged: the Lucanica attribution to
Cicero and Martial and the "ancestor of luganega, loukaniko, longaniza, linguiça" chain in reading 3's facts box
were not checked here and should be in the food pass.**

---

### Producers and the modern history (both readings)

### W43. "Only a handful of houses bottled seriously, above all D'Angelo and Paternoster, both in Rionero"
**Verdict: WRONG ON LOCATION; defensible on substance.**
**Paternoster is at Barile**, not Rionero — Contrada Valle del Titolo, Barile (PZ). The founder, **Anselmo
Paternoster**, is described by the firm as a "vignaiolo di Barile". This matters because Barile is the town of
the 131 rock cellars the previous reading describes; putting the house in the wrong town throws away the link.
**D'Angelo** is at Rionero in Vulture (Casa Vinicola D'Angelo di Rocco D'Angelo e Figli, Via Padre Pio 8).
- **Paternoster, 1925:** Anselmo Paternoster "imbottiglia le prime bottiglie di Aglianico per la vendita".
  Second generation **Giuseppe "Pino" Paternoster** from 1945/the 1950s, trained at the Conegliano oenology
  school, called "il primo enologo del territorio", and instrumental in obtaining the **1971 DOC**. The **Don
  Anselmo** cru launched in 2000. **Tommasi Family Estates acquired the winery in 2016**; fourth-generation
  oenologist **Fabio Mecca**. Centenary celebrated in **2025** with 2,500 bottles of a Barone Rotondo Superiore
  DOCG, aged in a 17th-century ice-house cut into the volcanic rock.
- **D'Angelo:** wines exhibited at the **IV Fiera Commerciale di Bari in 1924**; the firm formalised in the
  1930s; from 1924 to 1950 it dealt chiefly in **bulk wine and grapes**; **own bottled production from 1950**;
  Rocco D'Angelo senior promoted the 1971 DOC; **first exports to the USA and Germany with the 1976 vintage**;
  Lucio D'Angelo from the 1980s; today the fourth generation, Rocco and Erminia.
URLs: https://paternosterwine.it/storia/ **[producer]**, https://de-gustare.it/paternoster-compie-100-anni-un-secolo-di-aglianico/
**[press]**, https://www.dangelowine.com/dangelo-aglianico-storia/ **[producer]**,
https://www.dangelowine.com/cantina-aglianico-del-vulture-dangelo/ **[producer]**
**On "above all these two":** defensible — both are named in every account of the appellation's 20th century,
and both are credited with the 1971 DOC. But the *Vulture generation* group and the trade press also name
Martino, Sasso and Carbone among older houses, and the phrase "only a handful" should not become "only two".

### W44. "The wine was sold in bulk northward or drunk locally."
**Verdict: CONFIRMED, and it can be made concrete.**
In the **first half of the twentieth century the majority of production left for Piedmont**, carried in barrels
of **4–5 quintals on carts** to the railway station; with the later cooperatives, distribution extended to
Tuscany and the Veneto. In the **nineteenth century** Aglianico del Vulture was bought by **Neapolitan
merchants to strengthen and correct the wines of the Naples province**. D'Angelo's own history confirms the
pattern from the other end: bulk wine and grapes from 1924 to 1950.
URLs: https://www.aislombardia.it/viniplus/territori-lombardi/l-aglianico-del-vulture-tra-storia-e-re-generation.htm
**[press, AIS Lombardia]**, https://www.dangelowine.com/dangelo-aglianico-storia/ **[producer]**
**Use:** the cart, the 4–5 quintal barrel and the railway station are the image. Note the wine went **north to
Piedmont** — to the same region whose most famous wine it is now compared to.

### W45. "Since the 1990s a second wave has arrived, along with money from outside"
**Verdict: CONFIRMED, with names and dates.**
- **Basilisco** founded **1992**; acquired by **Feudi di San Gregorio** (Irpinia, founded 1986) at the
  beginning of **2011**.
- **Terre degli Svevi / Re Manfredi** founded **1998** at Pian di Camera, Venosa, by **Gruppo Italiano Vini**,
  Italy's largest wine group — about 100–110 ha.
- **Cantine del Notaio** founded **1998** by Gerardo Giuratrabocchetti.
- **Elena Fucci**, first vintage **2000**, a single wine (**Titolo**) from six hectares at Contrada Solagna del
  Titolo bought by her grandfather in the **1960s**, with some of the oldest vines on the mountain (70+ years).
  The estate exists because the family was about to sell the land and the teenage Elena changed her mind and
  enrolled in oenology.
- **Madonna delle Grazie** founded **2003**.
- **Grifalco** founded **2004** by Cecilia and Fabrizio Piccin, who came to Basilicata after more than a decade
  running Salcheto at Montepulciano; now run by their sons Lorenzo and Andrea.
- **Paternoster** to **Tommasi** (Veneto) in **2016**.
- The "Vulture generation" grouping: Elena Fucci, Basilisco, Martino, Carbone, Grifalco, Musto Carmelitano,
  Madonna delle Grazie, Bisceglia.
URLs: https://www.lucianopignataro.it/a/vini-terre-degli-svevi-a-venosa/188386/ **[press]**,
https://www.gruppoitalianovini.it/it/brand/re-manfredi/cantina **[producer]**,
https://www.cantinedelnotaio.it/en/ **[producer]**,
https://v1.vinous.com/articles/elena-fucci-aglianico-del-vulture-titolo-2000-2014 **[press, Vinous]**,
https://wineblogroll.com/2019/06/grifalco-cantina-aglianico-vulture-piccin/ **[press]**,
https://www.doctorwine.it/en/tastings/tasting-notes/vulture-generation **[press]**
**Note the direction of travel:** the money came from **Irpinia, Verona and Montepulciano** — Italian wine
regions — rather than from finance. That is a more interesting sentence than "money from outside".

### W46. "the wine now costs a fraction of what a Piedmontese equivalent does"
**Verdict: PLAUSIBLE but only merchant-sourced. Handle with care.**
Merchant and guide figures: Aglianico del Vulture DOC **€8–15** a bottle, Superiore DOCG **around €30**; Gambero
Rosso publishes an annual list of the best Aglianico del Vulture **under €20** and has given a quality-price
award to one **under €10**. A standard Barolo is put at **€50–55**, rising well past €150 for good vintages and
growers. Vinous (Eric Guido, May 2024) calls the region "Italy's top underdog" offering "tremendous value", with
some bottlings rising in price but many still underpriced for their quality.
URLs: https://www.oliobarilese.it/vino-rosso-del-vulture/ **[merchant]**,
https://www.gamberorosso.it/vino/migliori-aglianico-del-vulture-sotto-20-euro/ **[press — 403 this session,
title only]**, https://www.italysfinestwines.it/migliori-barolo/ **[merchant/guide]**,
https://v1.vinous.com/articles/getting-in-on-the-ground-floor-aglianico-del-vulture-may-2024 **[press]**
**Recommendation:** no institutional price series (ISMEA, Valoritalia) was reachable. Either attribute the
comparison to Vinous, or express it as price bands with the sources named. Do not state a ratio.

### W47. "for most of the twentieth century the young left"
**Verdict: CONFIRMED, with figures.**
About **217,000 people emigrated from Basilicata between 1951 and 1974**. In the first post-war decade nearly
**16% of the resident population** left, a share exceeded only by Calabria; across the post-war period the region
lost close to **250,000 inhabitants**. Census population: **644,000 (1951) → 602,000 (1961) → 609,000 (1971)**,
against 522,952 in 2026. Between 2011 and 2019 the region shrank by a further 24,782 people.
URLs: https://www.asei.eu/it/2008/11/lemigrazione-lucana-in-etontemporanea/ **[academic/association]**,
https://it.wikipedia.org/wiki/Basilicata **[reference]**,
https://www.istat.it/wp-content/uploads/2024/05/17Basilicata_Focus2022_Testo_def.pdf **[official]**

### W48. Phylloxera in the Vulture — the claim the old text does not make, and the trap next to it
**Verdict: PARTLY SOURCED, and it needs the Campania correction applied.**
AIS Lombardia states that because of the area's "sostanziale isolamento" **phylloxera arrived in the Vulture
much later** than elsewhere, and links this to its volcanic sands. That is the only source I found; **no date
for phylloxera's arrival in the Vulture is established anywhere I could reach** — CANNOT VERIFY.
**The mechanism, stated correctly:** it is **sand and loose, incoherent substrate** that defeats phylloxera —
the insect cannot move through a humus-free, non-cohesive soil — not "volcanic soil" as a category. Lava soils
qualify because they are coarse and incoherent, not because they are volcanic. This is exactly the correction
the Campania pass made, and it applies here unchanged.
URLs: https://www.aislombardia.it/viniplus/territori-lombardi/l-aglianico-del-vulture-tra-storia-e-re-generation.htm
**[press]**, https://www.rivistadiagraria.org/articoli/anno-2017/viti-piede-franco-viti-pre-fillossera/
**[reference, agronomy journal]**, https://www.insidewine.it/la-vite-centenaria-a-piede-franco-cose-e-perche-e-rara/
**[press]**
**Warning:** I found **no documented surviving pre-phylloxera ungrafted vineyard in the Vulture**. Elena Fucci's
70-year-old vines are old, not pre-phylloxera. Do not write that the Vulture has ungrafted vines.

### W49. The 1930 earthquake (absent from the old text)
**Verdict: CONFIRMED — and it is the Vulture's own disaster, not Irpinia's.**
**23 July 1930, 01:08**, magnitude **6.7**, X on the Mercalli scale, epicentre between Lacedonia and Bisaccia.
**1,404 dead**, 4,264 injured: Avellino province 1,052, **Potenza province 214**, Foggia 108. By town: **Melfi
145 dead**, with 415 houses collapsed (21% of the built fabric) and 1,465 damaged (73%); **Rionero in Vulture 24
dead**, 43 injured, 150 houses down and 2,800 damaged (5% and 93%); **Barile 10 dead**, 44 injured, 75 houses
down (8%); Rapolla about 20 dead. Damage was aggravated by poor building materials and by clayey, sandy ground.
It is known in Italian as *il terremoto del Vulture*.
URLs: https://it.wikipedia.org/wiki/Terremoto_dell'Irpinia_e_del_Vulture_del_1930 **[reference]**,
https://servizio-nazionale.protezionecivile.gov.it/it/pagina-base/il-terremoto-dellirpinia-e-del-vulture/
**[official]**, https://www.researchgate.net/publication/235672528 (Effetti del terremoto irpino del 1930: cause
geologiche del danno nell'area del Vulture) **[academic]**
**Also:** Melfi was devastated by an earthquake on **14 August 1851**; the **Irpinia earthquake of 23 November
1980** (19:34, M 6.9, ~3,000 dead) had its affected area bounded on the east by Melfi and Potenza, and Rapolla,
Barile, Rionero, Atella and Melfi were among the damaged towns.
**No source found linking any of these earthquakes to the vineyards or the cellars** — CANNOT VERIFY, do not
assert it.

### W50. Pasolini at Barile (absent from the old text)
**Verdict: CONFIRMED.**
**Pier Paolo Pasolini filmed four scenes of *Il Vangelo secondo Matteo* (1964) in the tuff cellars of the Sheshë
at Barile**, which stood in for Bethlehem: the Nativity (the infant Jesus played by a local girl), the Adoration
of the Magi (Balthazar played by a local man), the Massacre of the Innocents (with more than thirty local
mothers) and the Flight into Egypt. More than 100 extras were recruited from the town — chosen, as was his
habit, in the street, in the bars and in the cellars. Shooting ran from April to July 1964.
URLs: http://www.comune.barile.pz.it/le_cantine_dello_sheshe.php **[official, municipal]**,
https://www.italyformovies.it/news/detail/2279/sessantanni-del-vangelo-secondo-matteo-tutti-i-luoghi-del-film
**[official, film commission]**, https://www.regione.basilicata.it/giunta/site/giunta/detail.jsp?sec=100133&otype=1023&id=2998011
**[official]**

### W51. The 1906 Milan exposition and the 19th-century reputation (absent from the old text)
**Verdict: CONFIRMED, though from a single trade source.**
At the **1906 Universal Exposition in Milan**, **ten wine samples from the Vulture** were shown and praised as
"wines of body, fragrant, fine". Aglianico was cited among the best vines of Europe in **Viala and Vermorel's
*Ampélographie* (1910)**. Angevin records: in **1280 Charles I of Anjou ordered 400 *salme* of "vino rubeo
Melfie"**. By the fifteenth century vineyards covered the slopes of the mountain between Melfi, Rapolla and
Barile.
URLs: https://www.assovini.it/italia/basilicata/item/122-aglianico-del-vulture-doc **[reference]**,
https://it.wikipedia.org/wiki/Aglianico_del_Vulture **[reference]**,
https://www.aislombardia.it/viniplus/territori-lombardi/l-aglianico-del-vulture-tra-storia-e-re-generation.htm
**[press]**
**Note:** the 1280 order and the 1906 exposition are each carried by one source; corroborate before making
either load-bearing.

### W52. "The comparison to Barolo is a marketing phrase"
**Verdict: UNVERIFIABLE as to origin — and the old text's hedge is the right instinct.**
"Barolo del Sud" is everywhere in Italian and English wine writing, applied both to Aglianico del Vulture and to
Taurasi. **I could not establish who coined it or when**; no attribution to Veronelli, Soldati, Mastroberardino
or any critic could be sourced. Treat as an unattributable commonplace — which is what the old text effectively
does.
URLs: https://www.rosadivini.com/magazine/vino-aglianico-del-vulture-basilicata/ **[press]**,
https://www.bereilvino.it/2017/10/aglianico-del-vulture-tavola-barolo-del-sud/ **[press]**

---

## Section 2 — Candidate openings

The rule: open on something happening to someone somewhere. Never a thesis, a definition, a reputation, or the
name of the grape.

**O1. Barile, spring 1964: Pasolini films the Nativity in a wine cellar.**
Pasolini brought his crew to Barile in April 1964 and shot the birth of Christ inside one of the tuff caves of
the Sheshë, casting a local girl as the infant and more than a hundred townspeople he picked out in the street,
in the bars and in the cellars themselves. The caves were not a set. They were, and are, where the town keeps
its wine.
*Source:* the commune of Barile; Italy for Movies (film commission); Regione Basilicata **[official]**.
*Opens onto:* why a town on a volcano stores its wine underground — the 131 cellars, the tuff soft enough to
dig, the constant temperature — and from there to who dug them and why they came.

**O2. 23 July 1930, 01:08.**
At eight minutes past one in the morning the ground moved under the Vulture. By daylight 145 people were dead in
Melfi, 24 in Rionero, 10 in Barile; in Rionero 150 houses had come down and 2,800 were cracked — 93% of the
town. Italians still call it *il terremoto del Vulture*, the Vulture earthquake, after a mountain that had not
erupted in 130,000 years.
*Source:* it.wikipedia (INGV-derived macroseismic data); Protezione Civile **[official]**.
*Opens onto:* the distinction between an extinct volcano and a quiet landscape — the mountain is finished, the
fault under it is not — and then into what the extinct volcano left behind: the soil.
*Caution:* no source links the 1930 quake to vineyard damage; do not imply it.

**O3. 1925: Anselmo Paternoster sells his first bottles.**
Anselmo Paternoster, a grower in Barile, bottled Aglianico under his own name for sale in 1925. Almost nobody
else did. For another twenty-five years the wine of the Vulture went north in barrels of four or five quintals,
loaded onto carts and taken to the railway station for Piedmont, where it was sold to make other people's wine
taste better.
*Source:* paternosterwine.it **[producer]**; AIS Lombardia **[press]**; D'Angelo's own history **[producer]**.
*Opens onto:* the whole economic history in one image — a great wine sold as an ingredient — and the irony that
its destination was the region whose wine it is now compared to.

**O4. The Bari trade fair, 1924.**
The D'Angelo family showed their wine at the fourth Bari commercial fair in 1924 and then spent the next
twenty-six years selling wine and grapes in bulk, because that is what there was a market for. They began
bottling under their own label in 1950. The first shipment to America left with the 1976 vintage.
*Source:* dangelowine.com **[producer]**.
*Opens onto:* how slowly the appellation arrived — 1971 for the DOC, 2010 for the DOCG — and why.

**O5. Venosa, some time before 40 BC: a poet remembers falling asleep on the mountain.**
Horace, born at Venusia on 8 December 65 BC, put the mountain in an ode: *me fabulosae Volture in Apulo …
fronde nova puerum palumbes texere* — on Apulian Vultur the doves covered the exhausted child with fresh
leaves, a wonder to everyone in Acherontia, Bantia and Forentum. Forenza, one of the fifteen communes entitled
to make the wine, is the same town.
*Source:* Latin Library (Latin text), Perseus (Conington translation) **[reference]**.
*Opens onto:* the mountain as a named place in literature two thousand years before it was a denomination — and
the fact that Horace, who wrote constantly about wine, wrote about Falernian and Caecuban, not about home.

**O6. 1477: refugees dig into the hill.**
The first Albanians reached Barile about 1477, after Scutari fell, and more came in 1534 from Corone, and again
in 1597, 1664 and 1675. They dug shelters into the soft volcanic tuff of the slope and called the place the
Sheshë, the square. The shelters became cellars. Five centuries later there are 131 of them, the town still
speaks Arbëresh, and the wine still goes underground.
*Source:* it.wikipedia Barile; comune di Barile; Parco Urbano delle Cantine (Italia.it) **[official]**.
*Opens onto:* three of the fifteen wine communes are Albanian foundations; Italy's law on linguistic minorities;
and the constant-temperature cellar as a technology nobody had to invent.

**O7. 2000: a girl declines to sell the vineyard.**
Elena Fucci was about to leave for university when her family decided to sell the six hectares her grandfather
had bought in the 1960s under the volcano at Contrada Solagna del Titolo, where some of the oldest vines on the
mountain still stand. Buyers came to look at it. She changed her mind, enrolled in oenology instead, and made
the first vintage of a single wine in 2000.
*Source:* Vinous (Elena Fucci: Titolo 2000–2014) **[press]**; importer profiles **[merchant]**.
*Opens onto:* the second wave — 1992 Basilisco, 1998 Re Manfredi and Cantine del Notaio, 2003 Madonna delle
Grazie, 2004 Grifalco — and the fact that the money came from Irpinia, Verona and Montepulciano.
*Note:* the "about to sell" story comes from importer and press profiles rather than from Fucci directly;
attribute it or soften it.

**O8. 30 May 2018: a decree settles an argument about identity.**
For forty-seven years the Italian register of vine varieties carried two entries — number 002, Aglianico, and
number 266, Aglianico del Vulture — as though the vine on the volcano were a different plant from the vine in
Campania. On 30 May 2018 a ministerial decree recorded that each was a synonym of the other. Growers on the
Vulture had been arguing for the distinction for a century; the genetics had already said the three Aglianicos
descend from one.
*Source:* Gazzetta Ufficiale n. 133, 11 June 2018 **[official]**; SSR study of 41 accessions
(doi:10.1007/s12033-012-9605-9) **[academic]**.
*Opens onto:* biotype versus variety, what the volcano actually changes, and the etymology dispute.

**O9. 1 September 1231: the emperor makes law at Melfi.**
Frederick II promulgated the Constitutions of Melfi in the castle on 1 September 1231, a code drafted with Pier
della Vigna and Michael Scot that historians still call the first modern body of law in Europe. Melfi today
makes cars — a Stellantis plant arrived in the 1990s — and is one of the fifteen towns entitled to put Aglianico
del Vulture on a label.
*Source:* it.wikipedia Costituzioni di Melfi; it.wikipedia Melfi **[reference]**.
*Opens onto:* the Vulture as a place that was central and then was not — five papal councils between 1059 and
1137, a Norman capital, then four hundred years of nothing much.

**O10. October, in a year of your choosing, when everyone else has finished.**
The Italian harvest is over by the end of September in most of the country; in 2026 it was the earliest on
record, ten to fifteen days ahead of average and three weeks in places. On the Vulture they wait. Aglianico is
not picked before the second half of October, and often not before November, because phenolic ripeness arrives
that late at 500 metres.
*Source:* Assoenologi/UIV/Ismea 2025 vintage report via MateraNews; Agronotizie on the 2026 harvest;
Quattrocalici **[press/reference]**.
*Opens onto:* altitude, the long cycle, and the chemistry of a grape that keeps its acid.
*Caution:* the contrast is real but "later than almost anywhere else" has no ranking behind it.

**O11. 1998, at Pian di Camera outside Venosa.**
Gruppo Italiano Vini, the largest wine company in Italy, bought land at Pian di Camera outside Venosa in 1998
and called the estate Terre degli Svevi, after the Swabians. A hundred hectares. In the same year a man named
Gerardo Giuratrabocchetti founded Cantine del Notaio at Rionero. It was the first time in the century that money
had arrived on the Vulture rather than leaving it.
*Source:* Gruppo Italiano Vini **[producer]**; Luciano Pignataro **[press]**; Cantine del Notaio **[producer]**.
*Opens onto:* 217,000 people who left between 1951 and 1974, and what it means for a place to start receiving.

**O12. 1906, at the Milan Universal Exposition.**
Ten wines from the Vulture were shown at the Milan exposition of 1906 and were described as wines of body,
fragrant and fine. Four years later Aglianico was listed among the best vines of Europe in Viala and Vermorel's
*Ampélographie*. Then nothing happened for sixty-five years.
*Source:* Assovini; AIS Lombardia **[press]**.
*Opens onto:* the gap between reputation and market, and the 1971 DOC.
*Caution:* single-source; corroborate before using as the opening.

---

## Section 3 — Unguarded claims

Statements in readings 1–2 that are plausible and widely repeated but for which I could find no primary or
institutional source. Each needs attributing, hedging or cutting.

1. **"full of potassium"** (W8). No soil analysis of Vulture vineyards found. Generic volcanic-soil lore.
2. **"it holds the heat of the day into the night"** (W9). Unsourced, and contradicts the diurnal-range argument
   in the next paragraph.
3. **"the difference between day and night temperature is wide"** (W26). No measured figures for the Vulture.
4. **"later than almost anywhere else in the country"** (W25). True in spirit; no ranking of Italian harvest
   dates by variety or denomination was found, and the national trend is earlier every decade.
5. **"a cone of basalt"** (W1). The magmas are melilititic-carbonatitic, not basaltic in the ordinary sense.
6. **"the mineral water... is sold across Italy"** (W7). True but vague; the real figures are far better.
7. **"Basilicata is hard to reach... so no tourists passed through"** — the causal chain (no coast → no tourists
   → no reputation) is a reasonable inference but is nowhere argued by a source.
8. **"It had no wealthy merchant class to promote it"** — no source. Note that the 19th-century trade was driven
   precisely by *Neapolitan* merchants buying Vulture wine, which complicates the claim.
9. **"the wine now costs a fraction of what a Piedmontese equivalent does"** (W46). Merchant sources only; no
   ISMEA or Valoritalia price series was reachable.
10. **"The comparison to Barolo is a marketing phrase"** (W52). Origin of "Barolo del Sud" unattributable.
11. **"something mineral and smoky that growers put down to the volcano"** — the attribution to growers is
    generic; "minerality" has no chemical referent. Keep it as reported speech or cut.
12. **"The Superiore rules exist to stop the wine reaching the market before it is drinkable"** — an
    interpretation of legislative intent with no source. Defensible as the writer's reading if marked as such.
13. **"the bottle that actually appears on tables in Potenza and Matera"** (W41). No source for domestic
    consumption patterns; and Matera is not in the Vulture.
14. **"it appears in Basilicata and in Campania... and nowhere much else"** (W36). Contradicted.
15. **"drink from six years, the best keep twenty"** (W39). Traces to Sotheby's via English Wikipedia.
16. **"never roofed"** (the Incompiuta, W31). Sources say only "never finished".
17. **"It is the same instinct that produced the cave city at the other end of the region"** — rhetorical link
    between Barile's cellars and the Sassi di Matera; no source connects them, and they are 100 km and a
    different geology apart (Matera is calcarenite, Barile is volcanic tuff). Keep only as an explicit simile.
18. **The date phylloxera reached the Vulture** (W48). Not established anywhere reachable.
19. **Any link between the 1930 or 1980 earthquakes and the vineyards** (W49). Not established.

---

## Section 4 — Things the old text misses that the writer should know

**4.1 The lakes are the last eruption.** The single best structural fact available: the Monticchio lakes are not
scenery near the vineyards, they are the craters of the volcano's final act, 132 ± 12 ka and 141 ± 11 ka. The
old reading mentions the lakes and the last eruption in the same paragraph without connecting them.

**4.2 And the crater has been taking notes ever since.** A hundred metres of sediment in Lago Grande, 133,000
years, more than 340 ash layers from volcanoes up to 540 km away — the reference archive against which Italian
eruptions are dated. The lake beside the vineyard is how science knows when Vesuvius and the Campi Flegrei went
off.

**4.3 The volcano still breathes.** Extinct by the 10,000-year rule, but outgassing mantle CO₂, with magma
storage identified at 12–14 km and at the crust–mantle boundary 32 km down (Caracausi et al. 2015; Carnevale et
al. 2024). "Dead" is the legal word and "finished" is the wrong one.

**4.4 The clock starts on 1 November.** The DOCG's three years run from 1 November of the harvest year, of
which twelve months in wood and twelve in bottle; the Riserva's five years require twenty-four months in wood.
So a Superiore reaches the shelf in its fourth calendar year and a Riserva in its sixth. This is the mechanism
by which the appellation forces patience on a wine that needs it, and it is more concrete than "three years of
ageing".

**4.5 Seventy named vineyards.** The DOCG carries 70 *menzioni geografiche aggiuntive* — a cru map in the rule
book, from Accovatura to Vizzarro, including Il Titolo, Piano del Cerro, Macarico and Notarchirico. For a
denomination with no fame, that is an unusual degree of self-knowledge, and it is the same instinct that made
Barolo's *menzioni* famous.

**4.6 Notarchirico.** One of those 70 vineyard names is also a Lower Palaeolithic site at Venosa, whose
Acheulean layers are dated using tephra from Vulture itself. The volcano that makes the soil also supplies the
stratigraphic clock for the oldest human settlement in the region.

**4.7 What volcanic soil does and does not do.** Apply the Campania correction. Phylloxera is stopped by
**sand and loose, incoherent substrate** — the insect cannot travel through humus-free, non-cohesive ground —
not by "volcanic soil" as a category. Lava and pyroclastic soils qualify because they are coarse and
incoherent. What volcanic soils reliably do: drain fast (porosity), stay low in fertility so the vine roots
deep and stays unvigorous, and carry a mineral inventory rich in potassium, phosphorus and magnesium as a
general class — but nobody has published the Vulture's numbers.

**4.8 Where the tannin comes from.** Aglianico's berries are small with thick, waxy skins "exceptionally rich in
anthocyanins and condensed tannins"; the vine accumulates high sugar while retaining high acidity, and the
harvest waits for **phenolic** ripeness, which arrives weeks after sugar ripeness. That gap — sugar ready in
September, tannin ready in November — is the whole explanation of both the late harvest and the wine's
architecture, and the old text asserts the outcome without the mechanism. (Source: quattrocalici, the Assoenologi
material and the Oxford Companion via Wikipedia; note that no peer-reviewed phenolic analysis of Aglianico
specific enough to quote numbers was reachable this session.)

**4.9 The grape had two official identities until 2018.** See W35. A genuinely surprising bureaucratic fact that
does real work: it tells the reader that the question "is the Vulture's Aglianico its own grape?" was a live
administrative question within living memory, and that the answer is no — three biotypes, one variety, one
descent.

**4.10 Syrah is a second-degree relative.** The SSR work on the three biotypes turned up a second-degree
relationship between Aglianico and Syrah of the Rhône. Use carefully — second-degree means grandparent,
half-sibling or similar, not "related to" in the loose sense — but it is a real published finding and it cuts
against the grape's image as an isolate.

**4.11 The wine went to Piedmont.** The Vulture's wine spent the first half of the twentieth century being
carted to the railway station in 4–5 quintal barrels and sent north to Piedmont to improve other wines — and the
comparison the region now trades on is to Barolo. The old text has the bulk trade but not the destination, and
the destination is the point.

**4.12 Three of the fifteen wine communes are Albanian.** Barile, Ginestra and Maschito are Arbëreshë
foundations protected under Law 482/1999 and Basilicata's Regional Law 40/1998; Barile still speaks the
language, Rionero has lost it. The cellars, the language and the appellation are the same map.

**4.13 The first thing the town does with the volcano is dig into it.** The tuff at Barile is soft enough to
excavate by hand and holds cellar temperature without help — which is why 131 cellars exist, why the Albanians
sheltered there first and stored wine there second, and why Pasolini found a ready-made Bethlehem. The material
explanation and the human one are the same explanation.

**4.14 Melfi makes cars.** The Fiat/Stellantis plant at San Nicola di Melfi, with Barilla alongside, arrived in
the 1990s and made this one of southern Italy's larger industrial poles. A reading that presents the Vulture
purely as forgotten countryside is a decade or three out of date.

**4.15 The water is a bigger business than the wine.** Two million bottles a day at Melfi; fourth in Italy for
sparkling mineral water; a regional figure of a billion litres. The same volcano supplies both, and the water
pays better. That is a fact about what a poor region does with a geological asset.

**4.16 It was Basilicata's only DOC for thirty-two years.** 1971 to 2003. One appellation for a whole region for
a generation — which is a truer way to say "overlooked" than any adjective.
