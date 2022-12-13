// const a = 5;
// const b = 2;
// let myName = "Han";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("Hello " + myName);

// myName = "Donghan";
// console.log("your new name is " + myName);

// const amIFat = null;
// // undefined
// let something;

// console.log(amIFat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
// console.log(dayOfWeek[5]);

//  Add one more day to the array
// dayOfWeek.push("sun");

// console.log(dayOfWeek);

// 6. Object
// const player = {
//    name: "nico",
//    points: 10,
//    fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

//  const를 수정하는 것이 아니라 Object를 수정하는 것이다.
// player.fat = false;
// console.log(player);

// player.lastName = "potato";
// console.log(player);

// player.points = player.points + 15;
// console.log(player.points);

//  7. Functions part one
// function sayHello(nameOfPerson, age){
//    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b){
//    console.log(a + b);
// }

// function divide(a, b){
//    console.log(a / b);
// }

// plus(8, 60);
// divide(998, 20);

// const player = {
//    name: "nico";
//    sayHello: function (otherPersonsName){
//       console.log("hello " + otherPersonsName + "nice to meet you");
//    }
// }

// console.log(player.name);
// player.sayHello("lynn");

//  9. Recap
// const me = "sexy";
// const days = [1, 2, false, true, null, undefined, "text", me];

// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);
// toBuy[2] = "water";
// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);

//  10. Recap2
// const player = {
//    name: "Nico",
//    age: 98
// };
// player.name = "Nicolras";
// console.log(player, console);

// const calculator = {
//    add: function(a, b){
//       console.log(a + b);
//    },
//    minus: function(a, b){
//       console.log(a - b);
//    },
//    divide: function(a, b){
//       console.log(a / b);
//    },
//    multi: function(a, b){
//       console.log(a * b);
//    },
//    powerof: function(a, b){
//       console.log(a ** b);
//    },
// };

// calculator.add(5, 5);
// calculator.minus(5, 5);
// calculator.divide(5, 5);
// calculator.multi(5, 5);
// calculator.powerof(5, 5);

//  11. Returns
// const age = 96;
// function calculrateKrAge(ageOfForeigner){
//    return ageOfForeigner+2;
// }

// const krAge = calculrateKrAge(age);
// console.log(krAge);

// const calculator = {
//    plus: function(a, b){
//       return a + b;
//    },
//    minus: function(a, b){
//       return a - b;
//    },
//    divide: function(a, b){
//       return a / b;
//    },
//    times: function(a, b){
//       return a * b;
//    },
//    power: function(a, b){
//       return a ** b;
//    },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerofResult = calculator.power(divideResult, minusResult);

//  13. Conditionals(조건문)
// const age = parseInt(prompt("How old are you?"));
// parseInt("15") string 을 number 로 바꿔줌.
// isNaN(age) age가 number 이면 false 이고 string 이면 true.
// console.log(age);
// if(isNaN(age) || age < 0){
//    console.log("Please write a real positive number");
// } else if(age < 18){
//    console.log("You are too young.");
// } else if (age >= 18 && age <= 50){
//    console.log("You can drink");
// } else if(age > 50 && age <= 80){
//    console.log("You should exercise");
// } else if (age === 100){
//    console.log("Wow you are wise");
// }else if (age > 80){
//    console.log("You can do whatever you want.");
// }


//  #3. Javascript on the browser
//  0. The document object

//  1. Html in Javascript
// const title = document.getElementById("title");
// // console.dir(title);
// title.innerText = "Got you!";

//   2. Searching for elements
// const hello = documnet.getElementByClassName("hello");
// console.log("hello");

// const title = document.getElementsByTagName("h1");
// const title = document.querySelector(".hello h1");
// console.log(title);

// 3. Events
// const title = document.querySelector(".hello h1");

// title.innerText = "Hello";
// title.style.color = "blue";

// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
   // console.log("title was clicked");
   // console.log(h1.style.color);
   // h1.style.color = "blue";
   // console.log(h1.style.color);
   // const correntColor = h1.style.color;
   // let newColor;
   // if(correntColor === "blue"){
   //    newColor = "tomato";
   // } else {
   //    newColor = "blue"
   // }
   // h1.style.color = newColor;
   // h1.className = "active";

   // 잘 못 쓰는 오류를 방지
//    const clickedClass = "clicked";
//    if(h1.className === clickedClass){
//       h1.className = "";
//    } else {
//       h1.className = clickedClass;
//    }
// }

// function handleMouseEnter(){
//    h1.innerText = "mouse is here!";
// }

// function handleMouseLeave(){
//    h1.innerText = "mouse is gone!";
// }

// function handleWindowResize(){
//    document.body.style.backgroundColor = "tomato"
// }

// function handleWindowCopy(){
//    alert("copier!");
// }

// function handleWindowOffline(){
//    alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//    alert("ALL GOOOD");
// }
// h1.onClick = handleTitleClick;
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

//  5. More Events
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("window", handleWindowOnline);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//    const clickedClass = "clicked";
//    if (h1.classList.contains(clickedClass)){
//       h1.classList.remove(clickedClass);
//    } else {
//       h1.classList.add(clickedClass);
//    }
// }

// h1.addEventListener("click", handleTitleClick);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//    h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);