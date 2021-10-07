import { reverse } from './reverse-integer';

describe('reverse', () => {
  it('should return 0 for 0', () => {
    expect(reverse(0)).toEqual(0);
  });

  it('should return 1 for 1', () => {
    expect(reverse(1)).toEqual(1);
  });

  it('should return 123 for 321', () => {
    expect(reverse(123)).toEqual(321);
  });

  it('should return -123 for -321', () => {
    expect(reverse(-123)).toEqual(-321);
  });

  it('should return 120 for 21', () => {
    expect(reverse(120)).toEqual(21);
  });

  it('should return 0 for 1534236469', () => {
    expect(reverse(1534236469)).toEqual(0);
  });
});
