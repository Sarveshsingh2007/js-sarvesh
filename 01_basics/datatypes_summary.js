// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, bigint

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;

const id  = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

const bigNumber = 3423454553665n


// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
    name: "sarvesh",
    age: 22,
}

const myFunction = function(){
    // console.log("hello world");
}

// console.log(typeof bigNumber)
// console.log(typeof scorevalue)
// console.log(typeof myFunction)
// console.log(typeof heros)


// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "sarvesh"

let anothername = myYoutubename
anothername = "sarvesh adhikari"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let  userTwo = userOne

userTwo.email = "sarvesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
