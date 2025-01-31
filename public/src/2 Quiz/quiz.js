const questions = [
  {
    question: "Qual è la principale fonte di energia per tutti i pianeti del nostro sistema solare?",
    options: ["Nettuno", "Sole", "Fusione Nucleare", "Fotosintesi Clorofilliana"],
    answer: 1,
    explanation: "Il Sole, con il calore che emette, è la fonte principale d'energia per i pianeti del Sistema Solare, garantendo anche la vita sulla Terra."
  },
  {
    question: "Qual è il pianeta più vicino al sole?",
    options: ["Mercurio", "Marte", "Venere", "Terra"],
    answer: 0,
    explanation: "Il pianeta più vicino al sole è Mercurio."
  },
  {
    question: "Qual è il pianeta più grande del nostro Sistema Solare?",
    options: ["Sole", "Terra", "Marte", "Giove"],
    answer: 3,
    explanation: "Il pianeta più grande del nostro Sistema Solare è Giove, con un diametro di ben 139mila km!."
  },
  {
    question: "Qual è lo strato più interno del Sole?",
    options: ["Zona Radiativa", "Zona Convettiva", "Nucleo", "Fotosfera"],
    answer: 2,
    explanation: "Lo strato più interno del Sole è il Nucleo, dove avvengono molte reazioni di fusione di idrogeno che, trasformandosi in elio viene liberata l'energia che viaggerà negli strati superiori."
  },
  {
    question: "Quale pianeta è famoso per la sua Grande Macchia Rossa?",
    options: ["Giove", "Saturno", "Mercurio", "Sole"],
    answer: 0,
    explanation: "La Grande Macchia Rossa di Giove è una gigantesca tempesta anticiclonica, larga più di una volta e mezza il diametro della Terra, attiva da almeno 350 anni."
  },
  {
    question: "Qual è il pianeta più caldo del nostro sistema solare?",
    options: ["Terra", "Mercurio", "Venere", "Sole"],
    answer: 2,
    explanation: "La sua atmosfera, composta principalmente da anidride carbonica con tracce di azoto e acido solforico, genera una pressione 92 volte superiore a quella terrestre e intrappola il calore, rendendo Venere il pianeta più caldo del Sistema Solare."
  },
  {
    question: "Quale pianeta ha il maggior numero di lune?",
    options: ["Giove", "Saturno", "Nettuno", "Urano"],
    answer: 0,
    explanation: "Giove ha 67 satelliti in tutto."
  },
  {
    question: "Qual è l'unico pianeta conosciuto per ospitare la vita?",
    options: ["Terra", "Marte", "Giove", "Saturno"],
    answer: 0,
    explanation: "La Terra è il solo pianeta noto ad avere acqua in tutti e tre gli stati (solido, liquido e gassoso) e la temperatura ottimale data dall'atmosfera, rendono la Terra un pianeta ottimale per la vita come la conosciamo."
  },
  {
    question: "Come viene generato il campo magnetico terrestre?",
    options: ["Dal movimento delle placche", "Dal movimento del nucleo esterno", "Dalle eruzioni vulcaniche", "Da quanto ferro viene scavato"],
    answer: 1,
    explanation: "Il movimento del nucleo esterno genera un circuito elettrico profondo che crea un campo magnetico allineato con l'asse di rotazione."
  },
  {
    question: "Quale pianeta ospita il vulcano più grande del sistema solare?",
    options: ["Giove", "Sole", "Terra", "Marte"],
    answer: 3,
    explanation: "Una caratteristica notevole di Marte è il vulcano chiamato Monte Olympus, con 22km d'altezza."
  },
  {
    question: "Quale pianeta è conosciuto come la ''Stella del mattino''",
    options: ["Venere", "Saturno", "Sole", "Luna"],
    answer: 0,
    explanation: "La luminosità di Venere lo rende uno dei corpi celesti più visibili dal pianeta Terra, dandogli il nome 'Stella del Mattino'."
  },
  {
    question: "Qual è il pianeta con l'anello di asteroidi più grande del Sistema Solare?",
    options: ["Urano", "Giove", "Saturno", "Nettuno"],
    answer: 2,
    explanation: "Saturno e Urano sono gli unici pianeti che hanno un anello di asteroidi intorno a loro, ma Saturno è l'unico pianeta con l'anello ben visibile."
  },
  {
    question: "Quale pianeta oltre la Terra presenta segni di acqua liquida?",
    options: ["Mercurio", "Nettuno", "Marte", "Saturno"],
    answer: 2,
    explanation: "Marte ha delle calotte polari costituie da ghiaccio d'acqua e ghiaccio secco. Sono stati scoperti inoltre segni di antichi letti di fiumi e possibili oceani, suggerendo che Marte potrebbe aver ospitato acqua liquida e un clima più caldo miliardi di anni fa."
  },
  {
    question: "Da cosa viene influenzata l'atmosfera terrestre?",
    options: ["Dall'umidità", "Da Sole", "Dalle correnti oceaniche", "Tutte le precedenti"],
    answer: 3,
    explanation: "L'atmosfera varia continuamente, influenzata da vari fattori tra cui correnti oceaniche, riscaldamento solare e umidità.."
  },
  {
    question: "Perché è importante l'atmosfera?",
    options: ["Protegge la Terra dai raggi ultra-violetti", "Genera il vento per rinfrescare le giornate in estate", "Protegge la Terra dai meteoriti", "Perchè ci permette di respirare"],
    answer: 0,
    explanation: "L'atmosfera, ricca di azoto e ossigeno, protegge la vita dai raggi ultravioletti."
  },
  {
    question: "Perchè Marte non riesce a trattenere il calore?",
    options: ["E' troppo lontano dal Sole", "La pressione atmosferica è troppo poco densa", "La pressione atmosferica è troppo densa", "Il pianeta è troppo piccolo"],
    answer: 1,
    explanation: " La pressione atmosferica è solo l'1% di quella terrestre, impedendo a Marte di trattenere calore, il che causa grandi escursioni termiche."
  },
  {
    question: "Qual è lo strato più esterno della Terra?",
    options: ["Il mantello", "L'oceano", "La crosta", "Le nuvole"],
    answer: 2,
    explanation: "La crosta terrestre è la parte più esterna del pianeta Terra, del cui intero volume essa costituisce soltanto l'1%, una sorta di involucro di piccolissimo spessore, qualche decina di chilometri appena."
  },
  {
    question: "Come ci proteggono Giove e Saturno?",
    options: ["Spaventano chi è fuori dal Sistema Solare", "Assorbono gli asteroidi", "Forniscono energia agli altri pianeti", "Deviano gli asteroidi con la loro forza di gravità"],
    answer: 3,
    explanation: "Grazie alla gravità combinata di Giove e Saturno, buona parte degli asteroidi provenienti dallo spazio aperto viene espulsa dal Sistema Solare."
  },
  {
    question: "Quanto dura il Periodo di Rivoluzione di Mercurio?",
    options: ["230g", "312g", "49g", "88g"],
    answer: 3,
    explanation: "Il periodo del moto di rivoluzione (anno sidereo) di Mercurio è, per la precisione, di 87,97 giorni (0,24 anni)."
  },
  {
    question: "Quanto dura il Periodo di Rivoluzione di Nettuno?",
    options: ["17,03 anni", "93,22 anni", "164,82 anni", "273,14 anni"],
    answer: 2,
    explanation: "Il periodo del moto di rivoluzione (anno sidereo) di Nettuno è di 164,82 anni."
  },
  {
    question: "Quanto è denso Saturno?",
    options: ["il 50% in più della Terra", "Il 70% dell'acqua", "Saturno non ha una densità", "Dipende da quanto veloce gira"],
    answer: 1,
    explanation: " La bassa densità di Saturno (Il 70% di quella dell'acqua) significa che, ipoteticamente, galleggerebbe in un oceano d'acqua abbastanza grande da contenerlo."
  },
  {
    question: "Qual è il destino del Sole?",
    options: ["Il Sole diventerà una nana bianca dopo aver attraversato la fase di gigante rossa", "Il Sole si spegnerà", "Il Sole esploderà in una supernova", "Il Sole diventerà un buco nero"],
    answer: 0,
    explanation: "Il Sole è a metà della sua vita, avendo circa 4,6 miliardi di anni. Si prevede che continuerà a brillare per altri cinque miliardi di anni, trasformandosi prima in una gigante rossa e poi, alla fine, in una nana bianca."
  },
  {
    question: "Qual è il periodo di rivoluzione della Terra?",
    options: ["24h", "9,81gg", "360gg", "365gg"],
    answer: 3,
    explanation: "Il periodo del moto di rivoluzione (anno sidereo) della Terra è di 365 giorni (1 anno)."
  },
  {
    question: "Qual è la causa dell'inclinazione assiale estrema di Urano?",
    options: ["Contrazione gravitazionale", "Influenza dei pianeti vicini", "Fenomeni atmosferici", "Una collisione con un altro corpo"],
    answer: 3,
    explanation: "L'inclinazione assiale estrema di Urano è probabilmente dovuta ad una collisone con un corpo planetario di dimensioni simili nei primi stadi della sua formazione, che avrebbe ribaltato il pianeta.."
  },
  {
    question: "Perchè Saturno non perde l'anello di asteroidi?",
    options: ["Grazie alla sua gravità", "Gli asteroidi sono incollati al pianeta", "Sono dentro il pianeta", "Possono perdersi in qualsiasi momento"],
    answer: 0,
    explanation: "Saturno esercita una forza gravitazionale costante sui suoi anelli, impedendo che si disperano nello spazio.."
  },
  {
    question: "Quali sono i giganti ghiacciati del nostro Sistema Solare?",
    options: ["Il Sole e Saturno", "Urano e Nettuno", "Giove e Marte", "Saturno e Giove"],
    answer: 1,
    explanation: "Urano e Nettuno sono classificati come giganti di ghiaccio in quanto nella loro massa totale è presente solo il 20% di idrogeno circa, rispetto a quasi il 90% della presenza di questo gas nei più massicci Giove e Saturno."
  },
  {
    question: "Qaul è il pianeta più freddo del Sistema Solare?",
    options: ["Mercurio", "Terra", "Urano", "Nettuno"],
    answer: 2,
    explanation: "L'atmosfera di Nettuno ha una temperatura media di -216°C che lo rende il pianeta più freddo del Sistema Solare."
  },
  {
    question: "Quale pianeta è più simile alla Terra?",
    options: ["Venere", "Marte", "Giove", "Saturno"],
    answer: 1,
    explanation: "La struttura di Marte è simile a quella terrestre, con un nucleo di ferro, un mantello meno attivo rispetto a quello terrestre e una crosta ricca di ferro e altri minerali."
  },
  {
    question: "Qual è la principale causa dell'effetto serra su Venere?",
    options: ["L'atmosfera piena di anidride carbonica", "La mancanza di atmosfera", "L'atmosfera densa", "Si prende il calore residuo della Terra"],
    answer: 0,
    explanation: "La sua atmosfera genera una pressione 92 volte superiore a quella terrestre e intrappola il calore, rendendo Venere il pianeta più caldo del Sistema Solare."
  },
  {
    question: "Perché la temperatura della corona solare è superiore a quella della superficie?",
    options: ["Il Nucleo riscalda la superficie", "Il motivo è rimasto un mistero", "Prende il suo calore da particelle provenienti dallo spazio", "L'elevata attività del Sole raggiunge la corona, riscaldandola"],
    answer: 1,
    explanation: "La corona è la parte più esterna del Sole, ma le temperature sono estremamente alte, più di altri strati sotto stanti. Non si è ancora capito il motivo, ma si pensa sia dovuto alle fluttuazioni di determinate particelle atomiche."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null; // Variabile per tenere traccia della risposta selezionata
let max = 0;
let timerInterval = null; // Memorizza l'istanza di setInterval
let countdown = 25; // Durata iniziale del timer in secondi

function startTimer(initialTime = 25) {
  // Ferma eventuali timer attivi
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // Verifica se il timer deve essere nascosto
  if (max !== 20) {
    const timerContainer = document.getElementById('timer-container');
    if (timerContainer) {
      timerContainer.style.display = 'none';
    }
    return; // Esci dalla funzione
  }

  // Mostra il timer
  const timerContainer = document.getElementById('timer-container');
  const timerElement = document.getElementById('timer');
  if (timerContainer) {
    timerContainer.style.display = 'block';
  }

  countdown = initialTime; // Reimposta il countdown
  if (timerElement) {
    timerElement.textContent = countdown; // Aggiorna il display iniziale

    // Avvia il timer
    timerInterval = setInterval(() => {
      countdown--;
      timerElement.textContent = countdown >= 0 ? countdown : 'Tempo scaduto!';

      // Quando il tempo scade
      if (countdown <= 0) {
        clearInterval(timerInterval); // Ferma il timer
        timerElement.classList.remove('pulsing'); // Rimuove animazione
        disableOptions(); // Disabilita le opzioni
        nextQuestion(); // va alla prosima domanda
      }
    }, 1000); // Aggiorna ogni secondo
  }
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
  contatoredomande = 1;
}

document.addEventListener("DOMContentLoaded", () => {
  currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex")) || 0; // Recupera il valore o usa 0
  max = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
  loadQuestion(currentQuestionIndex); // Carica la domanda corrente
  startTimer();
});



function loadQuestion(index) {

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
  clearInterval(timerInterval);
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
      
      
      const correctOption = document.getElementById("options").children[questionData.answer];
     
        correctOption.classList.add("correct");
        selectedOption.classList.add("incorrect");
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
  // Mostra la spiegazione
  const explanationContainer = document.getElementById("explanation-container");
  const explanationText = document.getElementById("explanation-text");

  // Recupera la spiegazione e la mostra
  explanationText.textContent = getExplanation(currentQuestionIndex);
  explanationContainer.style.display = 'flex'; // Mostra la sezione della spiegazione
}
function getExplanation(index) {
  return questions[index].explanation || "Nessuna spiegazione disponibile per questa domanda.";
}
function nextQuestion() {
  var questionFranco = document.getElementById("questionFranco");
  var currentValue = parseInt(questionFranco.innerText);
  questionFranco.innerText = currentValue + 1;
  const explanationContainer = document.getElementById("explanation-container");
  explanationContainer.style.display = 'none'; // Nascondi la spiegazione
  // Incrementa l'indice delle domande
  currentQuestionIndex++;

  if (currentQuestionIndex < max + 10 && currentQuestionIndex < questions.length) {
    // Salva l'indice nel localStorage per mantenere lo stato
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
    startTimer(25);
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
