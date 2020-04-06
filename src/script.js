
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
    }

    for(k=0; k<textTransparent.length; k++) {
        textTransparent[k].style.webkitTextStrokeColor = currentColor;
    }
    header.style.borderBottomColor = currentColor;
}



/*
PARALLAX
*/

const Rellax = require('rellax');
var rellax = new Rellax('.title__container');
var rellax = new Rellax('.homepage__subtitle');
var rellax = new Rellax('.scroll');
var rellax = new Rellax('.description');
var rellax = new Rellax('.works');
var rellax = new Rellax('.model--smaller');



/*
CURSOR
*/
/*
{
  // Some help functions.
  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  const lineEq = (y2, y1, x2, x1, currentVal) => {
      let m = (y2 - y1) / (x2 - x1); 
      let b = y1 - m * x1;
      return m * currentVal + b;
  };
  const lerp = (a, b, n) => (1 - n) * a + n * b;
  const body = document.body;
  const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
  const getMousePos = (e) => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;
      if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
      }
      else if (e.clientX || e.clientY) 	{
          posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
      }
      return { x : posx, y : posy }
  }

  // Window sizes.
  let winsize;
  const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  calcWinsize();
  // Recalculate window sizes on resize.
  window.addEventListener('resize', calcWinsize);

  // Custom mouse cursor.
  class CursorFx {
      constructor(el) {
          this.DOM = {el: el};
          this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
          this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
          this.bounds = {dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect()};
          this.scale = 1;
          this.opacity = 1;
          this.mousePos = {x:0, y:0};
          this.lastMousePos = {dot: {x:0, y:0}, circle: {x:0, y:0}};
          this.lastScale = 1;
          this.lastOpacity = 1;
          
          this.initEvents();
          requestAnimationFrame(() => this.render());
      }
      initEvents() {
          window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
      }
      render() {
          this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width/2, 1);
          this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height/2, 1);
          this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width/2, 0.15);
          this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height/2, 0.15);
          this.lastScale = lerp(this.lastScale, this.scale, 0.15);
          this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
          this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
          this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
          this.DOM.circle.style.opacity = this.lastOpacity
          requestAnimationFrame(() => this.render());
      }
      enter() {
          cursor.scale = 2;
      }
      leave() {
          cursor.scale = 1;
      }
      click() {
          this.lastScale = 1;
          this.lastOpacity = 0;
      }
  }
  
  const cursor = new CursorFx(document.querySelector('.cursor'));

  // Custom cursor chnages state when hovering on elements with 'data-hover'.
  [...document.querySelectorAll('[data-hover]')].forEach((link) => {
      link.addEventListener('mouseenter', () => cursor.enter() );
      link.addEventListener('mouseleave', () => cursor.leave() );
      link.addEventListener('click', () => cursor.click() );
  });
}*/