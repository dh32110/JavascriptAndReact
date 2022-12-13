const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 업데이트가 가능하도록 let로 바꿈
let toDos = [];
// JSON.stringify는 object나 array 또는 어떤 Javascript 코드건 간에 string으로 만들어 준다.
function saveToDos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
//  JSON.parse는 string을 object로 바꿔줌

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo){
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event){
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   toDos.push(newTodo);
   paintToDo(newTodo);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   // forEach는 array의 각 item에 function을 실행시켜준다.
   parsedToDos.forEach(paintToDo);
}