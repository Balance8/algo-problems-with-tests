// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6.
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10.
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Constraints:

// 1 <= words.length <= 1000.
// 1 <= words[i].length, chars.length <= 100.
// words[i] and chars consist of lowercase English letters.

export function countCharacters(words: string[], chars: string): number {
  const charsMap = new Map<string, number>();
  for (const char of chars) {
    charsMap.set(char, (charsMap.get(char) || 0) + 1);
  }

  let result = 0;
  for (const word of words) {
    const wordMap = new Map<string, number>();
    for (const char of word) {
      wordMap.set(char, (wordMap.get(char) || 0) + 1);
    }
    let valid = true;
    for (const [key, value] of wordMap.entries()) {
      if (!charsMap.has(key) || charsMap.get(key) < value) {
        valid = false;
        break;
      }
    }

    if (valid) {
      result += word.length;
    }
  }

  return result;
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));

// The idea is to use a hashmap to store the characters and their counts in the chars string.
// Then iterate through the words array and check if the word can be formed by the characters in the chars string.
// If it can, add the length of the word to the result.
// Time complexity: O(n) where n is the number of words.
// Space complexity: O(n) where n is the number of words.
