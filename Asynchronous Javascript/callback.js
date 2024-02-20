//callback
//in synchronous
// function myfunc(callback){
//     console.log("function doing task 1")
//     callback()
// }
// myfunc(()=>{
// console.log("function doing task 2")
// });

//another callback example

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

// function addTwoNum(num1,num2){
// console.log(num1+num2)
// }
getTwoNumbersAndAdd(
  5,
  1,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("Wrong data type");
  }
);
