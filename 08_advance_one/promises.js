// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Asunc task is complete')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log('promise consumed')
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// })
// .then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "sarvesh", email: "sarveshsingh@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: 'sarvesh', password: '1234'})
//         }
//         else{
//             reject('Error something went wrong')
//         }
//     },1000)
// })
// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username)=> {
//     console.log((username));
    
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=> console.log("The promise is either resolved or rejected."))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username: "adhikari", password: '2345'})
//         }else{
//             reject('ERROR: Js went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log((response));
//     } catch(error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// // async function getAllUsers(){
// //     try{
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //         const data = await response.json()
// //         console.log(data)
// //     }catch(error){
// //         console.log("E: ", error)
// //     }
// // }

// // getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=> {
//     console.log(data)
// })
// .catch((error)=> console.log(error))


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aysnc task 1")
        resolve()
    },1000)
})
promiseOne
.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
})
.then(function(){
    console.log("task 2 promise consumed")
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: 'sarvesh', password: '2345'})
    },1000)
})
.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: 'adhikari', password: '23456'})
        }else{
            reject('ERROR ! something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: 'sarvesh singh', password: 'i love my mom'})
        }else{
            reject('Error something went wrong !')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log((response))
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log('E: ', error)
//     }
// }
// getallusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))