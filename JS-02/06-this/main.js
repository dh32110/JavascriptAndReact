// this는 함수가 호출될때 결정이 된다
const car ={
   name: "KIA",
   getName: function (){
      console.log("car getName", this);
   }
}

// car.getName(); //A.B A가 B를 부름

const globalCar = car.getName;
globalCar(); //window 객체가 뜸 // B 그냥 밖에서 불림 그래서 밖의 최상단인 window 객체가 부름 그래서 this가 window객체로 지정됨

const car2 = {
   name:"hyundai",
   getName: car.getName
}
//car2.getName(); //hyundai가 나오는 것을 통해 this를 호출하는 것이 this가 되는 것을 알 수 있다.

const btn = document.querySelector("#button")
btn.addEventListener('click', car.getName); //btn이 getName을 호출했기 떄문에 this가 버튼 그대로 나오는 것을 볼 수있다.

// this는 위 예제처럼 누가 호출하느냐에 따라 바뀌기 때문에 이것을 고정시키기 위해 .bind(this 값을 고정시켜줌)를 사용한다.
const bindGetName = car2.getName.bind(car); // car2의 getName을 .bind를 이용하여 car로 고정시킨다.
bindGetName();


//문제
// const testCar = {
//    name: "benz",
//    getName: function () {
//       console.log("getname", this.name);
//       const innerFunc = function () {
//          console.log("innerFunc", this.name);
//       };
//       innerFunc(); //innerFunc은 window객체가 호출한 것이 됨
//    },
// }
// testCar.getName();

const testCar = {
   name: "benz",
   getName: function () {
      console.log("getname", this.name);
      const innerFunc =  () => {
         console.log("innerFunc", this.name);
      }; //화살표 함수에서의 this는 함수가 속해있는 곳의 상위 this를 계승 받는다.
      innerFunc(); //benz가 나옴
   },
}
testCar.getName();

// const ageTest = {
//    unit: "살",
//    ageList: [10, 20, 30],
//    getAgeList: function () {
//       const result = this.ageList.map(function (age) {
//          //.map은 항상 function을 매개변수로 받아쓴다.
//          return age + this.unit;
//       });

//       console.log(result);
//    }
// }
// ageTest.getAgeList();

const ageTest = {
   unit: "살",
   ageList: [10, 20, 30],
   getAgeList: function () {
      const result = this.ageList.map((age) => {
         return age + this.unit;
      });

      console.log(result);
   }
}
ageTest.getAgeList();

// 화살표 함수를 사용할 때에는 .bind를 사용할 수 없다.
// 일반적으로 this를 사용할 때에는 일반 함수를 사용해라.