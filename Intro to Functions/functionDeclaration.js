//make a function we sings happy birthday to you

function signBirthDaySong(){
    console.log("Happy birthday to you.....!");
}

signBirthDaySong();

//make reuseable function and sum 2 numbers

// function sumOfTwoNumbers(num1,num2){
//     return num1+num2;
// }
// const sum = sumOfTwoNumbers(5,5);
// console.log("sum",sum);

function sumOfThreeNumbers(num1,num2,num3){
    return num1+num2+num3;
}
const sum = sumOfThreeNumbers(5,5,10);
console.log("sum",sum);



// function isEven(number){
//     if(number%2===0){
//         return true
//     }
//    return false
// }
//or 
function isEven(number){
    return number%2===0
}


console.log(isEven(7));

function strFunk(fname){
    return fname[0] //return 1st char of name
}
console.log(strFunk("riya"));

function findTarget(array,target){
    for(let i = 0 ;i<array.length ; i++){
        if(array[i] === target)
        {
            return i;
        }
    }
    return -1
}

console.log(findTarget([1,35,47,8,9],1));