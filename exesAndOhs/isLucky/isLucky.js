/**
 * Ticket numbers usually consist of an even number of digits.
 * A ticket number is considered lucky if the sum of the first
 * half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 *
 * Example:
 * For n = 1230, the output should be isLucky(n) = true;
 * For n = 239017, the output should be isLucky(n) = false.
 *
 * Input/Output:
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * A ticket number represented as a positive integer with an even
 * number of digits.
 *
 * Guaranteed constraints:
 * 10 ≤ n < 106.
 * [output] boolean
 * true
 */
module.exports = function isLucky(n) {
  const arr = n.toString().split('')
  const reducer = (acc, cur) => parseInt(acc, 10) + parseInt(cur, 10)
  return (
    arr.slice(0, arr.length / 2).reduce(reducer) ===
    arr.slice(arr.length / 2, arr.length).reduce(reducer)
  )
}
