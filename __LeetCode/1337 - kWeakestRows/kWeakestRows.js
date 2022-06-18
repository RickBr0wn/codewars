/**
 * @param {Array<Array<Number>>} matrix
 * @param {Number} k
 * @returns {Array<Number>}
 */
module.exports = function kWeakestRows(matrix, k) {
  const reduceRow = row => row.reduce((acc, num) => acc + num)

  let hashMap = {}

  matrix.forEach((row, i) => {
    hashMap[i] = reduceRow(row)
  })

  return Object.keys(hashMap)
    .map(Number)
    .sort((a, b) => hashMap[a] - hashMap[b])
    .slice(0, k)
}
