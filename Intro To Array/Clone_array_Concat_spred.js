// how to clone array 
//there are 3 ways to clone array
//1)using slice method
 let arr1 = ["item1","item2"];
 arr1.push("item3")
// let arr2 = arr1.slice(0);
// console.log("array1",arr1);
// console.log("array2",arr2);
//2) using concat 
let arr2 = [].concat(arr1)
 console.log("array1",arr1);
console.log("array2",arr2);

//3) spread operator
let array1 = ["item1","item2"];
//let array2 = [...array1,"item4","item5"];
// console.log(array2);

// how to concatenate two arrays
let array3 = ["item 5","item 6","item7"]
let array2 = [...array1, ...array3];
console.log(array2);
