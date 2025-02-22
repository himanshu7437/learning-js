class User {
    constructor(username) {
        this.username = username;

    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('himanshu', 'himanshu123@gmail.com');
console.log(iphone);
iphone.logMe();
// console.log(iphone.createId()); // -> because createId is static.
