//some Array methods
//array push pop
//array shift unshift

//array push - this method put another element at last position of array

let fruits = ["Mango","Papaya","Orange","Banana"];
console.log("fruits",fruits);

fruits.push("Guava");
console.log("push method fruits",fruits);

//array pop - this method removes last element from array

fruits.pop();
console.log("pop method fruits",fruits);

let popedFruit = fruits.pop();
console.log("poped fruit",popedFruit);
console.log("fruits",fruits);

//array unshift() - this method add elements at the start of array

fruits.unshift("banana")
fruits.unshift("kiwi")
console.log("fruits",fruits);

//array shift()- this method removes starting element from start of array
let removedFruit = fruits.shift();
console.log("remove fruit is ",removedFruit);
console.log(fruits);