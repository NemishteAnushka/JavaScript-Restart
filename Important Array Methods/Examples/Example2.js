// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

function evenNumber(arr) {
  const num = arr.filter((items) => items % 2 === 0);
  return num;
}

const numbers = [1,2,4,6,8,9,7,3,22];
const result = evenNumber(numbers);
console.log("result",result)