//functions returning function
// function outerFunction(){
//     function innerFunction(){
//         console.log("I am inner function")
//     }
//     return innerFunction
// }
// const ans = outerFunction()
// ans()
// console.log(ans)


// innerFunction access outerfunctions local memory like local variables when we return innerfunction it takes outerfunctions variables also and return this is know as closures

//This ability of the inner function to remember and access the variables from its outer scope is called a closure.     

// a closure gives you access to an outer function's scope from an inner function.
function printFullName(fName, lName) {
 
  function printName() {
    console.log(fName, lName);
  }
  return printName;
}

const result = printFullName("Anushka", "Nemishte");
console.log(result);
result();
