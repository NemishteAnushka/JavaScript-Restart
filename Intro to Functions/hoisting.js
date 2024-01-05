// hoisting

console.log(x);
var x = 5;
console.log(x);


// using let or const
// console.log(a);
const a = 10;
console.log(a);

//function hoisting

sayHello();
function sayHello(){
    console.log("Hello");
}

//function expression
// Hello();
// const Hello = function(){
//     console.log("Hello");
// }


//Arrow function
// Hello();
// const Hello = () => console.log("Hello");
