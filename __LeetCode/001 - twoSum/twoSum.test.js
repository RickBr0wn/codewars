const twoSum = require('./twoSum')

describe('twoSum (fn)', () => {
  it('should pass all basic tests', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
  })
})
