const num = [1,2,5,9,7,8];

const isOneOfTheNumEven = num.some((item)=>{
    return item%2===0
})

console.log(isOneOfTheNumEven);

//real example

const shoppinCart = [
    {product_id:1,product_name:"p1",price:5000},
    {product_id:2,product_name:"p2",price:50},
    {product_id:3,product_name:"p3",price:62000},
    {product_id:4,product_name:"p4",price:785},
    {product_id:5,product_name:"p5",price:100},
    {product_id:6,product_name:"p6",price:954},
];

const ans = shoppinCart.some((item)=>{
    return item.price > 60000;
})
console.log(ans);