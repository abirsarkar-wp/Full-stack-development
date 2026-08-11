//write a for loop that loops through the array and stops when it finds chai store all the teas before chai in a new array named slectedTeas
let array = ["Green Tea", "Black Tea", "Chai", "Oolong Tea"]
let selecetdTeas = []
for(let i=0; i< array.length;i++){
    if(array[i] === "Chai") break
    selecetdTeas.push(array[i])
}
console.log(array)
console.log(selecetdTeas)

//write a for loop that loops through the array and skip Paris store the other cities in an new array named visitedCities
let cities = ['London','Tokyo','Paris','Berlin']
let visitedCities = []
for(let i = 0; i < cities.length; i++){
    if(cities[i] === 'Paris') continue
    visitedCities.push(cities[i])
}
console.log(cities)
console.log(visitedCities)

//use a for-of loop to iterate the array '[1,2,3,4,5]' and stop when the number '4" is found. store the numbers before '4' in an array named 'smallnumbers'.
let numbers = [1,2,3,4,5]
let smallnumbers = []
for (const element of numbers) {
    if(element === 4) break
    smallnumbers.push(element)    
}
console.log(numbers)
console.log(smallnumbers)

// write for of loop loops through array , skip herbal tea and stores others in an array called prefferedTea
let Teaoptions = ["Green Tea", "Black Tea", "oolong Tea","Herbal Tea", "Chai"]
let prefferedTea = []
for (const element of Teaoptions) {
    if(element === "Herbal Tea") continue
    prefferedTea.push(element)
}
console.log(prefferedTea)

//write a for in loop loops through an object containing city populations stop when the population berlin is found ...store all previous cities population in a new object named citypopulation

let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};

let citypopulations = []
for (const key in citiesPopulation) {
    if(key === "Berlin") break
    citypopulations[key] = citiesPopulation[key]
}
console.log(citypopulations)

//skip any city which have population below 20000
let worldcities = {
    "Sedney" : 50000,
    "Tokyo" : 30000,
    "Berlin": 35000,
    "Paris" : 19000
}
let largeCities = {}
for (const city in worldcities) {
    if(worldcities[city] < 20000) continue
    largeCities[city] = worldcities[city]
}
console.log(largeCities)

// write a for ecah loop that iterates through the array stop when chai is found and storev all previous tea types in an array name availableTeas
let teaMenu = ['Earl Tea', 'Green Tea', 'Chai', 'Oolong Tea']
let availableTeas = []
teaMenu.forEach((tea) => {
    if(tea === 'Chai') return
    availableTeas.push(tea)
});
console.log(availableTeas)

// write a for loop that iterates through the array and skip 7 multiply the rest with 2 and store it a diffrent array called newarraydouble
let numberarray = [3,2,7,8]
let newarraydouble = []
for(let i = 0; i < numberarray.length; i++){
    if(numberarray[i] === 7) continue
    newarraydouble.push((numberarray[i] * 2))
}
console.log(newarraydouble)

// write a for of loop which that iterates through the array stops when the length of the current tea length is greater than 10 ...store others in shorteas
let teaCollections = ["Chai","Green Tea","Black Tea", "Jasmine Tea","Herbal Tea"]
let shortTeas = []
for (const tea of teaCollections) {
    if(tea.length > 10) continue
    shortTeas.push(tea)
}
console.log(shortTeas)