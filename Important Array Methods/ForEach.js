const numbers = [1,2,4,5,7,6];
// function multiplyBy2(num,index){
//     console.log("index is ",index);
//     console.log(`${num}*2 = ${num*2}`);
// }
// for(let i=0 ;i<numbers.length;i++){
//     multiplyBy2(numbers[i],i)
// }
//instead of this we can use forEach()

// numbers.forEach(multiplyBy2)

//we can also define function in forEach directly

numbers.forEach((number,index)=>{
console.log(`The number is ${number} and its index is ${index}.When we multiply it by two it will be ${number}*2 = ${number*2}`);
})

//One relasitic example for forEach

const users = [
    {
        firstname:"Anushka",
        age:22
    },

    {
        firstname:"Anuja",
        age:17
    },
    {
        firstname:"Nilima",
        age:28
    },
    {
        firstname:"Pushpa",
        age:32
    },
    {
        firstname:"Riya",
        age:25
    },
];

users.forEach((user)=>{
    console.log("First name of user is : ",user.firstname);
    console.log("age",user.age);
})