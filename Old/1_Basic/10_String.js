/*

Idom:
chain Methods

To Access to char from String:
  1. By [index]
  2. By Method charAt(index)
Extracting String Parts
  1. slice (start, end)
  2. substring (start, end)
  3. substr (start, length)
Converting a String to an Array
  1. split

**********************************************
Property:
  length
**********************************************

Methods:

1.  slice : 
    Syntax: slice(start [Mand], end  [Opt] Not included)
    job: return extracted part in a new string.
    if start is Negative => start form end
    if start > end => No thing
*********************************************
********************************************* 
2.  substring : 
    Syntax: substring(start, end [not included])
    job: return extracted part in a new string.
    if start is negative => start from 0
    if start > end => swap
*********************************************
********************************************* 
3.  substr : 
    Syntax: substr(start, length)
    job: return extracted part in a new string.
    you can use negative index
    if start is Negative => start form end
    if length is Negative => No thing
*********************************************
********************************************* 
4.  replace : 
    Syntax: replace(searchValue, replaceValue)
    job: replaces a specified value with another value in a string.
    replaceAll
*********************************************
********************************************* 
5. toUpperCase()
6. toLowerCase()
7. repeat(count)
8. trim()
*********************************************
********************************************* 
9.  concat : 
    Syntax: concat(...new Part)
    job: instead of the plus operator.
*********************************************
********************************************* 
10.  charAt : 
    Syntax: charAt(position)
    job: returns the character at a specified.
*********************************************
********************************************* 
11.  split : 
    Syntax: split(separator, limit[count piece])
    job: splits a string into an array of substrings.
*********************************************
********************************************* 
12.  startsWith : 
    Syntax: startsWith(searchValue, start)
    job: returns true if a string starts with a specified string.
*********************************************
********************************************* 
13.  endsWith : 
    Syntax: endsWith(searchValue, length[!!!Not index => start from 1])
    job: retrue true if a string ends with a specified string.
*********************************************
********************************************* 
14.  includes : 
    Syntax: includes(searchValue, start)
    job: returns true if a string contains a specified string.
*********************************************
********************************************* 
15.  indexOf : 
    Syntax: indexOf(searchValue, start)
    job: returns the [position of the first] occurrence of a value in a string.
    ,returns -1 if the value is not found
*********************************************
********************************************* 
16.  lastIndexOf : 
    Syntax: lastIndexOf(searchValue, start)
    job: returns the index (position) of the last occurrence of a specified value in a string.
    , searches the string from the end to the beginning.
    , returns the index from the beginning (position 0).
    , returns -1 if the value is not found.
*********************************************    
ECMAScript 2017:
  * padStart
  * padEnd
*/

/*



*/
