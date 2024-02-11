//elem.insertAdjacentHTML(where,html)
//beforebegin
//afterbegin
//beforeend
//afterend

const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>Hii how are you</li>") //append

// todoList.insertAdjacentHTML("afterbegin","<li>Hello todo </li>"); //prepend

// todoList.insertAdjacentHTML("beforebegin","<li>Hello todo </li>");

todoList.insertAdjacentHTML("afterend","<li>Hello todo </li>");
