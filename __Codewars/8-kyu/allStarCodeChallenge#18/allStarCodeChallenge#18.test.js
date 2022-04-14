const strCount = require('./allStarCodeChallenge#18')

describe('strCount (fn)', () => {
  it('should pass all basic tests', () => {
    expect(strCount('Hello', 'o')).toBe(1)
    expect(strCount('Hello', 'l')).toBe(2)
    expect(strCount('', 'z')).toBe(0)
  })
})
