//program to display random body color when user click on button
const btn = document.querySelector("button");
const body = document.body
const changeText = document.querySelector("span")
const generateRandomColor = ()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*(256-red));
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}
btn.addEventListener("click",function(){
    const randomColor = generateRandomColor()
    body.style.backgroundColor = randomColor
    changeText.textContent = randomColor
})