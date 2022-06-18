const peakIndexInMountainArray = require('./peakIndexInMountainArray')

describe('peakIndexInMountainArray (fn)', () => {
  it('should pass all basic tests', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1)
    expect(peakIndexInMountainArray([4, 5, 6, 7, 8, 7, 6, 5])).toBe(4)
  })
})
