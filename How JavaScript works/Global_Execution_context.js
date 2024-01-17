//1) compile code
//compile phase 
//a)Tokenizing - means small samll chunks of code
//b)parsing - we use that small chunks and form (Abstract Syntax Tree - AST)  AST might have nodes representing variable declaration, assignment, string literal, and a function call.
//c)code generation - and AST helps in generating code and optimizing  the execution process.

//phase 1 compliation phase
//-> Early error checking
//-> Determining Appropiate Scope for Variables

//Phase 2 Code execution phase 
//->In js code executes inside execution context


//1)Global execution context
//-> creation phase
//-> code execution phase
console.log(this)
console.log(window)
console.log(firstName)
var firstName = "Harshit" //the variables which are not inside the function are known as global variables
console.log(firstName)