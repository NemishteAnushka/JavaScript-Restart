//Primitive data type
let num1 = 5;
let num2 = num1; // num2 holds the value of num1 

console.log("Num1",num1);
console.log("Num2",num2);

num1++ //incremented the value of num1 by 1 
console.log("Num1",num1);
console.log("Num2",num2); // modifying num1 is not affected for num2 as it is the copy of original value num1.


// referance data type

let array1 = ["item1","item2"];
let array2 = array1; // array2 now references the same array as array1
console.log("array1",array1);
console.log("array2",array2);
array1.push("items3");
console.log("array1",array1);
console.log("array2",array2);//as array 2 is refrance of array1 it modifys according to array 1
