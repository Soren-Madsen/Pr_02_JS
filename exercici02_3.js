


const div_taula_propietats = document.getElementById("taula_propietats");

function generaTaulaPropietats() {
    let hora_actual = new Date();
    div_taula_propietats.innerHTML =
        `<table>
            <tr>
                <td>Valor màxim que pot tenir un número JS:</td>
                <td>${Number.MAX_VALUE}</td>
            </tr>
            <tr>
                <td>Altura total de la pantalla:</td>
                <td>${screen.height}</td>
            </tr>
            <tr>
                <td>Altura interna de la finestra:</td>
                <td>${window.innerHeight}</td>
            </tr>
            <tr>
                <td>URL de la web:</td>
                <td>${window.location.href}</td>
            </tr>
            <tr>
        </table>`;
}
//Crida funcio per primera vegada
generaTaulaPropietats();

//Crida funcio cada segon.
setInterval(generaTaulaPropietats, 1000);

