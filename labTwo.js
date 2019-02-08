var con = function()
{
  removeElement("speech");
  var before = document.createElement("img");
  before.src = "snap.jpg";
  resetButton.appendChild(before);
}




// var snap = function()
// {
//   var vict = document.getElementById("Vict");
//   vict.innerText =" (✖╭╮✖) (☉_☉) (✖╭╮✖) (☉_☉)";
//   document.getElementById("resetButton").disabled=false;
// }

var reset = function()
{
  var vict=document.getElementById("Vict");
  vict.innerText="(◕‿◕✿) (◕‿◕✿) (◕‿◕✿) (◕‿◕✿)"
}
