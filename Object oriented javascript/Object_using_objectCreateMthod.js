//now here we will use Object.create() so that we can take refreance of userMethod in our function
//object.create() will give empty {} object as well as create refreance of another object 
//refer file Object_Create_method for better understanding
const userMethod = {
  about: function () {
    return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "la la la la";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethod);
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
  17,
  "pune,Maharastra"
);
console.log(users);
const userInfo = users.about();
console.log(userInfo);
const is18 = users.is18();
console.log(is18);
const singfunc = users.sing();
console.log(singfunc);
