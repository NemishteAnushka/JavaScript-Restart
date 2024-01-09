//hasOwnProperty gives the key only which are of user not of prototype
function CreateUser(firstName, lastName, age, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} ${this.lastName} is my name.\nI live in ${this.address}`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
const user1 = new CreateUser(
  "Anushka",
  "Nemishte",
  22,
  "anu@gmail.com",
  "Sangli Maharastra"
);
//for example
for (let key in user1) {
  // console.log(key) this prints all key including prototype key for ex about,is18 
  if (user1.hasOwnProperty(key)) {
    console.log(key); //this will give the keys which are only in user1 for example  firstName,lastName,age,email,address
  }
}
