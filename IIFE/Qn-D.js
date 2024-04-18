const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = (function () {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (isPrime(array[index])) {
      result.push(array[index]);
    }
  }
  return result;
})();

function isPrime(number) {
  let factors = 0;
  for (let factor = 1; factor <= number; factor++) {
    if (number % factor === 0) {
      factors++;
    }
  }
  if (factors === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(result);
