//let cityId = 3383330;
//let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=3383330&units=imperial&appid=e954957c737b89d0338f8fd5f015fe9d";

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temp' );
    const description = document.querySelector('#desc' );
    const windspeed = document.querySelector('#windSpeed' );
    const humidity = document.querySelector('#hum' );
    temperature.textContent = jsObject.main.temp;
    description.textContent = jsObject.weather[0].description;
    windspeed.textContent = jsObject.wind.speed;
    humidity.textContent = jsObject.main.humidity;

  });