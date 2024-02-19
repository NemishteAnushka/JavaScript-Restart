// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
child.addEventListener('click',()=>{
    console.log("clicked")
})
// const body = document.body;
//bubbling
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