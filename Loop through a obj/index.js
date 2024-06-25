const obj = {
  key1: "value1",
  key2: "value2",
};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
