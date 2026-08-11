/*
Array learning patterns
-----------------------
Arrays store ordered values.
Indexes start at 0, so the first item is array[0].
Some methods change the original array. Examples: push(), pop().
*/

// 1. Read the first value from an array.
const teaFlavors = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
const firstTea = teaFlavors[0];
console.log(firstTea); // Green Tea

// 2. Read the third value from an array.
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let favoriteCity = cities[2];
console.log(favoriteCity); // Chicago

// 3. Add a new value with push().
let citiesVisited = ["Paris", "Tokyo", "Sydney", "Rome", "Barcelona"];
let newLength = citiesVisited.push("Mumbai");

console.log(citiesVisited); // Mumbai is added at the end.
console.log(newLength); // push() returns the new array length.

// 4. Remove the last value with pop().
let teaOrder = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
let removedTea = teaOrder.pop();

console.log(teaOrder); // Herbal is removed.
console.log(removedTea); // Herbal

// 5. Reference copy: both variables point to the same array.
let popularTeas = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
let teaReferenceCopy = popularTeas;

console.log(teaReferenceCopy);
popularTeas.pop();
console.log(teaReferenceCopy); // Also changed, because it is the same array reference.

// 6. Shallow copy: create a new array with the same values.
let topCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let copiedCities = [...topCities];

console.log(copiedCities);
topCities.pop();
console.log(copiedCities); // Does not change when topCities changes.

// 7. Merge two arrays.
let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];

let mergedArrayWithSpread = [...array1, ...array2];
let mergedArrayWithConcat = array1.concat(array2);

console.log(mergedArrayWithConcat);
console.log(mergedArrayWithSpread);

// 8. Find the length of an array.
let teaMenu = ["Green Tea", "Black Tea", "Oolong", "White Tea", "Herbal"];
let menuSize = teaMenu.length;

console.log(menuSize); // 5

// 9. Check if an array contains a value.
let cityBucket = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let isLondonPresent = cityBucket.includes("London");

console.log(isLondonPresent); // false
