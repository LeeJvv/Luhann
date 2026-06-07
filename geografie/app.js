const topicPictures = [
  {
    label: "Kaart",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M21 23l25-8 28 9 25-8v53l-25 8-28-9-25 8z" fill="#ffffff" stroke="#1d4ed8" stroke-width="5" stroke-linejoin="round"></path><path d="M46 15v53M74 24v53" stroke="#93c5fd" stroke-width="4"></path><circle cx="62" cy="45" r="8" fill="#f59e0b"></circle></svg>`
  },
  {
    label: "Aardbol",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><circle cx="60" cy="45" r="30" fill="#1d4ed8"></circle><path d="M38 34c11-10 27-9 41 0-8 7-8 16 0 23-15 9-30 8-43-3 8-5 9-13 2-20z" fill="#22c55e"></path><path d="M31 45h58M60 15c10 13 10 47 0 60M60 15c-10 13-10 47 0 60" stroke="#bfdbfe" stroke-width="3"></path></svg>`
  },
  {
    label: "Handel",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><path d="M26 55h65l-11 18H37z" fill="#0f766e"></path><path d="M38 52V24l29 10-29 10" fill="#fff" stroke="#1d4ed8" stroke-width="4" stroke-linejoin="round"></path><path d="M79 27l10 10-10 10M91 37H63" stroke="#d97706" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="39" cy="63" r="4" fill="#f59e0b"></circle><circle cx="58" cy="63" r="4" fill="#ef4444"></circle></svg>`
  },
  {
    label: "Hulpbronne",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#ecfeff"></rect><path d="M25 70l16-39 19 39z" fill="#475569"></path><path d="M50 70l17-48 28 48z" fill="#334155"></path><circle cx="83" cy="25" r="10" fill="#f59e0b"></circle><path d="M26 72h68" stroke="#0f766e" stroke-width="6" stroke-linecap="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Nuwe kaartwoorde",
    picture: 0,
    groups: [
      { label: "Breedtegraad", lines: ["Breedtegraad wys die posisie van 'n plek tussen die ewenaar en die Noordpool of Suidpool.", "Breedtegrade loop oos-wes op 'n kaart, maar meet noord-suid posisie.", "Voorbeeld: 30°S beteken 30 grade suid van die ewenaar."] },
      { label: "Lengtegraad", lines: ["Lengtegraad wys die posisie van 'n plek oos of wes van die Greenwich-meridiaan.", "Lengtegrade loop noord-suid op 'n kaart, maar meet oos-wes posisie.", "Voorbeeld: 25°O beteken 25 grade oos van Greenwich."] },
      { label: "Graad en ewenaar", lines: ["'n Graad is 'n meeteenheid vir hoeke.", "Die ewenaar verdeel die aarde in noord en suid.", "Koördinate is waar breedtegraad en lengtegraad mekaar kruis."] }
    ]
  },
  {
    title: "Lees breedte- en lengtegrade",
    picture: 1,
    groups: [
      { label: "Stap 1", lines: ["Soek eers of die plek noord of suid van die ewenaar is.", "Skryf die breedtegraad met N of S."] },
      { label: "Stap 2", lines: ["Soek dan of die plek oos of wes van die Greenwich-meridiaan is.", "Skryf die lengtegraad met O of W."] },
      { label: "Eksamenwenk", lines: ["Koördinate word gewoonlik as breedtegraad eerste en lengtegraad tweede geskryf.", "Moenie N/S en O/W omruil nie."] }
    ]
  },
  {
    title: "Konsep van skaal",
    picture: 0,
    groups: [
      { label: "Wat is skaal?", lines: ["Skaal wys hoe afstande op 'n kaart vergelyk met afstande op die grond.", "Kaarte is kleiner as die werklikheid, daarom het ons skaal nodig.", "Verskillende kaarte gebruik verskillende skale."] },
      { label: "Verskillende skale", lines: ["Wereldkaarte het klein skaal en wys groot gebiede.", "Stadskaarte het groter detail en wys kleiner gebiede.", "Gebruik altyd die skaal op die spesifieke kaart."] }
    ]
  },
  {
    title: "Lynskaal en woordskaal",
    picture: 0,
    groups: [
      { label: "Lynskaal", lines: ["'n Lynskaal is 'n skaal wat afstande op die kaart vergelyk met afstande op die grond.", "Dit lyk soos 'n gemerkte lyn of balkie.", "Jy kan afstande op die kaart meet en dan teen die lynskaal vergelyk."] },
      { label: "Woordskaal", lines: ["'n Woordskaal verduidelik skaal in woorde.", "Voorbeeld: 1 cm op die kaart = 100 km op die grond.", "As 1 cm = 100 km, dan is 3 cm = 300 km."] }
    ]
  },
  {
    title: "Handel: koop en verkoop",
    picture: 2,
    groups: [
      { label: "Wat is handel?", lines: ["Handel is wanneer mense goedere koop en verkoop.", "Mense koop goedere wat hulle nodig het of graag wil hê.", "Mense verkoop goedere om geld te kry."] },
      { label: "Ruilhandel", lines: ["Voor geld het mense goedere geruil.", "As die een persoon iets nodig gehad het en die ander iets anders, kon hulle ruil.", "Vandag gebruik mense meestal geld."] },
      { label: "Wins en verlies", lines: ["As jy vir meer verkoop as wat jy betaal het, maak jy wins.", "As jy vir minder verkoop as wat jy betaal het, maak jy verlies."] }
    ]
  },
  {
    title: "Uitvoere en invoere",
    picture: 2,
    groups: [
      { label: "Uitvoere", lines: ["Uitvoere is goedere wat 'n land verkoop en na ander lande uitstuur.", "Suid-Afrika voer hulpbronne en vervaardigde goedere uit.", "Voorbeelde: goud, steenkool, ystererts, masjiene en motors."] },
      { label: "Invoere", lines: ["Invoere is goedere wat 'n land van ander lande koop en inbring.", "Suid-Afrika voer goedere soos sommige masjiene, klere, medisyne en elektronika in.", "Lande handel omdat hulle nie alles self produseer nie."] }
    ]
  },
  {
    title: "Handel met ander werelddele",
    picture: 2,
    groups: [
      { label: "Handelsroetes", lines: ["Suid-Afrika koop van en verkoop aan lande regoor die wereld.", "Pyle op 'n kaart kan wys waarheen uitvoere gaan en waar invoere vandaan kom.", "Handel verbind Suid-Afrika met Afrika, Europa, Asie en Amerika."] },
      { label: "Kaartvraag", lines: ["Kyk na die rigting van die pyle.", "Lees die sleutel of prentjies om goedere te identifiseer.", "Vra: Wat voer Suid-Afrika uit? Wat voer Suid-Afrika in?"] }
    ]
  },
  {
    title: "Grondstowwe en vervaardigde goedere",
    picture: 3,
    groups: [
      { label: "Grondstowwe", lines: ["Grondstowwe is hulpbronne uit die natuur wat nog nie verwerk is nie.", "Dit word ook primêre produkte genoem.", "Voorbeelde: steenkool, ystererts, hout, wol en goud."] },
      { label: "Vervaardigde goedere", lines: ["Vervaardigde goedere is produkte wat mense in fabrieke maak.", "Dit word ook sekondêre produkte genoem.", "Voorbeelde: fietse, rekenaars, motors, televisies, klere en meubels."] }
    ]
  },
  {
    title: "Vaardighede en dienste",
    picture: 2,
    groups: [
      { label: "Vaardighede", lines: ["Vaardighede is dinge wat mense kan doen.", "Voorbeelde: teken, bou, herstel, ontwerp, onderrig of rekenaarwerk.", "Vaardighede kan gebruik word om goedere of dienste te lewer."] },
      { label: "Dienste", lines: ["Dienste is werk wat mense vir ander doen.", "Voorbeelde: onderwysers, dokters, bouers, haarkappers en rekenaartegnici.", "Nie alle handel gaan oor voorwerpe nie; mense betaal ook vir dienste."] }
    ]
  },
  {
    title: "Hulpbronne en hul waarde",
    picture: 3,
    groups: [
      { label: "Waarde", lines: ["Grondstowwe word waardevol wanneer dit in goedere verander word.", "Hoe meer verwerking, hoe meer kan die waarde styg.", "Mense kan geld verdien deur hulpbronne te verwerk en te verkoop."] },
      { label: "Voorbeelde", lines: ["Hout kan meubels word.", "Ystererts kan staal en boumateriaal word.", "Steenkool kan energie of sakke steenkool word.", "Goud kan juweliersware word."] }
    ]
  },
  {
    title: "Goud en juweliersware",
    picture: 3,
    groups: [
      { label: "Van rots tot juweel", lines: ["Goud word uit rotse ontgin.", "Die goud word vergruis en verwerk.", "Dit word gesmelt en gegiet.", "Daarna word dit vervaardig tot juweliersware."] },
      { label: "Waarde neem toe", lines: ["Rou goud het waarde.", "Wanneer dit vervoer, verwerk en verkoop word, kan die waarde styg.", "Juweliersware kan meer werd wees as die oorspronklike goud omdat arbeid en ontwerp bykom."] }
    ]
  }
];

const flashcards = [
  ["Wat is breedtegraad?", "Die posisie van 'n plek tussen die ewenaar en die Noordpool of Suidpool."],
  ["Wat is lengtegraad?", "Die posisie van 'n plek oos of wes van die Greenwich-meridiaan."],
  ["Wat is die Greenwich-meridiaan?", "'n Lyn op 'n kaart of aardbol wat van die Noordpool tot die Suidpool deur Greenwich in Engeland loop."],
  ["Wat is die ewenaar?", "'n Lyn wat die aarde in noord en suid verdeel."],
  ["Wat is koördinate?", "Die breedtegraad en lengtegraad wat saam 'n plek se posisie wys."],
  ["Watter een skryf jy gewoonlik eerste: breedtegraad of lengtegraad?", "Breedtegraad eerste, dan lengtegraad."],
  ["Wat beteken 30°S?", "30 grade suid van die ewenaar."],
  ["Wat beteken 25°O?", "25 grade oos van die Greenwich-meridiaan."],
  ["Wat is skaal op 'n kaart?", "Dit wys hoe afstand op die kaart vergelyk met afstand op die grond."],
  ["Wat is 'n lynskaal?", "'n Gemerkte lyn wat wys hoeveel kaartafstand op die grond verteenwoordig."],
  ["Wat is 'n woordskaal?", "'n Skaal wat in woorde verduidelik word, bv. 1 cm = 100 km."],
  ["As 1 cm = 100 km, hoeveel is 4 cm?", "400 km."],
  ["Wat is handel?", "Die koop en verkoop van goedere of dienste."],
  ["Wat is ruilhandel?", "Wanneer mense goedere of dienste direk met mekaar ruil sonder geld."],
  ["Wat is wins?", "Wanneer jy iets vir meer verkoop as wat jy daarvoor betaal het."],
  ["Wat is verlies?", "Wanneer jy iets vir minder verkoop as wat jy daarvoor betaal het."],
  ["Wat is uitvoere?", "Goedere wat 'n land aan ander lande verkoop en uitstuur."],
  ["Wat is invoere?", "Goedere wat 'n land van ander lande koop en inbring."],
  ["Noem twee Suid-Afrikaanse uitvoere.", "Goud, steenkool, ystererts, motors, masjiene of sommige voedselprodukte."],
  ["Wat is grondstowwe?", "Hulpbronne uit die natuur wat nog nie verwerk is nie."],
  ["Wat is vervaardigde goedere?", "Goedere wat deur mense in fabrieke gemaak of verwerk is."],
  ["Wat is primêre produkte?", "Grondstowwe of hulpbronne uit die natuur."],
  ["Wat is sekondêre produkte?", "Vervaardigde goedere wat uit grondstowwe gemaak is."],
  ["Wat is vaardighede?", "Dinge wat mense kan doen, soos bou, ontwerp, herstel of onderrig."],
  ["Waarom word hulpbronne meer werd wanneer dit verwerk word?", "Omdat arbeid, vaardighede, vervoer en vervaardiging waarde byvoeg."],
  ["Noem die stappe van goud tot juweliersware.", "Ontgin, vergruis/verwerk, smelt/giet, vervaardig, verkoop."]
];

const quiz = [
  {
    question: "Watter lyn verdeel die aarde in noord en suid?",
    options: ["Greenwich-meridiaan", "Ewenaar", "Lynskaal", "Handelsroete"],
    answer: 1,
    fact: "Die ewenaar verdeel die aarde in noord en suid."
  },
  {
    question: "Lengtegraad wys 'n plek se posisie...",
    options: ["oos of wes van Greenwich", "bo of onder 'n berg", "tussen stad en plaas", "volgens wins of verlies"],
    answer: 0,
    fact: "Lengtegraad meet posisie oos of wes van die Greenwich-meridiaan."
  },
  {
    question: "Watter deel van koördinate word gewoonlik eerste geskryf?",
    options: ["Lengtegraad", "Breedtegraad", "Skaal", "Afstand"],
    answer: 1,
    fact: "Breedtegraad word gewoonlik eerste geskryf."
  },
  {
    question: "Wat wys skaal op 'n kaart?",
    options: ["Hoe oud die kaart is", "Hoe kaartafstand met regte afstand vergelyk", "Waar handel begin het", "Hoeveel goedere kos"],
    answer: 1,
    fact: "Skaal help jou om afstand op die grond uit kaartafstand te bereken."
  },
  {
    question: "As die woordskaal 1 cm = 100 km is, hoeveel is 2,5 cm?",
    options: ["25 km", "100 km", "250 km", "1000 km"],
    answer: 2,
    fact: "2,5 x 100 km = 250 km."
  },
  {
    question: "Wat is handel?",
    options: ["Net om goed weg te gee", "Die koop en verkoop van goedere of dienste", "Om koördinate te lees", "Om 'n kaart te vou"],
    answer: 1,
    fact: "Handel gaan oor koop, verkoop en soms ruil."
  },
  {
    question: "Wanneer maak jy wins?",
    options: ["As jy goedkoper verkoop as wat jy betaal het", "As jy glad nie verkoop nie", "As jy duurder verkoop as wat jy betaal het", "As jy 'n kaart teken"],
    answer: 2,
    fact: "Wins beteken die verkoopprys is hoër as die koste."
  },
  {
    question: "Wat is uitvoere?",
    options: ["Goedere wat 'n land verkoop en uitstuur", "Goedere wat 'n land koop en inbring", "Kaartlyne", "Mense se vaardighede"],
    answer: 0,
    fact: "Uitvoere gaan uit die land na ander lande."
  },
  {
    question: "Watter voorbeeld is 'n grondstof?",
    options: ["Rekenaar", "Steenkool", "Televisie", "Motor"],
    answer: 1,
    fact: "Steenkool is 'n hulpbron uit die natuur."
  },
  {
    question: "Watter voorbeeld is 'n vervaardigde produk?",
    options: ["Goud in rots", "Ystererts", "Fiets", "Hout in 'n woud"],
    answer: 2,
    fact: "Fietse word deur mense vervaardig."
  },
  {
    question: "Waarom neem goud se waarde toe wanneer dit juweliersware word?",
    options: ["Dit word minder nuttig", "Arbeid, ontwerp en verwerking voeg waarde by", "Dit word terug in rots verander", "Dit word 'n invoerlyn"],
    answer: 1,
    fact: "Vervaardiging en vaardighede voeg waarde by grondstowwe."
  },
  {
    question: "Wat moet jy op 'n handelskaart eerste doen?",
    options: ["Die pyle en sleutel lees", "Alle plekname uitvee", "Die skaal ignoreer", "Net die kleure tel"],
    answer: 0,
    fact: "Pyle wys rigting van handel en die sleutel wys goedere."
  }
];

const timeline = [
  ["1. Kaartwoorde", "Leer breedtegraad, lengtegraad, ewenaar en Greenwich-meridiaan."],
  ["2. Koördinate", "Skryf breedtegraad eerste en lengtegraad tweede."],
  ["3. Skaal", "Gebruik lynskaal of woordskaal om afstand te bereken."],
  ["4. Handel", "Verstaan koop, verkoop, ruilhandel, wins en verlies."],
  ["5. Invoere en uitvoere", "Lees op kaarte wat Suid-Afrika koop en verkoop."],
  ["6. Produkte", "Onderskei grondstowwe en vervaardigde goedere."],
  ["7. Waarde", "Verduidelik hoe verwerking die waarde van hulpbronne verhoog."],
  ["8. Waardeketting", "Gebruik goud as voorbeeld: ontgin, verwerk, vervaardig en verkoop."]
];

const words = [
  ["breedtegraad", "Die posisie van 'n plek tussen die ewenaar en die Noordpool of Suidpool."],
  ["lengtegraad", "Die posisie van 'n plek oos of wes van die Greenwich-meridiaan."],
  ["Greenwich-meridiaan", "'n Lyn wat van die Noordpool tot die Suidpool deur Greenwich in Engeland loop."],
  ["graad", "'n Meeteenheid wat gebruik word om hoeke te meet."],
  ["ewenaar", "'n Lyn wat die aarde in noord en suid verdeel."],
  ["koördinate", "Breedtegraad en lengtegraad saam om 'n plek te wys."],
  ["skaal", "Die verhouding tussen afstand op 'n kaart en afstand op die grond."],
  ["lynskaal", "'n Skaal wat afstande met 'n gemerkte lyn wys."],
  ["woordskaal", "'n Skaal wat in woorde verduidelik word."],
  ["handel", "Die koop en verkoop van goedere of dienste."],
  ["ruilhandel", "Wanneer mense goedere of dienste direk ruil sonder geld."],
  ["goedere", "Dinge wat mense koop, verkoop of gebruik."],
  ["wins", "Geld wat jy maak as jy vir meer verkoop as wat jy betaal het."],
  ["verlies", "Wanneer jy vir minder verkoop as wat jy betaal het."],
  ["uitvoere", "Goedere wat na ander lande verkoop en gestuur word."],
  ["invoere", "Goedere wat van ander lande gekoop en ingebring word."],
  ["natuurlike hulpbronne", "Dinge uit die natuur wat mense gebruik."],
  ["grondstowwe", "Hulpbronne uit die natuur wat nog nie verwerk is nie."],
  ["primêre produkte", "Grondstowwe of natuurlike hulpbronne."],
  ["vervaardigde goedere", "Goedere wat mense uit grondstowwe maak."],
  ["sekondêre produkte", "Vervaardigde produkte."],
  ["vaardighede", "Dinge wat mense kan doen."],
  ["dienste", "Werk wat mense vir ander mense doen."],
  ["vervaardiging", "Die proses om grondstowwe in produkte te verander."],
  ["waarde", "Hoeveel iets werd is of waarvoor dit verkoop kan word."]
];

const examPractice = [
  {
    marks: "4 punte",
    question: "Verduidelik die verskil tussen breedtegraad en lengtegraad.",
    answer: ["Breedtegraad wys hoe ver noord of suid 'n plek van die ewenaar is.", "Dit word met N of S aangedui.", "Lengtegraad wys hoe ver oos of wes 'n plek van Greenwich is.", "Dit word met O of W aangedui."]
  },
  {
    marks: "3 punte",
    question: "Hoe sal jy koördinate op 'n kaart lees?",
    answer: ["Lees eers die breedtegraad.", "Besluit of dit noord of suid van die ewenaar is.", "Lees dan die lengtegraad en besluit of dit oos of wes van Greenwich is."]
  },
  {
    marks: "3 punte",
    question: "Gebruik die woordskaal 1 cm = 100 km. Bereken 3,5 cm.",
    answer: ["1 cm verteenwoordig 100 km.", "3,5 cm x 100 km = 350 km.", "Die afstand is 350 km."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik handel met die woorde koop, verkoop, wins en verlies.",
    answer: ["Handel is die koop en verkoop van goedere of dienste.", "As jy iets koop en vir meer verkoop, maak jy wins.", "As jy vir minder verkoop as wat jy betaal het, maak jy verlies.", "Mense handel om goedere te kry en geld te verdien."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik uitvoere en invoere en gee 'n voorbeeld van elkeen.",
    answer: ["Uitvoere is goedere wat Suid-Afrika aan ander lande verkoop.", "Voorbeeld: goud, steenkool, ystererts, motors of masjiene.", "Invoere is goedere wat Suid-Afrika van ander lande koop.", "Voorbeeld: sekere elektronika, klere, medisyne of masjiene."]
  },
  {
    marks: "4 punte",
    question: "Vergelyk grondstowwe en vervaardigde goedere.",
    answer: ["Grondstowwe kom uit die natuur en is nog nie verwerk nie.", "Dit word ook primêre produkte genoem.", "Vervaardigde goedere word deur mense in fabrieke gemaak.", "Dit word ook sekondêre produkte genoem."]
  },
  {
    marks: "5 punte",
    question: "Gebruik goud as voorbeeld om te verduidelik hoe hulpbronne meer waarde kry.",
    answer: ["Goud word eers uit rotse ontgin.", "Dit word vergruis en verwerk.", "Dit word gesmelt en gegiet.", "Mense gebruik vaardighede om juweliersware te maak.", "Die finale juweliersware is meer werd omdat arbeid, ontwerp en verwerking waarde byvoeg."]
  },
  {
    marks: "3 punte",
    question: "Hoe gebruik jy 'n kaart van Suid-Afrika se invoere en uitvoere?",
    answer: ["Lees die sleutel om te sien watter goedere gewys word.", "Kyk na die pyle om die rigting van handel te verstaan.", "Noem watter goedere Suid-Afrika uitvoer en invoer."]
  }
];

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
