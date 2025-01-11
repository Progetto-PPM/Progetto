document.addEventListener('DOMContentLoaded', function() {
    let isInfoOpen = false;
    let isNavOpen = false;
    var button = document.getElementById('tendinaPianeti');
    var sezionedisopra = document.getElementById('auand');
    var dropdownList = document.getElementById('navTeoria_2_1');
    let sezioneTeoria = document.getElementById('sezioneTeoria_1_2');
    let tendinaInfo = document.getElementById('tendinaInfo');
    let sezioneSatelliti = document.getElementById('sezioneSatelliti');
    
/* ---------------------------------------------------------------------------------------------------- */
    /* BLOCCO DI CODICE PER IL FUNZIONAMENTO DELLA COMPARSA DELLA BARRA DI NAVIGAZIONE PER I PIANETI */
    button.addEventListener('click', function() {
        
        if (!isInfoOpen) {
            sezionedisopra.classList.remove('move-left-planet');
            sezionedisopra.classList.remove('move-right-planet');
                // Se la lista è nascosta
            if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
                dropdownList.style.display = 'grid'; // Mostra la lista
                isNavOpen = true;
                dropdownList.classList.remove('hide'); // Rimuovi l'animazione di uscita
                dropdownList.classList.add('show'); // Rimuovi l'animazione di uscita
                dropdownList.offsetHeight; // Forza il reflow per l'animazione
                
                // Aggiungi la classe 'active' per cambiare le dimensioni del bottone
                button.classList.add('active');
                button.innerHTML = `<i class="fas fa-arrow-down"></i>` // Freccia giù 

                // Sposta l'elemento sopra
                sezionedisopra.classList.remove('move-down');
                sezionedisopra.classList.add('move-up');

                tendinaInfo.style.cursor = "not-allowed";
                tendinaInfo.setAttribute("data-toggle", "tooltip");
                tendinaInfo.setAttribute("data-placement", "right");
                tendinaInfo.setAttribute("title", "Chiudi la Navigazione dei Corpi per aprire");
                $(tendinaInfo).tooltip();


            } else {
                dropdownList.classList.remove('show'); // Rimuove l'animazione di entrata
                dropdownList.classList.add('hide'); // Aggiungi l'animazione di uscita
                dropdownList.addEventListener('animationend', function() {
                    dropdownList.style.display = 'none'; // Nascondi la lista alla fine dell'animazione
                    isNavOpen = false;
                }, { once: true });
                
                // Rimuovi la classe 'active' per ripristinare le dimensioni originali
                button.classList.remove('active');
                button.innerHTML = `<i class="fas fa-arrow-up"></i>`;

                // Ripristina la posizione dell'elemento sopra
                sezionedisopra.classList.remove('move-up');
                sezionedisopra.classList.add('move-down');

                tendinaInfo.style.cursor = "";
                // Rimuove gli attributi
                tendinaInfo.removeAttribute("data-toggle");
                tendinaInfo.removeAttribute("data-placement");
                tendinaInfo.removeAttribute("title");

                // Disabilita il tooltip
                $(tendinaInfo).tooltip('dispose');
                
            }
        } 
        
    });
    
/* -------------------------------------------------------------------------------------------- */
    /* BLOCCO DI CODICE PER IL FUNZIONAMENTO DELLA COMPARSA DELLA SEZIONE DI TEORIA*/
    
    
    tendinaInfo.addEventListener('click', function () {

        if (!isNavOpen) {
            // CONDIZIONE CHE VERIFICA CHE LA SEZIONE DI TEORIA SIA CHIUSA
            if (sezioneTeoria.style.display === 'none' || sezioneTeoria.style.display === '') {
                tendinaInfo.innerHTML = `<i class="fas fa-arrow-left"></i>`
                
                sezioneTeoria.style.display = 'flex';
                isInfoOpen = true;
                sezioneTeoria.classList.remove('move-left-text');
                sezioneTeoria.classList.add('move-right-text');
                sezioneTeoria.offsetHeight; // Forza il reflow per l'animazione
    
    
                sezionedisopra.classList.remove('move-left-planet');
                sezionedisopra.classList.add('move-right-planet');
                sezioneSatelliti.classList.remove('esciFuori');
                sezioneSatelliti.classList.add('nascondi');

                button.style.cursor = "not-allowed";
                button.setAttribute("data-toggle", "tooltip");
                button.setAttribute("data-placement", "top");
                button.setAttribute("title", "Chiudi la descrizione del Corpo per aprire");
                $(button).tooltip();
                
            } else { // LA FINESTRA È APERTA QUINDI CI TROVIAMO NEL ELSE
                tendinaInfo.innerHTML = `<i class="fas fa-arrow-right"></i>`
     
                sezioneTeoria.classList.remove('move-right-text');
                sezioneTeoria.classList.add('move-left-text');
                sezioneTeoria.addEventListener('animationend', function() {
                    sezioneTeoria.style.display = 'none';
                    isInfoOpen = false;
                }, { once: true })
                
    
                sezionedisopra.classList.remove('move-right-planet');
                sezionedisopra.classList.add('move-left-planet');
                sezioneSatelliti.classList.remove('nascondi');
                sezioneSatelliti.classList.add('esciFuori');
                button.style.cursor = "";

                // Rimuove gli attributi
                button.removeAttribute("data-toggle");
                button.removeAttribute("data-placement");
                button.removeAttribute("title");

                // Disabilita il tooltip
                $(button).tooltip('dispose');
            }
        }

        
        

        
    });
    








    // Seleziona tutti i bottoni con la classe "navPianeti_2_1"
    var planets = document.getElementsByClassName('navPianeti_2_1');

    // Seleziona l'iframe da aggiornare
    var currentIframe = document.querySelector('.planetIfr');

    // Memorizza l'URL originale dell'iframe
    var originalSrc = currentIframe.src;

    
    var nomePianeta = document.getElementById('nomePianeta');
    var originalName = nomePianeta.textContent;
    
    // Aggiungi l'evento mouseover a ciascun bottone
    for (var i = 0; i < planets.length; i++) {
        planets[i].addEventListener('mouseover', function() {
            // Cambia la src in base al bottone su cui passa il mouse
            switch(this.textContent.trim()) {
                case 'SOLE':
                    nomePianeta.innerHTML = "Sole";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/sole3d.html";
                    break;
                case 'MERCURIO':
                    nomePianeta.innerHTML = "Mercurio";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/mercurio3d.html";
                    break;
                case 'VENERE':
                    nomePianeta.innerHTML = "Venere";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/venere3d.html";
                    break;
                case 'TERRA':
                    nomePianeta.innerHTML = "Terra";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/terra3d.html";
                    break;
                case 'MARTE':
                    nomePianeta.innerHTML = "Marte";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/marte3d.html";
                    break;
                case 'GIOVE':
                    nomePianeta.innerHTML = "Giove";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/giove3d.html";
                    break;
                case 'SATURNO':
                    nomePianeta.innerHTML = "Saturno";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/saturno3d.html";
                    break;
                case 'URANO':
                    nomePianeta.innerHTML = "Urano";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/urano3d.html";
                    break;
                case 'NETTUNO':
                    nomePianeta.innerHTML = "Nettuno";
                    currentIframe.src = "src/1 Teoria/1_1 Corpi Maggiori/nettuno3d.html";
                    break;
                default:
                    break;
            }
        });

        // Gestisci il mouseout per tornare all'originale src
        planets[i].addEventListener('mouseout', function() {
            currentIframe.src = originalSrc; // Ripristina l'iframe alla sua src originale
            nomePianeta.textContent = originalName;
        });
    }
    
    
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})





