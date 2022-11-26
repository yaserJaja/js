/*
function name (...parameters) {
  block of code
}
parameters equal array

Dynamic Function:
var name = new Function ('parameter', 'return parameter');\
*/

function totals(...numbers) {
  let total = 0;
  for (var i of numbers) total += i;
  console.log("Total: " + total);
}
totals(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("======================");

var printNames = new Function("...names", "return names");
console.log(printNames("Yaser", "Shahd"));
