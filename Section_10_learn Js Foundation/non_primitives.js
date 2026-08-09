// objects
let person = {
    name: "Abir",
    age: 22,
    isStudent: false,
    "last name" : "Sarkar"
};
console.log(person); // prints: { name: 'Abir', age: 22, isStudent: false, 'last name': 'Sarkar' }
console.log(typeof person); // prints: object

const userName = { name: "Abir" , email : "abir@example.com", "last name" : "Sarkar"}; // create an object with properties name, email, and last name
console.log(userName); // prints: { name: 'Abir', email: 'abir@example.com', 'last name': 'Sarkar' }
userName.name = "Abir Sarkar" // change the value of the name property of the userName object
userName.age = 22 // add a new property age to the userName object
console.log(userName.name); // prints: Abir Sarkar
console.log(userName.age); // prints: 22
console.log(userName["name"]); // prints: Abir Sarkar
console.log(userName["last name"]); // prints: Sarkar
console.log(userName); // prints: { name: 'Abir Sarkar', email: 'abir@example.com', age: 22} 



let toDay = new Date(); // create a new Date object representing the current date and time
console.log(toDay);
console.log(typeof toDay); // prints: object
console.log(toDay.getFullYear()); // prints: current year
console.log(toDay.getMonth()); // prints: current month (0-11)
console.log(toDay.getDate()); // prints: current day of the month (1-31)
console.log(toDay.getDay()); // prints: current day of the week (0-6)

// Array

let array = ["Hello", 1 , 'A', true, null, undefined, {name: "Abir"}]; // create an array with different data types
console.log(array);
console.log(typeof array); // prints: object
console.log(array[3]); // prints: true

console.log("1" + 1); // prints: 11 (string concatenation)
console.log(1 + "1"); // prints: 11 (string concatenation)
console.log(1 + 1); // prints: 2 (numeric addition)

let isTrue =  true
console.log(isTrue + 1); // prints: 2
console.log(Number(isTrue) + 1); // prints: 2

