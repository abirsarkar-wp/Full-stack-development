/*
Task : Perform the following mathematical operations
on the provided variables a and b
Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/

function add(input_1,input_2){
    return input_1 + input_2
}
function subtract(input_1,input_2){
    return input_1 - input_2
}
function multiply(input_1, input_2){
    return input_1 * input_2
}
function divide(input_1,input_2){
    return input_1 / input_2
}
function post_increment(input){
    return input ++
}
function pre_increment(input){
    return ++input
}
function post_decrement(input){
    return input --
}
function pre_decrement(input){
    return --input
}
function remainder(input_1,input_2){
    return input_1 % input_2
}
let a = 10
let b = 2
console.log(add(a,b))
console.log(subtract(a,b))
console.log(multiply(a,b))
console.log(divide(a,b))
console.log(post_increment(a))
console.log(pre_increment(a))
console.log(post_decrement(a))
console.log(pre_decrement(a))
console.log(remainder(a,b))