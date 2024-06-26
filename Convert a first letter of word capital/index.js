function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let originalString = "hello";
let capitalizedString = capitalizeFirstLetter(originalString);
console.log(capitalizedString);
