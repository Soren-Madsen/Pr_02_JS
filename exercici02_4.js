
let referenciaSetInterval = null;
let tempsTotal = 0;
let pausat = false;

document.getElementById("iniciar").addEventListener("click", iniciarCompteEnrere);
document.getElementById("aturar").addEventListener("click", aturaCompteEnrere);
document.getElementById("pausa").addEventListener("click", pausa);

function iniciarCompteEnrere() {
    const minuts = parseInt(document.getElementById("minuts").value) || 0;
    const segons = parseInt(document.getElementById("segons").value) || 0;
    tempsTotal = (minuts * 60) + segons;
    pausat = false;
    temps(tempsTotal);
    if (tempsTotal > 0) {
        clearInterval(referenciaSetInterval);
        referenciaSetInterval = setInterval(generaCompteEnrere, 1000);
    }
}

function generaCompteEnrere() {
    if (pausat) return;
    if (tempsTotal <= 0) return;

    tempsTotal--;

    temps(tempsTotal);

    if (tempsTotal <= 0) {
        clearInterval(referenciaSetInterval);

        // iniciar alarma
        if (select_music && select_music.value) {
            if (audio.src.indexOf(select_music.value) === -1) {
                audio.src = select_music.value;
            }
            audio.play();
        }
    }
}

function temps(totalSegons) {
    const minuts = Math.floor(totalSegons / 60);
    const segons = totalSegons % 60;
    document.getElementById("temps").textContent = pad(minuts) + ":" + pad(segons);
}
    // Ho he fet amb un toggle, si prems el boto pausa un cop es pausa, si el prems un altre cop es despausa
function pausa() {
    pausat = !pausat;
}   

function aturaCompteEnrere() {
    clearInterval(referenciaSetInterval);
    pausat = false;
    tempsTotal = 0;
    document.getElementById("temps").textContent = "00:00";
    document.getElementById("minuts").value = 0;
    document.getElementById("segons").value = 0;
    
    // parar alarma
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function pad(n) { return n.toString().padStart(2, '0'); }
