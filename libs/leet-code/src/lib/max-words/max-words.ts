// Task description

// You would like to find the sentence containing the largest number of words in some given text. The text is specified as a string S consisting of N characters: letters, spaces, dots (.), question marks (?) and exclamation marks (!).

// The text can be divided into sentences by splitting it at dots, question marks and exclamation marks. A sentence can be divided into words by splitting it at spaces. A sentence without words is valid, but a valid word must contain at least one letter.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns the maximum number of words in a sentence.

// Assume that:

// 1. the length of S is within the range [1..100];
// 2. string S consists only of letters (a−z, A−Z), spaces, dots (.), question marks (?) and exclamation marks (!).

export function maxWords(S) {
  const sentence = S.split(/[!?.]/);

  let maxWords = 0;
  for (let i = 0; i < sentence.length; i++) {
    const words = sentence[i].split(/\s+/).filter((item) => item);

    if (words.length > maxWords) {
      maxWords = words.length;
    }
  }
  return maxWords;
}

console.log(maxWords('We test coders. Give us a try?')); // returns 4
console.log(maxWords('Forget  CVs..Save time . x x')); // returns 2

// The idea is to split the string into sentences, then split each sentence into words.
// Then, we can count the number of words in each sentence and return the maximum number of words.
// The split function can be used to split a string into an array of substrings,
// where the substrings are separated by the specified separator.
// The separator is a regular expression, so you can use special characters like ., ?, and !.
// Time complexity: O(N)
// Space complexity: O(1)
