// Model
class User {
    constructor(name) {
        this.name = name;
    }
}

// View
function displayUser(user) {
    console.log(`User: ${user.name}`);
}

// Controller
class UserController {
    constructor(user) {
        this.user = user;
    }

    updateName(newName) {
        this.user.name = newName;
        displayUser(this.user);
    }
}

const user = new User('John');
const controller = new UserController(user);
controller.updateName('Jane'); // 需要手动更新View
