//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//eventlisteners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', DeleteCheck);

//function
function addTodo(event) {
    //Seite nicht neu laden bei jedem Klick
    event.preventDefault();
    //Abfragen ob feld leer ist

    if (todoInput.value == ""){
        return;
    }

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //buttons check
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //buttons smash
    const smashButton = document.createElement('button');
    smashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    smashButton.classList.add("smash-btn");
    todoDiv.appendChild(smashButton);
    //Append to Htmllist
    todoList.appendChild(todoDiv);
    //clear input
    todoInput.value = "";
}

function DeleteCheck(e) {
    const item = e.target;
    //Löschen
    if (item.classList[0] === 'smash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })


    }
    //Checken
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}