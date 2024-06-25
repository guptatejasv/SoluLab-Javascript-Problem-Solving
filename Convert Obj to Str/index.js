const obj = { a: 1, b: 2, c: 3 };

const jsonString = JSON.stringify(obj);
console.log(jsonString);

const customObj = {
  a: 1,
  b: 2,
  toString() {
    return `a: ${this.a}, b: ${this.b}`;
  },
};

console.log(customObj.toString());
