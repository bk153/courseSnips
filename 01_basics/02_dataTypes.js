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

//-Object
// console.log(typeof name); //? string
// console.log(typeof age); //? Number
// console.log(typeof null);//? Object
// console.log(typeof undefined);//? undefined

//* -----------------------------------------------------------
// => Depending on the basis of values stored or accessed in memory, data types are majorly categorized into 2 types:
// Primitive :
// Call by Value, where we take a copy of the value and refer it for a change. So the change is made on the copy Value not in the original
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-Primitives
// Reference Type
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