const wordValue = require('./wordValue')

describe('wordValues (fn)', function () {
  it('should pass with these simple examples', function () {
    expect(wordValue(['codewars', 'abc', 'xyz'])).toEqual([88, 12, 225])
    expect(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])).toEqual([
      12, 24, 18, 24,
    ])
  })
})
