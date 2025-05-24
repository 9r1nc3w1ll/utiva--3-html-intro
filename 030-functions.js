// Functions in JavaScript

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

// Arrow Function
const add = (a, b) => a + b;

function addAgain(a, b) {
  return a + b;
}

// Function with default parameters
function createMessage(name, message = "Welcome to JavaScript!") {
  return `${name}: ${message}`;
}

// Function that returns another function (closure)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Using the functions
console.log(greet("Alice")); // Hello, Alice!
console.log(sayGoodbye("Bob")); // Goodbye, Bob!
console.log(`5 + 3 = ${add(5, 3)}`); // 5 + 3 = 8
console.log(createMessage("Charlie")); // Charlie: Welcome to JavaScript!
console.log(createMessage("Diana", "Thanks for the invite!")); // Diana: Thanks for the invite!

// Using the closure
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(`Double of 5: ${double(5)}`); // Double of 5: 10
console.log(`Triple of 5: ${triple(5)}`); // Triple of 5: 15
