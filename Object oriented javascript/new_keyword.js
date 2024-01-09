//new keyword
function createUser(firstName, lastName, age) {
    //this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  //return this
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
const user1 = new createUser("Anushka", "nemishte", 22);
//new keyword doing 3 things here
//1)creating empty object ex this = {}
//2) return this
//3) new keyword will do Object.create work by its own like Object.create(createUser.prototype)
console.log(user1);
user1.about()
