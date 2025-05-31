// Temperature Converter

// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Test the functions
let tempF = 98.6;
let tempC = convertToCelsius(tempF);
console.log(`${tempF}°F is ${tempC.toFixed(1)}°C`);

let celsius = 37;
let fahrenheit = convertToFahrenheit(celsius);
console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);

// Interactive temperature conversion
// Try with different values!
function convertTemperature(value, unit) {
  if (unit.toUpperCase() === "F") {
    let celsius = convertToCelsius(value);
    return `${value}°F is ${celsius.toFixed(1)}°C`;
  } else if (unit.toUpperCase() === "C") {
    let fahrenheit = convertToFahrenheit(value);
    return `${value}°C is ${fahrenheit.toFixed(1)}°F`;
  } else {
    return "Invalid unit. Please use 'C' or 'F'";
  }
}

// Examples
console.log(convertTemperature(32, "F")); // Freezing point in Fahrenheit
console.log(convertTemperature(100, "C")); // Boiling point in Celsius
