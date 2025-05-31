// OOP Principles in JavaScript

// 1. Encapsulation - Bundling data and methods together
class BankAccount {
  #balance = 0; // Private field (# makes it private)

  constructor(owner) {
    this.owner = owner;
  }

  // Public methods to interact with private data
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    return "Invalid amount";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    return "Invalid withdrawal";
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice");
console.log(account.deposit(1000)); // "Deposited $1000. New balance: $1000"
console.log(account.withdraw(500)); // "Withdrew $500. New balance: $500"
// console.log(account.#balance); // Error! Private property

// 2. Abstraction - Hiding complex implementation details
class MusicPlayer {
  constructor() {
    this.isPlaying = false;
    this.currentTrack = null;
  }

  // Simple interface hiding complex implementation
  play(track) {
    this.currentTrack = track;
    this.isPlaying = true;
    this._connectToAudioHardware(); // Internal complex method
    return `Playing: ${track}`;
  }

  pause() {
    this.isPlaying = false;
    return "Music paused";
  }

  // Internal complex method (abstracted away)
  _connectToAudioHardware() {
    // Complex code to connect to audio system
    // Users don't need to understand this complexity
  }
}

const player = new MusicPlayer();
console.log(player.play("Happy Birthday")); // "Playing: Happy Birthday"

// 3. Polymorphism - Different classes can be used with the same interface
class Animal {
  speak() {
    return "Some sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

// Same method call, different behaviors
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => {
  console.log(animal.speak()); // "Woof!", "Meow!"
});
