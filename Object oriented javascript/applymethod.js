function about(hobby,place){
    console.log(`${this.firstName} age ${this.age} love ${hobby} and leaves in ${place}`)
}

const person1 ={
    firstName: "John",
    age:24
}

//method same as call but need to pass arguments in form of array in apply method
about.apply(person1,["guitar","Sangli"])