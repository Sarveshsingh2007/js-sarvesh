class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sarvesh`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const sarvesh = new User('sarvesh@.ai', 'sarveshsinghadhikari')
console.log(sarvesh.password)
console.log(sarvesh.email)