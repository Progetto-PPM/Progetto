const questions = [
  {
    question: "Qual è la capitale d'Italia?",
    options: ["Milano", "Roma", "Napoli", "Torino"],
    answer: 1
  },
  {
    question: "Chi ha scritto 'La Divina Commedia'?",
    options: ["Dante Alighieri", "Giovanni Boccaccio", "Petrarca", "Umberto Eco"],
    answer: 0
  },
  {
    question: "Qual è il simbolo chimico dell'acqua?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: 0
  },
  {
    question: "Qual è il fiume più lungo del mondo?",
    options: ["Rio delle Amazzoni", "Nilo", "Mississippi", "Gange"],
    answer: 1
  },
  {
    question: "In che anno è stata fondata Roma?",
    options: ["753 a.C.", "500 a.C.", "1200 d.C.", "476 d.C."],
    answer: 0
  },
  {
    question: "Chi ha dipinto la 'Monna Lisa'?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raffaello", "Caravaggio"],
    answer: 1
  },
  {
    question: "Qual è la capitale della Francia?",
    options: ["Berlino", "Madrid", "Parigi", "Roma"],
    answer: 2
  },
  {
    question: "Quale pianeta è conosciuto come il 'pianeta rosso'?",
    options: ["Venere", "Marte", "Giove", "Saturno"],
    answer: 1
  },
  {
    question: "In quale anno è stato lanciato il primo uomo nello spazio?",
    options: ["1961", "1957", "1970", "1980"],
    answer: 0
  },
  {
    question: "Qual è la lingua più parlata al mondo?",
    options: ["Inglese", "Cinese mandarino", "Spagnolo", "Arabo"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null; // Variabile per tenere traccia della risposta selezionata

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById("question").textContent = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = '';

  questionData.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");

    optionElement.textContent = option;
    optionElement.onclick = () => selectOption(optionElement, index); // Selezione della risposta

    optionsContainer.appendChild(optionElement);
  });

  // Mostra il pulsante di conferma e nascondi "Avanti"
  document.getElementById("confirm-btn").style.display = 'inline-block';
  document.getElementById("next-btn").style.display = 'none';
}

function selectOption(optionElement, index) {
  // Deseleziona l'eventuale precedente risposta
  if (selectedOption) {
    selectedOption.classList.remove("selected");
  }

  // Seleziona la nuova risposta
  selectedOption = optionElement;
  selectedOption.classList.add("selected");

  // Attiva il pulsante di conferma
  document.getElementById("confirm-btn").disabled = false;
}

function confirmAnswer() {
  const questionData = questions[currentQuestionIndex];

  // Disabilita il pulsante di conferma per evitare modifiche
  document.getElementById("confirm-btn").disabled = true;

  // Aggiungi lo stato corretto o errato
  if (selectedOption) {
    const selectedIndex = Array.from(selectedOption.parentElement.children).indexOf(selectedOption);
    
    if (selectedIndex === questionData.answer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("incorrect");
    }
  }

  // Mostra il pulsante "Avanti" (che ora è a destra del contenitore)
  document.getElementById("next-btn").style.display = 'inline-block';
  document.getElementById("next-btn").disabled = false;

  // Nascondi il pulsante "Conferma"
  document.getElementById("confirm-btn").style.display = 'none';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("next-btn").disabled = true;
  } else {
    document.getElementById("question-container").style.display = 'none';
    document.getElementById("next-btn").style.display = 'none';
    document.getElementById("score-container").style.display = 'block';
    document.getElementById("score").textContent = score;
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Ripristina la visibilità e disabilita il pulsante "Avanti"
  document.getElementById("question-container").style.display = 'block';
  document.getElementById("score-container").style.display = 'none';
  document.getElementById("next-btn").disabled = true;

  // Ricarica la prima domanda
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  document.getElementById("next-btn").disabled = true;
});

function goBackQuiz() {
  if(confirm("Tornerai alla home perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
    window.location.href = "../home.html";
  }
}
