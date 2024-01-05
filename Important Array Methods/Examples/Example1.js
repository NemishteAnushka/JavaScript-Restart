// Write a function that takes an array of numbers as input and returns the sum of all elements.

function sumOFArray(arr) {
  const sum = arr.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    0
  );
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sumOFArray(numbers);
console.log("results", result);
