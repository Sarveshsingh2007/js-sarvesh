const name = "sarvesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('sarvesh-ad-com')

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  sarvesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://sarvesh.com/sarvesh%20singh"
url.replace('%20', '-')
// console.log(url.replace('%20', '-'));

// console.log(url.includes('sarvesh'))

// console.log(gameName.split("-"))

const sentence = 'my college name is uttaranchal institute of technology'
let index = 7;
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`)

const contentname = "sarvesh-singh";
// console.log(contentname.big())

// console.log(contentname.blink())

// console.log(contentname.bold());

// console.log(`the character at index ${index} is ${sentence.charAt(index)}`)

// console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`)

const str1 = 'hello i am sarvesh'
const str2 = 'sarvesh'

// console.log(str1.concat(' ', str2))
// console.log(str2.concat(' ', str1))

// console.log(str1.endsWith('sarvesh',23))
// console.log(str1.endsWith('am'))

// console.log(str1.fixed())

// console.log(str2.fontcolor("red"))
// console.log(str2.fontsize(23))

const sentence1 = "I want to become a Web Developer"
const word = "become"
// console.log(`the word "${word}" ${sentence1.includes(word) ? 'is' : 'is not'} in the sentence`,)
// console.log(`The word "${word}" ${sentence1.includes(word)? 'is':'is not'} in the sentence.`)

const searchterm = "become"
const indexofFirst = sentence1.indexOf(searchterm)
// console.log(`The index of the first "${searchterm}" is ${indexofFirst}`)
// console.log(`The index of the second "${searchterm}" is ${sentence.indexOf(searchterm, indexofFirst +1,)}`)

// console.log(`the index of ${word} is ${sentence1.lastIndexOf(word)}`)

// console.log(searchterm.link())
// const regex = /[A-Z]/g
// const found = sentence1.match(regex)
// console.log(found)

