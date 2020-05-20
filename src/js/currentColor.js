var currentColor = localStorage.getItem('currentColor');
var dot = document.querySelectorAll('.dot');
var lines = document.querySelectorAll('.line');
var textChange = document.querySelectorAll('.textChange');
var textTransparent = document.querySelectorAll('.textTransparent');
var header = document.querySelector('.header');
var blue = "#C0E9FF";
var purple = "#C2BDFB";
var svg = document.querySelector('.work__button--svg');
var innerDot = document.querySelector('.cursor__inner--dot');
var innerCircle = document.querySelector('.cursor__inner--circle');

for(i=0; i<dot.length; i++) {
  dot[i].style.backgroundColor = currentColor;
}
for(j=0; j<textChange.length; j++) {
  textChange[j].style.color = currentColor;
}
for(k=0; k<lines.length; k++) {
  lines[k].style.backgroundColor = currentColor;
  if (currentColor == blue || currentColor == purple) {
    lines[k].style.opacity = "20%";
  }
}

for(k=0; k<textTransparent.length; k++) {
  textTransparent[k].style.webkitTextStrokeColor = currentColor;
}
header.style.borderBottomColor = currentColor;
if (currentColor == blue) {
  header.style.borderBottomColor = "rgb(192, 233, 255, 0.2)";
} else {
  header.style.borderBottomColor = "rgb(194, 189, 251, 0.2)";
}

if (currentColor == blue) {
  svg.setAttribute("fill", blue);
} else {
  svg.setAttribute("fill", purple);
}

if (currentColor == blue) {
  innerDot.style.backgroundColor = purple;
  innerCircle.style.borderColor = purple;
} else {
  innerDot.style.backgroundColor = blue;
  innerCircle.style.borderColor = blue;
}

//localStorage.clear();