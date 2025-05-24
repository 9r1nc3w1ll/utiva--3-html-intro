// Arrays and Objects in JavaScript

// Arrays
let colors = ["red", "green", "blue"];

// // Array methods
colors.push("yellow"); // Add to end
console.log("After push:", colors);

colors.pop(); // Remove from end
console.log("After pop:", colors);

colors.unshift("purple"); // Add to beginning
console.log("After unshift:", colors);

colors.shift(); // Remove from beginning
console.log("After shift:", colors);

// // Array properties
console.log("Array length:", colors.length);

// // Accessing array elements
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

// // Array iteration
console.log("\nIterating through array:");
colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
});

// Objects
let user = {
  name: "John",
  age: 30,
  isAdmin: false,
  greet: function () {
    return `Hi, I'm ${this.name}`;
  },
};

// Accessing object properties
console.log("\nObject properties:");
console.log("Name:", user.name); // Dot notation
console.log("Age:", user["age"]); // Bracket notation

// Adding properties
user.location = "New York";
console.log("Added location:", user.location);

// Calling methods
console.log("Greeting method:", user.greet());

// Object with nested objects
let product = {
  name: "Laptop",
  price: 999.99,
  specs: {
    cpu: "Core i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
};

console.log("\nNested objects:");
console.log("Product:", product.name);
console.log("CPU:", product.specs.cpu);
