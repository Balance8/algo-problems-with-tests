// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2, 2 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123.
// Output: 321.

// Example 2:

// Input: x = -123.
// Output: -321.

// Example 3:

// Input: x = 120.
// Output: 21.

// Example 4:

// Input: x = 0.
// Output: 0.

// Constraints:

// 1. -2 <= x <= 2 - 1

export function reverse(x: number): number {
  const reversed = x.toString().split('').reverse().join('');

  if (x < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));

// The idea is to convert the number to string, reverse it and convert it back to number.
// If the number is negative, we need to convert it to positive and then convert it back to negative.
// Time complexity: O(n)
// Space complexity: O(n)
