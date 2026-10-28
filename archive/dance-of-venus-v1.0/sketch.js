let rEarth, rVenus, avEarth, avVenus, scl;


function setup() {
  createCanvas(600,600);
  background(225);
  angleMode(DEGREES);

  stroke(0,128);
  rEarth = 1;
  rVenus = 0.72;

  avEarth = 1;
  avVenus = 13/8;

  scl = width/2*0.8;


}

function draw() {

  translate(width/2, height/2);

  xEarth = rEarth*scl*cos(avEarth*frameCount*5);
  yEarth = rEarth*scl*sin(avEarth*frameCount*5);

  xVenus = rVenus*scl*cos(avVenus*frameCount*5);
  yVenus = rVenus*scl*sin(avVenus*frameCount*5);

  line(xEarth,yEarth,xVenus,yVenus);


}
