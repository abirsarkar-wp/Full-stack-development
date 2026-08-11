/*
Operator learning patterns
--------------------------
Arithmetic operators create numbers.
Comparison operators create booleans.
Prefer === and !== in real JavaScript code.
*/

let score = 105; // create a score value
console.log(score); // 105

let bonus = 20; // create a bonus value
console.log(bonus); // 20

let totalScore = score + bonus; // add score and bonus
console.log(totalScore); // 125

let addition = 10 + 5;
console.log(addition); // 15

let subtraction = 10 - 5;
console.log(subtraction); // 5

let multiplication = 10 * 5;
console.log(multiplication); // 50

let division = 10 / 5;
console.log(division); // 2

let remainder = 10 % 3; // modulo: leftover after division
console.log(remainder); // 1

let exponentiation = 2 ** 3; // power: 2 * 2 * 2
console.log(exponentiation); // 8

let increment = 5;
console.log(increment); // 5

increment++; // increase by 1 after this statement
console.log(increment); // 6

++increment; // increase by 1 before this statement finishes
console.log(increment); // 7

let decrement = 5;
console.log(decrement); // 5

decrement--; // decrease by 1 after this statement
console.log(decrement); // 4

--decrement; // decrease by 1 before this statement finishes
console.log(decrement); // 3

let isEqual = 10 == "10"; // true because == allows type conversion
console.log(isEqual); // true

let isNotEqual = 10 != 5;
console.log(isNotEqual); // true

let isGreater = 10 > 5;
console.log(isGreater); // true

let isLess = 10 < 5;
console.log(isLess); // false

let isGreaterEqual = 10 >= 5;
console.log(isGreaterEqual); // true

let isLessEqual = 10 <= 5;
console.log(isLessEqual); // false

let isStrictEqual = 10 === "10"; // false because number and string are different types
console.log(isStrictEqual); // false

let isStrictNotEqual = 10 !== "10";
console.log(isStrictNotEqual); // true
