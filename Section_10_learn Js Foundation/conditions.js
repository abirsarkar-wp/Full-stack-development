/*
Condition learning patterns
---------------------------
if runs when the condition is true.
else runs when the condition is false.
Use === for strict equality because it checks value and type.
*/

// 1. Check which number is greater.
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}

// 2. Compare two strings.
let str1 = "Hello";
let str2 = "hello";

if (str1 === str2) {
    console.log(`${str1} is equal to ${str2}`);
} else {
    console.log(`${str1} is not equal to ${str2}`);
}
// "Hello" and "hello" are different because string comparison is case-sensitive.

// 3. Check if a variable is a number.
let score = 100;

if (typeof score === "number") {
    console.log(`${score} is a number`);
} else {
    console.log(`${score} is not a number`);
}

// 4. Check a boolean value.
let teaIsReady = true;

if (teaIsReady) {
    console.log("Tea is ready");
} else {
    console.log("Tea is not ready");
}

// 5. Check if an array is empty.
let arr = ["Abir"];

if (arr.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}
