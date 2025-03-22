let expression = "";

function press(num) {
  expression += num;
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    expression = eval(expression).toString();
    document.getElementById("display").value = expression;
  } catch (err) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}
