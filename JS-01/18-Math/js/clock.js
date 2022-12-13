const clcok = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   clcok.innerText = `${hours}:${minutes}:${seconds}`;
}

// // setTimeout(호출하려는 function, 얼마나 기다릴지 ms 단위)
// // 일정 시간이 흐른 뒤에 한번 실행
// setTimeout(sayHello, 5000);

getClock();
setInterval(getClock, 1000);

// padstart()는 string에 쓸 수 있는 function
// string의 길이를 변화시키고 string을 추가할 수 있음
// padend()는 string의 뒤쪽에 추가
