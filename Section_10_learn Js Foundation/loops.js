//write a while loop that sum all the values from 1 to 5 and store the results in a variable called sum
let sum = 0;
let start = 1;
while(start <=5){ // runs 5 times 
    sum = sum + start;
    start++;
}
console.log(sum);

//write a while loop that count down from 5 to 1 and store the number in an array called countDown
let countDown = [];
let count = 5;
while(count>0){
    countDown.push(count)
    count --; 
}
console.log(countDown);

//write a do-while loop which promts the user to enter there fevorite tea and store that in an array called fevoriteTea and enter stop to finish. (prompt does not works on vscode you have to run this on browser console)

// let fevoriteTea = []
// let tea;
// do {
//     tea = prompt(`Enter Your Fevorite Tea (enter "Stop" to finish) :`)
//     if(tea !== 'Stop'){
//     fevoriteTea.push(tea)
//     }
// } while (tea !== 'Stop');
// console.log(fevoriteTea);

// write a dowhile loop adds numbers from 1 to 3 and stores that in a variable called total 
let i = 1;
let total = 0;
do {
    total = total + i
    i++
} while (i<=3);
console.log(total)

// write a for loop which multiple 2 withh al the values in an array and stores it in a new array called multipliedNumbers
let arr = [2 , 3 , 6]
let multipliedNumbers = []
for(let i = 0; i < arr.length; i++){
    multipliedNumbers.push(arr[i] * 2)
}
console.log(multipliedNumbers)

// write a for loop which store all the cities from array to another array called citiList
let cities = ['Paris', 'London', 'Tokyo', 'New York']
let citiList = [];
for(let i = 0; i < cities.length; i++){
    citiList.push(cities[i])
}
console.log(cities)
console.log(citiList)