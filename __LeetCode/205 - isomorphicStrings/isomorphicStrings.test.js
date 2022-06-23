const isomorphicStrings = require('./isomorphicStrings')

describe('isomorphicStrings (fn)', () => {
  it('should pass all basic tests', () => {
    expect(isomorphicStrings('egg', 'add')).toBe(true)
    expect(isomorphicStrings('foo', 'bar')).toBe(false)
    expect(isomorphicStrings('paper', 'title')).toBe(true)
  })
})
