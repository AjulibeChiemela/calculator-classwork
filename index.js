// let a = parseInt(prompt("Input first value"));
// let b = parseInt(prompt("Input second value"));

// document.getElementById("val1").innerHTML = `Number 1: ${a}`;
// document.getElementById("val2").textContent = `Number 1: ${b}`;
let a;
let b;

function cta() {
  a = parseInt(prompt("Input first number"));
  b = parseInt(prompt("Input second number"));
  document.getElementById("val1").innerHTML = `Number 1: ${a}`;
  document.getElementById("val2").textContent = `Number 1: ${b}`;
}
let answer = document.getElementById("answer");
function add() {
  answer.innerHTML = `SUM = ${a + b}`;
}

function sub() {
  answer.innerHTML = `DIFFERENCE = ${a - b}`;
}

function div() {
  answer.innerHTML = `QUOTIENT = ${a / b}`;
}

function mul() {
  answer.innerHTML = `PRODUCT = ${a * b}`;
}
