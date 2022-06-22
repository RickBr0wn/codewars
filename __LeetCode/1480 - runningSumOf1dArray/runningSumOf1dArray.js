/**
 * @param {number[]} nums
 * @returns {number[]}
 */
module.exports = function runningSum(nums) {
  let sum = 0
  return nums.map(num => (sum += num))
}
