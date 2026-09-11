const stock = 50;

if (stock === 0 || stock < 0){
    console.log("Out of stocks");
} else if (stock > 0 && stock <= 5 ){
    console.log("Low stocks");
} else {
    console.log("Have stocks");
}

if (stock > 0 && stock % 2 === 0){
    console.log("In stocks and even");
}