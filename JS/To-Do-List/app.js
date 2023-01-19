const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

//! **************JSON.parse***************
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//* Load event VS DomContentLoaded  farkı */
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //* Get TodoList from localStorage and load to UI */
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

//* form => submit event vs. button => click event */
//! FormData.addEventListener("submit", (){})
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please Enter Text!");
    return;
  }
  // alert("Continue");

  const newTodo = {
    id: new Date().getTime(), //? Uniqe ID with ms of now
    completed: false, //? Status
    text: todoInput.value, //? User
  };
  createTodo(newTodo);

  todoList.push(newTodo);

  //? localStorage todoList update
  //? localStorage VS SessionStorage VS cookiesStorage farkı
  //! **********JSON.stringify**************
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //? event.target VS ever.currentTarget farkı
  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  //? todo item creation
  // alert("item was added");
  //? obj. dest. (ES6 => JS'e kazandırılan yapılar??)
  const { id, completed, text } = newTodo;

  //? create li
  const li = document.createElement("li");
  li.setAttribute("id", id);
  //? add class whith copleted(status)
  completed ? li.classList.add("checked") : "";

  //? create check icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  //? append VS appenChild  farkı
  li.append(icon);

  //? cretae item test
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  //? create remove icon
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);
  // console.log(li);

  //? append li to ul
  //? prepend VS append farkı
  // todoUl.append(li);
  todoUl.prepend(li);
};

//? Capturing vs. Bubbling
//? static closest parent element => child

todoUl.addEventListener("cilck", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    // alert("check clicked");
    //? update UI
    e.target.parentElement.classList.toggle("checked");
    //? update array
    todoList.map((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
    });

    // todoList.forEach((todo) => {
    //   if (todo.id == idAttr) {
    //     todo.completed = !todo.completed;
    //   }
    // });

    //? add updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    // alert("remove clicked");
    //? remove from UI
    e.target.parentElement.remove();
    //? Remove from array
    //? id si ile silinmeyenleri filtrele array i update et ==> silineni arraydan remove
    todoList = todoList.filter((todo) => todo.id != idAttr);
    //? add updated array to localstorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("other element clicked");
  }
  console.log(todoList);
});
