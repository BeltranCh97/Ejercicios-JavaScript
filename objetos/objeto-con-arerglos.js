var myBackpack = {
  food: ['carne', 'apple', 'pear'],
  equipment: ['navaja', 'vinoculares', 'brujula'],
  clothing: ['chaqueta', 'sombrero']
};

console.log('La comida dentro de la mochila es: '+myBackpack.food + '\n Los accesorios son: ' + myBackpack.equipment 
+ '\n La ropa dentro es: ' + myBackpack.clothing);

for(var elemento of myBackpack.equipment){
    console.log(elemento);
}

