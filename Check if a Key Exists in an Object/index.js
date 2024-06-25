const obj = {
  key1: "value1",
  key2: "value2",
};

// Using 'in' operator
if ("key1" in obj) {
  console.log("key1 exists in obj");
}

// Using 'hasOwnProperty' method
if (obj.hasOwnProperty("key1")) {
  console.log("key1 exists in obj");
}
