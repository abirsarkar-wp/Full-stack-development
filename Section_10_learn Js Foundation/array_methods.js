// Declare an Array which contains tea flavors
const teaFlavors = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
//store the first tea in a variable called "First Tea"
const firstTea = teaFlavors[0];
// print the First Tea 
console.log(firstTea)

// create an Array cities 
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
//store the third city in a variable called "favoriteCity"
let favoriteCity = cities[2];
// print the favoriteCity
console.log(favoriteCity)


// create an Array name citiesVisited 
let citiesVisited = ["Paris", "Tokyo", "Sydney", "Rome", "Barcelona"];
// add Mumbai to it using push method
let newCity = citiesVisited.push("Mumbai");
// print thr citiesVisited array
console.log(citiesVisited)
console.log(newCity)



// ceate an Array teaOrder which contains tea flavors
let teaOrder = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
// remove the last element using the pop method
let removedTea = teaOrder.pop();
// print the teaOrder array
console.log(teaOrder) 
console.log(removedTea)


// craeat an array calle popularTeas 
let popularTeas = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
// create a soft copy of thr popularTeas array using soft copy method name softcopyTeas
let softcopyTeas = popularTeas;
// print the softcopyTeas array
console.log(softcopyTeas)
popularTeas.pop();
console.log(softcopyTeas)

// create an array called topCities 
let topCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// create a hard copy of topCities
let hardCopyCities = [...topCities]
// print the hardCopyCities array
console.log(hardCopyCities)
topCities.pop();
console.log(hardCopyCities)
console.log([...hardCopyCities])

// merge two arrays
let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let mergedArray = [...array1, ...array2];
let mergedArray2 = array1.concat(array2);
console.log(mergedArray2)
console.log(mergedArray)


// create an array name teaMenu
let teaMenu = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
//store the length of teaMenu in a vaiable called menuSize
let menuSize = teaMenu.length;
// print the menuSize
console.log(menuSize)



// create an an arraycalled citiBucket, and findout London is present or not and store the result in isLondonPresent
let cityBucket = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let isLondonPresent = cityBucket.includes("London");
console.log(isLondonPresent);