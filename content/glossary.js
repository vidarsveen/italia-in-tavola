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

  'fraschetta': {short:"A Roman grower's tavern, marked by a leafy branch hung over the door.",
    long:"The branch is the frasca, usually laurel, and hanging it out meant there was new wine to sell. Nearly all the fraschette belonged to the growers themselves, so the man who made the wine also owned the room you drank it in. There was no kitchen: customers brought their own food from home, and the people who did so were called fagottari, the bundle-people.",
    match:["fraschetta","fraschette","frasca"]},

  'fojetta': {short:"The half-litre jug that Roman wine was sold by, one rung on a ladder of measures.",
    long:"Rome measured wine by name rather than by volume: a barzilai was two litres, a tubo one, a fojetta a half, a quartino a quarter, a chierichetto a fifth, down to the sciacquadenti, a tooth-rinse, at a twentieth. Pope Sixtus V regulated the glasses in 1588 to stop innkeepers shaving the level, marking the correct height with a line called the capello, the hair. Under that law a foglietta held 0.4557 litres; on the street it was a half.",
    match:["fojetta","foglietta","quartino","barzilai"]},

  'quinto quarto': {short:"The fifth quarter: what is left of a carcass after the four are sold.",
    long:"A carcass divides into four quarters, and the remainder is the head, the tail, the feet and the offal. It is the raw material of Testaccio's cooking, around Rome's old slaughterhouse, and of coda alla vaccinara, trippa alla romana and pajata. Romans say the slaughterhouse workers were paid partly in it, though no wage agreement or guild rule records the practice.",
    match:["quinto quarto","fifth quarter"]},

  'guanciale': {short:"Cured pig's cheek, cut from the throat, with far more fat than lean.",
    long:"It is salted and hung to dry for at least thirty days under the Amatrice rules, usually two or three months, with pepper or chilli on the cut face. What distinguishes it from pancetta is the cut and the proportion rather than the time: pancetta is belly, and Pancetta Piacentina actually matures longer. The fat is the point, because it renders into a clear, sweet, almost nutty liquid that is the base of gricia, amatriciana and carbonara.",
    match:["guanciale"]},

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
    match:["secco"]},

  'demijohn': {short:"A big glass bottle in a wicker or plastic jacket, holding up to 54 litres, once the normal way to buy wine in bulk.",
    long:"Before bottling became universal, families and trattorie bought wine from the grower by the demijohn, a fat glass balloon in a wicker cage that holds anything from a few litres up to 54. It was decanted into bottles at home or straight into the jug on the table. In Italian it is the damigiana, and a wine drunk from the demijohn means a wine sold in bulk and never bottled, which is how much of Romagna's Sangiovese was sold until the 1990s.",
    match:["demijohn","demijohns"]},

  'battitore': {short:"The man who tests every wheel of Parmigiano at twelve months by tapping it with a small hammer.",
    long:"Literally the beater. He walks the shelves of the ageing store, taps each wheel all over and listens for the hollows and cracks that mean the cheese has not formed properly. A wheel that passes is fire-branded with the consortium's oval mark; one that fails has its rind scored off and is sold as plain table cheese. It is the oldest kind of quality control there is: one person, one tool, one wheel at a time.",
    match:["battitore"]},

  'sfoglina': {short:"A woman who rolls egg pasta by hand into the sheet, the sfoglia, that Bologna cuts its pasta from.",
    long:"The sfoglia is flour and eggs only, one egg to a hundred grams of flour, kneaded and then rolled out with a pin a metre long, the mattarello, until it covers the board and the grain of the wood shows through. A good sfoglina makes a sheet a metre across in about twenty minutes. Tagliatelle, tortellini and lasagne are all cut from it, and the trade is still taught, at Casa Artusi among other places.",
    match:["sfoglina","sfogline","sfoglia"]},

  'spungone': {short:"The yellow, shell-filled sandstone under Bertinoro in Romagna, which gives its Sangiovese structure and a salty edge.",
    long:"A local name for a soft sandstone made of compacted shells, laid down when the Adriatic covered these hills. It drains well and holds little water, so the vines work harder, and growers in Bertinoro credit it with the firm, faintly saline character of their Riserva wines. Soil names like this are what a sub-zone on a Romagna label is really telling you.",
    match:["spungone"]},

  'batteria': {short:"The row of five or more barrels of decreasing size in which traditional balsamic vinegar ages, in an attic.",
    long:"Each barrel is a different wood, oak, chestnut, cherry, mulberry, ash or juniper, and each is smaller than the last. Every year the smallest gives up a little vinegar for bottling and is topped up from the next one along, and so on down the line, so young cooked must enters at one end and vinegar decades old leaves the other. The attic matters: summer heat drives the fermentation and winter cold stops it. Families in Modena keep a batteria of their own and give one to a daughter when she marries.",
    match:["batteria","batterie"]},

  'lampredotto': {short:"Florence's street food: the cow's fourth stomach, simmered for hours and served in a bun dipped in the broth.",
    long:"The abomasum, the fourth stomach of the cow, simmered with tomato and celery until it is tender, chopped, piled into a bun that has been dipped in the cooking broth, and dressed with green sauce and chilli oil. It is sold from carts around the markets, eaten standing up from mid-morning, and by every class of Florentine. It belongs to the same logic as Rome's fifth quarter: the poor ate what the rich would not, and made it into something the rich now queue for.",
    match:["lampredotto"]},

  'galestro': {short:"The crumbly marl of the Chianti Classico hills, which breaks into flakes.",
    long:"A soft rock of clay and marl that breaks into flakes and gravel in the hand. It drains fast and holds little water, so vines on it stay small and their grapes concentrated, and growers in Chianti Classico link it with perfumed, finely built wines. It shares the hills with alberese, the harder limestone, and many vineyards have both.",
    match:["galestro"]},

  'alberese': {short:"The hard, pale limestone of the Chianti hills, often found beside galestro.",
    long:"A compact, whitish limestone that breaks up into stones rather than flakes. It drains well, and growers expect more body and firmness from vines on it than from vines on galestro.",
    match:["alberese"]},

  'fiasco': {short:"The round-bottomed Chianti flask in a straw jacket, which cannot stand up without it.",
    long:"Cheap blown glass came out round at the bottom, so the flask was wrapped in dried marsh grass called sala, which gave it a base and protected it on the road. For much of the twentieth century it made Chianti the most recognised wine in the world, and then, as the wine inside declined, the emblem of cheap Italian red. The plural is fiaschi, and English borrowed its word fiasco, a total failure, from the Italian phrase far fiasco.",
    match:["fiasco","fiaschi"]},

  'Gran Selezione': {short:"Chianti Classico's top tier since 2014: estate-grown grapes and at least 30 months' ageing.",
    long:"It sits above the everyday Annata and the Riserva. The grapes must come from the producer's own vineyards, the wine must age for at least 30 months, and from 2021 it must be at least 90 per cent Sangiovese. A Gran Selezione may also name one of the zone's eleven villages, the Unità Geografiche Aggiuntive, on its label.",
    match:["Gran Selezione"]},

  'vino da tavola': {short:"Table wine: Italy's lowest category, where the first Super Tuscans had to be sold.",
    long:"The category was meant for plain wine sold in bulk. In the 1970s Tuscany's most ambitious wines ended up there too, because the DOC rules had no room for Cabernet, or for Chianti made without white grapes. Sassicaia and Tignanello both went out as vino da tavola, and Sassicaia still sold for more than Barolo. IGT was created in 1992 to give such wines a name, and since the European wine reform of 2009 the lowest tier has been labelled simply vino.",
    match:["vino da tavola"]},

  'a piede franco': {short:"On its own roots: a vine that was never grafted onto American rootstock.",
    long:"Italian for 'on a free foot'. After phylloxera almost every European vine had to be grafted onto an American root that the louse cannot kill. The exceptions survive only where the louse cannot live, in sand, as on Etna, or in ground too cold for its life cycle, as at Morgex and La Salle under Mont Blanc. Such vines can be very old, and growers value them for it.",
    match:["a piede franco"]},

  'alpage': {short:"A high summer pasture in the Alps, where the herds graze and the cheese is made on the spot.",
    long:"The French word, used in Valle d'Aosta; in Italian it is alpeggio. In summer the cows are taken up from the valley to the high meadows, and the milk is made into cheese up there rather than carried down. Fontina made at the alpage is prized because it tastes of the flowers and grasses the cows have been eating.",
    match:["alpage","alpeggio"]},

  'botte': {short:"A large wooden cask, often of old Slavonian oak, holding thousands of litres.",
    long:"The plural is botti. Because the cask is big and old, the wine inside touches little wood for its volume and takes almost no oak flavour; it ages slowly and stays pale and austere. Barolo's traditionalists age their wine for years in botti, which is the heart of the argument with the barrique.",
    match:["botti","botte"]},

  'barrique': {short:"A small oak barrel of about 225 litres, usually French and often new.",
    long:"Borrowed from Bordeaux. A small barrel gives the wine much more contact with the wood, so it softens faster and takes on flavours of vanilla, toast and spice. In the Langhe of the 1980s and 1990s it became the badge of the modernists who wanted Barolo that could be drunk young.",
    match:["barriques","barrique"]},

  'trifolau': {short:"A truffle hunter, in Piedmontese.",
    long:"He goes into the woods of the Langhe, the Roero and the Monferrato with a trained dog, traditionally at night, and keeps his places secret. Since 1985 Italian law has required a dog; pigs, which also find truffles, tear up the ground.",
    match:["trifolau"]},

  'preboggion': {short:"A mix of wild herbs and greens, in Ligurian dialect.",
    long:"It is gathered on the hills in spring and is never the same twice. Borage, wild chicory, dandelion, burnet, chervil, nettle and chard can all be in it. It fills pansoti, vegetable pies and frittatas.",
    match:["preboggion"]},

  'sciamadda': {short:"A Genoese shop with a wood-fired oven, selling farinata and pies.",
    long:"The name comes from the Genoese word for a blaze. Since at least the eighteenth century the sciamadde have sold farinata, vegetable pies, panissa and fried salt cod to eat on the spot.",
    match:["sciamadda","sciamadde"]},

  'caruggi': {short:"The narrow alleys of Genoa's old town, in Genoese.",
    long:"The houses almost touch overhead and most of the alleys are too narrow for a car. Few historic centres in Europe are as densely lived in.",
    match:["caruggi"]},

  'stockfish': {short:"Cod dried hard in the open air, without salt.",
    long:"Italy's stockfish, stoccafisso, is Norwegian, and Italy buys more than seven tenths of what Norway exports. It is not salt cod, which is salted before it is dried and is called baccalà in most of Italy. In Venice, though, baccalà means stockfish.",
    match:["stockfish","stoccafisso"]},

  'mondina': {short:"A woman who weeded the flooded rice fields of northern Italy by hand.",
    long:"Every spring, until machines and herbicides ended the work in the 1960s, women came from Emilia, the Veneto and Lombardy to the paddies of Vercelli, Novara and Pavia for about forty days. They worked barefoot and bent double in the water, and part of their pay was rice. At Vercelli in 1906 they won an eight-hour day.",
    match:["mondine","mondina"]},

  'marcita': {short:"A meadow kept under a thin sheet of running water so that the grass grows through the winter.",
    long:"The Cistercians of Chiaravalle, south of Milan, perfected the method. The best marcite were mown eight or nine times a year, four or five of them in winter, and the cattle had fresh grass from late February. It is part of why the Lombard plain had so much milk.",
    match:["marcite","marcita"]},

  'fruttaio': {short:"An airy loft where grapes are laid out to dry.",
    long:"In the Valtellina the bunches for Sforzato lie there in small crates or on racks until December and lose a third or more of their weight. The Valpolicella uses the same word for the lofts where the grapes for Amarone dry.",
    match:["fruttai","fruttaio"]},

  'mantecatura': {short:"The last step of a risotto: cold butter and grated cheese beaten in off the heat.",
    long:"It makes the rice creamy and loose enough to move in a wave when the plate is tilted, which Milan calls all'onda.",
    match:["mantecatura"]},

  'Buschenschank': {short:"A farm tavern allowed to serve only the wine the farm presses itself.",
    long:"In South Tyrol the name is protected by provincial law. The farmer is grower, cellar master and innkeeper at once, and hangs a Buschen, a bunch of twigs, over the door when the tavern opens, traditionally at the start of the Törggelen season in autumn.",
    match:["Buschenschank"]},

  'Marende': {short:"The South Tyrolean afternoon meal of speck, sausage, cheese and rye bread.",
    long:"The word comes from the Latin merenda. Farmworkers ate it at about four in the afternoon, with Schüttelbrot, a hard, flat rye bread.",
    match:["Marende"]},

  'arele': {short:"Racks of bamboo or wood on which grapes are laid to dry.",
    long:"In the Valpolicella the grapes for Amarone and Recioto dry on them in the fruttaio. In Trentino the Nosiola grapes for Vino Santo dry on them through the winter; the rules allow pressing from February, and by custom they are pressed in Holy Week.",
    match:["arele"]},

  'enrosadira': {short:"The pink glow of the Dolomites in the low sun of dusk and dawn.",
    long:"A Ladin word for turning pink. For a few minutes the pale dolomite reflects the red light of the low sun. The Ladin legend says King Laurin cursed his rose garden to be unseen by day and by night, and forgot the dusk and the dawn.",
    match:["enrosadira"]},

  'rifugio': {short:"A staffed mountain hut where walkers eat and sleep.",
    long:"In the Dolomites the rifugi are supplied by goods cableway, by helicopter at the start of the season and on people's backs, and they serve the food of the valleys below: canederli, barley soup, strudel.",
    match:["rifugi","rifugio"]},

  'bàcaro': {short:"A small Venetian wine bar where cicchetti are eaten standing, with a glass of wine.",
    long:"Most are near the Rialto market and in Cannaregio, and they open early and close early. The name is often traced to Bacchus. The writer Elio Zorzi told of a gondolier who, some time after 1869, tasted a Puglian wine sold in Venice and called it 'un vin da bàcaro', a wine for making merry.",
    match:["bàcari","bàcaro"]},

  'ombra': {short:"A small glass of wine, in Venice.",
    long:"The usual story is that the wine sellers on Piazza San Marco followed the shade of the Campanile through the day. Nothing records it, and the dictionaries take the word to mean a small amount, as in a shadow of salt.",
    match:["ombra"]},

  'ciglioni': {short:"Grassy terraces that hold the vines on the steep Prosecco hills.",
    long:"They are banks of earth covered in grass rather than walls of stone. On the steepest slopes between Conegliano and Valdobbiadene every job is done by hand, 800 to 900 hours of work a hectare a year.",
    match:["ciglioni"]},

  'col fondo': {short:"Prosecco refermented in the bottle and left cloudy on its yeast.",
    long:"The old farmhouse style of the Prosecco hills, 'with the bottom'. The tank replaced it in the first half of the twentieth century. The DOCG now labels it Sui lieviti, always in the driest style and never disgorged.",
    match:["col fondo"]},

  'saor': {short:"Venetian for flavour: fried fish kept under onions stewed in vinegar.",
    long:"Sardines are the usual fish, with raisins and pine nuts. A Venetian cookbook of the fourteenth century already has fish 'a savore', made sour and spiced. Venetians eat sarde in saor in their boats on the night of the Redentore in July.",
    match:["saor"]},

  'ponca': {short:"The local name in Friuli for flysch: thin layers of marl and sandstone laid down on an ancient sea floor.",
    long:"It lies under the Collio and the Colli Orientali. The sandstone lets water drain away and the marl holds some of it, and the soil is poor, so the vine roots deep.",
    match:["ponca"]},

  'tajut': {short:"A glass of wine in an osteria, in Friulian, usually before lunch or dinner.",
    long:"Where the word comes from is uncertain. Friulano is the usual wine for it, and in the sixteenth century Udine's council was already tasting the wine its osterie sold, in the Piazza del Vino.",
    match:["tajut"]},

  'qvevri': {short:"A large Georgian clay jar, buried in the ground, in which wine ferments and ages.",
    long:"Residues in Georgian jars date from about 6000 BC. Josko Gravner at Oslavia has fermented his wines in qvevri buried to the rim in his cellar floor since the 2001 vintage.",
    match:["qvevri"]},

  'cramâr': {short:"A pedlar from Carnia who sold spices and medicines north of the Alps.",
    long:"From the seventeenth century to the early nineteenth they left in autumn with a wooden chest of drawers, the crassigne, on their backs, went as far as Hungary and Transylvania, and came home in late spring. The name comes from German Krämer, a shopkeeper.",
    match:["cramârs","cramâr"]},

  'osmiza': {short:"A farm on the Karst above Trieste that opens for a few days to sell its own wine and food.",
    long:"Joseph II allowed it in 1784, for eight days without tax, and the name comes from the Slovene word for eight. An ivy branch and a red wooden arrow by the lane show that one is open.",
    match:["osmize","osmiza"]},

  'norcino': {short:"A pork butcher, named after the town of Norcia; his shop is a norcineria.",
    long:"The word also meant the man who castrated pigs as well as butchering and curing them. Men from Norcia went to Rome and Tuscany for the winter slaughter, and the Roman name for their shops, norcineria, is still on shop signs.",
    match:["norcineria","norcino","norcini"]},

  'testo': {short:"A heavy disc of stone or iron, heated in the hearth to bake flat bread on.",
    long:"Umbria's torta al testo is cooked dry on it and split open to be filled; Gubbio calls its version crescia and the upper Tiber valley ciaccia. The word comes from the Latin testum.",
    match:["testo"]},

  'mostacciolo': {short:"A Roman almond sweet, made with sugar or honey.",
    long:"Francis of Assisi asked for mostaccioli on his deathbed in 1226, and his companions explained the word: a sweet the Romans made of almonds with sugar or honey. Versions with honey, must and spices are baked for his feast day on 4 October.",
    match:["mostaccioli","mostacciolo"]},

  'leccarda': {short:"The dripping pan set under meat roasting on a spit, used to baste it.",
    long:"In Orvieto pigeon alla leccarda is roasted on the spit and basted from the pan with wine, sage and olives; ghiotta is another name for the same pan.",
    match:["leccarda"]},

  'camorganne': {short:"Racks of reeds on which Montefalco farmers dried Sagrantino grapes for passito.",
    long:"The bunches lay on the camorganne until Christmas. Then the berries were stripped by hand and pressed in small presses, and the sweet wine aged for at least two years before it was opened at Christmas and Easter.",
    match:["camorganne"]},

  'mezzadria': {short:"Sharecropping: the landowner and the family who farmed the land split the harvest.",
    long:"It was the usual contract in the hills of central Italy until a law of 1964 banned new contracts and a law of 1982 let the old ones be turned into leases. In the Marche the grapes were divided and each side made its own wine at home, which the Verdicchio rules blame for poor quality, and at the winter pig-killing the sharecropper sent gifts to the landowner.",
    match:["mezzadria"]},

  'moscioli': {short:"Ancona's name for the wild mussels that grow on the rocks under Monte Conero.",
    long:"Divers tore them off submerged rocks between Pietralacroce and Sirolo, five to ten metres down, from May to October. Slow Food made them a Presidium in 2004 and suspended it in 2025, because of warmer water, mucilage and too much picking.",
    match:["moscioli","mosciolo"]},

  'zafferanella': {short:"A wild plant that turns the brodetto of Porto Recanati yellow.",
    long:"It is not true saffron. Porto Recanati uses it instead of tomato, and credits the recipe to Giovanni Velluti, who kept a beach chalet in the town early in the twentieth century.",
    match:["zafferanella"]},

  'condottiero': {short:"A captain who hired out himself and his troops to the states that would pay.",
    long:"The word comes from condotta, the contract he signed. Federico da Montefeltro paid for his court at Urbino this way, serving Milan, Naples, Florence and the pope for as much as 120,000 ducats a year.",
    match:["condottiero","condottieri"]},

  'guaime': {short:"The grass that grows back in a meadow after it has been mown.",
    long:"Cheese made in that season was cascio di guaime. In 1554 the tenants of Michelangelo's farms near Urbania were bound to send him twenty-five pounds of it a year in Rome.",
    match:["guaime"]},

  'tratturo': {short:"A grass drove road for moving flocks between summer and winter pasture.",
    long:"A royal tratturo was fixed at sixty Neapolitan paces, 111.6 metres, with stone markers along its edges, and the network ran to about 3,100 kilometres. The longest, L'Aquila to Foggia, is 243. All five of the royal roads cross Molise. Transhumance, the walking of them, was inscribed by UNESCO in 2019; the roads themselves are still only on Italy's tentative list, where they went in 2006.",
    match:["tratturi","tratturo"]},

  'fornacella': {short:"The long charcoal trough that arrosticini are grilled on.",
    long:"It is barely wider than the meat, and that does two things at once: every coal sits under a skewer, so the cooking is over in three or four minutes, and the wooden ends rest over cool air on both sides where they cannot burn. Regional names for it include furnacella, canala and rustillire.",
    match:["fornacella"]},

  'castrato': {short:"A castrated ram, killed between six months and two years, and the meat it gives.",
    long:"It is the traditional meat for arrosticini, along with a young ewe that has not yet lambed. It carries more fat and more flavour than lamb, which is what lets it stand up to charcoal. Norwegian butchers rarely sell it: sau or fårekjøtt is the nearest thing, and lammekjøtt is a different meat again.",
    match:["castrato"]},

  'pasta filata': {short:"Curd heated and stretched until it turns elastic, then shaped.",
    long:"The family includes mozzarella, provolone, scamorza and caciocavallo. Stretching lines up the protein, which is why the cheese pulls into threads and why a young one melts into strings. Caciocavallo is shaped into a pear with a head, tied with a cord and hung over a beam in pairs.",
    match:["pasta filata"]},

  'burrino': {short:"A ball of butter wrapped in a skin of stretched curd, so that it keeps.",
    long:"Also called manteca. The curd seals the butter away from the air in a house with no cold room, and the shell is eaten with it. It belongs to the same dairy as caciocavallo and scamorza, in the mountains of Molise and the regions around it.",
    match:["burrino"]},

  'De.Co.': {short:"A denomination granted by a single comune to a dish it claims as its own.",
    long:"Denominazione Comunale. It carries no protection outside the town and no standing in European law, but the comune writes a specification and decides who may use the name. San Martino in Pensilis gave one to its pampanella.",
    match:["De.Co."]},

  'pizzaiuolo': {short:"The Neapolitan pizza maker, in the spelling UNESCO used when it listed the craft.",
    long:"UNESCO inscribed the art of the Neapolitan pizzaiuolo in December 2017 — the craft, not the dish — naming four phases of handling the dough and a rotating movement of the arm at the mouth of the oven. The bearers it names are the master pizzaiuolo, the pizzaiuolo and the baker, and about three thousand of them work in the city.",
    match:["pizzaiuolo","pizzaiolo"]},

  'portafoglio': {short:"Pizza folded in four and eaten in the hand, the way Naples sells it in the street.",
    long:"The word means wallet. It is how a pizza priced for people with very little has always been eaten, and the fold has since been written into European law: the specification requires the finished pizza to be soft, elastic and easily foldable into four.",
    match:["portafoglio"]},

  'pippiare': {short:"A Neapolitan verb for a simmer so slow the sauce releases one bubble at a time.",
    long:"It is not a dictionary word in this sense; standard Italian pipiare means to chirp. Naples uses it for what a ragu does over four to six hours, likened to someone drawing on a pipe, and Eduardo De Filippo writes it peppiato. A sauce moving faster than that is too hot.",
    match:["pippiare"]},

  'scalillo': {short:"The narrow one-man ladder used to work vines trained fifteen metres up a poplar.",
    long:"It is light enough for one man to carry and long enough to reach into the crown of the tree. Pruning, tying and picking in an alberata all happen from it, which is the plain reason the system could never be mechanised: the area under vines married to poplars has fallen from about sixteen thousand hectares in the 1960s to under two hundred.",
    match:["scalillo"]},

  'macere': {short:"The dry-stone walls that hold up the terraces of the Amalfi coast.",
    long:"They stand three to seven metres, laid without mortar from stone taken on the spot, largest at the bottom, and they hold the hillside in place. Nobody has measured them all: the one proper survey, of twenty-three square kilometres behind Amalfi and Ravello, found a hundred and sixty-three kilometres of terracing in that stretch alone. When they stop being maintained, the terraces slide.",
    match:["macere"]},

  'garum': {short:"The fermented fish sauce that flavoured most Roman cooking.",
    long:"Fish were layered with salt and left in the sun for months, and the liquid pressed off was strained and sold in jars. Pompeii had its own producer, Aulus Umbricius Scaurus, whose name is on nearly a third of the fish-sauce jars found in the two buried towns, and who had his own labels laid in mosaic on the floor of his atrium. The prestige version came from Spain and cost a small fortune.",
    match:["garum"]}

});
