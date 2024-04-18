let arr = [1, 2, 3, 4, 5, 6];
const sum = () => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};
console.log(sum());
