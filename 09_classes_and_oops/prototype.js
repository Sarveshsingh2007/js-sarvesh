// let myName = "sarvesh      "
// let myChannel = "youtube    "

// console.log(myName.truelength)

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    Thor: "Hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.sarvesh = function(){
    console.log(`sarvesh is present in all objects`);
    
}

Array.prototype.heysarvesh = function(){
    console.log(`sarvesh says hello`);
    
}

// heroPower.sarvesh()
// myHeros.heysarvesh()
// heroPower.heysarvesh()


// Inheritance


const User = {
    name: 'sarvesh',
    email: 'sarvesh@gmail.com'

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'Sarveshsingh      '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
'sarvesh'.trueLength()
'singh'.trueLength()