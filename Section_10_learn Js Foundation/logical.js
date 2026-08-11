/*
Logical operator patterns
-------------------------
&& means AND: all conditions must be true.
|| means OR: at least one condition must be true.
! means NOT: reverse true to false, or false to true.
*/

// 1. AND example.
let isLoggedIn = true;
let hasPaymentToken = false;

if (isLoggedIn && hasPaymentToken) {
    console.log("Welcome to the premium content");
} else {
    console.log("Please log in and make a payment to access the premium content");
}

// 2. OR example.
let isLoggedIn2 = true;
let hasPaymentToken2 = false;

if (isLoggedIn2 || hasPaymentToken2) {
    console.log("Welcome to the premium content");
} else {
    console.log("Please log in and make a payment to access the premium content");
}

// 3. NOT example.
let isLoggedIn3 = true;

if (!isLoggedIn3) {
    console.log("Please log in to access the premium content");
} else {
    console.log("Welcome to the premium content");
}
