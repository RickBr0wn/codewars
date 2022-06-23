/**
 * @param {string} s string
 * @param {string} target string
 * @returns {number} number
 */
module.exports = function rearrangeCharactersToMakeTargetString(s, target) {
  const mapOfS = {}
  const mapOfTarget = {}
  let counter = 100

  Array.from(s).forEach(letter =>
    mapOfS.hasOwnProperty(letter) ? mapOfS[letter]++ : (mapOfS[letter] = 1)
  )

  Array.from(target).forEach(letter =>
    mapOfTarget.hasOwnProperty(letter)
      ? mapOfTarget[letter]++
      : (mapOfTarget[letter] = 1)
  )

  for (const [key, value] of Object.entries(mapOfTarget)) {
    counter = Math.min(counter, (mapOfS[key] || 0) / value)
  }

  return Math.floor(counter)
}
