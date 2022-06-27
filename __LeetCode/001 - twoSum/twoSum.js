/**
 * @param {number[]}
 * @param {number}
 * @returns {number[]}
 *
 * Time Complexity: O(n)
 *
 * Whiteboard:
 *
 * twoSum([3, 2, 4], 6)
 *
 * nums.length: 3
 * target: 6
 *
 * i: 2
 * nums[i]: 4
 * target - nums[i]: 2
 *
 * obj: {
 *        3: 0,
 *        2: 1,
 *      }
 *
 * return: [1, 2]
 */
module.exports = function twoSum(nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(target - nums[i])) {
      return [obj[target - nums[i]], i]
    }

    obj[nums[i]] = i
  }
}
