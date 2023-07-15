// I am testing fleet today

// obviously we need number to go up

const mostBelovedNumberElem = document.getElementById("bln");
const growIncrementElem = document.getElementById("incrementScore");
const warningElem = document.getElementById("warnings")
let mostBelovedNumber = 1.0;
let growIncrement = 0.1;
let lastTime;
let growButton = document.getElementById("growButton");

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


/*function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}
*/