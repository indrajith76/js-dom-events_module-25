document.getElementById("body").style.background = "#010221";
document.getElementById("body").style.color = "white";

// option 1: directly set on the HTML element
//<button onclick="console.log(9)">Click Me</button>

// Option 2: add Onclick function on the html element
// IMPORTENT: We will use this sometime
//<button onclick="makeRed()">Make Red</button>
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

// option 4:
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another:
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 Final:
// IMPORTENT: We will use this sometime
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
