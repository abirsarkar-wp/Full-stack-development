// check which number is greater between two numbers
let num1 = 10;
let num2 = 20;

if(num1>num2) {
    console.log(`${num1} is greater than ${num2}`)
}
else {
    console.log(`${num2} is greater than ${num1}`)
}


// check if string is equal to another string
let str1 = "Hello";
let str2 = "hello";
if(str1 === str2) {
    console.log(`${str1} is equal to ${str2}`)
}
else{
    console.log(`${str1} is not equal to ${str2}`)
}

//check if a variable is number or not 
let score = 100;
if(typeof score === "number"){
    console.log(`${score} is a number`)
}
else {
    console.log(`${score} is not a number`)
}

//check if boolean value is false or not 
let teaisReady = true;
if(teaisReady){
    console.log("Tea is ready")
}
else {
    console.log("Tea is not ready")
}

//check if array is empty or not
let arr = ["Abir"];
if(arr.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array is not empty")
}