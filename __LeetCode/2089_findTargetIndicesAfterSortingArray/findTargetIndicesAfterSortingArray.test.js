// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:

// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.
const findTargetIndicesAfterSortingArray = require('./findTargetIndicesAfterSortingArray')

describe('findTargetIndicesAfterSortingArray (fn)', () => {
  it('should pass all basic tests', () => {
    expect(findTargetIndicesAfterSortingArray([1, 2, 5, 2, 3], 2)).toEqual([
      1, 2,
    ])
    expect(findTargetIndicesAfterSortingArray([1, 2, 5, 2, 3], 3)).toEqual([3])
    expect(findTargetIndicesAfterSortingArray([1, 2, 5, 2, 3], 5)).toEqual([4])
  })
})
