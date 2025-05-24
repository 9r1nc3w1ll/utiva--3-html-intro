// Example of JavaScript's asynchronous behavior with the event loop
console.log("1");
setTimeout(() => console.log("2"), 5000);
console.log("3");

// console.log("2");

// Output:
// 1
// 2
// 3
