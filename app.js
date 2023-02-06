const screen = document.querySelectorAll("#screen");
const clearAll = document.querySelectorAll("#clearAll");
const clear = document.querySelectorAll("#clear");
const equal = document.querySelectorAll("#equal");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".dif-color");

clear.addEventListener("click", input.value.slice(0, -1));
clearAll.addEventListener("click", (input.value = ""));

let operator = "";
let num1;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    screen.value += this.textContent;
  });
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    operator = operators[i].innerHTML;
    num1 = Number(input.value);
    screen.value = "";
  });
}

equal.addEventListener("click", function () {
  let num2 = Number(screen.value);
  let result;
  operator === "+"
    ? num1 + num2
    : operator === "-"
    ? num1 - num2
    : operator === "*"
    ? num1 * num2
    : operator === "/"
    ? num1 / num2
    : "";
  screen.value = result;
});
