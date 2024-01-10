class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age
    }
    //get method so that we can treat method as property
     fullName(){
        return`${this.firstName} ${this.lastName} is my name.I am ${this.age} year old`
    }

    static classInfo(){ //static method
        console.log("this is static method");
    }
    static desc = "static description" // static property
}
 Person.classInfo(); //static method is that method which can directly called on Person
 console.log(Person.desc);
