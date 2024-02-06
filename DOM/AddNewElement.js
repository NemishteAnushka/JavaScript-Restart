const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
todoList.innerHTML = "<li>Todo Homework</li>"

// todoList.innerHTML = todoList.innerHTML + "<li>Todo Homework</li>" + "<li>new Homework</li>"
//never use innerHTML  directly to add elements, it's not efficient and can lead to security issues
//use innerHtml to change  the whole content of an element at once