const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
})

console.log("sum",sum);

//accumulator           //currentValue             //return
//1                     2                           3
//3                     3                           6
//6                     4                           10
//10                    5                           15

//real world example

const shoppingCart = [
    {item:"Laptop",price:60000},
    {item:"SmartPhone",price:19000},
    {item:"TV",price:35000},
    {item:"Bluetooth airpods",price:3000}
]

const total = shoppingCart.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.price;
},0)

console.log("total",total);