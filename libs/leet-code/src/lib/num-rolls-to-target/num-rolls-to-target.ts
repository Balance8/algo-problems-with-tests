// You have d dice and each die has f faces numbered 1, 2, ..., f. You are given three integers d, f, and target.

// Return the number of possible ways (out of f total ways) modulo 10 + 7 to roll the dice so the sum of the face-up numbers equals target.

// Example 1:

// Input: d = 1, f = 6, target = 3.
// Output: 1.
// Explanation:
// You throw one die with 6 faces.  There is only one way to get a sum of 3.

// Example 2:

// Input: d = 2, f = 6, target = 7.
// Output: 6.
// Explanation:
// You throw two dice, each with 6 faces.  There are 6 ways to get a sum of 7:
// 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

// Example 3:

// Input: d = 2, f = 5, target = 10.
// Output: 1.
// Explanation:
// You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.

// Example 4:

// Input: d = 1, f = 2, target = 3.
// Output: 0.
// Explanation:
// You throw one die with 2 faces.  There is no way to get a sum of 3.

// Example 5:

// Input: d = 30, f = 30, target = 500.
// Output: 222616187.
// Explanation:
// The answer must be returned modulo 10^9 + 7.

// Constraints:

// 1 <= d, f <= 30.
// 1 <= target <= 1000

export function numRollsToTarget(d: number, f: number, target: number): number {
  const dp: number[][] = Array(d + 1)
    .fill(0)
    .map(() => Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= f; j++) {
      for (let k = 1; k <= target; k++) {
        if (k - j >= 0) {
          dp[i][k] = (dp[i][k] + dp[i - 1][k - j]) % 1000000007;
        }
      }
    }
  }

  return dp[d][target];
}

console.log(numRollsToTarget(1, 6, 3));
console.log(numRollsToTarget(2, 6, 7));
console.log(numRollsToTarget(2, 5, 10));
console.log(numRollsToTarget(1, 2, 3));
console.log(numRollsToTarget(30, 30, 500));

// The idea is to use dynamic programming to solve this problem.
// The state of the problem is the number of ways to get a sum of target with d dice and f faces.
// The transition function is the number of ways to get a sum of target with d - 1 dice and f faces plus the number of ways to get a sum of target with d dice and f - 1 faces.
// The base case is the number of ways to get a sum of target with 0 dice and target faces.
// The answer is the number of ways to get a sum of target with d dice and f faces.
// The running time is O(d * f * target).
// The space complexity is O(d * f * target).
