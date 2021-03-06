// 4. Median of Two Sorted Arrays

// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000.
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000.
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000.

// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000.

// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000.

// Constraints:

// 1. nums1.length == m.
// 2. nums2.length == n.
// 3. 0 <= m <= 1000.
// 4. 0 <= n <= 1000.
// 5. 1 <= m + n <= 2000.
// 6. -10 <= nums1[i], nums2[i] <= 10

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const merged = merge(nums1, nums2);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid] + merged[mid - 1]) / 2;
  } else {
    return merged[mid];
  }
}

function merge(nums1: number[], nums2: number[]): number[] {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  return merged;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));
