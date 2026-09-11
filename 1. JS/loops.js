const prices = [50,75,100,25];

for (let i = 0; i < prices.length; i++){
    console.log(prices[i]);
}

let count = 3
while (count > 0 ){
console.log(prices[count]);
count--;
}
console.log("-----------------------------------------")


prices.forEach((item) => {
    console.log(`Doubled: ${item * 2}`);
});
//Loops