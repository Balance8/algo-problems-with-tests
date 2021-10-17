import { numberOfCarryOperations } from './number-of-carry-operations';

describe('numberOfCarryOperations', () => {
  test('#1', () => {
    expect(numberOfCarryOperations(123, 456)).toBe(0);
  });
});
