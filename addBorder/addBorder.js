/**
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:
For picture = [ "abc",
                "ded"]  the output should be
addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output:
[execution time limit] 4 seconds (js)
[input] array.string picture
A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
 */

module.exports = function addBorder(picture) {
  let borderedPicture = []

  const topAndBottom = function() {
    let str = "*"
    for (let i = 0; i < picture[0].length + 1; i++) {
      str += "*"
    }
    return str
  }

  for (let i = 0; i < picture.length + 2; i++) {
    if (i === 0 || i === picture.length + 1) {
      borderedPicture.push(topAndBottom())
    } else {
      borderedPicture.push("*" + picture[i - 1] + "*")
    }
  }
  return borderedPicture
}
