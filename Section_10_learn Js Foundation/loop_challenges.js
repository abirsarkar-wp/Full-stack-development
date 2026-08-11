/*
Loop learning patterns
----------------------
1. for loop: use when you need the index number.
2. for...of loop: use when you need the actual array value.
3. for...in loop: use when you need object keys.
4. break: stop the whole loop early.
5. continue: skip only the current item and keep looping.
6. forEach: cannot be stopped early with break.
*/

// 1. Stop when "Chai" is found and store only the teas before it.
{
    const teaMenu = ["Green Tea", "Black Tea", "Chai", "Oolong Tea"];
    const selectedTeas = [];

    for (let i = 0; i < teaMenu.length; i++) {
        const tea = teaMenu[i]; // i is the index, teaMenu[i] is the value.

        if (tea === "Chai") break; // break stops the entire loop.

        selectedTeas.push(tea);
    }

    console.log(teaMenu);
    console.log(selectedTeas); // ["Green Tea", "Black Tea"]
}

// 2. Skip "Paris" and store all other cities.
{
    const cities = ["London", "Tokyo", "Paris", "Berlin"];
    const visitedCities = [];

    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];

        if (city === "Paris") continue; // continue skips only this city.

        visitedCities.push(city);
    }

    console.log(cities);
    console.log(visitedCities); // ["London", "Tokyo", "Berlin"]
}

// 3. for...of gives the value directly. Stop before number 4.
{
    const numbers = [1, 2, 3, 4, 5];
    const smallNumbers = [];

    for (const number of numbers) {
        // number is already the value: 1, then 2, then 3...
        // Do not write numbers[number] here, because that treats the value as an index.
        if (number === 4) break;

        smallNumbers.push(number);
    }

    console.log(numbers);
    console.log(smallNumbers); // [1, 2, 3]
}

// 4. Skip "Herbal Tea" and store the other teas.
{
    const teaOptions = ["Green Tea", "Black Tea", "Oolong Tea", "Herbal Tea", "Chai"];
    const preferredTeas = [];

    for (const tea of teaOptions) {
        if (tea === "Herbal Tea") continue;

        preferredTeas.push(tea);
    }

    console.log(preferredTeas); // ["Green Tea", "Black Tea", "Oolong Tea", "Chai"]
}

// 5. for...in gives object keys. Stop when the key is "Berlin".
{
    const citiesPopulation = {
        London: 8900000,
        "New York": 8400000,
        Paris: 2200000,
        Berlin: 3500000,
    };

    const cityPopulationsBeforeBerlin = {};

    for (const city in citiesPopulation) {
        if (city === "Berlin") break;

        cityPopulationsBeforeBerlin[city] = citiesPopulation[city];
    }

    console.log(cityPopulationsBeforeBerlin);
}

// 6. Skip cities whose population is below 20000.
{
    const worldCities = {
        Sydney: 50000,
        Tokyo: 30000,
        Berlin: 35000,
        Paris: 19000,
    };

    const largeCities = {};

    for (const city in worldCities) {
        const population = worldCities[city];

        if (population < 20000) continue;

        largeCities[city] = population;
    }

    console.log(largeCities); // Paris is skipped.
}

// 7. Stop early when "Chai" is found.
// forEach is not used here because break does not work inside forEach.
{
    const teaMenu = ["Earl Tea", "Green Tea", "Chai", "Oolong Tea"];
    const availableTeas = [];

    for (const tea of teaMenu) {
        if (tea === "Chai") break;

        availableTeas.push(tea);
    }

    console.log(availableTeas); // ["Earl Tea", "Green Tea"]
}

// 8. Skip 7, double the other numbers, and store them in a new array.
{
    const numbersToDouble = [3, 2, 7, 8];
    const doubledNumbers = [];

    for (let i = 0; i < numbersToDouble.length; i++) {
        const number = numbersToDouble[i];

        if (number === 7) continue;

        doubledNumbers.push(number * 2);
    }

    console.log(doubledNumbers); // [6, 4, 16]
}

// 9. Stop when the current tea name has more than 10 characters.
{
    const teaCollections = ["Chai", "Green Tea", "Black Tea", "Jasmine Tea", "Herbal Tea"];
    const shortTeas = [];

    for (const tea of teaCollections) {
        if (tea.length > 10) break;

        shortTeas.push(tea);
    }

    console.log(shortTeas); // ["Chai", "Green Tea", "Black Tea"]
}
