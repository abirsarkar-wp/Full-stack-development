/*
  JAVASCRIPT PROTOTYPES - VERY SIMPLE NOTES

  Imagine every object has:
  1. Its own small house: its own properties.
  2. A parent house: its prototype.

  If JavaScript cannot find something in the small house,
  it checks the parent house. This is the main idea of prototypes.

  BASIC PICTURE:

       child object
      +------------+
      | name       |
      +------------+
             |
             | prototype / parent
             v
      +------------+
      | shared data|
      +------------+
*/

// ------------------------------------------------------------
// 1. OWN PROPERTIES
// These properties belong directly to phone.
// ------------------------------------------------------------

const phone = {
  brand: "Nokia",
  color: "black",
};

console.log("1. phone's own brand:", phone.brand); // Nokia

// ------------------------------------------------------------
// 2. USING ANOTHER OBJECT AS A PROTOTYPE
// ------------------------------------------------------------

const computer = {
  cpu: 12,
};

const lenovo = {
  screen: "HD",
};

// Now computer is lenovo's parent object.
// If lenovo does not have a property, JavaScript checks computer.
Object.setPrototypeOf(lenovo, computer);

console.log("2. lenovo's own screen:", lenovo.screen); // HD
console.log("2. lenovo gets cpu from computer:", lenovo.cpu); // 12

// cpu is not copied into lenovo. lenovo only borrows it.
console.log("2. Does lenovo own cpu?", lenovo.hasOwnProperty("cpu")); // false
console.log("2. Does computer own cpu?", computer.hasOwnProperty("cpu")); // true

// ------------------------------------------------------------
// 3. HOW JAVASCRIPT SEARCHES FOR A PROPERTY
// ------------------------------------------------------------

const vehicle = {
  wheels: 4,
  move() {
    return "The vehicle is moving";
  },
};

const car = {
  brand: "Tesla",
};

Object.setPrototypeOf(car, vehicle);

// JavaScript checks car first, then vehicle.
//
//     car                    vehicle
//   +--------+   parent     +--------+
//   | brand  | ------------>| wheels |
//   +--------+              | move() |
//                           +--------+
//
// car.wheels means:
// 1. Is wheels inside car? No.
// 2. Is wheels inside vehicle? Yes, use 4.
console.log("3. car finds its own brand:", car.brand); // Tesla
console.log("3. car borrows wheels:", car.wheels); // 4
console.log("3. car borrows move():", car.move());

// If both objects have the same property, car wins because it is checked first.
car.wheels = 6;
console.log("3. car's value wins:", car.wheels); // 6, not 4
console.log(vehicle.wheels)

// ------------------------------------------------------------
// 4. SEEING THE PROTOTYPE
// ------------------------------------------------------------

const genericCar = { tyres: 4 };
const tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);

console.log("4. Tesla can borrow tyres:", tesla.tyres); // 4

// Object.getPrototypeOf() tells us Tesla's parent object.
console.log(
  "4. Is genericCar Tesla's parent?",
  Object.getPrototypeOf(tesla) === genericCar,
); // true

// ------------------------------------------------------------
// 5. MORE THAN ONE PARENT: THE PROTOTYPE CHAIN
// ------------------------------------------------------------

const animal = { eats: true };
const dog = { barks: true };
const puppy = { name: "Milo" };

Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(puppy, dog);

// puppy checks itself, then dog, then animal.
// So puppy can use name, barks, and eats.
//
//   puppy              dog               animal
//  +------+  parent   +-------+  parent  +------+
//  | name | --------->| barks | -------->| eats |
//  +------+           +-------+          +------+
console.log("5. puppy can use:", puppy.name, puppy.barks, puppy.eats);

// The chain finally ends at null. There is no parent after that.
console.log(
  "5. Does the chain finally end?",
  Object.getPrototypeOf(Object.prototype) === null,
); // true

// ------------------------------------------------------------
// 6. MAKING MANY SIMILAR OBJECTS
// ------------------------------------------------------------

// This function is a recipe for making users.
// The capital U is a common naming style for constructor functions.
function User(name) {
  this.name = name; // Each new user gets its own name.
}

// Put the shared function here, instead of making a new copy for every user.
User.prototype.sayHello = function () {
  return `Hello, I am ${this.name}`;
};

// new User() makes a new object and connects it to User.prototype.
const firstUser = new User("Asha");
const secondUser = new User("Ravi");

//                 User.prototype
//                +---------------+
//                | sayHello()    |  one shared function
//                +---------------+
//                   ^         ^
//                   |         |
//             firstUser   secondUser
//             +--------+  +---------+
//             | name   |  | name    |
//             | Asha   |  | Ravi    |
//             +--------+  +---------+

console.log("6. A user can say hello:", firstUser.sayHello());
console.log("6. Do both users share one function?", firstUser.sayHello === secondUser.sayHello); // true
console.log("6. Does firstUser own name?", firstUser.hasOwnProperty("name")); // true
console.log("6. Does firstUser own sayHello?", firstUser.hasOwnProperty("sayHello")); // false
console.log(
  "6. Is User.prototype firstUser's parent?",
  Object.getPrototypeOf(firstUser) === User.prototype,
); // true

// ------------------------------------------------------------
// 7. CLASSES: A CLEANER WAY TO WRITE THE SAME IDEA
// ------------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `My name is ${this.name}`;
  }
}

const cat = new Animal("Luna");

console.log("7. A class object can use its method:", cat.introduce());
console.log("7. Does cat own introduce()?", cat.hasOwnProperty("introduce")); // false
console.log(
  "7. Is Animal.prototype cat's parent?",
  Object.getPrototypeOf(cat) === Animal.prototype,
); // true

// ------------------------------------------------------------
// 8. INHERITANCE WITH extends
// ------------------------------------------------------------

class Dog extends Animal {
  bark() {
    return `${this.name} says woof`;
  }
}

const petDog = new Dog("Bruno");

// Dog gets introduce() from Animal, and also has its own bark().
//
//   petDog
//      |
//      v
//   Dog.prototype  ->  bark()
//      |
//      v
//   Animal.prototype -> introduce()
//
// This is why petDog can use both bark() and introduce().
console.log("8. Dog uses Animal's method:", petDog.introduce());
console.log("8. Dog uses its own method:", petDog.bark());

// ------------------------------------------------------------
// 9. THE FIVE RULES TO REMEMBER
// ------------------------------------------------------------

// Rule 1: A prototype is a parent object.
// Rule 2: An object borrows from its prototype; properties are not copied.
// Rule 3: JavaScript checks the object first, so its value wins.
// Rule 4: getPrototypeOf() shows the parent; setPrototypeOf() changes it.
// Rule 5: hasOwnProperty() checks only the object's own properties.

const settings = { theme: "dark" };
const account = Object.create(settings);
account.name = "Sam";

console.log("9. account borrows theme:", account.theme); // dark
console.log("9. Does account own theme?", account.hasOwnProperty("theme")); // false
console.log("9. Does account own name?", account.hasOwnProperty("name")); // true
