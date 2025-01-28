// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let nombres = document.getElementById('amigo').value.trim().toLowerCase();

    if (nombres != '') {
        if (amigos.includes(nombres)) {
            alert('Ese nombre ya fue ingresado o se repite');
            limpiarCampo();
            return;
        } else {
            amigos.push(nombres);
            limpiarCampo();
            actualizarLista();
        }

    } else {
        alert('Por favor inserte un nombre');
        return;
    }
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li>No hay amigos en la lista.</li>';
        return;
    }

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }

}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[amigoAleatorio];
        let elementoHTML = document.querySelector('h1');
        elementoHTML.innerHTML = `Nuestro amigo secreto es: <br> ${amigoElegido}`;
    } else {
        alert("La lista de amigos está vacía!");
        return;
    }
}

function reiniciarJuego() {
    
    amigos = [];

    // Limpia la lista visual
    document.getElementById('listaAmigos').innerHTML = '<li>No hay amigos en la lista.</li>';

    // Limpia el resultado del sorteo
    document.querySelector('h1').innerHTML = 'Amigo Secreto';

    // Limpia el campo de entrada
    document.querySelector('#amigo').value = '';

    alert('El juego ha sido reiniciado.');
}
