//Based on Dance of Venus v1.45
//data sources :
//http://hyperphysics.phy-astr.gsu.edu/hbase/kepler.html
//https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf


let rEarth, rVenus, avEarth, avVenus, scl;
let deg, step;
let lim;
let solar = [];
let p1, p2;
let slScl, slStp, drP1, drP2, radPlot;
let stars = [];


function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

  background(0);
  stroke(255);
  noFill();

  for(let i = 0; i<30;i++)
  {
    let s =
    { x : random(width),
      y : random(height),
      t : random(2*PI)
    };

    stars[i] = s;
  }

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

  createP(""); //moves buttons below canvas
  radPlot = createRadio('Plot');
  radPlot.option("InterPlanet Line", 1);
  radPlot.option("Inter-Planet Midpoint", 2);

  createP("Scale");
  // slScl = createSlider(0.01, 0.5,0.01);
  // slScl.position()
  slScl = createSlider(1, 50,1);
  slStp = createSlider(1, 50,1);

  // Create dropdowns
  createP("Choose Planets");
  dropdown1 = createSelect();
  dropdown1.position(20, 20);
  dropdown1.option('Mercury');
  dropdown1.option('Venus');
  dropdown1.option('Earth');
  dropdown1.option('Mars');
  dropdown1.option('Jupiter');
  dropdown1.option('Saturn');
  dropdown1.option('Uranus');
  dropdown1.option('Neptune');
  dropdown1.option('Pluto');


  dropdown2 = createSelect();
  dropdown2.position(20, 50);
  dropdown2.option('Mercury');
  dropdown2.option('Venus');
  dropdown2.option('Earth');
  dropdown2.option('Mars');
  dropdown2.option('Jupiter');
  dropdown2.option('Saturn');
  dropdown2.option('Uranus');
  dropdown2.option('Neptune');
  dropdown2.option('Pluto');



  p1 = 3;
  p2 = 4;


  rEarth = solar[p1].au;
  rVenus = solar[p2].au;

  avEarth = solar[p1].ov;
  avVenus = solar[p2].ov;


  // scl = width/2*slScl.value;
  scl = width/2*0.05;

  deg = 0;
  step = 0.2;

  xEarth = rEarth*scl*cos(avEarth*deg);
  yEarth = rEarth*scl*sin(avEarth*deg);

  xVenus = rVenus*scl*cos(avVenus*deg);
  yVenus = rVenus*scl*sin(avVenus*deg);

  px = (xEarth+xVenus)/2;
  py = (yEarth+yVenus)/2;
  // scl = width/2*slScl.value;

  beginShape();
  curveVertex(px,py);
  curveVertex(px,py);

}

function draw() {

  // background(0,1);
  stroke(255);

  // let m= map(mouseX, 0, width, 0.01, 0.3);
  let m = slScl.value()/10;
  scl = width/2*m;
  // scl = width/2*slScl.value;

  step = slStp.value()/10;

  // print(slScl.value, m, scl);

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
  if(radPlot.value == 1)
  {
    line(xEarth,yEarth,xVenus,yVenus);
  }

  //draw at midpoint
  if(radPlot.value == 2)
  {
    point(mx, my);
    ellipse(mx,my, 2,2);
    line(px,py,mx,my);
  }
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

  for(let i= 0; i< stars.length;i++)
  {
    let x = stars[i].x;
    let y = stars[i].y;
    let t = stars[i].t;
    let r = sin(t)*5;

    ellipse(x,y,r,r);
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

class Planet
{
  constructor(ov,au)
  {
    this.ov = ov;
    this.au = au;
  }
}
