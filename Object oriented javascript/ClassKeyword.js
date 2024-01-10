class CreateUser  {
    constructor(firstName,lastName,age,email,address){ //constructor
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.address = address
    }
    about(){ //methods
        return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} year old.I live in ${this.address}`
    }
    is18(){
        return this.age>=18;
    }
}

const user1 =  new CreateUser("Anushka","Nemishte",22,"anu@gmail.com","Sangli"); //without using new keyword constructor cannot be called
console.log(user1.firstName);
console.log(user1.about())
console.log(user1.is18())
console.log(Object.getPrototypeOf(user1))