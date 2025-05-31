// Programming Paradigms Example

// Procedural Programming - Using procedures or routines
function calculateAreaProcedural(width, height) {
  return width * height;
}
console.log("Procedural:", calculateAreaProcedural(5, 10)); // 50

// Functional Programming - Using pure functions without side effects
// 1. First-class functions
const double = (x) => x * 2;
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(double);
console.log("Functional (map):", doubled); // [2, 4, 6, 8]

// 2. Immutability
const addItem = (list, item) => [...list, item]; // returns new array
const fruits = ["apple", "banana"];
const newFruits = addItem(fruits, "orange");
console.log("Original:", fruits); // ["apple", "banana"]
console.log("New (immutable):", newFruits); // ["apple", "banana", "orange"]

// Object-Oriented Programming - Using objects and classes
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log("OOP:", rect.calculateArea()); // 50
