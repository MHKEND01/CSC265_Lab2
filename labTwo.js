var con = function()
{
  var speech = document.getElementById("speech")
  removeElement(speech);
  var before = document.createElement("img");
  before.src = "snap.jpg";
  var resetButton = getElementById("resetButton")
  resetButton.appendChild(before);
  window.alert("hi")
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
