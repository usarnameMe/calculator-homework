const screen = document.getElementById("screen");
const clearAll = document.getElementById("clearAll");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const number = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("dif-color");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    screen.value += this.textContent;
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function () {
    if (this.textContent === "+") {
      screen.value = "";
    } else if (this.textContent === "-") {
      screen.value = "";
    } else if (this.textContent === "*") {
      screen.value = "";
    } else if (this.textContent === "/") {
      screen.value = "";
    } else if (this.textContent === "AC") {
      screen.value = "";
    } else if (this.textContent === "C") {
      screen.value = screen.value.slice(0, -1);
    }
  });
}

let operator = "";
let num1;
equal.addEventListener("click", function () {
  let num2 = parseFloat(screen.value);
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  screen.value = result;
});
