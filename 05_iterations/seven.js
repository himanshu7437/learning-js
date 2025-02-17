const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => { return num + 10} )

const newNums = myNums // following is the concept of chaining
        .map((num) => num * 10) // whatever array created passes to the next map
        .map((num) => num + 2)
        .filter((num) => num >= 40)

console.log(newNums);



