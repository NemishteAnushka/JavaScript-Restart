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