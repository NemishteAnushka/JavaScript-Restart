//some old methods to support poor Internet Exploror
//appendChild
//insertBefore
//replaceChild
//removeChild



// const todolist = document.querySelector(".todo-list");
// const newList = document.createElement("li");
// newList.textContent="New TOdo";
// todolist.appendChild(newList)  // appendChild
// const ref = document.querySelector(".todo-li")
// todolist.insertBefore(newList,ref) // elem.insertBefore(what,where)



//replaceChild
const todoList = document.querySelector(".todo-list");
const newTodo = document.createElement("li");
newTodo.textContent="Replace Todo";
const ref = document.querySelector(".todo-li");
// todoList.replaceChild(newTodo,ref)

todoList.remove(ref) // remove 