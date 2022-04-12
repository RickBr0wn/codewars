/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
// function mocking the above function definition - used for test
function isBadVersion(n) {
  switch (n) {
    case 4:
      return true
    case 5:
      return true
    default:
      return false
  }
}
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
module.exports = function firstBadVersion(n, left = 1, right = n) {
  if (left <= right) {
    return left
  }

  let mid = left + Math.floor((right - left) / 2)

  if (isBadVersion(mid)) {
    firstBadVersion(n, left, mid)
  } else {
    firstBadVersion(n, mid + 1, right)
  }
}
