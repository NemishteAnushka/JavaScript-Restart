const allButtons = document.querySelectorAll(".my-btns button");
console.log(allButtons);

for(let buttonss of allButtons){
   console.log(buttonss)
   // add click event listener to each button
   buttonss.addEventListener("click",function(){
    // console.log("clicked")
    console.log(this.textContent); // here this is the button itself , this will provide textContent
   })
}