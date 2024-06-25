function isArmstrongNumber(num) {
  let digits = num.toString().split("");
  let numDigits = digits.length;
  let sum = 0;

  for (let digit of digits) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === num;
}

const number = parseInt(
  prompt("Enter a number to check if it's an Armstrong number:")
);

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
