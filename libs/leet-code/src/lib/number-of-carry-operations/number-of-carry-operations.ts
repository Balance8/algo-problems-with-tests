// In addition (arithmetic operation), a carry refers to a digit that is transferred from one column to the adjacent column on the left when the result of the addition cannot be represented by a single digit. For example:

//   55
// + 29
// ----
//   84

// In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried to the column on the left and added to the result of 5 + 2.

// Write a function that given two numbers returns the total count of carry operations performed while adding them.

// Example:
// numberOfCarryOperations(65, 55) // 2
// 65 + 55 =>
// 1st column: 5 + 5 = 0 (1 is carried)
// 2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
// 3rd column: 1 (carried) = 1
// => 120 (2 carry operations)

export function numberOfCarryOperations(a, b) {
  let carry = 0;
  let result = 0;
  while (a > 0 || b > 0) {
    const aDigit = a % 10;
    const bDigit = b % 10;
    const sum = aDigit + bDigit + carry;
    if (sum >= 10) {
      carry = 1;
      result++;
    } else {
      carry = 0;
    }
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return result;
}

console.log(numberOfCarryOperations(123, 456)); // 0
console.log(numberOfCarryOperations(555, 555)); // 3
console.log(numberOfCarryOperations(900, 11)); // 0
console.log(numberOfCarryOperations(145, 55)); // 2
console.log(numberOfCarryOperations(0, 0)); // 0
console.log(numberOfCarryOperations(1, 99999)); // 5
console.log(numberOfCarryOperations(999045, 1055)); // 5
console.log(numberOfCarryOperations(101, 809)); // 1
console.log(numberOfCarryOperations(189, 209)); // 1
