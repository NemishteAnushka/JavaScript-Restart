// Maps
// map is an iterable
// store data in ordered fashion
// duplicate keys are not allowed like objects
// diffferent between maps and object
// object can only have string or symbol as key
// but Map can take any type of value for the key.

//object literal
// const person = {
//     name: "John",
//     age: 30,
//     1:"one"
// }
// console.log(person);

//in objects keys are 99.9% string and 0.01 % symbol type of
//  for(let key in person){
//     console.log(`Type of key is ${typeof key} and key is ${key}`);
//  }

//now i will use maps object it also store key value pairs

const person = new Map();
person.set("firstName", "Anushka");
person.set("age", 21);
person.set(1, "one");
//  person.set([1,2,4,5],"arrayss")
console.log(person);
console.log(person.get("firstName"));
console.log(person.get("age"));
console.log(person.get(1));

//i want to print all keys

console.log(person.keys());

//loop

//  for(let key of person.keys()){
//     console.log(key ,typeof key);
//  }

// For of loop in map object

for (let [key, value] of person) {
  // so i destructed
  console.log(key, value); // this gives key value pair in
}

//we can also declare map like this

const info = new Map([
  ["firstName", "Anushka"],
  ["age", 21],
]);
console.log(info);

console.log("size",info.size);
const person1 = {
    firstName:"Anushka",
    age:21
}

const extraInfo = new Map();
extraInfo.set(person1,{age:21,gender:"female"})
console.log(person1);
console.log(extraInfo.get(person1).gender);