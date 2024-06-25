// Function to check if a number is positive, negative, or zero
function checkNumber(num) {
  if (num > 0) {
    return `${num} is positive`;
  } else if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is zero`;
  }
}

// Example usage
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
