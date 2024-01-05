const signBirthDaySong = () => {
    console.log("Happy Birthday To you !!!!");
}
signBirthDaySong()

const addThreeNumbers = (num1,num2,num3) =>{
    return num1+num2+num3;
}
const sum = addThreeNumbers(2,2,2);
console.log("sum",sum);

const isEven = (num) =>{
    return num%2===0;
}
console.log("isEven",isEven(4));

// const firstChar = (name) =>{
//     return (name[0].toUpperCase())
// }

//another way for writting arrow function you can omit () , braces and 'return' for one parameter and one line of code for return

const firstChar = name => (name[0].toUpperCase())

console.log("first Char",firstChar("ewagedu"));



const findTarget = (array,target)=>{
    for(let i = 0 ;i<array.length ; i++){
        if(array[i] === target)
        {
            return i;
        }
    }
    return -1
}

console.log(findTarget([1,35,47,8,9],8));