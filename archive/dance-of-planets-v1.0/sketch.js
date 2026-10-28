//Based on Dance of Venus v1.45
//data sources :
//http://hyperphysics.phy-astr.gsu.edu/hbase/kepler.html
//https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf


let rEarth, rVenus, avEarth, avVenus, scl;
let deg, step;
let lim;
let solar = [];
let p1, p2;

function setup() {
  createCanvas(900,900);
  angleMode(DEGREES);

  background(0);
  stroke(255);
  noFill();

  for(let i = 1;i<=10;i++)
  {
    let p = new Planet(0,0);
    solar.push(p);
  }

  solar[1].ov = 0.241;
  solar[2].ov = 0.615;
  solar[3].ov = 1;
  solar[4].ov = 1.88;
  solar[5].ov = 11.9;
  solar[6].ov = 29.5;
  solar[7].ov = 84;
  solar[8].ov = 165;
  solar[9].ov = 248;

  solar[1].au = 0.39;
  solar[2].au = 0.72;
  solar[3].au = 1;
  solar[4].au = 1.52;
  solar[5].au = 5.2;
  solar[6].au = 9.54;
  solar[7].au = 19.2;
  solar[8].au = 30.06;
  solar[9].au = 40;

  solar[1].name = "Mercury";
  solar[2].name = "Venus";
  solar[3].name = "Earth";
  solar[4].name = "Mars";
  solar[5].name = "Jupiter";
  solar[6].name = "Saturn";
  solar[7].name = "Uranus";
  solar[8].name = "Neptune";
  solar[9].name = "Pluto";

  p1 = 6;
  p2 = 9;


  rEarth = solar[p1].au;
  rVenus = solar[p2].au;

  avEarth = solar[p1].ov;
  avVenus = solar[p2].ov;


  scl = width/2*0.01;
  deg = 0;
  step = 0.1;

  xEarth = rEarth*scl*cos(avEarth*deg);
  yEarth = rEarth*scl*sin(avEarth*deg);

  xVenus = rVenus*scl*cos(avVenus*deg);
  yVenus = rVenus*scl*sin(avVenus*deg);

  px = (xEarth+xVenus)/2;
  py = (yEarth+yVenus)/2;

  beginShape();
  curveVertex(px,py);
  curveVertex(px,py);

}

function draw() {

  // background(0,1);
stroke(255);
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
  // curveVertex(mx,my);

  deg+=step;

  px = mx;
  py = my;

  // if(deg >= 360*8+step)
  // {
  //   curveVertex(mx,my);
  //   endShape();
  //   noLoop();
  // }

  fill(255);
  noStroke();
  textSize(16);
  // text("©Jesal Mehta", width/2-125, height/2-30);
  // text("@cabofcuriosity",width/2-125, height/2-10);
  text("©Jesal Mehta, @cabofcuriosity", width/2-225, height/2-10);
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

class Planet
{
  constructor(ov,au)
  {
    this.ov = ov;
    this.au = au;
  }
}
