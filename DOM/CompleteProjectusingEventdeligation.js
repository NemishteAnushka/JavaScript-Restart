const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const appendUl = document.querySelector(".todo-list")
console.log(todoInput)
todoForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const newTodoText = todoInput.value;
   
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
    <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
    `
    newLi.innerHTML = newLiInnerHTML
  //add to the list
  appendUl.append(newLi)
    todoInput.value = ""
})

appendUl.addEventListener('click',(e)=>{

    if(e.target.classList.contains("done")){
        const done = e.target.parentNode.previousElementSibling
        done.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
        const targetedLi  = e.target.parentNode.parentNode
        targetedLi.remove();
    }
})