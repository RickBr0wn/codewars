module.exports = function countNegativeNumbersInSortedMatrix(grid) {
  grid.sort((a, b) => a - b)
  let count = 0

  const countNegativeNumbersRecursively = function (nums, start, end) {
    const middle = start + Math.floor((end - start) / 2)

    if (start > end) {
      return
    }

    if (nums[middle] < 0) {
      countNegativeNumbersRecursively(nums, start, middle - 1)
      count = count + 1
      countNegativeNumbersRecursively(nums, middle + 1, end)
    } else {
      countNegativeNumbersRecursively(nums, middle + 1, end)
    }
  }

  grid.forEach(nums => {
    let start = 0
    let end = nums.length - 1

    countNegativeNumbersRecursively(nums, start, end)
  })

  return count
}
