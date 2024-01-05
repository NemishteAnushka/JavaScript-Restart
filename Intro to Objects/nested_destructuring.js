//nested destrucuring

const users = [
    { userId: 1, firstName: "anushka" ,age:21},
    { userId: 2, firstName: "anuja" ,age:17},
    { userId: 3, firstName: "riya" ,age:26},
    { userId: 4, firstName: "nisha" ,age:19},
];

const [{firstName},{userId},{age} ,{...rest}]=users;
console.log(firstName);
console.log(userId);
console.log(age);
console.log(rest);