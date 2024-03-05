//Promise - refer to future value

// In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a cleaner and more organized way to work with asynchronous code compared to traditional callback-based approaches.

// A Promise can be in one of three states:

// Pending: The initial state, representing that the asynchronous operation is still ongoing and has not yet completed.

// Fulfilled (Resolved): The operation completed successfully, and the Promise has a resulting value.

// Rejected: The operation failed, and the Promise has a reason for the failure.

// The syntax for creating a Promise looks like this:

// const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data or performing a task
    // If successful, call resolve with the result
    // If an error occurs, call reject with an error message
//});

//In this example, the fetchData function returns a Promise that simulates an asynchronous operation. The resolve function is called if the operation is successful, and the reject function is called if it fails. The then method is used to handle the successful case, and the catch method is used to handle failures.

//Microtasks are tasks that are executed after the current task and before the next task in the event loop. Microtasks are often used for asynchronous operations. Promises in JavaScript are a common example of something that adds a microtask to the queue.

//When a promise is settled (either resolved or rejected), its associated microtask is added to the microtask queue. Microtasks are prioritized over the regular task queue (callback queue), and they will be executed before the next task is picked up from the task queue.

const bucket = ["rice", "vegetable", "salt", "chips"];

//produce
const friedRice = () => {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("rice") &&
      bucket.includes("vegetable") &&
      bucket.includes("salt")
    ) {
      resolve("fried Rice");
    } else {
      reject(new Error());
    }
  });
};
//consume
friedRice()
  .then((result) => {
    console.log("Ready to eat", result);
  })
  .catch((error) => {
    console.log(error);
  });
