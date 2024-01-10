class Animal {
  constructor(name, fruit) {
    this.name = name;
    this.fruit = fruit;
  }
  eat() {
    return `${this.name} eats ${this.fruit} `;
  }
}
const monkey = new Animal("Monkey", "banana");
console.log(monkey)
console.log(monkey.eat());
