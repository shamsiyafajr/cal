var n1,n2;
var b1,b2,b3,b4;
function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num1.position(5,60);

  num2=createInput();
  num2.position(205,60)

  b1= createButton("ADD");
  b1.position(10,200);
  mousePressed(add);

  b2= createButton("ADD");
  b2.position(10,200);
  mousePressed(mul);
  
}

function draw() {
  background(220);
}