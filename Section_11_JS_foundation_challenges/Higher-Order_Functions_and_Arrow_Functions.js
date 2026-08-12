// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

// Create an arrow function named squareNumbers.
// It takes one parameter: arr.
// arr should be an array of numbers.
const squareNumbers = (arr) => {

    // map() loops through every item in the array.
    // For each number, it returns num * num.
    // The result is a new array containing the squared numbers.
    return arr.map(num => num * num);
};

// Calls squareNumbers with [1, 2, 3, 4].
// Output: [1, 4, 9, 16]
console.log(squareNumbers([1, 2, 3, 4]));


// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

// Create an arrow function named filterEvenNumbers.
// It takes one parameter: arr.
// arr should be an array of numbers.
const filterEvenNumbers = (arr) => {

    // filter() loops through every item in the array.
    // It keeps only the numbers where the condition is true.
    // num % 2 gives the remainder after dividing num by 2.
    // If num % 2 === 0, the number is even.
    return arr.filter(num => num % 2 === 0);
};

// Calls filterEvenNumbers with [1, 2, 3, 4, 5, 6].
// Output: [2, 4, 6]
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// Task 3: Sum of Positive Numbers
// Use filter() and reduce() with arrow functions

// Create an arrow function named sumPositiveNumbers.
// It takes one parameter: arr.
// arr should be an array of numbers.
const sumPositiveNumbers = (arr) => {

    // First, filter() keeps only positive numbers.
    // num > 0 means the number is greater than zero.
    // Example: [-2, 5, -1, 10, 3] becomes [5, 10, 3].
    return arr
        .filter(num => num > 0)

        // reduce() combines all numbers into one final value.
        // sum stores the running total.
        // num is the current number.
        // 0 is the starting value of sum.
        // Example: 0 + 5 + 10 + 3 = 18.
        .reduce((sum, num) => sum + num, 0);
};

// Calls sumPositiveNumbers with [-2, 5, -1, 10, 3].
// Output: 18
console.log(sumPositiveNumbers([-2, 5, -1, 10, 3]));


// Task 4: Transform Array of Objects
// Return only the names using map()

// Create an arrow function named getNames.
// It takes one parameter: arr.
// arr should be an array of objects.
// Each object should have a name property.
const getNames = (arr) => {

    // map() loops through every object in the array.
    // obj represents the current object.
    // obj.name gets the value of the name property.
    // The result is a new array containing only the names.
    return arr.map(obj => obj.name);
};

// Calls getNames with an array of objects.
// Output: ["Abir", "Rahul", "Sneha"]
console.log(getNames([
    { name: "Abir" },
    { name: "Rahul" },
    { name: "Sneha" }
]));


// Task 5: Find the Longest Word
// Use reduce() and an arrow function

// Create an arrow function named findLongestWord.
// It takes one parameter: arr.
// arr should be an array of strings.
const findLongestWord = (arr) => {

    // reduce() checks every word and keeps the longest one.
    let array =  arr.reduce((longest, word) => { 
        // longest is the longest word found so far.
        // word is the current word being checked.
        // word.length gives the number of characters in word.
        // longest.length gives the number of characters in longest.
        // If word is longer than longest, return word.
        // Otherwise, keep returning longest.
        return word.length > longest.length ? word : longest;

    // "" is the starting value of longest.
    // At the beginning, longest is an empty string.
    }, "")
};

// Calls findLongestWord with ["tea", "javascript", "code"].
// Output: "javascript"
console.log(findLongestWord(["tea", "javascript", "code"]));