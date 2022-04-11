/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function firstBadVersion(n, start = 0, end = n - 1) {
    if (start >= end) {
      return end
    }

    let middle = Math.floor(start + (end - start) / 2)

    if (isBadVersion(middle)) {
      // start stays same
      // end becomes middle
      return firstBadVersion(n, start, middle - 1)
    } else {
      // start becomes middle
      // end stays same
      return firstBadVersion(n, middle + 1, end)
    }
  }
}

// var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//        let low = 0
//      let high = n
//     while(low < high){
//       let mid = low + Math.floor((high - low)/2)
//       let boolResponse = isBadVersion(mid)
//       if(boolResponse === true) high = mid
//       else low = mid + 1
//     }
//     return low
//   };
// };

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
