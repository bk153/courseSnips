let value = 3;
let negValue = -value;
// console.log(negValue); // (-3)

// console.log(2 + 2); //4
// console.log(2 - 2); //0
// console.log(2 * 2); //4
// console.log(2 ** 2); //4
// console.log(2 / 2); //1
// console.log(2 % 2); //0

let str1 = "Hello";
let str2 = "Abc";
let str3 = str1 + str2;

// console.log("1" + 2); //12
// console.log(2 + "2"); //22
// console.log("1" + 2 + 2); //122 //- if 1st ele is string, then it takes all the ele in String
// console.log(4 + 2 + "1"); //61 //- if 1st ele is num, it performs the mathematical operation 1st then it concates with the following String.

let gameCounter = 100;
let x = 3n;
let y = ++x;
// console.log(x); //4n
// console.log(y); //4n
++gameCounter; // Prefix => where the increment operator increments and returns the value after incrementing.
// console.log(gameCounter); //101

let x2 = 3n;
let y2 = x++;
// console.log(x2); //3n
// console.log(y2); //4n
gameCounter++; // 102, Postfix => where the increment operator increments and returns the value after incrementing.
// console.log(gameCounter);

// ------------------------------------------

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//! doesnt converts "null" to any constant values, InConsistent
// console.log("2" > 1); //true //- Here, JS automatically converts string to number
// console.log(null > 0); // false. Here JS
// console.log(null == 0); //false
// console.log(null <= 0); //true

// console.log(undefined == 0);  //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

console.log("2" == 2); //true
//- Here JS automatically converts the string to number
//- ==, checks only if the values are equal


console.log("2" === 2); //false
//- ===, checks if the values & the dataType are similar.
