//first write normal object then we will create a function that will used to create multiple object
// const user = {
//     firstName:"Anushka",
//     lastName:"Nemishte",
//     email:"anushka@gmail.com",
//     age:22,
//     address:"sangli,Maharastra",
//     about(){
//         return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`
//     },
//     is18(){
//         return this.age >=18
//     }
// }
// console.log(user);
// console.log(user.about());
// console.log(user.is18())

//now will we create a function with which we can define multiple objects

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
}
const users = createUser(
  "Anuja",
  "Nemishte",
  "anuja@gmail.com",
  17,
  "pune,Maharastra"
);
console.log(users);
const userInfo = users.about();
console.log(userInfo);
const is18 = users.is18();
console.log(is18);

const user2 = createUser("Riya","Kulkarni","riya@gmail.com",23,"Belgavi,Maharastra");
console.log(user2)
console.log(user2.about());