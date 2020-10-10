let rollButton = document.querySelector("#roll-button");
let showAllRolls = document.querySelector("#showAllRolls");
let numDice = document.querySelector("#dice_num");
let total = document.querySelector("#total");
let resetButton = document.querySelector("#reset-button");

let count = 0;
let resultsCount = 0;
let dieRoll = [];

rollButton.addEventListener("click", function () {
  while (count < numDice.value) {
    let roll = Math.floor(Math.random() * 6 + 1);
    let total = showAllRolls.innerHTML;
    dieRoll.push(roll);
    count++;
    showAllRolls = [];
  }
  console.log(dieRoll[3]);
  console.log(dieRoll);
});

showAllRolls.addEventListener("click", function () {
  let diceroll = document.querySelector("#dice-roll");
  while (resultsCount < dieRoll.length) {
    diceroll.innerHTML += "<li>" + dieRoll[resultsCount] + "</li>";
    resultsCount++;
  }
});

resetButton.addEventListener("click", function () {
  total.innerHTML = "";
  dice_num.value = "";
  showAllRolls = [0];
});
