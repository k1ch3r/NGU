// I am testing fleet today

// obviously we need number to go up

const mostBelovedNumberElem = document.getElementById("bln");
const growIncrementElem = document.getElementById("incrementScore");
const warningElem = document.getElementById("warnings")
let mostBelovedNumber = 10.0;
let mostBelovedNumberOut = mostBelovedNumber;
let growIncrement = 0.1;
let lastTime;
let growButton = document.getElementById("growButton");
let warningStrings = ["moaar moneyyyyy!", "cash cash cash", "why number no go up?", "this seems pointless?!", "I like watching numbers go up."]

function updateNumber(){
  if(mostBelovedNumber < 1000){
    let mostBelovedNumberOut = mostBelovedNumber.toFixed(2);
    mostBelovedNumberElem.textContent = parseFloat(mostBelovedNumberOut); 
  }
  else if(mostBelovedNumber < 1000000){
    document.getElementById("bln").style.color = "rgb(235, 255, 0)";
    let mostBelovedNumberOut = (mostBelovedNumber/1000);
    mostBelovedNumberOut = mostBelovedNumberOut.toFixed(2);
    mostBelovedNumberElem.textContent = String(parseFloat(mostBelovedNumberOut)) + "k";   
  }
  else{
    document.getElementById("bln").style.color = "rgb(235, 150, 0)";
    let mostBelovedNumberOut = (mostBelovedNumber/1000000);
    mostBelovedNumberOut = mostBelovedNumberOut.toFixed(2);
    mostBelovedNumberElem.textContent = String(parseFloat(mostBelovedNumberOut)) + "M!";
  }
}

setInterval(mainGrowth, 1000);

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
if(mostBelovedNumber > 1000000){
  warningElem.textContent = "dude STOP! game is over. touch grass!"
 }
    
else if(mostBelovedNumber > 10000) {
  warningElem.textContent = "okay I guess you won?"
  }

else{
  let randomWarning = warningStrings[Math.floor(Math.random()*warningStrings.length)];
  warningElem.textContent = randomWarning
  }
}