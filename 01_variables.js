const accountid = 123456
let accountname = "Sarvesh"
var accountpass = "23452"
accountadd ="dehradun"
let accountstate;

accountname = "S.adhikari"
accountpass= "123"
accountadd = "haldwani"

/*
Note :- prefer not to use var
because of issue in block scope and functional scope
*/
// accountid = 76543 // Not Allowed

console.log(accountid);
console.table([accountid, accountname, accountpass, accountadd, accountstate])