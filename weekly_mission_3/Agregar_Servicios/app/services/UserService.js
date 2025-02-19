const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "sin bio")
    }

    static getInfo(user){
        return[user.username, user.name, user.id, user.bio]
    }

    static updateUserUsername(user, new_name){
        user.username = new_name;
        return user;
    }

    static getAllUsernames(users){
        const usernames = users.map((user) => user.username);
        return usernames;
    }
}

module.exports = UserService