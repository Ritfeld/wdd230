let cityId = 3383330;
let appid = 'e954957c737b89d0338f8fd5f015fe9d';

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${appid}`;

//console.log('test');
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
   console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //reduce the list array to the five forecast.....40
    const fiveDayForcast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForcast);

    // loop through each of the forecast days
    fiveDayForcast.forEach( x => {
        let d = new Date(x.dt_txt);
        //console.log(d);
       // console.log(`dayofWeek${day+1}`)
       document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';  // note the concatenation
        const desc = x.weather[0].description;  // note how we reference the weather array
        document.getElementById(`fivedayimg${day + 1}`).setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById(`fivedayimg${day + 1}`).setAttribute('alt', desc);
        day++;
    });
   
});
