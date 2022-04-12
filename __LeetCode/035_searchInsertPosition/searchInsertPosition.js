/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function searchInsertPosition(
  nums,
  target,
  left = 0,
  right = nums.length - 1
) {
  if (left > right) {
    return left
  }

  const center = Math.floor((right - left) / 2) + left

  if (target == nums[center]) {
    return center
  }

  if (target < nums[center]) {
    return searchInsertPosition(nums, target, left, center - 1)
  } else {
    return searchInsertPosition(nums, target, center + 1, right)
  }
}
