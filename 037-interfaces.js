// Interfaces in JavaScript

// JavaScript doesn't have formal interfaces like TypeScript or Java,
// but we can simulate them with different approaches:

// 1. Using Comments to Document Expected Interface
// This is the simplest approach - document what methods a class should implement

/**
 * Interface: Vehicle
 * Methods:
 * - start()
 * - stop()
 * - accelerate(speed)
 */

// Implementing our "Vehicle Interface"
class Car {
  start() {
    return "Car engine started";
  }

  stop() {
    return "Car engine stopped";
  }

  accelerate(speed) {
    return `Car accelerating to ${speed} mph`;
  }
}

// Another class implementing the same "interface"
class Bicycle {
  start() {
    return "Started pedaling the bicycle";
  }

  stop() {
    return "Bicycle stopped";
  }

  accelerate(speed) {
    return `Pedaling faster to ${speed} mph`;
  }
}

// 2. Using Duck Typing
// "If it walks like a duck and quacks like a duck, then it's a duck"
function startVehicle(vehicle) {
  // As long as the object has a start method, it works
  if (typeof vehicle.start === "function") {
    return vehicle.start();
  }
  throw new Error("Not a valid vehicle - missing start method");
}

const car = new Car();
const bike = new Bicycle();

console.log(startVehicle(car)); // "Car engine started"
console.log(startVehicle(bike)); // "Started pedaling the bicycle"

// 3. Runtime Interface Checking
function checkVehicleInterface(vehicle) {
  const requiredMethods = ["start", "stop", "accelerate"];

  for (const method of requiredMethods) {
    if (typeof vehicle[method] !== "function") {
      return false;
    }
  }
  return true;
}

console.log("Is car a vehicle?", checkVehicleInterface(car)); // true
console.log("Is bike a vehicle?", checkVehicleInterface(bike)); // true
console.log("Is {} a vehicle?", checkVehicleInterface({})); // false
