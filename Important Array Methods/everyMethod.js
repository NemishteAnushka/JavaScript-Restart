const shoppinCart = [
    {product_id:1,product_name:"p1",price:5000},
    {product_id:2,product_name:"p2",price:50},
    {product_id:3,product_name:"p3",price:6200},
    {product_id:4,product_name:"p4",price:785},
    {product_id:5,product_name:"p5",price:100},
    {product_id:6,product_name:"p6",price:954},
];

const ans = shoppinCart.every((item)=>{
    return item.price > 10
})

console.log(ans);

const number = [2,4,6,8,10];
const isEven = number.every((num)=>num%2===0)
console.log(isEven);