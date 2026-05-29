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
renderTimeline();
renderWords();
