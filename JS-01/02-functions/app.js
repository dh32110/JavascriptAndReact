//   Functions 
function sayHello(nameOfPerson, age){
   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Donghan", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b){
   console.log(a + b);
}

function divide(a, b){
   console.log(a / b);
}

plus(8, 60);
divide(998, 20);

const player = {
   name: "Donghan";
   sayHello: function (otherPersonsName){
      console.log("hello " + otherPersonsName + "nice to meet you");
   }
}

console.log(player.name);
player.sayHello("lynn");