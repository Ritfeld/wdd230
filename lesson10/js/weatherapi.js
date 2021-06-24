let cityId = 5604473;
let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${key}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = '<strong>${desc.toUpperCase()}</strong>';

    document.getElementById('current-temp').textContent = jsObject.main.temp;


    const imagesrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
});