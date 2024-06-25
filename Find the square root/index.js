function sqrt(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let low = 1;
  let high = n;
  let result = 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSq = mid * mid;

    if (midSq === n) {
      return mid;
    }

    if (midSq < n) {
      low = mid + 1;
      result = mid;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

let n = 25;
console.log(`The integer part of the square root of ${n} is ${sqrt(n)}`);

n = 10;
console.log(`The integer part of the square root of ${n} is ${sqrt(n)}`);
