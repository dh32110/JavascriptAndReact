const h1 = document.querySelector("div.hello h1");

function handleh1Click(){
   h1.style.color = "blue";
}

function handleMouseEnter(){
   h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
   h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
   document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
   alert("copier!");
}

function handleWindowOffline(){
   alert("SOS no WIFI");
}

function handleWindowOnline(){
   alert("ALL GOOOD");
}

h1.addEventListener("click", handleh1Click);
// 다른 방법
// h1.onclick = handleh1Click;
h1.addEventListener("mousrenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("window", handleWindowOnline);