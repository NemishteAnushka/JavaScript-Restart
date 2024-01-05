//objects inside array
//very usefull in real world application

const users = [
    { userId: 1, firstName: "anushka" ,age:21},
    { userId: 2, firstName: "anuja" ,age:17},
    { userId: 3, firstName: "riya" ,age:26},
    { userId: 4, firstName: "nisha" ,age:19},

];
console.log(users);

for(let user of users){
    console.log(user);//print all users in loop
    console.log(user.userId); //prints user id
    console.log(user.firstName);
    console.log(user.age);
}
