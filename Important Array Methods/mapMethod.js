//Map method
const numbers = [1,2,3,4];

const newarr = numbers.map((num)=>{
    return num 
})
console.log(newarr);

//we can also use index

const indexArray = numbers.map((num,index)=>{
    return index;
})
console.log("index",indexArray);

//real world example

const users = [
    {firstName:"Anushka",age:21},
    {firstName:"Anuja",age:17},
    {firstName:"Riya",age:22},
    {firstName:"Pushpa",age:24}
]

const userList = users.map((items)=>{
    return (items.firstName);
})
console.log(userList);