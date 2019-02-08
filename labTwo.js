var con = function()
{
  var before = document.createElement("img");
  before.src = "snap.jpg";
  before.setAttribute("id", "pic");
  var resetButton = document.getElementById("resetButton")
  document.body.appendChild(before);
  document.getElementById('snapButton').innerText = 'SNAP';
 document.getElementById('snapButton').onclick = snap;
 document.getElementById("resetButton").disabled=false;
}
var snap = function()
{
  var vict = document.getElementById("Vict");
  vict.innerText =" (✖╭╮✖) (☉_☉) (✖╭╮✖) (☉_☉)";
  document.getElementById('pic').src = 'actualSnap.jpg';
  document.getElementById("snapButton").disabled=true;
}

var reset = function()
{
  var vict=document.getElementById("Vict");
  vict.innerText="(◕‿◕✿) (◕‿◕✿) (◕‿◕✿) (◕‿◕✿)"
  document.getElementById('snapButton').innerText = 'Continue';
  document.getElementById('snapButton').onclick = con;
  document.getElementById("snapButton").disabled=false;
  document.getElementById("resetButton").disabled=true;
  document.getElementById('pic').parentNode.removeChild(document.getElementById('pic'));
}
