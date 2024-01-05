function fullName(){
    console.log(`${this.fristName} ${this.lastName} is user's FullName`)
}

const user1={
    fristName : 'John',
    lastName : 'Doe',
}
const user2={
    fristName : 'Anushka',
    lastName : 'Nemishte',
}

const result = fullName.bind(user2);
result();