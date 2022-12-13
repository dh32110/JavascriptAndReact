// Object
const player = {
   name: "Donghan",
   points: 10,
   fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

//  const를 수정하는 것이 아니라 Object를 수정하는 것이다.
player.fat = false;
console.log(player);

player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log(player.points);
