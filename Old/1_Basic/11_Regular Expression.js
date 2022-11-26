/*

//Syntax:
  * /pattern/modifier(s);
  * new RegExp("pattern", "modifier(s)");

// Modifiers => Flags
  * case-insenstive => i 
  * global => g
  * Multiline => m

// Ranges:
  * x OR y => (x|y)
  * Range1 and Range2 => [Rang1Range2]
  * Any Character without range => [^range]
  * 0 To 9 => [0-9]
  * letters => [a-z] [A-Z]

// Character Classes
  Syntax: \Character

character:
  * . => Any Character
  * w => [a-z A-Z 0-9 _]
  * W => [^a-z A-Z 0-9 _]
  * d => [0-9]
  * D => [^0-9]
  * s => [whitespace]
  * S => [^Whitespace]
  * b => Begining of a word => \bword OR End  of a word word\b
  * B => ^Begining OR End  of a word

Quantifier:
  * n+ => one OR more
  * n* => zero OR more
  * n? => zero OR one
  * n{x} => x time
  * n{x, y} => from x to y times
  * n{x, } => x at least time
  * n$ => the string that end with n 
  * ^n => the string that start with n
  * ?=n => follow by n
  * ?!n => not follow by n
    
// Methods:
1. Search:
  * input.match(pattern)
2. Test
  * pattern.test(input)

*/
