//let cityId = 5604473;
//let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e954957c737b89d0338f8fd5f015fe9d";

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temp' );
    const description = document.querySelector('#desc' );
    const windspeed = document.querySelector('#windSpeed' );
    const humidity = document.querySelector('#hum' );
    temperature.textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
});
