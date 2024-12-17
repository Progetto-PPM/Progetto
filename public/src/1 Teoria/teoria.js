 // 9 Array di testi per i 9 corpi celesesti corrispondenti
 const testiSole = [
    "Il Sole è la stella al centro del nostro Sistema Solare, è la fonte primaria di energia per tutti i pianeti. \n E' una sfera di plasma, composta principalmente da idrogeno ed elio. \n Il Sole è diviso in vari strati: Nucleo, Zona Radiativa, Zona Convettiva, Fotosfera, Cromosfera, Corona. \n Il Nucleo è la fucina del Sole, l'idrogeno diventa elio e rilascia energia all'esterno.  ",
    "Testo per le specifiche del Sole",
    "Testo per le curiosità del Sole"
];

// Funzione per cambiare il testo
function cambiaTestoSole(indice) {
    // Modifica il contenuto dell'elemento con id "testo"
    document.getElementById('sezioneTesto').innerText = testiSole[indice];
}

/* --------------------------------------------------------------------------- */
 
 const testiMercurio = [
    "Testo per le caratteristiche generali di Mercurio, ciao sono nelle caratteristiche generali",
    "Testo per le specifiche di Mercurio",
    "Testo per le curiosità di Mercurio"
];


function cambiaTestoMercurio(indice) {
    document.getElementById('sezioneTesto').innerText = testiMercurio[indice];
}

/* --------------------------------------------------------------------------- */

 const testiVenere = [
    "Testo per le caratteristiche generali di Venere",
    "Testo per le specifiche di Venere",
    "Testo per le curiosità di Venere"
];


function cambiaTestoVenere(indice) {
    document.getElementById('sezioneTesto').innerText = testiVenere[indice];
}

/* --------------------------------------------------------------------------- */
 const testiTerra = [
    "Testo per le caratteristiche generali della Terra",
    "Testo per le specifiche della Terra",
    "Testo per le curiosità della Terra"
];


function cambiaTestoTerra(indice) {
    document.getElementById('sezioneTesto').innerText = testiTerra[indice];
}

/* --------------------------------------------------------------------------- */
 const testiMarte = [
    "Testo per le caratteristiche generali di Marte",
    "Testo per le specifiche di Marte",
    "Testo per le curiosità di Marte"
];


function cambiaTestoMarte(indice) {
    document.getElementById('sezioneTesto').innerText = testiMarte[indice];
}

/* --------------------------------------------------------------------------- */
 const testiGiove = [
    "Testo per le caratteristiche generali di Giove",
    "Testo per le specifiche di Giove",
    "Testo per le curiosità di Giove"
];


function cambiaTestoGiove(indice) {
    document.getElementById('sezioneTesto').innerText = testiGiove[indice];
}

/* --------------------------------------------------------------------------- */
 const testiSaturno = [
    "Testo per le caratteristiche generali di Saturno",
    "Testo per le specifiche di Saturno",
    "Testo per le curiosità di Saturno"
];


function cambiaTestoSaturno(indice) {
    document.getElementById('sezioneTesto').innerText = testiSaturno[indice];
}

/* --------------------------------------------------------------------------- */
 const testiUrano = [
    "Testo per le caratteristiche generali di Urano",
    "Testo per le specifiche  di Urano",
    "Testo per le curiosità di Urano"
];


function cambiaTestoUrano(indice) {
    document.getElementById('sezioneTesto').innerText = testiUrano[indice];
}

/* --------------------------------------------------------------------------- */
 const testiNettuno = [
    "Testo per le caratteristiche generali di Nettuno",
    "Testo per le specifiche di Nettuno",
    "Testo per le curiosità di Nettuno"
];


function cambiaTestoNettuno(indice) {
    document.getElementById('sezioneTesto').innerText = testiNettuno[indice];
}




/*
    SEZIONE DEDICATA AL FUNZIONAMENTO DEI BOTTONI 
    PER LO SCORRIMENTO DELLA LISTA DI PIANETI
*/
const vaiDietro = document.getElementById('vaiDietro');
const vaiAvanti = document.getElementById('vaiAvanti');

function goOn() {
    // Trova l'indice del bottone attualmente in focus all'interno di una sezione con id 'navTeoria_2'
    let indiceFocus = trovaIndice('.navPianeti_2');
    console.log(indiceFocus);

    if (indiceFocus !== -1) {
        const bottoni = document.querySelectorAll('.navPianeti_2'); // Ottieni tutti i bottoni con questa classe
        const prossimoBottone = bottoni[indiceFocus + 1] || bottoni[0]; // Se siamo all'ultimo, torna al primo
        prossimoBottone.focus(); // Imposta il focus sul prossimo bottone
    }
}

function goBack() {
    // Trova l'indice del bottone attualmente in focus
    let indiceFocus = trovaIndice('.navPianeti_2');
    console.log(indiceFocus + 'ciao');

    if (indiceFocus !== -1) {
        const bottoni = document.querySelectorAll('.navPianeti_2');
        const bottonePrecedente = bottoni[indiceFocus - 1] || bottoni[bottoni.length - 1]; // Se siamo al primo, torna all'ultimo
        bottonePrecedente.focus(); // Imposta il focus sul bottone precedente
    }
}

function trovaIndice(classe) {
    // Ottieni tutti i bottoni con la classe specificata
    const bottoni = Array.from(document.querySelectorAll(classe));
    // Trova il bottone in focus confrontandolo con document.activeElement
    for (let i = 0; i < bottoni.length; i++) {
        if (bottoni[i] === document.activeElement) {
            return i; // Restituisci l'indice del bottone in focus
        }
    }

    return -1; // Nessun bottone in focus
}





function goForward2() {
    
}

function goBack2() {
    window.location.href = "../teoria.html"
}

 // Creazione della scena, della fotocamera e del renderer
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Carica un modello 3D (assicurati di avere il modello .glb nella stessa directory)
 const loader = new THREE.GLTFLoader();
 loader.load('../../Media/Immagini/Immagini 3D/sistema solare.glb', function (gltf) {
     scene.add(gltf.scene);
 }, undefined, function (error) {
     console.error(error);
 });

 // Posizione della fotocamera
 camera.position.z = 5;

 // Funzione di animazione
 function animate() {
     requestAnimationFrame(animate);
     renderer.render(scene, camera);
 }

 animate();









