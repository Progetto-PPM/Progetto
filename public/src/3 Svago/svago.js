let dropped = false;
$('.sphereCelestial').draggable({
    revert:true,
    start: function(event, ui) {
        // Disattiva il tooltip quando inizi a trascinare
        $(this).tooltip('disable');
    },
    stop: function(event, ui) {
        // Riattiva il tooltip quando rilasci l'elemento se non è stato droppato (opzionale)
        $(this).tooltip('enable');
    }
});

$('.sezione_gioco_inserisci').droppable({
    accept:'.sphereCelestial', 
    drop:gestisciDrop,
    
});

function shufflePlanets() {
    const container = document.getElementById('celestial_spheres');
    const planets = Array.from(container.children); // Ottieni tutti i pianeti come array

    // Mescola i pianeti in ordine casuale
    const shuffledPlanets = planets.sort(() => Math.random() - 0.5);

    // Rimuovi i pianeti dal contenitore e reinseriscili nell'ordine casuale
    shuffledPlanets.forEach(planet => container.appendChild(planet));
}

// Esegui la funzione quando la pagina è pronta
document.addEventListener('DOMContentLoaded', shufflePlanets);

let risposteCorrette=0;
let counter = 0;
let risposteTotali=$('.sezione_gioco_inserisci').length;

function gestisciDrop(event,ui){
    if (risposteCorrette < risposteTotali) {
        var box = ui.draggable;
        var boxType=box.attr('data-numtype');
        var dropArea=$(this);

        var dropAreaType=dropArea.attr('data-area-numtype');

        box.appendTo(dropArea) // Sposta la sfera come figlio dell'area
            .addClass('fit-to-area') // Applica la classe per adattarla all'area
            .css({
                top: 0,
                left: 0,
                position: 'absolute' // Si adatta all'area
            });
            
            
        if (boxType == dropAreaType){
            box.addClass('fit-to-area');
            dropArea.addClass('correct');
            risposteCorrette++;
            counter++;
            console.log(risposteCorrette);
            if (counter === risposteTotali){
                let areaGioco = document.getElementById('gameCredits');
                areaGioco.style.display = 'flex';
                let punteggio = document.getElementById('gameResults');
                punteggio.innerText = `Punteggio: ${risposteCorrette * 10} / 90`;
                if (risposteCorrette >= 6 && risposteCorrette != risposteTotali) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    let testo2FineGioco = document.getElementById('gameEnd-2');
                    testoFineGioco.style.color = 'green';
                    testoFineGioco.innerText = 'CONGRATULAZIONI!';
                    testo2FineGioco.innerText = 'Hai ottenuto un punteggio sufficiente!';
                } else if(risposteCorrette === risposteTotali) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    let testo2FineGioco = document.getElementById('gameEnd-2');
                    testoFineGioco.style.color = 'green';
                    testoFineGioco.innerText = 'PERFETTO!';
                    testo2FineGioco.innerText = 'Hai ottenuto il punteggio massimo!';
                }
                 else if (risposteCorrette < 6) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    testoFineGioco.style.color = 'red';
                    testoFineGioco.innerText = 'PUNTEGGIO INSUFFICIENTE...';
                }

            }
            
        }else{
            box.addClass('fit-to-area');
            dropArea.addClass('incorrect');
            counter++;
            if (counter === risposteTotali){
                let areaGioco = document.getElementById('gameCredits');
                areaGioco.style.display = 'flex';
                let punteggio = document.getElementById('gameResults');
                punteggio.innerText = `Punteggio: ${risposteCorrette * 10} / 90`;
                if (risposteCorrette >= 6 && risposteCorrette != risposteTotali) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    let testo2FineGioco = document.getElementById('gameEnd-2');
                    testoFineGioco.style.color = 'green';
                    testoFineGioco.innerText = 'CONGRATULAZIONI!';
                    testo2FineGioco.innerText = 'Hai ottenuto un punteggio sufficiente!';
                } else if(risposteCorrette === risposteTotali) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    let testo2FineGioco = document.getElementById('gameEnd-2');
                    testoFineGioco.style.color = 'green';
                    testoFineGioco.innerText = 'PERFETTO!';
                    testo2FineGioco.innerText = 'Hai ottenuto il punteggio massimo!';
                } else  if (risposteCorrette < 6) {
                    let testoFineGioco = document.getElementById('gameEnd');
                    testoFineGioco.style.color = 'red';
                    testoFineGioco.innerText = 'PUNTEGGIO INSUFFICIENTE...';
                }
                
            }
        }
        
        dropArea.droppable('disable');
        box.draggable('disable').draggable('option','revert',false);
    }
    
    
}

document.addEventListener('DOMContentLoaded', function() {
    let startGame = document.getElementById('gameStartButton');
    let introOverlay = document.getElementById('intro-overlay');
    let gameIntro = document.getElementById('gameIntro');

    startGame.addEventListener('click', function() {
        introOverlay.style.display = 'none';
        gameIntro.style.display = 'none';
        startGame.style.display = 'none';
    });

    let restartGame = document.getElementById('restartGame');
    restartGame.addEventListener('click', function() {
        window.location.href = 'svago.html';
        introOverlay.style.display = 'none';
        gameIntro.style.display = 'none';
        startGame.style.display = 'none';
    });
});






