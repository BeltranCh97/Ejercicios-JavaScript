function iniciar() {
  propLength = document.getElementById("propiedadLength");
  propIncludes = document.getElementById("propiedadIncludes");
  propReplace = document.getElementById("propiedadReplace");

  propLength.addEventListener(
    "click",
    function calcularLongitud() {
      var cajaTexto = document.getElementById("oracion").value;

      console.log(cajaTexto.length);
      window.alert(cajaTexto.length);
    },
    false
  );

  propReplace.addEventListener(
    "click",
    function reemplazarTexto() {
      var cajaDeTexto = document.getElementById("oracion").value;

      var textoAReemplazar = document.getElementById("textoAEncontrar").value;
      var textoDeReemplazo = document.getElementById("textoDeReemplazo").value;

      if (textoAReemplazar.length > 0 && textoDeReemplazo.length > 0) {
        window.alert(
          "El texto nuevo queda: " +
            cajaDeTexto.replace(textoAReemplazar, textoDeReemplazo)
        );
        console.log(
          "El texto nuevo queda: " +
            cajaDeTexto.replace(textoAReemplazar, textoDeReemplazo)
        );
      } else {
          window.alert("Las cajas de texto a encontrar y reemplazo deben estar llenas");
        console.log(
          "Las cajas de texto a encontrar y reemplazo deben estar llenas"
        );
      }
    },
    false
  );

  propIncludes.addEventListener('click', function verificarCotenido() {
      var cajaDeTexto= document.getElementById('oracion').value;
      var textoAEncontrar= document.getElementById('textoAEncontrar').value;

      if (cajaDeTexto.includes(textoAEncontrar)) {
          window.alert('En la caja de texto si se encuentra el texto a encontrar');
      }else{
        window.alert('Busqueda sin resultado');
      }
  }, false);

}

window.addEventListener("load", iniciar, false);
