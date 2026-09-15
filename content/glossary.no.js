/* Italia in Tavola — ordliste, norsk bokmål. Nøklene er identiske med content/glossary.js.
   `match` er ordformene som skal gjenkjennes i den norske teksten. */
window.GLOSSARY_NO = window.GLOSSARY_NO || {};
Object.assign(window.GLOSSARY_NO, {

  'DOC': {short:"Italias vanligste opprinnelsesbetegnelse: fast område, tillatte druer, avling og lagring.",
    long:"Denominazione di Origine Controllata. Reglene sier hvor druene kan vokse, hvilke sorter som er tillatt, hvor mye hver hektar kan bære og hvor lenge vinen må lagres før den slippes. Det finnes rundt 330 av dem, og betegnelsen sier ikke noe om kvalitet i seg selv, bare at noen kontrollerer at reglene følges.",
    match:["DOC"]},

  'DOCG': {short:"Det øverste nivået: samme regler som DOC, pluss smakspanel og nummerert forsegling.",
    long:"Denominazione di Origine Controllata e Garantita. Garantita legger til et offisielt smakspanel som kan avvise vinen, tapping innenfor sonen og den nummererte stripen over kapselen. Barolo og Barbaresco var blant de første i 1980; Albana di Romagna ble i 1987 den første hvitvinen, til en del hån den gangen.",
    match:["DOCG"]},

  'IGT': {short:"Det løsere nivået under DOC, opprettet i 1992, der supertoskanerne hører hjemme.",
    long:"Indicazione Geografica Tipica dekker et større område og tillater druer en DOC ville forby. Betegnelsen ble laget for at seriøse viner utenfor regelverket, framfor alt bordeauxblandingene fra Bolgheri, slapp å selges som bordvin. Toscana IGT og Terre Siciliane IGT er blant de mest brukte.",
    match:["IGT"]},

  'DOP': {short:"EU-betegnelsen som DOC og DOCG ligger under, brukt på mat like mye som vin.",
    long:"Denominazione di Origine Protetta, den italienske formen av den europeiske beskyttede opprinnelsesbetegnelsen. Siden 2009 har den vært den juridiske paraplyen over DOC og DOCG, og det er den du ser på Parmigiano Reggiano, Prosciutto di Parma og tradisjonell balsamico. Flaskene skriver som regel fortsatt DOC eller DOCG.",
    match:["DOP"]},

  'IGP': {short:"EU-nivået under DOP: ekte opphavssted, men løsere krav.",
    long:"Indicazione Geografica Protetta, den europeiske beskyttede geografiske betegnelsen, som dekker IGT-vinene og svært mange matvarer. Den krever at ett trinn i produksjonen skjer på det navngitte stedet, ikke alle. Speck Alto Adige, Mortadella Bologna og Burrata di Andria er IGP.",
    match:["IGP"]},

  'riserva': {short:"En vin som er lagret lenger enn den vanlige utgaven fra samme betegnelse.",
    long:"Det finnes ingen felles nasjonal regel: hver betegnelse setter sitt eget minstekrav. Barolo Riserva krever fem år mot tre, Chianti Classico Riserva to mot ett, Franciacorta Riserva seksti måneder på gjærbunnfallet. Lengre lagring er ikke automatisk bedre, men det er alltid dyrere.",
    match:["riserva"]},

  'superiore': {short:"Som regel høyere minstekrav til alkohol, og ofte litt lengre lagring.",
    long:"Som riserva er det definert betegnelse for betegnelse, ikke nasjonalt. Det betyr normalt modnere druer og litt høyere styrke, noen ganger med noen ekstra måneders lagring. Valtellina Superiore og Romagna Sangiovese Superiore er typiske eksempler.",
    match:["superiore"]},

  'classico': {short:"Den historiske kjernen av en sone, som regel den eldste og beste delen.",
    long:"Da vellykkede betegnelser ble utvidet, beholdt den opprinnelige kjernen ordet classico. Chianti Classico, Soave Classico og Valpolicella Classico markerer alle de gamle åsene mot det flatere landet som kom til senere. Det sier noe om geografi, ikke om lagring.",
    match:["classico"]},

  'cru': {short:"Én navngitt vinmark. Lånt fra fransk, og uten juridisk status i Italia.",
    long:"Italienske dyrkere bruker ordet om en skråning der vinen smaker gjenkjennelig av akkurat det stedet, i burgundisk forstand. Det har ingen offisiell status, og derfor kartla Barolo til slutt vinmarkene sine formelt i stedet. Etna bruker contrade, og Barolo og Barbaresco bruker MGA om den samme tanken.",
    match:["cru"]},

  'MGA': {short:"Barolos og Barbarescos offisielle kart over navngitte vinmarker, fra 2010.",
    long:"Menzioni Geografiche Aggiuntive, tilleggsbetegnelser. Barolo ble delt i 181 av dem, slik at en etikett nå kan bære Cannubi, Brunate eller Vigna Rionda som et offisielt navn og ikke som produsentens påstand. Det er det italienske svaret på den burgundiske climat.",
    match:["MGA"]},

  'Menzioni Geografiche Aggiuntive': {short:"Det fulle navnet på MGA-systemet: Barolos 181 kartlagte vinmarker.",
    long:"Ordrett tilleggsbetegnelser. Barolos vinmarker ble målt opp og navngitt offisielt i 2010, og det gjorde slutt på tiår med uformelle cru-navn. Barbaresco har sitt eget sett. Navnet på etiketten betyr nå et avgrenset stykke jord og ikke en markedsføringsbeslutning.",
    match:["Menzioni Geografiche Aggiuntive"]},

  'tannin': {short:"Det tørrende grepet i rødvin, fra skall, steiner, stilker og av og til fat.",
    long:"Tanniner binder seg til proteinene i spyttet, og derfor føles munnen skrubbet av en ung Nebbiolo eller Sagrantino. De mykner over år på flaske, og de er også det som lar en vin lagres. Fett og protein temmer dem, og det er grunnen til at en tanninrik rødvin vil ha kjøtt eller fast ost.",
    match:["tannin","tanniner","tanninene"]},

  'acidity': {short:"Syren: friskheten som gjør at en vin virker levende og tåler lagring.",
    long:"Druene mister syre etter hvert som de modner, så varme steder og sen høsting gir mykere viner, mens høyde gir strammere. Det er derfor Etna og Alto Adige kan lage delikate viner i sør og nord i et varmt land, og derfor en vin uten syre smaker slapp.",
    match:["syre","syren","syrlighet"]},

  'appassimento': {short:"Å tørke plukkede druer i uker eller måneder for å konsentrere sukker og smak.",
    long:"Klasene legges på rister eller henges i luftige loft og mister en tredjedel eller mer av vekten før pressing. Gjæret tørt gir det Amarone og Sforzato di Valtellina; stanset tidlig gir det den søte Recioto. Metoden er eldgammel og dyr, fordi mye av avlingen fordamper.",
    match:["appassimento"]},

  'passito': {short:"En vin, som regel søt, laget av druer som er tørket før pressing.",
    long:"Ordet beskriver resultatet av appassimento. Passito di Pantelleria av tørket Zibibbo og Vin Santo av druer som henger gjennom vinteren er de klassiske eksemplene, og Albana passito er Romagnas. Sødmen kommer av sukker gjæren ikke rakk å bruke opp, ikke av noe som er tilsatt.",
    match:["passito"]},

  'recioto': {short:"Den søte originalen fra Valpolicella og Soave, laget av tørkede druer.",
    long:"Gjæringen stanses mens det ennå er sukker igjen, så Recioto della Valpolicella forblir søt, mens Amarone, laget av de samme tørkede druene, gjæres helt tørr. Recioto er den eldste av de to; Amarone begynte som en Recioto som ble stående for lenge.",
    match:["recioto"]},

  'ripasso': {short:"Å gjære Valpolicella om igjen på de avrente skallene etter Amarone.",
    long:"Når Amarone er presset, sitter det igjen sukker og farge i skallene, så en batch vanlig Valpolicella kjøres over dem og gjærer på nytt. Resultatet er mørkere og fyldigere enn Valpolicella og langt billigere enn Amarone, som er nettopp grunnen til at metoden ble oppfunnet.",
    match:["ripasso"]},

  'governo': {short:"Et toskansk grep der gjæringen settes i gang igjen med tørkede druer eller most.",
    long:"Governo all'uso toscano tilsetter litt most av tørkede druer til den unge vinen, og det utløser en ny gjæring som mykner den og etterlater en svak perling. Det var en gang vanlig i hverdagens Chianti, som skulle drikkes innen året, og er nå sjeldent.",
    match:["governo"]},

  'metodo classico': {short:"Champagnemetoden: den andre gjæringen skjer inne i flasken.",
    long:"Sukker og gjær tilsettes, flasken forsegles, og kullsyren løser seg i vinen under trykk mens den ligger på den døde gjæren i måneder eller år. Det gir finere bobler og smak av brødskorpe, og det er grunnlaget for Franciacorta, Trentodoc og Alta Langa.",
    match:["metodo classico","tradisjonell metode"]},

  'Charmat': {short:"Tankmetoden: den andre gjæringen skjer i en lukket ståltank.",
    long:"Kalles også Martinotti-metoden, etter italieneren som patenterte tanken først. Den er raskere og billigere enn flaskegjæring og bevarer druens egen aroma i stedet for å bygge gjærpreget dybde, og derfor lages Prosecco og det meste av Lambrusco slik.",
    match:["Charmat","Martinotti","tankmetoden"]},

  'dosage': {short:"Den lille mengden sukker som tilsettes musserende vin etter at gjæren er fjernet.",
    long:"Den avgjør den endelige sødmen, og skalaen går fra dosaggio zero via extra brut, brut og extra dry til demi-sec. Modnere distrikter trenger mindre, og derfor tappes så mye Franciacorta på null eller extra brut der Champagne ville brukt mer.",
    match:["dosage","dosaggio"]},

  'disgorgement': {short:"Degorgering: å fjerne proppen av død gjær fra en flaskegjæret musserende vin.",
    long:"Bunnfallet arbeides ned i halsen, fryses og skytes ut av trykket; dosagen fylles på og korken settes i. Datoen betyr mer enn årgangen for hvordan vinen smaker, fordi den begynner å forandre seg fra det øyeblikket, og gode produsenter trykker den på baksiden.",
    match:["degorgering","degorgert","degorgeres"]},

  'lees': {short:"Gjærbunnfallet: den døde gjæren vinen ligger på etter gjæringen.",
    long:"Tid på bunnfallet, sur lie, gir fylde og smak av brød, bakverk og hasselnøtt når gjærcellene brytes ned. Det er derfor Franciacorta må ligge minst atten måneder på det og en Riserva seksti, og derfor enkelte stille hvitviner får stå urørt gjennom vinteren.",
    match:["gjærbunnfallet","gjærbunnfall","bunnfallet"]},

  'sur lie': {short:"Fransk for på gjærbunnfallet: å lagre vinen på sin egen døde gjær.",
    long:"Samme tanke som det italienske sui lieviti. Det gjør teksturen fyldigere og gir et smaksrikt, brødaktig drag, og i musserende vin er det forskjellen mellom enkle bobler og noe med dybde.",
    match:["sur lie","sui lieviti"]},

  'flor': {short:"En hinne av gjær som vokser over vinen i et delvis fylt fat og beskytter den.",
    long:"Laget lever av alkoholen og skjermer vinen mot luften, og gir en tørr, nøtteaktig og svakt salt karakter i stedet for ren oksidasjon. Slik lages sherry i Jerez, og slik har Vernaccia di Oristano vært laget på Sardinia i århundrer, helt uavhengig.",
    match:["flor"]},

  'solera': {short:"En stabel fat der eldre vin fylles opp med yngre og aldri tømmes helt.",
    long:"Vin tappes fra det eldste fatet og erstattes fra det nest yngste, og slik oppover i rekken, så hver flaske rommer en brøkdel av mange årganger. Sardinias Vernaccia di Oristano og Marsala bruker begge metoden, i likhet med sherry.",
    match:["solera"]},

  'alberello': {short:"Den frittstående buskranken, beskåret lavt og uten tråd å støtte seg på.",
    long:"Ordrett «lite tre». Formen passer varme, tørre og vindfulle steder fordi løvverket skygger for sine egne druer og røttene går dypt, og den må stelles for hånd. Salento i Puglia, terrassene på Etna og de nedsenkede rankene på Pantelleria bruker den alle.",
    match:["alberello"]},

  'pergola': {short:"Et stativ som holder rankene i et tak over hodet på dyrkeren.",
    long:"Den tradisjonelle oppbindingen i Adige-dalen og Valtellina. Å løfte løvverket beskytter druene mot en steik sol og slipper luft under i et fuktig klima, og dyrkeren arbeider stående. Moderne kvalitetsvinmarker bytter den ofte ut med tråd for å redusere avlingen.",
    match:["pergola","pergolaen"]},

  'tendone': {short:"En høy, vid pergola bygget for mengde framfor konsentrasjon.",
    long:"Rankene bindes flatt over hodet på et stort stativ og gir store avlinger av tynn frukt. Systemet dekker store deler av Puglia og Abruzzo og er grunnen til at de regionene lenge var kjent for bulkvin; de seriøse dyrkerne der har gått tilbake til alberello eller tråd.",
    match:["tendone"]},

  'phylloxera': {short:"Vinlusen fra Amerika som ødela Europas vinmarker fra 1860-årene.",
    long:"Den lever på røttene og dreper planten, og den nådde nesten hele Europa i løpet av femti år. Det eneste varige svaret var å pode europeiske ranker på amerikanske røtter. Sand stopper den, og derfor har Etna og sanden i Sulcis fortsatt upodede ranker på over hundre år.",
    match:["vinlusen","vinlus","rotlusen","phylloxera"]},

  'rootstock': {short:"Grunnstammen: den amerikanske roten en europeisk ranke podes på.",
    long:"Nesten hver eneste ranke i Italia er to planter satt sammen: en amerikansk rot lusen ikke klarer å drepe, og en europeisk sort over podestedet som lager vinen. Valget av grunnstamme styrer også vekstkraft og tørketoleranse. Ranker på egen rot kalles upodede, og er sjeldne og ettertraktede.",
    match:["grunnstamme","grunnstammen","upodede","upodet"]},

  'terroir': {short:"Summen av et sted: jord, helning, høyde, vær og dyrkernes vaner.",
    long:"Påstanden bak hele betegnelsessystemet er at dette til sammen setter et spor du kan smake, og at Barolo fra Serralunga derfor smaker annerledes enn Barolo fra La Morra. Ordet er fransk fordi franskmennene argumenterte for tanken først, ikke fordi Italia mangler saken.",
    match:["terroir","terroiret"]},

  'marl': {short:"Mergel: en myk blanding av leire og kalkstein, jorden under Langhe-åsene.",
    long:"Den holder på vann en tørr sommer og drenerer en våt, noe som passer en sen drue som Nebbiolo. Langhe har to typer, og forskjellen merkes i glasset: eldre, fastere mergel i øst gir kraft, yngre mergel i vest gir duft.",
    match:["mergel","mergelen"]},

  'limestone': {short:"Kalkstein: drenerer godt, kaster lys tilbake og gir gjerne friskhet.",
    long:"Den ligger under svært mange av Italias beste vinmarker, fra Murge i Puglia til Colli Orientali i Friuli. Ranker på kalkstein søker dypt etter vann og står derfor støtt i tørke, og vinene beholder som regel mer syre enn samme drue på leire.",
    match:["kalkstein","kalksteinen","kalkholdig"]},

  'tuff': {short:"Tuff: myk bergart av sammenpresset vulkansk aske. Porøs, godt drenert, kaliumrik.",
    long:"Tufo på italiensk. Den ligger under Castelli Romani utenfor Roma, åsene ved Orvieto og skråningene i Campania rundt Greco di Tufo, og den gir de lokale hvitvinene et svakt salt, mineralsk drag. Den samme steinen, brutt som pozzolana, fikk romersk betong til å herde under vann.",
    match:["tuff","tufo","pozzolana"]},

  'moraine': {short:"Morene: steinmassene en isbre etterlater seg, grus og sand over fjell.",
    long:"Næringsfattig og raskt drenert, så ranken må arbeide og avlingene holder seg lave. Åsene i Franciacorta er morenen etter isbreen som gravde ut Iseosjøen, og den grusen er en stor del av grunnen til at vinen har den strukturen den har.",
    match:["morene","morenen","bremorene"]},

  'malolactic fermentation': {short:"Malolaktisk gjæring: bakterier gjør skarp eplesyre om til mykere melkesyre.",
    long:"Den skjer etter den alkoholiske gjæringen og tar bort biten av grønt eple, slik at vinen blir rundere og mer kremet i teksturen. Nesten all rødvin går gjennom den. Hvitviner som skal holde seg sprø, som det meste av Verdicchio, hindres som regel i det.",
    match:["malolaktisk"]},

  'skin contact': {short:"Skallgjæring: å gjære hvite druer på skallene, som om de var røde.",
    long:"Hvit most skilles normalt fra skallene med én gang. Lar man den ligge i dager eller måneder, trekkes farge, tannin og et smaksrikt grep ut, og det er slik oransjevin lages. Collio og Oslavia i Friuli er den italienske kjernen, med Gravner og Radikon som de kjente navnene.",
    match:["skallgjæret","skallgjæring","på skallene"]},

  'orange wine': {short:"Oransjevin: hvitvin gjæret på skallene, ravfarget og tanninrik.",
    long:"En gammel metode snarere enn en ny motebølge, og fortsatt laget i leiramforaer av noen av dem som gjenopplivet den i Friuli. Regn med tørket aprikos, te og nøtter, et grep nærmere en rødvin enn en hvitvin, og en vin som vil ha mat og ikke en aperitiff.",
    match:["oransjevin","oransjeviner"]},

  'botrytis': {short:"Edelråte: en mugg som skrumper modne druer og konsentrerer dem.",
    long:"På fuktige høstmorgener fulgt av tørre ettermiddager borer Botrytis cinerea hull i skallet og lar vannet fordampe, slik at sukker, syre og en honning- og aprikossmak står igjen. Den er velkommen bare når druene alt er modne og friske; ellers er det simpelthen råte.",
    match:["botrytis","edelråte","muffa nobile"]},

  'frizzante': {short:"Lett musserende: en mild perling framfor en full mousse.",
    long:"Tappet på omtrent én til to og en halv atmosfære, mot tre eller mer for en fullt musserende vin, så boblen er myk og legger seg i glasset. Det er den tradisjonelle formen for Lambrusco, og for de uklare gårdsvinene som gjæres om igjen på flasken.",
    match:["frizzante"]},

  'spumante': {short:"Fullt musserende, tre atmosfærer eller mer, uansett om den er laget på tank eller flaske.",
    long:"Ordet beskriver trykket, ikke metoden eller kvaliteten: Prosecco, Franciacorta og billig søt brus er alle spumante. Franciacorta har lov til å utelate ordet på etiketten helt, ut fra at alle vet det likevel.",
    match:["spumante"]},

  'vendemmia': {short:"Innhøstingen, og dermed årgangen på etiketten.",
    long:"Datoen betyr noe fordi Italia strekker seg fra Alpene til Afrika: Sicilia og Puglia kan plukke i august, mens Nebbiolo i Langhe venter til de siste ukene av oktober, når tåken alt har kommet.",
    match:["vendemmia"]},

  'uvaggio': {short:"Sammensetningen av druesorter i en vin.",
    long:"De fleste italienske betegnelser setter et minstekrav for hoveddruen og tillater navngitte andre opp til en grense, slik at Chianti Classico må ha minst 80 % Sangiovese og Etna Rosso minst 80 % Nerello Mascalese. Å blande i vinmarken i stedet for i kjelleren kalles en blandingsmark.",
    match:["uvaggio"]},

  'field blend': {short:"Blandingsmark: flere sorter plantet sammen og plukket samtidig.",
    long:"Den eldre måten å plante på, før dyrkerne skilte sortene i egne felt. Etnas eldste terrasser bærer fortsatt røde og hvite ranker i samme rad, så blandingen er bestemt av det som ble plantet for hundre år siden og ikke av vinmakeren.",
    match:["blandingsmark","blandingsmarken"]},

  'consorzio': {short:"Produsentkonsortiet som håndhever reglene for en betegnelse og markedsfører den.",
    long:"Det skriver regelverket sammen med departementet, driver smakspanelene, eier varemerket og forfølger etterlikninger. Chianti Classicos svarte hane, navnet Franciacorta og brennmerket på et hjul Parmigiano Reggiano er alle konsortiemerker.",
    match:["konsortiet","konsortium","consorzio"]},

  'abboccato': {short:"Svakt søt: mer enn tørr, langt mindre enn en dessertvin.",
    long:"Den italienske sødmeskalaen går secco, abboccato, amabile, dolce. Orvieto var historisk abboccato, blant annet fordi edelråte la seg på druene i kjellerne som er hugget inn i tuffen, og ble først overveiende tørr i forrige århundre.",
    match:["abboccato"]},

  'secco': {short:"Tørr: gjæren har spist opp så godt som alt sukkeret.",
    long:"Verdt å se etter på etiketten der samme navn dekker flere stiler. Tørr Lambrusco merkes secco, og det er en annen drikk enn den søte utgaven som skapte vinens rykte i utlandet på 1970-tallet.",
    match:["secco"]},

  'demijohn': {short:"Ei stor glassflaske i kurv eller plast, på opptil 54 liter, som lenge var den vanlige måten å kjøpe vin i bulk på.",
    long:"Før flasketapping ble vanlig overalt, kjøpte familier og trattoriaer vin fra dyrkeren på damejeanne, en stor glassballong i en kurv av vidjer som rommer alt fra noen få liter til 54. Vinen ble tappet over på flasker hjemme eller rett i muggen på bordet. På italiensk heter den damigiana, og en vin som drikkes fra damejeannen, er en vin solgt i bulk og aldri tappet på flaske, slik mye av Sangiovesen i Romagna ble solgt fram til 1990-tallet.",
    match:["damejeanne","damejeannen","damejeanner"]},

  'battitore': {short:"Mannen som tester hvert hjul Parmigiano etter tolv måneder ved å banke på det med en liten hammer.",
    long:"Ordet betyr den som banker. Han går langs hyllene i lagerhuset, banker hele veien rundt hvert hjul og lytter etter hulrommene og sprekkene som betyr at osten ikke har satt seg riktig. Et hjul som består, brennmerkes med konsortiets ovale merke; et som stryker, får skorpen skrapt av og selges som vanlig bordost. Det er den eldste formen for kvalitetskontroll som finnes: én person, ett redskap, ett hjul om gangen.",
    match:["battitore","battitoren"]},

  'sfoglina': {short:"En kvinne som kjevler eggpasta for hånd til platen, sfogliaen, som Bologna skjærer pastaen sin av.",
    long:"Sfogliaen er bare mel og egg, ett egg per hundre gram mel, som eltes og kjevles ut med en kjevle på en meter, mattarello, til den dekker brettet og treverkets årer synes gjennom. En dyktig sfoglina lager en plate på en meter i tverrmål på rundt tjue minutter. Tagliatelle, tortellini og lasagne skjæres alle av den, og håndverket læres fortsatt bort, blant annet på Casa Artusi.",
    match:["sfoglina","sfoglinaen","sfogline","sfoglinene","sfoglia","sfogliaen"]},

  'spungone': {short:"Den gule, skjellfylte sandsteinen under Bertinoro i Romagna, som gir Sangiovesen derfra struktur og en salt kant.",
    long:"Et lokalt navn på en myk sandstein av sammenpressede skjell, avsatt da Adriaterhavet dekket disse åsene. Den drenerer godt og holder lite på vannet, så rankene må arbeide hardere, og dyrkerne i Bertinoro gir den æren for det faste, svakt salte preget i Riserva-vinene sine. Slike jordnavn er det en undersone på en etikett fra Romagna egentlig forteller deg.",
    match:["spungone"]},

  'batteria': {short:"Rekken av fem eller flere fat i synkende størrelse der tradisjonell balsamicoeddik modnes, på et loft.",
    long:"Hvert fat er av et annet treslag, eik, kastanje, kirsebær, morbær, ask eller einer, og hvert er mindre enn det forrige. Hvert år gir det minste fra seg litt eddik til tapping og fylles opp fra det neste i rekken, og slik nedover, så ung kokt most går inn i den ene enden og eddik som er flere tiår gammel, kommer ut i den andre. Loftet er avgjørende: sommervarmen driver gjæringen, og vinterkulden stanser den. Familier i Modena har sin egen batteria og gir en til datteren når hun gifter seg.",
    match:["batteria","batteriaen","batterie"]},

  'lampredotto': {short:"Firenzes gatemat: kuas fjerde mage, småkokt i timevis og servert i et rundstykke dyppet i kraften.",
    long:"Løpen, kuas fjerde mage, småkokes med tomat og selleri til den er mør, hakkes, legges i et rundstykke som er dyppet i kokekraften, og toppes med grønn saus og chiliolje. Den selges fra vogner rundt markedene, spises stående fra sent på formiddagen, og av florentinere fra alle samfunnslag. Den hører til den samme logikken som Romas femte fjerdedel: de fattige spiste det de rike ikke ville ha, og gjorde det til noe de rike nå står i kø for.",
    match:["lampredotto","lampredottoen"]},

  'galestro': {short:"Den smuldrende mergelen i Chianti Classico-åsene, som brytes opp i flak.",
    long:"En myk bergart av leire og mergel som smuldrer til flak og grus når du klemmer den. Den drenerer raskt og holder lite på vannet, så rankene holder seg små og druene konsentrerte, og dyrkerne i Chianti Classico forbinder den med duftende viner med fin struktur. Den deler åsene med alberese, den hardere kalksteinen, og mange vinmarker har begge deler.",
    match:["galestro","galestroen"]},

  'alberese': {short:"Den harde, lyse kalksteinen i Chianti-åsene, som ofte ligger side om side med galestro.",
    long:"En tett, hvitaktig kalkstein som brytes opp i steiner i stedet for flak. Den drenerer godt, og dyrkerne venter seg fyldigere og fastere viner fra ranker på alberese enn fra ranker på galestro.",
    match:["alberese"]},

  'fiasco': {short:"Chianti-flasken med rund bunn og kappe av strå, som ikke kan stå uten kappen.",
    long:"Billig blåst glass fikk rund bunn, så flasken ble kledd i tørket siv, sala, som ga den noe å stå på og beskyttet den underveis. I store deler av 1900-tallet gjorde den Chianti til verdens mest gjenkjennelige vin, og da vinen i den ble dårligere, ble den selve symbolet på billig italiensk rødvin. Flertall er fiaschi, og det norske ordet fiasko kommer av det italienske uttrykket far fiasco, å mislykkes totalt.",
    match:["fiasco","fiascoen","fiaschi"]},

  'Gran Selezione': {short:"Toppnivået i Chianti Classico siden 2014: druer fra egne vinmarker og minst 30 måneders lagring.",
    long:"Det ligger over hverdagsvinen Annata og over Riserva. Druene må komme fra produsentens egne vinmarker, vinen må lagres i minst 30 måneder, og fra 2021 må den være minst 90 prosent Sangiovese. En Gran Selezione kan også oppgi en av sonens elleve landsbyer, Unità Geografiche Aggiuntive, på etiketten.",
    match:["Gran Selezione"]},

  'vino da tavola': {short:"Bordvin: Italias laveste kategori, der de første supertoskanerne måtte selges.",
    long:"Kategorien var tenkt for enkel vin i bulk. På 1970-tallet havnet også Toscanas mest ærgjerrige viner der, fordi DOC-reglene ikke ga plass til Cabernet eller til Chianti uten hvite druer. Både Sassicaia og Tignanello ble solgt som vino da tavola, og Sassicaia solgte likevel for mer enn Barolo. IGT ble opprettet i 1992 for å gi slike viner et navn, og siden den europeiske vinreformen i 2009 heter det laveste nivået bare vino.",
    match:["vino da tavola"]},

  'a piede franco': {short:"På egen rot: en ranke som aldri er podet på amerikansk grunnstamme.",
    long:"Italiensk for «på fri fot». Etter vinlusen måtte nesten hver eneste europeiske ranke podes på en amerikansk rot som lusen ikke klarer å drepe. Unntakene finnes bare der lusen ikke kan leve: i sand, som på Etna, eller i jord som er for kald for den, som i Morgex og La Salle under Mont Blanc. Slike ranker kan være svært gamle, og dyrkerne setter stor pris på dem.",
    match:["a piede franco"]},

  'alpage': {short:"Sommerbeitet høyt oppe i Alpene, der buskapen går og osten lages på stedet.",
    long:"Det franske ordet, som brukes i Valle d'Aosta; på italiensk heter det alpeggio, og det nærmeste norske er setra. Om sommeren drives kyrne opp fra dalen til fjellbeitene, og melken ystes der oppe i stedet for å bæres ned. Fontina fra en alpage er ettertraktet fordi den smaker av blomstene og gresset kyrne har spist.",
    match:["alpage","alpagen","alpeggio"]},

  'botte': {short:"Et stort trefat, ofte av gammel slavonsk eik, som rommer tusenvis av liter.",
    long:"Flertall botti. Fordi fatet er stort og gammelt, er det lite tre i forhold til vinmengden, og vinen får nesten ingen eikesmak. Den modnes langsomt og blir lys og stram. Tradisjonalistene i Barolo lagrer vinen i årevis på botti, og nettopp det står striden med barriquen om.",
    match:["botti","botte"]},

  'barrique': {short:"Et lite eikefat på rundt 225 liter, som regel fransk og ofte nytt.",
    long:"Ordet er lånt fra Bordeaux. I et lite fat kommer vinen i mye tettere kontakt med treet, så den mykner raskere og får smak av vanilje, ristet brød og krydder. I Langhe på 1980- og 1990-tallet ble fatet kjennetegnet på modernistene, som ville ha Barolo som kunne drikkes ung.",
    match:["barriquene","barriquer","barriquen","barrique"]},

  'trifolau': {short:"Trøffeljeger, på piemontesisk.",
    long:"Han går inn i skogene i Langhe, Roero og Monferrato med en dressert hund, etter tradisjonen om natten, og holder stedene sine hemmelige. Siden 1985 har italiensk lov krevd at det brukes hund. Griser finner også trøffel, men de roter opp jorden.",
    match:["trifolauen","trifolau"]}

});
