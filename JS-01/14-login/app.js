const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 오타로 인한 오류를 방지하기 위해 변수로 고정해줌.
// 변수로 인한 오류는 js에서 지적해주지만 String으로 인한 오류는 지적해주지 않음
// 대문자변수가 String이라는 사실을 상기시키기 좋음.
const USERNAME_KEY = "username";
function onLoginSubmit(event){
   // 기본 동작이 실행되지 않도록 막아줌.
   event.preventDefault();
   //  class 추가
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   // localStorge에 저장될 아이템의 이름과 값(변수)를 저장
   localStorage.setItem(USERNAME_KEY, username);

   // greeting.innerText = "Hello " + username;
   // // string과 변수를 연결하는 다른 방법
   // // `String ${변수명}`  !== '', ""
   // greeting.innerText = `Hello ${username}`;
   paintGreetings(username);
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

if (savedUsername === null) {
   // show the form
   // local Storage에 username이 없는 경우
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   // show the greeting
   paintGreetings(savedUsername);
}