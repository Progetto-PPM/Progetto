  // 9 Array di testi per i 9 corpi celesesti corrispondenti
 const testiSole = [
    "Il Sole è la stella al centro del Sistema Solare e la principale fonte di energia per i pianeti. È una sfera di plasma composta principalmente da idrogeno ed elio ed è formato da diversi strati. Nel nucleo, l'idrogeno si trasforma in elio liberando energia. Nella zona radiativa, l'energia si sposta lentamente verso l'esterno attraverso radiazioni, un processo che può durare milioni di anni. Nella zona convettiva, il plasma caldo \nsale verso la superficie, si raffredda e scende nuovamente. La fotosfera, la superficie visibile del Sole, è il luogo in cui si trovano le macchie solari, aree più fredde causate dall'attività magnetica. La cromosfera è uno strato sottile che emette un debole bagliore rosso durante le eclissi, mentre la corona, lo strato più esterno, ha temperature estremamente alte, la cui origine rimane un mistero.",
    "Diametro: 1.392.700 km\n\nMassa: 1,989 × 10^30 kg\n\nPeriodo di Rotazione: 27g\n\nGravità: 247 m/s2\n\nDensità: 1,41 g/cm³\n\nTemperatura Superifciale: 5.500°C ",
    "1. Fin dalla sua formazione il sole brucia idrogeno e elio, quando la riserva di questi elementi contenuta nel nucleo della stella si esaurirà si trasformerà in una gigante rossa, dove l'elio si fonde e crea carbonio.\n\n 2. Anche se l’influenza del Sole sul clima terrestre è nota, le interazioni tra attività solare e clima globale sono complesse e non completamente comprese.\n\n 3. Il Sole è a metà della sua vita, avendo circa 4,6 miliardi di anni. Si prevede che continuerà a brillare per altri cinque miliardi di anni, trasformandosi prima in una gigante rossa e poi, alla fine, in una nana bianca."
];

// Funzione per cambiare il testo
function cambiaTestoSole(indice) {
    // Modifica il contenuto dell'elemento con id "testo"
    document.getElementById('sezioneTesto').innerText = testiSole[indice];
}

/* --------------------------------------------------------------------------- */
 
 const testiMercurio = [
    "Mercurio è il pianeta più vicino al Sole e ha un aspetto simile a una luna, con una superficie piena di crateri e una forte escursione termica tra il giorno e la notte. È composto in gran parte da ferro e il suo nucleo, che occupa il 60% del pianeta, è probabilmente liquido, dato il debole campo magnetico. Questo nucleo insolitamente grande potrebbe essere il risultato di una collisione che ha rimosso il mantello roccioso esterno nelle prime fasi della sua formazione. La superficie presenta monti e creste ondulate chiamate 'scarpate'. Mercurio ha una sottile esosfera composta principalmente da ossigeno, sodio, idrogeno, elio e potassio. Non avendo un'atmosfera densa, manca di fenomeni atmosferici e la sua superficie è direttamente esposta agli impatti meteorici.",
    "Distanza dal Sole: 58.000.000 km\n\nDiametro: 4878 km\n\n Massa: 3,285 × 10^23 kg\n\nPeriodo di Rotazione: 59g\n\nPeriodo di Rivoluzione: 88g\n\nGravità: 3,7 m/s²\n\nDensità: 5,43 g/cm³\n\nTemperatura Superficiale: 430°C / -185°C",
    "Mercurio ha la più grande escursione termica di qualsiasi altro pianeta del Sistema Solare, passando da temperature diurne estremamente calde a notti estremamente fredde. Questo è dovuto alla mancanza di un'atmosfera in grado di trattenere la temperature, e sorpatutto alla sua vicinaza al Sole.\n\n Ha un comportamento del tutto unico, impiega 59 giorni per ruotare attorno al suo asse e 88 per ruotare attorno al Sole. Si tratta di una sincronia perfetta, ogni 3 giri su se stesso fa 2 giri attorno al Sole."
];


function cambiaTestoMercurio(indice) {
    document.getElementById('sezioneTesto').innerText = testiMercurio[indice];
}

/* --------------------------------------------------------------------------- */

 const testiVenere = [
    "Venere, il secondo pianeta del Sistema Solare, è uno dei corpi celesti più luminosi visibili dalla Terra, tanto da essere soprannominato 'Stella del Mattino'. Simile alla Terra per dimensioni, è però un pianeta estremamente ostile, con un'atmosfera densa, temperature estreme e una superficie vulcanica. La sua atmosfera, composta principalmente da anidride carbonica con tracce di azoto e acido solforico, genera una pressione 92 volte superiore a quella terrestre e intrappola il calore, rendendo Venere il pianeta più caldo del Sistema Solare. Il nucleo ferroso di Venere è simile a quello terrestre, ma non genera un campo magnetico significativo, probabilmente a causa della sua lenta rotazione. Il nucleo è ricoperto da un mantello roccioso e una crosta composta da silice e minerali vulcanici.",
    "Distanza dal Sole: 108.290.000 km\n\nDiametro: 12.104 km\n\nMassa: 4,867 × 10^24 kg\n\nPeriodo di Rotazione: 243g\n\nPeriodo di Rivoluzione: 224,7g\n\nGravità: 8,87 m/s²\n\nDensità: 5,24 g/cm³\n\nTemperatura Superficiale: 464°C",
    "Venere è il classico esempio di 'effetto serra fuori controllo'. L'anidride carboni intrappola il calore e impedisce il raffreddamento.\n\nVenere ruota in direzione opposta agli altri pianeti, una peculiarità che potrebbe essere il risultato di una collisione con un grande oggetto nelle prime fasi della sua formazione.\n\nÈ il corpo celeste più luminoso dopo il Sole e la Luna, visibile dalla Terra sia all'alba che al tramonto, rendendolo facilmente riconoscibile nel cielo.\n\nLa pressione atmosfeira di Venere è talmente forte, che, paragonata alla Terra, è come se ci si trovasse ben 900 metri sotto il livello del Mare."
];


function cambiaTestoVenere(indice) {
    document.getElementById('sezioneTesto').innerText = testiVenere[indice];
}

/* --------------------------------------------------------------------------- */
 const testiTerra = [
    "La Terra, il terzo pianeta dal Sole, è l'unico corpo celeste che ospita la vita. La sua struttura complessa, composta da strati geologici e un'atmosfera favorevole alla biodiversità, la rende unica. Il 71% della superficie terrestre è coperto da oceani e mari, mentre il restante 29% è costituito da continenti e isole. Il suolo è suddiviso in placche tettoniche che galleggiano sul mantello e il loro movimento causa terremoti, vulcani e la formazione di montagne. L'atmosfera, ricca di azoto e ossigeno, protegge la vita dai raggi ultravioletti. La struttura della Terra è composta da: nucleo interno (ferroso e a 5500°C), nucleo esterno (dove si genera il campo magnetico), mantello (in continuo movimento, con le placche che formano i continenti) e crosta (composta da rocce e minerali, suddivisa in costa continentale e oceanica).",
    "Distanza dal Sole: 147.160.000 km\n\nDiametro: 12.756 km\n\nMassa: 5,972 × 10^24 kg\n\nPeriodo di Rotazione: 24h\n\nPeriodo di Rivoluzione: 365 giorni\n\nGravità: 9,807 m/s²\n\nDensità: 5,51 g/cm³\n\nTemperatura superficiale: 14°C",
    "Il campo magnetico terrestre è generato dal movimento del nucleo esterno, questo campo protegge la Terra dai venti solai e crea le aurore polari.\n\nL'atmosfera terrestre permette il riscaldamento del pianeta trattenendo il calore del Sole, senza questo effetto, la temperatura sulla Terra sarebbe molto più bassa e meno favorevole alla vita.\n\nLa Terra è il solo pianeta noto ad avere acqua in tutti e tre gli stati (solido, liquido e gassoso), essenziale per la vita e per i processi climatici.\n\n Il nostro pianeta ha un'atmosfera molto attiva, con sistemi metereologici complessi, stagioni, cicloni e venti. L'atmosfera varia continuamente, influenzata da vari fattori tra cui correnti oceaniche, riscaldamento solare e umidità."
];


function cambiaTestoTerra(indice) {
    document.getElementById('sezioneTesto').innerText = testiTerra[indice];
}

/* --------------------------------------------------------------------------- */
 const testiMarte = [
    "Marte, il quarto pianeta dal Sole, è uno dei corpi celesti più studiati ed è considerato il miglior candidato per una futura colonizzazione umana. Ha un'atmosfera molto sottile, composta principalmente da anidride carbonica, con tracce di azoto e argon. La pressione atmosferica è solo l'1% di quella terrestre, impedendo a Marte di trattenere calore, il che causa grandi escursioni termiche. Le temperature variano da circa 20°C durante il giorno a -125°C di notte. Tra le sue caratteristiche più notevoli ci sono l'enorme vulcano Olympus Mons, il più grande del Sistema Solare con 22 km di altezza, e il canyon Valles Marineris, che si estende per 4.000 km di lunghezza e raggiunge una profondità di 7 km. La struttura di Marte è simile a quella terrestre, con un nucleo di ferro, un mantello meno attivo rispetto a quello terrestre e una crosta ricca di ferro e altri minerali.",
    "Distanza dal Sole: 241.400.000 km\n\nDiametro: 6.779 km\n\nMassa: 6,39 × 10^23 kg\n\nPeriodo di Rotazione: 1g 0h 37m\n\nPeriodo di rivoluzione: 687g\n\nGravità: 3,73 m/s²\n\nDensità: 3,93 g/cm³\n\nTemperatura superficiale: 63°C",
    "Marte ha calotte polari costituie da ghiaccio d'acqua e ghiaccio secco. Sono stati scoperti inoltre segni di antichi letti di fiumi e possibili oceani, suggerendo che Marte potrebbe aver ospitato acqua liquida e un clima più caldo miliardi di anni fa.\n\nLa superficie marziana è ricoperta di polvere fine e ricca di ossidi, che spesso causa enormi tempestre di polvere che possono ricoprire l'intero pianeta per settimane o mesi.\n\nPoichè l'atmosfera è molto sottile, Marte ha venti forti, ma la pressione bassa non permette di creare cicloni terrestri. Tuttavia, le tempeste di polvere rimangono eventi significativi e possono oscurare la superficie per lunghi periodi.\n\nMarte ha due piccoli satelliti, Phobos e Deimos, entramvi sono irregolari e sono probabilmente asteroidi catturati dalla sua gravità."
];


function cambiaTestoMarte(indice) {
    document.getElementById('sezioneTesto').innerText = testiMarte[indice];
}

/* --------------------------------------------------------------------------- */
 const testiGiove = [
    "Giove, il quinto pianeta dal Sole, è il più grande del Sistema Solare, con una massa 318 volte quella della Terra. Composto principalmente di idrogeno ed elio, è simile a una piccola stella e si distingue per la sua struttura e la famosa Macchia Rossa. Essendo un gigante gassoso, Giove è 11 volte più grande della Terra e non ha una superficie solida. La sua atmosfera è caratterizzata da bande di nubi colorate che ruotano a velocità diverse, creando vortici e tempeste. La temperatura atmosferica è di circa -145°C, ma aumenta notevolmente verso il nucleo. Giove emette più calore di quanto ne riceva dal Sole. La sua composizione include idrogeno ed elio in vari stati fisici, con uno strato di idrogeno metallico e liquido e un nucleo roccioso, che sebbene non osservato direttamente, si pensa sia composto da elementi più pesanti.",
    "Distanza dal Sole: 759.530.000 km\n\nDiametro: 139.820 km\n\nMassa: 1,898 × 10^27 kg\n\nPeriodo di Rotazione: 0g 9h 56m\n\nPeriodo di Rivoluzione: 11,86 anni\n\nGravità: 24,79 m/s²\n\nDensità: 1,33 g/cm³\n\nTemperatura superficiale: –145°C",
    "La Grande Macchia Rossa di Giove è una gigantesca tempesta anticiclonica, larga più di una volta e mezza il diametro della Terra, attiva da almeno 350 anni. Recenti osservazioni mostrano che potrebbe lentamente ridursi nel tempo\n\nGiove ospita numerose altre tempeste, alcune delle quali ruotano in senso opposto rispetto alle bande atmosferiche. Le bande di Giove sono guidate da venti ad altissima veloità, che possono superare i 500 km/h.\n\nGiove ha il campo magnetiche più forte tra i pianeti del Sistema SOlare, questo campo magnetico crea un'enorme magnetosfera che si estende per milioni di chilometri e protegge il pianeta da particelle cariche provenienti dal Sole. La magnetosfera di Giove ha un forte impatto anche sui suoi satelliti, creando intense radiazioni intorno a essi."
];


function cambiaTestoGiove(indice) {
    document.getElementById('sezioneTesto').innerText = testiGiove[indice];
}

/* --------------------------------------------------------------------------- */
 const testiSaturno = [
    "Saturno, il sesto pianeta dal Sole, è il secondo più grande del Sistema Solare e noto per il suo sistema di anelli. È un gigante gassoso composto principalmente da idrogeno ed elio, simile a Giove, con una densità così bassa che galleggerebbe sull'acqua. Saturno è nove volte più largo della Terra, ma la sua densità è circa il 70% di quella dell'acqua. La temperatura atmosferica è molto bassa, ma aumenta verso il nucleo, dove raggiunge decine di migliaia di gradi. La sua struttura è simile a quella di Giove: l'atmosfera esterna è principalmente composta da idrogeno molecolare ed elio, con tracce di ammoniaca, metano e acqua; sotto di essa c'è uno strato di idrogeno metallico liquido, la cui pressione conferisce all'idrogeno proprietà metalliche, generando il campo magnetico del pianeta; infine, si ritiene che il nucleo di Saturno sia solido, composto da materiali pesanti come silicio, ferro e ossigeno, e avvolto da strati di ghiaccio.",
    "Distanza dal Sole: 1,427 × 10^9 km\n\nDiametro: 116.460 km\n\nMassa: 5,683 × 10^26 kg\n\nPeriodo di Rotazione: 0g 10h 34m\n\nPeriodo di Rivoluzione: 29,5 anni\n\nGravità: 10,44 m/s²\n\nDensità: 687 kg/m³\n\nTemperatura superficiale: -186 °C\n\n",
    "Saturno emette più calore di quanto ne riceva dal Sole, questo è dovuto probabilmente alla compressione del nucleo e al fenomeno di pioggia di elio, in cui l'elio, precipitando dal cielo, libera molta energia.\nSaturno esercita una forza gravitazionale costante sui suoi anelli, impedendo che si disperano nello spazio.\nLa bassa densità di Saturno (inferiore all'acqua) significa che, ipoteticamente, galleggerebbe in un oceano d'acqua abbastanza grande da contenerlo."
];


function cambiaTestoSaturno(indice) {
    document.getElementById('sezioneTesto').innerText = testiSaturno[indice];
}

/* --------------------------------------------------------------------------- */
 const testiUrano = [
    "Urano, il settimo pianeta dal Sole e il terzo per diametro nel Sistema Solare, è un gigante gassoso, ma viene definito 'gigante ghiacciato' per la sua composizione interna, che include acqua, ammoniaca e metano. Urano è quattro volte più grande della Terra, ha una massa 14,5 volte maggiore e la sua atmosfera ha una temperatura media che lo rende il pianeta più freddo del Sistema Solare. La struttura di Urano è diversa da quella degli altri giganti: l'atmosfera è principalmente composta da idrogeno, elio e metano; il mantello ghiacciato contiene un mix di acqua, ammoniaca e metano in stato fluido, costituendo la maggior parte della massa del pianeta; il nucleo roccioso è formato da materiali pesanti come ferro, silicio e ossigeno.",
    "Distanza dal Sole:  2,736×10^9 km\n\nDiametro: 50.724 km\n\nMassa: 8,681 × 10^25 kg\n\nPeriodo di Rotazione: 0g 17h 14m\n\nPeriodo di Rivoluzione: 84,01 anni\n\nGravità: 8,87 m/s²\n\nDensità: 1270 kg/m³\n\nTemperatura superficiale: -216 °C\n\n",
    "L'inclinazione assiale estrema di Urano è probabilmente dovuta ad una collisone con un corpo planetario di dimensioni simili nei primi stadi della sua formazione, che avrebbe ribaltato il pianeta.\nA causa della sua inclinazione, ogni polo di Urano sperimenta 42 anni di luce continui, seguiti da 42 anni di buio.\nUrano emette meno calore rispetto ad altri giganti gassosi, e non si comprende completamente perchè sia così freddo rispetto ai suoi simili."
];


function cambiaTestoUrano(indice) {
    document.getElementById('sezioneTesto').innerText = testiUrano[indice];
}

/* --------------------------------------------------------------------------- */
 const testiNettuno = [
    "Nettuno, l'ottavo e ultimo pianeta del Sistema Solare, è il gigante gassoso più lontano dal Sole. E' classificato come gigante ghiacciato, ha dimensioni simili a quelle di Urano, ma la sua massa è circa 17 volte quella della Terra. Le temperature atmosferiche possono scendere fino a -214°C, ma nonostante la distanza dal Sole, Nettuno emette più calore di quanto ne riceva, suggerendo un'attività interna significativa. La sua struttura è composta da tre strati principali: l'atmosfera, costituita da idrogeno, elio e poco metano; il mantello ghiacciato, che contiene una miscela densa di acqua, ammoniaca e metano e costituisce la maggior parte della massa del pianeta; infine, il nucleo roccioso, compatto e solido, formato da elementi pesanti come ferro, nichel e silicio.",
    "Distanza dal Sole:  4,504×10^9 km\n\nDiametro: 50.724 km\n\nMassa: 1,024 × 10^26 kg\n\nPeriodo di Rotazione: 0g 16h 6m\n\nPeriodo di Rivoluzione: 164,82 anni\n\nGravità: 11,15 m/s²\n\nDensità: 1640 kg/m³\n\nTemperatura superficiale: -220°C\n\n",
    "Nonostante la distanza dal Sole, Nettuno emette quasi il doppio dell'energia che riceve, come se possedesse una 'caldaia' inerna che rilascia calore.\nLa scoperta di Nettuno è stata una pietra miliare nell'astronomia, essendo stata fatta grazie a calcoli matematici, le anomalie gravitazionali osservate nell'orbita di Urano portarono gli astronomi a dedurre la presenza di un altro pianeta, Nettuno appunto. Come gli altri pianeti inclinati, Nettuno ha stagioni che durano circa 40 anni ciasciuna, ma data la sua grande distanza dal Sole, le differenze stagionali sono molto meno intense rispetto a quelle terrestri."
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

