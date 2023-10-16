let score = "33";
let convertScoreToNumber = Number(score);
// console.log(typeof score);  // String
// console.log(typeof convertScoreToNumber);  //Number
// console.log(convertScoreToNumber);

let alphaNum = "123Abc";
let convertalphaNumToNumber = Number(alphaNum);
// console.log(typeof alphaNum);   //String
// console.log(typeof convertalphaNumToNumber);    //Number
// console.log(convertalphaNumToNumber);   //NaN

let nullNumber = null;
let convertNullToNumber = Number(nullNumber);
// console.log(typeof nullNumber); //object
// console.log(typeof convertNullToNumber);    // number
// console.log(convertNullToNumber); // 0

let unDefNumber = undefined;
let convertundefinedToNumber = Number(unDefNumber);
// console.log(typeof unDefNumber);    //unDefined
// console.log(typeof convertundefinedToNumber);   //number
// console.log(convertundefinedToNumber);  //NaN

let BooleanToNum = true;
let convertBooleanToNum = Number(BooleanToNum);
// console.log(typeof BooleanToNum);   //Boolean
// console.log(typeof convertBooleanToNum);    // Number
// console.log(convertBooleanToNum);   //1

//- NOTE:
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;
let convertNumToBoolean = Boolean(isLoggedIn);
// console.log(typeof isLoggedIn); //Number
// console.log(typeof convertNumToBoolean);    //Boolean
// console.log(convertNumToBoolean);   //true

let strToBoolean = "Abcd";
let convertStrToBoolean = Boolean(strToBoolean);
// console.log(typeof strToBoolean);   //String
// console.log(typeof convertStrToBoolean);    //Boolean
// console.log(convertStrToBoolean);   //true

let emptyToBoo = "";
let convertEmptyToBoo = Boolean(emptyToBoo);
// console.log(typeof emptyToBoo); //String
// console.log(typeof convertEmptyToBoo); //Boolean
// console.log(convertEmptyToBoo); //False

//- NOTE
// 1=> true , 0 => false
// ""=> false, "Abcd"=> true

let number =12
let convertNumToStr = String(number)
console.log(typeof number); //Number
console.log(typeof convertNumToStr);    //String
console.log(convertNumToStr);   // 12

