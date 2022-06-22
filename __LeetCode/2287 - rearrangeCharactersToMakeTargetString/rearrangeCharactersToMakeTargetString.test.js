const rearrangeCharactersToMakeTargetString = require('./rearrangeCharactersToMakeTargetString')

describe('rearrangeCharactersToMakeTargetString (fn)', () => {
  it('should pass all basic tests', () => {
    expect(
      rearrangeCharactersToMakeTargetString('ilovecodingonleetcode', 'code')
    ).toBe(2)
    expect(rearrangeCharactersToMakeTargetString('abcba', 'abc')).toBe(1)
    expect(
      rearrangeCharactersToMakeTargetString('abbaccaddaeea', 'aaaaa')
    ).toBe(1)
    expect(
      rearrangeCharactersToMakeTargetString(
        'aaaaaaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaa'
      )
    ).toBe(2)
  })
})
