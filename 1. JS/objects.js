const product = {name:"Car", price: 100, stock:50}

console.log(product.name);
console.log(product.price);

product.category = "Cars";
product.price = 250;
console.log(product);

const products = [
    {name:"Car", price: 100},
    {name:"Van", price: 250},
    {name:"Bus", price: 300},
]

products.forEach((product) =>{
    console.log(`${product.name} - Rs. ${product.price}`);
})