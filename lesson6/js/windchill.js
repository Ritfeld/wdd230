function windChill(tempF,speed) 	
{
var a = Math.pow(speed,.16);
return  (35.74 + (.6215 * tempF) - (35.75* a) + (.4275 * tempF * a)).toFixed(2);
}
var  a = parseFloat(document.getElementById('temp').innerHTML);
var b = parseFloat(document.getElementById('windspeed').innerHTML);
console.log(a)
var wc = windChill(a,b)
document.getElementById('windchill').innerHTML = wc;



if (temp <= 50) {
    if (windSpeed <= 3) {
        windChill = temperature;
    }
    else {
        windChill = 35.74 + 0.6215*temperature + 
                    (0.4275*temperature - 35.75)*Math.pow(windSpeed, 0.16);
    }
}
else {
    alert("Wind chill is defined only if temperature <= 50.");
    windChill = NaN;
}