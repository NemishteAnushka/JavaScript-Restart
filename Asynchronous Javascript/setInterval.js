//setInterval()
// Certainly! setInterval is a JavaScript function used to repeatedly execute a given function or code snippet at a specified interval. It continues executing the provided function until it is explicitly cleared using clearInterval.

//syntax - : setInterval(callback, delay, arg1, arg2, ...);

// callback: The function to be executed at each interval.
// delay: The time (in milliseconds) between each execution of the callback function.
// arg1, arg2, ...: Optional arguments that will be passed to the callback function.

//Example
// const intervalId = setInterval(() => {
//     console.log("Executing at the specified interval");
//   }, 1000); // Execute every 1000 milliseconds (1 second)

// In this example, the provided callback function will be executed every 1000 milliseconds. The ID returned by setInterval (in this case, stored in the variable intervalId) can be later used to stop the interval with clearInterval.

// To stop the interval, you use the clearInterval function and pass the interval ID as an argument:

//clearInterval(intervalId);

//Here's an example where the interval is stopped after 5 seconds:

// const intervalId = setInterval(() => {
//     console.log("Executing at the specified interval");
//   }, 1000); // Execute every 1000 milliseconds (1 second)
  
//   // Stop the interval after 5000 milliseconds (5 seconds)
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped after 5 seconds");
//   }, 5000);
  
//In this example, the clearInterval function is called after 5 seconds using setTimeout, which stops the interval and prevents the callback function from being executed further.

// setInterval is commonly used for tasks that need to be repeated at regular intervals, such as animations, updates, or polling operations. However, it's important to use it judiciously to avoid performance issues and ensure proper cleanup when the interval is no longer needed.

//project
const body = document.body;
const button = document.querySelector("button");
console.log(button)
let intervalId 
function setBackgroundColor() {
    intervalId = setInterval(() => {
        const red = Math.floor(Math.random() * 126);
        const green = Math.floor(Math.random() * 126);
        const blue = Math.floor(Math.random() * 126);
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        body.style.background = rgb;
      }, 1000);
}

setBackgroundColor()

//clear interval when clicked on button
button.addEventListener("click",()=>{
    if(intervalId){
        clearInterval(intervalId);
        button.textContent = "Start Background Color Change";
        intervalId = null //reset to null 
    }
    else {
        setBackgroundColor();
        button.textContent = "Stop Changing !!!"
    }
})