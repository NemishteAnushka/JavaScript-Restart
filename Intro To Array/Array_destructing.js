 //array destructuring

 const arrDes = ["item1","item2","item3","item4"];
 let [myVar1,myVar2] = arrDes;
 console.log("myvar1",myVar1);
 console.log("myvar2",myVar2);

 //skipping element by leaving space

 const fruits =["mango","lemon","banana","oraange"];
 //skipping second fruit
 const [fruit1, ,fruit3,fruit5]=fruits;
 console.log(fruit1);
 console.log(fruit3);
 console.log(fruit5);

 //using (...rest)

 const numbers = [1,2,3,4,5,6,7];
 const [first,...rest]=numbers;
 console.log(first);
 console.log(rest);