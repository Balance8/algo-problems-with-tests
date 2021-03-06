// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// 1. The number of nodes in each linked list is in the range [1, 100].
// 2. 0 <= Node.val <= 9.
// 3. It is guaranteed that the list represents a number that does not have leading zeros.

// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    if (tail) {
      tail.next = node;
    } else {
      head = node;
    }
    tail = node;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head;
}

addTwoNumbers(
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4)))
);

// The idea is to keep a carry and add the two digits.
// If the sum is greater than 9, we need to carry one more digit.
// If the sum is less than 10, we don't need to carry any more.
// If the sum is 10, we need to carry one more digit and add 1 to the sum.
// If the sum is 11, we need to carry one more digit and add 0 to the sum.
// Time complexity: O(n)
// Space complexity: O(1)
