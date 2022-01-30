const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".button");
const list = document.querySelector(".list");

// Events 
document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', addTodo);

list.addEventListener('click', actions);



//functions


function addTodo(e){
    e.preventDefault();
    
    
    if(todoInput.value.length > 0){
        console.log(todoInput.value);
        const todoText = todoInput.value;
        //craete div
        const listDiv = document.createElement('div');
        //add class to it
        listDiv.classList.add('li')
        //craete li
        const newTodo = document.createElement('li');
        //add todo text to it
        newTodo.innerText = todoText;
        //append li to div
        listDiv.appendChild(newTodo);

        //create action div
        const actionDiv = document.createElement('div');
        //add class to it
        actionDiv.classList.add('action');

        // create buttons
        //check button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check')
        checkButton.innerHTML = '<i class="fas fa-check"></i>'
        //append check btn
        actionDiv.appendChild(checkButton);
        
        //clear button
        const clearButton = document.createElement('button');
        clearButton.classList.add('clear')
        clearButton.innerHTML = '<i class="fas fa-trash"></i>'
        //append clear   btn
        actionDiv.appendChild(clearButton);


        //apend actionDiv to listDiv

        listDiv.appendChild(actionDiv);




        //append everything to ul list

        list.appendChild(listDiv);


        //add todo to localstorage
        saveToLocal(todoText)


        //whene the todo is added empty the input
        todoInput.value = "";
    }


    
}


function actions(e){
    console.log(e.target.classList.value);
    const item = e.target;
    //clear 
    if(item.classList.value === "clear"){
        const todo = item.parentElement.parentElement;
        todo.remove();
        //remove from localstorage
        clearFromLocal(todo)
    }
    //check
    if(item.classList.value === "check"){
        const todo = item.parentElement.parentElement;
        todo.classList.add('checked');
        item.remove();
    }
}


//save to local storage 

function saveToLocal(todo){
    //check if alredy have todos in localstorage

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


//get todos from localstorage

function getTodos() {    //check if alredy have todos in localstorage

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    //looooooop
    todos.forEach(todo => {
        //craete div
        const listDiv = document.createElement('div');
        //add class to it
        listDiv.classList.add('li')
        //craete li
        const newTodo = document.createElement('li');
        //add todo text to it
        newTodo.innerText = todo;
        //append li to div
        listDiv.appendChild(newTodo);

        //create action div
        const actionDiv = document.createElement('div');
        //add class to it
        actionDiv.classList.add('action');

        // create buttons
        //check button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check')
        checkButton.innerHTML = '<i class="fas fa-check"></i>'
        //append check btn
        actionDiv.appendChild(checkButton);
        
        //clear button
        const clearButton = document.createElement('button');
        clearButton.classList.add('clear')
        clearButton.innerHTML = '<i class="fas fa-trash"></i>'
        //append clear   btn
        actionDiv.appendChild(clearButton);


        //apend actionDiv to listDiv

        listDiv.appendChild(actionDiv);




        //append everything to ul list

        list.appendChild(listDiv);
    });
}

//remove from localstorage
function clearFromLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}