const add = require('./add')

describe('add (fn', () => {
  it('should pass all basic tests', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(0, 1000)).toBe(1000)
    expect(add(2, -39)).toBe(-37)
    expect(add(99, 100)).toBe(199)
    expect(add(-100, 100)).toBe(0)
    expect(add(-1000, -1000)).toBe(-2000)
  })
})
