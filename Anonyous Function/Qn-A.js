// odd numbers in an array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = function () {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) result.push(array[index]);
  }
  return result;
};

console.log(result());
