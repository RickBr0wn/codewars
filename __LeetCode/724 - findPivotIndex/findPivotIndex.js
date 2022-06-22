/**
 * @param {number[]} nums
 * @returns {number}
 */
module.exports = function findPivotIndex(nums) {
  let half = nums.reduce((acc, num) => acc + num, 0) / 2
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (sum === half - nums[i] / 2) {
      return i
    }
    sum += nums[i]
  }

  return -1
}
