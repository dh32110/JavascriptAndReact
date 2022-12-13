const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
   // 잘 못 쓰는 오류를 방지
   const clickedClass = "clicked";
   if (h1.className === clickedClass) {
      h1.className = "";
   } else {
      h1.className = clickedClass;
   }
}


h1.addEventListener("click", handleTitleClick);