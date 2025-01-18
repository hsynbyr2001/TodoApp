const textInputDOM = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo")
const deleteTodoButton = document.getElementById("deleteTodo")
const todoList = document.getElementById("todoList")
console.log(todoList)

let textInputValue = ""
let todos = []

displayTodos()

textInputDOM.addEventListener("change", function (e) {
    textInputValue = e.target.value
    console.log(textInputValue)
});

addTodoButton.addEventListener("click", function (e) {
    e.preventDefault()
    if (textInputDOM.value !== "") {
        todos.unshift({
            id: todos.length + 1,
            todoTitle: textInputValue
        })
        textInputDOM.value = "";
        displayTodos()
    }
});

function displayTodos() {
    let result = "";

    if (todos.length === 0) {
        todoList.innerHTML = "<p>Bir todo ekleyin.</p>"
    } else {
        todos.forEach((item) => {
            result += `<li class="flex justify-between border px-4 py-3 flex items-center"><span>${item.todoTitle}</span><button class="text-red-400" onclick="deleteTodo(${item.id})">Sil</button></li>`
        })

        todoList.innerHTML = result;
    }
}

function deleteTodo(id) {
    let deletedID;

    for (let index in todos) {
        if (todos[index].id == id) {
            deletedID = index;
        }
    }

    todos.splice(deletedID, 1)
    displayTodos()
}