class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color
    }
    eat(){
        return `${this.name} is eating`
    }
    bodyColor(){
        return`${this.name} is of ${this.color} color`
    }
}
const Animal1 = new Animal("monkey","brown");
console.log(Animal1)

class Dog extends Animal{
    constructor(name,color,speed){
        super(name,color);
        this.speed = speed
    }
    run(){
        return `The dog is running at a speed of ${this.speed}kmph`
    }
}
const tommy = new Dog("tommy","black",45);
console.log(tommy);
console.log(tommy.run())
console.log(tommy.eat())