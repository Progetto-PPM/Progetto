const questions = [
  {
    question: "Qual è la principale fonte di energia per tutti i pianeti del nostro sistema solare?",
    options: ["Nettuno", "Sole", "Fusione Nucleare", "Fotosintesi Clorofilliana"],
    answer: 1
  },
  {
    question: "Qual è il pianeta più vicino al sole?",
    options: ["Mercurio", "Marte", "Venere", "Terra"],
    answer: 0
  },
  {
    question: "Qual è il pianeta più grande del nostro sistema solare?",
    options: ["Sole", "Terra", "Marte", "Giove"],
    answer: 3
  },
  {
    question: "Qual è il nome del processo attraverso cui il Sole produce energia?",
    options: ["Radioattività", "Combustione", "Fusione Nucleare", "Fissione Nucleare"],
    answer: 2
  },
  {
    question: "Quale pianeta è famoso per la sua Grande Macchia Rossa?",
    options: ["Giove", "Saturno", "Mercurio", "Sole"],
    answer: 0
  },
  {
    question: "Qual è il pianeta più caldo del nostro sistema solare?",
    options: ["Terra", "Mercurio", "Venere", "Sole"],
    answer: 2
  },
  {
    question: "Quale pianeta ha il maggior numero di lune?",
    options: ["Giove", "Saturno", "Nettuno", "Urano"],
    answer: 0
  },
  {
    question: "Qual è l'unico pianeta conosciuto per ospitare la vita?",
    options: ["Terra", "Marte", "Giove", "Saturno"],
    answer: 0
  },
  {
    question: "Qual è il nome del processo che genera il campo magnetico terrestre?",
    options: ["Influenza del Sole", "Dinamo Terrestre", "Attrazione Gravitazionale", "Magnetizzazione delle rocce"],
    answer: 1
  },
  {
    question: "Quale pianeta ospita il vulcano più grande del sistema solare?",
    options: ["Giove", "Sole", "Terra", "Marte"],
    answer: 3
  },
  {
    question: "Quale pianeta è conosciuto come la ''Stella del mattino''",
    options: ["Venere", "Saturno", "Sole", "Luna"],
    answer: 0
  },
  {
    question: "Qual è il pianeta con l'anello di asteroidi più grande del Sistema Solare?",
    options: ["Urano", "Giove", "Saturno", "Nettuno"],
    answer: 2
  },
  {
    question: "Cosa sono le Comete?",
    options: ["Pallette di ghiaccio e roccia", "Asteroidi incandescenti", "Stelle luminose", "Pianeti fuori dal Sistema Solare"],
    answer: 0
  },
  {
    question: "Perchè il cielo è blu?",
    options: ["A causa della diffusione della luce", "A causa del Sole", "Perchè l'acqua degli oceani è blu", "Perchè il cielo è uno specchio"],
    answer: 1
  },
  {
    question: "Cos'è un anno luce?",
    options: ["Distanza percorsa dalla luce in un anno", "L'anno luce è il tempo che la luce impiega per raggiungere un oggetto celeste", "L'anno luce è la distanza tra la Terra e il Sole", "L'anno luce è una misura di luminosità"],
    answer: 0
  },
  {
    question: "Come si è formato il Sistema Solare? ",
    options: ["I pianeti sono stati creati da Dio", "Da una nebulosa.", "Il Sistema Solare si è formato da un'esplosione stellare", "Il Sistema Solare è sempre esistito così come lo conosciamo"],
    answer: 1
  },
  {
    question: "Cosa sono le fasi lunari?",
    options: ["Le fasi lunari sono causate dall'ombra della Terra", "Le fasi lunari sono dovute a un cambiamento nella distanza tra la Terra e la Luna", "Diversi aspetti della Luna visti dalla Terra", "Le fasi lunari sono causate da nuvole che coprono la Luna"],
    answer: 2
  },
  {
    question: "Dove si trova la fascia degli asteroidi?",
    options: ["Tra Urano e Nettuno", "Tra Saturno e Urano", "Tra Mercurio e Venere", "Tra Marte e Giove"],
    answer: 3
  },
  {
    question: "Quanto dura il Periodo di Rivoluzione di Mercurio?",
    options: ["230g", "312g", "49g", "88g"],
    answer: 3
  },
  {
    question: "Quanto dura il Periodo di Rivoluzione di Nettuno?",
    options: ["17,03 anni", "93,22 anni", "164,82 anni", "273,14 anni"],
    answer: 2
  },
  {
    question: "Come si sono formati gli anelli di Saturno?",
    options: ["Resti della formazione di Saturno", "Gli anelli si soni formati per la disintegrazione di una luna di Saturno", " Gli anelli sono stati formati da materiale proveniente da comete o asteroidi", "Gli anelli si sono formati dopo il risultato di eruzioni vulcaniche di un satellite di Saturno"],
    answer: 1
  },
  {
    question: "Qual è il destino finale del Sole?",
    options: ["Il Sole diventerà una nana bianca dopo aver attraversato la fase di gigante rossa.", "Il Sole si spegnerà semplicemente", "Il Sole esploderà in una supernova", "Il Sole diventerà un buco nero"],
    answer: 0
  },
  {
    question: "Come si è formata la Luna?",
    options: ["La Luna è stata catturata dalla gravità terrestre", "La Luna si è formata da una nebulosa separata", "La Luna si è staccata dalla Terra", "La Luna si è formata da una collisione di un corpo celeste con la Terra"],
    answer: 3
  },
  {
    question: "Qual è la causa dell'inclinazione assiale estrema di Urano?",
    options: ["Contrazione gravitazionale", "Influenza dei pianeti vicini", "Fenomeni atmosferici", "Probabile collisione con un oggetto di grandi dimensioni durante la formazione"],
    answer: 3
  },
  {
    question: "Perché Saturno ha gli anelli più visibili?",
    options: ["Perchè la omposizione degli anelli prevalentemente ghiacciata", "Perchè Saturno è il pianeta più vicino agli anelli", "Perchè gli anelli sono un fenomeno unico di Saturno", "Perchè gli anelli sono formati da materia oscura"],
    answer: 0
  },
  {
    question: "Qual è la differenza tra un gigante gassoso e un gigante ghiacciato?",
    options: ["Tutti i giganti sono fatti solo di gas", " I giganti gassosi sono fatti di gas leggeri, mentre i giganti ghiacciati hanno una composizione più ricca e complessa", "I giganti ghiacciati sono più freddi dei giganti gassosi", "I giganti gassosi non hanno un nucleo"],
    answer: 1
  },
  {
    question: "Dove sono le fasce di radiazione di Van Allen? ",
    options: ["Urano", "Giove", "Terra", "Mercurio"],
    answer: 2
  },
  {
    question: "Quale pianeta ha perso la maggior parte della sua atmosfera?",
    options: ["Venere", "Marte", "Giove", "Saturno"],
    answer: 1
  },
  {
    question: "Qual è la principale causa dell'effetto serra su Venere?",
    options: ["A causa dell'atmosfera densa di anidride carbonica", "A causa dell'alta concentrazione di CO2", "A causa dell'atmosfera densa", "A causa della mancanza di assorbimento"],
    answer: 0
  },
  {
    question: "Perché la temperatura della corona solare è superiore a quella della superficie?",
    options: ["La causa principale del riscaldamento della corona solare è legata al calore proveniente dal nucleo", "La causa principale del riscaldamento della corona solare è legata ai campi magnetici solari", "La causa principale del riscaldamento della corona solare è legata alle particelle solari provenienti dallo spazio", "La causa principale del riscaldamento della corona solare è legata alla vicinanza del Sole"],
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

function goBackMapQuiz(value) {
  switch (value) {
    case 0:
      if(confirm("Tornerai alla home perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../home.html';
      }
    break;
    case 1:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/teoria.html';
      }
    break;
    case 2:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='QUIZ.html';
      }
    break;
    case 22:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../2 Quiz/QUIZ.html';
      }
    break;
    case 3:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../3 Svago/svago.html';
      }
    break;
    case 4:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/sole.html';
      }
    break;
    case 5:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/mercurio.html';
      }
    break;
    case 6:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/venere.html';
      }
    break;
    case 7:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/terra.html';
      }
    break;
    case 8:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/marte.html';
      }
    break;
    case 9:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/giove.html';
      }
    break;
    case 10:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/saturno.html';
      }
    break;
    case 11:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/urano.html';
      }
    break;
    case 12:
      if (confirm("Uscirai dal quiz perdendo i tuoi progressi.\nSei sicuro di voler uscire dal quiz?")) {
        window.location.href ='../1 Teoria/1_1 Corpi Maggiori/nettuno.html';
      }
    break;
  }
}


