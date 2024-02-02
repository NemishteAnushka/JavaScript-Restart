//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll

//getElements by class name - : gives html Collection array like object
let navItems = document.getElementsByClassName("nav-items");
// console.log(navItems[0])

//querySelectorAll -: NodeList 
//  const navItems = document.querySelectorAll(".nav-items");
//  console.log(navItems[2])


//for loop
// for(i=0;i<navItems.length;i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "purple";
//     navItem.style.fontWeight = "bold"
// }

//for of loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "red"
// }

//how to convert HTML collection in array
//use Array.from() method

navItems = Array.from(navItems);
console.log(Array.isArray(navItems))
//using forEach
navItems.forEach(element => {
    element.style.backgroundColor = "red"
});