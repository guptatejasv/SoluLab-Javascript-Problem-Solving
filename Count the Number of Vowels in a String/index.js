function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

let string = "hello world";
let vowelCount = countVowels(string);
console.log(vowelCount);
