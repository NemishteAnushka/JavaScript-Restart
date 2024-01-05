//sort

const numbers = [9,7,67,5,98];
numbers.sort();
console.log(numbers);
//this will give sorting accorting to string

//if we want numbers to sort according to numbers 
// numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(numbers);


const fruits = ["banana","apple","kiwi","chickoo"]
fruits.sort();
console.log("fruits",fruits);

//real example

const shoppinCart = [
    {product_id:1,product_name:"p1",price:5000},
    {product_id:2,product_name:"p2",price:50},
    {product_id:3,product_name:"p3",price:6200},
    {product_id:4,product_name:"p4",price:785},
    {product_id:5,product_name:"p5",price:100},
    {product_id:6,product_name:"p6",price:954},
];

// const priceLowToHigh = shoppinCart.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(priceLowToHigh);

const priceHighToLow = shoppinCart.sort((a,b)=>{
    return b.price - a.price;
})
console.log(priceHighToLow);

const priceLowToHigh = shoppinCart.sort((a,b)=>{
    return a.price-b.price;
})
console.log(priceLowToHigh);