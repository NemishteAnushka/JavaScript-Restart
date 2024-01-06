const user = {
    firstName : "Anushka",
    lastName:"Nemishte",
    fullName(){
       console.log(`${this.firstName} ${this.lastName}`)
    }
}
user.fullName();