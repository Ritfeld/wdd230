//let cityId = 3383330;
//let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=5.839398&lon=-55.199089&units=imperial&appid=e954957c737b89d0338f8fd5f015fe9d";

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temp' );
    const description = document.querySelector('#desc' );
    const windspeed = document.querySelector('#windSpeed' );
    const humidity = document.querySelector('#hum' );
    temperature.textContent = jsObject.current.temp;
    description.textContent = jsObject.current.weather[0].description;
    windspeed.textContent = jsObject.current.wind_speed;
    humidity.textContent = jsObject.current.humidity;

  });