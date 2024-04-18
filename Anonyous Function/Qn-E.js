// Return all the palindromes in an array
let array = ["racecar", "madam", "hello", "welcome"];

let result = function () {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (isPalindrome(array[index])) {
      result.push(array[index]);
    }
  }
  return result;
};

function isPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(result());
