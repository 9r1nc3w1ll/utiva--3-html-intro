// Control flow in JavaScript

// If-else statements
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// If-else if-else statements
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// For loop
console.log("\nCounting with for loop:");
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}

// For...of loop (iterating over arrays)
console.log("\nFruits using for...of loop:");
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

// While loop
console.log("\nCounting with while loop:");
let count = 0;
while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}

// Switch statement
console.log("\nSwitch statement example:");
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}
