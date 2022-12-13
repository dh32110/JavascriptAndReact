const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
   event.preventDefault();
   console.log(loginInput.value);
}

function handleLinkClick(event){
    // preventDefault가 기본 동장을 하지 못하게 막고 있다.
   event.preventDefault();
   console.log(event);
   // alert가 기본 동장을 하지 못하게 막고 있다.
   //alert("clicked!!");
   
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);