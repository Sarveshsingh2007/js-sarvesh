// const coding = ['js', 'ruby', 'java', 'py', 'cpp']


// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })

// console.log(values);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = mynums.filter( (num) => {
//     return num > 4
// })

const newnums = []

mynums.forEach( (num) => {
    if(num > 4) {
        newnums.push(num)
    }
} )
// console.log(newnums)



const books = [
    { title: 'Book 1', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'Book 2', genre: 'Non-fiction', publish: 1981, edition: 2008 },
    { title: 'Book 3', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book 4', genre: 'Non-Fiction', publish: 1981, edition: 2010 },
    { title: 'Book 5', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book 6', genre: 'fiction', publish: 1981, edition: 2010 },
    { title: 'Book 7', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book 8', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book 9', genre: 'Non-fiction', publish: 1981, edition: 1989 },
];

let userbooks = books.filter( (bk) => bk.genre === 'History' )


userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} )

console.log(userbooks)
