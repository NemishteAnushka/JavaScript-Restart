//clone node

const todoList = document.querySelector(".todo-list");
const newList = document.createElement("li");
newList.textContent="Hello todo";
const cloneNewList = newList.cloneNode(true) //true for deep clone
todoList.append(newList)
todoList.prepend(cloneNewList)