


var purple = "#C2BDFB";
var blue = "#C0E9FF";

//var currentColor = purple;

localStorage.setItem('currentColor', purple);
innerDot.style.backgroundColor = currentColor == purple ? blue : purple;
innerCircle.style.borderColor = currentColor == purple ? blue : purple;