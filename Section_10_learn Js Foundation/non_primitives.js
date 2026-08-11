/*
Non-primitive data types
------------------------
Objects, arrays, and dates are non-primitive values.
They can store multiple values and are copied by reference.
*/

// 1. Object: stores data in key-value pairs.
let person = {
    name: "Abir",
    age: 22,
    isStudent: false,
    "last name": "Sarkar",
};

console.log(person);
console.log(typeof person); // object

// 2. const prevents reassignment, but object properties can still change.
const user = {
    name: "Abir",
    email: "abir@example.com",
    "last name": "Sarkar",
};

user.name = "Abir Sarkar"; // update an existing property
user.age = 22; // add a new property

console.log(user.name); // dot notation
console.log(user.age);
console.log(user["name"]); // bracket notation also works
console.log(user["last name"]); // bracket notation is needed when the key has a space
console.log(user);

// 3. Date object: stores date and time information.
let today = new Date();

console.log(today);
console.log(typeof today); // object
console.log(today.getFullYear()); // current year
console.log(today.getMonth()); // month number, 0-11
console.log(today.getDate()); // day of the month, 1-31
console.log(today.getDay()); // day of the week, 0-6

// 4. Array: stores values in order.
let mixedArray = ["Hello", 1, "A", true, null, undefined, { name: "Abir" }];

console.log(mixedArray);
console.log(typeof mixedArray); // object
console.log(Array.isArray(mixedArray)); // true: best way to check for arrays
console.log(mixedArray[3]); // true

// 5. Type conversion examples.
console.log("1" + 1); // 11: string concatenation
console.log(1 + "1"); // 11: string concatenation
console.log(1 + 1); // 2: numeric addition

let isTrue = true;
console.log(isTrue + 1); // 2 because true becomes 1
console.log(Number(isTrue) + 1); // 2
