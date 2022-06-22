const missingNumber = require('./missingNumber')

describe('missingNumber (fn)', () => {
  it('should pass all basic tests', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
    expect(missingNumber([0, 1])).toBe(2)
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
    expect(missingNumber([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11])).toBe(6)
    expect(missingNumber([1])).toBe(0)
  })
})
