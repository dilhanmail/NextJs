const products = [
    {name:"Car", price:100},
    {name:"Van", price:400},
    {name:"Bus", price:300},
];

const names = products.map((p) => p.name);
console.log(names);

const expensiveItems = products.filter((p) => p.price >250);
console.log(expensiveItems);

const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);


const mostExItem = products.reduce((curHighest, p) => {
    if (curHighest.price < p.price){
        return p;
    }
    return curHighest;
}, products[0]);
console.log(mostExItem);

