function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let min = 1;
let max = 100;
let randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
