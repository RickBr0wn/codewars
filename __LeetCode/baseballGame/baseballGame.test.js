const baseballGame = require('./baseballGame')

describe('baseballGame (fn)', () => {
  it('should pass all basic tests', () => {
    expect(baseballGame(['5', '2', 'C', 'D', '+'])).toBe(30)
    expect(baseballGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
    expect(baseballGame(['1'])).toBe(1)
  })
})
