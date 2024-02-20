// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
child.addEventListener("click", () => {
  console.log("clicked");
});
// const body = document.body;

//Event Propagation
// Event propagation refers to the process by which events in the Document Object Model (DOM) are transmitted or "propagated" through the hierarchy of elements in the DOM.

// 1) Capturing Phase:

// The event starts from the root of the DOM tree and moves downward to the target element.
// Event listeners attached during the capturing phase will be triggered as the event descends towards the target element.

//2) Target Phase:

// The event reaches the target element.
// Event listeners attached to the target element itself are triggered.

//3) Bubbling Phase:

// The event then bubbles up from the target element back to the root of the DOM tree.
// Event listeners attached during the bubbling phase will be triggered as the event ascends towards the root.

// Note - : In the context of JavaScript, when you attach an event listener to an element, you can specify whether it should be executed during the capturing phase, the target phase, or the bubbling phase. The third parameter of the addEventListener method, if set to true, indicates the use of the capturing phase. If set to false or omitted, it uses the bubbling phase.

//bubbling
// Event bubbling is a mechanism in JavaScript where an event triggered on a particular element will also trigger the same event on all of its ancestors in the DOM (Document Object Model) hierarchy. When an event occurs on a deeply nested element, it bubbles up through its ancestors, triggering the same event on each ancestor along the way.

// child.addEventListener("click", () => {
//   console.log("you clicked on child");
// });

// parent.addEventListener("click", () => {
//   console.log("you clicked on parent");
// });

// grandParent.addEventListener("click", () => {
//   console.log("you clicked on grandparent");
// });

// body.addEventListener("click", () => {
//   console.log("you clicked on body");
// });

//capturing events

// child.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!!!  child");
//   },
//   true //use third argument  to set useCapture to true, this will make the event start at the target and go up
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!!!! parent");
//   },
//   true
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!!! grandparent");
//   },
//   true
// );

// body.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!!!!  body");
//   },
//   true
// );

//event delegation
// grandParent.addEventListener("click",(e)=>{
//     console.log(e.target)
// })
