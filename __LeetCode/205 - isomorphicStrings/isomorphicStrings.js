/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
module.exports = function isomorphicStrings(s, t) {
  const mapST = {}
  const mapTS = {}

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (
      (mapST.hasOwnProperty(charS) && mapST[charS] !== charT) ||
      (mapTS.hasOwnProperty(charT) && mapTS[charT] !== charS)
    ) {
      return false
    }

    mapST[charS] = charT
    mapTS[charT] = charS
  }

  return true
}
