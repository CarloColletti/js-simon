/**
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Qui trovate HTML e CSS ed alcuni esempi di stamattina (trovato l'easter egg?). cercate di analizzarli per capire come intervenire sul countdown.
*/

// collegamo gli elementi htlm dei:
// giorni 
const daysEl = document.getElementById("days");
// ore 
const hoursEl = document.getElementById("hours");
// minuti 
const minutesEl = document.getElementById("minutes");
// secondi 
const secondsEl = document.getElementById("seconds");
// e titolo 
const titleEl = document.getElementById("title");

// countdown del giorno a cui arrivare
const countDown = new Date("2023-02-05 17:13").getTime();

// imposto l'internavvo
const clock = setInterval(conteggio, 1000);

// creo la funzione 
function conteggio() {
    // richiamo il giorno corrente nella variabile
    const today = new Date().getTime();

    // faccio la differenza per sapere quanto tempo manca 
    const time_left = countDown - today;

    // calcoli per generare i secondi minuti ecc... 
    const days = Math.floor(time_left / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time_left % (1000 * 60)) / 1000);

    // li inseriamo nel html con dei if contratti per mettere lo zero davanti ai numeri se necessario
    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;

    // se il tempo rimanente è zero stop: al countDown e fai partire effetto confetti 
    if (time_left < 0) {
        clearInterval(clock);
        confetti({
            particleCount: 100,
            spread: 160
        });
    }

}