// grab
const input = document.querySelector("input[type=text]");
const listTodos = document.querySelector(".list-todos");
const form = document.querySelector("form");
const todolists = JSON.parse(localStorage.getItem("todolists")) || [];

getTodolist(todolists);

// function create todolist
function addTodoList(e) {
  e.preventDefault();

  if (!input.value) {
    alert("Please provide information.!");
    input.focus();
    return;
  }

  const todo = input.value;

  todolists.push(todo);
  getTodolist(todolists);
  storeTodoList(todolists);

  form.reset();
  input.focus();
}
// function get todolist from localstorage
function getTodolist(todolists = []) {
  const todolistsHtml = todolists
    .map(
      (todolist, id) =>
        `<div class="todolist" data-id=${id}>
            ${todolist} <a class='edit' href='#'>Edit</a> | <a class='delete' href='#'>Delete</a>
         </div>
        `
    )
    .join("");
  listTodos.innerHTML = todolistsHtml;
}
// function to save todolist to localstorage
function storeTodoList(todolists = []) {
  localStorage.setItem("todolists", JSON.stringify(todolists));
}
// function to delete todolist from localstorage
function deleteTodolist(e) {
  if (!e.target.matches(".delete")) {
    return;
  } else {
    const confirmDelete = confirm(
      "Are you sure want to delete this todo list?"
    );
    if (confirmDelete) {
      const index = e.target.parentNode.dataset.id;
      todolists.splice(index, 1);
      getTodolist(todolists);
      storeTodoList(todolists);
    }
    return;
  }
}
// function to edit and update todolist to localstorage
function editTodolist(e) {
  if (!e.target.matches(".edit")) {
    return;
  } else {
    const editContent = e.target.parentNode;
    editContent.setAttribute("contenteditable", "true");
  }
}

// event listener
form.addEventListener("submit", addTodoList);
listTodos.addEventListener("click", deleteTodolist);
listTodos.addEventListener("click", editTodolist);
