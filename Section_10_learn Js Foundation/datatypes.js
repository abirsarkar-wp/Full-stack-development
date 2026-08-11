/*
JavaScript data type examples
-----------------------------
Primitive values: string, number, boolean, bigint, undefined, null, symbol.
Non-primitive values: array, object, function, date.
*/

let userName = "Abir"; // string: text
console.log(userName);

let age = 22; // number: integer or decimal
console.log(age);

let isStudent = false; // boolean: true or false
console.log(isStudent);

let bigNumber = 1234567890123456789012345678901234567890n; // bigint: very large integer
console.log(bigNumber);

let notAssignedYet; // undefined: declared but not assigned
console.log(notAssignedYet);

let emptyValue = null; // null: intentionally empty
console.log(emptyValue);

let uniqueId = Symbol("unique"); // symbol: always unique
console.log(uniqueId);

let menu = ["Chai", "Coffee", "Cake", "Pastry"]; // array: ordered list
console.log(menu);

let person = { name: "Abir", age: 22, city: "Kolkata" }; // object: key-value pairs
console.log(person);

// Primitive values copy the actual value.
let copiedAge = age;
console.log(copiedAge);
