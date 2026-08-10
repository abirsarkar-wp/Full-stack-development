//write a while loop that sum all the values from 1 to 5 and store the results in a variable called sum
let sum = 0;
let start = 1;
while(start <=5){
    sum = sum + start;
    start++;
}
console.log(sum);

//write a while loop that count down from 5 to 1 and store the number in an array called countDown
let countDown = [0];
let count = 5;
while(count>0){
    countDown.push(count)
    count --; 
}
console.log(countDown);