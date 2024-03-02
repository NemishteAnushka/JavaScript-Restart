//callbacks , callback hell ,pyramid of dom
//asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent="Hello World 1"
//     heading1.style.color = 'red'
//     setTimeout(() => {
//         heading2.textContent="Hello World 2"
//         heading2.style.color = 'orange'
//         setTimeout(() => {
//             heading3.textContent="Hello World 3"
//             heading3.style.color = 'blue'
//             setTimeout(() => {
//                 heading4.textContent="Hello World 4"
//                 heading4.style.color = 'violet'
//                 setTimeout(() => {
//                     heading5.textContent="Hello World 5"
//                     heading5.style.color = 'green'
//                     setTimeout(() => {
//                         heading6.textContent="Hello World 6"
//                         heading6.style.color = 'yellow'
//                         setTimeout(() => {
//                             heading7.textContent="Hello World 7"
//                             heading7.style.color = 'dark pink'
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// },1000)

//now we will do same thing using function

function changeColorAndText(element, text, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      onSuccess();
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
}
changeColorAndText(heading1,"heading 1","red",1000,()=>{
changeColorAndText(heading2,"heading 2","green",2000,()=>{
changeColorAndText(heading3,"heading 3","orange",2000,()=>{
changeColorAndText(heading4,"heading 4","yellow",2000,()=>{
changeColorAndText(heading5,"heading 5","blue",2000,()=>{
changeColorAndText(heading6,"heading 6","pink",2000,()=>{
changeColorAndText(heading7,"heading 7","violet",2000,()=>{

},()=>{console.log("heading 7 does not exist")})
},()=>{console.log("heading 6 does not exist")})
},()=>{console.log("heading 5 does not exist")})
},()=>{console.log("heading 4 does not exist")})
},()=>{console.log("heading 3 does not exist")})
},()=>{console.log("heading 2 does not exist")})
},()=>{console.log("heading 1 does not exist")})