module.exports = function binarySearch(
  nums,
  target,
  minimum = 0,
  maximum = nums.length - 1
) {
  let middleIndex = Math.floor((maximum - minimum) / 2 + minimum)

  if (maximum <= minimum && nums[middleIndex] !== target) {
    return -1
  }

  if (nums[middleIndex] === target) {
    return middleIndex
  }

  if (nums[middleIndex] < target) {
    return binarySearch(nums, target, middleIndex + 1, maximum)
  } else {
    return binarySearch(nums, target, minimum, middleIndex - 1)
  }
}
