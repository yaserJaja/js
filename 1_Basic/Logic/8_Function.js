/*
What will i learn in this chapter?
  [1] Create Function
  [2] Calling It
  [3] Assign default value to Paramaters
  [4] Rest Parameters
  [5] Annonymouse 
  [6] Arrow
  [7] Calling itself
  [8] Hoisting
  [9] Scope
*/

/*

@ Create Function:
  # function name(Parameters) {
    // body of function
  }

@ Calling It:
  # name(Arguments);

@ Assign default value to Paramaters:
  # function name(parameter = defaultValue) {
    // body of function
  }
  # Note: if you don't assign default value => default value is undefined
  # if you pass more parameters than specified they will be ignored

@ Rest Parameters:
  # function name(...parameter) {  this parameter will become an array 
    // body of function
  }

@ Anonymouse:
  const name = function() {
    // body of function
  }

@ Arrow:
  # const name = (parameters) => {
    return result;
  }

  # const name = Parameter => result

  # const name = _ => result

@ Calling itself:
  # (function() {
    // block of code
  })()

@ Hoisting:
  # Hoisted Declare the function or variable at the top of the code
  # function will do hoisted
  # if you won't that you can use anonymouse function with let
  # var hoisted but let not hoisted
  
@ Scope:
  # Global
    * var => any thing without function

    * let => any outside {block of code}

  # Local:
    * var => function 

    * let => any { Block Of Code }
*/
