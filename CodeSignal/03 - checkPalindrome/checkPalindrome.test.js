const checkPalindrome = require('./checkPalindrome')

describe('checkPalindrome()', () => {
  it('should return `true` if the characters of the inputString can be rearranged to form a palindrome, `false` otherwise. ', () => {
    expect(checkPalindrome('aaabbcc')).toBe(true)
    expect(checkPalindrome('aabb')).toBe(true)
    expect(checkPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false)
    expect(checkPalindrome('abbcabb')).toBe(true)
    expect(checkPalindrome('zyyzzzzz')).toBe(true)
    expect(checkPalindrome('z')).toBe(true)
    expect(checkPalindrome('zaa')).toBe(true)
    expect(checkPalindrome('abca')).toBe(false)
    expect(checkPalindrome('abca')).toBe(false)
    expect(checkPalindrome('abcad')).toBe(false)
    expect(
      checkPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')
    ).toBe(false)
    expect(checkPalindrome('abdhuierf')).toBe(false)
  })
})
