const topicPictures = [
  {
    label: "Wetenskap",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dff7f1"></rect><path d="M49 18h22v9l18 32c6 11-2 23-15 23H46c-13 0-21-12-15-23l18-32z" fill="#ffffff" stroke="#0f766e" stroke-width="5" stroke-linejoin="round"></path><path d="M42 61h36" stroke="#22c55e" stroke-width="7" stroke-linecap="round"></path><circle cx="49" cy="51" r="5" fill="#f59e0b"></circle><circle cx="68" cy="44" r="4" fill="#1d4ed8"></circle></svg>`
  },
  {
    label: "Aarde",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><circle cx="60" cy="45" r="29" fill="#1d4ed8"></circle><path d="M40 34c10-8 22-7 35 1-5 5-6 11-1 18-12 7-25 6-38-2 7-4 8-10 4-17z" fill="#22c55e"></path><path d="M27 71h66" stroke="#0f766e" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Energie",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><path d="M65 12L31 52h23l-8 26 43-48H65z" fill="#f59e0b"></path><circle cx="84" cy="64" r="9" fill="#0f766e"></circle></svg>`
  },
  {
    label: "Notas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#f1f5f9"></rect><rect x="28" y="18" width="64" height="58" rx="8" fill="#ffffff" stroke="#334155" stroke-width="5"></rect><path d="M42 35h36M42 48h32M42 61h24" stroke="#0f766e" stroke-width="5" stroke-linecap="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Materie en deeltjies",
    picture: 0,
    groups: [
      { label: "Kernidee", lines: ["Alle materie bestaan uit deeltjies.", "Materie kan nie geskep of vernietig word nie.", "Materie kan van een toestand of fase na 'n ander verander."] },
      { label: "Drie toestande", lines: ["Vaste stowwe.", "Vloeistowwe.", "Gasse."] },
      { label: "Onthou vir vrae", lines: ["Gebruik die woord deeltjies wanneer jy verduidelik.", "Noem ook vorm, volume en hoe ver die deeltjies uitmekaar is."] }
    ]
  },
  {
    title: "Vaste stowwe, vloeistowwe en gasse",
    picture: 1,
    groups: [
      { label: "Vaste stof", lines: ["Het 'n vaste vorm.", "Het 'n spesifieke volume.", "Deeltjies is styf teen mekaar in 'n reelmatige patroon gepak.", "Deeltjies vibreer net effens."] },
      { label: "Vloeistof", lines: ["Het geen vaste vorm nie.", "Neem die vorm van die houer aan.", "Deeltjies is naby mekaar, maar kan oor en onder mekaar beweeg."] },
      { label: "Gas", lines: ["Het geen vaste vorm nie.", "Vul die hele houer.", "Deeltjies is ver uitmekaar en beweeg vrylik in alle rigtings."] }
    ]
  },
  {
    title: "NWT-tekeninge",
    picture: 3,
    groups: [
      { label: "Reels", lines: ["Gebruik 'n skerp HB-potlood of HB-Pacer.", "Gebruik 'n liniaal vir diagramme en byskriflyne.", "Opskrifte moet netjies in hoofletters wees.", "Byskrifte moet parallel aan mekaar wees."] },
      { label: "Deeltjiediagram", lines: ["Gebruik dieselfde grootte deeltjies in elke toestand.", "Gebruik dieselfde aantal deeltjies vir vaste stof, vloeistof en gas.", "Wys die spasies tussen deeltjies duidelik."] }
    ]
  },
  {
    title: "Mengsels van materiale",
    picture: 0,
    groups: [
      { label: "Wat is 'n mengsel?", lines: ["'n Mengsel bestaan uit twee of meer soorte materie wat saam gemeng is.", "Die stowwe is nie chemies gebind nie.", "In baie mengsels kan jy steeds die aparte stowwe sien."] },
      { label: "Voorbeelde", lines: ["Sout en peper.", "Sand en water.", "Water en kookolie.", "Melk en voedselkleursel.", "Verskillende bone of munte."] },
      { label: "Waarneming", lines: ["Beskryf hoe die afsonderlike stowwe lyk.", "Beskryf hoe die mengsel lyk.", "Dink of jy die mengsel weer kan skei."] }
    ]
  },
  {
    title: "Skeiding van mengsels",
    picture: 3,
    groups: [
      { label: "Met die hand", lines: ["Sorteer stowwe soos bone, krale of munte met die hand.", "Dit werk as die dele groot genoeg is om te sien en op te tel."] },
      { label: "Sifting en filtrasie", lines: ["Sifting skei groter korrels van kleiner korrels met 'n sif.", "Filtrasie gebruik 'n filter om 'n vaste stof uit 'n vloeistof te haal.", "Voorbeeld: 'n koffiefilter hou koffiekorrels terug."] },
      { label: "Afsakking, afgieting en magnete", lines: ["Afsakking gebeur wanneer digter deeltjies na die bodem sak.", "Afgieting beteken jy gooi die boonste vloeistof versigtig af.", "Magnete kan magnetiese materiale soos ystervylsels skei."] }
    ]
  },
  {
    title: "Oplossings en oplosmiddels",
    picture: 0,
    groups: [
      { label: "Oplossing", lines: ["'n Oplossing is 'n mengsel waarin 'n stof opgelos is.", "Die mengsel lyk eenvormig.", "Die vaste stof kan nie meer gesien word nadat dit opgelos het nie."] },
      { label: "Belangrike woorde", lines: ["Oplosmiddel: die stof in die grootste hoeveelheid, soos water.", "Oplosbare stof: die stof wat oplos, soos suiker of sout.", "Konsentrasie: hoe sterk of hoeveel opgeloste stof in die oplossing is."] },
      { label: "Voorbeeld", lines: ["Suiker + water = suikeroplossing.", "Water is die oplosmiddel.", "Suiker is die oplosbare stof."] }
    ]
  },
  {
    title: "Oplosbaar, onoplosbaar en suspensies",
    picture: 0,
    groups: [
      { label: "Oplosbaar", lines: ["Suiker en sout is oplosbaar in water.", "As 'n stof oplos, versprei die deeltjies deur die oplosmiddel."] },
      { label: "Onoplosbaar", lines: ["Swartpeper, grond en sand los nie in water op nie.", "Olie en water meng nie maklik nie en vorm lae."] },
      { label: "Suspensie", lines: ["'n Suspensie is 'n mengsel waar vaste deeltjies in 'n vloeistof dryf.", "Die deeltjies kan later afsak.", "Voorbeeld: grond en water."] }
    ]
  },
  {
    title: "Tempo van oplos",
    picture: 2,
    groups: [
      { label: "Temperatuur", lines: ["Hoe warmer die water is, hoe vinniger los suiker gewoonlik op.", "Suiker los stadig in koue water op."] },
      { label: "Roer", lines: ["Roer versprei die deeltjies vinniger.", "Dit help dat die oplosbare stof vinniger deur die oplosmiddel beweeg."] },
      { label: "Deeltjiegrootte", lines: ["Kleiner korrels los vinniger op as groot klonte.", "Meer oppervlak raak aan die water."] }
    ]
  },
  {
    title: "Water as oplosmiddel",
    picture: 1,
    groups: [
      { label: "Nuttige vervoer", lines: ["Water vervoer opgeloste stowwe in ekosisteme.", "Plante en diere gebruik water om nuttige stowwe deur liggame te beweeg."] },
      { label: "Wanneer dit gevaarlik raak", lines: ["Water kan ook skadelike opgeloste stowwe vervoer.", "Besoedelde water kan seep, kunsmis, insekdoders, sure of gifstowwe bevat."] }
    ]
  },
  {
    title: "Waterbesoedeling",
    picture: 1,
    groups: [
      { label: "Onoplosbare besoedeling", lines: ["Olie.", "Plastiek.", "Motorbande.", "Blikkies.", "Glas.", "Toiletafval."] },
      { label: "Oplosbare besoedeling", lines: ["Seep.", "Bemestingstowwe.", "Insekdoders.", "Sure.", "Ander gifstowwe."] },
      { label: "Kieme en siektes", lines: ["Toiletafval kan lewende kieme in water bring.", "Kieme kan waterdraende siektes soos diarree en cholera veroorsaak."] }
    ]
  },
  {
    title: "Vleilande is belangrik",
    picture: 1,
    groups: [
      { label: "Wat is 'n vleiland?", lines: ["'n Vleiland is 'n permanente deurweekte gebied.", "Vleilande kom dikwels langs riviere en estuariums voor.", "Hulle bied unieke habitatte vir plante en diere."] },
      { label: "Waarom belangrik?", lines: ["Vleilande werk soos sponse en hou water terug.", "Hulle help om water te suiwer.", "Hulle ondersteun biodiversiteit."] },
      { label: "Mense", lines: ["Vleilande kan toerisme ondersteun.", "Mense kan baat by aktiwiteite soos visvang, bootry, voëlkyk en stap."] }
    ]
  },
  {
    title: "iSimangaliso-Vleilandpark",
    picture: 1,
    groups: [
      { label: "Feite", lines: ["iSimangaliso is in KwaZulu-Natal.", "Dit was Suid-Afrika se eerste natuurlike werelderfenisterrein.", "Dit is die grootste beskermde vleiland in Suider-Afrika."] },
      { label: "Habitats", lines: ["Koraalriwwe.", "Strande.", "Kuswoude.", "Sout- en varswatermoerasse.", "Riviermondings."] },
      { label: "Diere", lines: ["Seekoeie.", "Krokodille.", "Boggelrugwalvisse.", "Afrika-olifante.", "Baie voëlspesies en paddas."] }
    ]
  },
  {
    title: "Skoon water en sanitasie",
    picture: 1,
    groups: [
      { label: "Waarom dit saak maak", lines: ["Mense, plante en diere het skoon water nodig.", "Baie mense in die wereld het nie toegang tot veilige drinkwater nie.", "Besoedelde water kan parasiete, virusse en bakteriee bevat."] },
      { label: "Probleme", lines: ["Sommige mense moet ver loop om water te kry.", "Natuurlike waterbronne kan besoedel wees.", "Cholera kan uitbreek waar mense besoedelde water gebruik."] }
    ]
  },
  {
    title: "Water skoonmaak en suiwer",
    picture: 0,
    groups: [
      { label: "Verwyder sigbare vaste stowwe", lines: ["Sifting.", "Filtrasie.", "Afsakking.", "Afgieting."] },
      { label: "Maak kieme dood", lines: ["Kook water vir ongeveer een minuut.", "Bedek dit met 'n skoon doek terwyl dit afkoel.", "Bleikmiddel/chloor kan gebruik word as 'n volwassene help."] },
      { label: "Belangrik", lines: ["Filtrasie maak water nie altyd veilig om te drink nie.", "Nadat sigbare vuilheid verwyder is, moet kieme ook doodgemaak word."] }
    ]
  },
  {
    title: "Tuisgemaakte waterfilter",
    picture: 3,
    groups: [
      { label: "Doel", lines: ["Ontwerp, maak en evalueer 'n eenvoudige stelsel om vuil water skoon te maak.", "Die filter verwyder onsuiwerhede, maar maak die water nie noodwendig drinkbaar nie."] },
      { label: "Materiale uit die voorbeeld", lines: ["Gruis.", "Gras.", "Sanderige vuiligheid.", "Houtspaanders.", "Klein dennebolle.", "Blare."] },
      { label: "Evalueer", lines: ["Vergelyk die water voor en na die filter.", "Kyk of dit minder modderig is.", "Se wat jy sou verbeter."] }
    ]
  }
];

const flashcards = [
  ["Wat is materie?", "Alles wat massa het en ruimte opneem."],
  ["Wat is deeltjies?", "Klein deeltjies waaruit alle materie bestaan."],
  ["Noem die drie toestande van materie.", "Vaste stowwe, vloeistowwe en gasse."],
  ["Hoe is deeltjies in 'n vaste stof gerangskik?", "Styf teen mekaar in 'n reelmatige patroon; hulle vibreer net effens."],
  ["Hoe beweeg deeltjies in 'n vloeistof?", "Hulle is naby mekaar, maar kan oor en onder mekaar beweeg."],
  ["Hoe beweeg deeltjies in 'n gas?", "Hulle is ver uitmekaar en beweeg vrylik in alle rigtings."],
  ["Wat is 'n mengsel?", "'n Kombinasie van twee of meer stowwe wat nie chemies gebind is nie."],
  ["Wat is sifting?", "'n Skeidingsmetode waar kleiner deeltjies deur gaatjies gaan en groter deeltjies agterbly."],
  ["Wat is filtrasie?", "'n Filter word gebruik om 'n vaste stof uit 'n vloeistof te skei."],
  ["Wat is afsakking?", "Swaarder of digter deeltjies sak na die bodem."],
  ["Wat is afgieting?", "Die boonste vloeistof word versigtig afgegooi om dit van die onderste stof te skei."],
  ["Waarvoor gebruik ons 'n magneet?", "Om magnetiese materiale uit 'n mengsel te haal."],
  ["Wat is 'n oplossing?", "'n Eenvormige mengsel waarin 'n stof opgelos is."],
  ["Wat is 'n oplosmiddel?", "Die stof waarin 'n ander stof oplos, gewoonlik die grootste hoeveelheid."],
  ["Wat is 'n oplosbare stof?", "Die stof wat in die oplosmiddel oplos."],
  ["Gee 'n voorbeeld van 'n onoplosbare stof in water.", "Sand, grond, swartpeper of olie."],
  ["Wat is 'n suspensie?", "'n Mengsel waar onoplosbare deeltjies in 'n vloeistof dryf en later kan afsak."],
  ["Noem drie faktore wat die tempo van oplos beinvloed.", "Temperatuur, roer en deeltjiegrootte."],
  ["Waarom los suiker vinniger in warm water op?", "Die deeltjies beweeg vinniger en versprei vinniger deur die water."],
  ["Waarom is water 'n belangrike oplosmiddel?", "Dit vervoer opgeloste stowwe in plante, diere en ekosisteme."],
  ["Noem twee onoplosbare besoedelstowwe.", "Olie, plastiek, motorbande, blikkies, glas of toiletafval."],
  ["Noem twee oplosbare besoedelstowwe.", "Seep, bemestingstowwe, insekdoders, sure of gifstowwe."],
  ["Watter siektes kan deur besoedelde water versprei?", "Diarree en cholera."],
  ["Waarom is vleilande belangrik?", "Hulle hou water terug, help water suiwer en bied habitats vir plante en diere."],
  ["Waar is iSimangaliso-Vleilandpark?", "In KwaZulu-Natal."],
  ["Hoe kan water veiliger gemaak word om te drink?", "Verwyder sigbare vuilheid en maak kieme dood deur te kook of korrek met chloor te behandel."],
  ["Wat is die doel van 'n tuisgemaakte waterfilter?", "Om onsuiwerhede uit vuil water te verwyder en die ontwerp te toets en verbeter."]
];

const quiz = [
  {
    question: "Watter stelling oor materie is korrek?",
    options: ["Materie kan geskep en vernietig word", "Materie bestaan uit deeltjies", "Net vaste stowwe is materie", "Gasse het geen deeltjies nie"],
    answer: 1,
    fact: "Alle materie bestaan uit deeltjies."
  },
  {
    question: "In watter toestand is deeltjies styf teen mekaar in 'n reelmatige patroon gepak?",
    options: ["Vaste stof", "Vloeistof", "Gas", "Oplossing"],
    answer: 0,
    fact: "Vaste stowwe het deeltjies wat styf teen mekaar gepak is."
  },
  {
    question: "Watter toestand neem die vorm van die houer aan, maar kan met die oog gesien word?",
    options: ["Vaste stof", "Vloeistof", "Gas", "Magneet"],
    answer: 1,
    fact: "Vloeistowwe neem die vorm van die houer aan."
  },
  {
    question: "Watter metode is die beste om teeblare uit water te haal?",
    options: ["Sifting of filtrasie", "Magneet", "Verhit tot gas", "Kleur byvoeg"],
    answer: 0,
    fact: "Sifting of filtrasie kan vaste deeltjies uit 'n vloeistof skei."
  },
  {
    question: "Wat gebeur tydens afsakking?",
    options: ["Suiker verdwyn", "Swaarder deeltjies sak na die bodem", "Gas word gemaak", "Alle kieme word doodgemaak"],
    answer: 1,
    fact: "Afsakking werk wanneer digter deeltjies na onder sak."
  },
  {
    question: "Watter een is 'n oplossing?",
    options: ["Sand en water", "Suiker wat in water opgelos is", "Olie en water in lae", "Munte in 'n sakkie"],
    answer: 1,
    fact: "Suikerwater is 'n eenvormige oplossing."
  },
  {
    question: "In suikerwater is die water die...",
    options: ["oplosmiddel", "onoplosbare stof", "filter", "suspensie"],
    answer: 0,
    fact: "Die oplosmiddel is die stof waarin iets oplos."
  },
  {
    question: "Watter stof is gewoonlik onoplosbaar in water?",
    options: ["Sout", "Suiker", "Swartpeper", "Kleursel"],
    answer: 2,
    fact: "Swartpeper los nie in water op nie."
  },
  {
    question: "Watter faktor laat suiker vinniger oplos?",
    options: ["Kouer water", "Groter klonte", "Warm water en roer", "Minder waterdeeltjies"],
    answer: 2,
    fact: "Warmte en roer verhoog die tempo van oplos."
  },
  {
    question: "Watter groep bevat onoplosbare besoedeling?",
    options: ["Seep en sure", "Plastiek en motorbande", "Sout en suiker", "Chloor en water"],
    answer: 1,
    fact: "Plastiek en motorbande los nie maklik in water op nie."
  },
  {
    question: "Watter probleem kan deur toiletafval in water veroorsaak word?",
    options: ["Meer suurstof", "Waterdraende siektes", "Meer kompasnaalde", "Vinniger filtrasie"],
    answer: 1,
    fact: "Toiletafval kan kieme bevat wat siektes veroorsaak."
  },
  {
    question: "Waarom word vleilande met sponse vergelyk?",
    options: ["Hulle brand maklik", "Hulle hou water terug", "Hulle maak olie", "Hulle los suiker op"],
    answer: 1,
    fact: "Vleilande help om water te stoor en stadiger te laat vloei."
  },
  {
    question: "Wat is iSimangaliso?",
    options: ["'n Vleilandpark in KwaZulu-Natal", "'n Skeidingsmetode", "'n Oplosbare stof", "'n Diagramreel"],
    answer: 0,
    fact: "iSimangaliso is 'n bekende vleilandpark in KwaZulu-Natal."
  },
  {
    question: "Waarom is filtrasie alleen nie altyd genoeg vir drinkwater nie?",
    options: ["Dit voeg plastiek by", "Dit verwyder nie noodwendig alle kieme nie", "Dit maak water sout", "Dit verander water in gas"],
    answer: 1,
    fact: "Na filtrasie moet kieme nog doodgemaak word om water veiliger te maak."
  },
  {
    question: "Wat moet jy doen wanneer jy 'n tuisgemaakte waterfilter evalueer?",
    options: ["Net kyk of dit mooi lyk", "Water voor en na die filter vergelyk en verbeterings voorstel", "Die water dadelik drink", "Alle lae verwyder"],
    answer: 1,
    fact: "Evaluering beteken jy toets hoe goed dit werk en se hoe dit beter kan wees."
  }
];

const timeline = [
  ["1. Deeltjies", "Begin deur te verstaan dat alle materie uit deeltjies bestaan."],
  ["2. Toestande", "Vergelyk vaste stowwe, vloeistowwe en gasse volgens vorm, volume en deeltjies."],
  ["3. Mengsels", "Leer hoe stowwe gemeng kan word sonder om chemies te bind."],
  ["4. Skeiding", "Kies skeidingsmetodes soos sifting, filtrasie, afsakking, afgieting en magnete."],
  ["5. Oplossings", "Identifiseer oplosmiddel, oplosbare stof en oplossing."],
  ["6. Tempo van oplos", "Verduidelik temperatuur, roer en deeltjiegrootte."],
  ["7. Waterbesoedeling", "Onderskei onoplosbare stowwe, oplosbare stowwe en kieme."],
  ["8. Vleilande", "Verduidelik waarom vleilande water en biodiversiteit beskerm."],
  ["9. Skoon water", "Gebruik prosesse soos filtrasie en kook om water veiliger te maak."],
  ["10. Waterfilter", "Ontwerp, maak, toets en verbeter 'n eenvoudige filter."]
];

const words = [
  ["materie", "Alles wat massa het en ruimte opneem."],
  ["deeltjies", "Klein deeltjies waaruit materie bestaan."],
  ["vaste stof", "Materie met 'n vaste vorm en spesifieke volume."],
  ["vloeistof", "Materie wat die vorm van die houer aanneem."],
  ["gas", "Materie waarvan deeltjies ver uitmekaar is en die houer vul."],
  ["mengsel", "Twee of meer stowwe wat saam gemeng is."],
  ["sifting", "Skei groter en kleiner deeltjies met 'n sif."],
  ["filtrasie", "Gebruik 'n filter om vaste stof uit vloeistof te skei."],
  ["afsakking", "Swaarder deeltjies sak na die bodem."],
  ["afgieting", "Gooi die boonste vloeistof versigtig af."],
  ["magneet", "Voorwerp wat magnetiese materiale aantrek."],
  ["oplossing", "'n Eenvormige mengsel waarin 'n stof opgelos is."],
  ["oplosmiddel", "Die stof waarin 'n ander stof oplos."],
  ["oplosbare stof", "Die stof wat in 'n oplosmiddel oplos."],
  ["oplosbaar", "Kan in 'n vloeistof oplos."],
  ["onoplosbaar", "Kan nie in die vloeistof oplos nie."],
  ["suspensie", "'n Mengsel met onoplosbare deeltjies wat kan afsak."],
  ["konsentrasie", "Hoeveel opgeloste stof in 'n oplossing is."],
  ["waterbesoedeling", "Wanneer skadelike stowwe of kieme in water beland."],
  ["sanitasie", "Skoon en veilige hantering van afval en water om siektes te voorkom."],
  ["parasiet", "'n Organisme wat op of in 'n ander organisme leef en skade kan doen."],
  ["bakteriee", "Mikroskopiese organismes; party kan siektes veroorsaak."],
  ["cholera", "'n Ernstige siekte wat deur besmette water kan versprei."],
  ["vleiland", "'n Deurweekte gebied wat water hou en unieke habitats bied."],
  ["estuarium", "Waar 'n rivier by die see uitmond."],
  ["grondwater", "Water wat diep in die grond insypel en ondergronds vasgevang word."],
  ["biodiversiteit", "Die verskeidenheid plante en diere in 'n gebied."],
  ["bleikmiddel", "'n Chloorhoudende chemikalie wat kieme kan doodmaak as dit korrek gebruik word."],
  ["waterfilter", "'n Stelsel wat onsuiwerhede uit water help verwyder."]
];

const examPractice = [
  {
    marks: "3 punte",
    question: "Vergelyk deeltjies in vaste stowwe, vloeistowwe en gasse.",
    answer: ["Vaste stof: deeltjies is styf teen mekaar in 'n patroon.", "Vloeistof: deeltjies is naby mekaar, maar kan rondbeweeg.", "Gas: deeltjies is ver uitmekaar en beweeg in alle rigtings."]
  },
  {
    marks: "4 punte",
    question: "Kies 'n skeidingsmetode vir elke mengsel: bone, sand en water, koffiekorrels en water, ystervylsels en sand.",
    answer: ["Bone: sorteer met die hand.", "Sand en water: afsakking en afgieting of filtrasie.", "Koffiekorrels en water: filtrasie.", "Ystervylsels en sand: magneet."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik die verskil tussen 'n oplossing en 'n suspensie.",
    answer: ["In 'n oplossing los die stof op en die mengsel lyk eenvormig.", "Die opgeloste stof kan nie meer gesien word nie.", "In 'n suspensie los die deeltjies nie op nie.", "Die deeltjies kan dryf en later afsak."]
  },
  {
    marks: "3 punte",
    question: "Noem en verduidelik drie faktore wat die tempo van oplos beinvloed.",
    answer: ["Temperatuur: warmer water laat stowwe vinniger oplos.", "Roer: versprei deeltjies vinniger deur die water.", "Deeltjiegrootte: kleiner korrels los vinniger op as groot klonte."]
  },
  {
    marks: "4 punte",
    question: "Gee twee onoplosbare en twee oplosbare waterbesoedelstowwe.",
    answer: ["Onoplosbaar: plastiek, olie, motorbande, blikkies of glas.", "Onoplosbaar: kies enige twee uit die lys.", "Oplosbaar: seep, bemestingstowwe, insekdoders, sure of gifstowwe.", "Oplosbaar: kies enige twee uit die lys."]
  },
  {
    marks: "4 punte",
    question: "Waarom is vleilande belangrik vir mense, plante en diere?",
    answer: ["Hulle hou water terug soos sponse.", "Hulle help om water te suiwer.", "Hulle bied habitats vir baie plante en diere.", "Hulle ondersteun biodiversiteit en kan toerisme/aktiwiteite vir mense bied."]
  },
  {
    marks: "3 punte",
    question: "Verduidelik waarom water eers gefiltreer en daarna gesuiwer moet word.",
    answer: ["Filtrasie verwyder sigbare vaste stowwe.", "Kieme kan steeds in die water wees.", "Kook of korrekte chloorbehandeling maak kieme dood en maak water veiliger."]
  },
  {
    marks: "5 punte",
    question: "Ontwerp-evaluering: hoe sal jy 'n tuisgemaakte waterfilter toets en verbeter?",
    answer: ["Kyk hoe vuil die water voor die filter is.", "Gooi dit deur die filter en vergelyk die water daarna.", "Let op of modder en vaste deeltjies verwyder is.", "Noem wat nie goed gewerk het nie.", "Verbeter die volgorde of dikte van lae soos gruis, gras en sand."]
  }
];

const emptyCopy = {
  learn: {
    title: "NWT-leerwerk kom hier in",
    body: "Sodra die PDF-dokumente gestuur is, bou ons die leerpad met kort opsommings, kernwoorde en moeiliker eksamenvrae."
  },
  cards: {
    title: "Nog geen flitskaarte nie",
    body: "Die flitskaarte word uit die NWT-inhoud gemaak wanneer die nuwe dokumente bygevoeg word."
  },
  quiz: {
    title: "Nog geen vasvra nie",
    body: "Die vasvra sal vrae, antwoorde en terugvoer uit die NWT-werk bevat."
  },
  practice: {
    title: "Nog geen vraestel-oefening nie",
    body: "Hier kom langer modelantwoorde en punte-wenke vir NWT."
  },
  timeline: {
    title: "Nog geen volgorde-afdeling nie",
    body: "As die NWT-werk prosesse of stappe het, plaas ons dit hier in volgorde."
  },
  words: {
    title: "Nog geen woordelys nie",
    body: "Belangrike NWT-terme en definisies kom hier."
  }
};

const state = {
  done: new Set(JSON.parse(localStorage.getItem("nwtDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("nwtDone", JSON.stringify([...state.done]));
}

function emptyCard(copy) {
  return `
    <article class="topic-card">
      <div class="topic-visual" aria-label="${topicPictures[0].label}" role="img">${topicPictures[0].svg}</div>
      <h3>${copy.title}</h3>
      <p class="feedback">${copy.body}</p>
    </article>
  `;
}

function renderProgress() {
  const total = learningItems.length;
  const done = [...state.done].filter((index) => index < total).length;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${total ? (done / total) * 100 : 0}%`;
}

function renderTopics() {
  if (!learningItems.length) {
    $("#topicGrid").innerHTML = emptyCard(emptyCopy.learn);
    return;
  }

  $("#topicGrid").innerHTML = learningItems.map((topic, index) => {
    const done = state.done.has(index);
    const picture = topicPictures[topic.picture] || topicPictures[0];
    return `
      <article class="topic-card ${done ? "is-done" : ""}">
        <div class="topic-visual" aria-label="${picture.label}" role="img">${picture.svg}</div>
        <h3>${index + 1}. ${topic.title}</h3>
        <div class="topic-groups">
          ${topic.groups.map((group) => `
            <section class="mini-section">
              <h4>${group.label}</h4>
              <ul>${group.lines.map((line) => `<li>${line}</li>`).join("")}</ul>
            </section>
          `).join("")}
        </div>
        <button class="${done ? "secondary-button" : "primary-button"}" data-topic="${index}" type="button">
          ${done ? "Klaar gemerk" : "Merk as geleer"}
        </button>
      </article>
    `;
  }).join("");
}

function renderCard() {
  if (!flashcards.length) {
    $("#flashcard").innerHTML = `
      <div>
        <span class="eyebrow">Flitskaarte</span>
        <h3>${emptyCopy.cards.title}</h3>
        <p>${emptyCopy.cards.body}</p>
      </div>
    `;
    $("#flipCard").disabled = true;
    $("#prevCard").disabled = true;
    $("#nextCard").disabled = true;
    $("#cardCounter").textContent = "0 kaarte";
    return;
  }

  $("#flipCard").disabled = false;
  $("#prevCard").disabled = false;
  $("#nextCard").disabled = false;

  const [question, answer] = flashcards[state.cardIndex];
  $("#flashcard").innerHTML = `
    <div>
      <span class="eyebrow">${state.cardFlipped ? "Antwoord" : "Vraag"}</span>
      <h3>${state.cardFlipped ? answer : question}</h3>
      <p>${state.cardFlipped ? "Kan jy nou die vraag weer sonder hulp antwoord?" : "Dink eers self. Klik dan om die antwoord te sien."}</p>
    </div>
  `;
  $("#flipCard").textContent = state.cardFlipped ? "Wys vraag" : "Wys antwoord";
  $("#cardCounter").textContent = `Kaart ${state.cardIndex + 1} van ${flashcards.length}`;
}

function renderQuiz() {
  if (!quiz.length) {
    $("#quizBox").innerHTML = emptyCard(emptyCopy.quiz);
    return;
  }

  if (state.quizIndex >= quiz.length) {
    const percent = Math.round((state.score / quiz.length) * 100);
    $("#quizBox").innerHTML = `
      <div class="quiz-question">
        <span class="eyebrow">Klaar</span>
        <h3>Jou punt: ${state.score} uit ${quiz.length} (${percent}%)</h3>
        <p class="feedback">${percent >= 70 ? "Mooi. Hersien nou die flitskaarte om dit vas te le." : "Goeie poging. Lees die leerpad weer en probeer dan weer."}</p>
      </div>
    `;
    return;
  }

  const item = quiz[state.quizIndex];
  $("#quizBox").innerHTML = `
    <div class="quiz-question">
      <span class="eyebrow">Vraag ${state.quizIndex + 1} van ${quiz.length}</span>
      <h3>${item.question}</h3>
      <div class="answers">
        ${item.options.map((option, index) => `<button class="answer" data-answer="${index}" type="button">${option}</button>`).join("")}
      </div>
      <p class="feedback" id="quizFeedback"></p>
    </div>
  `;
}

function renderPractice() {
  if (!examPractice.length) {
    $("#practiceList").innerHTML = emptyCard(emptyCopy.practice);
    return;
  }

  $("#practiceList").innerHTML = examPractice.map((item, index) => `
    <article class="practice-card">
      <span class="practice-meta">Vraag ${index + 1} | ${item.marks}</span>
      <h3>${item.question}</h3>
      <p>Modelantwoord:</p>
      <ul>${item.answer.map((line) => `<li>${line}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderTimeline() {
  if (!timeline.length) {
    $("#timelineList").innerHTML = emptyCard(emptyCopy.timeline);
    return;
  }

  $("#timelineList").innerHTML = timeline.map(([date, event]) => `
    <article class="timeline-item">
      <strong>${date}</strong>
      <p>${event}</p>
    </article>
  `).join("");
}

function renderWords(filter = "") {
  if (!words.length) {
    $("#wordList").innerHTML = emptyCard(emptyCopy.words);
    return;
  }

  const term = filter.trim().toLowerCase();
  const visibleWords = words.filter(([word, meaning]) => `${word} ${meaning}`.toLowerCase().includes(term));
  $("#wordList").innerHTML = visibleWords.map(([word, meaning]) => `
    <article class="word-card">
      <h3>${word}</h3>
      <p>${meaning}</p>
    </article>
  `).join("") || `<p class="feedback">Geen woord pas by jou soektog nie.</p>`;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    $(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

$("#topicGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  const index = Number(button.dataset.topic);
  if (state.done.has(index)) {
    state.done.delete(index);
  } else {
    state.done.add(index);
  }
  saveProgress();
  renderTopics();
  renderProgress();
});

$("#resetProgress").addEventListener("click", () => {
  state.done.clear();
  saveProgress();
  renderTopics();
  renderProgress();
});

$("#flipCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#flashcard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#prevCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardIndex = (state.cardIndex - 1 + flashcards.length) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#nextCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardIndex = (state.cardIndex + 1) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#quizBox").addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button || state.answered) return;
  state.answered = true;
  const choice = Number(button.dataset.answer);
  const item = quiz[state.quizIndex];
  const buttons = document.querySelectorAll("[data-answer]");
  buttons.forEach((answerButton) => {
    answerButton.disabled = true;
    const answerIndex = Number(answerButton.dataset.answer);
    if (answerIndex === item.answer) answerButton.classList.add("correct");
    if (answerIndex === choice && choice !== item.answer) answerButton.classList.add("wrong");
  });
  if (choice === item.answer) state.score += 1;
  $("#quizFeedback").textContent = choice === item.answer ? `Reg. ${item.fact}` : `Nog nie. ${item.fact}`;
  setTimeout(() => {
    state.quizIndex += 1;
    state.answered = false;
    renderQuiz();
  }, 1600);
});

$("#restartQuiz").addEventListener("click", () => {
  state.quizIndex = 0;
  state.score = 0;
  state.answered = false;
  renderQuiz();
});

$("#wordSearch").addEventListener("input", (event) => renderWords(event.target.value));

renderTopics();
renderProgress();
renderCard();
renderQuiz();
renderPractice();
renderTimeline();
renderWords();
