// ===============================
// Task 1: Using this in Objects
// ===============================

// Create an object named person.
// An object stores data using key-value pairs.
// Here, person has three properties:
// 1. name
// 2. age
// 3. introduce
const person = {

    // name is a property of the person object.
    // Its value is "Hitesh".
    name: "Hitesh",

    // age is also a property of the person object.
    // Its value is 19.5.
    age: 19.5,

    // introduce is a method.
    // A method is a function inside an object.
    introduce: function() {

        // this refers to the object that is calling the method.
        // Here, person.introduce() is calling the method,
        // so this refers to the person object.

        // this.name means person.name.
        // this.age means person.age.

        // Template literals use backticks ` `.
        // They allow us to insert variables directly inside a string using ${}.
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
};

// Calling the introduce method using the person object.
// Since person is calling introduce(), this inside introduce refers to person.
console.log(person.introduce());

// Output:
// Hi, my name is Hitesh and I am 19.5 years old


// =================================
// Task 2: Function within a function
// =================================

// Create a function named outer.
// This is the outer function.
function outer() {

    // Create another function named inner inside outer.
    // This is called a nested function.
    // inner can only be directly used inside outer.
    function inner() {

        // When inner is called, it returns this string.
        return "Inner function called";
    }

    // Call the inner function from inside outer.
    // inner() returns "Inner function called".
    // Then outer returns that same value.
    return inner();
}

// Call the outer function.
// outer calls inner inside it and returns the result.
console.log(outer());

// Output:
// Inner function called