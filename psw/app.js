const topicPictures = [
  {
    label: "Groei",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#ffedd5"></rect><circle cx="44" cy="33" r="13" fill="#0f766e"></circle><circle cx="75" cy="30" r="15" fill="#1d4ed8"></circle><path d="M24 73c6-22 22-34 43-34 20 0 34 12 43 34" fill="#fff" stroke="#17212b" stroke-width="5" stroke-linecap="round"></path><path d="M34 65h52" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Skild",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#ecfeff"></rect><path d="M60 14l35 13v20c0 20-14 33-35 40-21-7-35-20-35-40V27z" fill="#fff" stroke="#0f766e" stroke-width="5" stroke-linejoin="round"></path><path d="M42 47l12 12 28-31" fill="none" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  {
    label: "Prioriteite",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M28 25h54M28 45h42M28 65h58" stroke="#1d4ed8" stroke-width="8" stroke-linecap="round"></path><circle cx="93" cy="25" r="7" fill="#f59e0b"></circle><circle cx="80" cy="45" r="7" fill="#22c55e"></circle><circle cx="96" cy="65" r="7" fill="#ef4444"></circle></svg>`
  },
  {
    label: "Tradisie",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fef3c7"></rect><circle cx="60" cy="40" r="26" fill="#fff" stroke="#d97706" stroke-width="5"></circle><path d="M60 14v52M34 40h52M42 22l36 36M78 22L42 58" stroke="#0f766e" stroke-width="4" stroke-linecap="round"></path><path d="M31 74h58" stroke="#17212b" stroke-width="6" stroke-linecap="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Adolessensie, puberteit en hormone",
    picture: 0,
    groups: [
      { label: "Sleutelwoorde", lines: ["Adolessensie is die tyd tussen kinderjare en volwassenheid.", "Puberteit is die stadium waar jongmense seksueel ryp word en later kinders kan voortbring.", "Hormone is stowwe wat deur die liggaam geproduseer word en veranderinge laat gebeur."] },
      { label: "Wat om te onthou", lines: ["Puberteit gebeur nie presies op dieselfde ouderdom vir almal nie.", "Liggaamsveranderinge, emosies en selfbeeld kan in hierdie tyd verander.", "Wees respekvol: elke persoon groei teen sy of haar eie tempo."] }
    ]
  },
  {
    title: "Liggaamsbeeld en selfagting",
    picture: 0,
    groups: [
      { label: "Liggaamsbeeld", lines: ["Liggaamsbeeld is die manier waarop jy aan jou liggaam dink en daaroor voel.", "Fisiese kenmerke is dinge aan jou liggaam, soos lengte, hare, velkleur of liggaamsbou.", "Mense kan maklik onseker voel as hulle hulself met ander vergelyk."] },
      { label: "Selfagting", lines: ["Selfagting is die manier waarop jy oor jouself as persoon dink en voel.", "Goeie selfagting beteken nie jy dink jy is perfek nie; dit beteken jy respekteer jouself.", "Eienskap beteken 'n kwaliteit van 'n persoon, soos vriendelikheid, sin vir humor of deursettingsvermoe."] }
    ]
  },
  {
    title: "Prioritiseer en selfbestuur",
    picture: 2,
    groups: [
      { label: "Prioritiseer", lines: ["Prioritiseer beteken om te besluit wat die heel belangrikste is.", "Dit help jou om eers die belangrike take te doen en nie tyd te mors nie.", "Voorbeeld: leer vir 'n toets voor jy speel of op jou foon kyk."] },
      { label: "Selfbestuursvaardighede", lines: ["Doelwit: iets wat jy wil bereik.", "Verantwoordelikhede: dinge wat jy moet doen.", "Noodsaaklike aktiwiteite is belangrik en moet gedoen word; pretaktiwiteite is dinge waarvan jy hou."] }
    ]
  },
  {
    title: "Verstaan afknouery",
    picture: 1,
    groups: [
      { label: "Hoekom afknouery gebeur", lines: ["Afknouers domineer, blameer en gebruik ander mense.", "Hulle teiken dikwels mense wat swakker lyk, anders lyk of nie deel van die groep voel nie.", "Afknouery is nie die slagoffer se skuld nie."] },
      { label: "Wat afknouery doen", lines: ["Dit kan iemand bang, alleen, hartseer of kwaad laat voel.", "Dit kan 'n persoon se selfvertroue en skoolwerk benadeel.", "Om stil te bly kan die probleem langer laat aanhou."] }
    ]
  },
  {
    title: "Tipes afknouery",
    picture: 1,
    groups: [
      { label: "Fisies en verbaal", lines: ["Fisiese afknouery sluit slaan, pootjie, skop en knyp in.", "Verbale afknouery is om iemand uit te skel, te terg of af te kraak.", "Sielkundige afknouery is om iemand te dreig, te beledig of bang te maak."] },
      { label: "Sosiaal, seksueel en kuber", lines: ["Sosiale afknouery is om iemand te ignoreer of gerugte te versprei.", "Seksuele afknouery is om iemand te pik oor seksuele orientasie of iemand seksueel ongemaklik te laat voel.", "Kuberafknouery gebeur met boodskappe, webtuistes, kletskamers of selfone."] }
    ]
  },
  {
    title: "Hoe om afknouery te hanteer",
    picture: 1,
    groups: [
      { label: "Praktiese stappe", lines: ["Praat met 'n ouer, onderwyser of ander volwassene wat jy vertrou.", "Moenie alleen probeer baklei of terugboelie nie.", "Hou bewyse van kuberafknouery, soos boodskappe of skermskote."] },
      { label: "As jy dit sien gebeur", lines: ["Moenie saamlag of die afknouer aanmoedig nie.", "Ondersteun die persoon wat geboelie word.", "Rapporteer dit aan 'n volwassene sodat iemand kan help."] }
    ]
  },
  {
    title: "Xenofobie, teister en diskrimineer",
    picture: 1,
    groups: [
      { label: "Xenofobie", lines: ["Xenofobie is 'n sterk afkeer teen of wantroue van mense van 'n ander land.", "Dit kan mense onveilig en uitgesluit laat voel.", "In PSW moet Luhann kan verduidelik waarom xenofobie onregverdig en skadelik is."] },
      { label: "Teister en diskrimineer", lines: ["Teister beteken om iemand aanhoudend lastig te val of te pla.", "Diskrimineer beteken om 'n persoon of groep swakker of beter as 'n ander te behandel.", "Diskriminasie kan gebeur weens ras, ouderdom, godsdiens of geslag."] }
    ]
  },
  {
    title: "Kulturele deurgangsrites",
    picture: 3,
    groups: [
      { label: "Wat dit is", lines: ["Deurgangsrites is gebruike wat belangrike oorgange in 'n mens se lewe merk.", "Voorbeelde is geboorte, doop, troues en begrafnisse.", "Verskillende gelowe en kulture doen dit op verskillende maniere."] },
      { label: "Eksamenwenk", lines: ["Noem die fase of gebeurtenis, beskryf wat gewoonlik gebeur, en se hoekom dit belangrik is.", "Moenie met iemand se geloof spot nie; vergelyk met respek.", "Gebruik woorde soos tradisie, familie, gemeenskap en seremonie."] }
    ]
  },
  {
    title: "Afrika tradisionele deurgangsrites",
    picture: 3,
    groups: [
      { label: "Geboorte", lines: ["Die moeder kry hulp van ander vroue wanneer die baba gebore word.", "Daar kan feesgevier word met die baba se naam.", "Die familie en gemeenskap speel 'n belangrike rol."] },
      { label: "Troues en begrafnisse", lines: ["By troues kan families onderhandel met lobola.", "Lobola is 'n betaling wat die bruidegom se familie aan die bruid se familie betaal.", "By begrafnisse kan die liggaam in tradisionele klere begrawe word, met familie en rituele as deel van die afskeid."] }
    ]
  },
  {
    title: "Christelike en Islamitiese rites",
    picture: 3,
    groups: [
      { label: "Christelike rites", lines: ["Doop kan wys dat iemand aan Christus behoort.", "By troues kan die paartjie ringe uitruil en beloftes voor God en mense maak.", "By begrafnisse kan daar gebede en kerkliedere wees."] },
      { label: "Islamitiese rites", lines: ["Wanneer 'n baba gebore word, kan die vader 'n spesiale gebed in die baba se oor fluister.", "By troues word daar gelees, gebid en wense uitgespreek.", "Begrafnisse word gewoonlik so gou moontlik gehou, met gebed en respekvolle voorbereiding."] }
    ]
  },
  {
    title: "Boeddhistiese, Joodse en Hindoe rites",
    picture: 3,
    groups: [
      { label: "Boeddhisties en Joods", lines: ["By Boeddhistiese geboorte-rites kan 'n monnik betrokke wees en die baba se horoskoop bespreek word.", "By Joodse geboorte-rites word 'n kind as Joods beskou as die moeder Joods is.", "Joodse troues kan onder 'n huweliksafdak plaasvind en 'n glas kan gebreek word."] },
      { label: "Hindoe", lines: ["By Hindoe-geboorte kan familie en vriende geskenke bring en spesiale gesange sing.", "By Hindoe-troues kan die bruid en bruidegom hul beloftes aan mekaar afle.", "By Hindoe-begrafnisse word die liggaam dikwels veras en die familie kan by riviere of water bid."] }
    ]
  }
];

const flashcards = [
  ["Wat is adolessensie?", "Die tyd tussen kinderjare en volwassenheid."],
  ["Wat is puberteit?", "Die stadium waar jongmense seksueel ryp word en kinders kan voortbring."],
  ["Wat is hormone?", "Stowwe wat deur die liggaam geproduseer word en veranderinge veroorsaak."],
  ["Wat is liggaamsbeeld?", "Die manier waarop jy aan jou liggaam dink en daaroor voel."],
  ["Wat is selfagting?", "Die manier waarop jy oor jouself as persoon dink en voel."],
  ["Wat beteken prioritiseer?", "Om te besluit wat die heel belangrikste is."],
  ["Wat is 'n doelwit?", "Iets wat jy wil bereik."],
  ["Wat is verantwoordelikhede?", "Dinge wat jy moet doen."],
  ["Noem twee noodsaaklike aktiwiteite.", "Leer, huiswerk doen, bad, eet, slaap of takies doen."],
  ["Wat is fisiese afknouery?", "Slaan, pootjie, skop, knyp of iemand fisies seermaak."],
  ["Wat is verbale afknouery?", "Iemand uitskel, terg of afkraak."],
  ["Wat is sosiale afknouery?", "Iemand ignoreer, uitsluit of gerugte versprei."],
  ["Wat is kuberafknouery?", "Afknouery deur boodskappe, internet, kletskamers of selfone."],
  ["Wat moet jy doen as jy geboelie word?", "Praat met 'n volwassene wat jy vertrou en hou bewyse as dit aanlyn gebeur."],
  ["Wat is xenofobie?", "'n Sterk afkeer teen of wantroue van mense van 'n ander land."],
  ["Wat beteken teister?", "Om iemand aanhoudend lastig te val of te pla."],
  ["Wat beteken diskrimineer?", "Om 'n persoon of groep onregverdig beter of swakker as 'n ander te behandel."],
  ["Wat is deurgangsrites?", "Gebruike wat belangrike oorgange in 'n mens se lewe merk."],
  ["Noem vier voorbeelde van deurgangsrites.", "Geboorte, doop, troues en begrafnisse."],
  ["Wat is lobola?", "'n Betaling wat die bruidegom se familie aan die bruid se familie betaal in sommige Afrika-tradisies."]
];

const quiz = [
  { question: "Adolessensie is die tyd tussen...", options: ["kleuterskool en graad 1", "kinderjare en volwassenheid", "oggend en aand", "werk en aftrede"], answer: 1, fact: "Adolessensie is die oorgang tussen kinderjare en volwassenheid." },
  { question: "Watter woord beskryf stowwe wat liggaamsveranderinge laat gebeur?", options: ["Hormone", "Lobola", "Prioriteite", "Rites"], answer: 0, fact: "Hormone word deur die liggaam geproduseer." },
  { question: "Wat beteken prioritiseer?", options: ["Alles terselfdertyd doen", "Besluit wat belangrikste is", "Net pretaktiwiteite kies", "Iemand terg"], answer: 1, fact: "Prioritiseer help jou om jou tyd beter te bestuur." },
  { question: "Watter voorbeeld is fisiese afknouery?", options: ["Gerugte versprei", "Iemand uitsluit", "Skop of knyp", "Aanhoudend boodskappe stuur"], answer: 2, fact: "Fisiese afknouery maak iemand se liggaam seer." },
  { question: "Watter voorbeeld pas by kuberafknouery?", options: ["'n Dreigende boodskap op 'n selfoon", "Net hardloop op die veld", "Iemand help met huiswerk", "Tyd beplan"], answer: 0, fact: "Kuberafknouery gebeur met digitale tegnologie." },
  { question: "Wat is xenofobie?", options: ["Respek vir alle mense", "Wantroue of afkeer van mense van 'n ander land", "Om huiswerk te prioritiseer", "Geboorte-rites"], answer: 1, fact: "Xenofobie is onregverdig en kan mense uitsluit of seermaak." },
  { question: "Diskrimineer beteken om iemand onregverdig te behandel weens...", options: ["net hul skoengrootte", "ras, ouderdom, godsdiens of geslag", "die dag van die week", "hoe laat dit is"], answer: 1, fact: "Diskriminasie behandel mense onregverdig op grond van eienskappe of groepsidentiteit." },
  { question: "Wat moet jy doen as jy afknouery sien?", options: ["Saamlag", "Stilbly en wegstap", "Ondersteun die slagoffer en vertel 'n volwassene", "Die boodskappe aanstuur"], answer: 2, fact: "Om hulp te kry is veiliger as om die probleem alleen te dra." },
  { question: "Wat is deurgangsrites?", options: ["Kaartlyne", "Gebruike wat lewensoorgange merk", "Fisiese kenmerke", "Net sportreels"], answer: 1, fact: "Deurgangsrites merk gebeure soos geboorte, doop, troues en begrafnisse." },
  { question: "Lobola kom voor in watter afdeling?", options: ["Afrika tradisionele troues", "Kaartwerk", "Liggaamsbeeld", "Kuberafknouery"], answer: 0, fact: "Lobola is deel van sommige Afrika tradisionele trougebruike." },
  { question: "Watter houding moet jy he teenoor verskillende kulturele rites?", options: ["Spot daarmee", "Respekvol vergelyk", "Ignoreer alles", "Se almal moet dieselfde wees"], answer: 1, fact: "PSW vra dat verskillende kulture en gelowe met respek hanteer word." },
  { question: "Wat is selfagting?", options: ["Hoe jy oor jouself as persoon dink en voel", "Die lengte van 'n lynskaal", "Die koop van goedere", "Die rigting van 'n handelsroete"], answer: 0, fact: "Selfagting gaan oor hoe jy jouself waardeer." }
];

const timeline = [
  ["1. Verstaan groei", "Begin met adolessensie, puberteit, hormone en liggaamsbeeld."],
  ["2. Bou selfbestuur", "Leer doelwitte, verantwoordelikhede, noodsaaklike aktiwiteite en prioriteite."],
  ["3. Ken afknouery", "Leer die tipes: fisies, verbaal, sielkundig, sosiaal, seksueel en kuber."],
  ["4. Reageer reg", "Oefen wat om te doen wanneer jy geboelie word of sien hoe iemand anders geboelie word."],
  ["5. Verstaan respek", "Leer xenofobie, teistering en diskriminasie."],
  ["6. Leer rites", "Hersien geboorte, doop, troues en begrafnisse in verskillende kulture."],
  ["7. Vergelyk", "Kan ooreenkomste en verskille noem sonder om te oordeel."],
  ["8. Oefen antwoorde", "Gebruik kort definisies plus een voorbeeld om punte te verdien."]
];

const words = [
  ["adolessensie", "Die tyd tussen kinderjare en volwassenheid."],
  ["puberteit", "Die stadium waar jongmense seksueel ryp word en kinders kan voortbring."],
  ["hormone", "Stowwe wat deur die liggaam geproduseer word."],
  ["liggaamsbeeld", "Die manier waarop jy aan jou liggaam dink en daaroor voel."],
  ["selfagting", "Die manier waarop jy oor jouself as persoon dink en voel."],
  ["fisiese kenmerke", "Dinge aan jou liggaam, soos lengte, hare of liggaamsbou."],
  ["eienskappe", "Kwaliteite van 'n persoon, soos vriendelikheid of sin vir humor."],
  ["prioritiseer", "Om te besluit wat die heel belangrikste is."],
  ["doelwit", "Iets wat jy wil bereik."],
  ["verantwoordelikhede", "Dinge wat jy moet doen."],
  ["afknouery", "Wanneer iemand herhaaldelik gemeen optree om 'n ander persoon seer te maak of te beheer."],
  ["fisiese afknouery", "Slaan, pootjie, skop of knyp."],
  ["verbale afknouery", "Uitskel, terg of afkraak."],
  ["sosiale afknouery", "Iemand ignoreer of gerugte versprei."],
  ["seksuele afknouery", "Iemand op 'n seksuele manier ongemaklik of onveilig laat voel."],
  ["kuberafknouery", "Afknouery met boodskappe, webtuistes, kletskamers of selfone."],
  ["xenofobie", "'n Sterk afkeer teen of wantroue van mense van 'n ander land."],
  ["teister", "Om iemand aanhoudend lastig te val of te pla."],
  ["diskrimineer", "Om 'n persoon of groep onregverdig swakker of beter as 'n ander te behandel."],
  ["deurgangsrites", "Gebruike wat belangrike oorgange in 'n mens se lewe merk."],
  ["lobola", "'n Betaling wat die bruidegom se familie aan die bruid se familie betaal."],
  ["seremonie", "'n Formele gebeurtenis met spesiale gebruike of rituele."],
  ["tradisie", "'n Gebruik wat oor tyd in 'n familie, geloof of gemeenskap oorgedra word."]
];

const examPractice = [
  { marks: "3 punte", question: "Verduidelik adolessensie, puberteit en hormone.", answer: ["Adolessensie is die tyd tussen kinderjare en volwassenheid.", "Puberteit is die stadium waar jongmense seksueel ryp word.", "Hormone is stowwe wat deur die liggaam geproduseer word en veranderinge veroorsaak."] },
  { marks: "4 punte", question: "Wat is die verskil tussen liggaamsbeeld en selfagting?", answer: ["Liggaamsbeeld is hoe jy oor jou liggaam dink en voel.", "Selfagting is hoe jy oor jouself as persoon dink en voel.", "Liggaamsbeeld kan deur fisiese kenmerke beinvloed word.", "Selfagting kan groei wanneer jy jou goeie eienskappe raaksien en jouself respekteer."] },
  { marks: "4 punte", question: "Verduidelik hoe om jou tyd te prioritiseer.", answer: ["Skryf jou verantwoordelikhede neer.", "Besluit watter take noodsaaklik is.", "Doen eers die belangrikste take, soos leerwerk of huiswerk.", "Laat pretaktiwiteite vir later wanneer die belangrike werk klaar is."] },
  { marks: "5 punte", question: "Noem vyf tipes afknouery en gee 'n voorbeeld van elkeen.", answer: ["Fisies: slaan, skop of knyp.", "Verbaal: uitskel of terg.", "Sielkundig: dreig of beledig.", "Sosiaal: iemand uitsluit of gerugte versprei.", "Kuber: gemene boodskappe of plasings aanlyn."] },
  { marks: "4 punte", question: "Wat kan Luhann doen as hy geboelie word?", answer: ["Hy moet met 'n volwassene praat wat hy vertrou.", "Hy moet nie terugboelie of alleen baklei nie.", "Hy kan bewyse hou, veral by kuberafknouery.", "Hy moet onthou dat afknouery nie sy skuld is nie."] },
  { marks: "4 punte", question: "Verduidelik xenofobie, teistering en diskriminasie.", answer: ["Xenofobie is wantroue of afkeer van mense van 'n ander land.", "Teistering is om iemand aanhoudend lastig te val of te pla.", "Diskriminasie is om mense onregverdig beter of swakker te behandel.", "Diskriminasie kan wees weens ras, ouderdom, godsdiens of geslag."] },
  { marks: "5 punte", question: "Wat is kulturele deurgangsrites? Noem voorbeelde.", answer: ["Deurgangsrites is gebruike wat belangrike oorgange in 'n mens se lewe merk.", "Voorbeelde is geboorte, doop, troues en begrafnisse.", "Verskillende kulture en gelowe het verskillende seremonies.", "Mense gebruik dit om familie, geloof en gemeenskap te betrek.", "Ons moet die verskille met respek hanteer."] },
  { marks: "4 punte", question: "Vergelyk twee trougebruike uit die leerwerk.", answer: ["In sommige Afrika tradisionele troues kan lobola bespreek word.", "By Christelike troues kan ringe uitgeruil en beloftes in 'n kerk gemaak word.", "By Islamitiese troues kan daar gelees, gebid en wense uitgespreek word.", "Albei wys verbintenis tussen twee mense en hul families."] }
];

const state = {
  done: new Set(JSON.parse(localStorage.getItem("pswDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("pswDone", JSON.stringify([...state.done]));
}

function renderProgress() {
  const total = learningItems.length;
  const done = [...state.done].filter((index) => index < total).length;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${total ? (done / total) * 100 : 0}%`;
}

function renderTopics() {
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
