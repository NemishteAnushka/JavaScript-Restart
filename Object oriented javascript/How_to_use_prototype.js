//how to use prototype with function

// const userMethod = {
//     about: function () {
//       return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//     sing: function () {
//       return "la la la la";
//     },
//   };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const users = createUser(
  "Anuja",
  "Nemishte",
  "anuja@gmail.com",
  19,
  "pune,Maharastra"
);
console.log(users);
console.log(createUser.prototype);
//we directly wrote method using function prototype
createUser.prototype.about = function () {
  return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la";
};
console.log(users.about())
console.log(users.is18())
