// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Input: n = 1, bad = 1
// Output: 1
const firstBadVersion = require('./isBadVersion')

describe('firstBadVersion (fn)', () => {
  it('should pass all basic tests', () => {
    expect(firstBadVersion(5, 4)).toBe(4)
    expect(firstBadVersion(1, 1)).toBe(1)
  })
})
