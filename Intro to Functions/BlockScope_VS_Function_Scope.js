// block scope vs function scope
//let and const are block scope
//var is function scope

//blocked scope
if(true){
    let x = 10;
    console.log(x); // accessible here
}
// console.log(x); error : x is not defined


//function scope
if(true){
    var a = 110;
    console.log(a); // accessible here 
}
console.log(a); // accessible here

