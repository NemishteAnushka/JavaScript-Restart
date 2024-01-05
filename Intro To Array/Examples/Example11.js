const numbers = [1, 2, 3, 4, 5];
// Create a new array with only the odd numbers from the numbers array
 const oddNumbers = [];

 for(let i=0 ; i<numbers.length;i++){
    if(numbers[i] % 2 !==0)
    {
        oddNumbers.push(numbers[i])
    }
 }
 console.log(oddNumbers);