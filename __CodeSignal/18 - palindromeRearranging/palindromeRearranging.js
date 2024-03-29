/**
Given a string, find out if its characters can be rearranged to form a palindrome.

Example:
For inputString = "aabb", the output should be palindromeRearranging(inputString) = true.
We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output:
[execution time limit] 4 seconds (js)
[input] string inputString
A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.
[output] boolean

Returns true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
 */
module.exports = function palindromeRearranging(inputString) {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  )
}
