// Write a function that finds and returns the maximum value in an array of numbers.

function maxValue(arr){
    if(arr.length === 0){
        console.log("No records to display");
    }

    const maxArray = Math.max(...arr)
    return maxArray
}

const numbers = [1,5,2,9,4,6,45,3];
const result = maxValue(numbers);
console.log("result",result);