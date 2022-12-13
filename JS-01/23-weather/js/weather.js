const API_KEY = "b61e43d82f8cda22f53df121e5456023";

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   fetch(url).then(response => response.json()).then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
   });
}
function onGeoError(){
   alert("Can't find you. No weather for you.");
}

// navigator.geolocation는 브라우저에 와이파이 위치 GPS 좌표를 보내줌
// getCurrentPosition은 두개의 argumet가 필요함
// getCurrentPosition(모든게 잘 됐을 때 필요한 함수, 에러가 발생했을 떄 실행될 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);