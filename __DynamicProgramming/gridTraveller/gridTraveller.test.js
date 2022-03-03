const gridTraveller = require('./gridTraveller')

describe('gridTraveller (fn)', () => {
  it('should pass all tests', () => {
    expect(gridTraveller(1, 1)).toBe(1)
    expect(gridTraveller(0, 1)).toBe(0)
    expect(gridTraveller(0, 3)).toBe(0)
    expect(gridTraveller(8, 0)).toBe(0)
    expect(gridTraveller(2, 3)).toBe(3)
    expect(gridTraveller(3, 3)).toBe(6)
    expect(gridTraveller(18, 18)).toBe(2333606220)
  })
})
