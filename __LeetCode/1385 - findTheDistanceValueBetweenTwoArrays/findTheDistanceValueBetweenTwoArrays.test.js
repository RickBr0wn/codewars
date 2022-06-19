const findTheDistanceValueBetweenTwoArrays = require('./findTheDistanceValueBetweenTwoArrays')

describe('findTargetIndicesAfterSortingArray (fn)', () => {
  it('should pass all basic tests', () => {
    expect(
      findTheDistanceValueBetweenTwoArrays([4, 5, 8], [10, 9, 1, 8], 2)
    ).toBe(2)
    expect(
      findTheDistanceValueBetweenTwoArrays(
        [1, 4, 2, 3],
        [-4, -3, 6, 10, 20, 30],
        3
      )
    ).toBe(2)
    expect(
      findTheDistanceValueBetweenTwoArrays(
        [2, 1, 100, 3],
        [-5, -2, 10, -3, 7],
        6
      )
    ).toBe(1)
  })
})
