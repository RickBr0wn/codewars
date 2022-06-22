/**
 * @param {number[]} nums
 * @returns {number}
 */
module.exports = function missingNumber(nums) {
  return (
    (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, i) => acc + i, 0)
  )
}
