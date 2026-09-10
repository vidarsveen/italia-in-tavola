// Lazio recipes. Bilingual in one file: the quantities are written once so English and Norwegian
// cannot drift apart. Contract: docs/recipe-format.md. Checked by tools/recipecheck.py. Never narrated.
// Everything here follows the Lazio food reading (content/lazio.js, lesson 3): guanciale, Pecorino
// Romano and black pepper are the three constants, the sauce is an emulsion of rendered fat, starchy
// water and cheese, and the cheese goes in off the heat.
window.RECIPES = window.RECIPES || {};
window.RECIPES['IT-62'] = [

{
  id:'gricia', dish:'Gricia', course:'primo', lesson:3, serves:4, time:{prep:10, cook:20},
  hero:'gricia', tags:['pasta','guanciale'],
  title:{en:'Gricia', no:'Gricia'},
  blurb:{en:'The mother of the four Roman pastas: guanciale, pecorino and pepper, and nothing else. Learn this one and the other three follow.',
         no:'Moren til de fire romerske pastarettene: guanciale, pecorino og pepper, og ingenting annet. Lærer du denne, følger de tre andre av seg selv.'},
  heroCaption:{en:'Gricia, sometimes called amatriciana bianca: the same dish as it was before tomatoes arrived.',
               no:'Gricia kalles iblant amatriciana bianca. Det er den samme retten, slik den var før tomatene kom.'},
  wines:['Frascati Superiore'],
  headnote:{
    en:'<p>Gricia is the oldest of the four Roman pastas and the one to cook first, because everything the other three need is already in it: guanciale rendered slowly, sheep’s cheese, cracked pepper, and enough starchy water to hold them together. Take the pork away and you have cacio e pepe. Add tomato and you have amatriciana. Add egg and you have carbonara.</p>'
      + '<p>Where the name comes from is argued over. Some derive it from <strong>Grisciano</strong>, a hamlet a few kilometres from Amatrice; others from the <em>gricio</em>, the old Roman word for the bread and grocery sellers who came down from the Swiss Grisons. It is also called <em>amatriciana bianca</em>, white amatriciana, which is the most useful description of all: the same dish as it was before tomatoes reached the mountains.</p>'
      + '<p>There is nothing to hide behind here. Three ingredients and one technique, and the whole thing stands or falls on two things — how slowly the fat comes out of the guanciale, and how cool the pan is when the cheese goes in.</p>',
    no:'<p>Gricia er den eldste av de fire romerske pastarettene, og den man bør lage først, for alt de tre andre trenger, ligger allerede i den: guanciale som er smeltet sakte, saueost, knust pepper og nok stivelsesrikt vann til å holde det sammen. Tar du bort svinekjøttet, har du cacio e pepe. Tilsetter du tomat, har du amatriciana. Tilsetter du egg, har du carbonara.</p>'
      + '<p>Hvor navnet kommer fra, krangles det om. Noen utleder det fra <strong>Grisciano</strong>, en grend noen kilometer fra Amatrice, andre fra <em>gricio</em>, det gamle romerske ordet for brød- og kolonialhandlerne som kom ned fra sveitsiske Graubünden. Den kalles også <em>amatriciana bianca</em>, hvit amatriciana, og det er den mest opplysende beskrivelsen: den samme retten slik den var før tomatene nådde fjellene.</p>'
      + '<p>Her er det ingenting å gjemme seg bak. Tre ingredienser og én teknikk, og alt avhenger av to ting — hvor sakte fettet kommer ut av guancialen, og hvor kald pannen er når osten går i.</p>'},
  ingredients:[{ group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'rigatoni or mezze maniche', no:'rigatoni eller mezze maniche'}, note:{en:'spaghetti does the job too', no:'spaghetti gjør også nytten'}},
    {q:200, u:'g', n:{en:'guanciale', no:'guanciale'}, note:{en:'cured pork jowl, bought in one piece and cut at home', no:'speket svinekjake, kjøpt i ett stykke og skåret hjemme'}},
    {q:80,  u:'g', n:{en:'Pecorino Romano', no:'Pecorino Romano'}, note:{en:'finely grated, at room temperature', no:'finrevet, med romtemperatur'}},
    {u:'', n:{en:'black pepper', no:'sort pepper'}, note:{en:'whole corns, cracked coarsely, a generous amount', no:'hele korn, grovknust, rikelig'}, scale:'none'},
    {q:3, u:'l', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:15, u:'g', n:{en:'salt for the water', no:'salt i kokevannet'}, scale:'sub'},
  ]}],
  steps:[
    {en:'Bring the water to the boil and salt it lightly. Pecorino Romano is salted hard and seasons the dish on its own, so use less salt than you would for a tomato sauce.',
     no:'Kok opp vannet og salt det lett. Pecorino Romano er kraftig saltet og krydrer retten alene, så bruk mindre salt enn du ville gjort til en tomatsaus.'},
    {en:'Cut the guanciale into batons about 6 mm thick, leaving the fat on. It is the fat you are after; the meat is almost a garnish.',
     no:'Skjær guancialen i staver på rundt 6 mm, og la fettet sitte på. Det er fettet du er ute etter, og kjøttet er nesten bare pynt.'},
    {en:'Put the batons in a wide, dry pan while it is still cold and set it over the lowest heat you have. They should sigh rather than sizzle.',
     no:'Legg stavene i en vid, tørr panne mens den fortsatt er kald, og sett den på den svakeste varmen du har. De skal sukke, ikke frese.'},
    {en:'Let the fat render for 8 to 10 minutes, until it runs clear and the batons are golden at the edges but still soft in the middle. Lift them out with a slotted spoon and leave every drop of the fat in the pan.',
     no:'La fettet smelte ut i 8 til 10 minutter, til det er klart og stavene er gylne i kantene, men fortsatt myke i midten. Løft dem ut med hullsleiv, og la hver dråpe av fettet bli igjen i pannen.'},
    {en:'Crack the peppercorns coarsely and toast them in the warm fat for half a minute, until the kitchen smells of them.',
     no:'Knus pepperkornene grovt, og rist dem i det varme fettet i et halvt minutt, til hele kjøkkenet lukter av dem.'},
    {en:'Cook the pasta and drain it two minutes before the packet says. Keep some of the cooking water; you will need more of it than you expect.',
     no:'Kok pastaen, og hell av vannet to minutter før pakken sier. Ta vare på noe av kokevannet; du trenger mer av det enn du tror.'},
    {en:'Turn the heat to medium under the fat, add the pasta and a ladle of the water, and toss for a minute or two until the liquid thickens and coats every piece.',
     no:'Skru opp til middels varme under fettet, ha i pastaen og en øse med kokevann, og vend det i et par minutter til væsken tykner og legger seg rundt hver bit.'},
    {en:'Take the pan off the heat and let it stand for half a minute. Then add the pecorino, tossing hard, and loosen with cooking water a spoonful at a time until the sauce turns glossy and runs.',
     no:'Ta pannen av platen og la den stå et halvt minutt. Ha så i pecorinoen mens du vender kraftig, og spe med kokevann en skje om gangen til sausen blir blank og renner.'},
    {en:'Return the guanciale, toss once more and serve straight away, with more pepper on top.',
     no:'Ha guancialen tilbake, vend én gang til, og server med en gang, med mer pepper på toppen.'},
  ],
  notes:[
    {title:{en:'Start the pan cold', no:'Start med kald panne'},
     body:{en:'Guanciale is fattier than pancetta and its fat is the base of the sauce. A cold pan and low heat melt that fat out clear and sweet; a hot pan fries the outside, seals the piece and locks the rest in. Ten patient minutes here decide the dish.',
           no:'Guanciale er fetere enn pancetta, og fettet er selve grunnlaget for sausen. Kald panne og svak varme smelter fettet ut klart og søtt, mens en varm panne steker overflaten, forsegler stykket og låser resten inne. Ti tålmodige minutter her avgjør hele retten.'}},
    {title:{en:'The cheese goes in off the heat', no:'Osten skal i med kjelen av platen'},
     body:{en:'Pecorino above roughly 65 °C tightens into rubbery threads instead of going into the starchy water. Everything else can be hot; the moment the cheese arrives, the pan must be off the flame and have stood for a few seconds.',
           no:'Over omtrent 65 °C trekker pecorinoen seg sammen til gummiaktige tråder i stedet for å gå opp i det stivelsesrike vannet. Alt annet kan være varmt, men i det øyeblikket osten kommer i, må kjelen være av platen og ha stått noen sekunder.'}},
  ],
  variations:[
    {title:{en:'The shape of the pasta', no:'Pastaformen'},
     body:{en:'Rigatoni and mezze maniche are the usual Roman choice, because the ridges and the hollow hold a sauce this thin. Spaghetti is perfectly orthodox and is what most photographs of the dish show.',
           no:'Rigatoni og mezze maniche er det vanlige romerske valget, fordi rillene og hulrommet holder på en saus som er så tynn. Spaghetti er fullt ut ortodoks, og det er den de fleste bildene av retten viser.'}},
    {title:{en:'A splash of wine', no:'En skvett vin'},
     body:{en:'Some Roman cooks deglaze the rendered fat with a little dry white wine and let it evaporate before the pasta goes in. It sharpens the dish and moves it a step towards amatriciana; purists leave it out.',
           no:'Noen romerske kokker koker ut det smeltede fettet med litt tørr hvitvin og lar den fordampe før pastaen går i. Det skjerper retten og flytter den et hakk mot amatriciana, men puristene lar det være.'}},
    {title:{en:'If you cannot find guanciale', no:'Hvis du ikke får tak i guanciale'},
     body:{en:'Pancetta is the least bad substitute: belly rather than jowl, leaner and milder, so use a little more and render it just as slowly. Bacon is smoked, and smoke is not part of this dish.',
           no:'Pancetta er den minst dårlige erstatningen. Den er sideflesk og ikke kjake, magrere og mildere, så bruk litt mer og smelt fettet like sakte ut. Bacon er røkt, og røyk hører ikke hjemme i denne retten.'}},
  ],
},

{
  id:'cacio-e-pepe', dish:'Cacio e pepe', course:'primo', lesson:3, serves:4, time:{prep:5, cook:15},
  hero:'cacio', tags:['pasta','vegetarian'],
  title:{en:'Cacio e pepe', no:'Cacio e pepe'},
  blurb:{en:'Cheese and pepper, and famously easy to get wrong. The secret is starch, and keeping the pan off the heat.',
         no:'Ost og pepper, og notorisk lett å mislykkes med. Hemmeligheten er stivelse, og at kjelen må være av platen.'},
  heroCaption:{en:'When it goes right the pecorino and the pasta water form a cream without any cream.',
               no:'Når det lykkes, danner pecorinoen og pastavannet en krem uten fløte.'},
  wines:['Frascati Superiore'],
  headnote:{
    en:'<p>Two ingredients and no fat to hide behind, which is why cacio e pepe has a reputation it deserves. What binds it is not butter or cream but starch: pasta water carries enough dissolved starch to hold grated cheese in a smooth emulsion, and the less water you boil the pasta in, the more of it you have. Roman cooks use a pot that looks too small.</p>'
      + '<p>The cheese is not a detail. <strong>Pecorino Romano</strong> is sheep’s milk, salted hard and aged at least five months, sharp enough to season a dish on its own. Despite the name, most of it is now made in Sardinia, which the DOP allows alongside Lazio and the province of Grosseto. Parmigiano is cow’s milk, sweeter and softer, and it turns this into something else.</p>'
      + '<p>There are exactly two ways to fail. Too hot, and the cheese seizes into rubbery clumps. Too little water, and it stays grainy and never comes together. Everything below is arranged to keep you away from both.</p>',
    no:'<p>To ingredienser og ikke noe fett å gjemme seg bak, og derfor har cacio e pepe et rykte den fortjener. Den bindes verken av smør eller fløte, men av stivelse: pastavann inneholder nok oppløst stivelse til å holde revet ost i en jevn emulsjon, og jo mindre vann du koker pastaen i, jo mer av den får du. Romerske kokker bruker en kjele som ser altfor liten ut.</p>'
      + '<p>Osten er ingen detalj. <strong>Pecorino Romano</strong> er laget av sauemelk, kraftig saltet og lagret i minst fem måneder, skarp nok til å krydre en rett alene. Til tross for navnet lages det meste av den nå på Sardinia, som DOP-en tillater sammen med Lazio og provinsen Grosseto. Parmigiano er kumelk, søtere og mykere, og gjør dette til en annen rett.</p>'
      + '<p>Det finnes nøyaktig to måter å mislykkes på. For varmt, og osten klumper seg til gummi. For lite vann, og den forblir kornete og går aldri sammen. Alt nedenfor er lagt opp for å holde deg unna begge.</p>'},
  ingredients:[{ group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'tonnarelli', no:'tonnarelli'}, note:{en:'square-cut fresh egg spaghetti; dried spaghetti also works', no:'firkantskåret fersk eggspaghetti; tørket spaghetti går også'}},
    {q:200, u:'g', n:{en:'Pecorino Romano', no:'Pecorino Romano'}, note:{en:'grated as finely as you can, at room temperature', no:'revet så fint du klarer, med romtemperatur'}},
    {q:6,   u:'g', n:{en:'black peppercorns', no:'sorte pepperkorn'}},
    {q:2,   u:'l', n:{en:'water', no:'vann'}, note:{en:'a small pot: less water, more starch', no:'liten kjele: mindre vann, mer stivelse'}, scale:'sub'},
    {q:8,   u:'g', n:{en:'salt for the water', no:'salt i kokevannet'}, scale:'sub'},
  ]}],
  steps:[
    {en:'Grate the pecorino as finely as you can and leave it out of the fridge. Cold cheese in coarse shreds is the commonest reason the sauce goes grainy.',
     no:'Riv pecorinoen så fint du klarer, og la den stå framme. Kald ost i grove strimler er den vanligste grunnen til at sausen blir kornete.'},
    {en:'Crack the peppercorns coarsely in a mortar or with the base of a heavy pan. Ready-ground pepper has lost the oils that carry the flavour.',
     no:'Knus pepperkornene grovt i morter eller med bunnen av en tung panne. Ferdigmalt pepper har mistet oljene som bærer smaken.'},
    {en:'Boil the pasta in as little water as will just cover it, lightly salted. The less water, the more starch dissolves into it, and the starch is what binds the sauce.',
     no:'Kok pastaen i så lite vann at det akkurat dekker den, lett saltet. Jo mindre vann, desto mer stivelse løser seg i det, og stivelsen er det som binder sausen.'},
    {en:'Toast the pepper in a dry wide pan over medium heat for half a minute, until it smells. Add a ladle of the pasta water and let it bubble down to a syrupy film.',
     no:'Rist pepperen i en tørr, vid panne på middels varme i et halvt minutt, til den dufter. Ha i en øse med pastavann, og la det koke inn til en sirupsaktig hinne.'},
    {en:'In a bowl, work the grated cheese with lukewarm pasta water, a spoonful at a time, into a thick smooth paste with no lumps left. Lukewarm, not hot: hot water seizes the cheese here just as it would in the pan.',
     no:'Rør den revne osten sammen med lunkent pastavann i en bolle, en skje om gangen, til en tykk og jevn masse uten klumper. Lunkent, ikke varmt: varmt vann får osten til å klumpe seg her like lett som i pannen.'},
    {en:'Drain the pasta a minute before al dente and finish it in the peppered pan with a little more water, tossing until it is coated.',
     no:'Hell av pastaen ett minutt før den er al dente, og la den bli ferdig i pepperpannen med litt mer vann mens du vender til den er dekket.'},
    {en:'Take the pan off the heat and count to thirty. This pause is the whole recipe.',
     no:'Ta pannen av platen og tell til tretti. Denne pausen er hele oppskriften.'},
    {en:'Add the cheese paste and toss until every strand turns glossy. Loosen with cooking water whenever it tightens, and serve immediately; it stiffens on the plate.',
     no:'Ha i ostemassen og vend til hver tråd blir blank. Spe med kokevann hver gang den strammer seg, og server med en gang, for den stivner på tallerkenen.'},
  ],
  notes:[
    {title:{en:'Starch, not cream', no:'Stivelse, ikke fløte'},
     body:{en:'Pasta water from a small pot carries enough dissolved starch to hold fat and cheese in a smooth emulsion. That is the entire sauce. Cream is not a shortcut to it; it is a different dish wearing the same name.',
           no:'Pastavann fra en liten kjele inneholder nok oppløst stivelse til å holde fett og ost i en jevn emulsjon. Det er hele sausen. Fløte er ingen snarvei dit, men en annen rett med samme navn.'}},
    {title:{en:'What went wrong', no:'Hva som gikk galt'},
     body:{en:'Rubbery threads mean the pan was too hot when the cheese went in — start again with the pan off the heat for longer. Grainy and thin means too little starch: next time use a smaller pot, and meanwhile add hot pasta water a spoonful at a time and keep tossing.',
           no:'Gummiaktige tråder betyr at pannen var for varm da osten kom i; prøv igjen med pannen lenger av platen. Kornete og tynn betyr for lite stivelse: bruk en mindre kjele neste gang, og ha i mellomtiden i varmt pastavann en skje om gangen mens du fortsetter å vende.'}},
  ],
  variations:[
    {title:{en:'Tonnarelli or spaghetti', no:'Tonnarelli eller spaghetti'},
     body:{en:'Tonnarelli is the traditional shape: fresh egg pasta cut square, with a rough surface that holds the sauce. Dried spaghetti works and gives starchier water, which is a real advantage for a beginner.',
           no:'Tonnarelli er den tradisjonelle formen: fersk eggpasta skåret firkantet, med en ru overflate som holder på sausen. Tørket spaghetti fungerer og gir mer stivelsesrikt vann, noe som er en reell fordel for en nybegynner.'}},
    {title:{en:'The bowl or the pan', no:'Bollen eller pannen'},
     body:{en:'The paste made in a bowl, as here, is the safe method. Confident cooks build the emulsion straight in the pan by adding cheese and water alternately off the heat. There is less to wash up and much more to go wrong.',
           no:'Massen som røres i en bolle, slik det gjøres her, er den trygge metoden. Erfarne kokker bygger emulsjonen rett i pannen ved å ha i ost og vann annenhver gang, med pannen av platen. Det blir mindre oppvask og langt mer som kan gå galt.'}},
  ],
},

{
  id:'amatriciana', dish:'Amatriciana', course:'primo', lesson:3, serves:4, time:{prep:10, cook:30},
  hero:'amatriciana', tags:['pasta','guanciale','tomato'],
  title:{en:"Bucatini all'amatriciana", no:"Bucatini all'amatriciana"},
  blurb:{en:'Gricia with tomato in it. The town of Amatrice wrote the recipe down and left out the onion and the garlic; so does this one.',
         no:'Gricia med tomat i tillegg. Byen Amatrice skrev ned oppskriften og utelot løk og hvitløk, og det gjør denne også.'},
  heroCaption:{en:'Bucatini is the Roman shape for it; in Amatrice itself they use spaghetti.',
               no:'Bucatini er den romerske formen til retten; i selve Amatrice bruker de spaghetti.'},
  wines:['Cesanese del Piglio'],
  headnote:{
    en:'<p>Amatriciana is gricia with tomato in it, and unlike the other three it has a hometown. <strong>Amatrice</strong> sits in the north-east corner of Lazio, high in the mountains, and belonged to Abruzzo until 1927; the shepherds who made the white version carried guanciale and pecorino because both keep. Tomatoes reached the dish in the eighteenth or nineteenth century and never left.</p>'
      + '<p>The town has an official recipe, and it is short: guanciale, pecorino, tomato, a splash of dry white wine, a little chilli. It excludes onion and garlic in so many words. Roman restaurants add onion anyway and the town does not forgive them. In 2020 the European Union registered <em>Amatriciana tradizionale</em> as a Traditional Speciality Guaranteed, the first pasta sauce ever protected that way.</p>'
      + '<p>The dish carries some weight now. After the earthquake that destroyed Amatrice in 2016, restaurants across Italy and beyond put it on their menus and sent the money north. Cooking it properly is a small courtesy to a town that lost almost everything.</p>',
    no:'<p>Amatriciana er gricia med tomat i, og til forskjell fra de tre andre har den en hjemby. <strong>Amatrice</strong> ligger i det nordøstlige hjørnet av Lazio, høyt i fjellene, og tilhørte Abruzzo fram til 1927. Gjeterne som laget den hvite versjonen, bar med seg guanciale og pecorino fordi begge deler holder seg. Tomatene kom til retten på 1700- eller 1800-tallet og ble værende.</p>'
      + '<p>Byen har en offisiell oppskrift, og den er kort: guanciale, pecorino, tomat, en skvett tørr hvitvin og litt chili. Den utelukker løk og hvitløk med rene ord. Romerske restauranter har løk i likevel, og byen tilgir dem ikke. I 2020 registrerte EU <em>Amatriciana tradizionale</em> som garantert tradisjonell spesialitet, den første pastasausen som noen gang har fått den beskyttelsen.</p>'
      + '<p>Retten bærer et alvor i dag. Etter jordskjelvet som ødela Amatrice i 2016, satte restauranter over hele Italia og utenfor den på menyen og sendte pengene nordover. Å lage den riktig er en liten høflighet mot en by som mistet nesten alt.</p>'},
  ingredients:[{ group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'bucatini', no:'bucatini'}, note:{en:'or spaghetti, as in Amatrice', no:'eller spaghetti, som i Amatrice'}},
    {q:150, u:'g', n:{en:'guanciale', no:'guanciale'}, note:{en:'in batons about 1 cm', no:'i staver på rundt 1 cm'}},
    {q:400, u:'g', n:{en:'peeled plum tomatoes', no:'hermetiske plommetomater'}, note:{en:'San Marzano if you can find them; crush them with your hands', no:'San Marzano hvis du får tak i dem; mos dem med hendene'}},
    {q:50,  u:'ml', n:{en:'dry white wine', no:'tørr hvitvin'}},
    {q:1,   u:'', n:{en:'small dried chilli', no:'liten tørket chili'}, round:'half'},
    {q:80,  u:'g', n:{en:'Pecorino Romano', no:'Pecorino Romano'}, note:{en:'finely grated', no:'finrevet'}},
    {q:3,   u:'l', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:15,  u:'g', n:{en:'salt for the water', no:'salt i kokevannet'}, scale:'sub'},
  ]}],
  steps:[
    {en:'Cut the guanciale into batons about 1 cm thick — heavier than for gricia, because they have to survive a wet sauce.',
     no:'Skjær guancialen i staver på rundt 1 cm, altså grovere enn til gricia, siden de skal tåle en våt saus.'},
    {en:'Render them in a cold, dry pan over low heat for 8 to 10 minutes, until the fat runs clear and the edges colour.',
     no:'Smelt fettet ut av dem i en kald, tørr panne på svak varme i 8 til 10 minutter, til fettet er klart og kantene får farge.'},
    {en:'Pour in the wine and let it evaporate, scraping the bottom of the pan as it goes.',
     no:'Hell i vinen og la den fordampe mens du skraper bunnen av pannen.'},
    {en:'Lift the guanciale out and set it aside. Left in the sauce it goes soft and leathery, and its job is already done.',
     no:'Løft ut guancialen og sett den til side. Blir den liggende i sausen, blir den myk og seig, og jobben er allerede gjort.'},
    {en:'Crush the tomatoes into the fat with your hands, drop in the chilli whole, and simmer over low heat for about 15 minutes, until the sauce darkens and the fat separates out at the edges.',
     no:'Mos tomatene ned i fettet med hendene, legg chilien i hel, og la sausen småkoke på svak varme i omtrent 15 minutter, til den mørkner og fettet skiller seg ut i kantene.'},
    {en:'Meanwhile boil the bucatini and drain it a minute before al dente, keeping some of the water.',
     no:'Kok imens bucatinien, og hell av vannet ett minutt før den er al dente. Ta vare på noe av kokevannet.'},
    {en:'Fish out the chilli, return the guanciale to the pan, add the pasta and toss over the heat for a minute, loosening with pasta water.',
     no:'Fisk ut chilien, ha guancialen tilbake i pannen, tilsett pastaen og vend det over varmen i ett minutt mens du speer med pastavann.'},
    {en:'Take the pan off the heat and stir in half the pecorino. Serve with the rest on top.',
     no:'Ta pannen av platen og rør inn halvparten av pecorinoen. Server med resten på toppen.'},
  ],
  notes:[
    {title:{en:'No onion, no garlic', no:'Verken løk eller hvitløk'},
     body:{en:'Both are excluded by the official recipe of the comune of Amatrice, and both blur a sauce whose whole character comes from pork fat, tomato and sheep’s cheese. If you want the Roman trattoria version, soften a little onion in the fat before the tomatoes; just do not call it traditional in Amatrice.',
           no:'Begge deler er utelukket i den offisielle oppskriften fra kommunen Amatrice, og begge sløver en saus som får hele sin karakter fra svinefett, tomat og saueost. Vil du ha versjonen fra de romerske trattoriaene, kan du la litt løk mykne i fettet før tomatene, men ikke kall den tradisjonell i Amatrice.'}},
    {title:{en:'Why the guanciale comes out', no:'Hvorfor guancialen tas ut'},
     body:{en:'A quarter of an hour in a wet sauce turns crisp guanciale soft again. Its fat belongs in the sauce from the first minute; the meat itself belongs back in at the last.',
           no:'Et kvarter i en våt saus gjør sprø guanciale myk igjen. Fettet hører hjemme i sausen fra første minutt, men selve kjøttet skal først tilbake helt til slutt.'}},
  ],
  variations:[
    {title:{en:'Bucatini or spaghetti', no:'Bucatini eller spaghetti'},
     body:{en:'Bucatini, the thick hollow spaghetti, is the Roman shape and the one that splashes. Amatrice uses spaghetti, and rigatoni is common in the city too. The sauce does not mind.',
           no:'Bucatini, den tykke, hule spaghettien, er den romerske formen, og den som spruter. Amatrice bruker spaghetti, og rigatoni er også vanlig i byen. Sausen bryr seg ikke.'}},
    {title:{en:'How much chilli', no:'Hvor mye chili'},
     body:{en:'One small dried chilli, left whole and fished out, gives warmth without heat. Split it if you want the dish to bite; Amatrice would not object.',
           no:'Én liten tørket chili som legges i hel og fiskes ut, gir varme uten styrke. Del den hvis du vil at retten skal bite fra seg, og Amatrice vil ikke ha noe imot det.'}},
  ],
},

{
  id:'carbonara', dish:'Carbonara', course:'primo', lesson:3, serves:4, time:{prep:10, cook:15},
  hero:'carbonara', tags:['pasta','guanciale','egg'],
  title:{en:'Carbonara', no:'Carbonara'},
  blurb:{en:'Gricia with egg in it. The heat left in the pasta thickens the yolks into a sauce; there is no cream in it and never was.',
         no:'Gricia med egg i tillegg. Restvarmen i pastaen tykner plommene til en saus, og fløte har aldri hørt hjemme i den.'},
  heroCaption:{en:'Carbonara: egg, pecorino, guanciale and black pepper, and nothing else.',
               no:'Carbonara: egg, pecorino, guanciale og sort pepper, og ingenting annet.'},
  wines:['Frascati Superiore'],
  headnote:{
    en:'<p>Carbonara is the youngest of the four Roman pastas and the one that travelled furthest. The name points at the <em>carbonai</em>, the charcoal burners of the Apennines, and there is a pleasing story about a one-pot dish cooked over a fire in the woods. The written record does not support it. No recipe appears before the Second World War, and the most plausible account is that the dish took shape in Rome in 1944, when American rations of bacon and powdered egg met Roman pasta and pecorino. Eighty years later it is the most cooked Italian dish in the world, and the one Italians most love to see ruined abroad.</p>'
      + '<p>Mechanically it is gricia with egg. Guanciale renders into a clear, sweet fat; yolks beaten with pecorino go in off the heat, and what thickens them is nothing but the warmth still in the pasta and the pan. Get that temperature right and you have a sauce that clings and shines. Get it wrong in one direction and it stays raw and thin, in the other and it scrambles. Everything below is about staying between the two.</p>'
      + '<p>Four things are not negotiable: guanciale rather than bacon or pancetta, Pecorino Romano rather than Parmigiano, whole peppercorns cracked at the last moment, and no cream. The rest — yolks or whole eggs, spaghetti or rigatoni, how much pepper — is a matter of which Roman you ask.</p>',
    no:'<p>Carbonara er den yngste av de fire romerske pastarettene og den som har reist lengst. Navnet peker mot <em>carbonai</em>, kullbrennerne i Apenninene, og det finnes en tiltalende historie om en rett som ble laget i én gryte over bål i skogen. Kildene støtter den ikke. Ingen oppskrift dukker opp før andre verdenskrig, og den mest sannsynlige forklaringen er at retten tok form i Roma i 1944, da amerikanske rasjoner av bacon og eggepulver møtte romersk pasta og pecorino. Åtti år senere er den den italienske retten som lages oftest i verden, og den italienere ergrer seg mest over å se ødelagt i utlandet.</p>'
      + '<p>Teknisk sett er den gricia med egg. Guancialen gir fra seg et klart og søtt fett, plommene piskes med pecorino og går i med kjelen av platen, og det eneste som tykner dem, er varmen som fortsatt sitter i pastaen og pannen. Treffer du den temperaturen, får du en saus som henger og skinner. Bommer du den ene veien, blir den rå og tynn; bommer du den andre, blir den eggerøre. Alt nedenfor handler om å holde seg mellom de to.</p>'
      + '<p>Fire ting er det ikke rom for å endre: guanciale i stedet for bacon eller pancetta, Pecorino Romano i stedet for Parmigiano, hele pepperkorn som knuses i siste liten, og ingen fløte. Resten — plommer eller hele egg, spaghetti eller rigatoni, hvor mye pepper — kommer an på hvilken romer du spør.</p>'},
  ingredients:[{ group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'spaghetti', no:'spaghetti'}, note:{en:'a bronze-drawn dry pasta holds the sauce better', no:'tørket pasta som er trukket gjennom bronseformer, holder bedre på sausen'}},
    {q:150, u:'g', n:{en:'guanciale', no:'guanciale'}, note:{en:'in batons about 6 mm; buy it in one piece and cut it yourself', no:'i staver på rundt 6 mm; kjøp den i ett stykke og skjær den selv'}},
    {q:4,   u:'', n:{en:'egg yolks', no:'eggeplommer'}, round:'half'},
    {q:1,   u:'', n:{en:'whole egg', no:'helt egg'}, round:'half'},
    {q:80,  u:'g', n:{en:'Pecorino Romano', no:'Pecorino Romano'}, note:{en:'finely grated, at room temperature', no:'finrevet, med romtemperatur'}},
    {u:'', n:{en:'black pepper', no:'sort pepper'}, note:{en:'whole corns, cracked coarsely at the last moment', no:'hele korn, grovknust i siste liten'}, scale:'none'},
    {q:3,   u:'l', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:10,  u:'g', n:{en:'salt for the water', no:'salt i kokevannet'}, scale:'sub'},
  ]}],
  steps:[
    {en:'Take the eggs and the cheese out of the fridge half an hour ahead. Cold yolks meeting hot pasta is one of the two ways this dish fails.',
     no:'Ta eggene og osten ut av kjøleskapet en halvtime i forveien. Kalde plommer som møter varm pasta, er den ene av de to måtene retten mislykkes på.'},
    {en:'Cut the guanciale into batons about 6 mm thick, leaving the fat on. Put them in a wide, dry pan while it is cold and set it over the lowest heat you have.',
     no:'Skjær guancialen i staver på rundt 6 mm, og la fettet sitte på. Legg dem i en vid, tørr panne mens den er kald, og sett den på den svakeste varmen du har.'},
    {en:'Let the fat render for 8 to 10 minutes, until it runs clear and the batons are golden at the edges but still yielding in the middle. Take the pan off the heat and leave it to cool a little.',
     no:'La fettet smelte ut i 8 til 10 minutter, til det er klart og stavene er gylne i kantene, men fortsatt myke i midten. Ta pannen av platen, og la den kjølne litt.'},
    {en:'Crack the peppercorns coarsely and toast them for half a minute in a dry corner of the pan, or in a small pan of their own, until the kitchen smells of them.',
     no:'Knus pepperkornene grovt, og rist dem et halvt minutt i en tørr del av pannen eller i en liten panne for seg, til hele kjøkkenet lukter av dem.'},
    {en:'Beat the yolks and the whole egg with the pecorino and most of the pepper. Work it until it is a thick, dark, glossy cream with no lumps of cheese left in it.',
     no:'Visp plommene og det hele egget sammen med pecorinoen og mesteparten av pepperen. Jobb det til en tykk, mørk og blank krem uten klumper av ost.'},
    {en:'Boil the spaghetti in lightly salted water — the guanciale and the pecorino bring salt of their own — and drain it al dente, keeping some of the water.',
     no:'Kok spaghettien i lett saltet vann, for guancialen og pecorinoen har med seg salt selv, og hell av vannet når den er al dente. Ta vare på noe av det.'},
    {en:'Slacken the egg cream with two spoonfuls of the hot pasta water, pouring in a thin stream and stirring hard. This is the step most recipes leave out and the one that makes the difference.',
     no:'Spe eggekremen med to skjeer varmt pastavann. Hell i en tynn stråle mens du rører kraftig. Dette trinnet er det de fleste oppskrifter hopper over, og det er det som avgjør.'},
    {en:'Tip the pasta into the pan of fat, off the heat, and toss until every strand shines.',
     no:'Ha pastaen over i pannen med fettet, med pannen av platen, og vend til hver tråd skinner.'},
    {en:'Count to thirty, pour in the egg cream and toss without stopping for about a minute. The sauce goes from loose to clinging quite suddenly. If it stays thin, hold the pan over a warm ring for a few seconds at a time, never on it.',
     no:'Tell til tretti, hell i eggekremen, og vend uten å stoppe i omtrent ett minutt. Sausen går ganske brått fra løs til klebrig. Blir den værende tynn, kan du holde pannen over en varm plate noen sekunder om gangen, aldri oppå den.'},
    {en:'Loosen with pasta water until it runs off the spoon. Serve at once, with the guanciale and the last of the pepper on top; carbonara does not wait.',
     no:'Spe med pastavann til den renner av skjeen. Server med en gang, med guancialen og resten av pepperen på toppen. Carbonara venter ikke.'},
  ],
  notes:[
    {title:{en:'The temperature window', no:'Temperaturvinduet'},
     body:{en:'Egg yolk begins to set at about 65 °C and is firm by 70. The sauce has to reach the first number and not the second, which is why the pan comes off the heat, why the cream is tempered first, and why you keep tossing: moving pasta sheds heat evenly instead of cooking the egg where it touches the metal.',
           no:'Eggeplomme begynner å stivne ved rundt 65 °C og er fast ved 70. Sausen må nå det første tallet og ikke det andre, og derfor tas pannen av platen, derfor spes kremen først, og derfor fortsetter du å vende: pasta i bevegelse gir fra seg varmen jevnt i stedet for å steke egget der det ligger mot metallet.'}},
    {title:{en:'No cream, ever', no:'Aldri fløte'},
     body:{en:'The sauce is egg yolk, cheese, rendered fat and a little starchy water. In other countries cream is added to make the dish forgiving, and it is the single thing Italians most love to see done wrong.',
           no:'Sausen består av eggeplomme, ost, smeltet fett og litt stivelsesrikt vann. I utlandet tilsettes fløte for å gjøre retten lettere å lykkes med, og det er nettopp det italienere ergrer seg mest over.'}},
    {title:{en:'What went wrong', no:'Hva som gikk galt'},
     body:{en:'Grainy and yellow means the pan was too hot. Thin and pale means it was too cool, or the pasta was too dry when you drained it — add hot water and keep tossing. Greasy means too much fat and too little starchy water. Rubbery threads of cheese mean the pecorino went in before the pan had cooled.',
           no:'Kornete og gul betyr at pannen var for varm. Tynn og blek betyr at den var for kald, eller at pastaen ble for tørr da du hellte av vannet — ha i varmt vann og fortsett å vende. Fet betyr for mye fett og for lite stivelsesrikt vann. Gummiaktige tråder av ost betyr at pecorinoen kom i før pannen hadde kjølnet.'}},
  ],
  variations:[
    {title:{en:'Yolks or whole eggs', no:'Plommer eller hele egg'},
     body:{en:'Four yolks and one whole egg for four people is a middle course. All yolks give a deeper, sleeker sauce that sets faster and needs more care; whole eggs give a lighter one that is easier to save.',
           no:'Fire plommer og ett helt egg til fire personer er en mellomting. Bare plommer gir en dypere og glattere saus som stivner raskere og krever mer oppmerksomhet, mens hele egg gir en lettere saus som er lettere å redde.'}},
    {title:{en:'The shape of the pasta', no:'Pastaformen'},
     body:{en:'Spaghetti is the Roman default. Rigatoni and mezze maniche catch more of the sauce inside them and are what many trattorias in the city actually serve.',
           no:'Spaghetti er standarden i Roma. Rigatoni og mezze maniche fanger mer av sausen inni seg, og er det mange trattoriaer i byen faktisk serverer.'}},
    {title:{en:'If you cannot find guanciale', no:'Hvis du ikke får tak i guanciale'},
     body:{en:'Pancetta is the least bad substitute: it is belly rather than jowl, leaner and milder, so use a little more and render it just as slowly. Bacon is smoked, and smoke is not part of this dish.',
           no:'Pancetta er den minst dårlige erstatningen. Den er sideflesk og ikke kjake, magrere og mildere, så bruk litt mer og smelt fettet like sakte ut. Bacon er røkt, og røyk hører ikke hjemme i denne retten.'}},
  ],
},

];
