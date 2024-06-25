function calculate() {
  // Prompt the user for the first number
  const num1 = parseFloat(prompt("Enter the first number:"));

  // Check if the first input is a valid number
  if (isNaN(num1)) {
    alert("Please enter a valid number for the first input.");
    return;
  }

  // Prompt the user for the second number
  const num2 = parseFloat(prompt("Enter the second number:"));

  // Check if the second input is a valid number
  if (isNaN(num2)) {
    alert("Please enter a valid number for the second input.");
    return;
  }

  // Prompt the user to choose an operation
  const operation = prompt("Choose an operation (+, -, *, /):");

  let result;

  // Perform the chosen operation
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Unknown operation. Please enter one of +, -, *, /.");
      return;
  }

  // Display the result
  alert(`Result: ${result}`);
}

// Call the calculate function to start the calculator
calculate();
