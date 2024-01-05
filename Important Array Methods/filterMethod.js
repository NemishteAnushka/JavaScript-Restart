const numbers = [1,2,3,4,6,8,5,20,45,12];

const evenNumbers = numbers.filter((number)=>{
    return number%2===0;
})
console.log("evenNumbers",evenNumbers);

const oddNumber = numbers.filter((number)=>{
    return number%2!==0
})
console.log("oddNumbers",oddNumber);