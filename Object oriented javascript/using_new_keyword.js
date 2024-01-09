//we can also call this as constructor function
function CreateUser(firstName, lastName, age, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email; 
  this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} ${this.lastName} is my name.\nI live in ${this.address}`
}
CreateUser.prototype.is18 = function(){
    return this.age>=18
}
const user1 = new CreateUser("Anushka","Nemishte",22,"anu@gmail.com","Sangli Maharastra");
console.log(user1);
console.log(user1.about());
console.log(user1.is18())