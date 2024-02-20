//synchronous programming vs asynchronous programming
//synchronous programming - : 
// In synchronous execution, each operation or task is performed one at a time in a sequential order.
// If there is a function or operation that takes time to complete, the entire program waits until that operation finishes before moving on to the next one.
// This can lead to blocking, where the program is unresponsive until the current task is completed.
// console.log("script starts");

// for(let i = 1 ; i<=10000 ; i++){
//     console.log("inside loop")
// }

// console.log("script end")

//in this example the clg script start will 1st execute and for loop it will take time to execute and then clg end will execute
//In the above example, "script end" will be printed after the time-consuming loop finishes, causing a delay in the entire program.


//Asynchronous javascrip

// console.log("script start")
// function myFunction (){
//     console.log("inside function")
// }
// setTimeout(myFunction,1000) // this accepts two arguments function and time in milisec

// console.log("script end")

//now i will use settimeout with 0ms
// console.log("script start")

// setTimeout(() => {
//     console.log("inside set timeout")
// }, 0);

// for(let i=1 ;i <= 100;i++){
//     console.log("inside for loop")
// }
// console.log("script end")

//clear time out

console.log("scrip start");

const id = setTimeout(()=>{
    console.log("inside setTime out")
},1000)

for(let i = 1 ; i<=100 ; i++){
    console.log("inside loop")
}

console.log("settimeout id",id)
clearTimeout(id) //this will clear and not run settimeout
console.log("scrip end")

//How setTimeout works in detail explanation

// Certainly! In JavaScript, setTimeout is a function that allows you to schedule the execution of a function or the execution of a piece of code after a specified delay. The term "asynchronous" in this context means that the code following the setTimeout function call does not wait for the timer to complete. Instead, it continues executing immediately.

// Here's a detailed explanation of how setTimeout works asynchronously in JavaScript:

// Syntax - : setTimeout(callback, delay, arg1, arg2, ...);

// 1) callback: The function to be executed after the delay.
// 2) delay: The time (in milliseconds) to wait before executing the callback.
// 3) arg1, arg2, ...: Optional arguments that will be passed to the callback function.

//Asynchronous Execution:

// 1) Call Stack and Event Loop:

// JavaScript uses a single-threaded execution model with a call stack and an event loop.
// The call stack is a data structure that keeps track of the execution context of functions. When a function is called, it is added to the top of the stack. When the function completes, it is removed from the stack.

// 2) setTimeout in the Call Stack:
// When setTimeout is called, it initiates a timer and schedules the callback function to be executed after the specified delay.

// 3) Callback Queues:

// While the timer is running, the rest of the code continues to execute. The callback function is not immediately placed on the call stack when the timer completes. Instead, it is placed in the Callback Queue.

// 3) Event Loop:

// The Event Loop constantly checks the Call Stack and Callback Queue. If the Call Stack is empty, it takes the first function from the Callback Queue and pushes it onto the Call Stack for execution.

// 4) Execution of the Callback:

// When the callback function is finally pushed onto the Call Stack, it gets executed.


// for example 

// console.log("script start")
// function myFunction (){
//     console.log("inside function")
// }
// setTimeout(myFunction,1000) // this accepts two arguments function and time in milisec

// console.log("script end")

//Explaination
//1) The script starts executing, and the first statement logs "script start".
//2) The myFunction function is defined but not executed yet.
//3) setTimeout is encountered, and it schedules myFunction to be executed after a 1000-millisecond (1-second) delay.
// The browser sets a timer for 1000 milliseconds and continues to check for timeout.
//4) JavaScript doesn't wait for the setTimeout delay. Instead, it continues with its execution.
//5) The script proceeds to the next statement and logs "script end".
//6) After 1000 milliseconds, the timer initiated by setTimeout completes.
//7) The callback function (myFunction) is placed in the Callback Queue.
//8) The Event Loop checks if the Call Stack is empty.
//9) Since the Call Stack is empty, the callback function (myFunction) is moved from the Callback Queue to the Call Stack and executed.
//10) "inside function" is logged.
//11) output -: 
// script start
// script end
// inside function

//setTimeout with 0 milisec
//In summary, using setTimeout with a delay of 0 milliseconds allows you to schedule a function to run as soon as the current code execution is completed, providing a way to defer the execution of a function to the next event loop iteration. This can be useful for managing the order of execution in certain scenarios.

//it will have same out put as of earlier


