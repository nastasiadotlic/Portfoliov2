var currentColor = sessionStorage.getItem('currentColor');
var dot = document.querySelectorAll('.dot');
var lines = document.querySelectorAll('.line');
var textChange = document.querySelectorAll('.textChange');
var textTransparent = document.querySelectorAll('.textTransparent');
var header = document.querySelector('.header');

for(i=0; i<dot.length; i++) {
  dot[i].style.backgroundColor = currentColor;
}
for(j=0; j<textChange.length; j++) {
  textChange[j].style.color = currentColor;
}
for(k=0; k<lines.length; k++) {
  lines[k].style.backgroundColor = currentColor;
  lines[k].style.opacity = "20%";
}

for(k=0; k<textTransparent.length; k++) {
  textTransparent[k].style.webkitTextStrokeColor = currentColor;
}
header.style.borderBottomColor = currentColor;