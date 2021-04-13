/* En este ejemplo veremos como añadir un elemento a un array con el método push.*/

// Creación de un array con varios destinos de viaje dentro con sus respectivas propiedades "objetos"
var travelToCities = [
  boatSantaCatalina = {
    destination: "Santa Catalina",
    transportMode: "boat",
    cost: 200,
    country: "San Andres y Providencia",
  },
  airplaneNewYork = {
    destination: "New York",
    transportMode: "airplane",
    cost: 200,
    country: "UNKNOWN",
  },
  airplaneCali = {
    destination: "Cali",
    transportMode: "boat",
    cost: 200,
    country: "UNKNOWN",
  },
  boatSanAndres = {
    destination: "San Andres",
    transportMode: "boat",
    cost: 200,
    country: "San Andres y Providencia",
  }
];

// Creación de una variable a partir del arreglo con el objeto en la posicion 2
let Cali= travelToCities[2];
// Impresion de la propiedad destination del objeto airplaneCali que está ubicado en la posicion 2 
console.log(travelToCities[2].destination);

// Creación de una variable que guarda el objeto de la ultima posicion del array
let last = travelToCities[travelToCities.length - 1];
// Impresión de la propiedad destination del objeto creado previamente
console.log(last.destination);

// Creación del objeto boatAtlanta
let boatAtlanta = {
  destination: "Atlanta",
  transportMode: "boat",
  cost: 200,
  country: "Hoptopia",
};
// Mediante el método push se agrega el elemento boatAtlanta al array travelToCities
travelToCities.push(boatAtlanta);
// Creación de una variable que guarda el objeto de la ultima posicion del array
last = travelToCities[travelToCities.length - 1];
// En este caso se va a imprimir la propiedad del elemento boatAtlanta ya que fue el elemento que se agrego de ultimo
console.log(last.destination);
