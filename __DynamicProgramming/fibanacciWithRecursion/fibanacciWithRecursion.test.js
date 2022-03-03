const fibanacciWithRecursionAndHashMap = require('./fibanacciWithRecursionAndHashMap')

describe('fibanacciWithRecursionAndHashMap (fn)', () => {
  it('should pass all tests', () => {
    expect(fibanacciWithRecursionAndHashMap(0)).toBe(0)
    expect(fibanacciWithRecursionAndHashMap(1)).toBe(1)
    expect(fibanacciWithRecursionAndHashMap(5)).toBe(5)
    expect(fibanacciWithRecursionAndHashMap(6)).toBe(8)
    expect(fibanacciWithRecursionAndHashMap(7)).toBe(13)
    expect(fibanacciWithRecursionAndHashMap(50)).toBe(12586269025)
  })
})
