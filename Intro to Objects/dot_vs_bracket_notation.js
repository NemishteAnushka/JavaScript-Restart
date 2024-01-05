// differnace betweendot and bracket notation
const person ={
    name:"Anushka",
    age:21,
    //here i wanted to access space so i used string key
    "person hobbies":["playing","walking","dance"]
}
//this is how we can asseccs through bracket notation
console.log(person["person hobbies"]);

//we can use bracket notation this way also we can explicitly add key and value to object
const key = "email";
person[key]="anushkanemishte@gmail.com"
console.log(person);