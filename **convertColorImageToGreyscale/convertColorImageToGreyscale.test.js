const color2grey = require('./convertColorImageToGreyscale')

describe('color2grey (fn)', () => {
  it('should pass all tests', () => {
    var ic = [
      [
        [123, 231, 12],
        [56, 43, 124],
      ],
      [
        [78, 152, 76],
        [64, 132, 200],
      ],
    ]
    var ig = [
      [
        [122, 122, 122],
        [74, 74, 74],
      ],
      [
        [102, 102, 102],
        [132, 132, 132],
      ],
    ]
    // console.debug('evidence: ', JSON.stringify(ig))
    // console.debug('assertion: ', JSON.stringify(color2grey(ic)))
    expect(JSON.stringify(color2grey(ic))).toEqual(JSON.stringify(ig))
    // expect(true).toBe(true)
  })
})
