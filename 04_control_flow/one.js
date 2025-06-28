// if

const isuserloggedin = true
const temperature = 41
// if (temperature ===40) {
//     console.log("less than 50")
// }
// else{
//     console.log("temprature is more thsan 50")
// }

// <, >, <=, >= , ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     var power = "fly"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test 2"); // implicit scope


// if (balance < 500 ) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// }
// else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }


const userloggedin = true
const debitcard = true
const loggedinfromEmail = true
const loggedinfromGoogle = false

if (userloggedin && debitcard && 2==3) {
    console.log("allow to buy course")
}

if (loggedinfromGoogle || loggedinfromEmail) {
    console.log("User logged in")
}