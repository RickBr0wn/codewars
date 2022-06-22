/**
 * @param {string} s string
 * @param {string} target string
 * @returns {number} number
 */
module.exports = function rearrangeCharactersToMakeTargetString(s, target) {
  const map = {}
  const list = {}
  let counter = 100

  Array.from(s).forEach(item => {
    if (map.hasOwnProperty(item)) {
      map[item]++
    } else {
      map[item] = 1
    }
  })

  Array.from(target).map(item => {
    if (list.hasOwnProperty(item)) {
      list[item]++
    } else {
      list[item] = 1
    }
  })

  for (const [key, value] of Object.entries(list)) {
    counter = Math.min(counter, (map[key] || 0) / value)
  }

  return Math.floor(counter)
}
