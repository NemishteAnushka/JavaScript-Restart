//rest parameters

//1 without rest parameters

// function myFunc(a,b,c){
//     console.log("a is ",a);
//     console.log("b is ",b);
//     console.log("c is ",c);
// }
// myFunc(1,2,5); //output a is  1 b is  2 c is  5
// myFunc(8,5,4,75,632,1,5,4,76) //out put a is 8 b is 5 c is 4 and other arguments are ignored

//2 with rest parameters

function myFunc(a, b, ...c) {
  console.log("a is ", a);
  console.log("b is ", b);
  console.log("c is ", c);
}
myFunc(1,5,7,8,9,6,5,4,5) //output a is 1 b is 5 c is  [7, 8, 9, 6, 5, 4, 5]


function addNumbers (...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;

    }
    return sum
}

const ans = addNumbers(4,2,9,6,3);
console.log(ans);