/**
Given two strings, find the number of common characters between them.

Example:
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output:
[execution time limit] 4 seconds (js)
[input] string s1
A string consisting of lowercase English letters.
Guaranteed constraints:
1 ≤ s1.length < 15.
[input] string s2
A string consisting of lowercase English letters.
Guaranteed constraints:
1 ≤ s2.length < 15.
[output] integer
 */
module.exports = function commonCharacterCount(s1, s2) {
  let arr2 = s2.split('')
  let counter = 0

  for (const firstLetter of s1.split('')) {
    for (const secondLetter of arr2) {
      if (firstLetter === secondLetter) {
        arr2.splice(arr2.indexOf(secondLetter), 1)
        counter++
        break
      }
    }
  }

  return counter
}
