function hello(name) {
  console.log(`Hello ${name}!`);
}

function bye(name) {
  console.log(`Good Bye ${name}!`);
}

class Person {
  constructor(name) {
    this.name = name;
  }
  printHello() {
    console.log(`Hello ${this.name} From Class Person`);
  }
}

export { hello, bye, Person };

export function ex() {
  console.log("Hi I am");
}
