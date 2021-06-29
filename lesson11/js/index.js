const navbutton = document.querySelector('.nav');
const mainnav = document.querySelector('.navigation')

navbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
  const d = new Date();
  document.querySelector("#theyear").textContent=d.getFullYear();
  document.querySelector("#lastmod").textContent=document.lastModified;

  const range = document.querySelector('#range');


  range.addEventListener('input', () => { document.getElementById('rangeNum').innerHTML = range.value; });