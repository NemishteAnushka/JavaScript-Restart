//arrays are ordered collections of elements

//how to create array;

let fruits = ["Mango","Papaya","Chickoo","Guava"]
console.log("fruits array",fruits);

//array indexings
console.log(fruits[0]);
console.log(fruits[2]);

//we can create array with any data type

let mixedArray = [1,2,3,"Anushka",5.6,null ,undefined];
console.log("mixed Array",mixedArray);

//Arrays are mutable

let car = ["BMW","i20","Creata","Baleno"];
console.log("car",car);
car[1]="i10";
console.log("cars after change",car);

//reference type 

//in javaScript the typeof Array is Object so to check if array is really array we have method called isArray()
//this method true if variable is assigned to array else false
let arr=[1,2,3,4]

console.log("type of array",typeof arr)
console.log(Array.isArray(arr));
