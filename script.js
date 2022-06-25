let value = 0;
let count = document.getElementById("count");

function add() {
  count.textContent = value += 1;
}

let history = document.getElementById("history");

function save() {
  let logHistory = value;
  history.textContent += " " + logHistory + " - ";
  value = 0;
  count.textContent = 0;
}

function reset() {
  value = 0;
  count.textContent = 0;
  history.textContent = "Log History:";
}
