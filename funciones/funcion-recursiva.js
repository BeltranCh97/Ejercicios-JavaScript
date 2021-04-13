/* 
Recursividad es cuando una función se llama a sí misma desde su propia definición. Siempre debe haber una condición o final, o caso base, 
para que la función no se llame a sí misma para siempre.
Código de ejemplo:
La función ftl toma un número n y lo multiplica por todos los números enteros anteriores. Entonces, ftl(3) es 3 2 1. Cada vez que una función
realiza recursividad, resta 1 del valor del argumento hasta que se cumpla el caso de base de n === 1.

ftl(3)→(3 * ftl(2))

ftl(2)→(2 * ftl(1))

ftl(1)→1

Entonces, ftl(3) devuelve (3 * (2 * (1))) que es 6.
*/

function ftl(n) {
    if (n === 1) {
        return 1;
    }
    return n * ftl(n - 1);
}

let resultado= ftl(3);
console.log(resultado);