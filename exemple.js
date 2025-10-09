console.log("Hola Mon");
console.log("Que tal?");
//alert("Hola Mon");
document.getElementById("exempleDiv").innerHTML = "Benvingut a javascript";
document.getElementById("btnEnviar")
//window.prompt("Com et dius?");
//let edat = window.prompt("Quants anys tens?");
function mostraMissatge() {
let nomusuari = document.getElementById("inputNom").value;
let edat = document.getElementById("inputEdat").value;
document.getElementById("exempleDiv").innerHTML = " <h2>Benvingut " + nomusuari + "</h2>";   
let proximaedat = parseInt(edat) + 10;
if( isNaN(proximaedat)) {
    document.getElementById("exempleDiv").innerHTML += " <h3> Si us plau, introdueix un numero valid a l'edat </h3>";
    document.getElementById("inputEdat").style.backgroundColor = "red";
} else { 
    document.getElementById("exempleDiv").innerHTML += " <h3>en 10 anys tindras " + proximaedat + " anys</h3>";
    document.getElementById("inputEdat").style.backgroundColor = "green";
}
}