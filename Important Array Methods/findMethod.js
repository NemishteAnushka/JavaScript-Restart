const myArray = ["hello","cat","dog","lion"];

const ans = myArray.find((string)=>{
    return string.length === 3
})
console.log(ans);

//real example 

const users = [
    {user_id : 1, user_name:"Anushka"},
    {user_id:2 , user_name:"Anuja"},
    {user_id:3,user_name:"neha"},
]

const ansner = users.find((id)=>{
    return id.user_id === 3
})
console.log(ansner);