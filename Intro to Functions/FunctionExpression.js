//function expression
const sayHello = function(){
    console.log("Hello!");
}
sayHello();
sayHello();

const signHappyBirthdaySong = function(){
    console.log("Happy birthday to you!");
}
signHappyBirthdaySong();

const sumOfThreeNumbers = function(num1,num2,num3){
    return num1+num2+num3
}
const sum = sumOfThreeNumbers(2,2,2);
console.log("sum of 3 numbers = ",sum);

const isEven = function(num){
    return num%2===0
}
const eveNum = isEven(2)
console.log(`Given number is even`,eveNum);

const firstCharOfName = function(name){
    return (name[0].toUpperCase())
}
const char1st = firstCharOfName("aqahd");
console.log("char1st",char1st);

const findTarget = function (array,target){
    for(let i = 0 ;i<array.length ; i++){
        if(array[i] === target)
        {
            return i;
        }
    }
    return -1
}

console.log(findTarget([1,35,47,8,9],9));