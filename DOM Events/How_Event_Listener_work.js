console.log("script starts")
const allButtons = document.querySelectorAll(".my-btns button");
console.log(allButtons);
allButtons.forEach((items) => {
  items.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent);
  });
});
console.log("scrip ends")
// A)Single-Threaded Execution:

// 1) JavaScript is inherently single-threaded, meaning it has only one main thread of execution.
// 2) This thread executes the code line by line, and any blocking operation (like I/O operations or network requests) can cause the entire application to freeze.

// B) Asynchronous Operations:

// 3) To handle asynchronous operations efficiently, JavaScript uses a non-blocking event-driven model.
// 4) Functions like event listeners allow asynchronous tasks to be initiated without blocking the main thread.The call stack is a data structure that keeps track of the function calls in the program.

// C) Call-stack 
// 5)When a function is called, it is pushed onto the call stack.
// 6) When it completes, it is popped off the stack.

// D) Web APIs and Callback Queue:

// 7) Asynchronous functions in JavaScript often involve Web APIs provided by the browser or Node.js runtime.
// 8) When an asynchronous operation is initiated, it is offloaded to a Web API (e.g., browser APIs, like setTimeout or XMLHttpRequest).
// 9) Once the operation is completed, a callback function is pushed to the callback queue.

//E)Event Loop:

// 10) The event loop constantly monitors the call stack and the callback queue.
// 11) If the call stack is empty, the event loop checks the callback queue for any pending callbacks.
// 12) If there are callbacks, the event loop pushes them onto the call stack for execution.

// and then task is performed