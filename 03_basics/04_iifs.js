// Immediately Invoked Function Expressions (IIFE)
// --> used remove the global pollution, also if we have to run a function immediately , we can use IIFE.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')