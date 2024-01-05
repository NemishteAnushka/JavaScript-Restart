const myArray = ["item1","item2","item3"];
console.log("myarray",myArray);


// start delete insert

//splice delete
// myArray.splice(1,1);
// console.log("myArray after splice delete",myArray);

// insert
// myArray.splice(1,0,"inserted item");
// console.log("myArray with insertition",myArray);

//delete and insert together
// myArray.splice(1,1,"newItem instead of 1st one");
// console.log("myArray delete and insert",myArray);

//deleting element from end
myArray.splice(-1);
console.log("myArray after deleting last element",myArray);