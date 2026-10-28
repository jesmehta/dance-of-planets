let rEarth, rVenus, avEarth, avVenus, scl;
let deg, step;
let lim;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

  background(0);
  stroke(255);

  rEarth = 1;
  rVenus = 0.72;

  avEarth = 1;
  avVenus = 13/8;

  scl = width/2*0.8;
  deg = 0;
  step = 5;

  xEarth = rEarth*scl*cos(avEarth*deg);
  yEarth = rEarth*scl*sin(avEarth*deg);

  xVenus = rVenus*scl*cos(avVenus*deg);
  yVenus = rVenus*scl*sin(avVenus*deg);

  px = (xEarth+xVenus)/2;
  py = (yEarth+yVenus)/2;



}

function draw() {

  // background(0,1);

  translate(width/2, height/2);

  //coordinates
  xEarth = rEarth*scl*cos(avEarth*deg);
  yEarth = rEarth*scl*sin(avEarth*deg);

  xVenus = rVenus*scl*cos(avVenus*deg);
  yVenus = rVenus*scl*sin(avVenus*deg);

  //midpoint
  let mx = (xEarth+xVenus)/2;
  let my = (yEarth+yVenus)/2;

  //draw planet-planet line
  // line(xEarth,yEarth,xVenus,yVenus);

  //draw at midpoint
  // point(mx, my);
  // ellipse(mx,my, 2,2);
  line(px,py,mx,my);

  deg+=step;

  px = mx;
  py = my;

  if(deg >= 360*8+step)
  {
    noLoop();
  }

}

function mouseClicked()
{
  background(0);

  deg = 0;

  xEarth = rEarth*scl*cos(avEarth*deg);
  yEarth = rEarth*scl*sin(avEarth*deg);

  xVenus = rVenus*scl*cos(avVenus*deg);
  yVenus = rVenus*scl*sin(avVenus*deg);

  px = (xEarth+xVenus)/2;
  py = (yEarth+yVenus)/2;
}
