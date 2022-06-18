const intersectionOfTwoArrays = require('./intersectionOfTwoArrays')

describe('intersectionOfTwoArrays (fn)', () => {
  it('should pass all basic tests', () => {
    expect(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2])).toEqual([2])
    expect(intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
  })
})
