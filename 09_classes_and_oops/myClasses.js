// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
    
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const sarvesh = new User('sarvesh', 'sarvesh@gamil.com', '1234')

// console.log(sarvesh.encryptPassword())
// console.log(sarvesh.changeUserName())

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const adhikari = new User('adhikari', 'adhikari@gamil.com', '1357')

console.log(adhikari.encryptPassword())
console.log(adhikari.changeUserName())