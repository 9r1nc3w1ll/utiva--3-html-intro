// Classes and Objects in JavaScript

// Creating a simple class
class Person {
  // Constructor - runs when a new object is created
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method - a function belonging to the class
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Method with parameters
  celebrateBirthday() {
    this.age++;
    return `${this.name} is now ${this.age} years old!`;
  }
}

// Creating objects (instances) from the class
const person1 = new Person("John", 25);
const person2 = new Person("Sarah", 30);

// Using object methods
console.log(person1.greet()); // "Hello, my name is John and I am 25 years old."
console.log(person2.greet()); // "Hello, my name is Sarah and I am 30 years old."

// Updating object properties
console.log(person1.celebrateBirthday()); // "John is now 26 years old!"

// Inheritance - Student class extends Person
class Student extends Person {
  constructor(name, age, grade) {
    // Call parent constructor
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying hard!`;
  }

  // Override parent method
  greet() {
    return `Hi, I'm ${this.name}, ${this.age} years old, in grade ${this.grade}.`;
  }
}

// Create a student
const student1 = new Student("Emma", 16, 10);
console.log(student1.greet()); // "Hi, I'm Emma, 16 years old, in grade 10."
console.log(student1.study()); // "Emma is studying hard!"
