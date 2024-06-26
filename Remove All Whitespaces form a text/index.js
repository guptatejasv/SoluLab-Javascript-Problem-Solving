function removeWhitespaces(str) {
  return str.replace(/\s+/g, "");
}

let originalString = "  Hello   world!  ";
let stringWithoutWhitespaces = removeWhitespaces(originalString);
console.log(stringWithoutWhitespaces);
