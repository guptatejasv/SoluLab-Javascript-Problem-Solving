// Function that returns a timeout function with a parameter
function createTimeoutFunction(parameter) {
  return function () {
    console.log("Parameter passed to timeout:", parameter);
  };
}

const myParameter = "Hello, World!";

setTimeout(createTimeoutFunction(myParameter), 1000);
setTimeout(createTimeoutFunction(myParameter), 2000);
setTimeout(createTimeoutFunction(myParameter), 3000);
