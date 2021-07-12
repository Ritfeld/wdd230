function windChill(tempF,speed) 	
{
var a = Math.pow(speed,.16);
return  (35.74 + (.6215 * tempF) - (35.75* a) + (.4275 * tempF * a)).toFixed(2);
}
var  temp = parseFloat(document.getElementById('temp').innerHTML);
var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML);
var wc
if (temp <= 50) {
    if (windSpeed <= 3) {
        wc = temp;
    }
    else {
        wc = windChill(temp,windSpeed)
    }
}
else {
    alert("Wind chill is defined only if temperature <= 50.");
    wc = NaN;
}
document.getElementById('windchill').innerHTML = wc;