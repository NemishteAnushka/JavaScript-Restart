//intro to events
//click
//3 ways to add event7
//1st
//<button class="btn btn-headline" onclick="console.log('You click me')">Learn More</button> use in html but not valide way

//2nd way

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function (){
//     console.log("You clicked me !!!!!!!")
// } // not valid way


//3rd
const btn = document.querySelector(".btn-headline");
//method --- addEventListener
const clickMe = () => console.log("You have clicked me")
btn.addEventListener("click",clickMe) //event and function
