//Create an object representing a product with properties name, price, and category. Use object destructuring to extract and print these properties.
const product ={
    name:"iphone 15 ",
    price:55000,
    category:"mobile"
}
console.log('product',product);

const {name,price,category}=product
console.log("product name",name);
console.log("product price",price);
console.log("product category",category);