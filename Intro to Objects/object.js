//objects are referance type
//objects store key value pairs
//objects dont have index

//how to create object 
const person = {name:"Anushka",age:21,field:"Frontend Developer"};
console.log("person",person);

//how to access data from objects
//using dot notation
console.log("name",person.name);
console.log("age",person.age);
console.log("field",person.field);
//using [] bracket notation
console.log(person["name"]);

//how we can use array in object

const people = {
    name:"Anuu",
    age:21,
    hobbies:["Dancing","cooking","learning new things"]
}
console.log(people);
console.log(people.hobbies);
console.log(people.hobbies[2]);

//how to add key value pairs to objects
people.gender="female";
console.log(people);