// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI)
// Math.Pi = 5;
// console.log(Math.PI)

const chai = {
    name: "ginger chai",
    isAvailable: true,
    price: 250,

    orderChai: function() {
        console.log("chai nahi bani!!");
    }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false  // now the name is not iterateable.
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// chai.name = "himanshu"; // not allowed to change as writable: false
// console.log(chai.name);

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function') { // help to not iterate the functions
        console.log(`${key}, ${value}`);
    }
}

