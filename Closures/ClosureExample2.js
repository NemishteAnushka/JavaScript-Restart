function myFunction(power){
    return function(num){
        return num ** power
    }
}

const cube = myFunction(35);
const ans = cube(2);
console.log(ans)