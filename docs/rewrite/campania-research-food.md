# Campania readings 3 and 4 — research and fact-check

Research pass for the rewrite of `content/campania.js` lesson 3 ("Pizza, mozzarella and the Neapolitan
table") and lesson 4 ("Vesuvius, Pompeii and the Amalfi coast"). Verdicts are CONFIRMED / CORRECTED /
DISPUTED / UNVERIFIABLE. Every finding carries a URL and, where it matters, the source's own words.

Labels used: [producer] = a firm selling the thing; [promotional] = a consortium, trade body or tourist
board; [trade press] = the restaurant/food trade papers; [calculated] = arithmetic done here, not quoted
from a source.

**Note on method and on one hard limit.** The pizza and the mozzarella/table passes were able to work from
primary documents: the full text of Commission Regulation (EU) No 97/2010 and the AVPN's 2022 *disciplinare*
were extracted as PDFs and quoted directly, as were the mozzarella DOP disciplinare (Provvedimento 11
febbraio 2008) and the DPCM of 10 May 1993. **The session's WebSearch budget (200 calls) was exhausted
during this pass**, so a handful of small confirmations named in section E could not be closed and were
left explicitly unverified rather than guessed. Two scholarly items were paywalled or 403-blocked and are
flagged where used: Zachary Nowak's article on the Margherita, and Addeo et al. on buffalo dairy yield.

**Error propagation inside this repo.** Several old-text claims audited below are repeated verbatim in
other files and must be patched with the readings, not after them:
- `content/quiz.js` line 979 ("about 485 °C"), line 983 ("roughly twice the fat"), line 1001 ("around eighty" thermopolia).
- `content/recipes/campania.js` lines 18/21 (the whole AVPN-1984 + STG-2010 rule list, EN and NO), line 20
  ("marinara … the older of the two"), lines 250/253 ("eighty workshops by 1800", EN and NO).
- `content/campania.no.js` lines 103–173 carry the Norwegian of every claim in both readings.

**Overlap guard.** Readings 1 and 2 have already spent: Vesuvius still active and last erupting in March
1944, the 700,000 living in the red zone, Mastroberardino replanting ancient varieties inside the walls of
Pompeii, the Costa d'Amalfi terraces worked by hand and by mule, and phylloxera unable to move through
volcanic sand. Reading 4 must not re-spend them.

---

## A. Reading 3 — what a Neapolitan pizza is

### F1. The leavening — the old text's "at least eight hours" is the wrong rulebook
**Claim (old text):** "dough left to rise at least eight hours".
**Verdict: CORRECTED.** The STG prescribes **two stages totalling six to eight hours**, not "at least eight".
Commission Regulation (EU) No 97/2010, verbatim: first rising *"left for two hours, covered with a damp
cloth"*; then dough balls of **180–250 g**; then *"Second stage: once the dough balls have been shaped, a
second rising phase lasting four to six hours takes place inside food containers. This dough, which is kept
at room temperature, is ready to be used within the next six hours."*
https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32010R0097
**"At least eight hours" is the AVPN's own current rulebook, a different document:** *"Tempi complessivi di
fermentazione: min 8, max 24 ore"*, with dough balls of 200 g (22–24 cm pizza) to 280 g (28–35 cm).
https://www.pizzanapoletana.org/public/pdf/Disciplinare_AVPN_2022.pdf [promotional]
The honest sentence attributes each number to its own rulebook, and the divergence is itself the better
detail: **the EU text and the pizzaioli's own text no longer agree.**

### F2. The oven temperature — 485 °C is the FLOOR in the regulation, and AVPN says the opposite
**Claim (old text):** "a wood-fired dome oven at about 485 °C" (also in the hero caption, the recap, the
quiz and the recipe headnote).
**Verdict: CORRECTED, and the two rulebooks contradict each other.**
Regulation 97/2010 itemises: *"— Baking temperature on the cooking floor of the oven: approximately 485 °C
— Temperature at the oven dome: approximately 430 °C — Baking time: 60-90 seconds — Temperature reached by
the dough: 60-65 °C — Temperature reached by the tomatoes: 75-80 °C — Temperature reached by the oil: 75-85
°C — Temperature reached by the mozzarella: 65-70 °C."*
**AVPN 2022 reverses floor and dome:** *"Temperatura di cottura platea: 380-430 °C circa / Temperatura della
volta: 485 °C circa / Tempo di cottura: 60-90 secondi"*.
So the old wording matches today's AVPN **dome** figure and contradicts the EU text. Either give the floor
figure from the regulation, or say that the two rulebooks disagree about which surface is the hotter.
**The regulation specifying the temperature the mozzarella must reach — 65–70 °C — is the kind of detail
worth keeping.**

### F3. "Soft wheat flour" — the STG names no type, and the reason is a diplomatic incident
**Verdict: CORRECTED in substance, and the story behind it is usable.**
The STG specifies **no type 00 or 0**. It requires only "common wheat flour" meeting: *"W: 220-380 — P/L:
0,50-0,70 — Absorption: 55-62 — Stability: 4-12 — Value index E10: max. 60 — Falling number: 300-400 — Dry
gluten: 9,5-11 g % — Protein: 11-12,5 g %"*.
**Why:** **Germany formally objected** to the application, fearing *"that German wheat flour is put at a
disadvantage, considering that only one type of wheat flour, available in one Member State, namely Italy,
is authorised"*; an agreement notified to the Commission on **24 February 2009** under which *"the
restrictions associated with the use of certain wheat flour were lifted."* **Poland also objected**, that
the name is not specific in itself; no agreement was reached and the Commission decided. (Reg. 97/2010,
recitals 3–8.)
AVPN's own rulebook, by contrast, does require *"Farina di grano tenero tipo 00 / tipo 0"*, W **250–310**.

### F4. Yeast and salt — both more specific than the old text says
**Verdict: CORRECTED (yeast), and salt is specified where the old text implies it is not.**
The regulation names **brewer's yeast** (*lievito di birra*) specifically, **3 g** — not "yeast" generically,
and not sourdough: *"The basic raw materials distinguishing 'Pizza Napoletana' are: common wheat flour,
brewer's yeast, drinkable natural water, peeled tomatoes and/or small fresh tomatoes ('pomodorini'), sea
salt or kitchen salt and extra virgin olive oil."*
The base batch, verbatim: *"Pour a litre of water into the dough kneader, dissolve in a quantity of between
50 and 55 g of sea salt, add 10 % of the prescribed total quantity of flour, then add 3 g of brewer's
yeast… gradually add 1,8 kg of W 220-380 flour."*
**AVPN permits more:** *lievito madre* at 5–20% of the flour, dry yeast at 1:3 to fresh, fresh brewer's
yeast **0.1–3 g**, salt **40–60 g**, flour **1.600–1.800 kg** per litre of water.
**Three grams of yeast to 1.8 kg of flour, printed in the Official Journal of the European Union**, is one
of the best single facts in this reading.

### F5. The rim, the diameter and the fold — CONFIRMED, and the fold is in EU law
**Verdict: CONFIRMED.** *"The central part is 0,4 cm thick, with a tolerance of ± 10 %, and the rim is 1-2 cm
thick."* Maximum diameter: *"a variable diameter not exceeding 35 cm."* Baking: *"The baking time must not
exceed 60 to 90 seconds."*
And the sentence that carries the whole paragraph: *"The overall pizza must be tender, elastic and **easily
foldable into four**."* Repeated at 3.7: *"particularly soft and easily foldable into four"*. AVPN's wording
is *"facilmente piegabile a libretto"* — folded like a little book.

### F6. Which pizzas the STG covers — three, and the third has a name
**Verdict: CONFIRMED (three), with a caveat about where the names live.**
The English regulation prints three garnishing procedures **without naming them**: (1) 70–100 g crushed
peeled tomatoes, salt, oregano, sliced garlic, 4–5 g EVOO [marinara]; (2) 60–80 g tomato + **80–100 g
"Mozzarella di Bufala Campana AOP"** + basil + oil [margherita extra]; (3) 60–80 g tomato + **80–100 g
"Mozzarella STG"** + basil + oil [margherita].
The **names** appear only in the Italian disciplinare: *"Nella designazione 'Pizza Napoletana' rientrano
secondo le differenti farciture le seguenti denominazioni: 'Pizza Napoletana Marinara', 'Pizza Napoletana
Margherita Extra' e 'Pizza Napoletana Margherita'."*
https://www.lucianopignataro.it/a/disciplinare-pizza-napoletana/666/ (secondary reproduction of the Italian
text). **AVPN, by contrast, recognises only two** — *"il cui uso è riservato ai due tipi di pizza marinara…
e margherita…"* — and its margherita permits 5–7 g of grated hard cheese.

### F7. "The STG defines pizza napoletana" — it defines the claim, not the name
**Verdict: CORRECTED, and this is the most interesting legal fact in the reading.**
Recital 9: *"The protection referred to in Article 13(2) of Regulation (EC) No 509/2006 has not been
requested."* Point 3.3 ticks *"Registration without reservation of the name."*
**Practical meaning: anyone may still call a pizza "pizza napoletana".** Only the STG logo and the claim
*"Prodotta secondo la Tradizione napoletana"* are protected.
Italy moved to change this: *Publication pursuant to Article 26(2) of Regulation (EU) No 1151/2012*, OJ C
176/13, 18.5.2016, records that Italy submitted the name on **29 December 2015** (file EU No
IT-TSG-0107-01408) so it could be *"protected with reservation of name"*.
https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52016XC0518(04)
**UNVERIFIABLE here:** whether the implementing act completing that reservation was adopted. The UK's
mirrored register lists the TSG as "Registered" (EU registration 5 February 2010, UK 31 December 2020) but
does not state reservation status: https://www.gov.uk/protected-food-drink-names/pizza-napoletana
**Do not write "the name is now reserved" without checking eAmbrosia in a session with search available.**

### F8. The AVPN — founded 1984, and three founding dates are all in the sources
**Verdict: CONFIRMED (1984), CORRECTED in precision.**
- The regulation: *"In **May 1984** the 'pizzaioli napoletani' drew up a brief product specification which was
  signed by the whole profession and registered by means of an official document witnessed by the **notary
  Antonio Carannante of Naples**."*
- AVPN's disciplinare refers to *"il primo disciplinare … redatto il **14 giugno 1984**."*
- AVPN's history page: the association was set up on **3 July 1984** by **17 master pizzaioli**, *"with the
  desire to protect this product of excellence and stem the misuse of the name Neapolitan pizza"*.
  https://www.pizzanapoletana.org/en/storia_avpn [promotional]
**Antonio Pace** is named as founder/president in trade press but **not on AVPN's own history page**:
https://www.ristorazioneitalianamagazine.it/intervista-ad-antonio-pace-presidente-dellassociazione-verace-pizza-napoletana/ [trade press]
**What it does:** owns and licenses the collective mark, inspects members, trains pizzaioli, keeps an *Albo*
of certified pizzaioli, and grants derogations — a gas oven is allowed **only** on documented proof that a
wood oven cannot be installed.
**Size today:** **over 1,100 affiliated pizzerias in 61 countries** (Italia a Tavola, April 2025, on AVPN's
fortieth anniversary): https://www.italiaatavola.net/horeca/2025/4/7/avpn-40-anni-di-vera-pizza-napoletana-tra-tutela-formazione-internazionale/111594/ [trade press]
**Relationship to the STG:** AVPN is a named applicant on the file (with the Associazione Pizzaiuoli
Napoletani); the application is **EC No IT/TSG/007/0031, dated 9 February 2005**, registered **4 February
2010** — **five years**. Inspection bodies: Certiquality, DNV Det Norske Veritas Italia, ISMECERT.

### F9. UNESCO 2017 — CONFIRMED, and it lists the art, not the dish
**Verdict: CONFIRMED in every particular.**
Exact English title: **"Art of Neapolitan 'Pizzaiuolo'"**, element **No. 00722**, inscribed **2017** on the
Representative List of the Intangible Cultural Heritage of Humanity.
https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722
Decision **12.COM 11.b.17**, twelfth session, **Jeju Island, Republic of Korea, 4–9 December 2017**;
inscribed **7 December 2017**. https://ich.unesco.org/en/decisions/12.COM/11.B.17
UNESCO's own description: *"The art of the Neapolitan 'Pizzaiuolo' is a culinary practice comprising four
different phases relating to the preparation of the dough and its baking in a wood-fired oven, involving a
rotatory movement by the baker."* Bearers: *"the Master Pizzaiuolo, the Pizzaiuolo and the baker"*.
**About 3,000 pizzaiuoli** live and work in Naples — UNESCO's figure, and the only defensible headcount in
this dossier (see F14).
**The detail worth having:** the Committee **reminded Italy to avoid terms like "authenticity" and
"origin"**, warning that safeguarding which contradicts *"the evolving nature of living heritage"* would
undermine the Convention. Two million signatures were reported in support.
https://www.smithsonianmag.com/smart-news/naples-pizza-making-process-gets-unesco-heritage-status-2-180967470/

### F10. "Marinara … the older of the two" — asserted by the EU, sourced by nobody
**Verdict: DISPUTED.**
The regulation itself asserts it: *"The most popular and famous pizzas from Naples were the 'Marinara',
created in **1734**, and the 'Margherita', which dates from **1796-1810**."* (Reg. 97/2010, point 3.8.) **It
gives no source for either date** — that history section was drafted by the applicant trade associations,
and it is the origin of the "1734" now circulating everywhere, Wikipedia included:
https://en.wikipedia.org/wiki/Pizza_marinara — which concedes that the account *"rests predominantly on
oral and traditional retellings rather than documented, empirical evidence."*
**The name is not from seafood — it contains no fish.** *Alla marinara*, "sailor's style", is the usual
explanation, and it is folk-historical, not documented.
What **is** documented is that a garlic-and-oil pizza was the ordinary cheapest kind in the 1850s (F20).
**Write "the plainer of the two, and probably the older", never a dated fact.** The one citable formulation:
*the EU's own specification dates marinara to 1734, without saying how it knows.*

### F11. The Margherita legend — DISPUTED, and it must be staged, not told
**Verdict: DISPUTED. The old text's framing is the weakest link and must be rewritten.**

**The scholarship.** **Zachary Nowak, "Folklore, Fakelore, History: Invented Tradition and the Origins of the
Pizza Margherita", *Food, Culture & Society* 17(1), 2014, pp. 103–124**, DOI 10.2752/175174414X13828682779249.
https://www.tandfonline.com/doi/abs/10.2752/175174414X13828682779249
⚠️ Two corrections to the citation as it was given to this pass: the journal is *Food, Culture & Society*,
**not** *Gastronomica*, and the title is *"Folklore, Fakelore, History"*.
⚠️ **The article itself could not be read** (403 at Taylor & Francis, Academia.edu, ResearchGate). Everything
below is secondary reporting and must be framed "the historian Zachary Nowak has argued", never quoted.

**The pizzeria and the man.** *"Pizzeria di Pietro e basta così"* ("Pietro's, and that's enough"), founded
**1780** at Salita Sant'Anna di Palazzo by **Pietro Colicchio**; it passed to Enrico Brandi, then to his
daughter **Maria Giovanna Brandi** and her husband **Raffaele Esposito**. The premises trade today as
**Pizzeria Brandi**. https://en.wikipedia.org/wiki/Raffaele_Esposito (citing Pignataro, *La pizza*, 2018;
Schwartz, *Naples at Table*, 1998; Dickie, *Delizia!*, 2008) · https://pizzeriabrandi.com/history/ [producer]

**The letter.** Dated **11 June 1889**, signed **Galli Camillo**, head of the royal table service. Its entire
content: *«Le tre qualità di pizza da lei confezionate per Sua Maestà la Regina vennero trovate
buonissime!»* — "the three kinds of pizza you prepared for Her Majesty the queen were found to be
delicious." **It names three pizzas. It does not mention mozzarella, tomato, basil or the flag, and it does
not say a pizza was named for the queen.**
https://www.gamberorosso.it/attualita/pizza-margherita-storia-vera/ ·
https://www.scottspizzatours.com/blog/the-real-story-of-pizza-margherita/

**The documented doubts** (as reported of Nowak):
1. **Signature** — compared with notes signed by Galli in **1891** in Italy's national archives; *"clearly not
   the same"*.
2. **Form and seal** — handwritten where official royal correspondence used a printed letterhead; the royal
   seal sits in the wrong position.
3. **The name** — addressed to **"Raffaele Esposito Brandi"**, appending his wife's maiden surname, which an
   Italian man of the period would not have used.
4. **No archive trace, no press** — no record in palace archives, and **no newspaper of 1889 reported it**.
5. **Provenance** — Nowak's hypothesis: forged in the **1930s by the Brandi brothers**, Esposito's wife's
   nephews, who took the pizzeria over then and renamed it — marketing in the Depression years.
6. **When the story surfaces** — first promoted in the **1930s–40s**. Two markers: a **1944 menu from
   Pizzeria Da Attilio** listing *"pizza alla Margherita"* without ingredients, and a **1967 RAI television
   segment** as the earliest clear definition of the modern margherita.

**The royal visit.** Umberto I and Margherita did stay at **Capodimonte** in 1889 (Italian popular sources
give an arrival of 21 May): https://storienapoli.it/2020/09/27/la-vera-storia-pizza-margherita/ — ⚠️ weakly
sourced; **do not state a date for the visit.**

**A detail worth having, with a caveat.** Scott's Pizza Tours reports a **Geneva Gazette item of July 1880,
reprinted by the Washington Post**, describing Queen Margherita in Naples enjoying pizza and asking a famous
pizzaiolo to bring her **thirty-five varieties** — nine years before the supposed invention. [popular/trade
blog; the newspaper itself was not seen.]

**Pre-1889 tomato-and-mozzarella pizza — CONFIRMED in substance** (F20). ⚠️ Careful: Rocco lists those
toppings **in a list of variants**; he does not state the trio tomato + mozzarella + basil on one pizza. The
honest sentence is: *every element of the margherita was on Neapolitan pizzas a generation before the queen.*

**The old text's "The letter of thanks from the royal household exists; historians doubt the rest" inverts
the dispute.** A letter exists and hangs at Brandi; **its authenticity is precisely what is disputed.**

### F12. Port'Alba, 1830 — DISPUTED, and the book that would settle it was not consulted
**Verdict: DISPUTED / weakly sourced.**
Wikipedia: *"first established in 1738 as a stand for peddlers"*, then *"opened in 1830 in the town center at
Via Port'Alba 18"*; *"widely believed to be the world's first pizzeria."* Its 1830 sources are journalism and
a cookbook; **the 1738 date rests on a single dead travel-site citation.**
https://en.wikipedia.org/wiki/Antica_Pizzeria_Port%27Alba
The 1738 date is promoted by **AVPN's own news page** [promotional]:
https://www.pizzanapoletana.org/en/archivio_news/547-la_verace_pizza_nella_storia_re_nasone_e_lantica_pizzeria_portalba
**The regulation supports the general claim without naming the house:** *"There is no doubt that the first
'pizzerie' appeared in Naples… In the eighteenth century, the city already had several shops known as
'pizzerias'. The King of Naples, Ferdinand of Bourbon, heard of their reputation and, in order to taste this
dish in the typical Neapolitan tradition, breached court etiquette and visited one of the most renowned
pizzerias."*
**The proper source exists and was not consulted:** Antonio Mattozzi, *Una storia napoletana. Pizzerie e
pizzaiuoli tra Sette e Ottocento* (Slow Food Editore, 2009), built on State Archive lists of **every
pizzaiolo with a shopfront from 1807** and on Chamber of Commerce archives.
https://www.slowfoodeditore.it/it/assaggi/una-storia-napoletana-9788884991881-21.html
**If one claim in this dossier deserves a book order, it is this one.**
**Usable:** "1830, and the oldest still trading" if attributed; "the world's first, since 1738" is not.

### F13. Tomatoes — right in outline, "thought poisonous" overstated
- **"Reached Europe from the Americas in the sixteenth century" — CONFIRMED** (Mattioli classified it in 1544).
- **"Thought poisonous" — OVERSTATED.** The suspicion was mostly **status and humoral medicine**. David
  Gentilcore (*Pomodoro! A History of the Tomato in Italy*, Columbia UP, 2010): *"It's a vine. Anything that
  grows along the ground was seen as a plant of low status, something you only give to peasants. And the
  tomato was thought to hinder digestion because it was cold and watery."*
  https://cupblog.org/2010/08/19/the-rise-of-the-tomato-an-interview-with-david-gentilcore/
  The 1628 Paduan physician **Giovanni Domenico Sala** called tomatoes *"strange and horrible things"* — in a
  passage about eating locusts and crickets. Specific, and not the same as "poison".
- **First Italian tomato recipe — CONFIRMED: Antonio Latini, *Lo scalco alla moderna*, Naples, vol. I 1692,
  vol. II 1694**, *"salsa di pomodoro alla spagnuola"* — roasted on embers, onion, thyme, chilli, salt, oil,
  vinegar. Closer to a cooked salad than a sauce, and **Latini does not put it on anything**.
  https://it.wikipedia.org/wiki/Salsa_di_pomodoro · Latini was steward to the Spanish viceroy's household in
  Naples, hence *"alla spagnuola"*.
- **"Naples among the first to eat them" — CONFIRMED in substance** (Latini 1692; **Vincenzo Corrado**, *Il
  cuoco galante*, Naples **1773**).
- **"Pizza as we know it dates from the late eighteenth century" — CONFIRMED / consistent.** The regulation's
  own history: *"The first appearance of the 'Pizza Napoletana' may be dated back to the period between 1715
  and 1725"*, crediting Corrado with recording *"that the tomato was used to season pizza and macaroni"*.
- **First documented tomato ON pizza:** no single dated document survives. The earliest *descriptions* of
  tomato pizza on sale are **Dumas (1835/1843)** and **Rocco (1858)**. Say "by the 1830s it was on sale in
  the street", not "first documented in 17xx".

### F14. "Around 8,000 pizzerias" — a publicity number, and not credible
**Verdict: CORRECTED. Drop it.**
The circulating figure is **8,200 for Naples** (against 15,500 for Rome and province, 9,250 for Milan, out of
183,000 in Italy). Its origin: **the organisers of the Napoli Pizza Village**, via *la Repubblica*, 6 July
2016 — **event publicity, not a registry.** https://www.dissapore.com/pizzerie/dati-quante-sono-in-italia/
**It is not credible for the city:** Naples has roughly 950,000–983,000 inhabitants; 8,200 would be one
pizzeria per ~118 people.
**Registry data points far lower.** Truenumbers, on **Unioncamere** figures for 2020–21: Naples has **one
pizzeria per 381 residents**, ranking **81st in Italy** — implying roughly **2,500** for the city [calculated;
the source gives the ratio and the rank, not the raw count]. https://www.truenumbers.it/pizzerie-a-napoli/
Nationally, **Coldiretti** counted **127,000 pizzerias in Italy in 2018**, with Campania holding **16%** of
all pizza businesses.
**Recommendation: use UNESCO's "about 3,000 pizzaiuoli" (F9) instead — it counts people, which is the better
sentence anyway.**

### F15. Da Michele — 1870 is the family, not the pizzeria
**Verdict: CORRECTED in its particulars; "only two pizzas" CONFIRMED.**
The family's own account: the Condurro tradition begins with **Salvatore Condurro in 1870**; his son
**Michele Condurro opened his own pizzeria in 1906**; the business **moved to Via Cesare Sersale in 1930**,
where it still is. https://www.damichele.net/storia-e-passione/ [producer]
**Menu — CONFIRMED.** Michele's formula as Luciano Pignataro reports it: *"bere o affogare, Marinara o
Margherita"*, and *"Non c'è altro di commestibile"*. Both come in a single and a **doppia** version; the house
occasionally makes the historic **"cosacca"** on request.
https://www.lucianopignataro.it/a/pizzeria-da-michele-margherita-o-marinara-dal-1870/17112/
⚠️ That same article repeats a story of a Condurro making a cosacca for *"Tsar Nicholas II around 1836"* —
**impossible** (Nicholas II was born in 1868). Do not reuse.

### F16. Pizza fritta — the war popularised it, it did not invent it
**Verdict: CORRECTED.**
**Older than the war, documented:** **Giovanni Battista del Tufo (1588)**, *Ritratto… della nobilissima città
di Napoli*, describes *"zeppulelle"*, *"pasta cresciuta fritta e cosparsa di miele"*; **Ippolito Cavalcanti,
Duke of Buonvicino**, *Cucina teorico-pratica*, Naples **1837**, gives *"zeppolelle de baccalà"* and
*"pezzelle fritte di pasta cresciuta"* — savoury fried risen dough.
https://www.lucianopignataro.it/a/la-vera-storia-della-pizza-fritta-napoletana/194551/
**Matilde Serao, 1884**, documents fried street food at the same price point: *"Dal friggitore si ha un
cartoccetto di pesciolini minutissimi, fritti nell'olio"*, *"dallo stesso friggitore si hanno, per un soldo,
quattro o cinque panzarotti."* https://it.wikisource.org/wiki/Il_ventre_di_Napoli/III
**The post-war element that is true:** after 1945 pizza fritta became the everyday pizza of the poorest
quarters — wood ovens destroyed, mozzarella and fuel scarce, sold in the street largely by women, filled with
**ricotta e ciccioli**. https://www.lacucinaitaliana.com/italian-food/italian-dishes/naples-and-its-treasured-fried-pizza
The canonical image is **Sophia Loren selling pizza fritta in Vittorio De Sica's *L'oro di Napoli*** —
⚠️ the film is **1954**; it.wikipedia says 1947, which is wrong.
**Correct formulation:** "fried dough is centuries old in Naples and savoury fried pizza is in print by 1837;
what the war did was make it, for a while, the pizza most Neapolitans could afford."

### F17. San Marzano — the STG does NOT require it
**Verdict: CORRECTED.**
**DOP name and date — CONFIRMED:** *Pomodoro S. Marzano dell'Agro Sarnese-Nocerino* **DOP**, registered by
**Regulation (EC) No 1263/96**, **1–2 July 1996**; area across the provinces of **Naples, Salerno and
Avellino**. https://www.qualigeo.eu/prodotto-qualigeo/pomodoro-s-marzano-dellagro-sarnese-nocerino-dop/ ·
https://www.gov.uk/protected-food-drink-names/pomodoro-san-marzano-dellagro-sarnese-nocerino
**The STG does not name it.** Reg. 97/2010 permits only *"peeled tomatoes and/or small fresh tomatoes
('pomodorini')"*. **No San Marzano, no Corbara, no piennolo anywhere in the regulation.**
**The AVPN rulebook is where those names live, and as options:** *"Pomodoro fresco: nelle varianti S. Marzano
dell'Agro Sarnese-nocerino D.O.P., Pomodorini di Corbara (Corbarino), 'Pomodorino del piennolo del Vesuvio'
D.O.P. o altro pomodorino tipico… È consentito l'uso del pomodoro fresco o industriale per pelato del
'pomodoro lungo tipo Roma'."* — even AVPN allows a Roma-type tomato.
**Cheese — both, and the STG grades them:** buffalo mozzarella belongs to the version the Italian text calls
**Margherita Extra**, the generic **Mozzarella STG** to the plain **Margherita**. AVPN adds *"Fior di latte
dell'appennino meridionale"*.
⚠️ **"grown in the volcanic soil of the Sarno valley"** — no source found for that soil description; the DOP
area is verified. Prefer naming the DOP area.
**Detail worth stealing:** AVPN salts the tomato, not the disc — *"per 1 kg di pomodoro pelato la quantità di
sale da aggiungere è pari a 10-12 g, nel caso del pomodoro San Marzano che risulta già un prodotto più
sapido la quantità da aggiungere è di circa 7-10 g per kg."*

### F18. Pizza a portafoglio — the practice is real, the founding date is not
**Verdict: CONFIRMED as practice, DISPUTED as history.**
**The fold is in the EU regulation**, which is the strongest thing anyone can say about it: *"easily foldable
into four"* (F5).
**The popular history is not documented.** Gambero Rosso traces it to *"il lontano 1738 per mano dei
pizzaioli di Antica Pizzeria Port'Alba"* and credits **Serao's *Il ventre di Napoli*** — but Serao's text says
nothing about folding, and the 1738 attribution is the Port'Alba claim of F12. Gambero Rosso also describes
it folded **in half** (*"ripiegata su stessa"*), contradicting the fold-in-four.
https://www.gamberorosso.it/notizie/attualita/pizza-a-portafoglio-storia-curiosita-e-come-si-mangia/
**What IS documented for 1884** is the same thing without the name: slices carried through the alleys on a
tin tray and eaten in the hand (F20).
**Verdict: describe the practice, cite the regulation's own "foldable into four", give it no founding date.**

### F19. "Pizza a otto" — a remembered custom, not a documented institution
**Verdict: DISPUTED / thinly sourced.**
The custom: the pizza is eaten today and paid for in eight days — *"la mangio oggi e la pago tra otto
giorni"* — extended by fried-pizza sellers to neighbours they knew.
**Best available source:** Storie di Napoli, citing exactly one work — **Renato Benedetto, *Napoli di ieri*,
Grafica Tirrena, 1973** — and naming one seller (**Fernanda**, in the Quartieri Spagnoli), with the price at a
few *centesimi*, rising to one lira by the end of the 1800s.
https://storienapoli.it/2021/05/14/pizza-a-oggi-a-otto/ [popular history site]
**Matilde Serao does NOT mention it.** The relevant chapter of *Il ventre di Napoli* was read in full: it
documents prices, sellers and toppings, and contains **no mention of credit or debt for food**. Do not
attribute the eight-day credit to Serao.
**Dickens: NO SOURCE FOUND.** Nothing connects *Pictures from Italy* (1846) to pizza or to this practice.
**Usable as a remembered custom, attributed ("as the city tells it"), not as a documented institution.**

### F20. What pizza in Naples was before 1889 — the primary material, and it is very good
**Verdict: CONFIRMED, with three quotable primary sources.**

**Emanuele Rocco, "Il Pizzaiuolo", in Francesco de Bourcard, *Usi e costumi di Napoli e contorni descritti e
dipinti*, Naples, Gaetano Nobile, vol. 2** (the work appeared 1853–1858; the pizzaiuolo plate is dated 1858):
- *"Le pizze più ordinarie, dette **coll'aglio e l'oglio**, han per condimento l'olio…"*
- *"Altre sono coperte di **formaggio grattugiato** e condite **collo strutto**…"* with *"qualche foglia di
  **basilico**"*
- *"Alle seconde delle **sottili fette di mozzarella**."*
- *"Talora si fa uso di **prosciutto affettato**, di **pomodoro**, di **arselle**, ecc."*
https://thegreat.pizza/rubriche/le-prime-testimonianze-storiche-della-pizza-ve-le-facciamo-leggere-e-vedere/ ·
https://angeloforgione.com/2013/06/11/margherita_borbonica/ (both reproduce the text; a scan of the original
was not reached). Plate on Commons:
https://commons.wikimedia.org/wiki/File:BOURCARD(1858)_p2.172_-_IL_PIZZAIUOLO.jpg

**Alexandre Dumas, *Le Corricolo*** (journey of 1835, published 1843) — the topping list: *"La pizza è:
All'olio; Al lardo; Alla sugna; Al formaggio; Al pomodoro; Ai pesciolini."* And on price: it is *"il
termometro gastronomico del mercato: aumenta o diminuisce il prezzo secondo il corso"*, and *"non si può
vendere la pizza del giorno prima allo stesso prezzo di quella della giornata."* English rendering of the
same passage: *"A pizza of two farthings suffices for one person, a pizza of two sous is enough to satisfy a
whole family."* https://www.historytoday.com/archive/historians-cookbook/history-pizza
⚠️ The French original was not reached; quote the Italian/English renderings as such. *Pesciolini* =
**cecenielli/cicinielli**, whitebait.

**Matilde Serao, *Il ventre di Napoli*, 1884, chapter "Quello che mangiano"** — quoted directly from
Wikisource, https://it.wikisource.org/wiki/Il_ventre_di_Napoli/III :
- *"la pizza rientra nella larga categoria dei commestibili che costano **un soldo**"*
- *"Il **pizzaiuolo** che ha bottega, nella notte, fa un gran numero di queste **schiacciate rotonde**"*, *"di
  una pasta densa, che si brucia, ma non si cuoce, cariche di **pomidoro quasi crudo**, di **aglio**, di
  **pepe**, di **origano**"*
- the four kinds: *"**pizza al pomidoro**, **pizza con muzzarella e formaggio**, **pizza con alici e olio**,
  **pizza con olio, origano e aglio**"*
- the street trade: *"queste pizze, **tagliate in tanti settori da un soldo**, sono affidate a un garzone"*;
  *"garzoni che portano **sulla testa un grande scudo convesso di stagno** entro cui stanno queste fette
  pizza, e girano pei vicoli e danno in un grido speciale"* — the **stufa** carried on the head, in a primary
  source
- the children's portion: *"Vi sono anche delle **fette di due centesimi**, pei bimbi che vanno a scuola"*
- and the export failure, a ready-made opening: *"Un giorno, un industriale napoletano ebbe un'idea. Sapendo
  che la pizza è una delle adorazioni culinarie napoletane…"* — copper pans gleaming, the oven always lit,
  every kind available — and it failed: *"la pizza, tolta al suo ambiente napoletano, pareva una stonatura e
  rappresentava una indigestione."*

**English-language traveller accounts: NO SOURCE FOUND** beyond Dumas (French). Fucini's *Napoli a occhio
nudo* (1878) mentions the *friggitore* but **not pizza**.

---

## B. Reading 3 — mozzarella, pasta and the Neapolitan table

### F21. Water buffalo in Italy — "since at least the twelfth century" needs rewording
**Claim (old text):** "Water buffalo have been kept in the marshy plains around Caserta and Salerno since at
least the twelfth century."
**Verdict: PARTLY CONFIRMED.** The twelfth century is the earliest *documentary horizon* for central and
southern Italy generally, and those documents are **Lazio and the Salerno area**, not a record of Caserta
herds. Separating documented from repeated:

| Story | Status |
|---|---|
| Longobards / Agilulf, 596 | **FOLKLORE.** Prof. Luigi Zicarelli (Naples Federico II) rejects it: Paolo Diacono's 8th-c. *bubali* most likely meant Podolian cattle; the *Leges Longobardorum* record no buffalo damages; Longobard herd counts list cattle and pigs, no buffalo; no buffalo remains found near Benevento. |
| Arab introduction via Sicily (827 on), from Egypt/Syria | **PLAUSIBLE, INDIRECT.** Zicarelli calls it the likeliest route; not proven by any single document. |
| Norman diffusion c. AD 1000 | **SUPPORTED BY FISCAL RECORDS.** Norman and Swabian administrators taxed buffalo herds in Sicily (1000–1194). |
| Crusades-return story | **No source found.** |
| **Farfa Abbey, 1119–1125** | **STRONGEST EARLY DOCUMENT.** Abbot Guido III brought in *"bubalus et boves et animalia spanisca atque equos quos invenit"*. |
| Charles I of Anjou decree, 13th c. (return of a tamed work buffalo, Salerno area) | **DOCUMENTED**, Angevin chancery. |
| Cistercians transfer 10 buffalo to Clairvaux, 1153 | Cited by Zicarelli. |

Sources: Zicarelli in Ruminantia,
https://archivio2023-2024.ruminantia.it/la-storia-della-bufala-mediterranea-italiana-e-della-sua-mozzarella-raccontata-dal-prof-zicarelli/ ·
ANASB (breeders' association) https://www.anasb.it/bufala-mediterranea-italiana/specie-bufalina/ [promotional]

**The San Lorenzo in Capua record — REPEATED, NOT VERIFIABLE AT SOURCE.** The claim that 12th-century monks
of San Lorenzo in Capua gave pilgrims bread with a cheese called *mozza* or *provatura* traces to one
unreferenced sentence. The Consorzio states it without naming document or repository: *"del pane e un
formaggio chiamato «mozza» o «provatura»"*
https://www.mozzarelladop.it/mozzarella-di-bufala-viaggio-in-una-storia-millenaria/ [promotional]. Secondary
accounts add that it sits in the **Episcopal Archive of Capua**, with no shelfmark or edition. **No
scholarly citation, shelfmark or transcription was found. Treat as tradition — and note that nothing in it
says buffalo milk.**

**"Mozzarella" in print, 1570 — CONFIRMED.** The *Vocabolario Storico della Lingua Italiana della
Gastronomia* (ATLiTeG, academic) gives the first attestation as Bartolomeo Scappi, *Opera*, 1570:
*"mozzarelle fresche, e neve di latte"*. Second attestation Evitascandalo, *Libro dello scalco*, 1609.
https://vocabolario.atliteg.org/lemmario/mozzarella/4167 Scappi was cook to Pius V.

### F22. The DOP — dates, area and what the disciplinare actually requires
**Verdict: CONFIRMED and greatly extended.** Read from the primary text: Ministero delle Politiche Agricole,
*Provvedimento 11 febbraio 2008* (https://www.mozzarelladop.it/storage/pdf/disciplinare_mozzarella_2008.pdf),
plus the original *DPCM 10 maggio 1993 — GURI n. 219 del 17 settembre 1993*
(https://www.onaf.it/uploads/public/formaggi/1699_1-dop-mozzarella-di-bufala-campana-disciplinare-iniziale.pdf).

- **Italian recognition:** DPCM **10 May 1993**, published GURI 17 September 1993.
- **EU PDO:** Reg. (CE) n. **1107/96 of 12 June 1996**. eAmbrosia id EUGI00000012996.
- **Amendment:** Reg. (CE) n. **103/2008 of 4 Feb 2008** widened the area (added Puglia and Molise, more
  Napoli comuni).

**Area (Art. 2, 2008 text):**
- **Campania** — Caserta and Salerno: *l'intero territorio*. Benevento: 3 comuni. Napoli: 9 comuni.
- **Lazio** — Frosinone 13, Latina 20, **Roma 6** (Anzio, Ardea, Nettuno, Pomezia, Roma, Monterotondo).
- **Puglia** — Foggia: 3 whole comuni plus delimited parts of 9 more.
- **Molise** — Isernia: **Venafro only**.
So the DOP is **not** a Campania-only cheese, and **Rome province is in it** — usually omitted.

**Requirements (Art. 3), verbatim figures:**
- *"prodotta esclusivamente con latte di bufala intero fresco"*, Italian Mediterranean breed.
- Milk: **fat min 7.2%**, **protein min 4.2%**; *"transformed within the 60th hour from first milking"*.
- Acidification **only by natural whey starter** (*siero innesto*); coagulation **33–39 °C** with natural calf
  rennet; curd ripens under whey **~5 hours**; stretched with **boiling water**, *"viene filata, quindi
  mozzata"*; brine-salted; **packaged immediately in the same plant**; kept in its *liquido di governo*.
- **Forms:** round, plus *bocconcini, trecce, perline, ciliegine, nodini, ovoline*. **Weight 10–800 g; trecce
  up to 3 kg.**
- **Fat on dry matter min 52%; moisture max 65%**; *"assenza di conservanti, inibenti e coloranti"*.
- 1993→2008 changes: milk fat **7% → 7.2%**, protein minimum **added**, milking-to-vat **16 h → 60 h**,
  weights **20–800 g → 10–800 g**, stretching water **95 °C → "boiling"**.
**On "no freezing" — CORRECTED.** There is **no explicit freezing prohibition** in the text. Do not write that
the disciplinare forbids freezing; write that it requires fresh milk worked within 60 hours.

### F23. "Roughly twice the fat" — CONFIRMED, but fat alone is the wrong explanation
**Verdict: CONFIRMED on the number, CORRECTED on the mechanism.**
- **Regulatory:** DOP milk minimum **7.2% fat, 4.2% protein**; typical cow milk ~3.6–3.9% fat, ~3.2–3.4%
  protein. At the DOP minimum it is slightly more than twice.
- **Frontiers in Nutrition 2026**, "Water buffalo milk: physicochemical, nutritional properties…":
  Mediterranean buffalo vs cattle **9.86% vs 3.40% fat**; buffalo protein **4.61 ± 0.21%**; total solids
  **15.23 ± 0.25%**; calcium **1,042 ppm vs 685 ppm**; **casein micelle diameter 118 nm vs ~100 nm**; fat
  globule **4.1–4.8 µm vs 3.6–4.0 µm**.
  https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1742552/full
- **PMC review 2026**: total dry matter **157–172 g/L vs 118–130 g/L**; calcium **167.98–185.66 vs
  111.99–129.67 mg/100 mL**; *"the levels of αs2-casein and κ-casein in buffalo milk are approximately twice
  those found in cow milk"*; casein ≈**89% of total protein** vs 80%.
  https://pmc.ncbi.nlm.nih.gov/articles/PMC12205600/
**Why it matters:** more casein and more colloidal calcium → **short rennet coagulation time and firmer
curd**, hence higher yield per litre; larger, less-hydrated micelles and larger fat globules carry far more
fat through stretching; high fat with 65%-max moisture gives the soft, whey-weeping texture. **The
disciplinare defines the weep as a quality attribute, not a fault:** *"al taglio presenza di scolatura in
forma di lieve sierosità biancastra, grassa"*.
**The accurate framing: fat roughly doubles, but casein and colloidal calcium rise too, and those are what
govern curd firmness and stretch.** The quiz answer at `content/quiz.js` line 983 is defensible but thin.

### F24. *Mozzare* — CONFIRMED, with one nuance about the hand
**Verdict: CONFIRMED.** Treccani: *mozzarella* is a **southern diminutive of *mozza***, the substantivised
*mozzo*, from **mozzare**, *"recidere, con un colpo di solito secco e deciso, una parte dal tutto"*.
https://www.treccani.it/vocabolario/mozzarella/ The disciplinare's own verb is *mozzata*.
**Nuance:** Treccani's gloss for *mozza* explains the name via a cheese tied in the middle with a rush
ligature, *"quasi mozzata"* — the **cutting** is certain; the **"twist of the hand"** is the standard popular
description, not a dictionary claim. Safe wording: "from *mozzare*, to cut off — the cheese is severed from
the rope of curd."

### F25. "Never in the fridge" — CORRECTED; the Consorzio does not say that
**Claim (old text):** "kept in its own whey at room temperature, never in the fridge."
**Verdict: CORRECTED.** The Consorzio's own decalogue says:
- always immersed in its *liquido di governo* until eaten;
- keep in fresh water at **15 °C in summer**, **18–20 °C in winter**;
- **eat at 18–20 °C**; if it has been at 4 °C, take it out half an hour before, or immerse in **warm water
  35–40 °C for ~10 minutes**;
- and explicitly, it *"si può mangiare anche dopo tre o quattro giorni, riponendola in frigo con tutto il suo
  liquido"*.
https://www.mozzarelladop.it/ecco-il-decalogo-per-gustare-al-meglio-la-mozzarella-di-bufala-campana-dop/ [promotional]
Producer guidance concurs: ambient 18–24 °C ideal, but in summer the fridge at +4 °C is advised; once opened,
0–4 °C and eat within 2 days.
https://www.fattoriegarofalo.it/come-conservare-al-meglio-la-mozzarella-di-bufala-campana-dop/ [producer]
**"Never in the fridge" is a rule about *serving*, not storage.** The defensible sentence: *eat it the day it
is made if you can; otherwise the fridge, in its own whey, and back to 18–20 °C before it reaches the table.*

### F26. Pasta filata — the pH window in circulation is too low
**Verdict: CORRECTED.** Source: **Gonçalves MC, Cardarelli HR, "Mozzarella Cheese Stretching: A Review",
*Food Technology and Biotechnology* 59(1):82–92, 2021**, doi 10.17113/ftb.59.01.21.6707.
https://www.ftb.com.hr/archives/1702-mozzarella-cheese-stretching-a-review
- **pH:** *"The optimal condition for the stretching of mozzarella cheese occurs when the pH is in the range
  of 5.2 to 5.3"*; some authors report 5.2–5.5. **Below pH 5.0 the cheese loses the ability to melt and
  stretch**: *"At pH <5.0, loss of casein solubility… cheeses lose their ability to melt and stretch even
  with reduced calcium content."* (A "4.9–5.2 window" is wrong.)
- **The chemistry:** *"When curd obtained by enzymatic coagulation and fermentation reaches a pH=5.4 to 5.2,
  dicalcium paracaseinate is converted to monocalcium paracaseinate, which favours fibre formation."* Acid
  strips calcium from the casein network into the whey, loosening the cross-links.
- **Temperature:** *"The temperature of the stretching water varies from 60 to 85 °C, and the temperature of
  the cheese as it leaves the mixers ranges from 50 to 65 °C"*; *"A difference in the stretching temperature
  of only a few degrees within the critical range of 60 to 65 °C drastically affects the cheese
  properties."* **Note the divergence from artisan practice:** the DOP disciplinare specifies **boiling
  water** (1993 text: ~95 °C) — that is the water, not the curd.
- **Structure:** *"Thermomechanical treatment forms fibrous anisotropic structures from the initial isotropic
  cheese curd"*, giving *"the parallel alignment of the casein fibers, which are interspersed by water and
  fat channels"*.
- **Why it weeps:** *"As the curd temperature increases, there is a corresponding increase in the strength of
  the hydrophobic interactions within the protein matrix… forcing a small amount of water out and freeing
  the interstitial spaces around the fat globules."*

### F27. Gragnano — the IGP is right, "eighty workshops by 1800" is not
**Verdict: CORRECTED on the count; CONFIRMED and enriched on the rest.**
- **Registration:** **Reg. di esecuzione (UE) n. 969/2013 del 2 ottobre 2013**; the first pasta in Europe with
  a GI. https://eur-lex.europa.eu/eli/reg_impl/2013/969/oj/eng/pdf
- **Area:** *"tutto il territorio del Comune di Gragnano in Provincia di Napoli"* — **one comune only**.
- **Spec:** *"ottenuto dall'impasto della semola di grano duro con acqua della falda acquifera locale"*;
  semolina **≥13% protein, ≤0.86% ash** on dry matter; water **≤30%** of the dough; **bronze dies mandatory**
  (*"utensili esclusivamente in bronzo, che permettono di conferire alla pasta una superficie rugosa"*);
  drying *"ad una temperatura compresa tra 40 e 85 °C per un periodo compreso tra le 4 e le 60 ore"*.
  https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:52019XC0930(02)
- **"Eighty pasta workshops by 1800" — NO SOURCE GIVES EIGHTY.** What exists: *"già all'inizio dell'800… si
  contavano ben 70 pastifici"* (https://www.saporie.com/scoprire-con-saporie/Lifestyle/news/gragnano-un-paese-nato-per-la-pasta),
  and **~100 by mid-century / at Unification**, employing 70–75% of the working population, producing >1,000
  quintals a day (Consorzio, https://www.pastadigragnanoigp.it/il-territorio/ [promotional]). **None cites a
  census.** Write "about seventy at the start of the nineteenth century, more than a hundred by the 1850s",
  attributed as tradition. **This error is repeated in `content/recipes/campania.js` lines 250/253.**
- **Ferdinand II — DISPUTED IN DATE.** Consorzio and saporie give **12 July 1845** for the privilege *"di
  fornire la corte di tutte le paste lunghe"*; StorieNapoli's body text says **1842** while its own headline
  says 1845. The *"Cibo genuino, come genuini sono gli uomini di Gragnano"* quotation is anecdotal.
- **Why Gragnano dried pasta — the good version is in the registered spec.** The **EU single document itself**
  states that in the mid-1800s *"la larghezza delle strade e l'altezza dei palazzi furono pianificati in modo
  da facilitare il fluire del vento e agevolare le operazioni di essiccatura della pasta"* — a primary,
  citable claim. Local history dates the remodelling: **between 1843 and 1847, under architect Camillo
  Ranieri**, the central street (via San Marco, later via Roma) was rebuilt for light, solar heat and
  ventilation. https://cibocampania.it/2017/05/gragnano-lindustria-della-pasta-duecento-anni-storia/
- **The two-winds mechanism is tourist-board physics.** The EU spec mentions **wind flow** and Monti Lattari
  water, not sea breezes. *"L'alternarsi armonioso di brezze marine e correnti montane"* is the **Consorzio's
  own prose** [promotional]. **"Maestrale" specifically: no source found. Do not assert it.**

### F28. Ragù napoletano — CONFIRMED, and Eduardo is the anchor
**Verdict: CONFIRMED.** Whole cuts, not mince (lacerto/gallinella/tracchie, pork, plus *braciole*), simmered
in tomato. Neapolitan sources converge on **4 hours minimum, 5–6 typical, 6–8 for the Sunday or Easter
ragù**. https://www.lucianopignataro.it/a/il-vero-ragu-napoletano-secondo-la-tradizione/5668/
**Best primary anchor:** in *Sabato, domenica e lunedì* (1959) Eduardo has Rosa say the sauce had *"peppiato
per quattro o cinque ore"* before she went to bed.
**"Pippiare" — REAL, but not a dictionary word in this sense.** Treccani lemmatises **pipiare**, from Latin
*pipiare*, onomatopoeic, "to chirp/peep" (https://www.treccani.it/vocabolario/pipiare/). The **Neapolitan
culinary sense** — a simmer so gentle the sauce releases one bubble at a time, likened to puffing a pipe — is
attested in usage and the gastronomic press, and Eduardo writes it **peppiato**. Say "a Neapolitan verb", not
"a word in the dictionary meaning slow-simmer".
**The poem, text CONFIRMED** (transcribed from a school anthology PDF, HUB Scuola):
> *'O rraù ca me piace a me / m' 'o ffaceva sulo mammà. / A che m'aggio spusato a te, / ne parlammo pè ne
> parlà. / Io nun sogno difficultuso; / ma luvàmell' 'a miezo st'uso. / Sì, va buono: cumme vuò tu. / Mò ce
> avèssem' appiccecà? / Tu che dice? Chest'è rraù? / E io m'a 'o mmagno pè m' 'o mangià… / M' 'a faje dicere
> na parola? / **Chesta è carne c' 'a pummarola.**"

https://ms-mms.hubscuola.it/saggio/120RE0066313/730490d8-d69b-4ec8-a8c5-0401b742b90a/A4_u1_lin_o_rrau.pdf
**Publication: UNVERIFIED** — the poem is routinely dated 1947 and placed in *Le poesie di Eduardo* (Einaudi),
but no source confirming collection, publisher or year was found. **Cite it as "Eduardo De Filippo, '*'O
rraù*'" without a date**, or cite the play, which is firmly documented.

### F29. Genovese — the name has no archival evidence, in any version
**Verdict: DISPUTED, and the honest answer is that nobody knows.** The Neapolitan lexicographer Raffaele
Bracale states it plainly: *"In realtà non ci sono notizie sicure e il cronista può divertirsi a inventarle
tutte."*
https://www.lucianopignataro.it/a/pasta-al-ragu-di-genovese-lectio-magistralis-di-raffaele-bracale-origini-del-nome-e-ricetta-napoletana/35304/
Hypotheses, none documented: (1) **Genoese cooks/innkeepers** near the port / the *Loggia di Genova*, 15th–16th
c. — most repeated, and against it, the dish is unknown in Genoa; (2) **a cook nicknamed "'o genovese"** in a
tavern in via Medina; (3) the **surname *Genovesi***, common in Campania; (4) **Swiss/Genevan mercenaries**,
from *ginevra/ginevrino* or French *génevois*, whose cooking used onions heavily — it.wikipedia calls this the
most credible (https://it.wikipedia.org/wiki/Genovese_(sugo)); (5) **a technique, not a place** (Leyla Mancusi
Sorrentino, via Bracale). **(6) The Ligurian *tocco*: no source found connecting it.**
**Earliest printed evidence, and it is a good twist:** the **Liber de coquina** (13th–14th c., compiled in
Naples) describes an onion stew used to dress ***tria ianuensis*** — "Genoese pasta". **The pasta, not the
sauce, carried the Genoese name.**
**CORRECTION to a claim in circulation:** Cavalcanti 1837 has several dishes "alla genovese", but Luca Cesari
states **none is a pasta sauce** — *"nessuna purtroppo assomiglia a un condimento per la pasta"*.
https://www.ricettestoriche.it/2019/06/06/origine-e-storia-della-pasta-alla-genovese/
**Onion and ratio:** the preferred onion is the **cipolla ramata di Montoro**; ratio **2:1 to 4:1 onion to
meat by weight**; Bracale's own recipe for six is **2 kg onions : 1 kg beef**, ~6½ hours. Cuts:
*lacerto/girello*, *colarda*, *muscolo*.

### F30. Spaghetti alle vongole — the clam names are commonly got wrong
**Verdict: CORRECTED on the species; CONFIRMED on the rest.**
***Chamelea gallina*** is the **vongola comune / lupino**, **not** the verace. The **verace** is ***Ruditapes
(Venerupis) decussatus***, the Mediterranean native; most "veraci" sold in Italy today are ***Ruditapes
philippinarum***, the Manila clam, which Italian commercial rules **allow** to be sold as "verace". Lupini
lack protruding siphons; veraci have two long ones. Sizes: veraci ~30–45 mm, lupini ~25–30 mm.
https://www.scattidigusto.it/2022/12/21/vongole-veraci-lupini-differenze-prezzo-spurgare-aprire-congelare/
**Both are legitimate in Naples**: veraci preferred, but the dish is excellent with lupini, which are smaller
and more savoury.
**In bianco vs in rosso — CONFIRMED** that *in bianco* is the traditional version and tomato the variant.
**Earliest documented recipe — CONFIRMED: Cavalcanti, *Cucina teorico-pratica* (1837)**, *"vermicelli
all'aglio con le vongole"* — clams opened in water, the liquor strained and returned to the pan with garlic,
salt, pepper and parsley, the pasta finished in it. **Cavalcanti already distinguishes common clams from
"Vongole Veraci".** https://www.ilgiornaledelcibo.it/spaghetti-alle-vongole-storia/
**"No cheese": NO AUTHORITATIVE SOURCE FOUND.** It is a general Italian convention about fish, not a
documented rule for this dish. Do not present it as a rule with a history. (The recipe headnote at
`content/recipes/campania.js` line 251 states it as one — "every cook in the city would tell you so" is
fine as reported speech, which is what it is.)

### F31. Friarielli — botany CONFIRMED, etymology DISPUTED
**Verdict: CONFIRMED (botany), DISPUTED (name).**
***Brassica rapa* subsp. *sylvestris***, the Neapolitan "broccolo friariello". **Not** broccoli (*Brassica
oleracea*), **not** spinach. Same species and subspecies as Apulian *cime di rapa*; the difference is
cultivar, picking stage and use, not DNA — friarielli picked young and slim, cime di rapa leafier with
developed buds. https://it.wikipedia.org/wiki/Friarielli
**Etymology — two hypotheses, neither settled:** (a) Neapolitan ***frìjere***, to fry; (b) Spanish
***frío-grelos***, winter greens. **No Treccani entry for *friariello* exists** — the lemma does not appear in
their vocabolario.
**Status: CONFIRMED PAT** — "Broccolo friariello di Napoli" is on the Ministry's *Prodotti agroalimentari
tradizionali* list for Campania. **No Slow Food Presidio found.**
**Salsiccia pairing — CONFIRMED as the traditional one.**

### F32. Sfogliatella — the Santa Rosa story is legend with a thin documentary claim
**Verdict: DISPUTED.**
The monastery of **Santa Rosa da Lima at Conca dei Marini**, 17th century — the date **1681** is the one
usually given, **with no primary citation found anywhere**. The **Soprintendenza ABAP per il Comune di
Napoli**, an official body, **hedges**: it offers two competing accounts — a late-18th-century Neapolitan
convent, or **Suor Brigida** at Santa Rosa — and says *"Some documents, preserved in the archive of the
church of San Pancrazio at Conca dei Marini, testify to the birth"* of the Santa Rosa. **No shelfmark, no
transcription, no date for those documents is given by anyone.** https://sabap.na.it/le-sfogliatelle/
**Pintauro 1818, via Toledo — widely repeated, and contradicted by the shop's own branding.** Accounts say
Pasquale Pintauro, an innkeeper turned pastry-cook, got the recipe, dropped the pastry cream and cherries,
thinned the pastry and gave it the shell shape, from 1818 on via Toledo. **But the shop trades as
"Pasticceria Pintauro dal 1785"** (https://www.pasticceriapintauro1785.it/) [producer] — a date that
contradicts the 1818 founding story. The shop exists at via Toledo 275; it closed and **reopened on 27 March
2026** under new ownership.
**Filling — CONFIRMED in substance:** **semolina cooked in milk**, **ricotta**, **candied citrus**,
**cinnamon**, sugar, egg. The *Santa Rosa* differs: it keeps **crema pasticciera and amarena** on top.
**Riccia** = laminated; **frolla** = the same filling in shortcrust.

### F33. Babà — legend throughout, and the Naples route is inference
**Verdict: DISPUTED.**
- **Leszczyński — LEGEND.** The deposed King of Poland and Duke of Lorraine soaking a dry kugelhopf in wine
  (Madeira in most tellings, rum in others) is repeated everywhere with **no contemporary documentation**,
  and the variants are mutually inconsistent.
- **"Ali Baba" — POPULAR ETYMOLOGY, contested.** The *Thousand and One Nights* naming competes with Polish
  ***babka***, "old woman"/the bell-shaped skirt, and with Turkish *baba*. **None documented.**
- **Stohrer — REAL.** Nicolas Stohrer followed the Leszczyński household and opened in Paris on **rue
  Montorgueil**; the shop still trades. The **modern rum babà shape is attributed to a descendant in 1835**.
  https://it.wikipedia.org/wiki/Bab%C3%A0
- **Route to Naples via Maria Carolina and the *monsù* — REPEATED, NOT DOCUMENTED.** Maria Carolina married
  Ferdinand IV in **1768** (documented), and French-trained *monsù* cooks in Neapolitan noble houses are a
  documented phenomenon; **the claim that the babà travelled with them is inference.**
- **First appearance in print in Italy — UNVERIFIED.** Pignataro, citing Flavia Amabile, says the babà appears
  as a Neapolitan cake in **1836** in a manual by **Agnoletti** for Maria Luigia of Parma — but the page
  garbles the name to "Angeletti", and Vincenzo Agnoletti's known manuals are 1803/1814/1832–34. **Do not
  state it.** No Cavalcanti 1837 babà was found.
- **"Si nu babbà" — CONFIRMED as a living compliment**, "sweet, precious, a treasure"; dialect sources only.

### F34. Pastiera — the earliest printed recipe corrects the modern description
**Verdict: CONFIRMED (Latini), and the detail is better than the legend.**
**Antonio Latini, *Lo scalco alla moderna*, Naples, 1692–94, "Di Grano, detto alla Napolitana, Pastiera"** —
wheat *"del più bello, che potrai havere"* boiled in fatty milk and sieved; to two pounds of that, **eight
ounces of grated Parmesan**, **one pound of fatty sheep's ricotta**, Spanish bread flour, **pepper**, salt and
**cinnamon**; pistachios, marzipan, sugar — macerated in **"acqua rosa muschiata", musked rose water, not
orange-flower water.** https://www.museodellacucina.com/latini-sugo-al-pomodoro-pastiera/
**Basile, *Lo cunto de li cunti* (1634), "La gatta Cenerentola" — CONFIRMED mention**, the earliest naming:
*"…oh bene mio che mazzecatorio e che bazzara che se facette! da dove vennero tante **pastiere, e
casatielle**…"*
**Cavalcanti 1837**, dialect appendix — the first recognisably modern recipe.
**Partenope / siren legend — FOLKLORE**, unfootnoted even on Wikipedia. **San Gregorio Armeno convent, 16th
century — REPEATED, NOT DOCUMENTED.** **The Ceres/pagan wheat-and-egg fertility explanation — NOT EVIDENCED**,
presented as "probable" without sources.
**Bonus debunk worth having:** the "seven strips of pastry = the streets of Naples" rule is **a fake,
traceable to 2016 and viral at Easter 2020** — absent from Latini and from Cavalcanti.
https://angeloforgione.com/2020/04/21/pastiera_bufale_strisce/

### F35. Caffè sospeso — a modern revival, not an unbroken tradition
**Verdict: CORRECTED.** English Wikipedia's sourcing (*Corriere del Mezzogiorno* 2008, ITALY Magazine 2010,
NPR 2015) records that a **2008** article reported the custom **obsolete**, unobserved "for at least 15
years" in the bars visited, while a 2010 account claims it was "over 100 years old but declined during the
postwar economic boom". The revival is firmly dated: **Luciano De Crescenzo's 2008 collection *Il caffè
sospeso*** publicised it nationally; the **Gran Caffè Gambrinus revived it in 2010** for its 150th
anniversary; the **Rete del Caffè Sospeso** formed in **2010** around the post-2008 recession.
https://en.wikipedia.org/wiki/Caff%C3%A8_sospeso
**Write it as:** a custom Naples remembers, revived in 2008–2010 and now real again.

### F36. The rest of the table
- **Casatiello / tortano — CONFIRMED difference.** Casatiello carries **whole raw eggs in the shell on top**,
  held by crossed strips of dough; tortano has them **hard-boiled and shelled inside the filling**. Both
  ring-shaped, lard-rich, with salumi and cheese. **Etymology: casatiello < Latin *caseus* → Neapolitan
  *caso*, cheese; tortano < *torto*, twisted.** Basile (1634) names *casatielle* alongside *pastiere* (F34).
  The crown-of-thorns and Demeter symbolism is **interpretation, not documented origin.**
- **Parmigiana — CONTESTED, and "it is Campanian" is a claim, not a fact.** The **Soprintendenza ABAP Napoli**
  credits Campania: *"Alla Campania si deve l'origine e lo sviluppo della ricetta"*, initially with
  courgettes; earliest documentary sources **Vincenzo Corrado** (late 1700s), first modern recipe **Cavalcanti
  1837**. https://sabap.na.it/la-parmigiana-di-melanzane/ **The name** most likely comes from Sicilian
  ***parmiciana***, the overlapping wooden slats of a shutter, which the layered aubergines resemble.
  **The dish is PAT-listed for four regions — Calabria, Campania, Puglia and Sicilia.**
- **Pasta e patate con la provola — UNVERIFIABLE.** No documented history found beyond recipe-site assertion.
  **Write it as a household dish without a date.** (The existing recipe headnote does exactly that, correctly.)

---

## C. Reading 4 — Vesuvius, AD 79, and the two cities

### D1. The date — the old text states as probable what the field has stopped asserting
**Claim (old text):** "On an autumn day in AD 79, probably in late October…"
**Verdict: DISPUTED, and the dispute has moved *against* the confident October reading since 2018.**

**The traditional date.** Pliny 6.16 reads *"Nonum kal. Septembres hora fere septima"* = **24 August, between
2 and 3 p.m.** The earliest manuscripts (9th century) carry this consistently; the variants (*Kal. Novembres*
= 1 Nov; *III kal. Novembres* = 30 Oct) are later copies, from medieval n/u confusion. **Note carefully:
"24 October" is not a manuscript reading at all — it is a modern conjecture.**
https://dcc.dickinson.edu/pliny-letters/6-16 ·
https://nunc.ch/en/august-24-or-october-24-the-date-of-vesuvius-eruption-is-debated/

**The archaeological case for autumn — and note that almost all of it is food:**
pomegranates at Oplontis, chestnuts, walnuts, grapes, dried figs, dates and plums; braziers in use in houses
abandoned mid-life (House of the Menander); victims in heavy wool; **amphorae of grape juice "only closed
after a period of fermentation in the open air lasting about ten days"** — the *vendemmia* had happened; a
silver denarius of Titus carrying his **15th imperatorial acclamation**, while inscriptions of **7 and 8
September 79** still record the 14th — a *terminus post quem* of mid-September; and pyroclast dispersal to
the south-east matching autumn high-altitude winds (Rolandi et al. 2007).
https://archaeologymysteries.com/2023/03/19/the-debate-on-the-date-of-the-eruption-of-vesuvius-in-79/

**The 2018 charcoal inscription.** Found in the **Casa con Giardino, Regio V**, on a wall in a room under
renovation; announced by **Massimo Osanna on 16 October 2018**. The transcription at announcement:
> **XVI (ante) K(alendas) Nov(embres) in[d]ulsit pro masumis esurit[ioni]** — "on 17 October, he indulged in
> food immoderately."

https://www.thehistoryblog.com/archives/52960
Osanna: *"Being charcoal, fragile and evanescent, which could not last a long time, it is more than likely
that it was written in October 79 AD."* Culture minister Alberto Bonisoli: *"Today, with a lot of humility,
maybe we're rewriting the history books."*

**Three separate problems, and the old text cannot ignore them:**
1. **The words are disputed, not just the inference.** The Parco itself published a revised reading **three
   days later, on 19 October 2018**: Giulia Ammannati, of the Scuola Normale Superiore di Pisa, reads the
   line as **IN OLEARIA / PROMA SUMSERUNT** — "they took it in the oil pantry." **Only *XVI K Nov* is
   agreed.** https://pompeiisites.org/en/comunicati/nuova-interpretazione-su-iscrizione-a-carboncino/
2. **It carries no year.** It is a workman's note on a wall about to be frescoed.
3. **The durability premise has been tested and failed.** Experimental archaeology (2023–24) found oak
   charcoal inscriptions remain "essentially unaltered" after ten months, destroying the argument that the
   writing could not have survived from October 78 to August 79.
Archaeobotanist **Chiara Comegna** adds that the botanical remains need contextual evaluation: late peach
varieties and early chestnuts existed, hay was stored in summer, pomegranates could be preserved or imported.

**The honest current position — use this.** Sparice, D., Amoretti, V., Galadini, F., Di Vito, M. A.,
Terracciano, A., Scarpati, G. & Zuchtriegel, G. (2024), *Frontiers in Earth Science* 12:1386960:
> *"Since the exact date of the eruption is being debated (late August to November…), we simply refer to the
> first and second day of the eruption."*

https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2024.1386960/full
A book-length defence of 24 August exists: **Pedar W. Foss, *Pliny and the Eruption of Vesuvius* (2022)**,
reviewed at https://bmcr.brynmawr.edu/2022/2022.12.08/
**Doronzo et al. (2022)**, *Earth-Science Reviews* 231:104072, is reported to conclude **24–25 October** —
⚠️ the paper could not be read (403), and it was formally contested by a published Comment and Reply.
**Best prose solution: write the season, not the day — "in the autumn of AD 79" — and let the disagreement
itself be a line, since the argument is largely about food.**

### D2. The column — "twenty kilometres" is wrong, and it did not hold steady
**Verdict: CORRECTED on height, CONFIRMED on duration.**
- Carey & Sigurdsson (1987): Plinian column **14–32 km**, varying through the eruption.
- Sigurdsson et al. (1985): **27 km** in the early white-pumice stage, later rising to **33 km**.
- The Plinian phase lasted **~18–20 hours** — Sparice et al. 2024: *"the Plinian phase… lasted about 18 h"*,
  beginning around 1 p.m., white pumice giving way to grey after about seven hours.
- Fallout rate at Pompeii: **12–15 cm per hour.**
https://www.geo.mtu.edu/volcanoes/boris/mirror/mirrored_html/VESUVIO_79.html
**Write "past thirty kilometres at its height", not a flat twenty.**

### D3. Pliny the Younger — CONFIRMED, but every part of the framing needs fixing
**Verdict: CONFIRMED with important corrections.**
- **Written c. AD 106–107, about twenty-seven years later**, to **Tacitus**, who had asked for material. Not a
  diary: a literary letter composed in middle age for a historian.
- **He was seventeen** — 6.20: *"I was only in my eighteenth year."* Asked by his uncle whether he wanted to
  come, he stayed at Misenum with his mother: *"I called for a volume of Titus Livius, and read it."*
- **He did not witness his uncle's death.** 6.16 opens: *"You ask me to send you an account of my uncle's
  death, so that you may be able to give posterity an accurate description of it."* First-hand about the sky,
  second-hand about the death.
- **The cloud:** *"it more closely resembled a pine-tree than anything else, for what corresponded to the
  trunk was of great length and height, and then spread out into a number of branches."*
- **Rescue or science?** It began as observation — he ordered a light vessel for a closer look — and became a
  rescue when **Rectina's** message arrived *"begging him to save her from her perilous position."* He then
  launched the quadriremes: *"Fortune favours the bold; try to reach Pomponianus."*
- **He died at Stabiae**, at the villa of **Pomponianus** — not at Pompeii, not at sea.
Translation: **J. B. Firth (1900)**. https://www.attalus.org/old/pliny6.html ·
https://dcc.dickinson.edu/pliny-letters/6-20
**"Only eyewitness account":** true as far as could be verified; Cassius Dio wrote over a century later and
was not present. ⚠️ Dio was not checked directly.

### D4. Burial depths and the six surges
**Verdict: CONFIRMED for Herculaneum; the Pompeii figure needs care.**
- **Pompeii:** pumice fall reached **2.8–2.9 m maximum thickness** (Sparice et al. 2024); the surge deposits
  that killed were thin — **S4 at Pompeii is about 3 cm**. Roughly **three to four metres** in all.
  ⚠️ **No authoritative "total depth including all surge units" figure was found; anything above ~4 m is
  unsourced.**
- **Herculaneum:** *"more than 20 m"* of pyroclastic deposits. **Twenty metres is right.**
- ⚠️ **A trap:** the widely-circulated "60, 25, 18 metres" at Herculaneum, Oplontis and Pompeii is the
  **thickness of the moving current**, not the deposit. Do not write "60 metres of ash at Herculaneum."
- **Six surges, S1–S6.** S1–S3 stopped before Pompeii's north-west walls; **S4 entered and killed**; S5 and
  S6 overran the town; the last two ran more than 15 km from the vent.
- **Roof collapse — confirmed:** 90% of the fall-phase deaths were from roof and floor collapse. Sparice et
  al. 2024 add a cause the old text lacks: **syn-eruptive earthquakes** during the caldera collapse, between
  the end of the Plinian phase and the arrival of the currents, brought walls down on people who had
  survived the pumice.

### D5. How people died at Pompeii — a live dispute, so name no mechanism
**Verdict: DISPUTED.**
- **Thermal shock:** Mastrolorenzo, G. et al. (2010), *PLoS ONE* 5(6):e11127. The S4 surge exposed Pompeii to
  **250–300 °C**; *"exposure to at least 250 °C hot surges… was sufficient to cause instant death, even if
  people were sheltered within buildings"*; exposure time *"was insufficient to cause asphyxia."* Cadaveric
  spasm in **73%** of victims. https://pmc.ncbi.nlm.nih.gov/articles/PMC2886100/
- **Ash inhalation:** Dellino, P. et al. (2021), *Scientific Reports* 11:4959. At Pompeii the current was
  **115 °C** and lasted **about 17 minutes**; *"exposure to fine ash, even at a low particle concentration,
  can be survived only for a couple of minutes."* Death by fine-ash inhalation, bodies unburned and clothing
  intact. https://pmc.ncbi.nlm.nih.gov/articles/PMC7925681/
**Both peer-reviewed, both current. Write "killed within minutes" and avoid the mechanism.**
**The arithmetic that sharpens the old text's "killing everyone still alive":** **394 skeletons in the fall
(lapilli) deposit**, 90% killed by collapsing roofs and floors; **650 in the S4 surge deposit**; total
**1,044**. About **40% were already dead before the surges arrived.**

### D6. Herculaneum's temperatures and the vitrified brain — contested, and irresistible
**Verdict: DISPUTED.**
**The high-temperature case:** Pensa, A. et al. (2023), *Scientific Reports* 13:5622 — charcoal-reflectance
work gives a first, short-lived **detached ash cloud surge at 555–495 °C**, then **465–390 °C** and **350–315
°C**; about **350 people** died, most in the waterfront *fornici*. https://www.nature.com/articles/s41598-023-32623-3
Giordano, G. et al. (2025), *Scientific Reports* 15:5955 — vitrification required **above 510 °C followed by
cooling at ~1000 K/s**. The victim: a man of about 20, believed to be the **custodian of the Collegium
Augustalium**, found **lying in his bed**, excavated by **Amedeo Maiuri in 1961**.
https://www.nature.com/articles/s41598-025-88894-5
**The low-temperature case:** Tim Thompson et al. (2020), *Antiquity* — collagen preservation and
crystallinity indicate **below 400 °C, possibly as low as 240 °C**; the victims were **baked from the outside
and suffocated**, not vaporised. Thompson has "never seen a context in which tissue is rapidly vaporized."
Petrone's counter: Thompson's team did not study the skeletons in their original archaeological context.
A published methodological criticism of the vitrification claim exists (*Science and Technology of
Archaeological Research*, 2020) — ⚠️ reached only through search results.
**Stage it as "one team argues", never as fact.**

### D7. Population — CONFIRMED as the standard figure, on a thin base
**Verdict: CONFIRMED with a caveat.** **Wallace-Hadrill (1994)** reconstructed *slightly below 12,000* for AD
79; the commonly cited band is **11,000–12,000** within 66 hectares (~170 people/ha). Published estimates run
roughly **6,400 to 20,000**. **Herculaneum: about 4,000–5,000.**
⚠️ The attributions reached this pass through weak intermediaries. **Write "perhaps eleven or twelve
thousand" and do not attach a scholar's name.** The serious treatment is Miko Flohr, "Quantifying Pompeii",
in *The Economy of Pompeii* (OUP), https://academic.oup.com/book/9416/chapter/156251486 — not accessible.

### D8. Fiorelli — CONFIRMED, with better particulars
**Verdict: CONFIRMED.**
- **3 February 1863** is the date of the first successful casts; four victims. Earlier attempts were made in
  **1831** and **1861** — **Fiorelli perfected rather than invented the idea.**
- **Director of excavations 1860–75.** He introduced the **regiones / insulae / numbered doorway** system
  still in use, and **excavation from the top down** — *"a better way of preserving everything that was
  discovered."*
- **How many:** the Parco's own page says *"since 1863 a little over a hundred casts have been made"*, against
  more than a thousand victims' remains. Thirteen stand in the Garden of the Fugitives.
https://pompeiisites.org/en/pompeii-map/analysis/the-casts/

### D9. The 2024 DNA study — the single best "everything you knew" item available
**Verdict: CONFIRMED.** Pilli, E. et al. (2024), **"Ancient DNA challenges prevailing interpretations of the
Pompeii plaster casts", *Current Biology***, DOI 10.1016/j.cub.2024.10.007 (Harvard, Florence, Max Planck).
**14 of the 86 casts** under restoration were sampled; five individuals characterised.
- The **adult wearing a golden bracelet with a child on its lap**, read for a century as a mother and her
  child: **an unrelated adult male and child.**
- The pair at the **House of the Cryptoporticus**, read as two sisters or mother and daughter: **included at
  least one genetic male**, and they were **not related**.
- Ancestry: Pompeians derived largely from **recent immigrants from the eastern Mediterranean**.
**David Caramelli:** the findings *"challenge enduring notions such as the association of jewellery with
femininity or the interpretation of physical proximity as evidence of familial relationships."*
https://www.cell.com/current-biology/fulltext/S0960-9822(24)01361-7

### D10. Rediscovery dates — CONFIRMED with the usual caveats
**Pompeii: 1748** — but what was dug was thought to be **Stabiae**, and was securely identified as Pompeii only
in **1763**. **Herculaneum: found 1709** (well-digging), **systematic excavation from 1738** under **Charles of
Bourbon**, director **Roque Joaquín de Alcubierre**. **Domenico Fontana** cut the Sarno canal through the site
in the **late 16th century** (conventionally 1592–1600) and hit ruins without recognising them.

### D11. The unexcavated third — CONFIRMED arithmetically
**Verdict: CONFIRMED; "deliberately" is right in practice.**
**66 hectares** within the walls; about **44 excavated**, **22 left buried** — a third. The **Grande Progetto
Pompei**, **€105 million**, EU and Italian state, **begun 2012** — and its money went to **conserving what was
already exposed, not to opening new ground**. The Regio V work of 2018–20 and the Regio IX work since 2023
are officially *slope stabilisation* along the edge of the buried area, **which is why the discoveries keep
coming from those margins** — a genuinely useful causal link.
The rationale as expressed by the archaeologist **Sophie Hay**: *"With the inevitable development of
technology and the possibility of more information being teased out from the remains, we should not be in a
rush to excavate beyond the purposes of conservation."*
⚠️ **No Parco statement in those words was found.** https://en.wikipedia.org/wiki/Great_Pompeii_Project

### D12. Eruptions since — "more than fifty" is wrong
**Verdict: CORRECTED on the count; CONFIRMED on 1631 and 1944.**
- **Count:** the standard catalogue lists **47 eruptions after AD 79**, not "more than fifty". (The Smithsonian
  figure of 54 is for the whole Holocene, i.e. including pre-79.) **Write "nearly fifty."**
- **1631:** the catalogue entry runs "15 December 1631 – late January 1632: sub-Plinian eruption with
  devastating tephra falls and pyroclastic flows, **probably more than 4000 killed**." The literature's range
  is **at least 3,000, possibly 6,000**. Torre Annunziata and Torre del Greco destroyed.
- **1944: 18 March – 4 April 1944.** Lava reached **San Sebastiano al Vesuvio and Massa di Somma on 21
  March**, partly destroying both. **26 civilians killed, nearly 12,000 displaced.** On **23 March 1944** ash
  destroyed **88 B-25 Mitchells of the 340th Bombardment Group** at Pompeii Airfield — a total loss, with
  human casualties amounting to a sprained wrist and a few cuts. Vesuvius has been quiet ever since: **its
  longest repose since 1631.**
https://www.geo.mtu.edu/volcanoes/boris/mirror/mirrored_html/VESUVIO_elenco.html ·
https://www.earthmagazine.org/article/benchmarks-march-17-1944-most-recent-eruption-mount-vesuvius/
**Overlap note:** reading 1 already spends 1944 and the red zone. Reading 4 should take the B-25s or nothing.

### D13. Thermopolia — the figure is Osanna's own, but the category is contested
**Verdict: CONFIRMED as to the figure.** **Massimo Osanna: *"In Pompeii alone there are 80 thermopolia."***
That is the number to use, and it is attributable.
**The scholarly complication:** **Steven J. R. Ellis**, "The use and misuse of 'legacy data' in identifying a
typology of retail outlets at Pompeii", *Internet Archaeology* **24** (2008), DOI 10.11141/ia.24.4 — argues
the Latin labels *thermopolium*, *popina*, *caupona*, *taberna* "were casually attached to them on their
discovery in the 18th and 19th centuries, even though these labels have no corroboration in the
archaeological record". ⚠️ Counts of ~154–163 masonry-counter outlets circulate from his work but reached
this pass only as search snippets — **do not print them.**

### D14. The 2020 thermopolium — the best food scene in the entire site
**Verdict: CONFIRMED almost verbatim, and there is far more in it than the old text uses.**
Announced by the Parco on **26 December 2020**; Regio V, between **Vicolo delle Nozze d'Argento and Vicolo dei
Balconi**; partly dug in 2019, completed 2020; opened to the public **12 August** the following year.
- **In the dolia:** bones of **duck, pig, goat, fish (including tuna) and land snails** — several species in
  one vessel, i.e. **cooked dishes, not raw stock**.
- **Crushed fava beans in a wine jar**, deliberately ground, *"used in order to modify the taste and colour of
  the wine, bleaching it"* — a practice named in **Apicius, *De re coquinaria***. **This is the single best
  detail in the file: the Roman equivalent of fining a wine, found in the jar.**
- **The paintings:** a **Nereid riding a hippocampus**; still lifes of **two mallard ducks hanging upside
  down** and a **rooster** — and **a fragment of duck bone was found in the container beneath the painted
  ducks**; a **dog on a lead**.
- **The graffito**, scratched on the frame around the dog: **NICIA CINAEDE CACATOR** — "Nicias, shameless
  shitter!" — left, the Parco suggests, by a prankster or by someone who worked there.
- **The dead:** bones of a person **at least 50 years old**, apparently on a **bed** when the current arrived;
  a second person inside a large dolium.
- **The dog:** a complete skeleton, **20–25 cm at the shoulder** as a full adult — deliberate breeding for
  small size.
- **Osanna:** *"for the first time an area of this type has been excavated in its entirety."*
https://pompeiisites.org/en/comunicati/the-ancient-snack-bar-of-regio-v-resurfaces-in-its-entirety-with-scenes-of-still-life-food-residues-animal-bones-and-victims-of-the-eruption/

### D15. Bread — "communal ovens" is simply wrong
**Verdict: CORRECTED on the ovens; CONFIRMED on the stamp.**
Pompeii's bread came from **commercial bakeries — *pistrina***, each serving its quarter, milling their own
grain on basalt *meta* and *catillus* millstones turned by donkeys. **Not communal ovens: businesses.**
⚠️ The count "about 35" comes from popular-archaeology sources, not a scholarly census — **write "more than
thirty"**.
- **The Modestus bakery, VII.1.36**, excavated 1846: **81 carbonised loaves** were found in the oven, which
  had been *"found shut with a bar of iron across it"* — *"put there to cook minutes before the catastrophe"*.
  https://pompeiiinpictures.com/pompeiiinpictures/R7/7%2001%2036.htm
- The standard loaf is the ***panis quadratus***: round, scored before baking into six or eight wedges.
- **Home baking was the exception:** Steven Tuck notes the poorer citizens *"would certainly not have had
  ovens or in some cases even mills or kitchens to process raw grain."*
- **A bread dole, on a tomb.** A monumental *elogium* found at Pompeii in **2017** records the distribution of
  **baked bread** — not grain — during a **grain shortage**. Tuck, S. L. (2023), "'Baked bread to the
  people'", *Journal of Roman Archaeology* **36**(2), 519–531, DOI 10.1017/S1047759423000429.
  **The point for prose: in this town bread was a political instrument, and the poor had no oven.**

### D16. The stamped loaf — CONFIRMED, with a date problem, and a possible happy ending
**Verdict: CONFIRMED on the stamp; DISPUTED on the year of discovery.**
The stamp: **`[C]eleris Q(uinti) Grani / Veri ser(vi)`** — **"Of Celer, slave of Quintus Granius Verus"** —
**CIL X 8058,18**. Now in the **Museo Archeologico Nazionale di Napoli, inv. 84596**; about **17.5 cm** across.
**The conflict:** the Herculaneum site record states the loaf was found **"on 5th October 1748"**; Wikipedia
and its derivatives say **1930**, in the House of the Stags. **Print no year** — "a carbonised loaf from
Herculaneum, stamped…".
**The ending, if it survives checking:** **Celer was freed.** His name appears afterwards as *Celer Q(uinti)
Grani Veri libertus* in a municipal album dated shortly after the disaster. ⚠️ **This rests on Wikipedia and
a popular writer; verify against Mario Pagano (2000) before using it — it is too good a line to get wrong.**
**Note the accuracy point:** the stamp names **an owner and his slave**, not a bakery brand. "Stamped with the
name of the man it belonged to" is the more honest phrasing than the old text's "the baker's mark".

### D17. The bakery-prison, Regio IX (2023) — the labour behind the bread
**Verdict: CONFIRMED from the Parco's own release, 8 December 2023.**
**Regio IX, Insula 10**, in a house under renovation. The production wing has **no door and no communication
with the outside** — the only exit leads into the atrium. Its windows are **high in the wall and barred**. The
floor around four tightly-packed millstones carries **semicircular indentations cut into the volcanic
basalt**, to keep the animals from slipping and guide them round in a circle. Alongside, a stable with
feeding troughs. **Three victims** were found in the house in the preceding months. Apuleius,
*Metamorphoses* IX, describes exactly this: enslaved workers and **blindfolded donkeys** at the mills.
**Zuchtriegel:** *"a space in which we have to imagine the presence of people of servile status"* whose owner
needed to restrict their movement — *"the most shocking side of ancient slavery, the one devoid of both
trusting relationships and promises of manumission, where we were reduced to brute violence."*
https://pompeiisites.org/en/comunicati/pompeii-prison-bakery-emerges/

### D18. Garum — CONFIRMED, with the export scale unverified
**Verdict: CONFIRMED for the *urcei* of Umbricius Scaurus.**
Four *tituli picti* from the mosaic in the atrium of **Aulus Umbricius Scaurus**' house (VII.16.15):
1. **`G(ari) F(los) SCO[m]/ SCAURI/ EX OFFI[ci]/NA SCAU/RI`** — "The flower of garum, made of mackerel, a
   product of Scaurus, from the shop of Scaurus"
2. **`LIQUAMEN/ OPTIMUM/ EX OFFICI[n]/A SCAURI`** — "The best liquamen, from the shop of Scaurus"
Scaurus' name appears on **almost a third of all fish-sauce jars found at Pompeii and Herculaneum**. His son
reached the **duovirate**; the town council voted **2,000 sesterces** toward his funeral and an **equestrian
statue in the forum**.
**The Garum Shop, I.12.8**, excavated **1958 and 1960–61**: a house converted to production by sinking **six
dolia** in the peristyle garden — five still held dried fish sauce, full of **the small bones and vertebrae of
anchovies (*Engraulis encrasicolus*)**. The vessels held no lapilli or ash, so the contents are **the last
garum of Pompeii**. Maiuri recorded that **when they were opened in 1960 the smell of fish was still fresh.**
Carannante, A. (2019), *International Journal of Osteoarchaeology*, DOI 10.1002/oa.2783.
https://pompeiiinpictures.com/pompeiiinpictures/R1/1%2012%2008%20p2.htm
**The four words:** *garum* — the prestige sauce, from blood and viscera; *liquamen* — from whole fish, and by
the first century a catch-all; *muria* — the brine drawn off salted fish; *allec* — the paste of sediment and
bones left at the bottom. **Process:** fish layered with salt, fermented in the sun **up to about four
months**, then strained. **Price:** Pliny records *garum sociorum* from Spain at **1,000 sesterces for about
twelve pints — the price of some 2,000 loaves of bread.**
⚠️ **Caution:** Scaurus was *Pompeii's* leading producer and a regional exporter; the famously expensive garum
came from **Spain (Baetica)**. **No evidence was found for Pompeii as a Mediterranean-scale exporter.**

### D19. The Herculaneum sewer — the best evidence of what ordinary Romans ate
**Verdict: CONFIRMED, and the "over 100 fish species" in circulation is too high.**
**Rowan, E. (2017)**, "Bioarchaeological preservation and non-elite diet in the Bay of Naples: An analysis of
the food remains from the Cardo V sewer at the Roman site of Herculaneum", ***Environmental Archaeology*
22(3)**, DOI 10.1080/14614103.2016.1235077.
- **220 litres of sewer soil** examined.
- **194 taxa identified: 94 botanical, 45 fish, 53 shellfish, 2 bird. 113 of the 194 are edible.**
- The sewer ran under **Insula Orientalis II**, beneath apartments and shops — **the waste of middle- and
  lower-class townspeople**, not a villa.
- The pattern: **a few staples, constantly supplemented by a very wide range of other things.**
- Named finds include carrot, chicory, garlic, fig, grape, olive — and **black pepper (*Piper nigrum*), an
  import from India, in a non-elite deposit.**
**Nicholson, R., Robinson, J., Robinson, M. & Rowan, E. (2018)**, "From the Waters to the Plate to the
Latrine", ***Journal of Maritime Archaeology* 13, 263–284**, DOI 10.1007/s11457-018-9218-y.
- **About 70 fish taxa** from roughly **2,500 skeletal remains** — **not "over 100 species"**.
- Overwhelmingly **small and juvenile fish**: sea breams, horse mackerel, sardines, conger eel, wrasses,
  flatfish — netted in shallow water and *"probably purchased quite cheaply."*
- **Rock sea urchin (*Paracentrotus lividus*)** in most samples.
- **The honest conclusion:** seafood was eaten regularly but was *"only a relatively minor dietary
  component"*. **The Bay of Naples fish-eating idyll is smaller than it looks.**

### D20. The vineyards inside the walls — CONFIRMED
**Verdict: CONFIRMED.** The **Villa dei Misteri** project, Mastroberardino with the Soprintendenza. Permission
**1996** (the Parco dates the vineyard work to **1994**; "the mid-1990s" is safest). Vine positions were
reconstructed from **root cavities preserved in the ash**, with ampelographic and DNA work identifying
**Piedirosso** and **Sciascinoso** (Olivella).
Today: **15 plots, all in Regiones I and II — inside the walls — totalling about one and a half hectares.**
The wine: **Pompeiano IGT "Villa dei Misteri"**, **90% Piedirosso / 10% Sciascinoso**; **first vintage 2001**,
**just over 1,700 bottles.**
https://pompeiisites.org/en/comunicati/xix-edition-of-the-harvest-in-the-pompeii-vineyards/
**Overlap note: reading 2 already credits Mastroberardino with replanting Pompeii. Do not spend it twice.**

### D21. The Villa of the Papyri — CONFIRMED, and it has moved twice since 2024
**Verdict: CONFIRMED.**
- **1,826 papyri** in the official inventory; discovered **1752**; the only library to survive from classical
  antiquity. The dominant author is **Philodemus of Gadara**, the Epicurean.
- **More probably remain buried:** the villa was found in the 1990s to be far larger than known, with **two
  unexcavated levels** at roughly **37 m** depth. The main library has never been located.
- **Vesuvius Challenge:** **12 October 2023**, **$40,000** to **Luke Farritor** (21, University of Nebraska)
  for the first word in a sealed scroll — **ΠΟΡΦΥΡΑΣ, *porphyras*, "purple"**. **5 February 2024**, the
  **$700,000 Grand Prize** to **Nader, Farritor and Schilliger** for about **5%** of one scroll. **May 2025**,
  the **$60,000 First Title Prize** for the title and author inside sealed **PHerc. 172**: **Philodemus, *On
  Vices***. **June 2026:** the first **complete** virtual unwrapping and reading of a rolled scroll, **PHerc.
  1667**, **22 columns**, on the **BM18 beamline at the ESRF** (arXiv:2606.29085).
https://scrollprize.org/winners · https://arxiv.org/abs/2606.29085

### D22. The focaccia fresco (2023) — a useful debunk
**Verdict: CONFIRMED.** A still life from the Regio IX excavations, **27 June 2023**: a silver tray with a
flatbread, fruit including pomegranate and possibly dates, something like *moretum* (herb-and-cheese spread),
and a cup of wine. **It is not pizza** — no tomato and no mozzarella existed in AD 79. Zuchtriegel reads it as
***xenia***, the Greek convention of the gift to a guest, described by Virgil and Philostratus.
https://archaeology.org/news/2023/06/27/230628-italy-pompeii-fresco/
**This is the cleanest way to join reading 3 to reading 4 without claiming pizza is Roman.**

**The last day, hour by hour** (Sigurdsson reconstruction, on the traditional framing): column visible ~1 p.m.;
12–15 cm of pumice an hour; ~1.5 m on the roofs by dawn; first surge and flow about **1 a.m.**; S3 about
**6:30 a.m.**; **S4 — the one that killed Pompeii — about 7:30 a.m.**; the sixth about **8 a.m.**

---

## D. Reading 4 — the Amalfi coast and Paestum

### D23. UNESCO 1997 — CONFIRMED, and the citation does not say what people think
**Verdict: CONFIRMED.** Inscribed 1997 (21st session), **World Heritage List No 830**, a *cultural* site, under
**criteria (ii), (iv) and (v)**. Primary document: the ICOMOS advisory body evaluation, September 1997,
https://whc.unesco.org/archive/advisory_body_evaluation/830.pdf (the whc HTML pages return 403 to fetchers).
**The recommendation, verbatim:**
> *"The Costiera Amalfitana is an outstanding example of a Mediterranean landscape, with exceptional cultural
> and natural scenic values resulting from its dramatic topography and historical evolution."*

**Correction of a common assumption: the citation does NOT mention terraces, lemons or walls.** The terracing
appears in the body of the dossier, not in the inscription formula. **Do not write "UNESCO praises the
terraces" as though it were the citation.**
Where terracing does appear (ICOMOS, "History and Description"):
> *"Inland the steep slopes rising from the coast are covered with terraces, revetted with drystone walling
> and used for the cultivation of citrus and other fruits, olives, vines, and vegetables of all kinds."*

**Primary figures worth having:** nominated area **11,231 ha across fifteen communes** of Salerno province;
classified as *"a **continuing cultural landscape** as defined in paragraph 39(ii) of the Operational
Guidelines."* The State Party proposed criteria i, ii, iv, v and vi; **ICOMOS cut it to ii, iv, v**, and
required that parts of the nominated area *"where the essential qualities of a cultural landscape of World
Heritage class had been irrevocably lost"* be **excluded** — and Italy accepted.
**Also in the dossier, and narratively strong — the mule tracks:** *"The higher mountain areas are noteworthy
for the characteristic mule tracks (mulattiere)… These not only served as means of communication between the
scattered villages… but also constituted an effective means of catching and channelling rainwater. They were
also much used by smugglers after the decline of the Republic of Amalfi."*

### D24. Amalfi the republic — the chronology, and "before Venice" is half wrong
**Verdict: CONFIRMED on the arc; CORRECTED on the comparison.**
- **Independence 839.** Taken and looted by Sicard of Benevento in 838; after his assassination the following
  year the town, *"which owed only token allegiance to Byzantium, declared its independence"* (ICOMOS).
  Italian sources date it to **1 September 839**.
- **Duchy from 958** (Sergius I took the ducal title).
- **Peak 9th–11th centuries.** ICOMOS: *"become a maritime trading power between the early 9th and late 11th
  centuries, when the sea power of Byzantium was in decline and a free market developed."* **Ibn Hawqal,
  writing in 977**, called it "the most prosperous Lombard city, the most noble, the most illustrious".
- **Fall:** Robert Guiscard took the city in **1073**; definitive submission to Roger II in **1131**; **Pisa
  sacked it in 1135 and again in 1137.**
**"Before Venice or Genoa amounted to anything" — DISPUTED.** Defensible for Genoa (de facto autonomy 958,
de jure 1096). **Not true of Venice**, whose autonomy accrued from **751**, with the Pactum Lotharii of
**840** and de jure independence **1143** — **Venice is older, not younger.**
**Defensible reformulation: Amalfi was the first of the Italian maritime powers to reach its height, and it
was finished as a power before Venice and Genoa reached theirs.**

### D25. What Amalfi actually traded — thin in the old text, and easily fixed
**Verdict: CONFIRMED and extended.** It was a **carrying trade**, not a spice monopoly in the Venetian sense.
- ICOMOS/State Party: *"Amalfi had a near-monopoly of trade in the Tyrrhenian Sea… selling Italian products
  (wood, iron, weapons, wine, fruit) in eastern markets and buying in return spices, perfumes, pearls,
  jewels, textiles, and carpets to sell in the west."*
- A triangular trade between North Africa and Byzantium: **salt, slaves and timber** out, **gold** from North
  Africa and **silks** from Byzantium back.
- Amalfi struck its own **tarì**, current across Mediterranean commerce until the royal mint closed in **1220**
  under Frederick II.
- **The colonies and the hospital:** quarters at **Constantinople** (the largest, with its own harbour and
  churches, administered under Amalfitan law), **Antioch, Alexandria, Jerusalem**, and the monastery of
  **Amalfion on Mount Athos**. The **Hospital of Saint John in Jerusalem** was *"established by merchants from
  the Italian city of Amalfi in the second half of the 11th century"*, attached to Santa Maria Latina — and
  from it descend the **Knights Hospitaller**. **CORRECTION: write "the second half of the eleventh century"
  or "c. 1070–1080", not a flat 1070.**
⚠️ The scholarly anchor, **A. O. Citarella, "The Relations of Amalfi with the Arab World before the
Crusades", *Speculum* 42:2 (1967)**, is paywalled and was not read — do not attribute specifics to it.

### D26. The Flavio Gioia compass — a myth, and UNESCO's own file repeats it
**Verdict: MYTH. Say so.**
*"It is also likely that Flavio Gioja did not exist at all."* The chain: **Flavio Biondo** (1392–1463) reported
the compass as an Amalfitan invention; in **1511 Giovan Battista Pio** wrote "In Amalfi, Campania, the use of
the magnet was invented, according to Flavio" — and *"later due to a misplaced comma this was narrated as
'the use of the magnet was invented by Flavio, it is said'"*, from which, over about sixty years, a person
called Flavio Gioia was born. **The statue by Alfonso Balzico went up in Amalfi in 1900**; there is a piazza
and a school named after him. https://en.wikipedia.org/wiki/Flavio_Gioja
**And the detail that makes it usable:** the **ICOMOS/State Party nomination dossier repeats the legend as
fact** — *"the nautical compass was invented in Amalfi."* A myth inside a World Heritage file.

### D27. The Tavole Amalfitane — "the maritime law of the Mediterranean" is an overstatement
**Verdict: CORRECTED.**
**What it is:** *Tabula de Amalpha*, **66 chapters — the first 21 in Latin, the remaining 45 in the
vernacular** — on disputes, freight prices, the obligations of master and crew, compensation for lost goods.
**Dating — DISPUTED.** The Latin core is dated **11th** or **11th–12th century**, the vernacular chapters
**13th** or **13th–14th**. **The original does not survive.** The witness is the **Foscarini Codex**, owned by
the Venetian doge Marco Foscarini and held in Vienna — described as a **16th-century copy** by one source and
a **17th-century copy** by another. ⚠️ **Avoid stating a manuscript date.**
**Vienna → Amalfi:** rediscovered in Vienna in **1843**, published **1844**; Austria ceded it to Italy in
**1927**; **Mussolini purchased the codex in 1929 and donated it to Amalfi**, where the Comune holds it.
**Why "the maritime law of the Mediterranean for centuries" overstates:** the code is *"a collection of
jurisprudential and customary maxims of various epochs and derivations"* rather than a promulgated code; the
historian **Paola Avallone** makes the sustainable claim — that it became **"living law", applied in courts
under Norman rule and in the Kingdom of Naples**, i.e. **regionally**; and the ***Consolato del Mare*
superseded it** as the general maritime law of the Mediterranean, while the **Rolls of Oléron** were a
separate Atlantic product.
https://www.finestresullarte.info/en/works-and-artists/the-tabula-de-amalpha-at-the-origins-of-mediterranean-maritime-law
**Safe wording: the oldest surviving Italian maritime statute, law in the courts of the Norman and Neapolitan
south, and an influence on later codes.**

### D28. The storm of 1343 — the event is real, the causality is wrong
**Verdict: CORRECTED — this is the clearest factual error in reading 4.**
**Amalfi's power was already gone**: Norman conquest **1073**, definitive submission **1131**, Pisan sacks
**1135** and **1137** — **two centuries before the storm.** The most a source will say is that 1343 was a
*belated* blow: *"a powerful earthquake destroyed the port of Amalfi, administering a belated coup de grâce
to the once proud maritime power."*
**The event — 25 November 1343**: a seismic/marine event that destroyed shipping in the Bay of Naples and
wrecked ports along the coast. **It was not a landslide onto the town.** Modern interpretation: **Rosi et al.
(2019)** attribute it to a **submarine landslide possibly greater than 1 km³ caused by flank collapse of
Stromboli**. https://www.nature.com/articles/s41598-018-37050-3 ·
https://en.wikipedia.org/wiki/1343_Naples_tsunami
**Petrarch — his presence CONFIRMED, his words UNVERIFIABLE.** He was in Naples on a papal mission and
described the night in **Familiares V.5, to Cardinal Giovanni Colonna, written 26 November 1343**. ⚠️ **Every
route to the text failed** (Academia and ResearchGate 403, both Wikisources 404). The rendering in
circulation — *"a thousand mountains of waves not black nor blue, as they are usual to be in other storms but
very white…"* — and the detail that the only ship in the harbour to survive was **the one carrying 400
convicts** come from a hobby blog. **Check Aldo S. Bernardo (trans.), *Letters on Familiar Matters*, Italica
Press, before printing any quotation.** https://www.jstor.org/stable/j.ctt1tqxw4s
**Population figures ("70,000 before, 6,000 after") — DO NOT USE.** Hobby-blog only.

### D29. The dry-stone walls — "hundreds of kilometres" has never been measured
**Verdict: UNVERIFIABLE as written, and the honest version is better.**
**No coast-wide published total exists.** The only **measured** figure: **approximately 163 km of terraces
within a 23 km² study area** in the Amalfi–Ravello sector — Budetta, Forte, Pirone, Santo, Tartaglia and
Urciuoli, *Sustainable Mediterranean Construction*, Special Issue 2021, article SI-2021-06-202.
https://www.sustainablemediterraneanconstruction.eu/en/edizioni-speciali/si-2021-06/si-2021-06-202/
Their finding: *"in the condition of lack of water infiltration from the rainfalls behind the wall, the whole
terrace-wall system is stable, on the contrary it fails."*
**The crowd-mapping project Open MAPTER (ACARBIO) exists precisely because no total is known** — its stated
aim is to get *"an idea about the quantity of dry stone walls and their maintenance state"*.
https://www.acarbio.org/en/open-mapter-map-the-terraces/
**Use "163 km of terracing measured in a single 23 km² stretch behind Amalfi and Ravello" — a real, citable
number, better than a round one. Do not extrapolate.**
**Wall heights:** *"ranging from three to seven meters in height"* (FAO).
**Terminology:** the walls are **macere** (also *murecine*); the level growing surface the **piazzola**; the
cisterns **peschiere**; the lime coping closing the top of a wall the **cottimo**. Built from stone taken on
site, *"starting from the largest and heaviest at the bottom to the smallest at the top"*, laid dry.
⚠️ **These terms reached this pass through a search summary of Ribera & Cucco (2019); the PDF host has a
broken TLS certificate. Verify before printing "macere" as the single correct word.**
**Abandonment and landslide risk — REAL and well published.** The consensus: *"The cessation of maintenance of
dry stone terraces due to the crisis of traditional agriculture was identified as the main cause of failure
during heavy rainfall events"*, producing debris slips and cascading terrace landslides.
https://ascelibrary.org/doi/abs/10.1061/(ASCE)HZ.2153-5515.0000473 · https://pubmed.ncbi.nlm.nih.gov/24026942/
FAO adds the human side: *"Many groves have been abandoned or sold off over the past fifty years."*

### D30. The lemon — the IGP is "Limone Costa d'Amalfi", and the description needs fixing
**Verdict: CONFIRMED on identity; CORRECTED on "thick-skinned".**
**"Limone Costa d'Amalfi" is the IGP; "Sfusato Amalfitano" is the cultivar** (an ecotype of *Femminello*).
Registered by **Commission Regulation (EC) No 1356/2001 of 4 July 2001**, OJ **L 182, 5.7.2001, pp. 25–26**;
specification amended by **Reg. (EU) 2017/1523**, single document at **OJ C 137, 29.4.2017, p. 4**.
https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001R1356
**From the amended single document — use these numbers:**
- Cultivar: **exclusively "Sfusato Amalfitano"**.
- Shape: *"elongated oval shape with a large pointed umbo"*.
- **Minimum weight 100 g.**
- **Juice yield not less than 25%**; **acidity not less than 3.5 g/100 ml**; *"very juicy"*; *"low number of
  pips"*; flavedo *"rich in essential oils"*.
- **Trellises of wooden posts, preferably chestnut, minimum height 180 cm**; protective coverings
  (**"pagliarelle"**) *"to ensure gradual fruit ripening"*.
- **Maximum density 1,200 trees per hectare; maximum yield 35 tonnes per hectare.**
- Area: **the whole comune of Atrani plus parts of twelve others — thirteen comuni.**
**"Long, thick-skinned, with a sweet fragrant zest and little bitterness" — PARTLY CORRECTED.** "Long" ✓
(spindle-shaped, hence *sfusato*); "fragrant zest" ✓. **But the disciplinare says the rind is of *medium*
thickness** (*"di medio spessore"*) — **what is thick is the albedo, the pith**. And **"little bitterness"
must not be confused with low acidity: the IGP requires HIGH acidity, ≥3.5 g/100 ml.**
**Safest: "long, with a thick sweet pith and a rind heavy in oil, and juice the rules require to be both
plentiful (≥25%) and sharp (≥3.5 g/100 ml)."**
**Sorrento, for contrast:** **"Limone di Sorrento" IGP**, cultivar **Massese / "Ovale di Sorrento"**, EU Reg.
(EC) 2446/2000; **minimum weight 85 g**; **elliptical**; zone the peninsula **plus Capri and Anacapri**.
**The clean contrast: Amalfi = spindle, ≥100 g, thirteen comuni of the Costiera; Sorrento = oval, ≥85 g, the
peninsula and Capri.**
**Scale:** about **400 hectares, about 8,000 tonnes a year** — but certified-IGP volume is a fraction:
**183 tonnes of fresh fruit and 53,000 bottles of limoncello certified in 2003**. **Most Costiera lemons never
carry the mark**, which is a better fact than the tonnage.
**New and citable:** FAO designated the Amalfi Coast lemon-and-terrace system a **Globally Important
Agricultural Heritage System in August 2025**. https://www.fao.org/giahs/giahs-around-the-world/italy-amalfi-coast-system/en

### D31. "Carried up and down the steps in baskets because nothing else can reach them" — romanticised
**Verdict: CORRECTED. Both practices coexist; "nothing else can reach them" is wrong.**
- **Mechanised haulage is normal on established farms.** The **Aceto farm at Amalfi has used an electric
  pulley/cable system installed in 1968** to bring crates down the mountain.
  https://www.ouredibleitaly.com/2021/02/05/amalfi-lemon-with-farmer-salvatore-aceto/
- **Monorails and cable cars exist but are not a solved problem:** *"Despite numerous attempts to introduce
  innovative transport methods like cable cars and monorails, a satisfactory resolution remains elusive."*
- **Hand carrying persists.** FAO, 2025: farmers *"still harvest by hand and haul baskets weighing up to 70
  kilos along mountain paths hundreds of metres above the sea."*
- **Historically** women carried about **57 kg** on shoulders and head, several trips a day.
**Correct formulation: the crates come down on cable pulleys where a grower could afford to install one — the
Acetos put theirs in in 1968 — and on people's backs where they could not, still, in baskets of up to 70 kg.**

### D32. The pergola and the pagliarelle — documented, and the mechanism is the point
**Verdict: CONFIRMED, and it is in the EU specification itself.**
The trees are trained flat under **trellises of wooden posts, preferably chestnut, at least 180 cm high**.
Farmers *"lash lemon branches to its poles, keeping fruit within reach while preventing the heavy loads from
snapping limbs"* (FAO). Cover: historically **pagliarelle**, woven straw mats; today mostly **black shade
netting**.
**The function is the important part, and it is official:** the coverings protect from weather **and "ensure
gradual fruit ripening"** (single document). Regione Campania states that they *"serve both to shelter the
fruits from meteorological adversity and to delay the ripening of the fruits"*, and that thanks to them
**production extends through July and August and sometimes to September**.
**This is what distinguishes it from open-field citrus: the cover deliberately staggers and delays ripening so
the harvest runs into summer, when Sicilian field lemons are finished.** That is a chain of consequence
ending in a price and a market.
**Harvest:** the *passata* begins in **February** and runs to **August or September**; the IGP's best fruit
**March to late July**. Blossom in May; the tree flowers repeatedly, hence multiple picks.

### D33. Colatura di alici di Cetara — DOP 2020, and the garum descent is not documented
**Verdict: CONFIRMED on the DOP; DISPUTED on garum.**
**DOP status:** application published **OJ C 208, 22.6.2020**; registration published **OJ L 349, 21 October
2020**. Reported as **the first PDO granted to a processed sea product.**
**From the published specification:**
- *"Anchovies (Engraulis encrasicolus) caught in the area of the sea off the coast of the province of Salerno;
  medium or large grain sea salt."*
- Fishing depth **50–200 m**, **maximum 12 nautical miles** from shore.
- Processing takes place *"at processing sites in the specific area"* — **all comuni of the province of
  Salerno, not Cetara alone.**
- Containers: **"wooden barrels and terzigni"**; alternating layers of anchovies and salt, hand-laid, then a
  **weighted disc**.
- Chemistry: **salt ≥20 g/100 g; protein ≥8 g/100 g; fat 0.1–3 g/100 g; pH 5–7.**
- Sold only in **clear glass, 50–1,000 ml**.
- **The specification contains no mention of garum and no mention of monks.** Its "link with the geographical
  area" rests on *"the specific conditions in the fishing area… as well as the skill involved in preparing the
  anchovies and preparing the traditional containers."* It does record the **Christmas Eve** pasta.
**The season — two versions, both usable if labelled.** The DOP text and the consortium say **"late March to
mid-July"**; the traditional frame, cited to the Campania regional disciplinare, is **25 March (the
Annunciation) to 22 July (St Mary Magdalene)**. **Write the saints' days as the traditional calendar, not as
the EU rule.**
**The process, in the detail the DOP text omits:** heads and guts removed at the quay; **24 hours under
abundant salt**; layered into chestnut or oak **terzigni**, closed with a wooden disc and progressively
**lighter** weights; the liquid pressed out is drawn into **large glass jars left in direct sun for four to
five months**; around **November it is poured back into the barrel and allowed to seep down through the layers
of fish and out through a hole**; filtered through **linen**; finished in **early December** — in time for
Christmas Eve. ⚠️ **The "4 to 36 months" in circulation is NOT in the disciplinare**, which gives no minimum
or maximum ageing; *invecchiata* is only an optional label claim.
**The garum descent — DISPUTED, and this is the claim most likely to be told straight and shouldn't be.**
- **For:** Cetara's name plausibly from Roman ***cetariae***, the fish-salting works Pliny describes.
- **Against, on technical grounds — Sally Grainger's argument:** because the heads and viscera are removed,
  **the digestive enzymes go with them, true proteolysis does not occur**, and the result has **much lower
  protein and higher salinity** than Roman garum; and colatura as a marketed bottled product is recent.
  ⚠️ Reached through a secondary summary — **check Grainger, *The Story of Garum* (Routledge, 2021).**
- **The monastic link is folk tradition.** No primary documentation; no scholarly source names the monastery.
  **"San Pietro a Tuczolo" could not be verified at all.**
**Verdict for the prose: the Romans made garum here, the name Cetara probably remembers their salting works,
and the modern sauce was described in print by 1807 (P. Niccola Columella Onorati). The centuries in between
are tradition, not record.**

### D34. Scialatielli — modern, and the usual attribution is wrong
**Verdict: CONFIRMED as modern; CORRECTED on the inventor's location; DISPUTED on the year.**
The inventor is **chef Enrico Cosentino** — and the sources do **not** put him at "Ristorante Rio, Vietri sul
Mare". In his own words: *"The scialatielli are my invention. I am originally from the Amalfi coast, but
Sorrento by adoption."*
https://www.lucianopignataro.it/a/a-tavola-con-lo-scialatiello-di-enrico-cosentino-tra-tradizione-e-innovazione-2/249681/
**Date — 1976 vs 1978.** Pignataro's interview: first made **April 1976 at San Giovanni in Fiore (Cosenza,
Calabria)**. Ravello Notizie: presented in Calabria in 1976 as a land pasta, then made famous **in 1978 at the
restaurant *La Caravella* in Amalfi**, paired with seafood. English Wikipedia's "late 1960s" is poorly sourced
and should be ignored. **Write "created in the mid-1970s, made famous in 1978".**
**The prize — CONFIRMED and datable:** **1978, the "Entremetier of the year" prize** at a national culinary
competition in Campania. Cosentino: *"The recognition was presented by former minister Giacinto Bosco, at that
time judge at the Court of Justice of the European Communities."*
**The dough, and why it matters:** *"flour, whole egg, grated cheese, evo oil and finely chopped basil, salt,
pepper, milk"*. **Milk and cheese in the dough, and herbs in the dough rather than the sauce, are exactly what
a 1970s restaurant kitchen does and a nineteenth-century peasant kitchen does not** — that is the argument for
its modernity, and it is worth making, because it is almost always told as ancient. Cut into short, wide,
irregular strips; Arthur Schwartz called it *"a cross between pasta and gnocchi"*. Registered as a Campanian
**PAT**; **no trademark found**. Etymology: Neapolitan *scialare* (to enjoy) + *tiella* (pan).
**A gift of a date:** Cosentino is to receive the title **"Magister di civiltà Amalfitana" on 1 September
2026**, at the XXVI Capodanno Bizantino in Amalfi — **the fiftieth anniversary of the pasta**, and 1 September
is the date of Amalfi's 839 independence, the Byzantine New Year.

### D35. Delizia al limone — CONFIRMED, with a correction and a lovely detail
**Verdict: CONFIRMED; CORRECTED on the town.**
**Carmine Marzuillo**, pastry chef **of Sorrento** — not Vico Equense — created it in **1978**.
https://it.wikipedia.org/wiki/Delizia_al_limone ·
https://www.vesuviolive.it/ultime-notizie/363037-sorrento-morto-carmine-marzuillo-delizia-al-limone/
Pignataro places the creation at the **Hotel Parco dei Principi in Sorrento**; presented at the **1978 national
chefs' convention**, where it won a **gold medal presented by the national president Luigi Carnacina**;
recognised by the **Accademia Maestri Pasticceri Italiani in 1996**. He kept a workshop on Viale Nizza and
**died 8 November 2020**.
**Structure — CONFIRMED, with one lovely correction:** pan di Spagna dome, syrup, crema al limone, glaze —
**but the original used STREGA, not limoncello.** The limoncello came later, and the original was finished
with a **cherry** on top. Pignataro also notes **the cake helped relaunch the Sorrento lemon at a moment when
cultivation was falling** — a chain of consequence running from a pastry back to a terrace.
https://www.lucianopignataro.it/a/la-delizia-al-limone-la-storia-dellinvenzione-di-carmine-marzuillo-e-la-ricetta/207203/

### D36. Limoncello — a twentieth-century commercial drink
**Verdict: CONFIRMED as modern.** **Massimo Canale registered the trademark "Limoncello" in 1988** and began
artisanal then commercial production on Capri. The family story (via Federvini): **Maria Antonia Farace** kept
a small guesthouse with a lemon and orange garden on Capri at the **beginning of the 20th century**; her
grandson opened a bar in Anacapri near Axel Munthe's house; her great-grandson registered the mark.
https://www.italymagazine.com/dual-language/so-who-invented-limoncello-and-what-makes-it-so-special
**The strongest sceptical line, attributable:** the British journalist **Lee Marshall** argues limoncello's
*"history is short and is not rooted in agrarian tradition"*, that no documentation predates the twentieth
century, that *"outside of a handful of families and social circles, few drank it before 1988"*, and that
limoncello as a commercial phenomenon is **"the same age as the Internet"**.
**The rival claims — all legend:** Sorrento's great families, Amalfi's "older origins", fishermen drinking it
against the cold, monks between prayers. **No documentation for any of them.**

### D37. Paestum — CONFIRMED, and the survival has a cause worth using
**Verdict: CONFIRMED.**
- **Temple of Hera I, the "Basilica": c. 550 BC**, **54 × 24 m**, unusually **nine columns** on the fronts.
- **Temple of Athena, "Ceres": c. 510–500 BC**, Doric outside with **Ionic** inner columns.
- **Temple of Hera II, "of Neptune": c. 460 BC**, the best preserved.
- The city: Greek name **Poseidonia**, founded **c. 600 BC by colonists from Sybaris**; Lucanian attack c. 410
  BC; **Latin colony in 273 BC**, renamed **Paestum**.
**The Tomb of the Diver — CONFIRMED, and the discovery detail is excellent.** Found by the archaeologist
**Mario Napoli on 3 June 1968**, about **1.5 km south** of the city. **Five limestone slabs**: symposium scenes
on the four walls, and on the lid *"a young man diving into a curling and waving stream of water."* Dated
**c. 500–475 BC**. It is *"the only example of Greek painting with figured scenes dating from the
Orientalizing, Archaic, or Classical periods to survive in its entirety."*
**Why the temples are still standing — the causal link to make:** Paestum declined through *"changes in local
land drainage patterns, leading to swampy malarial conditions"*, was abandoned in the Middle Ages (bishopric
suppressed **1100**), and *"only came to wide notice again in the eighteenth century"* — **Piranesi's
etchings, 1778**. **The malaria that emptied the plain is why three Greek temples survived.**

### D38. The buffalo plain — CONFIRMED in outline, CORRECTED in the Fascist detail
**Verdict: CORRECTED.** The Piana del Sele was *"un tempo malarico e paludoso"*, and reclamation ran *"agli
inizi dell'Ottocento e fino agli anni '50"* — **from the early 1800s through to the 1950s, not a single
1930s campaign**; *"Importante… fu l'introduzione dell'uso del DDT da parte degli statunitensi nei primi anni
'40"*; and *"La costruzione della diga di Persano, insieme alla realizzazione di numerosi canali
d'irrigazione, hanno quindi favorito lo sviluppo dell'agricoltura e dell'allevamento bovino, in particolare
dei bufali."* https://it.wikipedia.org/wiki/Piana_del_Sele
An earlier Bourbon phase is documented: **Ferdinand II founded the agricultural colony of Battipaglia on 23
August 1858**, settling families displaced by the 1857 Basilicata earthquake.
⚠️ **"The Fascist-era bonifica of the Sele plain in the 1920s–30s" could not be sourced.** The 1928 law
launching the *bonifica integrale* nationally is well documented, but **do not tie the Sele plain to it.**
**The closing link for the reading:** **Mozzarella di bufala campana DOP, 55,718 tonnes certified in 2024,
about 40% exported, Italy's fourth DOP by value, over half a billion euros** — the temples and the buffalo in
one landscape, which is the old text's closing image, now with a number behind it.

### D39. Extra material with narrative force
- **The Aceto farm at Amalfi, a whole scene in numbers:** **1,300 stone steps** to the highest terrace;
  **2,600 lemon trees**; grafted trees **280 years old**; **electric pulley installed 1968**; father **Luigi
  Aceto, aged 86**, still climbing. The Acetos founded the IGP consortium. ⚠️ Sources differ on the family's
  arrival (1825 vs 1835).
- **A quotable grower on the climate**, FAO 2025: **Gino Amatruda**, third-generation lemon farmer in the
  **Valle delle Ferriere**: *"When I was young, it was normal to have a gentle rain most summer afternoons.
  Now it comes all at once — or not at all."* And: *"Whole families used to live off lemons. Now it is so
  difficult. Not many young people want to continue."*
  https://www.fao.org/newsroom/story/the-amalfi-lemon-and-its-layered-resilient-landscape/en
- **The other lemons of the coast**, beyond the Sfusato: Zagara Bianca, Verdello, Cedro Profumato d'Amalfi,
  Ponziro, Limone Gigante.
- **Amalfi's paper**, an industry the water and the trade made possible: the mills of the Valle dei Mulini,
  running water for the hammers, cotton from the North African trade; the **Museo della Carta** is in a
  medieval mill.
- **The wine, if a glass is wanted:** **Costa d'Amalfi DOC, created August 1995**, subzones **Furore, Ravello,
  Tramonti**; Tintore at Tramonti on ungrafted vines. ⚠️ The "300 years old" vine age is from a wine wiki
  only — and **reading 2 has already spent the Costa d'Amalfi terraces**, so this is probably out of scope.

---

## E. Candidate openings, ranked

Every one of these is a person, a document or a scene, with a chain of consequence. Legends are flagged.

1. **The industrialist who tried to export pizza, and failed (F20).** Serao, 1884: a Neapolitan businessman
   opens a proper pizzeria outside the city — copper pans gleaming, the oven always lit, every kind
   available — and *"la pizza, tolta al suo ambiente napoletano, pareva una stonatura e rappresentava una
   indigestione."* **Chain:** the dish would not travel → so what eventually travelled was the method, not the
   thing → so UNESCO in 2017 listed **the art of the pizzaiuolo, not the pizza** → and the men who carry it,
   about three thousand of them, are still in Naples. **The best opening for reading 3.** A named primary
   source, a scene, a failure, and it lands exactly on the reading's real subject. Not a legend.

2. **Germany objects to the pizza (F3).** A member state files a formal objection to the Neapolitan pizza
   specification, arguing that a rule permitting only Italian flour *"puts German wheat flour at a
   disadvantage"*; on **24 February 2009** an agreement is notified to the Commission and the flour clause is
   deleted. Poland objects too, that the name is not specific at all; no agreement is reached and the
   Commission has to decide. **Chain:** the rules are written down → but they were negotiated, not handed
   down → so the specification defines less than people think → and to this day, because it was registered
   **without reservation of the name**, anyone at all may call a pizza "pizza napoletana". A document, two
   named antagonists, a deadline, and a genuine surprise. Not a legend.

3. **The pomegranates (D1).** The argument about when Vesuvius erupted is an argument about food: pomegranates
   at Oplontis, chestnuts and walnuts and dried figs, braziers lit, heavy wool on the dead, and wine jars
   closed only after ten days of open fermentation — the harvest had been brought in. **Chain:** the
   manuscripts say 24 August → the kitchens and the cellars say autumn → in 2018 a charcoal scrawl seemed to
   settle it at 17 October → three days later the Parco's own palaeographer read the same words as "in the
   oil pantry", the charcoal carries no year, and experiment showed such writing survives a year unaltered →
   so the most recent volcanology declines to name a day at all. **The best opening for reading 4**, because
   it is a food argument, it is honest, and it ends on a dispute rather than a date. Must be staged as
   disputed — which is the whole point of it.

4. **Nicias, insulted on a bar wall (D14).** December 2020, Regio V: a counter with its paintings intact, a
   Nereid on a seahorse, two ducks hanging by their feet, a dog on a lead — and scratched on the frame around
   the dog, **NICIA CINAEDE CACATOR**. In the jars, duck, pig, goat, tuna and snails cooked together; in a
   wine jar, **crushed fava beans**, which Apicius says were used to bleach and alter wine. **Chain:** a
   takeaway counter for people whose rooms had no kitchen → serving cooked dishes, not raw stock → and
   doctoring the wine, exactly as the cookbook says → which is as close as anyone gets to a Roman lunch. A
   named person, an insult, a time of day. Not a legend.

5. **Celer, slave of Quintus Granius Verus (D16).** A carbonised loaf from Herculaneum, scored into eight
   wedges and stamped before baking with the name of the man who owned the man who made it. **Chain:** bread
   was not baked at home, because the poor had no oven → it came from commercial bakeries → whose labour the
   2023 Regio IX find makes plain: barred windows, no door to the street, and semicircular grooves cut into
   the basalt floor for blindfolded donkeys → and the stamp on the loaf is a property mark. ⚠️ **The ending —
   that Celer appears afterwards as a freedman — must be checked against Pagano (2000) before it is used**,
   and the discovery year must not be printed (1748 vs 1930).

6. **A boy with a tin tray on his head (F20).** Serao, 1884: pizza *"tagliata in tanti settori da un soldo"*,
   carried through the alleys on *"un grande scudo convesso di stagno"* balanced on a boy's head, with slices
   **at two centesimi for schoolchildren**. **Chain:** pizza was priced for people with almost nothing → so it
   was sold by the wedge and eaten walking → which is why the shape that survives is one that folds → and the
   fold is now written into European law, which requires the pizza to be *"easily foldable into four"*. A
   scene, a price, a primary source, and a joke at the end. Not a legend.

7. **Luigi Aceto's 1,300 steps (D31, D39).** A lemon farm above Amalfi: 1,300 stone steps to the top terrace,
   2,600 trees, some grafted stock 280 years old, and **an electric cable pulley installed in 1968** because
   the alternative was a 57-kilo basket on a person's back. **Chain:** the terraces cannot take a vehicle →
   so either you install a cable or you carry → and where nobody could afford either, the groves went out of
   use → *"many groves have been abandoned or sold off over the past fifty years"* → and abandoned terraces
   are the documented cause of the landslides. Corrects the old text's romance in the act of opening on it.

8. **Gino Amatruda on the rain (D39).** A third-generation grower in the Valle delle Ferriere: *"When I was
   young, it was normal to have a gentle rain most summer afternoons. Now it comes all at once — or not at
   all."* **Chain:** the whole system is built to hold water and release it slowly — the walls, the cisterns,
   even the mule tracks, which the UNESCO dossier says were built to channel rainwater → rain that arrives
   all at once defeats it → the walls fail where they are no longer maintained → *"not many young people want
   to continue."* A named person, a present tense, a mechanism.

9. **The letter of 11 June 1889 (F11).** One sheet of paper, signed Galli, saying only that the three kinds of
   pizza sent up to the queen *"vennero trovate buonissime"* — no mozzarella, no basil, no flag, no pizza
   named for anybody. **Chain:** the letter is real and hangs on a wall in Naples → what it says is much less
   than what is claimed for it → and Nowak has argued the signature does not match Galli's of 1891, the form
   is wrong for royal correspondence, and it is addressed to a surname no Italian man of the period would
   have used → while every ingredient of a margherita was already on Neapolitan pizzas in 1858. ⚠️ **MUST be
   staged as disputed**, and the old text's framing ("the letter exists; historians doubt the rest") must be
   inverted: **its existence is not what is in doubt.**

10. **Rectina's message (D3).** A fleet commander at Misenum orders a light vessel to get closer to a strange
    cloud — a scientific errand — and then a note arrives from a woman named Rectina *"begging him to save her
    from her perilous position"*, and he launches the quadriremes instead. **Chain:** an observation becomes a
    rescue → the rescue reaches Stabiae, not Pompeii → he dies there, at the villa of Pomponianus → and the
    only account of it is written twenty-seven years later by his seventeen-year-old nephew, who stayed at
    home with his mother and a volume of Livy, and who did not see any of it. Corrects three old-text
    framings while telling a story.

11. **Fifty years of a pasta, on the Byzantine New Year (D34).** On **1 September 2026** the chef **Enrico
    Cosentino** is made *Magister di civiltà Amalfitana* at Amalfi — half a century after he first made
    scialatielli, in **April 1976**, and not on the coast at all but at San Giovanni in Fiore in Calabria.
    **Chain:** a pasta everyone assumes is ancient is younger than the package holiday → its dough gives it
    away, with milk, grated cheese and basil worked in, which is a restaurant's idea and not a peasant's →
    it won a prize in 1978 and was fixed to Amalfi by a restaurant, *La Caravella* → and that is how a
    regional tradition gets made, in living memory, on a menu. Useful precisely because it debunks while it
    opens. Not a legend, but the *ancient* version is one.

---

## F. Old-text errors

Quoting the old wording. **R3** = reading 3, **R4** = reading 4. Items marked **[also in]** are repeated
elsewhere in the repo and must be patched together.

| # | Old wording | Correction |
|---|---|---|
| 1 | R3: "dough left to rise **at least eight hours**" | STG: **two hours**, then dough balls 180–250 g, then **four to six hours** — 6–8 in two stages. "At least eight (max 24)" is the **AVPN** rulebook, not the STG. **[also in `recipes/campania.js` 18/21; `campania.no.js` 134]** |
| 2 | R3: "a wood-fired **dome** oven at about **485 °C**" | The regulation puts **485 °C on the cooking floor, ~430 °C at the dome**; AVPN's 2022 rulebook says the opposite. State the floor figure or flag the disagreement. **[also in `campania.js` 209 heroCaption; `quiz.js` 979; `recipes/campania.js` 14/15/18/21; `campania.no.js` 103, 134]** |
| 3 | R3: "soft wheat flour, water, salt and **yeast** only" | The STG requires **brewer's yeast** specifically (3 g), and **names no flour type** — the type restriction was deleted in 2009 to settle **Germany's** objection. Salt **is** specified: 50–55 g per litre of water. |
| 4 | R3: "the EU's Traditional Speciality Guaranteed status of 2010 **define[s]** pizza napoletana" | It was **registered without reservation of the name** — anyone may still call a pizza "pizza napoletana". Only the logo and the claim are protected. |
| 5 | R3: "**Marinara** … and the older of the two" | Asserted by the regulation (1734 vs 1796–1810) **with no source given**. Write "the plainer, and probably the older". **[also in `recipes/campania.js` 20]** |
| 6 | R3: "**The letter of thanks from the royal household exists**; historians doubt the rest" | Inverts the dispute. A letter exists and hangs at Brandi; **its authenticity is precisely what is disputed** (signature, seal, handwritten form, the surname "Esposito Brandi", no press in 1889). |
| 7 | R3: "Naples has around **8,000 pizzerias**" | A **2016 publicity figure** from the Napoli Pizza Village organisers. Registry data implies ~2,500 for the city. Use UNESCO's **~3,000 pizzaiuoli** instead. |
| 8 | R3: "**Da Michele, opened in 1870**" | 1870 is the **Condurro family's start in the trade**; **Michele opened the pizzeria in 1906**; present premises from **1930**. ("Only marinara and margherita" is correct.) |
| 9 | R3: "**Pizza fritta** … was the wartime pizza" | Fried risen dough is in print in Naples by **1837** (Cavalcanti), fried dough by **1588**. The war made it the pizza people could afford; it did not invent it. |
| 10 | R3: "**San Marzano** … are the DOP tomato for pizza" (implying the spec requires it) | The STG requires only *"peeled tomatoes and/or small fresh tomatoes"*. San Marzano, Corbarino and piennolo appear **only in the AVPN rulebook, as options** — which also permits a Roma-type tomato. |
| 11 | R3: "Water buffalo have been kept … **since at least the twelfth century**" | Defensible only as the earliest **documentary horizon**, and those documents (Farfa 1119–25; Angevin, 13th c.) are **Lazio and the Salerno area**, not Caserta herds. The Capua pilgrims' cheese has **no shelfmark and does not mention buffalo milk**. |
| 12 | R3: "kept in its own whey at room temperature, **never in the fridge**" | The Consorzio's own decalogue says it *"si può mangiare anche dopo tre o quattro giorni, riponendola in frigo con tutto il suo liquido"*, and to re-temper to 18–20 °C before eating. It is a rule about **serving**, not storage. **[also in `campania.no.js` 135]** |
| 13 | R3: "Buffalo milk has roughly **twice the fat**, which is why the cheese tastes as it does" | The number holds (DOP minimum 7.2% vs ~3.6–3.9%), but **fat alone is the wrong explanation**: casein and colloidal calcium also rise, and those govern curd firmness, yield and stretch. **[also in `quiz.js` 981/983]** |
| 14 | R3: "by 1800 had **eighty** pasta workshops" | **No source gives eighty.** About **seventy at the start of the century**, **more than a hundred by the 1850s**, neither from a census. **[also in `recipes/campania.js` 250/253]** |
| 15 | R3: "**Genovese**, which despite its name is Neapolitan" | Correct, but every explanation of the name is undocumented — Bracale: *"non ci sono notizie sicure"*. The only hard early text is the *Liber de coquina*, where **the pasta, not the sauce**, is called Genoese. |
| 16 | R3: "**babà**, … brought by French chefs in the eighteenth century" | The Leszczyński story and the "Ali Baba" etymology are **legend**; the route to Naples via Maria Carolina's *monsù* is **inference, not evidence**. |
| 17 | R3: "**pastiera**, the Easter tart of wheat berries, ricotta and orange flower water" | The earliest printed recipe (**Latini, 1692–94**) has **Parmesan, pepper and musked rose water**. The convent origin, the Partenope legend and the Ceres symbolism are undocumented. |
| 18 | R4: "a column … **twenty kilometres** into the sky and **held it there**" | The column **rose**: **14–32 km** (Carey & Sigurdsson), **27 km early, later 33 km** (Sigurdsson et al.). The ~18-hour duration is right. |
| 19 | R4: "**probably in late October**" | Overstated as fact. "24 October" is **not a manuscript reading**; the 2018 charcoal scrawl was re-read by the Parco's own palaeographer three days later, carries no year, and its durability premise has been experimentally refuted. Current volcanology declines to name a day. **Write "in the autumn of AD 79".** |
| 20 | R4: "Pliny the Younger … wrote the only eyewitness account" | True, but written **c. AD 106–107, twenty-seven years later, to Tacitus, who asked for it**; he was **seventeen**, stayed at Misenum, and **did not see his uncle die**. |
| 21 | R4: "his uncle … died **leading a rescue by sea**" | It began as **observation** and became a rescue when **Rectina's** message arrived. He died **at Stabiae, at the villa of Pomponianus**. |
| 22 | R4: "killing **everyone still alive** in Pompeii" | Rhetorically fine, but **394 of the 1,044 recovered dead were already killed in the pumice fall**, 90% by collapsing roofs; **650 died in the surge**. |
| 23 | R4: "surges of gas and rock at **several hundred degrees**" | Sound for **Herculaneum (555–495 °C)**; **contested at Pompeii** (250–300 °C vs 115 °C over 17 minutes). Write "killed within minutes" and name no mechanism. |
| 24 | R4: "Bread was baked in **communal ovens**" | **Wrong.** Commercial bakeries, ***pistrina***, more than thirty of them, with donkey-turned basalt mills. The poor had **no oven**, which is the point. |
| 25 | R4: "stamped with **the baker's mark**" | The surviving stamp names **an owner and his slave** (*Celeris Q. Grani Veri ser.*), not a bakery brand. |
| 26 | R4: "Vesuvius has erupted **more than fifty times** since" | **Forty-seven** recorded eruptions after AD 79. Write "nearly fifty". |
| 27 | R4: "Pompeii had around **eighty** thermopolia" | CONFIRMED, and it is **Osanna's own figure** — so it can be stated flatly. (The *category* is contested by Ellis, but the number is attributable.) **[also in `quiz.js` 1001]** |
| 28 | R4: "**Amalfi** … an independent maritime republic **before Venice or Genoa amounted to anything**" | Defensible for Genoa; **not for Venice**, which is older (autonomy from 751, Pactum Lotharii 840). Correct claim: Amalfi **peaked first** and was finished before the others began. |
| 29 | R4: "its **Tavole Amalfitane** were the maritime law of the Mediterranean for centuries" | Overstatement. The oldest surviving **Italian** maritime statute and **living law in Norman and Neapolitan courts**; the ***Consolato del Mare* superseded it** as the Mediterranean's general maritime law. No original survives. |
| 30 | R4: "The town was largely destroyed by a **storm and landslide in 1343** and **never recovered its power**" | **Causality wrong.** Power was lost in **1073–1131**, commerce broken by the **Pisan sacks of 1135 and 1137** — two centuries earlier. And it was a **marine inundation**, now attributed to a **submarine landslide from a flank collapse of Stromboli**, not a landslide onto the town. **[also in `campania.no.js` 165]** |
| 31 | R4: "dry stone walls that run for **hundreds of kilometres** in total" | **Never measured.** The only measured figure is **~163 km of terracing in a 23 km² study area** behind Amalfi and Ravello. Do not extrapolate. |
| 32 | R4: "the **Sfusato Amalfitano**, long, **thick-skinned**, … and **little bitterness**" | The IGP is **"Limone Costa d'Amalfi"**; Sfusato is the cultivar. The disciplinare says the **rind is of medium thickness** (the *pith* is thick), and requires **high acidity, ≥3.5 g/100 ml** and **≥25% juice**. **[also in `campania.no.js` 173]** |
| 33 | R4: "carried up and down the steps in baskets **because nothing else can reach them**" | Romanticised. **Cable pulleys are normal** — the Acetos installed an electric one in **1968**. Hand-hauling persists, in baskets **up to 70 kg**. Both, not one. |
| 34 | R4: "a **UNESCO World Heritage site since 1997**" | CONFIRMED (No 830, criteria ii/iv/v) — but the **citation does not mention terraces, lemons or walls**. Do not attribute the terrace praise to the citation. |
| 35 | R4: "three Greek temples … stand almost intact **among the buffalo farms**" | CONFIRMED, but the plain was drained **from the early 1800s to the 1950s**, with **DDT in the early 1940s** and the **Persano dam** — **not** a Fascist-era 1930s bonifica. |

---

## G. Unguarded claims

Claims the old text states flatly that must be attributed, hedged or staged as disputed in the rewrite.

1. **The Margherita legend in every part** — the visit, the three pizzas, the naming, the tricolour (F11).
2. **"Marinara … the older of the two"**, and its 1734 date (F10).
3. **Port'Alba as the world's oldest pizzeria**, 1830 or 1738 (F12).
4. **"Pizza a otto"** — a remembered custom, sourced to a 1973 popular history and a 1954 film; **not in
   Serao, not in Dickens** (F19).
5. **Pizza a portafoglio's origin** (1738 / Serao) — only the fold itself is documented, in the regulation (F18).
6. **Tomatoes "thought poisonous"** — the documented objections were status and humoral digestion (F13).
7. **Buffalo arriving with the Longobards, the Arabs or the Crusaders**, and **the monks of Capua** feeding
   pilgrims *mozza* — no shelfmark, and it does not say buffalo milk (F21).
8. **Gragnano's sea breeze meeting the mountain air**, and the **maestrale** — the registered spec supports
   only that streets and building heights were laid out to channel **wind**; "maestrale" has **no source at
   all** (F27).
9. **Ferdinand II's privilege of 12 July 1845** — two dates in circulation (F27).
10. **The genovese's name**, in all six versions (F29).
11. **The "no cheese with clams" rule** — a general convention, not a documented rule for the dish (F30).
12. **Sfogliatella at Santa Rosa, 1681, and Suor Brigida** — the Soprintendenza itself offers two accounts and
    cites unnamed documents; **Pintauro's own branding says 1785, contradicting the 1818 story** (F32).
13. **Babà: Leszczyński, the rum, "Ali Baba", and the route to Naples** (F33).
14. **Pastiera: Partenope, San Gregorio Armeno, the Ceres symbolism** — and the "seven strips" rule is a **2016
    invention** (F34).
15. **Caffè sospeso as an unbroken tradition** — reported obsolete in 2008; revived 2008–2010 (F35).
16. **Parmigiana as Campanian** — PAT-listed in four regions; the *parmiciana*/shutter etymology is
    best-supported but unproven (F36).
17. **The AD 79 date as "probably late October"** (D1).
18. **The mechanism of death at Pompeii**, and **the vitrified brain at Herculaneum** — both live disputes (D5, D6).
19. **Pompeii's population of eleven thousand** — an estimate on a thin base; attach no scholar's name (D7).
20. **"Deliberately left" unexcavated** — true as practice, but no Parco statement in those words (D11).
21. **The Herculaneum loaf's discovery year** (1748 vs 1930), and **Celer's survival as a freedman** (D16).
22. **Pompeii as a garum exporter** — Scaurus was a regional producer; the prestige trade was Spanish (D18).
23. **The compass invented at Amalfi by Flavio Gioia** — a myth born of a misplaced comma, repeated in
    UNESCO's own dossier (D26).
24. **Colatura di alici as a surviving Roman garum**, and **the monks of Cetara** — the specification mentions
    neither; Grainger's technical objection cuts against descent (D33).
25. **Scialatielli as traditional**, and the "Ristorante Rio, Vietri sul Mare" attribution — **created
    mid-1970s by Enrico Cosentino**, made famous 1978 (D34).
26. **Limoncello's antiquity** — the one hard date is the **1988 trademark** (D36).
27. **Petrarch's words on the 1343 storm** — the letter is real; the quotation in circulation is from a hobby
    blog (D28).
28. **Amalfi's population figures** — uncited or hobby-blog; print no number (D28).
29. **Tintore vines "300 years old" at Tramonti** — wine-wiki only (D39).

---

## H. Claims I could not check, and sources that refused

- **H1. Whether "Pizza Napoletana" is now registered *with* reservation of the name.** Italy applied on 29
  December 2015 and the procedure was published 18 May 2016; **the implementing act was not found.** The UK
  mirror lists it as "Registered" without stating reservation status. **Check eAmbrosia before writing
  anything about name protection.** The session's WebSearch budget was exhausted at this point.
- **H2. Zachary Nowak's article itself** — 403 at Taylor & Francis, Academia.edu and ResearchGate. Every Nowak
  detail in F11 is **secondary reporting** and must be framed as "has argued".
- **H3. The 1889 royal visit's dates** — only weakly-sourced Italian popular articles (21 May, Capodimonte).
- **H4. The 1880 Geneva Gazette / Washington Post report** of Queen Margherita and thirty-five pizzas — a
  pizza-tour blog; the newspaper was not seen.
- **H5. An English-language nineteenth-century traveller's description of pizza** — none found. Fucini (1878)
  does not mention it. Dickens: nothing.
- **H6. Antonio Mattozzi, *Una storia napoletana*** (Slow Food, 2009) — the archival study of every Neapolitan
  pizzaiolo from 1807, which would settle F12. **Not consulted; worth acquiring.**
- **H7. Any primary reference for the San Lorenzo in Capua document** — archive, shelfmark or edition. Nobody
  cites one.
- **H8. Any archival evidence for the genovese's name**, in any of its versions.
- **H9. Official food-safety guidance** (EFSA or the Ministero della Salute) on mozzarella storage. Everything
  found is the Consorzio's decalogue or producer advice.
- **H10. Publication details for De Filippo's "'O rraù"** — the 1947 date and the Einaudi collection are
  widely repeated but unconfirmed. The text and the 1959 play are solid.
- **H11. The 1836 Agnoletti manual** as the babà's first Italian printing — the name is garbled to
  "Angeletti" in the sources carrying it, and the date matches none of Agnoletti's known manuals.
- **H12. A Treccani entry for *friariello*** — the lemma does not exist; the two etymologies remain
  unadjudicated. No Slow Food Presidio found.
- **H13. A census or primary count of Gragnano's pastifici** for any year.
- **H14. Buffalo-milk cheese yield** in kg per 100 kg milk vs cow — Addeo et al. was 403-blocked.
- **H15. Doronzo et al. (2022)** in full, and the Comment/Reply exchange about it (ScienceDirect 403).
- **H16. A single authoritative figure for Pompeii's total burial depth** including all surge units. The fall
  deposit is 2.8–2.9 m max and the S4 surge ~3 cm; the "4–6 m" in circulation is unsourced.
- **H17. A scholarly census of Pompeii's bakeries** — "about 35" is popular-source only; Mayeske's and
  Monteix's counts were not reached.
- **H18. Ellis's actual outlet counts** (the *Internet Archaeology* sub-pages 404'd) — only his methodological
  critique is verified.
- **H19. The Cardo V sewer excavation dates (2005–06)** and Mark Robinson's own site reports.
- **H20. Cassius Dio**, as a check on the "only eyewitness account" claim.
- **H21. *Garum castum*** (ritual/kosher garum) at Pompeii — budget ran out; **do not use it.**
- **H22. Petrarch's *Familiares* V.5 in a scholarly translation** — Academia and ResearchGate 403, both
  Wikisources 404. **Check Bernardo, Italica Press.**
- **H23. A coast-wide measurement of the Amalfi dry-stone walls** — it does not appear to exist in published
  form, which is itself the finding.
- **H24. The local terrace terminology at first hand** (*macere*, *piazzola*, *peschiere*, *cottimo*) — the
  Ribera & Cucco PDF host has a broken TLS certificate.
- **H25. The 1954 Salerno flood's 500 mm/24 h figure** at first hand.
- **H26. The Fascist-era bonifica of the Sele plain specifically** — the Italian account spreads reclamation
  across the 1800s–1950s and credits DDT and the Persano dam.
- **H27. Citarella's argument** on Amalfi's Arab trade (paywalled), and the academic paper arguing colatura's
  descent from garum (403).
- **H28. "Bertelli 1901"** as the specific Flavio Gioia debunking — the debunking is solid, that attribution
  is not.
- **H29. The 1113 bull *Pie postulatio voluntatis*** — the page read cites **1112**; check before dating the
  Hospitallers' recognition.
- **H30. Sally Grainger, *The Story of Garum*** (Routledge, 2021) — her objection reached this pass only
  through a secondary summary.
- **Hosts that refused automated fetching throughout:** ScienceDirect, PubMed, Cell, Britannica, Forbes, CNN,
  academia.edu, ResearchGate, whc.unesco.org (HTML), eAmbrosia.
