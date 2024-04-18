// Rotate an array k times
let array = [1, 2, 3, 4, 5, 6];
let k = 4;
let newArray = (function () {
  let result = [];
  for (let index = k; index < array.length; index++) {
    result.push(array[index]);
  }
  for (let index = 0; index < k; index++) {
    result.push(array[index]);
  }
  return result;
})();

console.log(newArray);
