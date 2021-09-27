import { addTwoNumbers, ListNode } from './add-two-numbers';

describe('addTwoNumbers', () => {
  test('0', () => {
    expect(addTwoNumbers(null, null)).toEqual(null);
  });
  test('1', () => {
    expect(addTwoNumbers(new ListNode(2), new ListNode(2))).toEqual(
      new ListNode(4)
    );
  });
  test('2', () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))
      )
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });

  test('3', () => {
    expect(addTwoNumbers(new ListNode(5), new ListNode(5))).toEqual(
      new ListNode(0, new ListNode(1))
    );
  });
});
