let lasttime =localStorage.getItem("time")
let different=(new Date()-Date.parse(lasttime)) /1000 /60/60/24
document.getElementById("lastvisited").innerHTML= (parseInt(different))
localStorage.setItem("time",new Date())