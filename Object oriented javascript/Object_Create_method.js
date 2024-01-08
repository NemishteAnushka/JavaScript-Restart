const obj1 = {
    key1:"Value1",
    key2:"Value2"
}

//object.create() gives the refreance of one object to another
// create an object and set its prototype, which means that the new object will inherit properties and methods from the specified prototype object.
const Obj2 = Object.create(obj1);
Obj2.key3 = "Value3"
console.log(Obj2.key1);
console.log(Obj2);
console.log(Obj2.__proto__)
// Creating a simple object as a prototype
const personPrototype = {
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  // Creating a new object with personPrototype as its prototype
  const john = Object.create(personPrototype);
  
  // Adding properties to the new object
  john.name = "John Doe";
  john.age = 30;
  
  // Using a method from the prototype
  john.greet(); // Outputs: Hello, John Doe!