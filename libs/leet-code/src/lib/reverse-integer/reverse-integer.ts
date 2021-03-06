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
  // check if the number is negative
  const isNegative = x < 0;
  const reversed = x.toString().split('').reverse().join('');

  let result = parseInt(reversed, 10);
  if (isNegative) {
    // Set result equal to the negative of the result
    result *= -1;
  }

  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }
  return result;
}
Math.sign;

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));

// The idea is to convert the number to string, reverse it and convert it back to number.
// If the number is negative, we need to convert it to positive and then convert it back to negative.
// Time complexity: O(n)
// Space complexity: O(n)

// Extra:
// const absReversed = Math.abs(x).toString().split('').reverse().join('');
// from leetcode
