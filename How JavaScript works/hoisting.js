//hoisting
//Hoisting is a behavior in some programming languages, particularly in JavaScript, where variable and function declarations are moved to the top of their containing scope during the compilation or interpretation phase. This means that you can use a variable or a function in your code even before it's declared.
console.log(firstName);
var firstName = "Anushka";
console.log(firstName)

//In the above example, the declaration var x; is hoisted to the top, but the assignment (x = 5;) remains in place. Therefore, the first console.log(x) outputs undefined, and the second one outputs 5.

//Function declarations are also hoisted in a similar way:
foo(); // Outputs: "Hello, world!"

function foo() {
  console.log("Hello, world!");
}

//In this example, the function declaration is hoisted to the top, allowing the function to be called before its actual position in the code.

// It's important to note that hoisting is a concept specific to certain languages like JavaScript, and not all languages exhibit this behavior. Additionally, it's generally considered good practice to declare variables at the top of their scope to avoid unexpected behavior due to hoisting.







