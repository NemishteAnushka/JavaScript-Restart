//parameter destructring 
// 1) without using parameter destructring

// const person = {
//     name:"Anushka",
//     age:21,
//     city:"Sangli"
// }

// function getDeatils(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.city);
// }
//  getDeatils(person);


 //2 with parameter destructring

const person = {
    name:"Anushka",
    age:21,
    city:"Sangli"
}

function getDeatils({name,age,city}){
    console.log(name);
    console.log(age);
    console.log(city);
}
 getDeatils(person);

 //array destructing

 const numbers = [10,40,80,90];

 function printNumbers([firstNum,secNum,thirdNum,forthNum]){
    console.log(firstNum);
    console.log(secNum);
    console.log(thirdNum);
    console.log(forthNum);
 }
 printNumbers(numbers);
