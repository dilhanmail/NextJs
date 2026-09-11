const getStockMessage = (stock) => {
    if (stock === 0 || stock < 0){
        return "Out of stocks";
    } else if (stock <= 5){
        return "Low stocks";
    } else{
        return "In stocks";
    }
}

const isEvenStock = (stock) =>{
    return (stock % 2 === 0);
}

console.log(getStockMessage(-2));
console.log(getStockMessage(0));
console.log(getStockMessage(5));
console.log(getStockMessage(6));

console.log(isEvenStock(4));
console.log(isEvenStock(3));
//functions