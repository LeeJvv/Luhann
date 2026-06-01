const topics = [
  {
    title: "Mapungubwe en die Limpopo-vallei",
    points: [
      "Boeregemeenskappe het vanaf 900 n.C. in die Limpopo-vallei gewoon.",
      "Teen ongeveer 1220 n.C. was Mapungubwe ’n belangrike koninkryk.",
      "Die gemeenskap het groter en meer georganiseerd geword."
    ]
  },
  {
    title: "Boeregemeenskappe",
    points: [
      "Mense het gewasse geplant en diere aangehou.",
      "Hulle het potte, gereedskap, wapens en ornamente gemaak.",
      "Hulle het goedere met ander mense geruil."
    ]
  },
  {
    title: "Hoekom Mapungubwe belangrik was",
    points: [
      "Dit was ’n groot nedersetting en later ’n koninkryk.",
      "Daar was ’n koning of hoofman.",
      "Handel het Mapungubwe met Indië, China, die Midde-Ooste en die Ooskus verbind."
    ]
  },
  {
    title: "Argeologie en artefakte",
    points: [
      "Argeoloë bestudeer potte, krale, gereedskap, geboue, grafte en beenreste.",
      "Artefakte is ou voorwerpe wat mense gemaak of gebruik het.",
      "Hierdie bewyse help ons om van Mapungubwe te leer."
    ]
  },
  {
    title: "Swahili-handel",
    points: [
      "Swahili-handelaars het aan die Ooskus van Afrika gewoon.",
      "Uit Afrika is goud, ivoor, renosterhoring en slawe verhandel.",
      "Na Afrika is glasware, krale, katoen, speserye en porselein gebring."
    ]
  },
  {
    title: "Die Renaissance",
    points: [
      "Die Renaissance was ’n tydperk van nuwe idees in Europa.",
      "Mense het vrae gevra, ondersoek ingestel en eksperimente gedoen.",
      "Dit was ’n keerpunt met groot veranderinge."
    ]
  },
  {
    title: "Leonardo da Vinci en Galileo",
    points: [
      "Leonardo was ’n kunstenaar, uitvinder en nuuskierige denker.",
      "Galileo het ’n teleskoop gebruik om die hemelruim te bestudeer.",
      "Galileo het gewys dat bewyse belangrik is om idees te toets."
    ]
  },
  {
    title: "Uitvindings en tegnologie",
    points: [
      "Die karveel was ’n sterk skip vir lang reise.",
      "Die kompas en kaarte het seevaarders gehelp om roetes te vind.",
      "Buskruit, kanonne en die teleskoop het die wêreld verander."
    ]
  },
  {
    title: "Europese ontdekkingsreise",
    points: [
      "Europeërs het gereis uit nuuskierigheid, vir handel en wins.",
      "Hulle wou speserye soos kaneel, peper, naeltjies en neutmuskaat hê.",
      "Sommige wou ook die Christelike geloof versprei."
    ]
  },
  {
    title: "Dias en da Gama",
    points: [
      "Bartholomeus Dias het in 1488 by Mosselbaai aangekom.",
      "Hy het om die suidpunt van Afrika gevaar en dit die Kaap van Storms genoem.",
      "Vasco da Gama het Portugal in 1497 verlaat en uiteindelik Indië bereik."
    ]
  }
];

const topicPictures = [
  {
    label: "Heuwel",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#d9f3ee"></rect><circle cx="92" cy="21" r="13" fill="#f59e0b"></circle><path d="M15 74c18-28 39-38 62-24 13 8 22 7 31 1v23z" fill="#0f766e"></path><path d="M42 48h36v26H42z" fill="#9a3412"></path><path d="M35 48h50L60 29z" fill="#facc15"></path></svg>`
  },
  {
    label: "Plaas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#eef7d6"></rect><path d="M16 70h88" stroke="#65a30d" stroke-width="7" stroke-linecap="round"></path><path d="M28 61c0-17 12-28 28-28s28 11 28 28" fill="#fef3c7"></path><path d="M41 61V43h30v18" fill="#b45309"></path><circle cx="86" cy="55" r="9" fill="#0f766e"></circle></svg>`
  },
  {
    label: "Kroon",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><path d="M25 58l10-29 24 22 26-22 10 29z" fill="#f59e0b"></path><path d="M30 63h60v10H30z" fill="#92400e"></path><circle cx="35" cy="28" r="6" fill="#ef4444"></circle><circle cx="60" cy="48" r="6" fill="#0ea5e9"></circle><circle cx="85" cy="28" r="6" fill="#22c55e"></circle></svg>`
  },
  {
    label: "Artefakte",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#f3eadc"></rect><path d="M39 26h42l-7 45H46z" fill="#c2410c"></path><path d="M47 36h26M45 50h30" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"></path><circle cx="84" cy="66" r="10" fill="#0f766e"></circle><path d="M28 68l19-19" stroke="#475569" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Handel",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M21 60h78l-13 16H34z" fill="#0f766e"></path><path d="M38 58V25l34 12-34 12" fill="#f8fafc" stroke="#1e3a8a" stroke-width="4" stroke-linejoin="round"></path><circle cx="35" cy="65" r="5" fill="#f59e0b"></circle><circle cx="57" cy="65" r="5" fill="#ef4444"></circle><circle cx="79" cy="65" r="5" fill="#22c55e"></circle></svg>`
  },
  {
    label: "Idees",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#ede9fe"></rect><circle cx="60" cy="38" r="22" fill="#facc15"></circle><path d="M49 64h22v10H49z" fill="#7c3aed"></path><path d="M30 38H18M102 38H90M60 8v12M35 14l8 10M85 14l-8 10" stroke="#6d28d9" stroke-width="5" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Teleskoop",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><path d="M34 55l43-25 9 15-43 25z" fill="#1d4ed8"></path><path d="M75 27l12-7 12 21-12 7z" fill="#0f766e"></path><path d="M54 63l-8 16M58 61l14 15" stroke="#475569" stroke-width="5" stroke-linecap="round"></path><circle cx="29" cy="24" r="5" fill="#f59e0b"></circle></svg>`
  },
  {
    label: "Kompas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#ecfeff"></rect><circle cx="60" cy="45" r="29" fill="#ffffff" stroke="#0f766e" stroke-width="6"></circle><path d="M66 39l17-18-8 24-21 25 7-25-24 8z" fill="#d97706"></path><circle cx="60" cy="45" r="5" fill="#17212b"></circle></svg>`
  },
  {
    label: "Speserye",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff1e6"></rect><path d="M30 32h60l-8 42H38z" fill="#b45309"></path><path d="M34 32l8-12h36l8 12" fill="#f59e0b"></path><circle cx="48" cy="54" r="5" fill="#fed7aa"></circle><circle cx="61" cy="48" r="5" fill="#fde68a"></circle><circle cx="73" cy="58" r="5" fill="#bbf7d0"></circle></svg>`
  },
  {
    label: "Skip",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M19 62h82L86 76H35z" fill="#7c2d12"></path><path d="M56 57V18" stroke="#334155" stroke-width="5" stroke-linecap="round"></path><path d="M60 21v31h31c-8-15-18-25-31-31z" fill="#f8fafc" stroke="#0f766e" stroke-width="4"></path><path d="M52 27v27H29c5-13 13-22 23-27z" fill="#fef3c7" stroke="#d97706" stroke-width="4"></path></svg>`
  }
];

const shortTopicPoints = [
  ["Mense woon hier.", "Dorpies groei.", "Mapungubwe word sterk."],
  ["Plant kos.", "Hou diere.", "Maak potte en goed."],
  ["Daar is 'n koning.", "Mense dryf handel.", "Mapungubwe is belangrik."],
  ["Argeoloe soek bewyse.", "Potte en krale help.", "Dit vertel die storie."],
  ["Handelaars vaar ver.", "Goud gaan uit.", "Krale kom in."],
  ["Nuwe idees begin.", "Mense vra vrae.", "Hulle toets idees."],
  ["Leonardo maak idees.", "Galileo kyk na sterre.", "Bewyse is belangrik."],
  ["Karveel: sterk skip.", "Kompas: wys rigting.", "Teleskoop: kyk ver."],
  ["Hulle soek geld.", "Hulle soek speserye.", "Hulle wil reis."],
  ["Dias sien Mosselbaai.", "Da Gama vaar verder.", "Hy bereik Indie."]
];

const learningItems = [
  {
    title: "Mapungubwe: tydlyn",
    picture: 0,
    groups: [
      { label: "900 n.C.", lines: ["Boere woon in die Limpopo-vallei.", "Hulle plant kos.", "Hulle hou diere."] },
      { label: "900-1300 n.C.", lines: ["Dorpies word groter.", "Mense werk meer saam.", "Leiers word belangrik."] },
      { label: "Ongeveer 1220 n.C.", lines: ["Mapungubwe word sterk.", "Dit word 'n koninkryk.", "Daar is 'n koning of hoofman."] }
    ]
  },
  {
    title: "Boeregemeenskappe",
    picture: 1,
    groups: [
      { label: "Hoe hulle geleef het", lines: ["Hulle plant gewasse.", "Hulle hou beeste.", "Hulle hou bokke en skape.", "Hulle woon in klein dorpies."] },
      { label: "Wat hulle gemaak het", lines: ["Potte.", "Gereedskap.", "Wapens.", "Ornamente."] },
      { label: "Handel", lines: ["Hulle ruil goed.", "Hulle koop en verkoop.", "Hulle werk met ander mense."] }
    ]
  },
  {
    title: "Belangrike woorde",
    picture: 3,
    groups: [
      { label: "millennium", lines: ["1 000 jaar."] },
      { label: "gemeenskap", lines: ["'n Groep mense.", "Hulle woon saam."] },
      { label: "handel", lines: ["Koop.", "Verkoop.", "Ruil."] },
      { label: "sosiale hierargie", lines: ["Mense het verskillende status.", "Party mense is belangriker."] }
    ]
  },
  {
    title: "Hoekom Mapungubwe belangrik was",
    picture: 2,
    groups: [
      { label: "Groot plek", lines: ["Dit was 'n groot nedersetting.", "Later was dit 'n koninkryk.", "Daar was 'n koning of hoofman."] },
      { label: "Handel", lines: ["Mense dryf handel.", "Handel bring rykdom.", "Mapungubwe is deel van groot netwerke."] },
      { label: "Verbindings", lines: ["Indie.", "China.", "Die Midde-Ooste.", "Die Ooskus van Afrika."] }
    ]
  },
  {
    title: "Argeologie en artefakte",
    picture: 3,
    groups: [
      { label: "Hoe ons weet", lines: ["Ons leer deur argeologie.", "Argeoloe soek bewyse.", "Bewyse vertel die storie."] },
      { label: "Argeoloe bestudeer", lines: ["Potte.", "Krale.", "Gereedskap.", "Geboue.", "Grafte.", "Beenreste.", "Metaalvoorwerpe."] },
      { label: "Artefak", lines: ["'n Ou voorwerp.", "Mense het dit gemaak.", "Of mense het dit gebruik."] }
    ]
  },
  {
    title: "Swahili-handel",
    picture: 4,
    groups: [
      { label: "Waar", lines: ["Swahili-handelaars woon aan die Ooskus.", "Hulle vaar oor die see.", "Hulle dryf handel ver."] },
      { label: "Hulle handel met", lines: ["Afrika.", "Arabie.", "Indie.", "China."] },
      { label: "Uit Afrika", lines: ["Goud.", "Ivoor.", "Renosterhoring.", "Skilpaddoppe.", "Slawe."] },
      { label: "Na Afrika", lines: ["Glasware.", "Krale.", "Katoen.", "Speserye.", "Porselein."] }
    ]
  },
  {
    title: "Die Renaissance",
    picture: 5,
    groups: [
      { label: "Wat was dit?", lines: ["'n Tydperk in Europa.", "Mense kry nuwe idees.", "Dit was 'n keerpunt."] },
      { label: "Mense begin", lines: ["Vrae vra.", "Ondersoek instel.", "Eksperimente doen.", "Nuwe dinge ontdek."] },
      { label: "Onthou", lines: ["Renaissance beteken nuwe idees.", "Keerpunt beteken groot verandering."] }
    ]
  },
  {
    title: "Leonardo da Vinci",
    picture: 5,
    groups: [
      { label: "Wie was hy?", lines: ["'n Kunstenaar.", "'n Uitvinder.", "'n Wetenskaplike denker.", "Baie nuuskierig."] },
      { label: "Hy hou van", lines: ["Die menslike liggaam.", "Masjiene.", "Vlieg.", "Kuns.", "Natuur."] },
      { label: "Hoekom belangrik?", lines: ["Hy wys Renaissance-denke.", "Hy vra vrae.", "Hy probeer nuwe idees."] }
    ]
  },
  {
    title: "Galileo Galilei",
    picture: 6,
    groups: [
      { label: "Wie was hy?", lines: ["'n Wetenskaplike.", "Hy gebruik 'n teleskoop.", "Hy kyk na die hemelruim."] },
      { label: "Hy help wys", lines: ["Die aarde is nie die middelpunt nie.", "Planete beweeg om die son.", "Bewyse toets idees."] },
      { label: "Onthou", lines: ["Moenie net glo nie.", "Soek bewyse.", "Toets jou idees."] }
    ]
  },
  {
    title: "Uitvindings en tegnologie",
    picture: 7,
    groups: [
      { label: "Karveel", lines: ["'n Sterk skip.", "Goed vir lang reise."] },
      { label: "Kompas en kaarte", lines: ["Kompas wys rigting.", "Kaarte wys roetes.", "Seevaarders verdwaal minder."] },
      { label: "Buskruit en teleskoop", lines: ["Buskruit word in gewere gebruik.", "Ook in kanonne.", "Teleskoop help om die hemelruim te sien."] }
    ]
  },
  {
    title: "Redes vir ontdekkingsreise",
    picture: 8,
    groups: [
      { label: "1. Nuuskierigheid", lines: ["Hulle wil die wereld leer ken.", "Hulle wil nuwe plekke sien."] },
      { label: "2. Handel en wins", lines: ["Hulle wil koop.", "Hulle wil verkoop.", "Hulle wil geld maak."] },
      { label: "3. Speserye", lines: ["Kaneel.", "Peper.", "Naeltjies.", "Neutmuskaat.", "Speserye is waardevol."] },
      { label: "4. Geloof", lines: ["Hulle wil Christenskap versprei.", "Hulle wil mense bekeer."] }
    ]
  },
  {
    title: "Portugal soek 'n seeroete",
    picture: 9,
    groups: [
      { label: "Hoekom?", lines: ["Landroetes is duur.", "Arabiere beheer baie handel.", "Speserye is baie waardevol.", "Portugal wil meer wins maak."] },
      { label: "Die plan", lines: ["Vaar om Afrika.", "Vind die Ooste.", "Koop goedere self."] }
    ]
  },
  {
    title: "Bartholomeus Dias",
    picture: 9,
    groups: [
      { label: "Wie was hy?", lines: ["'n Portugese ontdekkingsreisiger."] },
      { label: "Belangrike feite", lines: ["Hy kom in 1488 by Mosselbaai aan.", "Hy vaar om die suidpunt van Afrika.", "Hy noem dit die Kaap van Storms.", "Later word dit Kaap die Goeie Hoop."] }
    ]
  },
  {
    title: "Dias en die Khoi-Khoi",
    picture: 3,
    groups: [
      { label: "Toe Dias aankom", lines: ["Die Khoi-Khoi was reeds daar.", "Daar was spanning.", "Dias se mense skiet 'n Khoi-man dood."] },
      { label: "Wat dit wys", lines: ["Ontdekkingsreise was nie altyd vreedsaam nie.", "Kontak kon gevaarlik wees.", "Mense is seergemaak."] }
    ]
  },
  {
    title: "Vasco da Gama",
    picture: 9,
    groups: [
      { label: "Wie was hy?", lines: ["Ook 'n Portugese ontdekkingsreisiger."] },
      { label: "Belangrike feite", lines: ["Hy verlaat Portugal in 1497.", "Hy vaar verby Mosselbaai.", "Hy kom by Natal aan.", "Hy noem dit Natal.", "Dit was naby Kersfees.", "Hy bereik uiteindelik Indie."] }
    ]
  }
];

const flashcards = [
  ["Wat beteken millennium?", "1 000 jaar."],
  ["Wat is ’n artefak?", "’n Ou voorwerp wat mense gemaak of gebruik het."],
  ["Wat was Mapungubwe?", "’n Belangrike Afrika-koninkryk in die Limpopo-vallei."],
  ["Wie was Leonardo da Vinci?", "’n Renaissance-kunstenaar, uitvinder en wetenskaplike denker."],
  ["Waarvoor word ’n kompas gebruik?", "Om rigting te vind."],
  ["Wie het in 1488 by Mosselbaai aangekom?", "Bartholomeus Dias."],
  ["Wie het Indië per see bereik?", "Vasco da Gama."],
  ["Hoekom wou Europeërs speserye hê?", "Dit was waardevol en kon kos geur en bewaar."],
  ["Wat het Galileo gebruik om die hemelruim te bestudeer?", "’n Teleskoop."],
  ["Wat was die Renaissance?", "’n Tydperk in Europa toe mense nuwe idees ontwikkel het."]
];

const quiz = [
  {
    question: "Watter handelsnetwerke was met Mapungubwe verbind?",
    options: ["Indië, China, die Midde-Ooste en die Ooskus van Afrika", "Amerika, Australië en Antarktika", "Net Portugal en Spanje", "Slegs die Limpopo-vallei"],
    answer: 0,
    fact: "Mapungubwe was deel van wyer handelsnetwerke oor Afrika en die Indiese Oseaan."
  },
  {
    question: "Wat bestudeer argeoloë om oor die verlede te leer?",
    options: ["Net koerante", "Potte, krale, gereedskap, grafte en ander bewyse", "Moderne motors", "Televisieprogramme"],
    answer: 1,
    fact: "Argeologie gebruik oorblyfsels en artefakte as bewyse."
  },
  {
    question: "Waar het Swahili-handelaars gewoon?",
    options: ["Aan die Ooskus van Afrika", "In die Alpe", "In die Karoo alleen", "In China"],
    answer: 0,
    fact: "Swahili-handelaars het Afrika met Arabië, Indië en China verbind."
  },
  {
    question: "Wat is die beste beskrywing van die Renaissance?",
    options: ["’n Tyd sonder nuwe idees", "’n Tydperk van nuwe idees en ontdekkings", "’n Skip", "’n Spesery"],
    answer: 1,
    fact: "Renaissance beteken ’n tyd van nuwe denke, ondersoek en verandering."
  },
  {
    question: "Watter uitvinding het seevaarders met rigting gehelp?",
    options: ["Teleskoop", "Kompas", "Buskruit", "Porselein"],
    answer: 1,
    fact: "’n Kompas wys rigting en help met navigasie."
  },
  {
    question: "Wat het Dias se ontmoeting met die Khoi-Khoi by Mosselbaai gewys?",
    options: ["Ontdekkingsreise was altyd vreedsaam", "Die Khoi-Khoi was nie daar nie", "Ontdekkingsreise kon spanning en geweld bring", "Niemand het handel gedryf nie"],
    answer: 2,
    fact: "Dias se mense het ’n Khoi-man doodgeskiet, wat wys dat kontak nie altyd vreedsaam was nie."
  },
  {
    question: "Hoekom wou Portugal ’n seeroete na die Ooste vind?",
    options: ["Landroetes was duur en speserye was waardevol", "Hulle wou ysberge soek", "Hulle wou Mapungubwe bou", "Hulle wou ophou handel dryf"],
    answer: 0,
    fact: "Portugal wou goedkoper toegang tot waardevolle goedere en meer wins hê."
  }
];

const timeline = [
  ["900 n.C.", "Boeregemeenskappe woon in die Limpopo-vallei."],
  ["900-1300 n.C.", "Nedersettings raak groter en meer georganiseerd."],
  ["Ongeveer 1220 n.C.", "Mapungubwe word ’n belangrike koninkryk."],
  ["1488", "Bartholomeus Dias kom by Mosselbaai aan."],
  ["1497", "Vasco da Gama verlaat Portugal op pad na die Ooste."]
];

const words = [
  ["millennium", "1 000 jaar."],
  ["gemeenskap", "’n Groep mense wat saam woon."],
  ["handel", "Koop, verkoop of ruil."],
  ["sosiale hiërargie", "Mense het verskillende status of belangrikheid."],
  ["artefak", "’n Voorwerp wat mense lank gelede gemaak of gebruik het."],
  ["argeologie", "Die studie van die verlede deur oorblyfsels en voorwerpe."],
  ["Renaissance", "’n Tydperk van nuwe idees in Europa."],
  ["keerpunt", "’n Tyd wanneer groot veranderinge begin."],
  ["karveel", "’n Sterk skip wat vir lang seereise gebruik is."],
  ["teleskoop", "’n Instrument waarmee mense ver dinge soos planete kan bestudeer."]
];

learningItems.splice(
  0,
  learningItems.length,
  {
    title: "Limpopo-vallei: groot veranderinge",
    picture: 0,
    groups: [
      { label: "Tyd en plek", lines: ["Van ongeveer 900 n.C. tot 1300 n.C. het boeregemeenskappe in die Limpopo-vallei verander.", "K2 en Schroda was belangrike nedersettings voor Mapungubwe.", "Mapungubwe het later 'n sterker en ryker sentrum geword."] },
      { label: "Wat verander het", lines: ["Dorpies het groter geword.", "Leiers en hoofmanne het meer mag gekry.", "Gemeenskappe het meer georganiseerd en kompleks geword."] },
      { label: "Eksamenmanier", lines: ["Kan jy verduidelik wat verander het, nie net die datums noem nie?", "Gebruik woorde soos millennium, hierargie, hoofman en kompleks."] }
    ]
  },
  {
    title: "Boeregemeenskappe en hierargie",
    picture: 1,
    groups: [
      { label: "Bestaan", lines: ["Mense was bestaansboere: hulle het hoofsaaklik geproduseer wat hulle self nodig gehad het.", "Hulle het beeste, skape en bokke aangehou.", "Hulle het gewasse soos sorghum, manna en pampoen geplant."] },
      { label: "Werk en goedere", lines: ["Hulle het yster gebruik vir gereedskap, wapens en ornamente.", "Potte, krale en metaalvoorwerpe help historici om hul lewe te verstaan."] },
      { label: "Maatskaplike verhoudings", lines: ["Ouer mense was dikwels belangriker as jonger mense.", "Mans het gewoonlik meer mag as vroue gehad.", "Hierargie beteken dat party mense hoër status en meer mag het."] }
    ]
  },
  {
    title: "Argeologie: hoe ons bewyse gebruik",
    picture: 3,
    groups: [
      { label: "Bewyse", lines: ["Argeoloe bestudeer artefakte, geboue, grafte, potte, krale, beenreste en metaalvoorwerpe.", "Artefakte is voorwerpe wat mense gemaak of gebruik het.", "Bewyse help ons om oor mense te leer wat nie alles neergeskryf het nie."] },
      { label: "Moeiliker antwoord", lines: ["Moenie net se 'potte' nie: verduidelik wat potte kan wys, byvoorbeeld kos, handel of vaardighede.", "Krale en porselein kan wys dat daar kontak met ver plekke was."] }
    ]
  },
  {
    title: "Mapungubwe as koninkryk",
    picture: 2,
    groups: [
      { label: "Hoekom belangrik?", lines: ["Teen ongeveer 1220 n.C. was Mapungubwe 'n belangrike koninkryk.", "Daar was politieke mag, rykdom en 'n leier/koning.", "Die nedersetting was deel van handelsnetwerke oor Afrika en die Indiese Oseaan."] },
      { label: "Verbindings", lines: ["Mapungubwe is verbind met die Ooskus van Afrika, Arabie, Indie en China.", "Handel het goedere, idees en rykdom gebring.", "Goud en ivoor uit Afrika was waardevol in internasionale handel."] }
    ]
  },
  {
    title: "Swahili-handel oor die Indiese Oseaan",
    picture: 4,
    groups: [
      { label: "Wie en waar", lines: ["Swahili-handelaars het aan die Ooskus van Afrika gewoon.", "Hulle het Afrika met Arabie, Indie en China verbind.", "Hulle het per see langs handelsroetes gereis."] },
      { label: "Uit Afrika", lines: ["Goud.", "Ivoor.", "Renosterhoring.", "Skilpaddoppe.", "Slawe."] },
      { label: "Na Afrika", lines: ["Glasware.", "Krale.", "Katoen.", "Speserye.", "Porselein."] }
    ]
  },
  {
    title: "Renaissance: nuwe idees en kennis",
    picture: 5,
    groups: [
      { label: "Betekenis", lines: ["Renaissance beteken hergeboorte of 'n tyd van nuwe idees.", "Dit was 'n keerpunt in Europa.", "Mense het begin vrae vra, ondersoek instel en eksperimente doen."] },
      { label: "Voor en tydens", lines: ["Voor die Renaissance het baie mense geglo wat die kerk of ou gesag hulle vertel het.", "Tydens die Renaissance het mense meer op waarneming en bewyse staatgemaak.", "Die eksamen kan vra of mense 'binne die boks' of 'buite die boks' begin dink het."] }
    ]
  },
  {
    title: "Leonardo da Vinci: bronvraag gereed",
    picture: 5,
    groups: [
      { label: "Wie was hy?", lines: ["Leonardo was 'n skilder, uitvinder, wetenskaplike denker en nuuskierige waarnemer.", "Hy word 'n Renaissance-man of universele genie genoem omdat hy in baie velde begaafd was.", "Hy het idees ondersoek en sketse van uitvindings gemaak."] },
      { label: "Skilderye", lines: ["Mona Lisa.", "Die Laaste Avondmaal.", "Skepping van Adam is deur Michelangelo, nie Leonardo nie. Moenie dit verwar nie."] },
      { label: "Uitvindings/sketse", lines: ["Vliegmasjiene.", "Militere masjiene of kanonne.", "Brue, duikpakke, voertuie of masjiene met ratte."] }
    ]
  },
  {
    title: "Galileo Galilei: bewyse en toerusting",
    picture: 6,
    groups: [
      { label: "Kernidee", lines: ["Galileo het 'n teleskoop gebruik om die hemelruim waar te neem.", "Sy waarnemings het gewys dat ou idees oor die aarde, son en planete verkeerd kan wees.", "Hy het bewyse gebruik, nie net tradisie of gesag nie."] },
      { label: "Eksamenantwoord", lines: ["Noem die toerusting: teleskoop.", "Noem die bewyse: waarnemings van planete/hemelliggame het gewys dat alles nie om die aarde wentel nie.", "Verduidelik hoekom dit Renaissance-denke wys: hy toets idees met bewyse."] }
    ]
  },
  {
    title: "Uitvindings wat ontdekkingsreise moontlik gemaak het",
    picture: 7,
    groups: [
      { label: "Karveel", lines: ["'n Karveel was 'n sterk seilskip vir lang reise.", "Dit kon beter op die oop see vaar.", "Dit het ontdekkers gehelp om om Afrika te reis."] },
      { label: "Kompas en kaarte", lines: ["Die kompas wys rigting.", "Kaarte help om roetes te beplan.", "Saam het dit die risiko van verdwaal verminder."] },
      { label: "Buskruit en kanonne", lines: ["Buskruit is in gewere en kanonne gebruik.", "Kanonne het skepe en fortifikasies sterker gemaak.", "Dit het Europese magte 'n voordeel in konflik gegee."] }
    ]
  },
  {
    title: "Redes vir ontdekkingsreise",
    picture: 8,
    groups: [
      { label: "Vier hoofredes", lines: ["Nuuskierigheid: hulle wou die wereld leer ken.", "Handel en wins: hulle wou goedkoper koop en duurder verkoop.", "Speserye: kaneel, peper, naeltjies en neutmuskaat was baie waardevol.", "Geloof, roem en mag: party wou Christenskap versprei of vir hul land roem kry."] },
      { label: "Valse seestories", lines: ["Sommige mense het geglo daar is monsters in onbekende see.", "Sommige het gedink skepe kan by die rand van die wereld afval.", "Sulke stories het reise gevaarliker en vreesaanjaender laat klink."] }
    ]
  },
  {
    title: "Europese lande wat meegeding het",
    picture: 8,
    groups: [
      { label: "Ken die vier", lines: ["Portugal.", "Spanje.", "Holland/Nederland.", "Engeland."] },
      { label: "Waarom kompetisie?", lines: ["Lande wou nuwe handelsroetes beheer.", "Hulle wou grondgebiede en hawens kry.", "Hulle wou wins, speserye en mag hê."] }
    ]
  },
  {
    title: "Portugal se seeroete na die Ooste",
    picture: 9,
    groups: [
      { label: "Probleem", lines: ["Landroetes na die Ooste was lank, duur en deur ander handelaars beheer.", "Speserye was gewild in Europa en kon groot wins bring.", "Portugal wou self by die Ooste uitkom deur om Afrika te vaar."] },
      { label: "Kaartwerk", lines: ["Ken Europa, Afrika, die Ooste/Indie en Suid-Afrika op 'n eenvoudige kaart.", "Dias se roete gaan om die suidpunt van Afrika.", "Da Gama se roete gaan verder tot Indie."] }
    ]
  },
  {
    title: "Bartholomeus Dias",
    picture: 9,
    groups: [
      { label: "Feite", lines: ["Dias was 'n Portugese ontdekkingsreisiger.", "Sy reis was 1487-1488.", "Hy het in 1488 by Mosselbaai aangekom.", "Hy het om die suidpunt van Afrika gevaar."] },
      { label: "Name en bakens", lines: ["Hy het die suidpunt die Kaap van Storms genoem.", "Dit is later Kaap die Goeie Hoop genoem.", "Portugese ontdekkers het soms 'n padrao, 'n klippilaar, opgerig om aanspraak te wys."] }
    ]
  },
  {
    title: "Dias en die Khoi-Khoi",
    picture: 3,
    groups: [
      { label: "Wat gebeur het", lines: ["Die Khoi-Khoi was reeds in die gebied toe Dias aankom.", "Daar was spanning en misverstande.", "Dias se mense het 'n Khoi-man doodgeskiet."] },
      { label: "Standpuntvraag", lines: ["As jy Dias verdedig, kan jy se hulle was bang en in 'n onbekende plek.", "As jy die Khoi-Khoi verdedig, kan jy se dit was hul land en hulle het reg gehad om dit te beskerm.", "Gee altyd 'n rede vir jou standpunt."] }
    ]
  },
  {
    title: "Vasco da Gama",
    picture: 9,
    groups: [
      { label: "Feite", lines: ["Da Gama was ook 'n Portugese ontdekkingsreisiger.", "Hy het Portugal in 1497 verlaat.", "Sy reis was 1497-1498.", "Hy het uiteindelik Indie per see bereik."] },
      { label: "Natal", lines: ["Hy het by die kus naby Natal gekom.", "Hy het die plek Natal genoem omdat dit naby Kersfees was.", "Natal beteken geboorte van Christus."] }
    ]
  },
  {
    title: "VOC: werk op skepe was moeilik",
    picture: 9,
    groups: [
      { label: "Probleme op skepe", lines: ["Matrose het lank op see gebly en kon siek word.", "Kos en water kon sleg raak of opraak.", "Skepe was vol, vuil en gevaarlik tydens storms.", "Daar was harde dissipline en min gemak."] },
      { label: "Probleme by aankoms", lines: ["Die Kaap was onbekend en werk was swaar.", "Mense moes skuiling, forte of voorraadplekke bou.", "Daar kon konflik met plaaslike gemeenskappe wees."] },
      { label: "Langvraagwenk", lines: ["Skryf 4 verskillende probleme met kort verduidelikings.", "Moenie net een woord per probleem skryf nie."] }
    ]
  },
  {
    title: "Punte tel: hoe om langer antwoorde te skryf",
    picture: 3,
    groups: [
      { label: "PEE-metode", lines: ["Punt: maak jou stelling.", "Evidence/bewys: gee 'n feit of voorbeeld.", "Explain/verduidelik: se hoekom dit saak maak."] },
      { label: "Voorbeeld", lines: ["Vraag: Hoekom was die kompas belangrik?", "Antwoord: Die kompas wys rigting. Dit het seevaarders gehelp om roetes te volg en minder maklik te verdwaal. Daarom kon hulle verder en veiliger reis."] }
    ]
  }
);

flashcards.splice(
  0,
  flashcards.length,
  ["Wat beteken 'millennium'?", "1 000 jaar. Die eerste millennium is van jaar 1 tot jaar 1000 n.C."],
  ["Wat is 'n komplekse gemeenskap?", "'n Groep mense met verskillende rolle, leiers en meer georganiseerde bestuur."],
  ["Wat beteken maatskaplike hierargie?", "'n Stelsel waar party mense hoër status of meer mag het as ander."],
  ["Noem twee maniere waarop Limpopo-vallei dorpe verander het.", "Hulle het groter geword en meer georganiseerd geraak; leiers het ook meer mag gekry."],
  ["Wat is bestaansboere?", "Boere wat hoofsaaklik produseer wat hulle self nodig het om te leef."],
  ["Noem drie gewasse of diere van vroee boeregemeenskappe.", "Sorghum, manna, pampoen, beeste, skape of bokke."],
  ["Wat is 'n artefak?", "'n Voorwerp wat mense gemaak of gebruik het, soos potte, krale of gereedskap."],
  ["Hoekom was Mapungubwe belangrik?", "Dit was 'n koninkryk met leierskap, rykdom en internasionale handel."],
  ["Met watter gebiede was Mapungubwe se handel verbind?", "Die Ooskus van Afrika, Arabie, Indie en China."],
  ["Wat het uit Afrika uitgevoer geword in Swahili-handel?", "Goud, ivoor, renosterhoring, skilpaddoppe en slawe."],
  ["Wat het na Afrika gekom deur handel?", "Glasware, krale, katoen, speserye en porselein."],
  ["Wat beteken Renaissance?", "Hergeboorte: 'n tyd van nuwe idees, ondersoek en ontdekkings in Europa."],
  ["Hoekom is Leonardo 'n Renaissance-man genoem?", "Hy was in baie velde begaafd: kuns, uitvindings, wetenskap en waarneming."],
  ["Noem twee bekende Leonardo-skilderye.", "Mona Lisa en Die Laaste Avondmaal."],
  ["Wat het Galileo gebruik en wat het hy bewys?", "Hy het 'n teleskoop gebruik en met waarnemings gewys dat ou idees oor die hemelruim verkeerd kan wees."],
  ["Wat is 'n karveel?", "'n Sterk seilskip wat geskik was vir lang ontdekkingsreise."],
  ["Waarvoor word 'n kompas gebruik?", "Om rigting te wys sodat seevaarders roetes kan volg."],
  ["Noem vier redes vir ontdekkingsreise.", "Nuuskierigheid, handel/wins, speserye, geloof, roem of mag."],
  ["Noem die vier Europese lande wat meegeding het.", "Portugal, Spanje, Holland/Nederland en Engeland."],
  ["Wat is 'n padrao?", "'n Portugese klippilaar wat as baken of teken van aanspraak opgerig is."],
  ["Wat was Dias se reisjare en prestasie?", "1487-1488; hy het om die suidpunt van Afrika gevaar en in 1488 by Mosselbaai aangekom."],
  ["Wat was Da Gama se reisjare en prestasie?", "1497-1498; hy het Indie per see bereik."],
  ["Hoekom is Natal so genoem?", "Da Gama het dit naby Kersfees gesien; Natal beteken geboorte van Christus."],
  ["Noem twee VOC-probleme op skepe.", "Siekte, slegte kos en water, storms, gevaar, harde dissipline of oorvol skepe."]
);

quiz.splice(
  0,
  quiz.length,
  {
    question: "Watter antwoord verduidelik die beste waarom Limpopo-vallei gemeenskappe 'kompleks' geword het?",
    options: ["Hulle het net meer diere gehad", "Hulle het groter, meer georganiseerd en met sterker leiers geword", "Hulle het opgehou boer", "Hulle het nooit handel gedryf nie"],
    answer: 1,
    fact: "Kompleks beteken meer rolle, bestuur, hierargie en organisasie."
  },
  {
    question: "Watter paar woorde pas die beste by 'mense met verskillende status en mag'?",
    options: ["Karveel en kompas", "Hierargie en maatskaplike verhoudings", "Speserye en porselein", "Teleskoop en buskruit"],
    answer: 1,
    fact: "Hierargie beskryf verskille in status en mag binne 'n gemeenskap."
  },
  {
    question: "Watter item is die beste voorbeeld van argeologiese bewyse?",
    options: ["'n Moderne koerant", "'n Ou pot of kraal uit 'n nedersetting", "'n TV-program", "'n Nuwe selfoon"],
    answer: 1,
    fact: "Artefakte soos potte en krale help ons om die verlede te bestudeer."
  },
  {
    question: "Waarom was Mapungubwe se handel belangrik?",
    options: ["Dit het Mapungubwe van groter handelsnetwerke en rykdom deel gemaak", "Dit het alle handel gestop", "Dit het net met Europa handel gedryf", "Dit was nie met die Ooskus verbind nie"],
    answer: 0,
    fact: "Handel met die Ooskus en Indiese Oseaan het rykdom en kontak gebring."
  },
  {
    question: "Watter goedere het waarskynlik UIT Afrika gegaan in Swahili-handel?",
    options: ["Porselein en katoen", "Goud en ivoor", "Glasware en speserye", "Kompas en teleskoop"],
    answer: 1,
    fact: "Goud, ivoor, renosterhoring en ander goedere is uit Afrika verhandel."
  },
  {
    question: "Die Renaissance was 'n keerpunt omdat mense...",
    options: ["minder vrae gevra het", "net die ou idees gevolg het", "nuwe idees getoets en bewyse gebruik het", "opgehou het om te leer"],
    answer: 2,
    fact: "Renaissance-denke beklemtoon ondersoek, waarneming en eksperimente."
  },
  {
    question: "Watter stelling is ONWAAR?",
    options: ["Leonardo het die Mona Lisa geskilder", "Galileo het 'n teleskoop gebruik", "Die Renaissance was 'n tyd van nuwe idees", "Die 17de en 18de eeu was die Renaissance se hoofbegin"],
    answer: 3,
    fact: "Die Renaissance het vroeer begin; die vraestel toets hierdie as 'n waar/onwaar-vraag."
  },
  {
    question: "Hoekom is Leonardo 'n universele genie genoem?",
    options: ["Hy het net een ding goed gedoen", "Hy was in baie verskillende velde begaafd", "Hy was 'n Portugese seevaarder", "Hy het die kompas uitgevind"],
    answer: 1,
    fact: "Hy was kunstenaar, uitvinder en wetenskaplike denker."
  },
  {
    question: "Watter antwoord sal die beste punte kry vir Galileo?",
    options: ["Hy was slim", "Hy het 'n teleskoop gebruik en waarnemings as bewyse gebruik", "Hy het met speserye handel gedryf", "Hy het by Mosselbaai aangekom"],
    answer: 1,
    fact: "Eksamenantwoorde moet toerusting en bewyse noem."
  },
  {
    question: "Watter uitvinding pas by 'wys rigting'?",
    options: ["Karveel", "Kompas", "Buskruit", "Porselein"],
    answer: 1,
    fact: "Die kompas help seevaarders om rigting te bepaal."
  },
  {
    question: "Watter definisie pas by 'karveel'?",
    options: ["'n Portugese klippilaar", "'n Sterk seilskip", "Knope per uur", "Die wetenskap van sterre"],
    answer: 1,
    fact: "Die eksamen pas karveel by 'n seilskippie/skip."
  },
  {
    question: "Watter groep lande was betrokke by Europese ontdekkingsreise?",
    options: ["Portugal, Spanje, Holland en Engeland", "China, Indie, Australie en Antarktika", "Net Portugal", "Slegs Suid-Afrika en Arabie"],
    answer: 0,
    fact: "Hierdie vier lande was belangrike mededingers."
  },
  {
    question: "Waarom wou Portugal 'n seeroete na die Ooste vind?",
    options: ["Om landroetes duurder te maak", "Om self by speserye en handel uit te kom", "Om Mapungubwe te stig", "Om nie meer handel te dryf nie"],
    answer: 1,
    fact: "Speserye was waardevol en Portugal wou groter wins maak."
  },
  {
    question: "Watter valse storie het seevaarders bang gemaak?",
    options: ["Skepe kon by die rand van die wereld afval", "Kompas wys rigting", "Speserye was waardevol", "Dias was Portugees"],
    answer: 0,
    fact: "Die vraestel vra vir twee valse stories oor gevare op see."
  },
  {
    question: "Watter naam en datum pas by 1487-1488?",
    options: ["Vasco da Gama", "Bartholomeus Dias", "Leonardo da Vinci", "Galileo Galilei"],
    answer: 1,
    fact: "Dias se reis was 1487-1488."
  },
  {
    question: "Watter naam en datum pas by 1497-1498?",
    options: ["Vasco da Gama", "Bartholomeus Dias", "Die VOC", "Mapungubwe"],
    answer: 0,
    fact: "Da Gama se reis was 1497-1498 en hy het Indie bereik."
  },
  {
    question: "Wat wys Dias se ontmoeting met die Khoi-Khoi?",
    options: ["Ontdekkingsreise was altyd vreedsaam", "Kontak kon spanning en geweld bring", "Niemand het in Suid-Afrika gewoon nie", "Dias het nooit geland nie"],
    answer: 1,
    fact: "Die Khoi-Khoi was reeds daar en konflik het plaasgevind."
  },
  {
    question: "Watter is 'n goeie VOC-langvraagpunt?",
    options: ["Skepe was altyd gemaklik", "Matrose kon siek word en kos/water kon sleg raak", "Daar was geen gevaar op see nie", "Almal het vinnig ryk geword"],
    answer: 1,
    fact: "Vir 'n langvraag moet Luhann probleme verduidelik met voorbeelde."
  }
);

timeline.splice(
  0,
  timeline.length,
  ["Jaar 1-1000 n.C.", "Die eerste millennium."],
  ["900-1300 n.C.", "Boeregemeenskappe in die Limpopo-vallei word groter en meer kompleks."],
  ["Voor Mapungubwe", "K2 en Schroda is belangrike nedersettings."],
  ["Ongeveer 1220 n.C.", "Mapungubwe word 'n belangrike koninkryk."],
  ["Renaissance", "Europa beweeg na nuwe idees, ondersoek en bewyse."],
  ["1487-1488", "Bartholomeus Dias vaar om die suidpunt van Afrika."],
  ["1488", "Dias kom by Mosselbaai aan; konflik met die Khoi-Khoi volg."],
  ["1497-1498", "Vasco da Gama vaar na Indie."],
  ["VOC-tyd", "Europese handelsondernemings stuur skepe, matrose en goedere oor lang seeroetes."]
);

words.splice(
  0,
  words.length,
  ["millennium", "1 000 jaar."],
  ["afhanklik", "Om op iemand of iets anders staat te maak."],
  ["komplekse gemeenskap", "'n Gemeenskap met verskillende rolle, bestuur en leiers."],
  ["maatskaplike verhoudings", "Die manier waarop mense in 'n gemeenskap saamleef."],
  ["hierargie", "'n Stelsel waar party mense meer status of mag het."],
  ["geslag", "Manlik of vroulik; in geskiedenis kan dit na rolle vir mans en vroue verwys."],
  ["bestaansboere", "Boere wat produseer wat hulle self nodig het."],
  ["artefak", "'n Ou voorwerp wat mense gemaak of gebruik het."],
  ["argeologie", "Die studie van die verlede deur oorblyfsels en voorwerpe."],
  ["handel", "Koop, verkoop of ruil."],
  ["Swahili-handel", "Handel langs die Ooskus van Afrika en oor die Indiese Oseaan."],
  ["Renaissance", "'n Tydperk van nuwe idees en ontdekkings in Europa."],
  ["keerpunt", "'n Tyd wanneer belangrike veranderinge begin."],
  ["nuuskierig", "Ywerig om ondersoek in te stel en meer te leer."],
  ["sonnestelsel", "Die son en al die planete wat daarom wentel."],
  ["astronomie", "Die wetenskap wat planete en sterre bestudeer."],
  ["verken", "Om na onbekende plekke te reis en dit te ondersoek."],
  ["karveel", "'n Groot/sterk seilskip vir lang reise."],
  ["kompas", "'n Instrument wat rigting wys."],
  ["buskruit", "Swart poeier wat in gewere en kanonne gebruik is."],
  ["padrao", "'n Portugese klippilaar of baken."],
  ["knope per uur", "'n Manier om die spoed van skepe te meet."],
  ["VOC", "Verenigde Oos-Indiese Kompanjie, 'n Nederlandse handelsmaatskappy."],
  ["fort", "'n Versterkte skuiling of gebou vir verdediging."]
);

const examPractice = [
  {
    marks: "6 punte",
    question: "Pas die woord by die betekenis: verken, kompas, karveel, Renaissance, spoed van skepe, padrao.",
    answer: ["Verken: ontdekkingsreis na onbekende plekke.", "Kompas: wys rigting.", "Karveel: seilskip vir lang reise.", "Renaissance: hergeboorte/nuwe idees.", "Spoed van skepe: knope per uur.", "Padrao: Portugese klippilaar."]
  },
  {
    marks: "4 punte",
    question: "Noem die vier Europese lande wat by ontdekkingsreise meegeding het.",
    answer: ["Portugal.", "Spanje.", "Holland/Nederland.", "Engeland."]
  },
  {
    marks: "3 punte",
    question: "Gebruik 'n kaart in jou kop: beskryf Dias en Da Gama se roetes.",
    answer: ["Dias: van Portugal suidwaarts langs Afrika en om die suidpunt tot by Mosselbaai/Kaap.", "Da Gama: van Portugal om Afrika, verder langs die Ooskus en uiteindelik na Indie.", "Onthou: Dias is 1487-1488; Da Gama is 1497-1498."]
  },
  {
    marks: "2 punte",
    question: "Noem twee valse stories wat mense oor gevare op see geglo het.",
    answer: ["Daar is monsters in onbekende see.", "Skepe kan by die rand van die wereld afval.", "Ander aanvaarbare idee: onbekende see is vol bonatuurlike gevare."]
  },
  {
    marks: "3 punte",
    question: "Hoekom is Leonardo da Vinci 'n Renaissance-man of universele genie genoem?",
    answer: ["Hy was nie net 'n kunstenaar nie.", "Hy het ook uitvindings, masjiene en die menslike liggaam bestudeer.", "Hy wys Renaissance-denke omdat hy nuuskierig was, ondersoek ingestel het en nuwe idees probeer het."]
  },
  {
    marks: "2 punte",
    question: "Verduidelik Galileo se bewyse en toerusting.",
    answer: ["Hy het 'n teleskoop gebruik.", "Sy waarnemings van die hemelruim het gewys dat ou idees oor die aarde, son en planete verkeerd kon wees."]
  },
  {
    marks: "4 punte",
    question: "Skryf 'n VOC-langvraag: wat was nadele/probleme vir mans op VOC-skepe?",
    answer: ["Lang, gevaarlike reise met storms.", "Siekte en swak higiëne op oorvol skepe.", "Kos en water kon sleg raak of opraak.", "Harde werk, streng dissipline en moeilike omstandighede by aankoms."]
  },
  {
    marks: "4 punte",
    question: "Skets-oefen: wat moet in 'n padrao of fort-skets wees?",
    answer: ["Padrao: klippilaar, kruis/koninklike teken, staan op 'n kus of nuwe grondgebied.", "Fort: mure, ingang, skuiling, wagplek of kanonne.", "Netheid en kleur tel ook punte.", "Die skets moet wys dat dit 'n baken of verdediging is."]
  }
];

const state = {
  done: new Set(JSON.parse(localStorage.getItem("historyDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("historyDone", JSON.stringify([...state.done]));
}

function renderProgress() {
  const total = learningItems.length;
  const done = state.done.size;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${(done / total) * 100}%`;
}

function renderTopics() {
  $("#topicGrid").innerHTML = learningItems.map((topic, index) => {
    const done = state.done.has(index);
    const picture = topicPictures[topic.picture];
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
  if (state.quizIndex >= quiz.length) {
    const percent = Math.round((state.score / quiz.length) * 100);
    $("#quizBox").innerHTML = `
      <div class="quiz-question">
        <span class="eyebrow">Klaar</span>
        <h3>Jou punt: ${state.score} uit ${quiz.length} (${percent}%)</h3>
        <p class="feedback">${percent >= 70 ? "Mooi! Hersien nou die flitskaarte om dit vas te lê." : "Goeie poging. Lees die leerpad weer en probeer dan weer."}</p>
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

function renderTimeline() {
  $("#timelineList").innerHTML = timeline.map(([date, event]) => `
    <article class="timeline-item">
      <strong>${date}</strong>
      <p>${event}</p>
    </article>
  `).join("");
}

function renderWords(filter = "") {
  const term = filter.trim().toLowerCase();
  const visibleWords = words.filter(([word, meaning]) => `${word} ${meaning}`.toLowerCase().includes(term));
  $("#wordList").innerHTML = visibleWords.map(([word, meaning]) => `
    <article class="word-card">
      <h3>${word}</h3>
      <p>${meaning}</p>
    </article>
  `).join("") || `<p class="feedback">Geen woord pas by jou soektog nie.</p>`;
}

function renderPractice() {
  $("#practiceList").innerHTML = examPractice.map((item, index) => `
    <article class="practice-card">
      <span class="practice-meta">Vraag ${index + 1} | ${item.marks}</span>
      <h3>${item.question}</h3>
      <p>Modelantwoord:</p>
      <ul>${item.answer.map((line) => `<li>${line}</li>`).join("")}</ul>
    </article>
  `).join("");
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
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#flashcard").addEventListener("click", () => {
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#prevCard").addEventListener("click", () => {
  state.cardIndex = (state.cardIndex - 1 + flashcards.length) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#nextCard").addEventListener("click", () => {
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
  $("#quizFeedback").textContent = choice === item.answer ? `Reg! ${item.fact}` : `Nog nie. ${item.fact}`;
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
