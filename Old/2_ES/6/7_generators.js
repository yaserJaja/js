/* 

function* name () {
  yield value;
  .
  .
}

function *name () {
  yield value;
  .
  .
}

function*name () {
  yield value;
  .
  .
}

*/

function* calc(...nums) {
  let sum = 0;
  for (i of nums) {
    sum += i;
  }
  yield "Sum: " + sum;

  let multi = 1;
  for (i of nums) {
    multi *= i;
  }
  yield "Multiplaction: " + multi;
}
const result = calc(1, 2, 3, 4);
console.log(result.next().value);
console.log(result.next().value);
