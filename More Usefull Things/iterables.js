//iterables are those which we can use for of loop
//string,array are iterables

const name = "Anushka";

for(let fname of name){
    console.log(fname);
}

const arr = ["item1","item2","item3","item4","item5"];

for(let arrayy of arr){
console.log(arrayy);
}

//objects are not iterable
// const user = {key1:"value1",key2:"value2"}
// for(let item of user){
//     console.log(item);
// }

//array like object
//array like object are those on which length property can be used and can be access by index 
//example string

const fruit = "Mango";

console.log(fruit.length);
console.log(fruit[2]);

//stors any daata type

