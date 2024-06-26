function getFileExtension(filename) {
  return filename.split(".").pop();
}

let filename = "example.file.txt";
let extension = getFileExtension(filename);
console.log(extension);
