/*
# With spread operator 
let array1 = ['vlaue1', 'value2'];
let array2 = [...array1];

let array3 = [...'string'];

# Without spread operator
let array3 = array1;

*/

let pepole = ["Yaser", "Shahd"];
let family = [...pepole];
family.push("Ammar");
console.log(`Pepole are ${pepole}`);
console.log(`family are ${family}`);

console.log(`====================`);

let programmer = ["Yaser"];
let men = programmer;
men.push("Ammar");
console.log(`Programmer are ${programmer}`);
console.log(`Men are ${men}`);

console.log(`====================`);

let letters = [..."ABCDEFG"];
console.log(letters);
