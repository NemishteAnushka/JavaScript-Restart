// const person = {
//     firstName : "Anushka",
//     age:21
// }
//  person.email="anushka@gmail.com"
//  person.gender="female"
//  person.key = "key1"
// const person2 = {...person}
// console.log(person);
// console.log(person2);

//we can clone obj on basis of Object.assign

const obj1 = {
    item1: "fruits",
    item2: "Vegetables",
    item3: "dal"
};

// Adding a new property to obj1
obj1.item4 = "new item";
obj1.item5="new item 5"
console.log(obj1);

// Shallow cloning using Object.assign
const obj2 = Object.assign({}, obj1);

console.log(obj2);
