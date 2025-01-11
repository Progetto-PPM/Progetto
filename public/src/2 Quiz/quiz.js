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
  },
  {
    question: "Qual è la capitale d'Italia?",
    options: ["Milano", "Roma", "franco", "Torino"],
    answer: 2
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
  },
  {
    question: "Qual è la capitale d'Italia?",
    options: ["Milano", "franco", "Napoli", "Torino"],
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
let max = 0;




function startTimer() {
  if (max !== 20) {
    // Nascondi il timer se max non è 20
    const timerContainer = document.getElementById('timer-container');
    if (timerContainer) {
      timerContainer.style.display = 'none';
    }
    return;
  }

  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) {
    timerContainer.style.display = 'block'; // Mostra il timer
  }

  // Inizializza il timer solo quando il DOM è completamente caricato
  const timerElement = document.getElementById('timer');
  let countdown = 20; // Durata del timer in secondi
  if (!timerElement) {
    console.error('Elemento #timer non trovato!');
    return;
  }

  // Aggiunge l'animazione solo quando il timer inizia
  timerElement.classList.add('pulsing');

  const timerInterval = setInterval(() => {
    countdown--; // Decrementa il timer
    timerElement.textContent = countdown >= 0 ? countdown : 'Tempo scaduto!'; // Mostra il tempo rimanente
    
    // Rimuove l'animazione quando il timer arriva a 0
    if (countdown === 0) {
      timerElement.classList.remove('pulsing');
      // Al termine del timer, disabilita l'interazione
      disableOptions(); // Disabilita la selezione delle opzioni

      // Vai direttamente alla fine del quiz, mostrando il punteggio
      endQuiz();
      
      clearInterval(timerInterval); // Ferma il timer
    }
  }, 1000); // Aggiorna ogni secondo
}


function disableOptions() {
  // Disabilita tutte le opzioni
  const options = document.getElementById("options").children;
  for (let option of options) {
    option.classList.add("disabled");
    option.onclick = null; // Rimuove l'evento di click
  }

  // Nascondi il pulsante "Conferma" e mostra direttamente "Avanti"
  document.getElementById("confirm-btn").style.display = 'none';
  document.getElementById("next-btn").style.display = 'none'; // Nascondi il pulsante "Avanti"
}


function passValueAndNavigate(valore) {
  // Modifica l'URL e passa il valore come parametro
  localStorage.setItem("currentQuestionIndex", valore);
  window.location.href= "quiz1.html";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente caricato, avvio il timer...");
  currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0; // Recupera il valore o usa 0
  max = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
  loadQuestion(currentQuestionIndex); // Carica la domanda corrente
  startTimer();
});


function loadQuestion(index) {
  console.log(`Caricamento domanda: ${index}`);
  const questionData = questions[index];
  
  // Mostra la domanda
  document.getElementById("question").textContent = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = '';

  // Crea le opzioni
  questionData.options.forEach((option, i) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");

    optionElement.textContent = option;
    optionElement.onclick = () => selectOption(optionElement, i);

    optionsContainer.appendChild(optionElement);
  });

  // Gestione pulsanti
  document.getElementById("confirm-btn").style.display = 'inline-block';
  document.getElementById("confirm-btn").disabled = true; // Disabilitato finché non si seleziona un'opzione
  document.getElementById("next-btn").style.display = 'none'; // Nascondi il pulsante "Avanti"
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
      if(max == 0){
        selectedOption.classList.add("correct");
      }
      score++;
    } else {
      
      
      const correctOption = document.getElementById("options").children[questionData.answer];
      if(max == 0){
        correctOption.classList.add("correct");
        selectedOption.classList.add("incorrect");
      }
       
    }
  }

  const options = document.getElementById("options").children;
  for (let option of options) {
    if(option != selectedOption) {

      option.classList.add("disabled");
      option.onclick = null; // Rimuove l'evento di click
    }
  }
 
  // Mostra il pulsante "Avanti" (che ora è a destra del contenitore)
  document.getElementById("next-btn").style.display = 'inline-block';
  document.getElementById("next-btn").disabled = false;
  
  // Nascondi il pulsante "Conferma"
  document.getElementById("confirm-btn").style.display = 'none';
}


function nextQuestion() {
  // Incrementa l'indice delle domande
  currentQuestionIndex++;

  if (currentQuestionIndex < max + 10 && currentQuestionIndex < questions.length) {
    // Salva l'indice nel localStorage per mantenere lo stato
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);

    // Carica la prossima domanda
    loadQuestion(currentQuestionIndex);
    document.getElementById("next-btn").disabled = true; // Disabilita il pulsante fino alla selezione
  } else {
    // Nascondi il contenitore della domanda e mostra il punteggio finale
    document.getElementById("question-container").style.display = 'none'; // Nascondi il contenitore delle domande
    document.querySelector('.question-timer-container').style.display = 'none'; // Nascondi anche il timer
    document.getElementById("next-btn").style.display = 'none'; // Nascondi il pulsante "Avanti"
    document.getElementById("score-container").style.display = 'block'; // Mostra il contenitore del punteggio finale
    document.getElementById("score").textContent = score;
  }
}

function endQuiz() {
  // Nascondi il contenitore della domanda
  document.getElementById("question-container").style.display = 'none'; // Nascondi la domanda
  document.querySelector('.question-timer-container').style.display = 'none'; // Nascondi anche il timer

  // Mostra il punteggio finale
  document.getElementById("score-container").style.display = 'block'; // Mostra il contenitore del punteggio finale
  document.getElementById("score").textContent = score; // Mostra il punteggio
}


function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  window.location.href= "QUIZ.html";
}
function goBackQuiz(value) {
    switch(value) {
      case 0:
        if(confirm("Tornerai alla scelta dei livelli perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
          window.location.href = "QUIZ.html";
        }
        break;
      case 1:
        if(confirm("Tornerai alla home perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
          window.location.href = "../home.html";
        }
        break;
      case 2:
        if(confirm("Tornerai alla home perdendo i tuoi progressi.\nSei sicuro di voler uscire dal gioco?")) {
          window.location.href = "../home.html";
        }
        break;
    }

}


