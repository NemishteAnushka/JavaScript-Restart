//data types -: 
//(primitive datatypes)
//number
//string
//booleans
//undefined
//null
//BigInt
//Symbol

//typeof operator - it tells type of data type
//for eg -:  4 - type is number, "anuu" - type is String

//number type
let age = 21;
console.log( typeof age);

//String Type
let fname = "Anushka"
console.log(typeof fname);

//undefined type
let undefinedName ;
console.log( typeof undefinedName);

//null type
let nullVariable = null;
console.log(typeof nullVariable); //typeof null is object . it is bug 

//bigInt
// to know how much big number you can store in number data type
console.log(Number.MAX_SAFE_INTEGER);
//if you want to store more big number than this use bigInt
let number = BigInt(226654654686854654654654654654654);
console.log(number);

//convert number to string
//method 1
let num = 20;
let strNum = num.toString();
console.log(strNum);
console.log(typeof strNum);

//method 2
let num2 = 32;
let text2 = num2+"";
console.log(typeof text2);

//convert string to number
// method 1
let str = "2333";
let strnum = Number(str);
console.log(typeof strnum);

//booleans - this data type return true or false 
let boolVar = true;
console.log(boolVar);
console.log(typeof boolVar);

//comparision operator 

let number1 = 5;
let number2 = 7;
// let both = number1>number2; greaterthan
// let both = number1<number2 smallerthan
// let both = number1>=number2 greaterthan equalto
let both = number1<=number2 //lessthan equalto

console.log(both);

// == vs ===
// == means loose equality check, if the value of two variables are same but not necessarily the datatype then it returns true
// == means loose equality , if we compare value and type of variable then it will give us result
// === means strict equality, if we compare only values not the types of variables then it gives us result
let a = 5;
let b = '5';
let c = 5;
let d = '5';
console.log(a==b); //true because they have same value but different type
console.log(c===d); //false because although they have same value but their type is also different

//!= vs !==
// != means loose inequality, if we compare value and type of variable then it will give us result
// !== means strict inequality, if we compare only values not the types of variables then it gives us result
let e = 6;
let f = '6';
let g = 6;
let h = '6';
console.log(e!=f); //false because they have same value and same type
console.log(g!==h); //true because although they have same value but not same type