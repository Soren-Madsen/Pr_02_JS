

const div_llista_propietats = document.getElementById("llista_propietats");

function generaLlistaPropietats() {
    let hora_actual = new Date();
    div_llista_propietats.innerHTML =
        `<ul> <li> Valor minim que pot tenir el numero JS: ${Number.MIN_VALUE} </li> 
        <li> Amplada total de la pantalla: ${screen.width} </li>
        <li> Amplada interna de la finestra: ${window.innerWidth} </li>
        <li> Títol de la web: ${document.title} </li>
        <li> Hora actual: 
        ${hora_actual.getHours()}:
        ${hora_actual.getMinutes()}:
        ${hora_actual.getSeconds()} </li>
        </ul>`;
}
//Crida funcio per primera vegada
generaLlistaPropietats();
//Crida funcio cada segon.
setInterval(generaLlistaPropietats, 1000);

// A JS una funcio es un objecte.
