
$('.sphereCelestial').draggable({
    revert:true
});

$('.sezione_gioco_inserisci').droppable({
    accept:'.sphereCelestial', 
    drop:gestisciDrop
});

let risposteCorrette=0;
let risposteTotali=$('.sezione_gioco_inserisci').length;

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

function gestisciDrop(event,ui){
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
        console.log("Corretto");
        risposteCorrette++;
    }else{
        box.addClass('fit-to-area');
        dropArea.addClass('incorrect');
        console.log("Non corretto");
    }
    
    dropArea.droppable('disable');
    box.draggable('disable').draggable('option','revert',false);
}

