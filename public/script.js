window.onload = function() {
    const audio = document.getElementById('sottofondo');
    const button = document.getElementById('audioButton');

    // Prova a far partire l'audio e gestisce il blocco dell'autoplay
    audio.play().catch(() => {
        console.log("Autoplay bloccato. L'audio partirà al primo clic.");
    });

    // Imposta il testo del bottone inizialmente
    button.textContent = "Ferma Musica";
};

function toggleAudio() {
    const audio = document.getElementById('sottofondo');
    const button = document.getElementById('audioButton');

    // Alterna tra avviare e fermare l'audio
    if (audio.paused) {
        audio.play();
        button.textContent = "Ferma Musica";
    } else {
        audio.pause();
        audio.currentTime = 0;
        button.textContent = "Avvia Musica";
    }
}

function closePage(destinazione) {
     // Apre una finestra di conferma, che non è un vero "close" ma un'indicazione
     if (confirm('Sei sicuro di voler chiudere l\'applicazione?')) {
        window.location.href = destinazione;  // Questa funziona solo se la finestra è stata aperta da uno script
    }
}

function startLoading() {
    // Nascondi i pulsanti
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.top-right-buttons').style.display = 'block';
    
    // Mostra la barra di caricamento
    document.getElementById('loading-bar-container').style.display = 'block';

    // Anima la barra di caricamento
    let progress = 0;
    const loadingBar = document.getElementById('loading-bar');
    const progressIcon = document.getElementById('progress-icon');
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            goToNextPage(); // Quando finisce il caricamento, passa alla pagina successiva
        } else {
            progress += 2; // Incrementa il progresso
            loadingBar.style.width = progress + '%'; // Aggiorna la larghezza della barra
            progressIcon.style.left = `calc(${progress}% - 25px)`;// Offset per centrare l'immagine sulla barra
        }
    }, 50); // Velocità del caricamento (in millisecondi)
}


function goToNextPage() {
    window.location.href = "src/home.html";  // Cambia 'nextpage.html' con il nome della pagina di destinazione
}

function onCredits() {
    document.getElementById('teamCredits').style.display = "flex";
    document.getElementById('overlayBackground').style.display = "block";
    document.getElementById('croce').style.display = "grid";
}

function offCredits() {
    document.getElementById('teamCredits').style.display = "none";
    document.getElementById('overlayBackground').style.display = "none";
    document.getElementById('croce').style.display = "none";
}

function onHelp() {
    document.getElementById('infoButtons').style.display = "grid";
    document.getElementById('overlayBackground').style.display = "block";
    document.getElementById('croce2').style.display = "grid";
}

function offHelp() {
    document.getElementById('infoButtons').style.display = "none";
    document.getElementById('overlayBackground').style.display = "none";
    document.getElementById('croce2').style.display = "none";
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function closeServer() {

    if (confirm("Sei sicuro di voler uscire dall'applicazione?")) {
        // Fai una richiesta POST al server per fermarlo
        fetch('/shutdown', {
            method: 'POST',  // Indica che è una richiesta POST
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("ARRIVEDERCI!");
            } else {
                alert("ERRORE NELLA CHIUSURA DELL'APPLICAZIONE.");
            }
        })
        .catch(error => {
            alert("Errore: " + error.message);
        });
    }
}

const pageNames = {
    "/src/home.html": "Home",
    "/src/1%20Teoria/teoria.html": "Home / Teoria",
    "/src/2%20Quiz/QUIZ.html": "Home / Quiz",
    "/src/2%20Quiz/quiz1.html": "Home/ Quiz / Test",
    "/src/3%20Svago/svago.html": "Home / Svago",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/sole.html": "Home / Teoria / Sole",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/mercurio.html": "Home / Teoria / Mercurio",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/venere.html": "Home / Teoria / Venere",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/terra.html": "Home / Teoria / Terra",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/marte.html": "Home / Teoria / Marte",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/giove.html": "Home / Teoria / Giove",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/saturno.html": "Home / Teoria / Saturno",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/urano.html": "Home / Teoria / Urano",
    "/src/1%20Teoria/1_1%20Corpi%20Maggiori/nettuno.html": "Home / Teoria / Nettuno",

};

function showCurrentPath() {
    const currentPath = window.location.pathname; // Ottieni il percorso della pagina
    console.log(currentPath);
    const pageName = pageNames[currentPath] || "Pagina Sconosciuta"; // Valore di default se non mappato

    // Seleziona l'elemento in cui mostrare il nome della pagina
    const pathElement = document.getElementById("current-path");
    if (pathElement.style.display === 'none' || pathElement.style.display === '') {
        pathElement.textContent = pageName; // Aggiorna il contenuto
        pathElement.style.display = "block"; // Mostra l'elemento
        pathElement.classList.remove('offAnimation');
        pathElement.classList.add('onAnimation');
    } else if (pathElement.style.display != 'none' || pathElement.style.display === '') {
        pathElement.textContent = pageName;
        pathElement.classList.remove('onAnimation');
        pathElement.classList.add('offAnimation');
        pathElement.addEventListener('animationend', function() {
            pathElement.style.display = 'none';
        }, { once: true });
    }

    
}

window.onload = showCurrentPageName;