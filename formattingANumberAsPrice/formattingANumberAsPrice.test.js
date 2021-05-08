const numberToPrice = require('./formattingANumberAsPrice')

describe('formattingANumberAsPrice()', () => {
  it('test', () => {
    expect(numberToPrice(1500.129)).toBe('1,500.12')
    expect(numberToPrice(-5)).toBe('-5.00')
    expect(numberToPrice(1000000.5)).toBe('1,000,000.50')
    expect(numberToPrice('@')).toBe('NaN')
  })
})
