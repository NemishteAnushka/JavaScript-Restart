//string methods
//trim()-removes whitespaces
//toUppercase()-makes string to uppercase
//toLowerCase()-make string to lowercase
// slice()-slice the string
//strings are immutable

let fname = "Anushka"
//trime
let firstName = "          Anushka                   ";
console.log(firstName.length);
let newTrimString = firstName.trim();
console.log(newTrimString);
console.log(newTrimString.length);

//lowercase
let lowerName =  fname.toLowerCase()
console.log(lowerName);

//uppercase 
let upperName = fname.toUpperCase();
console.log(upperName);

//slice()
let newSlice = fname.slice(0,3);
console.log(newSlice);
// if we dont provide ending value for slice it will take start value to end like slice(1) == nushka
let newwSlice = fname.slice(1);
console.log(newwSlice);