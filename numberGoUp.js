// I am testing fleet today

// obviously we need number to go up

const mostBelovedNumberElem = document.getElementById("bln");
const incrementScoreElem = document.getElementById("incrementScore");
const speedScoreElem = document.getElementById("speedScore");
const warningElem = document.getElementById("warnings");
const upgrade1CostElem = document.getElementById("upgrade1Cost");
const upgrade2CostElem = document.getElementById("upgrade2Cost");
const growButton = document.getElementById("growButton");
const speedButton = document.getElementById("speedButton");
const forceButton = document.getElementById("forceButton")

let mostBelovedNumber = 671.0;
let growIncrement = 0.25;
let growthSpeed = 4000;
let speedIncrement = 500;
let upgrade1Cost = 1;
let upgrade2Cost = 5;
let warningStrings = ["moaar moneyyyyy!", "cash cash cash", "why number no go up?", "this seems pointless?!", "I like watching numbers go up.", "css is annoying. did you know that?", "don't look at my sourcecode okay", "it's not about size.", "it's about value. big value.", "coming up with strings to display here.", "this is a one liner.", "do you have anything funny to put here?", "you got to spend number to make number.", "best strategy: don't play!"];
let mostBelovedNumberOut = mostBelovedNumber;
let growthInterval;

growButton.onclick = function incrementUp() {
  if (mostBelovedNumber > upgrade1Cost) {
    mostBelovedNumber = mostBelovedNumber - upgrade1Cost;
    updateNumber();
    upgrade1Cost = upgrade1Cost * 1.80375;
    upgrade1CostElem.textContent = `Cost: ${upgrade1Cost.toFixed(2)}`;
    growIncrement = growIncrement * 1.8470;
    incrementScoreElem.textContent = "Growth: " + growIncrement.toFixed(2);
  }
  else {
    warningElem.textContent = "you are too poor :(";
  }
}

speedButton.onclick = function speedUp() {
  if (mostBelovedNumber > upgrade2Cost && growthSpeed > 100) {
    mostBelovedNumber = mostBelovedNumber - upgrade2Cost;
    updateNumber();
    upgrade2Cost = upgrade2Cost * 1.6;
    upgrade2CostElem.textContent = `Cost: ${upgrade2Cost.toFixed(2)}`;
    growthSpeed = growthSpeed - speedIncrement;
    speedScoreElem.textContent = "Interval: " + (growthSpeed/1000).toFixed(2);
    speedIncrement = speedIncrement / 1.147;
    clearInterval(growthInterval);;
    growthInterval = setInterval(mainGrowth, growthSpeed);
    speedButton.textContent = "Grow faster!";
  }
  else if(mostBelovedNumber < upgrade2Cost){
    warningElem.textContent = "you are too poor :(";
  }
  else{
    warningElem.textContent = "you are too fast xD";
  }
}

forceButton.onclick = mainGrowth;

function updateNumber() {
  if (mostBelovedNumber < 1000) {
    let mostBelovedNumberOut = mostBelovedNumber.toFixed(2);
    mostBelovedNumberElem.textContent = parseFloat(mostBelovedNumberOut);
  }
  else if (mostBelovedNumber < 1000000) {
    document.getElementById("bln").style.color = "rgb(235, 255, 0)";
    let mostBelovedNumberOut = (mostBelovedNumber / 1000);
    mostBelovedNumberOut = mostBelovedNumberOut.toFixed(2);
    mostBelovedNumberElem.textContent = String(parseFloat(mostBelovedNumberOut)) + "k";
  }
  else {
    document.getElementById("bln").style.color = "rgb(235, 150, 0)";
    let mostBelovedNumberOut = (mostBelovedNumber / 1000000);
    mostBelovedNumberOut = mostBelovedNumberOut.toFixed(2);
    mostBelovedNumberElem.textContent = String(parseFloat(mostBelovedNumberOut)) + "M!";
  }
}


function mainGrowth() {
  mostBelovedNumber = mostBelovedNumber + growIncrement;
  updateNumber();
}

setInterval(gameOver, 10000)

function gameOver() {
  if (mostBelovedNumber > 100000000) {
    warningElem.textContent = "dude STOP! game is over. touch grass!";
  }

  else if (mostBelovedNumber > 10000) {
    warningElem.textContent = "okay I guess you won?";
  }

  else {
    let randomWarning = warningStrings[Math.floor(Math.random() * warningStrings.length)];
    warningElem.textContent = randomWarning;
  }
}