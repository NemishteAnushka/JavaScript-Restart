//In JavaScript, async/await is a modern way to work with asynchronous code, making it more readable and easier to manage. When combined with the fetch function, which is used for making network requests, it provides a clean and concise way to handle asynchronous operations, such as fetching data from a server.
//step 1 : async Function Declaration:
// To use async/await, you need to declare a function with the async keyword. This indicates that the function will contain asynchronous operations.

// async function getData(){
// }

//step 2 : The await keyword is used within an async function to wait for a Promise to resolve before continuing with the execution of the code. In the case of fetch, it allows you to wait for the network request to complete and get the result.
const URL = "https://jsonplaceholder.typicode.com/posts";
async function getData() {
  const response = await fetch(URL);
  // console.log(response)
  if (response.ok) {
    const data = await response.json();
    // console.log(data)
    return data;
  } else {
    throw new Error("Something went wrong");
  }
}
getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    alert(error);
  });

  //In this example, await fetch(...) is used to wait for the completion of the network request, and await response.json() is used to wait for the parsing of the response body as JSON.