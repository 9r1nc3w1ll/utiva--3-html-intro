// TypeScript Interfaces Example

// Formal interface declaration
interface Vehicle {
  // Required properties
  make: string;
  model: string;
  year: number;

  // Required methods
  start(): string;
  stop(): string;
  accelerate(speed: number): string;
}

// Implementing the interface
class TSCar implements Vehicle {
  // Properties
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Methods required by the interface
  start(): string {
    return `${this.make} ${this.model} engine started`;
  }

  stop(): string {
    return `${this.make} ${this.model} engine stopped`;
  }

  accelerate(speed: number): string {
    return `${this.make} ${this.model} accelerating to ${speed} mph`;
  }

  // Additional methods not in the interface
  honk(): string {
    return "Beep beep!";
  }
}

// Another class implementing the same interface
class TSBicycle implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): string {
    return `Started pedaling the ${this.make} ${this.model}`;
  }

  stop(): string {
    return `Stopped the ${this.make} ${this.model}`;
  }

  accelerate(speed: number): string {
    return `Pedaling the ${this.make} faster to ${speed} mph`;
  }

  ringBell(): string {
    return "Ring ring!";
  }
}

// Using the interface type for function parameters
function startTS(vehicle: Vehicle): string {
  return vehicle.start();
}

// Creating objects that implement the interface
const myCar = new TSCar("Toyota", "Corolla", 2020);
const myBike = new TSBicycle("Trek", "FX3", 2021);

// Both objects can be used with the same function
console.log(startTS(myCar)); // "Toyota Corolla engine started"
console.log(startTS(myBike)); // "Started pedaling the Trek FX3"

// Interface for object shapes
interface User {
  id: number;
  name: string;
  email: string;
  active?: boolean; // Optional property (? makes it optional)
}

// Object literal using the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  active: true
};

// Function that accepts an interface
function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

console.log(greetUser(user)); // "Hello, John Doe!" 