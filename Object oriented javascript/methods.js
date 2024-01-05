//Create your own method
// method is function inside object

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
} 
const person = {
    firstName : "Anushka",
    age : 21,
    about: personInfo
}

const person2 ={
    firstName:"Anuja",
    age:17,
    about:personInfo
}
person.about();
person2.about();