let wallet = 50;
function inYen(dollars) {
  let yen = dollars * 113;
  return yen;
};
function inBaht(dollars) {
  let baht = dollars * 33;
  return baht;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');