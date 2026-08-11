/*
Printing output
---------------
Use console methods to see values while learning and debugging.
*/

console.log("Hello, World!"); // normal output

process.stdout.write("Hello, World!\n"); // terminal output without automatic newline

console.table({ name: "John", age: 30, city: "New York" }); // table format for objects

console.warn("This is a warning message"); // warning output
