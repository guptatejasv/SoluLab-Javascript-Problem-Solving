function sortWords(words) {
  return words.sort((a, b) => a.localeCompare(b));
}

let words = ["banana", "apple", "cherry", "date"];
let sortedWords = sortWords(words);
console.log(sortedWords);
