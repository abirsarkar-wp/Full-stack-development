/*
Loop learning patterns
----------------------
while: check the condition first, then run the code.
do...while: run the code once first, then check the condition.
for: best when you know how many times you want to loop.
*/

// 1. Add all values from 1 to 5 and store the result in sum.
let sum = 0;
let start = 1;

while (start <= 5) {
    sum = sum + start; // same as: sum += start
    start++; // important: update the counter so the loop can finish
}

console.log(sum); // 15

// 2. Count down from 5 to 1 and store each number in an array.
let countDown = [];
let count = 5;

while (count > 0) {
    countDown.push(count);
    count--;
}

console.log(countDown); // [5, 4, 3, 2, 1]

// 3. Browser-only example: prompt does not work in Node.js / VS Code terminal.
// Run this in the browser console if you want to test it.
/*
let favoriteTeas = [];
let tea;

do {
    tea = prompt('Enter your favorite tea. Type "Stop" to finish:');

    if (tea !== "Stop") {
        favoriteTeas.push(tea);
    }
} while (tea !== "Stop");

console.log(favoriteTeas);
*/

// 4. do...while example: add numbers from 1 to 3.
let i = 1;
let total = 0;

do {
    total = total + i;
    i++;
} while (i <= 3);

console.log(total); // 6

// 5. Use a for loop to multiply every array value by 2.
let numbers = [2, 3, 6];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 2);
}

console.log(multipliedNumbers); // [4, 6, 12]

// 6. Copy all cities from one array into another array.
let cities = ["Paris", "London", "Tokyo", "New York"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i]);
}

console.log(cities);
console.log(cityList);
