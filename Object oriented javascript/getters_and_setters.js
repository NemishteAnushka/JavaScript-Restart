class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age
    }
    //get method so that we can treat method as property
    get fullName(){
        return`${this.firstName} ${this.lastName} is my name.I am ${this.age} year old`
    }
    // setName(firstName,lastName,age){
    //     this.firstName = firstName;
    //     this.lastName= lastName;
    //     this.age = age
    // }

    setFullName(fullName){
        const[firstName,lastName]=fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName
    }
}
const person1 = new Person("Anushka","Nemishte",28);
console.log(person1)
//we need to call method by giving () 
// console.log(person1.fullname());
//now i want that i can call fullname as property of an object like person1.fullName for that we use get 
// console.log(person1.fullname) //now if we call person.fullName() it will give error  person1.fullname is not a function 
//so get method will treat it as property of an object 

//set property will set name ,lastname and age
// person1.setName("Anuja","kulkarni",45);
// console.log(person1)

person1.setFullName("Riya Sharma");
console.log(person1.fullName);