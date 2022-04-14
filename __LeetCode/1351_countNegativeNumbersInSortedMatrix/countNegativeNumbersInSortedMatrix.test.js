// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Input: grid = [[3,2],[1,0]]
// Output: 0
const countNegativeNumbersInSortedMatrix = require('./countNegativeNumbersInSortedMatrix')

describe('searchInsertPosition (fn)', () => {
  it('should pass all basic tests', () => {
    const testOne = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ]
    const testTwo = [
      [3, 2],
      [1, 0],
    ]

    expect(countNegativeNumbersInSortedMatrix(testOne)).toBe(8)
    expect(countNegativeNumbersInSortedMatrix(testTwo)).toBe(0)
  })
})
