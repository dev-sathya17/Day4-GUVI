// Remove duplicates from an array
const array = [1, 1, 2, 3, 4, 5, 3, 2];

const newArray = (function () {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (!result.includes(array[index])) {
      result.push(array[index]);
    }
  }
  return result;
})();

console.log(newArray);
