/*
ES6 => let, const

[keyword] name = value;
- keyword [ var | let | const | nothing ]
- start name with [ $ | _ | letter ]

- var:
-- can be Redeclared.
-- hoisted to the top and can be initialized at any time. You can use before declare
-- can be accessed from outside the block. global and function 

- let:
-- cannot be Redeclared.
-- must be Declared before use.
-- have Block Scope: cannot be accessed from outside the block. any {}

- const:
-- read only
-- cannot Reassigned.
-- cannot redeclared.
-- must assignment value in the start
-- have Block Scope
-- Use const when you declare:
---- A new Array
---- A new Object
---- A new Function
---- A new RegExp
*/

let x = 10;
if (true) {
  let x = 11;
  console.log(x); // x = 11
}
console.log(x); // x = 10

var y = 10;
if (true) {
  var y = 11;
  console.log(y); // y = 11
}
console.log(y); // y = 11

// ========================================= //

// t = 10;
// let t; // error: Cannot access 't' before initialization

z = 10;
var z;
console.log(z);

// ========================================== //
