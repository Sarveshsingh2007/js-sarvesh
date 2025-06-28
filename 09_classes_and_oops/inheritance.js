class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sarvesh = new Teacher('sarvesh', 'sarvesh@gmail.com', '123')

sarvesh.addcourse()
const tea = new User('tea')

tea.logMe()
sarvesh.logMe()

console.log(sarvesh === tea);

console.log(sarvesh instanceof User)