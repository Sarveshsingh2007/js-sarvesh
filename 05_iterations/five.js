const coding = ['js', 'ruby', 'java', 'py', 'cpp']

// coding.forEach( function (val) {
//     console.log(val)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)


// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr)
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName)
} )