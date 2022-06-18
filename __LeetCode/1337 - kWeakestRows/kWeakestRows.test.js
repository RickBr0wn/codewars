const kWeakestRows = require('./kWeakestRows')

describe('kWeakestRows (fn)', () => {
  it('should pass all basic tests', () => {
    const firstMatrix = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ]

    const firstK = 3

    const secondMatrix = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ]

    const secondK = 2

    expect(kWeakestRows(firstMatrix, firstK)).toEqual([2, 0, 3])
    expect(kWeakestRows(secondMatrix, secondK)).toEqual([0, 2])
  })
})
