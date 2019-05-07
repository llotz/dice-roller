let chosenDice = 0;
let result = 0;
const dices_span = document.querySelector(".choices");
const result_span = document.querySelector(".result");
const diceRolled_span = document.querySelector(".dice-rolled");
const diceAddButton_span = document.getElementById("add-dice");
const diceAddText_span = document.getElementById("new-dice-value");
var dices = [];

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

function rollDice(diceSites) {
  let result = getRandomNumber(diceSites);
  result_span.innerHTML = result;
  diceRolled_span.innerHTML = "w" + diceSites;
}

function main() {
  diceAddButton_span.addEventListener("click", () => {
    addDice(getNewDiceValueFromUI());
  });
  diceAddText_span.addEventListener("click", () => {
    if (diceAddText_span.value == 0) diceAddText_span.value = "";
  });
}

function getNewDiceValueFromUI() {
  diceToAdd = diceAddText_span.value;
  if (!isNumeric(diceToAdd) || diceToAdd <= 0) {
    alert("Enter a valid value, please!");
    return null;
  }
  return diceToAdd;
}

function addDice(diceToAdd) {
  if (diceToAdd == null) return;
  dices.push(diceToAdd);
  dices_span.innerHTML += generateDiceDOM(diceToAdd);
  dices.forEach(AddNewClickListener);
  diceAddText_span.value = 0;
}

function generateDiceDOM(diceValue) {
  return `<div class='choice dice noselect' id='dice${diceValue}'>w${diceValue}</div>`;
}

function AddNewClickListener(diceValue) {
  document.getElementById(`dice${diceValue}`).addEventListener("click", () => {
    rollDice(diceValue);
  });
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

main();
addDice(6);
addDice(10);
addDice(20);
