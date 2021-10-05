// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N.
// A P L S I I G.
// Y   I   R.

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3.
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4.
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N.
// A   L S  I G.
// Y A   H R.
// P     I.

// Example 3:

// Input: s = "A", numRows = 1.
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000.
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const rows: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  let row = 0;
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[row].push(s[i]);

    if (row === 0 || row === numRows - 1) {
      goingDown = !goingDown;
    }

    row += goingDown ? 1 : -1;
  }
  console.log(row);

  let result = '';
  for (let i = 0; i < rows.length; i++) {
    result += rows[i].join('');
  }

  return result;
}

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));

// The idea is to use two pointers, one for each row.
// The first pointer starts from the first character of the string and moves forward.
// The second pointer starts from the last character of the string and moves backward.
// The goingDown variable is used to determine which direction the first pointer should move.
// The result string is built by concatenating the characters of each row.
// Time complexity: O(n)
// Space complexity: O(n)
