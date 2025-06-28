// singleton

// object literals
// Object.create

const mysym = Symbol("key1")

const jsuser = {
    name: "Sarvesh",
    "full_name": "Sarvesh singh",
    [mysym]: "mykey1",
    age: 20,
    location: "dehradun",
    email: "sarveshsingh2334.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full_name"])
// console.log(jsuser[mysym])

jsuser.email = "sarvesh.google.com"
// Object.freeze(jsuser)
jsuser.email = "sarvesh.email.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hellow JS user");
}
jsuser.greeting2 = function(){
    console.log(`hellow JS user, ${this.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())