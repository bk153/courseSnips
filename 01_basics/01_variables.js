const accountId = 12345;
// accountId = 987;
// console.log(accountId); //* can't be changed


let accountEmail = "sambhaw@gmail.com";
accountEmail = "abc@gmail.com"
let accountState; //- gets undefined, becoz in javascript if declared but not initialized it takes the value as undefined
// console.log(accountEmail);


var accountPassword = "12345";
city = "BAM"; //! works, not Prefered.
accountPassword = "2121212"
city = "GPR"

console.table([accountPassword, city, accountEmail, accountId]) //* works same as Console.Log
// reserved Keywords
//- Prefer not to use var because of the issue in block and functional scope.
