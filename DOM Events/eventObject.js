// const firstBtn = document.querySelector("#one");
// firstBtn.addEventListener("click",function(e){
//     console.log(e)
// })
// console.log(firstBtn)

//1) whenever i use addEventListner on any of element
//2) js engine --- execute the code line by line
//3) event object refers to an object that is automatically created by the browser
//4) An event is an occurrence that can be detected and responded to, such as a user clicking a button, a page finishing loading, or a key being pressed.
//5)The event object contains information about the event, such as the type of event, the target element on which the event occurred, and additional details depending on the type of event. Event objects are typically passed as arguments to event handler functions.

//add eventlistener on all buttons

const allBtn = document.querySelectorAll(".my-btns button");
console.log(allBtn);
for (let buttons of allBtn) {
  buttons.addEventListener("click", (e) => {
    // console.log(e.target)
    // 1) target -: Represents the actual element on which the event occurred, or the element that triggered the event.
    // 2) For example, if you have a click event on a button inside a div, the target would be the button element that was clicked.
    console.log(e.currentTarget);
    //currentTarget - : Represents the element to which the event handler is attached (the current target of the event).
    // This is the element on which you registered the event listener.
  });
}
