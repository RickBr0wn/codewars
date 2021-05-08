module.exports = function numberToPrice(number) {
  if (typeof number != 'number') {
    return 'NaN'
  }

  let numberWithCommasInserted = String(number).replace(
    /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g,
    (_, s1, s2) => s2 || s1 + ','
  )

  const numbersAfterDecimalPoint = numberWithCommasInserted.split('.')[1]

  return !numbersAfterDecimalPoint
    ? (numberWithCommasInserted += '.00')
    : numbersAfterDecimalPoint.length == 1
    ? numberWithCommasInserted + '0'
    : numberWithCommasInserted
}
