//  Median of two sorted arrays of the same size.
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let median = function () {
  let combinedArray = [...array1, ...array2].sort(comparator);
  let length = combinedArray.length;
  let medianIndex = Math.floor(length / 2);
  let median = Math.floor(
    (combinedArray[medianIndex] + combinedArray[medianIndex - 1]) / 2
  );
  return median;
};

function comparator(num1, num2) {
  return num1 - num2;
}

console.log(median());
