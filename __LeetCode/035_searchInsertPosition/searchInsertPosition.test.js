const searchInsertPosition = require('./searchInsertPosition')

describe('searchInsertPosition (fn)', () => {
  it('should pass all basic tests', () => {
    // expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2)
    // expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4)
  })
})
