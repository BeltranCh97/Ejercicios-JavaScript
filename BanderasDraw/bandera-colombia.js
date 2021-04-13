function iniciar() {

    let boton= document.getElementById('boton');
    var elemento= document.getElementById('lienzo');

    tablero= elemento.getContext('2d');

    boton.addEventListener('click', dibujar, false);
}

function dibujar() {
    tablero.beginPath();

    tablero.fillStyle= 'yellow';
    tablero.fillRect(0,0,200,200);
    
    tablero.fillStyle= 'blue';
    tablero.fillRect(200,0,200,200);
    
    tablero.fillStyle= 'red';
    tablero.fillRect(400,0,200,200);
}

window.addEventListener('load', iniciar, false);