/*
let vs const
------------
let creates a variable whose value can change.
const creates a variable whose value cannot be reassigned.
*/

let movieName = "Spiderman";
console.log(movieName); // Spiderman

movieName = "Batman";
console.log(movieName); // Batman

const age = 22;
console.log(age); // 22

// This would cause an error because const cannot be reassigned:
// age = 23;
