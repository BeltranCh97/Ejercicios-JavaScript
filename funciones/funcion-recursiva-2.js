/* 
Recursividad es cuando una función se llama a sí misma desde su propia definición. Siempre debe haber una condición o final, o caso base, 
para que la función no se llame a sí misma para siempre.
*/
function updateAllNames(string, oldPart, newPart) {

  if (string.includes(oldPart) === false) {
    return string;
  }

  string = string.replace(oldPart, newPart);
  return updateAllNames(string, oldPart, newPart);
}

let texto = "El texto t1ene err0res y s3 t1ene qu3 cambiar";
let oldPart = ["t1ene", "err0res", "s3", "t1ene", "qu3"];
let newPart = ["tiene", "errores", "se", "tiene", "que"];

console.log(updateAllNames(texto, oldPart[0]), newPart[0]);

/* function ftl(n) {
    if (n === 1) {
        return 1;
    }
    return n * ftl(n - 1);
}

console​.log(ftl(3)); */