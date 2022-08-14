document.getElementById("body").style.background = "#010221";
document.getElementById("body").style.color = "white";

// option 1: directly set on the HTML element


// Option 2: add Onclick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.background = "blue";
}

// option 3 another:
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
