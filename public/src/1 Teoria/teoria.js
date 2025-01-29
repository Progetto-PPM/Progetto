 // 9 Array di testi per i 9 corpi celesesti corrispondenti
 const testiSole = [
    "Il Sole è la stella al centro del nostro Sistema Solare, è la fonte primaria di energia per tutti i pianeti. E' una sfera di plasma, composta principalmente da idrogeno ed elio. \nE' diviso in strati: Nucleo, Zona Radiativa, Zona Convettiva, Fotosfera, Cromosfera, Corona.\n\n Nucleo: La fucina del Sole, l'idrogeno diventa elio e rilascia energia all'esterno.\n Zona Radiativa: L'energia si trasferisce verso l'esterno attraverso radiazioni, è un processo molto lento impiegando fino a milioni di anni per attraversare la zona.\n Zona Convettiva: L'energia si sposta attraverso la convezione: bolle di plasma caldo salgono verso la superficie e, raffreddandosi, ridiscendono.\n Fotosfera: La superficie visibile del Sole, qui si formano le macchie solari, aree più fredde e scure causate dall'attività magnetica.\n\n Cromosfera: è uno strato sottile che emette un debole bagliore rosso durante le eclissi.\n Corona: è lo strato esterno dell'atmosfera, la temperatura è molto alta, non si sa ancora il motivo.",
    "Diametro: 1.392.700 km\n\nMassa: 1,989 × 10^30 kg\n\nPeriodo di Rotazione: 27g\n\nGravità: 247 m/s2\n\nDensità: 1,41 g/cm³\n\nTemperatura Superifciale: 5.500°C ",
    "Fin dalla sua formazione il sole brucia idrogeno e elio, quando la riserva di questi elementi contenuta nel nucleo della stella si esaurirà si trasformerà in una gigante rossa, dove l'elio si fonde e crea carbonio.\n\n Questo, si prevede, avverrà tra circa 4,5 miliardi di anni. A questo punto le dimensioni del sole inizieranno a cresce fino a inglobare alcuni pianeti del sistema solare come mercurio e venere e forse anche la Terra. Dopo questa fase il sole si trasformerà in nana bianca, con dimensioni simili a quelle del nostro pianeta."
];

// Funzione per cambiare il testo
function cambiaTestoSole(indice) {
    // Modifica il contenuto dell'elemento con id "testo"
    document.getElementById('sezioneTesto').innerText = testiSole[indice];
}

/* --------------------------------------------------------------------------- */
 
const testiMercurio = [
    "Mercurio è il pianeta più vicino al Sole, il suo aspetto  simile a quello di una luna, è coperto di crateri e ha una fortuna escursione termica in base al giorno o alla notte.\nMercurio è composto da una grande quantità di ferro. Si pensa che il suo nucleo sia in gran parte liquido, poiché ha un campo magnetico molto debole. La superficie è piena di monti e creste ondulate, chiamate 'scarpate'.\n\nLa composizione di Mercurio è unica, ha un nucleo che occupa il 60% del pianeta, un valore sproporzionatamente alto per gli altri pianeti, questo nucleo ferroso potrebbe essere un rimasto dalle prime fasi di formazione del pianeta, forse a causa di una collisione che ha rimosso gran parte del mantello roccioso esterno.\n\nMercurio ha una sottile 'esosfera', composta principalmente da atomi di ossigeno, sodio, idrogeno, elio e potassio.\nNon avendo un'atmosfera densa come la Terra, non ha fenomeni atmosferici e la sua superficie è esposta a impatti meteorici.",
    "Distanza dal Sole: 58.000.000 km\n\nDiametro: 4878 km\n\n Massa: 3,285 × 10^23 kg\n\nPeriodo di Rotazione: 59g\n\nPeriodo di Rivoluzione: 88g\n\nGravità: 3,7 m/s²\n\nDensità: 5,43 g/cm³\n\nTemperatura Superficiale: 430°C / -185°C",
    "Mercurio ha la più grande escursione termica di qualsiasi altro pianeta del Sistema Solare, passando da temperature diurne estremamente calde a notti estremamente fredde. Questo è dovuto alla mancanza di un'atmosfera in grado di trattenere la temperatura, e soprattutto alla sua vicinanza al Sole.\n\n Ha un comportamento del tutto unico, impiega 59 giorni per ruotare attorno al suo asse e 88 per ruotare attorno al Sole. Si tratta di una sincronia perfetta, ogni 3 giri su se stesso fa 2 giri attorno al Sole."
];


function cambiaTestoMercurio(indice) {
    document.getElementById('sezioneTesto').innerText = testiMercurio[indice];
}

/* --------------------------------------------------------------------------- */

const testiVenere = [
    "Venere è il secondo pianeta del Sistema Solare in ordine di distanza dal Sole ed è uno dei corpi celesti più luminosi visibili nel cielo terrestre. Viene soprannominato 'Stella del Mattino'. Ha una dimensione simile alla Terra, ma oltre questo non hanno niente in comune: Venere è ostile, con atmosfera densa con temperature estreme e una superficie vulcanica\n\nVenere è circondato da una spessa atmosfera composta principalmente da anidride carbonica, con tracce di azoto e quantità minime di altri gas, come acido solforico. La pressione atmosferica di Venere è molto alta, circa 92 quella terrestre. Questa densità intrappola il calore in modo efficiente, rendendolo il pianeta più caldo del Sistema Solare.\n\nVenere è composto da un nucleo ferroso simile a quello terrestre, ma non genera un campo magnetico significativo, probabilmente a causa della lentezza della sua rotazione. Sopra il nucleo, si trova un mantello roccioso che forma la crosta esterna del pianeta, costituita da silice e altri minerali vulcanici.",
    "Distanza dal Sole: 108.290.000 km\n\nDiametro: 12.104 km\n\nMassa: 4,867 × 10^24 kg\n\nPeriodo di Rotazione: 243g\n\nPeriodo di Rivoluzione: 224,7g\n\nGravità: 8,87 m/s²\n\nDensità: 5,24 g/cm³\n\nTemperatura Superficiale: 464°C",
    "Venere è il classico esempio di 'effetto serra fuori controllo'. L'anidride carbonica intrappola il calore e impedisce il raffreddamento.\n\nVenere ruota in direzione opposta agli altri pianeti, una peculiarità che potrebbe essere il risultato di una collisione con un grande oggetto nelle prime fasi della sua formazione.\n\nÈ il corpo celeste più luminoso dopo il Sole e la Luna, visibile dalla Terra sia all'alba che al tramonto, rendendolo facilmente riconoscibile nel cielo.\n\nLa pressione atmosferica di Venere è talmente forte, che, paragonata alla Terra, è come se ci si trovasse ben 900 metri sotto il livello del Mare."
];


function cambiaTestoVenere(indice) {
    document.getElementById('sezioneTesto').innerText = testiVenere[indice];
}

/* --------------------------------------------------------------------------- */
const testiTerra = [
    "La Terra è il terzo pianeta dal Sole ed è l'unico corpo celeste che ospita la vita. Ha una struttura complessa, composta da strati geologici e un'atmosfera che crea un ambiente favorevole alla biodiversità. La sua composizione, il clima e la posizione rispetto al Sole contribuiscono a rendere il nostro pianeta un ecosistema unico.\n\nIl pianeta è ricoperto per circa il 71% da oceani e mari, con il restante 29% costituito da continenti e isole. Il suolo è suddiviso in placche tettoniche che galleggiano sul mantello, e il loro movimento causa terremoti, formazione di montagne e attività vulcanica. L'atmosfera è ricca di azoto e ossigeno, con tracce di altri gas; non solo permette la respirazione per gran parte delle forme di vita, ma ci protegge dai raggi ultravioletti.\n\nLa struttura della Terra è divisa in vari livelli:\nNucleo interno, composto da ferro, arriva a 5500°C; Nucleo esterno, qui si genera il campo magnetico terrestre; Mantello, è in continuo movimento e qui si trovano le placche che formano i continenti; Crosta, composto da rocce e minerali, è suddivisa in costa continentale e oceanica.",
    "Distanza dal Sole: 147.160.000 km\n\nDiametro: 12.756 km\n\nMassa: 5,972 × 10^24 kg\n\nPeriodo di Rotazione: 24h\n\nPeriodo di Rivoluzione: 365 giorni\n\nGravità: 9,807 m/s²\n\nDensità: 5,51 g/cm³\n\nTemperatura superficiale: 14°C",
    "Il campo magnetico terrestre è generato dal movimento del nucleo esterno, questo campo protegge la Terra dai venti solai e crea le aurore polari.\n\nL'atmosfera terrestre permette il riscaldamento del pianeta trattenendo il calore del Sole, senza questo effetto, la temperatura sulla Terra sarebbe molto più bassa e meno favorevole alla vita.\n\nLa Terra è il solo pianeta noto ad avere acqua in tutti e tre gli stati (solido, liquido e gassoso), essenziale per la vita e per i processi climatici.\n\n Il nostro pianeta ha un'atmosfera molto attiva, con sistemi metereologici complessi, stagioni, cicloni e venti. L'atmosfera varia continuamente, influenzata da vari fattori tra cui correnti oceaniche, riscaldamento solare e umidità."
];


function cambiaTestoTerra(indice) {
    document.getElementById('sezioneTesto').innerText = testiTerra[indice];
}

/* --------------------------------------------------------------------------- */
const testiMarte = [
    "Marte è il quarto pianeta del Sistema Solare in ordine di distanza dal Sole, è un dei corpi celesti più studiati ed è considerato il miglior candidato per una possibile futura colonizzazione umana. Marte possiede un'atmosfera molto sottile, composta principalmente da anidride carbonica, con tracce di azoto e argon. La pressione atmosferica è solo l'1% di quella terrestre, quindi Marte non può trattenere calore in modo efficace, causando grandi escursioni termiche. Le temperature variano da circa 20°C durante il giorno a -125°C di notte.\n\nUna delle caratteristiche notevoli è l'enorme vulcano Olympus Mons, che con i suoi 22 km di altezza è il vulcano più grande del Sistema Solare.\nAnche il canyon Valles Marineris è tra i più grandi conosciuti, estendendosi per circa 4.000 km in lunghezza e fino a 7 km in profondità.\nLa struttura di Marte è simile a quella terrestre, con un nucleo, un mantello e una crosta; Il nucleo è composto principalmente da ferro, il mantello è meno attivo di quello terrestre e la crosta è ricca di ferro e altri minerali.",
    "Distanza dal Sole: 241.400.000 km\n\nDiametro: 6.779 km\n\nMassa: 6,39 × 10^23 kg\n\nPeriodo di Rotazione: 1g 0h 37m\n\nPeriodo di rivoluzione: 687g\n\nGravità: 3,73 m/s²\n\nDensità: 3,93 g/cm³\n\nTemperatura superficiale: 63°C",
    "Marte ha calotte polari costituite da ghiaccio d'acqua e ghiaccio secco. Sono stati scoperti inoltre segni di antichi letti di fiumi e possibili oceani, suggerendo che Marte potrebbe aver ospitato acqua liquida e un clima più caldo miliardi di anni fa.\n\nLa superficie marziana è ricoperta di polvere fine e ricca di ossidi, che spesso causa enormi tempeste di polvere che possono ricoprire l'intero pianeta per settimane o mesi.\n\nPoichè l'atmosfera è molto sottile, Marte ha venti forti, ma la pressione bassa non permette di creare cicloni terrestri. Tuttavia, le tempeste di polvere rimangono eventi significativi e possono oscurare la superficie per lunghi periodi.\n\nMarte ha due piccoli satelliti, Phobos e Deimos, entrambi sono irregolari e sono probabilmente asteroidi catturati dalla sua gravità."
];


function cambiaTestoMarte(indice) {
    document.getElementById('sezioneTesto').innerText = testiMarte[indice];
}

/* --------------------------------------------------------------------------- */
const testiGiove = [
    "Giove è il quinto pianeta del Sistema Solare in ordine di distanza dal Sole. Con una massa 318 volte quella della Terra, è composto principalmente di idrogeno ed elio, simile a una piccola stella, si distingue per la sua struttura e la famosa Macchia Rossa.\nGiove è undici volte più grande della Terra, è classificato come gigante gassoso, poiché non ha una superficie solida. La sua atmosfera è divisa in bande colorate di nubi che ruotano a velocità diverse, causando vortici e tempeste. La temperatura di Giove, nell'atmosfera, è intorno ai -145°C, ma aumenta notevolmente verso il nucleo. Questo pianeta emette più calore di quanto ne riceva dal Sole.\n\nLa composizione di Giove include principalmente idrogeno ed elio, che si trovano in differenti stati fisici a vari livelli di profondità;\nAtmosfera esterna, composta di idrogeno ed elio, uno Strato di idrogeno metallico e liquido e il Nucleo, che sebbene non sia stato osservato direttamente, si pensa che Giove abbia un piccolo nucleo roccioso composto da elementi più pesanti.",
    "Distanza dal Sole: 759.530.000 km\n\nDiametro: 139.820 km\n\nMassa: 1,898 × 10^27 kg\n\nPeriodo di Rotazione: 0g 9h 56m\n\nPeriodo di Rivoluzione: 11,86 anni\n\nGravità: 24,79 m/s²\n\nDensità: 1,33 g/cm³\n\nTemperatura superficiale: –145°C",
    "La Grande Macchia Rossa di Giove è una gigantesca tempesta anticiclonica, larga più di una volta e mezza il diametro della Terra, attiva da almeno 350 anni. Recenti osservazioni mostrano che potrebbe lentamente ridursi nel tempo\n\nGiove ospita numerose altre tempeste, alcune delle quali ruotano in senso opposto rispetto alle bande atmosferiche. Le bande di Giove sono guidate da venti ad altissima velocità, che possono superare i 500 km/h.\n\nGiove ha il campo magnetiche più forte tra i pianeti del Sistema Solare, questo campo magnetico crea un'enorme magnetosfera che si estende per milioni di chilometri e protegge il pianeta da particelle cariche provenienti dal Sole. La magnetosfera di Giove ha un forte impatto anche sui suoi satelliti, creando intense radiazioni intorno a essi."
];


function cambiaTestoGiove(indice) {
    document.getElementById('sezioneTesto').innerText = testiGiove[indice];
}

/* --------------------------------------------------------------------------- */
const testiSaturno = [
    "Saturno è il sesto pianeta del Sistema Solare in ordine di distanza dal Sole. E' il secondo pianeta più grande del Sistema Solare, conosciuto per il suo sistema di anelli, è un gigante gassoso composto principalmente da idrogeno ed elio, simile a Giove, ha una densità così bassa che galleggerebbe sull'acqua.\n\nSaturno è nove volte più grande della Terra in larghezza e, benché molto massiccio, la sua densità è circa il 70% quella dell'acqua. La temperatura nell'atmosfera è molto bassa, ma si alza verso il nucleo, dove raggiungono le decine di migliaia di gradi.\n\nLa struttura di Saturno è simile a quella di Giove: Atmosfera esterna, principalmente idrogeno molecolare ed elio, con tracce di ammoniaca, metano e acqua; Strato di idrogeno metallico liquido, la pressione è talmente forte che da all'idrogeno proprietà metalliche, generando il campo magnetico del pianeta; Nucleo, si ritiene che abbia un nucleo solido di materiali pesanti, come silicio, ferro e ossigeno, avvolto da strati di ghiacci.",
    "Distanza dal Sole: 1,427 × 10^9 km\n\nDiametro: 116.460 km\n\nMassa: 5,683 × 10^26 kg\n\nPeriodo di Rotazione: 0g 10h 34m\n\nPeriodo di Rivoluzione: 29,5 anni\n\nGravità: 10,44 m/s²\n\nDensità: 687 kg/m³\n\nTemperatura superficiale: -186 °C\n\n",
    "Saturno emette più calore di quanto ne riceva dal Sole, questo è dovuto probabilmente alla compressione del nucleo e al fenomeno di pioggia di elio, in cui l'elio, precipitando dal cielo, libera molta energia.\nSaturno esercita una forza gravitazionale costante sui suoi anelli, impedendo che si disperano nello spazio.\nLa bassa densità di Saturno (inferiore all'acqua) significa che, ipoteticamente, galleggerebbe in un oceano d'acqua abbastanza grande da contenerlo."
];


function cambiaTestoSaturno(indice) {
    document.getElementById('sezioneTesto').innerText = testiSaturno[indice];
}

/* --------------------------------------------------------------------------- */
const testiUrano = [
    "Urano è il settimo pianeta dal Sole e il terzo per diametro nel Sistema Solare. E' un gigante gassoso, ma viene definito come gigante ghiacciato per la sua composizione interna, che include elementi pesanti come acqua, ammoniaca e metano.\nUrano è quattro volte più grande della Terra, la sua massa è 14,5 volte quella della Terra e la sua atmosfera ha una temperatura media tale da renderle il pianeta più freddo del Sistema Solare.\n\nLa struttura di Urano si differenzia da quella degli altri giganti, presenta tre strati principali; Atmosfera, composta principalmente da idrogeno, elio e metano; Mantello ghiacciato, contiene un mix di acqua, ammoniaca e metano in uno stato fluido e senso, che costituisce la maggior parte della massa del pianeta; Nucleo roccioso, si pensa che Urano abbia un piccolo nucleo roccioso, formato da elementi pesanti come ferro, silicio e ossigeno.\nL'atmosfera di Urano è calma rispetto a quella di Giove e Saturno, ma si osservano alcuni fenomeni interessanti: Nubi di metano e tempeste, anche se meno dinamico, Urano può sviluppare tempeste, le nubi appaiono e scompaiono rapidamente con venti che arrivano a 900 km/h; Distribuzione della temperatura, la temperatura è uniforme ma stranamente bassa, gli scienziati non hanno ancora trovato un motivo per questo freddo.\n",
    "Distanza dal Sole:  2,736×10^9 km\n\nDiametro: 50.724 km\n\nMassa: 8,681 × 10^25 kg\n\nPeriodo di Rotazione: 0g 17h 14m\n\nPeriodo di Rivoluzione: 84,01 anni\n\nGravità: 8,87 m/s²\n\nDensità: 1270 kg/m³\n\nTemperatura superficiale: -216 °C\n\n",
    "L'inclinazione assiale estrema di Urano è probabilmente dovuta ad una collisone con un corpo planetario di dimensioni simili nei primi stadi della sua formazione, che avrebbe ribaltato il pianeta.\nA causa della sua inclinazione, ogni polo di Urano sperimenta 42 anni di luce continui, seguiti da 42 anni di buio.\nUrano emette meno calore rispetto ad altri giganti gassosi, e non si comprende completamente perché sia così freddo rispetto ai suoi simili."
];


function cambiaTestoUrano(indice) {
    document.getElementById('sezioneTesto').innerText = testiUrano[indice];
}

/* --------------------------------------------------------------------------- */
const testiNettuno = [
    "Nettuno è l'ottavo e ultimo pianeta del Sistema Solare, ed è il gigante gassoso più lontano dal Sole. Come Urano, è classificato come gigante ghiacciato, il suo colore blu deriva dal metano nell'atmosfera e da processi chimici ancora poco compresi.\nDi grandezza è simile a Urano, la sua massa invece è leggermente superiore, circa 17 volte la Terra, è superiore in densità rispetto a Urano. Le temperature nella sua atmosfera possono scendere fino a -214°C. Nonostante la distanza dal Sole, Nettuno emette più calore di quanto ne riceva, suggerendo un0'attività interna significativa.\n\nLa struttura di Nettuno presenta tre strati principali: Atmosfera, composta principalmente da idrogeno elio e poco metano; Mantello ghiacciato, contiene una miscela densa e fluida di acqua, ammoniaca e metano, Questo strato costituisce la maggior parte della massa del pianeta e si pensa sia responsabile dell'emissione di calore interno; Nucleo roccioso, al centro si trova un nucleo compatto e solido, costituito da elementi pesanti come ferro e nichel e silicio.",
    "Distanza dal Sole:  4,504×10^9 km\n\nDiametro: 50.724 km\n\nMassa: 1,024 × 10^26 kg\n\nPeriodo di Rotazione: 0g 16h 6m\n\nPeriodo di Rivoluzione: 164,82 anni\n\nGravità: 11,15 m/s²\n\nDensità: 1640 kg/m³\n\nTemperatura superficiale: -220°C\n\n",
    "Nonostante la distanza dal Sole, Nettuno emette quasi il doppio dell'energia che riceve, come se possedesse una 'caldaia' interna che rilascia calore.\nLa scoperta di Nettuno è stata una pietra miliare nell'astronomia, essendo stata fatta grazie a calcoli matematici, le anomalie gravitazionali osservate nell'orbita di Urano portarono gli astronomi a dedurre la presenza di un altro pianeta, Nettuno appunto. Come gli altri pianeti inclinati, Nettuno ha stagioni che durano circa 40 anni ciascuna, ma data la sua grande distanza dal Sole, le differenze stagionali sono molto meno intense rispetto a quelle terrestri."
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





