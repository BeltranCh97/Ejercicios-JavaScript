let list = [59, 99, 101, 5, 30];

function larger(a, b) {
  return a > b ? a : b;
}
function maximum(array) {
  let max = 0;
  for (let num of array) {
    max = larger(max, num);
  }

  return max;
}
console.log('El array contiene los siguientes valores \n'+list);
console.log('El número mas alto del array es: '+maximum(list));
