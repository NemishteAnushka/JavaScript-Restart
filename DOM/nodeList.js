//nodelist
let nodeListItems = document.querySelectorAll("a");
console.log(nodeListItems);
//we can use
//for loop
//for of loop
//forEach loop in NodeList

//for loop
// for (let i = 0; i < nodeListItems; i++) {
//   const nodeListItem = nodeListItems[i];
//   nodeListItem.style.backgroundColor = "yellow";
// }

//for of
// for(let nodeItem of nodeListItems){
//     nodeItem.style.backgroundColor = "red"
// }

//forEach
nodeListItems.forEach((element)=>{
    element.style.color="yellow";
    element.style.backgroundColor = "red";
    element.style.fontSize="24px"
})

//now convert nodeListItems  to array using Array.from() method
nodeListItems = Array.from(nodeListItems);
console.log(Array.isArray( nodeListItems));