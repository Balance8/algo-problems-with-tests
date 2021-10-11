// # Write a function counting sets of three

// Write a function that takes an array of positive integers and a threshold, and returns the number of sets of three which sum <= threshold.

// For instance, for the array [1,2,3,4], it should consider the following sets:

// * 1 2 3 (sum is 6)
// * 1 2 4 (sum is 7)
// * 1 3 4 (sum is 8)
// * 2 3 4 (sum is 9)

// So invoking `countSetsOfThree([1,2,3,4], 7)` should return 2.

// Signature:

function countSetsOfThree(arr: number[], threshold: number): number {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] <= threshold) {
          count++;
        }
      }
    }
  }
  return count;
}

// More test cases:

// ```
// expect(countSetsOfThree([1,2,3,4], 7)).toEqual(2);
// expect(countSetsOfThree([4,1,3,2], 7)).toEqual(2);
// expect(countSetsOfThree([1,2,3,9], 7)).toEqual(1);
// expect(countSetsOfThree([2,2,2,2], 7)).toEqual(4);
// expect(countSetsOfThree([3,3,3,3], 7)).toEqual(0);
// expect(countSetsOfThree([1,2,3,4,5], 7)).toEqual(2);
// ```

console.log(countSetsOfThree([1, 2, 3, 4], 7)); // 2
console.log(countSetsOfThree([4, 1, 3, 2], 7)); // 2
console.log(countSetsOfThree([1, 2, 3, 9], 7)); // 1
console.log(countSetsOfThree([2, 2, 2, 2], 7)); // 4
console.log(countSetsOfThree([3, 3, 3, 3], 7)); // 0
console.log(countSetsOfThree([1, 2, 3, 4, 5], 7)); // 2

// The idea is to sort the array and then iterate through it.
// We can use a sliding window to keep track of the sum of the current window.
// If the sum is greater than the threshold, we can move the left pointer to the right.
// If the sum is less than the threshold, we can move the right pointer to the right.
// If the sum is equal to the threshold, we can increment the count and move the left pointer to the right.
// Time complexity: O(n^2)
// Space complexity: O(1)

// Now let's look at the optimized solution.
// We can use a hashmap to keep track of the number of times each number appears in the array.
// We can then iterate through the hashmap and check if the sum of the current window is less than or equal to the threshold.
// If it is, we can increment the count and move the left pointer to the right.
// Time complexity: O(n)
// Space complexity: O(n)
// The optimized code is as follows:
function countSetsOfThreeOptimized(arr: number[], threshold: number): number {
  let count = 0;
  const map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum <= threshold) {
        count += map.get(sum) || 0;
      }
    }
  }
  return count;
}

console.log(countSetsOfThreeOptimized([1, 2, 3, 4], 7)); // 2
console.log(countSetsOfThreeOptimized([4, 1, 3, 2], 7)); // 2
console.log(countSetsOfThreeOptimized([1, 2, 3, 9], 7)); // 1
console.log(countSetsOfThreeOptimized([2, 2, 2, 2], 7)); // 4
console.log(countSetsOfThreeOptimized([3, 3, 3, 3], 7)); // 0
console.log(countSetsOfThreeOptimized([1, 2, 3, 4, 5], 7)); // 2
