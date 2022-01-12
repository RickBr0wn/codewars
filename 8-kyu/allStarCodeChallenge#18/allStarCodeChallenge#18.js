/**
 * Create a function called that accepts 2 string arguments
 * and returns an integer of the count of occurrences the 2nd
 * argument is found in the first one.
 *
 * If no occurrences can be found, a count of 0 should be returned.
 *
 * @param {*} str
 * @param {*} letter
 * @returns
 */
module.exports = function strCount(str, letter) {
  return Array.from(str).filter(item => item === letter).length
}
