//callbacks , callback hell ,pyramid of dom
//asynchronous programming
const heading1 = document.querySelector('.heading1')

setTimeout(()=>{
    heading1.textContent = "Hello World"
},1000)