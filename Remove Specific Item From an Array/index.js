let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);

if (index !== -1) {
  array.splice(index, 1);
}

console.log(array);
