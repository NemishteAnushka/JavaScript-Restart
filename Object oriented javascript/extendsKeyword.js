class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    eats(){
        return `${this.name} is eating`
    }
    bodyColor(){
        return `${this.name} is of ${this.color} color`
    }
}
const Animal1 = new Animal("monkey","black")
console.log(Animal1)
console.log(Animal1.bodyColor())

class Dog extends Animal{

}
const tommy = new Dog("tommy","grey")
console.log(tommy)