// function myFunc2(){
//     console.log("inside my func 2")
// }

// function myFunc(a){
//     console.log("hello");
//     a();
// }
// myFunc([1,2,5,6]) function can be array
// myFunc("Anushka") can be string
// myFunc({name:"ANUSHKA"}) can be object


// myFunc(myFunc2)

function doSomething(callback){
    console.log("Do Something");
    callback();
}

function greet(){
    console.log('Hello');
}

doSomething(greet)