const XO = require('./exesAndOhs')

describe('XO', () => {
  expect(XO('xo').toBe(true))
  expect(XO('xxOo').toBe(true))
  expect(XO('xxxm').toBe(false))
  expect(XO('Oo').toBe(false))
  expect(XO('ooom').toBe(false))
})
