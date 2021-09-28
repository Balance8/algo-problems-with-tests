import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe('findMedianSortedArrays', () => {
  test('#1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test('#2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('#3', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  test('#4', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6])).toBe(3.5);
  });

  test('#5', () => {
    expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBe(3.5);
  });

  test('#6', () => {
    expect(
      findMedianSortedArrays(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      )
    ).toBe(10);
  });

  test('#7', () => {
    expect(
      findMedianSortedArrays(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
          44, 45, 46, 47, 48, 49, 50,
        ]
      )
    ).toBe(25.5);
  });
});
