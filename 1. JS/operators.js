const price = 33;
const qty = 3;

const total = qty * price;
console.log(total);

const isExpensive = total > 500;
console.log(isExpensive);

const isEven = (total % 2) === 0;
console.log(isEven);

console.log(`Total is Rs. ${total} | Is Expensive ${isExpensive}`);
