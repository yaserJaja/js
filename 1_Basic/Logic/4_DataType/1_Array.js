// [] Array
/*
@ What you learn in this chapter?

[1] Create A new Array
[2] Properties:
      # length
[3] buil-in function:
      # unshift
      # shift
      # push
      # pop
      # concat
      # join
      # slice
      # at
      # indexOf
      # lastIndexOf
      # including
      # splice
      # map
      # filter
      # reduce
      # fill
      # some
      # every
      # find
      # findIndex
      # 
==============
Syntax Method:
==============
[1] unshift:

  [].unshift(value[s]);

  * insert element in the start of the array

  * return new length of array
============================================
[2] shift:

  [].shift();

  * remove start element from an array

  * return it

  * if array empty the method will return undefind
==================================================
[3] push:

  [].push(value[s]);

  * insert element in the end of the array

  * return new length of array
==================================================
[4] pop:

  [].pop();

  * remove last element from an array

  * return it

  * if array empty the method will return undefind
==================================================
[5] concat:

  [].concat(value[s]);

  * insert element in the end of the array

  * return a new array
==================================================
[6] join:

  [].join('separator' | nothing);

  * add all the element of an array to string

  * return a value string
==================================================
[6] slice:

  [].slice([start] | [end]);

  * return array | slice of array | nothing

  if (you don't enter any parameter) {
    return all elements
  } else if (you enter one parameter) {
    return slice of array from start to last element of array
  } else if (you enter two parameters and index start before index end) {
    return slice of array from start to end [not including end]
  } else {
    return empty array
  }
==================================================
[6] at:

  [].at(index);

  * return:
    # if you don't enter any index => first element  
    # if you enter index and it there is inside array => element 
    # else => undefined 
==================================================
[7] indexOf:

  [].indexOf(searchValue, [from index]);

  * return:
    # index of the first occurrence of a value in an array 
    # -1 if not found value 
==================================================
[8] lastIndexOf:

  [].lastIndexOf(searchValue, [from index]);

  [start search from last array]
  * return:
  # index of the first occurrence of a value in an array 
    # -1 if not found value 
==================================================
[9] includes:

  [].includes(searchValue, [from index]);

  * return:
    # a boolean value 
==================================================
[10] splice:

  [].splice(start, countDeleteElement, elementAdded[]);

  can it: 
    Add element
    Delete element
    Replace element

  * return:
    # deleted element in array
==================================================
[11] forEach:

  [].forEach(function (element, index, array) {
    statement
  });
==================================================
[12] map:

  [].map(function (element, index, array) {
    return 
  });

  * return:
    # array contains on operation each element
==================================================
[13] filter:

  [].filter(function (element, index, array) {
    return 
  });

  * return:
    # an array contains filtered elements under a given condition 
==================================================
[14] reduce:

  [].reduce(function (previous, current, index, array) {
    return 
  });

  * return:
    # a single value 
==================================================
[15] fill:

  [].fill(value, start, end);

  * edit orginal array
  * if specify any parameter the method will fill array value undefined
==================================================
[16] every:

  [].every(function (element, index, array) {
    return condition
  });
  
  # if condition is true for all element the method return true
  # else false
==================================================
[17] some:

  [].some(function (element, index, array) {
    return condition
  });
  
  # if condition is true for any element the method return true
  # else false
==================================================
[18] find:

  [].find(function (element, index, array) {
    return condition
  });
  
  # if condition is true method return first value conform to condition
  # else undefined
==================================================
[19] findIndex:

  [].findIndex(function (element, index, array) {
    return condition
  });
  
  # if condition is true method return first index conform to condition
  # else -1
==================================================
[20] copyWithIn:

  [].copyWithIn(target, startFrom, toEnd)
  
  # update an array
==================================================

*/