const rowWeights = array =>
  array.reduce(
    ([s1, s2], item, index) => (index % 2 ? [s1, s2 + item] : [s1 + item, s2]),
    [0, 0]
  )

module.exports = rowWeights
