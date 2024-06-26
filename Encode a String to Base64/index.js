function encodeToBase64(str) {
  return btoa(str);
}

let originalString = "hello world";
let base64String = encodeToBase64(originalString);
console.log(base64String);
