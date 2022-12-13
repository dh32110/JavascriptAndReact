const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
   const correntColor = h1.style.color;
   let newColor;
   if (correntColor === "blue") {
      newColor = "tomato";
   } else {
      newColor = "blue"
   }
   h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);