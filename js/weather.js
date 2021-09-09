const API_KEY = "8ab63e31b6ca6a84e4f0a055bdffc9a4";

function onGeoOk(position) {
  const {
    coords: { latitude: lat, longitude: lon },
  } = position;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}º`;
    });
}
function onGeoError() {
  alert("Can't find you No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
