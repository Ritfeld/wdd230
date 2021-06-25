let cityId = 5604473;
let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e954957c737b89d0338f8fd5f015fe9d";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //reduce the list array to the five forecast.....40
    const fiveDayForcast = jsObject.list.filter( forecast => forecast.dt_txt.includes('12:00:00'));
    console.log(fiveDayForcast);

    // loop through each of the forecast days
    fiveDayForcast.forEach( x => {
        let d = new Date(x.dt_txt);
        //console.log(d);
        document.getElementById(' dayofweek${day+1}').textContent = dayofweek[d.getDay()];
        document.getElementById('forecast${day+1}').textContent = x.main.temp;
        day++
    });
});