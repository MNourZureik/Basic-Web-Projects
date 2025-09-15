// Roll Dice Button Variables :
const roll_button_el = document.getElementById("roll-button");
const dice_el = document.getElementById("dice");
const roll_history_el = document.getElementById("roll-history");
let historyList = [];

// Roll Dice Button Logic :
function rollDice() {
  const roll_result = Math.floor(Math.random() * 6) + 1;
  changeDiceFace(roll_result);
  historyList.push(roll_result);
  updateRollHistory();
}

function updateRollHistory() {
    roll_history_el.innerHTML = "";
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        roll_history_el.appendChild(listItem)
    }
 }

function changeDiceFace(roll_result) {
  dice_el.innerHTML = `&#${9855 + roll_result};`;
}

function getDiceFace(faceNumber) {
    return `&#${9855 + faceNumber};`;
}
roll_button_el.addEventListener("click", () => {
  dice_el.classList.add("roll-animation");
  setTimeout(() => {
    rollDice();
    dice_el.classList.remove("roll-animation");
  }, 1000);
});
