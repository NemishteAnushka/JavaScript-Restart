//static list vs live list

//querySelectorAll gives us static list
const todoList = document.querySelectorAll(".todo-list li");
const newItem = document.createElement("li");
newItem.textContent = "item 6";
const ul = document.querySelector(".todo-list")
ul.append(newItem)
console.log(todoList)