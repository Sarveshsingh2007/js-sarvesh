
function sayMyname() {
    console.log("s");
    console.log("a");
    console.log("r");
    console.log("v");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyname()

// function addtwonumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addtwonumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addtwonumbers(3, 5)

// console.log("result : ", result)


function loginusermsg(username = "sarvesh singh") {
    if(!username){
        console.log("Please eneter username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginusermsg("sarvesh"))
// console.log(loginusermsg())


function calculatecartprice(val1, val2, ...num1){
    return num1
}
// console.log(calculatecartprice(200, 400, 500, 2000))

const user = {
    username: "sarvesh", 
    prices: 199
}

function handleobject(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 300
})

const mynewarr = [200, 400, 100, 600]

function returnsecondvalue(getarr) {
    return getarr[1]
}
// console.log(returnsecondvalue(mynewarr))
console.log(returnsecondvalue([20000, 3434, 434, 342]))