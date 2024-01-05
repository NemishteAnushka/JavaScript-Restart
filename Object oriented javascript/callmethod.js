function greet(){
    console.log("hello good morning");
}
// greet();
// wecan also call like this
greet.call();

const userInfo = {
    firstName : "Anushka",
    lastName : "Nemishte",
    fullName : function(hobby,age){
        console.log(`Fullname of user is ${this.firstName} ${this.lastName} . Hobby is ${hobby} and age is ${age}`)
    }
};
// userInfo.fullName();
const userInfo2 = {
    firstName : "Anuja",
    lastName : "Nemishte",
    fullName : function(){
        console.log(`Fullname of user is ${this.firstName} ${this.lastName}`)
    }
};
userInfo.fullName.call(userInfo2,"dance",22)

const person = {
    personInfo : function(hobby){
        console.log(`My name is ${this.firstName}.I live in ${this.address}.I am ${this.age} year old . My hobby is ${hobby}`)
    }
}

const person1 = {
    firstName:"Anushka",
    address:"Sangli",
    age:22
}

person.personInfo.call(person1,"dancing")

const person2 = {
    firstName:"Anuja",
    address:"Sangli",
    age:17
}
person.personInfo.call(person2,"playing badminton")
