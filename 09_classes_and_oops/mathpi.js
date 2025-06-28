const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const sarvesh = {
    name: 'sarvesh',
    course: 'btech',
    isAvailable: true,

    orderChai: function(){
        console.log('code is not goods')
    }
}

console.log(Object.getOwnPropertyDescriptor(sarvesh, 'name'))

Object.defineProperty(sarvesh, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(sarvesh, 'name'))

for(const [key, value] of Object.entries(sarvesh)){
    if (typeof value !== 'function') {

        console.log(`${key}: ${value}`)
        
    }
}