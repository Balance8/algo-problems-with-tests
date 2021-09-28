// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3.
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1.
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3.
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:

// Input: s = ""
// Output: 0.

// Constraints:

// 0 <= s.length <= 5 * 10.
// s consists of English letters, digits, symbols and spaces.

export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0;
  let end = 0;
  const map = new Map<string, number>();
  while (end < s.length) {
    const char = s[end];
    if (map.has(char)) {
      start = Math.max(start, map.get(char) + 1);
    }
    map.set(char, end);
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max;
}

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('');
