const clcok = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   clcok.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// // setTimeout(호출하려는 function, 얼마나 기다릴지 ms 단위)
// // 일정 시간이 흐른 뒤에 한번 실행
// setTimeout(sayHello, 5000);

getClock();
setInterval(getClock, 1000);