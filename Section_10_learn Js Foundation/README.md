# JavaScript Foundation Notes

Use these files in this order:

1. `Hello.js` - print your first output.
2. `printing.js` - learn different ways to print values.
3. `datatypes.js` - see the main JavaScript data types.
4. `primitives.js` - learn primitive values like string, number, boolean, null, undefined, and symbol.
5. `non_primitives.js` - learn objects, arrays, and dates.
6. `changes.js` - learn `let` and `const`.
7. `assignment.js` - learn assignment operators like `+=`.
8. `operations.js` - learn arithmetic and comparison operators.
9. `operator_pre.js` - learn operation order.
10. `logical.js` - learn `&&`, `||`, and `!`.
11. `conditions.js` - learn `if` and `else`.
12. `loops.js` - learn `while`, `do...while`, and `for`.
13. `array_methods.js` - learn array indexing, `push`, `pop`, copying, merging, length, and `includes`.
14. `functionsIin.js` - learn function patterns.
15. `loop_challenges.js` - practice `break`, `continue`, `for...of`, and `for...in`.

## Common Patterns

Use `for...of` when you want array values:

```js
for (const tea of teaMenu) {
    console.log(tea);
}
```

Use a normal `for` loop when you need the index:

```js
for (let i = 0; i < teaMenu.length; i++) {
    console.log(i, teaMenu[i]);
}
```

Use `for...in` when you want object keys:

```js
for (const city in cityPopulation) {
    console.log(city, cityPopulation[city]);
}
```

Use `break` to stop the whole loop:

```js
if (tea === "Chai") break;
```

Use `continue` to skip only the current item:

```js
if (city === "Paris") continue;
```

Do not use `forEach` when you need to stop early. `break` does not work inside `forEach`.

## Beginner Mistakes To Watch

`for...of` gives the value, not the index:

```js
for (const number of numbers) {
    console.log(number); // correct
}
```

`push()` changes the original array and returns the new length:

```js
const newLength = cities.push("Mumbai");
```

Copying an array with `=` copies the reference:

```js
let copy = original; // both names point to the same array
```

Copying with spread creates a new array:

```js
let copy = [...original];
```

Use `return` when a function should give back a value:

```js
function makeTea(tea) {
    return `Making ${tea}`;
}
```
