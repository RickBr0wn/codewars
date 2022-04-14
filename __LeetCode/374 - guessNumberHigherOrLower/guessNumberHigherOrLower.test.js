// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
const guessNumberHigherOrLower = require('./guessNumberHigherOrLower')

describe('guessNumberHigherOrLower (fn)', () => {
  it('should pass all basic tests', () => {
    expect(guessNumberHigherOrLower(10)).toBe(6)
    // expect(guessNumberHigherOrLower(1)).toBe(1)
    // expect(guessNumberHigherOrLower(2)).toBe(1)
    // expect(guessNumberHigherOrLower(2)).toBe(2)
  })
})
