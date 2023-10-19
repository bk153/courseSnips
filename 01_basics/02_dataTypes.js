"use strict"; // Treats all code as newer version.

// alert(3+3) //! In NodeJS,  we cannot use alert directly.

// Datatype Types
//- String
let name = "Abc";
//- Number, limit raises till
let age = 23;
//- Boolean, true/False
let isLoggedIn = false;
//- null, a standalone value
let state = null;
//- undefined, value has not been assigned yet.
let lang;
//-BigInt, for long numbers
let stocks = 884169965635298656356895681778175n;
//- Symbol, unique
const id = Symbol("123");
const id_1 = Symbol("123");
// console.log(id === id_1); // false
console.log(typeof id);

//-Object
// console.log(typeof name); //? string
// console.log(typeof age); //? Number
// console.log(typeof null);//? Object
// console.log(typeof undefined);//? undefined

//* ========================================================================================
// => Depending on the basis of values stored or accessed in memory, data types are majorly categorized into 2 types:
// Primitive :
// Call by Value, where we take a copy of the value and refer it for a change. So the change is made on the copy Value not in the original
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Memory_Stack
let myName = "Bhawani_K"
let nickName = myName //- Here in myName, JS gets the copy value of the original, such that it doesn't change the original value. 
nickName = "Raju"

console.log(myName);
console.log(nickName);

//* ===========================================

// Non-Primitives //- Changes in the original value, doesn't have a copy value. It refers to the original value and changes it only.
// Reference Type
// Memory_Heap
// Array, Objects, Functions
const arr = ["A", "B", "C"];
let myObj = {
  name: "Abc",
  age: 22,
};
const myFunction = function(){
    console.log("I'am function");
}
console.log(typeof arr);    //Object
console.log(typeof myObj);  //Object
console.log(typeof myFunction); // function / ObjectFunction

//- Changes in the original value, doesn't have a copy value. It refers to the original value and changes it only.
let userOne = {
  email:'abc@gmail.com',
  upi:'abc@ybl'
}

let userTwo = userOne
userTwo.email = "qwe@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


