function doInputOutput () 
{
var a = parseFloat(document.getElementById('temp').value);
var b = parseFloat(document.getElementById('windSpeed').value);
var wc = windChill (a,b)
document.getElementById ('output').innerHTML = wc;
}
function windChill (tempF,speed) 	
{
var a = Math.pow(speed,.16);
return result = (35.74 + (.6215 * tempF) - (35.75* a) + (.4275 * tempF * a)).toFixed(2) + " &#8457; ";


}