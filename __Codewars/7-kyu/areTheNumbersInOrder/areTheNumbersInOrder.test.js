const inAscOrder = require('./areTheNumbersInOrder')

describe('inAscOrder (fn)', () => {
  it('should pass all tests', () => {
    expect(inAscOrder([1, 2, 4, 7, 19]))
    expect(inAscOrder([1, 2, 3, 4, 5]))
    expect(!inAscOrder([1, 6, 10, 18, 2, 4, 20]))
    expect(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))
  })
})
