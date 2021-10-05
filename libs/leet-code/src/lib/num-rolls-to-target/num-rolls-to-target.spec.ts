import { numRollsToTarget } from './num-rolls-to-target';
describe('numRollsToTarget', () => {
  test('#1', () => {
    expect(numRollsToTarget(1, 6, 3)).toBe(1);
  });
  test('#2', () => {
    expect(numRollsToTarget(2, 6, 7)).toBe(6);
  });
  test('#3', () => {
    expect(numRollsToTarget(2, 5, 10)).toBe(1);
  });
  test('#4', () => {
    expect(numRollsToTarget(30, 30, 500)).toBe(222616187);
  });

  test('#5', () => {
    expect(numRollsToTarget(1, 2, 3)).toBe(0);
  });
});
