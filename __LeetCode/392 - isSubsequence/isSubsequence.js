/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 *
 * s: 'abc', t: 'ahbgdc' -> true
 *
 */
module.exports = function isSubsequence(s, t, i = 0, j = 0) {
  if (i == s.length) return true

  if (j == t.length) return false

  return s.charAt(i) == t.charAt(j)
    ? isSubsequence(s, t, i + 1, j + 1)
    : isSubsequence(s, t, i, j + 1)
}
