// reduce method

const mynums = [1, 2, 3, 4]

// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)

const mytotal = mynums.reduce( (acc, currval) => acc + currval, 0)

// console.log(mytotal)


const myarr = [1,2,3,4,5,6]

// const newarr = myarr.reduce ( (ac, cv) => {
//     console.log(`ac: ${ac} and cv: ${cv}`)
//     return ac + cv
// }, 4 )

const newarr = myarr.reduce( (ac, cv) => ac + cv , 4)

// console.log(newarr)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: " py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(priceToPay)


const RestroMenu = [
    {
        food: 'Pizza',
        price: 299
    },
    {
        food: 'Coke',
        price: 49
    },
    {
        food: 'Burger',
        price: 59
    },
    {
        food: 'Sandwich',
        price: 39
    },
]
const PriceToPay = RestroMenu.reduce( (acc, item) => acc + item.price,0)
console.log(PriceToPay)

 