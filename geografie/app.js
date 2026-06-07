const topicPictures = [
  {
    label: "Kaart",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M21 23l25-8 28 9 25-8v53l-25 8-28-9-25 8z" fill="#ffffff" stroke="#1d4ed8" stroke-width="5" stroke-linejoin="round"></path><path d="M46 15v53M74 24v53" stroke="#93c5fd" stroke-width="4"></path><circle cx="62" cy="45" r="8" fill="#f59e0b"></circle></svg>`
  }
];

const learningItems = [];
const flashcards = [];
const quiz = [];
const timeline = [];
const words = [];
const examPractice = [];

const emptyCopy = {
  learn: {
    title: "Geografie-leerwerk kom hier in",
    body: "Sodra die Geografie-PDF's gestuur is, bou ons die leerpad met opsommings, kaartwerk, kernwoorde en moeiliker vrae."
  },
  cards: {
    title: "Nog geen flitskaarte nie",
    body: "Die flitskaarte word uit die nuwe Geografie-inhoud gemaak."
  },
  quiz: {
    title: "Nog geen vasvra nie",
    body: "Die vasvra sal vrae, antwoorde en terugvoer uit die Geografie-werk bevat."
  },
  practice: {
    title: "Nog geen vraestel-oefening nie",
    body: "Hier kom langer modelantwoorde en punte-wenke vir Geografie."
  },
  timeline: {
    title: "Nog geen volgorde-afdeling nie",
    body: "As die Geografie-werk stappe, prosesse of kaartwerk bevat, plaas ons dit hier."
  },
  words: {
    title: "Nog geen woordelys nie",
    body: "Belangrike Geografie-terme en definisies kom hier."
  }
};

const state = {
  done: new Set(JSON.parse(localStorage.getItem("geoDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("geoDone", JSON.stringify([...state.done]));
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
  $("#topicGrid").innerHTML = learningItems.length ? "" : emptyCard(emptyCopy.learn);
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
  }
}

function renderQuiz() {
  $("#quizBox").innerHTML = emptyCard(emptyCopy.quiz);
}

function renderPractice() {
  $("#practiceList").innerHTML = emptyCard(emptyCopy.practice);
}

function renderTimeline() {
  $("#timelineList").innerHTML = emptyCard(emptyCopy.timeline);
}

function renderWords() {
  $("#wordList").innerHTML = emptyCard(emptyCopy.words);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    $(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

$("#resetProgress").addEventListener("click", () => {
  state.done.clear();
  saveProgress();
  renderTopics();
  renderProgress();
});

renderTopics();
renderProgress();
renderCard();
renderQuiz();
renderPractice();
renderTimeline();
renderWords();
