const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
   event.preventDefault();
   const username = loginInput.value;
   // console.log(loginInput.value);
   // console.log("click!!!!");
   // if(username === ""){
   //    alert("Please write your name");
   // } else if(username.length > 15){
   //    alert("Your name is too long");
   // }
   console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);