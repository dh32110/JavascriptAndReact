const images = ["city.jpg", "sunrise.jpg", "wall.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)]

// html에 tag 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

// body에 bgImage를 삽입
// append는 가장 뒤에 prepend는 가장 위에 오게 하는 것
document.body.appendChild(bgImage);