//  Recap
const me = "Donghan";
const days = [1, 2, false, true, null, undefined, "text", me];

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

//  Recap2
const player = {
   name: "Donghan",
   age: 98
};
player.name = "Kimdonghan";
console.log(player, console);

const calculator = {
   add: function (a, b) {
      console.log(a + b);
   },
   minus: function (a, b) {
      console.log(a - b);
   },
   divide: function (a, b) {
      console.log(a / b);
   },
   multi: function (a, b) {
      console.log(a * b);
   },
   powerof: function (a, b) {
      console.log(a ** b);
   },
};

calculator.add(5, 5);
calculator.minus(5, 5);
calculator.divide(5, 5);
calculator.multi(5, 5);
calculator.powerof(5, 5);