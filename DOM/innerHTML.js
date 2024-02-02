const headLine = document.querySelector(".headline");
console.log(headLine.innerHTML)
//change innerHTML 
headLine.innerHTML = "<h1>InnerHTML Changed using InnerHTML</h1>";
headLine.innerHTML += "<button class = \"btn\">Learn More</button>"
console.log(headLine.innerHTML);