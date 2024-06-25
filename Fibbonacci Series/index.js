function fibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function printFibonacciSequence() {
  const numInput = document.getElementById("numInput").value;
  const num = parseInt(numInput);

  if (isNaN(num) || num <= 0) {
    document.getElementById("result").innerText =
      "Please enter a positive integer.";
    return;
  }

  const fibSequence = fibonacciSequence(num);
  document.getElementById(
    "result"
  ).innerText = `The first ${num} numbers in the Fibonacci sequence are: ${fibSequence.join(
    ", "
  )}`;
}
