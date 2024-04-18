// Convert all the strings to title caps in a string array
const stringArray = ["hello", "world"];
const result = (function () {
  for (let index = 0; index < stringArray.length; index++) {
    stringArray[index] =
      stringArray[index][0].toUpperCase() + stringArray[index].slice(1);
  }
  return stringArray;
})();
console.log(result);
