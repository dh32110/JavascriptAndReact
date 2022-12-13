const a = 5;
const b = 2;
let myName = "Han";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "Donghan";
console.log("your new name is " + myName);

const amIFat = null;
// undefined
let something;

console.log(amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(dayOfWeek[5]);

// Add one more day to the array
dayOfWeek.push("sun");

console.log(dayOfWeek);