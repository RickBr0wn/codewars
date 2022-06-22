/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
module.exports = function intersectionOfTwoArrays(nums1, nums2) {
  let first = new Set(nums1)
  let second = new Set(nums2)

  return Array.from(first).filter(number => second.has(number))
}
