const number1 = 3;
const number2 = 4;
const operationType = "*";
let message;
let result;
let isEven;

switch (operationType) {
  case "+":
    result = number1 + number2;
    isEven = result % 2 === 0;
    message = `Wynik operacji to: ${result}, który jest ${
      isEven ? "parzysty" : "nieparzysty"
    }.`;
    break;
  case "-":
    result = number1 - number2;
    isEven = result % 2 === 0;
    message = `Wynik operacji to: ${result}, który jest ${
      isEven ? "parzysty" : "nieparzysty"
    }.`;
    break;
  case "*":
    result = number1 * number2;
    isEven = result % 2 === 0;
    message = `Wynik operacji to: ${result}, który jest ${
      isEven ? "parzysty" : "nieparzysty"
    }.`;
    break;
  case "/":
    if (number2 !== 0) {
      result = number1 / number2;
      isEven = result % 2 === 0;
      message = `Wynik operacji to: ${result}, który jest ${
        isEven ? "parzysty" : "nieparzysty"
      }.`;
    } else {
      message =
        "Działanie nie może być wykonane z powodu dzielenia przez zero.";
    }
    break;
  default:
    message = "Wybrano nieprawidłową operację.";
}

console.log(message);
