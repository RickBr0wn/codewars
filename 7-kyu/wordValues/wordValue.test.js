const wordValue = require('./wordValue')

describe('wordValues (fn)', function () {
  it('should pass with these simple examples', function () {
    console.debug(`fn - ${wordValue(['codewars', 'abc', 'xyz'])}`)
    console.debug(`equal - [88, 12, 225]`)
    expect(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]).toEqual()
    // expect(
    //   wordValue(['abc abc', 'abc abc', 'abc', 'abc']),
    //   [12, 24, 18, 24]
    // ).toStrictEqual()
  })
})
