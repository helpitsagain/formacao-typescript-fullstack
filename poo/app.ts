class User {
    name: string = 'John Doe';
    age: number = 30;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showName() {
        console.log(this.name);
    }
}

const user = new User("John Doe", 30);
user.showName(); // Output: John Doe

const otherUser = new User("Jane Smith", 25);
otherUser.showName(); // Output: Jane Smith
