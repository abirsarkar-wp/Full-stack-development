let name = "Abir"; // string: stores text data
console.log(name); // prints: Abir

let age = 22; // number: stores numeric data
console.log(age); // prints: 22

let isDead = false; // boolean: stores true or false
console.log(isDead); // prints: false

let bigNumber = 1234567890123456789012345678901234567890n; // bigint: stores very large integers
console.log(bigNumber); // prints: 1234567890123456789012345678901234567890

let x; // undefined: variable is declared but has no value yet
console.log(x); // prints: undefined

let y = null; // null: intentionally empty value
console.log(y); // prints: null

let sym = Symbol("unique"); // symbol: creates a unique value
console.log(sym); // prints: Symbol(unique)
let menu = ["Chai", "Coffee", "Cake", "Pastry"]; // array: stores a list of values
console.log(menu); // prints: [ 'Chai', 'Coffee', 'Cake', 'Pastry' ]

let person = { name: "Abir", age: 22, city: "Kolkata" }; // object: stores data in key-value pairs
console.log(person); // prints: { name: 'Abir', age: 22, city: 'Kolkata' }

let age2 = age; // copy the value of age into a new variable
console.log(age2); // prints: 22