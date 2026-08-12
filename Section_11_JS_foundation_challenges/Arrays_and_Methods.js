// Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

let array = ["Abir", 1, 'a', null , 3]

// Task 1: Array Filtering

// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr){
    return arr.filter(item => typeof item === "number")
}

// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr){
    return arr.reverse()
}

// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr){
    return Math.max(...arr)
}

// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr){
    return [...new Set(arr)]
}

// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr){
    return arr.flat()
}


console.log(filterNumbers(array)); // [1, 3]
console.log(reverseArray(array));  // [3, null, "a", 1, "Abir"]

console.log(findMax([10, 5, 30, 2])); // 30

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

console.log(flattenArray([1, [2, 3], [4, 5]])); // [1, 2, 3, 4, 5]