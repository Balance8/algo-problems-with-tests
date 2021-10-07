// You have some apples and a basket that can carry up to 5000 units of weight.

// Given an integer array weight where weight[i] is the weight of the i apple, return the maximum number of apples you can put in the basket.

// Example 1:

// Input: weight = [100,200,150,1000]
// Output: 4.
// Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.

// Example 2:

// Input: weight = [900,950,800,1000,700,800]
// Output: 5.
// Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.

// Constraints:

// 1 <= weight.length <= 10.
// 1 <= weight[i] <= 10

// The function must return the maximum number of apples that can be carried by the basket.
// This means taking into account all of the apples that are in the array.
export const maxNumberOfApples = function (arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  for (let i = 0, sum = sorted[0]; i < sorted.length; sum += sorted[++i]) {
    if (sum > 5000) return i;
  }
  return arr.length;
};

console.log(maxNumberOfApples([100, 200, 150, 1000]));
console.log(maxNumberOfApples([900, 950, 800, 1000, 700, 800]));
console.log(
  maxNumberOfApples([
    988, 641, 984, 635, 461, 527, 491, 610, 274, 104, 348, 468, 220, 837, 126,
    111, 536, 368, 89, 201, 589, 481, 849, 708, 258, 853, 563, 868, 92, 76, 566,
    398, 272, 697, 584, 851, 302, 766, 88, 428, 276, 797, 460, 244, 950, 134,
    838, 161, 15, 330,
  ])
);

// Time Complexity: O(n^2)
// Space Complexity: O(n)
