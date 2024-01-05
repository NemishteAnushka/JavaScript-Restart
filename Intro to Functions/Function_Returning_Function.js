function outerFunction(){
    console.log("outer Function");
    function innerFunction(){
        console.log("inner Function");
    }
    return innerFunction;
}
const returnedFunction = outerFunction();
returnedFunction(); // this will output "inner Function"