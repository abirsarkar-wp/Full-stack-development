/*
Primitive data types
--------------------
Primitive values are simple values, not objects.
Common primitive types: string, number, boolean, undefined, null, bigint, symbol.
*/

let userName = "Abir"; // string: stores text
console.log(typeof userName); // string

let age = 22; // number: stores integers and decimals
console.log(typeof age); // number

let isStudent = false; // boolean: stores true or false
console.log(typeof isStudent); // boolean

let notAssignedYet; // undefined: declared, but no value has been assigned
console.log(typeof notAssignedYet); // undefined

let emptyValue = null; // null: intentionally empty value
console.log(typeof emptyValue); // object
// typeof null returning "object" is an old JavaScript quirk.

// String concatenation joins strings with +.
let firstName = "Abir";
let greeting = "Hello, " + firstName + "!";
console.log(greeting); // Hello, Abir!

// Template literals use backticks and ${} to insert values.
let greeting2 = `Hello, ${firstName}!`;
console.log(greeting2); // Hello, Abir!

let demoOne = `Value is ${5 + 5}`;
console.log(demoOne); // Value is 10

// Symbol always creates a unique value, even if the description is the same.
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym1 === sym2); // false
