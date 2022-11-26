/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Array.from(iterable);
Array.of(vlaue[s]);
Array.entries();
Array.vlaues();
Array.keys();
Array.find(arrowFunction); return first value
Array.findIndex(arrowFunction); return first index

*/

let array = ["Yaser", "Shahd"];

for (const key in array) {
  console.log(array[key]);
}

for (const value of array) {
  console.log(value);
}

console.log(Array.from("Yaser"));

console.log(Array(1, 2, 3));

console.log(Array(5));

console.log(Array.of(5));

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.find((x) => x <= 5));
console.log(numbers.findIndex((x) => x <= 5));

const names = ["Yaser", "Shahd"];
const namesKeysVlaues = names.entries();
const namesKeys = names.keys();
const namesValues = names.values();
// console.log(...namesIndex);
for (const i of namesKeysVlaues) {
  console.log(i);
}
for (const i of namesKeys) {
  console.log(i);
}
for (const i of namesValues) {
  console.log(i);
}
