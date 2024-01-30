//get  set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href") );

const formAttribute = document.querySelector(".form-todo input");
console.log(formAttribute.getAttribute("type"))

//set attributes
link.setAttribute("href","https://www.youtube.com/");
console.log(link.getAttribute("href"))