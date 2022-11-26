/* 

4 Ways To Declare a Variable:
  * using var 
  * using let 
  * using const
  * using nothing

Syntx:
  [keyword] name = value;

Identifier:
* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter Or $ Or _
* Names are case sensitive
* Reserved words cannot be used as names

You can declare many variables in one statement.

Default value to variable if you don't assign any value is undefined

- var:
-- can be Redeclared.
-- hoisted to the top and can be initialized at any time.
   Will declare a variable on the top and assign value in this place
-- can be accessed from outside the block. global and function 

- let:
-- cannot be Redeclared.
-- must be Declared before use. wont hoisted 
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
