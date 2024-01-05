  // use const for creating array

  //while using const we can use array methods with const  as we are not changing its address
  const fruits = ["mango","banana","kiwi","lemon"];
  console.log("fruits",fruits);
  fruits.push("orange")
  console.log("fruits",fruits);

  //but we cannot asign new array while using const
  fruits = ["item1","item2"]; //give error Assignment to constant variable
