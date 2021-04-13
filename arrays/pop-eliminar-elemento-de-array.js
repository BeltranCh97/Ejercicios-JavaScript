import { travelToCities } from './push-agregar-elemento-a-arreglo';
let atlantaTravel = travelToCities.pop();
atlantaTravel.transportMode = "hovercraft";
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
console.log(last.transportMode);
travelToCities.push(atlantaTravel);
