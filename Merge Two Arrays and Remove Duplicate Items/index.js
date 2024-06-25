let array1 = [1, 2, 3];
let array2 = [3, 4, 5];

let mergedArray = array1.concat(array2);
let uniqueArray = [...new Set(mergedArray)];

console.log(uniqueArray);
