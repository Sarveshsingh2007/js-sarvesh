const User = {
    _email: 'sarvesh@gmail.com',
    _password: 'sarveshadhikari',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)