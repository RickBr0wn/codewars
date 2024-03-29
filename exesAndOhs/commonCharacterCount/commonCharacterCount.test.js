const commonCharacterCount = require('./commonCharacterCount')

describe('commonCharacterCount()', () => {
  it('should return the correct number of common characters', () => {
    expect(commonCharacterCount('aabcc', 'adcaa')).toBe(3)
    expect(commonCharacterCount('zzzz', 'zzzzzzz')).toBe(4)
    expect(commonCharacterCount('abca', 'xyzbac')).toBe(3)
    expect(commonCharacterCount('a', 'b')).toBe(0)
    expect(commonCharacterCount('a', 'aaa')).toBe(1)
  })
})
