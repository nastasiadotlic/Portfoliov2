


var purple = "#C2BDFB";
var blue = "#C0E9FF";
var innerDot = document.querySelector('.cursor__inner--dot');
var innerCircle = document.querySelector('.cursor__inner--circle');

//var currentColor = purple;

localStorage.setItem('currentColor', purple);
innerDot.style.backgroundColor = blue;
innerCircle.style.borderColor = blue;