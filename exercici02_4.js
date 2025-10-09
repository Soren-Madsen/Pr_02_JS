


let referenciaSetInterval = null;
let tempsTotal = 0;

document.getElementById("iniciar").addEventListener("click", iniciarCompteEnrere);
document.getElementById("aturar").addEventListener("click", aturaCompteEnrere);

function iniciarCompteEnrere() {
    const minuts = parseInt(document.getElementById("minuts").value) || 0;
    const segons = parseInt(document.getElementById("segons").value) || 0;
    tempsTotal = (minuts * 60) + segons;
    
    if (tempsTotal > 0) {
        referenciaSetInterval = setInterval(generaCompteEnrere, 1000);
    }
}

function generaCompteEnrere() {
    tempsTotal--;
    
    const minuts = Math.floor(tempsTotal / 60);
    const segons = tempsTotal % 60;
    
    document.getElementById("temps").textContent = minuts + ":" + segons;
    
    if (tempsTotal <= 0) {
        clearInterval(referenciaSetInterval);
    }
}

function aturaCompteEnrere() {
    clearInterval(referenciaSetInterval);
    document.getElementById("temps").textContent = "00:00";
    document.getElementById("minuts").value = 0;
    document.getElementById("segons").value = 0;
}