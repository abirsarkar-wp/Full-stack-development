// Strings, Numbers, Booleans, Null, Undefined, and Symbols are all considered primitive data types in JavaScript.
let name = "Abir"; // string: stores text data
console.log(typeof name); // prints: string

let age = 22; // number: stores numeric data
console.log(typeof age); // prints: number

let isDead = false; // boolean: stores true or false
console.log(typeof isDead); // prints: boolean

let x; // undefined: variable is declared but has no value yet
console.log(typeof x); // prints: undefined                     
let y = null; // null: intentionally empty value
console.log(typeof y); // prints: object (this is a known quirk in JavaScript)



// string 
let name = "Abir"
let greeting = "Hello, " + name + "!"; // concatenation: combines strings
console.log(greeting); // prints: Hello, Abir!  

let greeting2 = `Hello, ${name}!`; // template literal: allows embedding expressions, this is called string interpolation
console.log(greeting2); // prints: Hello, Abir!
let demoOne = `Value is ${5 + 5}`; // prints: Value is 10
console.log(demoOne); // prints: Value is 10

//symbol
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym1 === sym2); // prints: false, because each symbol is unique