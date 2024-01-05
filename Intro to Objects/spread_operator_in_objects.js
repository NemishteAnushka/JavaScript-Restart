//spread operator in objects

const person = {
    name:"Anushka",
    age:21
}

const cars = {
    carName:"BMW",
    modelYear: 2020,
    color:"Black"
}

//now make both objects to single 1 object
//using spread operator

// const newObj = {...person,...cars}
const newObj = {...person,...cars,key45:"value45"} // adding new key
console.log(newObj);