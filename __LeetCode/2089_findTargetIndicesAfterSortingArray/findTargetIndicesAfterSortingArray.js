// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
module.exports = function findTargetIndicesAfterSortingArray(nums, target) {
  let answers = []

  nums.sort((a, b) => a - b)

  let start = 0
  let end = nums.length - 1

  const findTargetRecursively = function (nums, start, end, target) {
    if (start > end) {
      return
    }

    const middle = start + Math.floor((end - start) / 2)

    if (nums[middle] === target) {
      findTargetRecursively(nums, start, middle - 1, target)
      answers.push(middle)
      findTargetRecursively(nums, middle + 1, end, target)
    } else if (nums[middle] > target) {
      findTargetRecursively(nums, start, middle - 1, target)
    } else {
      findTargetRecursively(nums, middle + 1, end, target)
    }
  }

  findTargetRecursively(nums, start, end, target)

  return answers
}
