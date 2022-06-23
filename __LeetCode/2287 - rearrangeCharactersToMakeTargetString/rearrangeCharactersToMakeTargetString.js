/**
 * @param {string} s string
 * @param {string} target string
 * @returns {number} number
 */
module.exports = function rearrangeCharactersToMakeTargetString(s, target) {
  const mapOfS = {}
  const mapOfTarget = {}
  let counter = 100

  Array.from(s).forEach(item => {
    if (mapOfS.hasOwnProperty(item)) {
      mapOfS[item]++
    } else {
      mapOfS[item] = 1
    }
  })

  Array.from(target).mapOfS(item => {
    if (mapOfTarget.hasOwnProperty(item)) {
      mapOfTarget[item]++
    } else {
      mapOfTarget[item] = 1
    }
  })

  for (const [key, value] of Object.entries(mapOfTarget)) {
    counter = Math.min(counter, (mapOfS[key] || 0) / value)
  }

  return Math.floor(counter)
}
