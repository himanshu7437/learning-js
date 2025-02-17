const myNums = [1,2,3]

const initialVlaue = 0

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, initialVlaue)

console.log(myTotal);

const shoppingCart = [
    {
        itemNames: "iphone",
        price: 1000,
    },
    {
        itemNames: "macbook",
        price: 2000,
    },
    {
        itemNames: "ipad",
        price: 500,
    },
    {
        itemNames: "watch",
        price: 200,
    },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, initialVlaue)

console.log(total);