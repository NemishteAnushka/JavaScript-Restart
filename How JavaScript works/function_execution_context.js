//function execution context

let foo = "foo";
console.log(foo);
function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar = "var inside fun";
    console.log(myVar)
    const fullName = firstName + " "+ lastName
    return fullName
}
const personName = getFullName("Anushka","Nemishte");
console.log(personName);