/*
@ What you learn in this chapter?

[1] Create A new Object
[2] Create Properties And Methods In The Object
[3] Call Properties And Methods From Object
[4] Keyword This
[5] Object With Loops
[6] Adding A New Property 
[7] Deleting A Property 
[8] Getter And Setter Function
[9] Meta Data And Descriptor
*/

/*
[1] Create A New Object:

  # const name = {

      // properties:
          name1: value1,
          name2: value2,

      // methods:
          name: function() {
            // statement
          }
    }
  
  # By new Keyword:
    let objName = new Object({} | objName);

  # By create Method:
    let objName = Object.create({} | objName);

  # By assign Method:
    * Object.assign(target, source);
    * let objName = Object.assign({}, source);
  

[3] call property from object:

  # objectName.propertyName => Dot Notation
  # objectName['propertyName'] => bracket Notation 
  # objectName[expression] => Dynamic

@ call method from object:

  # objectName['methodName']()
  # objectName.methodName()

[4] Keyword This:
  #  In an object method, this refers to the object.
  #  Alone, this refers to the global object.
  #  In a function, this refers to the global object.
  #  In a function, in strict mode, this is undefined.
  #  In an event, this refers to the element that received the event.
  #  Methods like call(), apply(), and bind() can refer this to any object.

[5] Object With Loops
    for (let property in Object) {
      // body of loop
    }

[6] Adding A New Property:
    objectName.newPropertyName = value

[7] Deleting A Property:
    delete objectName.propertyName

[8] Getter And Setter
  # Creating:
    * get name() {
      return this.propertyName;
    }
    * set name(parameterName) {
      this.property = parameterName;
    }
  # Calling:
    * objectName.getterName
    * objectName.setterName(value)

[9] Meta Data And Descriptor:
  # Object.defineProperty(objectName, propertyName, {
      writable: boolean Value, => Do you want allow rewrite 
      enumerable: boolean Value, => Do you want show in the loop
      configurable: boolean Value,
        => Do you want allow to delete operator remove this property
        => Do you want allow redefine
      value: any Value,
    });

  # Object.defineProperties(objectName, {
      property: {
        discriptor
      },
      property: {
        discriptor
      },
    });
  
  # Object.getOwnPropertyDescriptor(objectName, 'propertyName')
  
  # Object.getOwnPropertyDescriptors(objectName)
*/
