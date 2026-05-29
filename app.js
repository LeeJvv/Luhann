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
  const total = topics.length;
  const done = state.done.size;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${(done / total) * 100}%`;
}

function renderTopics() {
  $("#topicGrid").innerHTML = topics.map((topic, index) => {
    const done = state.done.has(index);
    return `
      <article class="topic-card ${done ? "is-done" : ""}">
        <h3>${index + 1}. ${topic.title}</h3>
        <ul>${topic.points.map((point) => `<li>${point}</li>`).join("")}</ul>
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
