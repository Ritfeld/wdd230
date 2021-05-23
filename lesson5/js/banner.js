//determine day of the week
let thedate = new Date();
console.log(thedate.getDate());

//if it is friday then turn the aside display property to block
if (thedate.getDate() ==6) {
    document.querySelector("#banner").style.display = "block"
    
}