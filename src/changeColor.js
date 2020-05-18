/*
CHANGING COLOR
*/

var dot = document.querySelectorAll('.dot');
var lines = document.querySelectorAll('.line');
var textChange = document.querySelectorAll('.textChange');
var textTransparent = document.querySelectorAll('.textTransparent');
var blue = "#C0E9FF";
var purple = "#C2BDFB";
var transparent = "transparent";
var currentColor = purple;
var header = document.querySelector('.header');
var innerDot = document.querySelector('.cursor__inner--dot');
var innerCircle = document.querySelector('.cursor__inner--circle');

for(i=0; i<dot.length; i++) {
    dot[i].addEventListener('click', ChangeColor);
}

for(l=0; l<textTransparent.length; l++) {
    textTransparent[l].addEventListener("mouseenter", function() {
        this.style.color = dot[0].style.backgroundColor ? dot[0].style.backgroundColor : purple;
    }) 
}
for(m=0; m<textTransparent.length; m++){
    textTransparent[m].addEventListener("mouseleave", function() {
        this.style.color = transparent;
    }) 
} 



function ChangeColor(e) {
    if(currentColor == blue)
        currentColor = purple;
    else
        currentColor = blue;

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

    if (currentColor == blue) {
        header.style.borderBottomColor = "rgb(192, 233, 255, 0.2)";
    } else {
        header.style.borderBottomColor = "rgb(194, 189, 251, 0.2)";
    }
    
    for(i=0; i<dot.length; i++) {
        dot[i].style.animationPlayState = "paused";
    }

    if (currentColor == blue) {
        innerDot.style.backgroundColor = purple;
        innerCircle.style.borderColor = purple;
    } else {
        innerDot.style.backgroundColor = blue;
        innerCircle.style.borderColor = blue;
    }
    
   

    localStorage.setItem('currentColor', currentColor);
    

    
}