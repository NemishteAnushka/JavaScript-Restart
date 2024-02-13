const allButtons = document.querySelectorAll(".my-btns button");
console.log(allButtons)
allButtons.forEach((items)=>{
    items.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
    })
})