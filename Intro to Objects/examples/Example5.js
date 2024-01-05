//Create an object with at least 5 properties. Loop through the object and print the key-value pairs.

const obj = {
    name:"Anushka",
    age:21,
    DOB:"23 oct 2001",
    city:"Sangli",
    country:"India"
}
console.log("obj",obj);

for (let key in obj)
{
    console.log(`${key} : ${obj[key]}`);
}