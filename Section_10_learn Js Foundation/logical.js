let isLoggedIn = true; // first user is logged in
console.log(isLoggedIn); // prints: true

let hasPaymentToken = false; // first user has no payment token
console.log(hasPaymentToken); // prints: false

if (isLoggedIn && hasPaymentToken) { // AND: both conditions must be true
  console.log("Welcome to the premium content"); // this runs only when both are true
} else {
  console.log("Please log in and make a payment to access the premium content"); // prints: Please log in and make a payment to access the premium content
}

let isLoggedIn2 = true; // second user is logged in
console.log(isLoggedIn2); // prints: true

let hasPaymentToken2 = false; // second user has no payment token
console.log(hasPaymentToken2); // prints: false

if (isLoggedIn2 || hasPaymentToken2) { // OR: at least one condition must be true
  console.log("Welcome to the premium content"); // prints: Welcome to the premium content
} else {
  console.log("Please log in and make a payment to access the premium content"); // this runs only if both are false
}

let isLoggedIn3 = true; // third user is logged in
console.log(isLoggedIn3); // prints: true

if (!isLoggedIn3) { // NOT: reverse the true value to false
  console.log("Please log in to access the premium content"); // this runs if the value is false
} else {
  console.log("Welcome to the premium content"); // prints: Welcome to the premium content
}