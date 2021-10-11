import { myAtoi } from './string-to-integer-atoi';

describe('myAtoi', () => {
  test('#1', () => {
    expect(myAtoi('42')).toBe(42);
  });

  test('#2', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  test('#3', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  test('#4', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });

  test('#5', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
  });

  test('#6', () => {
    expect(myAtoi('+1')).toBe(1);
  });

  test('#7', () => {
    expect(myAtoi('+-2')).toBe(0);
  });

  test('#8', () => {
    expect(myAtoi('-+1')).toBe(0);
  });

  test('#9', () => {
    expect(myAtoi('+1')).toBe(1);
  });

  test('#10', () => {
    expect(myAtoi('+-2')).toBe(0);
  });

  test('#11', () => {
    expect(myAtoi('-+1')).toBe(0);
  });

  test('#12', () => {
    expect(myAtoi('+1')).toBe(1);
  });

  test('#13', () => {
    expect(myAtoi('+-2')).toBe(0);
  });

  test('#14', () => {
    expect(myAtoi('-+1')).toBe(0);
  });

  test('#15', () => {
    expect(myAtoi('+1')).toBe(1);
  });
});
