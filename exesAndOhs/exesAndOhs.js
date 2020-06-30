/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 * Examples input/output:
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */
function XO(str) {
  if (str === '') {
    return true
  }
  const xRegex = new RegExp('x', 'i')
  const oRegex = new RegExp('o', 'i')
  return str.split('').reduce(
    ({ xCount, oCount }, letter, index) => {
      if (letter.match(xRegex)) {
        xCount++
      } else if (letter.match(oRegex)) {
        oCount++
      }

      if (index < str.length - 1) {
        return { xCount, oCount }
      } else {
        return xCount == oCount
      }
    },
    { xCount: 0, oCount: 0 }
  )
}

module.exports = XO
