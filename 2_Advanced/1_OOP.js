// OOP:

/*
What will i learn in this chapter?
  [0] Factorire Function
  [1] Constructor Function
  [2] New Syntax
  [3] this Keyword Reserved
  [4] static Keyword Reserved
  [5] Inheritance [extends, super => Keyword Reserved]
  [6] Access Modifiers
  [7] Encapsulation
  [8] Prototype
*/

/*

@ Factorire Function:
    function name (parameter) {
      return {
        property: parameter;
      }
    }

    const obj = name(argument);

@ Constructor Function:
  function Name(prarameter) {
    this.propertyName = parameter || defaltValue; 
    this.propertyName = Ternary Condition; 
    this.methodName = function () {
      block of code
    }
  }

  let objectName = new Name(Argument);

@ New Syntax:
  class Name {
    constructor(prarameter) {
      // Prperties:
      this.propertyName = parameter || defaltValue; 
      this.propertyName = Ternary Condition; 
      this.methodName = function () { this is a property, this is not a method
        block of code
      }
    }
    // Method:
    methodName() {
      block of code
    }
  }

@ This Keyword:
  # Point on created object

@ static Keyword:
  # You can only access it from the Blue Print
  # If you call static property from object will return undefined 
  # If you call static method from object will return error 
  # use this replace by ClassName
  
  class Name {
    static property = value;
  
    static methodName() {
      Name.propertyStatic = ... but don't put this.propertStatic
    }
  }

@ Inheritance:
  # Include class content in another class
  # super point on property and method from parent class

  class Parent {
    constructor(propertParent) {
      this.propertParent = propertParent;
    }
  }
  class Derived extends Parent {
    constructor(propertParent, propertyDerived) {
      super(propertParent);
      this.propertyDerived = propertyDerived;
    }
  }
@ Private Property:
  # Can't be accessed directly
  # It is not included to other classes

  class Name {
    #property;
    constructor(property) {
      this.#property = property;
    }
  }

@ Encapsulation:
  # Guards The Data Against Illegal Access
  # Helps To Achieve The Target Without Revealing Its Complex Details.
  # Will Reduce Human Errors.

@ Prototype:
  # Add a new feature [property, method] to any class
    className.prototype.feature = value;
  # Show all feature to class 
    className.prototype
  # any object extends all feature from class that create from it 
    object.__proto__
*/