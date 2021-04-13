//Función de devolución de llamda
/* 
Un callback es una función que es utilizada como parametro en otra función
*/

function myAssistant(time, callbackFunction) {
  console.log(
    "I am your personal assistant, and I am happy to help with your request"
  );
  callbackFunction(time);
}

function recordShow(hora) {
  console.log("Tu recordatorio quedó planificado para las " + hora);
}
myAssistant("6pm", recordShow);

function myAsistente(hora, callback) {
  console.log(
    "Hola, soy tu asistente personal y estoy feliz de poder ayudarte"
  );

  callback(hora);
}

function recordatorio(hora) {
  console.log("Tu recordatorio quedó planificado para las " + hora);
}

myAsistente("6am", recordatorio);
