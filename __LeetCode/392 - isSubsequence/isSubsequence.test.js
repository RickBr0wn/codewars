const isSubsequence = require('./isSubsequence')

describe('isSubsequence (fn)', () => {
  it('should pass all basic tests', () => {
    // expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
    // expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
    expect(isSubsequence('ab', 'baab')).toBe(true)
  })
})
