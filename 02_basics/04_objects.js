// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sarvesh"
tinderuser.isloggedin = "false"

// console.log(tinderuser)

const regularuser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "sarvesh",
            lastname: "singh"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]
users[1].email
// console.log(tinderuser)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedin'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseteacher: "hitesh sir"
}

// course.courseteacher

const {courseteacher : teacher} = course

console.log(teacher)

// {
//     "name": "sarvesh",
//     "coursename": "js in hindi",
//     "price": "999"
// }

[
    {},
    {},
    {}
]