// Inheritance

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`a new course was added by ${this.username}`);
    }
}

const teacher = new Teacher('himanshu', 'himanshu@gmailcom', 'hello@123')

console.log(teacher);
teacher.addCourse()

const masalaChai = new User('masalaChai');
masalaChai.logMe();
teacher.logMe();

console.log(teacher instanceof Teacher);

