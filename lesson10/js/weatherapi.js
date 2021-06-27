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
    description.textContent = jsObject.main.temp;
    windspeed.textContent = jsObject. speedvalue.toFixed(0);
    humidity.textContent = jsObject.main.humidity;

    if (tempValue <= 90 && speedValue >= 3) {
      let s = Math.pow(speedValue, 0.16);
      windChill = 35,74 + 0.6215 * tempValue - 35.75 * s + 0.4275 * tempValue * s;
      windChill.toFixed(0);
      document.getElementById('windChill').innerHTML = windChill + ' &#176;F';
    } else {
      document.getElementById('windChill').innerHTML = 'N/A';
    }

});

fetch(prestonForesactJSON)
.then(function (response) {
  return response.json();
})
.then(function (jsObject) {
  console.table(jsObject);
  const daysNames = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const newList = jsObject.list.filter(newList =>
    newList.dt_txt.includes('18:00:00'));
  
    for (let i = 0; i < 5; i++) {
      let dayBlock = document.createElement('li');
      let dayName = document.createElement('span');
      let dayIcon = document.createElement('img');
      let dayTemp = document.createElement('span');
      dayBlock.appendChild(dayName);
      dayBlock.appendChild(dayIcon);
      dayBlock.appendChild(dayTemp);

      let dayIndex = today.getDay() + i + 1;
      if (dayIndex > 6) {
        dayIndex = dayIndex - 7;
      }
      dayName.textContent = daysNames[dayIndex];
      dayIcon.textContent = newList[i].weather[0].icon;
      dayIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + newList[i].weather[0].icon + '.png');
      dayIcon.setAttribute('alt', newList[i].weather[0].description);
      dayTemp.textContent = (newList[i].main.temp).toFixed(0) + ' °F';

      document.querySelector('.container ul').appendChild(dayBlock);

    }
});
