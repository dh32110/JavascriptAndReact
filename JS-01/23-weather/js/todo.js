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
   // toDo.id는 number 타입이고 li.id는 string 타입이기 때문에 li.id를 parseInt를 이용하여 number로 바꿔줌 
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}
// object를 받음
function paintToDo(newTodo){
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   span.innerText = newTodo.text;
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
   // text가 아니라 object를 저장
   const newTodoObj = {
      text:newTodo,
      id: Date.now()
   }
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
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

// .filter는 기존의 array는 그대로 있고 지우고 싶은 item을 제외한 새로운 array를 만든다.
// filter는 filter 함수(function)가 필요하다.
// filter의 함수는 반드시 true를 return해야한다.
// EX) function goodFilter(item(item을 저장할 공간)){return item !== 3}
// [1,2,3,4,5].filter(goodFilter)
// false인 값은 제외