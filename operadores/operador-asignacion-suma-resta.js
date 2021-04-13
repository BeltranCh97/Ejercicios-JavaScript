/* En este ejercicio la hormiga tiene 40 semillas y el saltamontes 0 semillas, mediante la asignación de resta se le quitan
10 semillas de regalo a la hormiga y mediante la asignación de suma se le regalan 10 semillas al saltamontes */

let ant = 40;
let gift = 10;
let grasshopper = 0;
ant -= gift;
grasshopper += gift;
console.log(
  "The Ant has " +
    ant +
    " seeds, and the Grasshopper has " +
    grasshopper +
    " seeds"
);

/*Con el operador de asignación de suma a "x" que equivale a 3, se le suma 2 con el operador de asignación de
 suma para que de un total de 5*/

let x = 3;
x += 2;

console.log(x);
