const btn = document.querySelector(".btn-headline");
btn.addEventListener("click",function(){
    console.log("clicked")
    console.log("value of this")
    console.log(this)
})
//in ananomyus function this keyword is the the element itself for example button in this case
//in arrow function this keyword is 1 level up

//arrow function
// btn.addEventListener("click",()=>{
//     console.log("clicked")
//     console.log("value of this")
//     console.log(this)
// })
//here this keyword is window object