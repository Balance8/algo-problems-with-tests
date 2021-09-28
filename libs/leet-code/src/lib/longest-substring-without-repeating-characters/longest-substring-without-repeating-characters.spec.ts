import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', () => {
  test('#1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
  test('#2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });
  test('#3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
  test('#4', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });
  test('#5', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
  test('#6', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
  test('#7', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  });
  test('#8', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });
  test('#9', () => {
    expect(lengthOfLongestSubstring('ab')).toBe(2);
  });
  test('#10', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
});
