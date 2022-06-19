/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @returns {number}
 */
module.exports = function findTheDistanceValueBetweenTwoArrays(arr1, arr2, d) {
  return arr1.reduce((acc, arr1Value) => {
    for (let arr2Value of arr2) {
      if (Math.abs(arr1Value - arr2Value) <= d) {
        return acc
      }
    }
    return acc + 1
  }, 0)
}
