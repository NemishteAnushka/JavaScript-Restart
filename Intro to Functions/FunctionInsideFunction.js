//Functions inside function

function app(){ //here you can take any function (function declaration,function expression,arrow function)
    const myFunct = ()=> console.log("Inside myFun which is inside app function");
    const addTwoNum = (num1,num2) => num1+num2;
    const mulTwoNum = (a,b)=>a*b;
    console.log("inside app");
    myFunct();
    console.log(addTwoNum(5,5));
    console.log(mulTwoNum(2,8));
}
app()