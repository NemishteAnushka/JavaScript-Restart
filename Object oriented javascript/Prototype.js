function hello(){
console.log('hello')
}
hello();
console.log(hello.prototype)

//prototype is blank object in which we can pass key values as per our requirements
//only functions provide prototype
//name ----> tells function name
console.log(hello.name)

//how to add properties in function using prototype
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.func = function(){
    return "i am function in prototype"
}
console.log(hello.prototype)
//call function
console.log(hello.prototype.func())