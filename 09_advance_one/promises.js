const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise One is completed');
        resolve();
    }, 3000);
});

promiseOne.then( function() {
    console.log('Promise consumed');
});

// 2nd promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async operation 2');
        resolve();
    }, 2000);
}).then(function() {
    console.log('Asynch 2 resolved');
});

// third promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: 'john', password: '1234', email: 'john123@gmail.com'});
    }, 1000);
}); 

promiseThree.then(function(user) {
    console.log('User: ', user);

});

// promise four

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: 'john', password: '1234'});
        } else {
            reject('Promise four is rejected');
        }
    }, 4000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('Promise is either resolved or rejected');
}); 


// promise five
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username:"javascript", password: "1234"});
        }
        else {
            reject('ERROR: JS went wrong');
        }
    }, 5000);
});

// asych await
async function consumePromiseFive () {
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// fetch api
// async function getAllUser() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json(); // used await because response takes time to fetch data
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser();

// using then catch method

fetch('https://api.github.com/users/himanshu7437')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
