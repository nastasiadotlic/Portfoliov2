/*
disappearance of the home page when the menu is open
 */

var nav = document.getElementById("nav");
var open = document.getElementById('open');
var homepage = document.querySelector(".homepage");


open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
  homepage.style.display = homepage.style.display === 'none' ? '' : 'none';
});

/*
CHANGING COLOR
*/

var dot = document.querySelector('.dot');
var colors = ['red', 'blue', 'green'];
var blue = "#C0E9FF";
var purple = "#C2BDFB";

dot.addEventListener('click', function(color) {
    if (color = purple) {
        dot.style.backgroundColor = blue;
    } else {
        dot.style.backgroundColor = purple;
    }
    /*if(color != blue) {
        dot.style.backgroundColor = blue;
    } else {
        dot.style.backgroundColor = purple;
    }$/
    /*colors.forEach(function(color){
        console.log(color);
        dot.style.backgroundColor = color;
    })

  for(i = 0; i < colors.length; i++) {
      
    dot.style.backgroundColor = colors[i];
  
}*/
})

/*
PARALLAX
*/

const Rellax = require('rellax');
var rellax = new Rellax('.title__container');
var rellax = new Rellax('.homepage__subtitle');
var rellax = new Rellax('.scroll');
/*var rellax = new Rellax('.description__title');
var rellax = new Rellax('.description__container');*/

/*
SCROLL
*/

//faire dispoaraitre le scroll


/*
CURSOR
*/

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
}