const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (op === "^") {
    display.value += "**";
  } else {
    display.value += op;
  }
}

function appendFunction(fn) {
  if (fn === "pi") {
    display.value += Math.PI;
  } else if (fn === "e") {
    display.value += Math.E;
  } else if (fn === "sqrt") {
    display.value += "Math.sqrt(";
  } else {
    display.value += `Math.${fn}(`;
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
