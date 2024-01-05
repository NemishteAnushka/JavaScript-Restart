// how to iterate objects

const person = {
    name:"Anushka",
    age:21,
    hobbies:["dance","playing","cooking"]
}

console.log("person",person);

//there are two ways to iterate objects
//1) for in loop


for(let key in person){
    //console.log(key); // this will print only keys in object
    //console.log(person[key]); // this will print values
    console.log(`${key} : ${person[key]}`);
}

//2) object keys
console.log(Object.keys(person)) // this will give keys in iteration in array form
