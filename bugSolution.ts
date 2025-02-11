function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: number | string): void {
  if (typeof num === 'number') {
    console.log(num);
  } else {
    console.error("Invalid input: Expected a number, received a string.");
  }
}

printNumberSafe(123); // Correct
printNumberSafe("hello"); // Outputs an error message.