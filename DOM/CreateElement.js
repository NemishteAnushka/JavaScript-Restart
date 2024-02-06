// document.createElement()
// append
// prepend
// remove
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students");
//now append will add items to last
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem)

//you can also do

// const newTodoItem2 = document.createElement("li");
// newTodoItem2.textContent = "New Todo 3";
// todoList.append(newTodoItem2)

//prepend will add items to 1st

// const newTodoItem3 = document.createElement("li");
// newTodoItem3.textContent = "Prepend Element";
// todoList.prepend(newTodoItem3);

//remove
// const removeItem = document.querySelector(".todo-list li ");
// removeItem.remove();

//before

// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent="Teching";
// todoList.before(newTodoItem)

//after
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent="Teching";
todoList.after(newTodoItem)