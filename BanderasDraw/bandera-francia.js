function iniciar() {
    let boton= document.getElementById('boton');

    var elemento= document.getElementById('lienzo');
    
    tablero= elemento.getContext('2d');

    boton.addEventListener('click', dibujar, false);
}

function dibujar() {
    tablero.beginPath();

    tablero.fillStyle= '#1a237e';
    tablero.fillRect(0,0,200,200);

    tablero.fillStyle= '#FFFFFF'
    tablero.fillRect(200,0,200,200);

    tablero.fillStyle= '#E74C3C';
    tablero.fillRect(400,0,200,200);
}

window.addEventListener("load", iniciar, false);