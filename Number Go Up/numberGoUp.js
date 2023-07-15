// I am testing fleet today

// obviously we need number to go up

const mostBelovedNumberElem = document.getElementById("bln");
const growIncrementElem = document.getElementById("incrementScore");
const warningElem = document.getElementById("warnings")
let mostBelovedNumber = 1.0;
let growIncrement = 0.1;
let lastTime;
let growButton = document.getElementById("growButton");
let warningStrings = ["moaar moneyyyyy!", "cash cash cash", "why number no go up?", "this seems pointless?!", "I like watching numbers go up."]

setInterval(mainGrowth, 1000);

function updateNumber(){
  let mostBelovedNumberOut = mostBelovedNumber.toFixed(4);
  mostBelovedNumberElem.textContent = parseFloat(mostBelovedNumberOut); 
}

function mainGrowth() {
  mostBelovedNumber = mostBelovedNumber + growIncrement;
  updateNumber();
}

growButton.onclick = function incrementUp() {
  if(mostBelovedNumber > 1) {
    growIncrement = growIncrement + Math.max((growIncrement*0.05), 0.01);
    growIncrementElem.textContent = "Growth: " + growIncrement.toFixed(2);     mostBelovedNumber--
    updateNumber();
  }
  else{
    warningElem.textContent = "you are too poor :(";
  }
}

setInterval(gameOver, 10000)
function gameOver() {
 if(mostBelovedNumber > 10000) {
    warningElem.textContent = "okay I guess you won?"
  }

  else{
    let randomWarning = warningStrings[Math.floor(Math.random()*warningStrings.length)];
    warningElem.textContent = randomWarning
  }
}