document.addEventListener('DOMContentLoaded', function() {
    let isNavOpen = false;
    var button = document.getElementById('tendinaPianeti');
    var sezionedisopra = document.getElementById('auand');
    var dropdownList = document.getElementById('navTeoria_2_1');
    let sezioneTeoria = document.getElementById('sezioneTeoria_1_2');
    let frecciePianeti = document.getElementsByClassName('freccia');
    
    
    
/* ---------------------------------------------------------------------------------------------------- */
    /* BLOCCO DI CODICE PER IL FUNZIONAMENTO DELLA COMPARSA DELLA BARRA DI NAVIGAZIONE PER I PIANETI */


    $('[data-toggle="tooltip"]').tooltip();
    button.addEventListener('click', function() {

        sezionedisopra.classList.remove('move-right-planet-2');
        sezionedisopra.classList.remove('move-left-planet-2');
        sezionedisopra.classList.remove('rispostaThenNav');
        sezionedisopra.classList.remove('centraThenNav');

        // Se la lista è nascosta
        if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
            // Rimuovi la classe 'active' per ripristinare le dimensioni originali
            button.classList.remove('active');
            button.innerHTML = `<i class="fas fa-arrow-up"></i>`;
            
            button.setAttribute('title', 'CHIUDI BARRA DI NAVIGAZIONE');

            // Rinfresca il tooltip per applicare il nuovo title
            $(this).tooltip('dispose').tooltip('show');

            dropdownList.style.display = 'grid'; // Mostra la lista
            isNavOpen = true;
            dropdownList.classList.remove('hide'); // Rimuovi l'animazione di uscita
            dropdownList.classList.add('show'); // Rimuovi l'animazione di uscita
            dropdownList.offsetHeight; // Forza il reflow per l'animazione

            sezioneTeoria.classList.remove('move-right-text');
            sezioneTeoria.classList.add('move-left-text');

            sezionedisopra.classList.remove('move-right-planet');
            sezionedisopra.classList.add('move-left-planet');
            
            // Aggiungi la classe 'active' per cambiare le dimensioni del bottone
            button.classList.add('active');
            button.innerHTML = `<i class="fas fa-arrow-down"></i>` // Freccia giù 


            for(i=0; i<frecciePianeti.length; i++) {
                frecciePianeti[i].classList.remove('mostra2');
                frecciePianeti[i].classList.add('scompari');
            }


        } else {
            dropdownList.classList.remove('show'); // Rimuove l'animazione di entrata
            dropdownList.classList.add('hide'); // Aggiungi l'animazione di uscita
            sezioneTeoria.classList.remove('move-left-text');
            sezioneTeoria.classList.add('move-right-text');

            sezionedisopra.classList.remove('move-left-planet');
            sezionedisopra.classList.add('move-right-planet');

            dropdownList.addEventListener('animationend', function() {
                dropdownList.style.display = 'none'; // Nascondi la lista alla fine dell'animazione
                isNavOpen = false;
            }, { once: true });
            for(i=0; i<frecciePianeti.length; i++) {
                frecciePianeti[i].classList.remove('scompari');
                frecciePianeti[i].classList.add('mostra2');
            }
            
            // Rimuovi la classe 'active' per ripristinare le dimensioni originali
            button.classList.remove('active');
            button.innerHTML = `<i class="fas fa-arrow-up"></i>`;

            button.setAttribute('title', 'APRI BARRA DI NAVIGAZIONE');

            // Rinfresca il tooltip per applicare il nuovo title
            $(this).tooltip('dispose').tooltip('show');
            
        }

        
    });
    
    
    var planets = document.getElementsByClassName('navPianeti_2_1');  // Seleziona tutti i bottoni con la classe "navPianeti_2_1"
    var currentIframe = document.querySelector('.planetIfr');    // Seleziona l'iframe da aggiornare
    var originalSrc = currentIframe.src; // Memorizza l'URL originale dell'iframe
    var nomePianeta = document.getElementById('nomePianeta');
    var originalName = nomePianeta.textContent;
    
    // Aggiungi l'evento mouseover a ciascun bottone
    for (var i = 0; i < planets.length; i++) {
        planets[i].addEventListener('mouseover', function() {
            // Cambia la src in base al bottone su cui passa il mouse
            switch(this.textContent.trim()) {
                case 'SOLE':
                    nomePianeta.innerHTML = "Sole";
                    currentIframe.src = "sole3d.html";
                    break;
                case 'MERCURIO':
                    nomePianeta.innerHTML = "Mercurio";
                    currentIframe.src = "mercurio3d.html";
                    break;
                case 'VENERE':
                    nomePianeta.innerHTML = "Venere";
                    currentIframe.src = "venere3d.html";
                    break;
                case 'TERRA':
                    nomePianeta.innerHTML = "Terra";
                    currentIframe.src = "terra3d.html";
                    break;
                case 'MARTE':
                    nomePianeta.innerHTML = "Marte";
                    currentIframe.src = "marte3d.html";
                    break;
                case 'GIOVE':
                    nomePianeta.innerHTML = "Giove";
                    currentIframe.src = "giove3d.html";
                    break;
                case 'SATURNO':
                    nomePianeta.innerHTML = "Saturno";
                    currentIframe.src = "saturno3d.html";
                    break;
                case 'URANO':
                    nomePianeta.innerHTML = "Urano";
                    currentIframe.src = "urano3d.html";
                    break;
                case 'NETTUNO':
                    nomePianeta.innerHTML = "Nettuno";
                    currentIframe.src = "nettuno3d.html";
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
    
    let bottoneVideo = document.getElementById('bottoneVideo');

    bottoneVideo.addEventListener('click', function() {
        let sezioneTesto = document.getElementById('sezioneTesto');
        let sezioneVideo = document.getElementById('sezioneVideo');
        if (sezioneVideo.style.display === 'none') {
            sezioneTesto.classList.remove('showTesto');
            sezioneTesto.classList.add('hideTesto');
            sezioneTesto.addEventListener('animationend', function() {
                sezioneVideo.classList.add('showVideo');
                sezioneVideo.style.display = 'block';
                bottoneVideo.textContent = 'Ritorna al testo';
            }, {once : true});
        } else {
            sezioneVideo.classList.remove('showVideo');
            sezioneVideo.classList.add('hideVideo');
            sezioneVideo.addEventListener('animationend', function() {
                sezioneVideo.style.display = 'none';
                sezioneTesto.classList.add('showTesto');
                bottoneVideo.textContent = 'Visualizza video';
            }, {once : true});
        }
    });
});


