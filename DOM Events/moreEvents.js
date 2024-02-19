//keypress event

// const body = document.body
// body.addEventListener("keypress",(e)=>{
// console.log(e.key)
// })

// MouseOver event
const btnOne = document.querySelector("#one");
btnOne.addEventListener("mouseover",()=>{
    console.log("mouseOver event occured")
})

btnOne.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occured")
})