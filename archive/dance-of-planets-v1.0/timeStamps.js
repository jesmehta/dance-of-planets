function keyTyped()
{ print("Keypressed");
  if(key === 's')
  {
    saveFile();
  }
  return false;
}

function saveFile()
{
  saveCanvas("Dance of " + solar[p1].name + " and " + solar[p2].name + " " + timeStamp() +".jpg");
  print("file saved");
}

function timeStamp()
{
  let m = checkPad(month());
  let d = checkPad(day());
  let h = checkPad(hour());
  let mm = checkPad(minute());
  let s = checkPad(second());

  let t = year()+m+d+"_"+h+mm+s;
  return t;
}

function checkPad(k)
{
  let p = str(k);
  if (k<10)
  {
    p = "0" + str(k);
  }
  return p;
}
