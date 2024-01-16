function hello(x){
    console.log(arguments)
    const a = "varA";
    const b = "varB";
    return function(){  //this function with return taking surrounding variable for example outerFunction variable like a,b and x
        console.log(a,b,x)
    }
}

const ans = hello("arg");

ans() // have function and  3 variables a,b,x