const clcok = document.querySelector("h2#clock");

function sayHello() {
   console.log("hello");
}

// setInterval = 함수를 일정한 간격을 두고 실행시킴
// 두개의 argument를 받음. 첫째 실행하고자 하는 function , 둘째 호출되는 function 간격을 몇 ms(milliseconds)로 할 것인지.
setInterval(sayHello, 5000)