//determine day of the week
let thedate = new Date();
console.log(thedate.getDate());

//if it is friday then turn the aside display property to block
if (thedate.getDate() ==6) {
    document.querySelector("#banner").style.display = "block"
    
}

const thisday = new Date();
const dayNumber = thisday.getDay();


if (dayNumber == 5) {
    document.getElementById("banner").classList.add("showme");
}
else {
    document.getElementById("banner").classList.add("hideme");
}
