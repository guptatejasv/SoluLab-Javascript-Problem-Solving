// Using Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);

const mergedObj2 = { ...obj1, ...obj2 };

console.log(mergedObj2);
