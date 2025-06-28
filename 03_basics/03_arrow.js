const user = {
    username: "sarvesh", 
    price: "999",
    
    welcomemsg: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
    
}

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()

// console.log(this)

// function chai() {
//     let username = "sarvesh"
//      console.log(this.username) // undefined 
// }
// chai()


// const chai = function() {
//     let username = "sarvesh"
//     console.log(this.username) // undefined
// }
// chai()

const chai = () => {
    let username = "sarvesh"
    // console.log(this)
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// } // explicit return

// console.log(addtwo(3,4))

// const addtwo = (num1, num2) =>  num1 + num2
// const addtwo = (num1, num2) =>  (num1 + num2) // implicit return
const addtwo = (num1, num2) =>  ({username: "sarvesh"}) 

console.log(addtwo(3,4))


// const myarr = [2,5,4,3,6]

// myarr.forEach()