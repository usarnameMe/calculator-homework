const screen = document.querySelector("#screen");
const clearAll = document.querySelector("#clearAll");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".dif-color");

clear.addEventListener("click", function () {
  screen.value = screen.value?.slice(0, -1);
});
clearAll.addEventListener("click", () => {
  screen.value = "";
});

let operator = "";
let num1;

number.forEach((num) => {
  num.addEventListener("click", function () {
    screen.value = this.textContent;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", function () {
    operator = op.innerHTML;
    num1 = Number(screen.value);
    screen.value = " ";
  });
});

equal.addEventListener("click", function () {
  console.log(screen.value);
  let num2 = Number(screen.value);
  console.log(num1);
  console.log(num2);
  console.log(operator);
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
