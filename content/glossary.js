/* Italia in Tavola — glossary, English. Keys must stay byte-identical to content/glossary.no.js.
   `match` lists the surface forms to look for in the English readings; the Norwegian file has its own. */
window.GLOSSARY = window.GLOSSARY || {};
Object.assign(window.GLOSSARY, {

  'DOC': {short:"Italy's main appellation tier: a fixed area, permitted grapes, yields and ageing.",
    long:"Denominazione di Origine Controllata. The rules say where the grapes may grow, which varieties are allowed, how much fruit a hectare may carry and how long the wine must age before release. There are roughly 330 of them, and the tier says nothing about quality on its own, only that somebody is checking the rules are kept.",
    match:["DOC"]},

  'DOCG': {short:"The top tier: the same rules as DOC plus a tasting panel and a numbered neck seal.",
    long:"Denominazione di Origine Controllata e Garantita. The Garantita adds an official tasting panel that can reject a wine, bottling inside the zone, and the numbered strip across the capsule. Barolo and Barbaresco were among the first in 1980; Albana di Romagna in 1987 was the first for a white, to some scorn at the time.",
    match:["DOCG"]},

  'IGT': {short:"The loose tier below DOC, created in 1992, where the Super Tuscans live.",
    long:"Indicazione Geografica Tipica names a wider region and allows grapes a DOC would forbid. It was invented so that serious wines made outside the rules, above all the Bordeaux blends of Bolgheri, no longer had to be sold as table wine. Toscana IGT and Terre Siciliane IGT are among the most used.",
    match:["IGT"]},

  'DOP': {short:"The EU term that DOC and DOCG now sit under, used for food as well as wine.",
    long:"Denominazione di Origine Protetta, the Italian form of the European Protected Designation of Origin. Since 2009 it has been the legal umbrella over DOC and DOCG, and it is the label you see on Parmigiano Reggiano, Prosciutto di Parma and traditional balsamic. Bottles usually still print the older DOC or DOCG.",
    match:["DOP"]},

  'IGP': {short:"The EU tier below DOP: a real place of origin, with looser rules.",
    long:"Indicazione Geografica Protetta, the European Protected Geographical Indication, which covers IGT wines and a great many foods. It requires that one stage of production happens in the named place, not all of it. Speck Alto Adige, Mortadella Bologna and Burrata di Andria are IGP.",
    match:["IGP"]},

  'riserva': {short:"A wine given longer ageing than the basic version of the same appellation.",
    long:"There is no single national rule: each appellation sets its own minimum. Barolo Riserva needs five years against three, Chianti Classico Riserva two against one, Franciacorta Riserva sixty months on the lees. Longer ageing is not automatically better, but it is always more expensive to make.",
    match:["riserva"]},

  'superiore': {short:"Usually a higher minimum alcohol, and often a little more ageing.",
    long:"Like riserva, it is defined appellation by appellation rather than nationally. It normally means riper grapes and a slightly higher minimum strength, sometimes with extra months of ageing attached. Valtellina Superiore and Romagna Sangiovese Superiore are typical.",
    match:["superiore"]},

  'classico': {short:"The historic heartland of a zone, usually the oldest and best part of it.",
    long:"When a successful appellation was enlarged, the original core kept the word classico. Chianti Classico, Soave Classico and Valpolicella Classico all mark the older hills against the flatter land added later. It is a statement about geography, not about ageing.",
    match:["classico"]},

  'cru': {short:"A single named vineyard. Borrowed from French; it has no legal force in Italy.",
    long:"Italian growers use the word for a hillside whose wine tastes recognisably of that spot, in the Burgundian sense. It carries no official status, which is why Barolo eventually mapped its vineyards formally instead. Etna uses contrade and Barbaresco and Barolo use MGA for the same idea.",
    match:["cru"]},

  'MGA': {short:"Barolo and Barbaresco's official map of named vineyards, in force since 2010.",
    long:"Menzioni Geografiche Aggiuntive, additional geographical mentions. Barolo was divided into 181 of them, so a label may now carry Cannubi, Brunate or Vigna Rionda as an official name rather than as a producer's claim. It is the Italian answer to the Burgundian climat.",
    match:["MGA"]},

  'Menzioni Geografiche Aggiuntive': {short:"The full name of the MGA system: Barolo's 181 mapped and named vineyards.",
    long:"Literally additional geographical mentions. Barolo's vineyards were surveyed and named officially in 2010, ending decades of informal cru names. Barbaresco has its own set. The name on the label now means a defined piece of ground rather than a marketing decision.",
    match:["Menzioni Geografiche Aggiuntive"]},

  'tannin': {short:"The drying grip in red wine, from skins, pips, stems and sometimes oak.",
    long:"Tannins bind to the proteins in saliva, which is why a young Nebbiolo or Sagrantino makes the mouth feel scoured. They soften over years in bottle and they are also what lets a wine age. Fat and protein tame them, which is why a tannic red wants meat or hard cheese.",
    match:["tannin","tannins"]},

  'acidity': {short:"The freshness that makes a wine taste alive and lets it age.",
    long:"Grapes lose acidity as they ripen, so hot places and late harvests give softer wines and altitude gives sharper ones. It is the reason Etna and Alto Adige can make delicate wines in the south and the north of a hot country, and the reason a wine with none tastes flabby.",
    match:["acidity"]},

  'appassimento': {short:"Drying picked grapes for weeks or months to concentrate sugar and flavour.",
    long:"The bunches are laid on racks or hung in airy lofts and lose a third or more of their weight before pressing. Fermented dry it gives Amarone and Sforzato di Valtellina; stopped early it gives the sweet Recioto. The technique is ancient and expensive, because much of the crop evaporates.",
    match:["appassimento"]},

  'passito': {short:"A wine, usually sweet, made from grapes dried before pressing.",
    long:"The word describes the result of appassimento. Passito di Pantelleria from dried Zibibbo and Vin Santo from grapes hung through the winter are the classic examples, and Albana passito is Romagna's. Sweetness comes from sugar the yeast could not finish, not from anything added.",
    match:["passito"]},

  'recioto': {short:"The sweet original of Valpolicella and Soave, made from dried grapes.",
    long:"Fermentation is stopped while sugar remains, so Recioto della Valpolicella stays sweet where Amarone, made from the same dried grapes, is fermented to dryness. Recioto is the older wine of the two; Amarone began as a Recioto that was left too long.",
    match:["recioto"]},

  'ripasso': {short:"Refermenting Valpolicella on the drained skins of Amarone.",
    long:"After Amarone is pressed the skins still hold sugar and colour, so a batch of ordinary Valpolicella is run over them and ferments again. The result is darker and fuller than Valpolicella and far cheaper than Amarone, which is exactly why it was invented.",
    match:["ripasso"]},

  'governo': {short:"A Tuscan trick of restarting fermentation with dried grapes or must.",
    long:"Governo all'uso toscano adds a little dried-grape must to the young wine, setting off a second fermentation that softens it and leaves a faint prickle. It was once normal in everyday Chianti, meant to be drunk within the year, and is now rare.",
    match:["governo"]},

  'metodo classico': {short:"The Champagne method: the second fermentation happens inside the bottle.",
    long:"Sugar and yeast are added, the bottle is sealed, and the carbon dioxide dissolves under pressure while the wine rests on the dead yeast for months or years. It gives finer bubbles and bread-crust flavour, and it is what Franciacorta, Trentodoc and Alta Langa are built on.",
    match:["metodo classico"]},

  'Charmat': {short:"The tank method: the second fermentation happens in a sealed steel tank.",
    long:"Also called the Martinotti method after the Italian who patented the idea first. It is faster and cheaper than bottle fermentation and keeps the grape's own aroma rather than developing yeasty depth, which is why Prosecco and most Lambrusco are made this way.",
    match:["Charmat","Martinotti"]},

  'dosage': {short:"The small measure of sugar added to sparkling wine after the yeast is removed.",
    long:"It sets the final sweetness and the scale runs from dosaggio zero through extra brut, brut and extra dry to demi-sec. Riper regions need less of it, which is why so much Franciacorta is bottled at zero or extra brut where Champagne would use more.",
    match:["dosage","dosaggio"]},

  'disgorgement': {short:"Removing the plug of dead yeast from a bottle-fermented sparkling wine.",
    long:"The sediment is worked into the neck, frozen, and fired out by the pressure; the dosage goes in and the cork follows. The date matters more than the vintage for how the wine tastes, because it starts to change from that moment, and good producers print it on the back label.",
    match:["disgorgement","disgorged","disgorging"]},

  'lees': {short:"The spent yeast a wine rests on after fermentation.",
    long:"Time on the lees, sur lie, gives body and flavours of bread, pastry and hazelnut as the yeast cells break down. It is why Franciacorta must spend at least eighteen months on them and a Riserva sixty, and why some still whites are left unracked over winter.",
    match:["lees","sur lie"]},

  'sur lie': {short:"French for on the lees: ageing a wine on its spent yeast.",
    long:"The same idea as the Italian sui lieviti. It thickens the texture and adds a savoury, bready note, and in sparkling wine it is the difference between a simple fizz and something with depth.",
    match:["sur lie","sui lieviti"]},

  'flor': {short:"A film of yeast that grows over wine in a part-filled barrel and protects it.",
    long:"The layer feeds on alcohol and shields the wine from the air, giving a dry, nutty, faintly salty character instead of straightforward oxidation. It is how sherry is made in Jerez and how Vernaccia di Oristano has been made in Sardinia for centuries, quite independently.",
    match:["flor"]},

  'solera': {short:"A stack of barrels where older wine is topped up with younger, never emptied.",
    long:"Wine is drawn from the oldest barrel and replaced from the next youngest, and so on up the chain, so every bottle holds a fraction of many years. Sardinia's Vernaccia di Oristano and Marsala both use it, as does sherry.",
    match:["solera"]},

  'alberello': {short:"The free-standing bush vine, pruned low with no wire to hold it up.",
    long:"Literally little tree. It suits hot, dry, windy places because the canopy shades its own fruit and the roots go deep, and it has to be worked by hand. Puglia's Salento, the terraces of Etna and the sunken vines of Pantelleria all use it.",
    match:["alberello"]},

  'pergola': {short:"An overhead trellis that holds the vines on a roof above the grower's head.",
    long:"The traditional training of the Adige valley and Valtellina. Lifting the canopy protects the fruit from a fierce sun and lets air move underneath in a damp climate, and the grower works standing up. Modern quality vineyards often replace it with wires to cut the crop.",
    match:["pergola"]},

  'tendone': {short:"A high, wide pergola built for volume rather than concentration.",
    long:"The vines are trained flat overhead on a large frame, giving heavy crops of dilute fruit. It covers much of Puglia and Abruzzo and is the reason those regions were long known for bulk wine; the serious growers there have gone back to alberello or wires.",
    match:["tendone"]},

  'phylloxera': {short:"The root louse from America that destroyed Europe's vineyards from the 1860s.",
    long:"It feeds on vine roots and kills the plant, and it reached almost everywhere in Europe within fifty years. The only durable answer was to graft European vines onto American roots. Sandy soils stop it moving, which is why Etna and the sands of Sulcis still have ungrafted vines a century old.",
    match:["phylloxera"]},

  'rootstock': {short:"The American root a European vine is grafted onto to survive phylloxera.",
    long:"Almost every vine in Italy is two plants joined: an American root that the louse cannot kill and a European variety above the graft that makes the wine. The choice of rootstock also controls vigour and drought tolerance. Vines on their own roots are called ungrafted, and are rare and prized.",
    match:["rootstock","ungrafted"]},

  'terroir': {short:"The sum of a place: soil, slope, altitude, weather and the habits of its growers.",
    long:"The claim behind the whole appellation system is that these together leave a mark you can taste, which is why Barolo from Serralunga differs from Barolo from La Morra. The word is French because the French argued it first, not because Italy lacks the thing.",
    match:["terroir"]},

  'marl': {short:"A soft mix of clay and limestone: the soil under the Langhe hills.",
    long:"It holds water in a dry summer and drains in a wet one, which suits a late grape like Nebbiolo. The Langhe has two kinds and the difference shows in the glass: older, compacter marl in the east gives power, younger marl in the west gives perfume.",
    match:["marl"]},

  'limestone': {short:"Calcium carbonate rock: drains well, reflects light and tends to give freshness.",
    long:"It underlies a great many of Italy's best vineyards, from the Murge in Puglia to the Colli Orientali in Friuli. Vines on it root deep to find water, which keeps them steady in a drought, and the wines usually keep more acidity than the same grape on clay.",
    match:["limestone"]},

  'tuff': {short:"Soft rock made of compacted volcanic ash. Porous, free-draining, potassium-rich.",
    long:"Tufo in Italian. It underlies the Castelli Romani outside Rome, the hills of Orvieto and the Campanian slopes around Greco di Tufo, and it gives the local whites a faintly salty, mineral edge. The same rock, quarried as pozzolana, is what made Roman concrete set under water.",
    match:["tuff","tufo","pozzolana"]},

  'moraine': {short:"The rubble a glacier leaves behind: gravel, sand and stones over bedrock.",
    long:"Poor in nutrients and quick to drain, so the vine works hard and yields stay low. The hills of Franciacorta are the moraine of the glacier that dug Lake Iseo, and that gravel is a large part of why the wine has the structure it does.",
    match:["moraine","morainic"]},

  'malolactic fermentation': {short:"A second, bacterial conversion that turns sharp malic acid into softer lactic.",
    long:"It happens after the alcoholic fermentation and takes the green-apple bite out of a wine, leaving a rounder, creamier texture. Nearly all reds go through it. Whites meant to stay crisp, such as most Verdicchio, are usually stopped from doing so.",
    match:["malolactic"]},

  'skin contact': {short:"Fermenting white grapes on their skins, as if they were red.",
    long:"White juice normally leaves the skins at once. Leaving it for days or months draws out colour, tannin and a savoury grip, which is how orange wine is made. Friuli's Collio and Oslavia are the Italian home of the revival, with Gravner and Radikon its best-known names.",
    match:["skin contact","skin-contact"]},

  'orange wine': {short:"White wine fermented on its skins, amber in colour and tannic in the mouth.",
    long:"An old method rather than a new fashion, and still made in clay amphorae by some of its Friulian revivalists. Expect dried apricot, tea and nuts, a grip closer to a red than a white, and a wine that wants food rather than an aperitivo.",
    match:["orange wine"]},

  'botrytis': {short:"Noble rot: a mould that shrivels ripe grapes and concentrates them.",
    long:"In damp autumn mornings followed by dry afternoons, Botrytis cinerea pierces the skin and lets water evaporate, leaving sugar, acid and a honeyed, apricot flavour. It is welcome only when the grapes are already ripe and healthy; otherwise it is simply rot.",
    match:["botrytis","noble rot","muffa nobile"]},

  'frizzante': {short:"Lightly sparkling: a gentle prickle rather than a mousse.",
    long:"Bottled at roughly one to two and a half atmospheres, against three or more for a fully sparkling wine, so the bubble is soft and fades in the glass. It is the traditional form of Lambrusco, and of the cloudy farmhouse wines refermented in the bottle.",
    match:["frizzante"]},

  'spumante': {short:"Fully sparkling, at three atmospheres or more, whether made in tank or bottle.",
    long:"The word describes the pressure, not the method or the quality: Prosecco, Franciacorta and cheap sweet fizz are all spumante. Franciacorta is legally allowed to leave the word off its label altogether, on the grounds that everyone knows.",
    match:["spumante"]},

  'vendemmia': {short:"The harvest, and by extension the vintage year on a label.",
    long:"The date matters because Italy runs from the Alps to Africa: Sicily and Puglia may pick in August while Nebbiolo in the Langhe waits until the last weeks of October and the fog has already come.",
    match:["vendemmia"]},

  'uvaggio': {short:"The mix of grape varieties that go into a wine.",
    long:"Most Italian appellations set a minimum for the main grape and allow named others up to a ceiling, so Chianti Classico must be at least 80% Sangiovese and Etna Rosso at least 80% Nerello Mascalese. Blending in the vineyard, rather than the cellar, is called a field blend.",
    match:["uvaggio"]},

  'field blend': {short:"Several varieties planted together in one vineyard and picked at the same time.",
    long:"The older way of planting, before growers separated varieties into blocks. Etna's oldest terraces still carry red and white vines in the same row, so the blend is decided by what was planted a century ago rather than by the winemaker.",
    match:["field blend"]},

  'consorzio': {short:"The producers' consortium that polices an appellation and promotes it.",
    long:"It writes the rule book with the ministry, runs the tasting panels, owns the trademark and chases imitators. Chianti Classico's black rooster, the Franciacorta name and the fire-brand on a wheel of Parmigiano Reggiano are all consortium marks.",
    match:["consorzio","consortium"]},

  'abboccato': {short:"Gently sweet: more than dry, far less than a dessert wine.",
    long:"The Italian sweetness ladder runs secco, abboccato, amabile, dolce. Orvieto was historically abboccato, sometimes because botrytis had settled on the grapes in the cellars cut into the tufo, and only became mostly dry in the last century.",
    match:["abboccato"]},

  'secco': {short:"Dry: the yeast has eaten essentially all the sugar.",
    long:"Worth looking for on a label where the same name covers several styles. Dry Lambrusco is labelled secco, and it is a different drink from the sweet version that made the wine's reputation abroad in the 1970s.",
    match:["secco"]}

});
