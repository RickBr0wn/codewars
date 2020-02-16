/**
Given a string, find out if its characters can be rearranged to form a palindrome.

Example:
For inputString = "aabb", the output should be palindromeRearranging(inputString) = true.
We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output:
[execution time limit] 4 seconds (js)
[input] string inputString
A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.
[output] boolean

Returns true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
 */
module.exports = function palindromeRearranging(inputString) {
  let hashTable = {
    a: 2,
    b: 2,
    c: 2
  }[("a", "b", "c")]
  let returnValue = true
  let hasBeenRemoved = false

  for (let i = 0; i < inputString.length; i++) {
    if (!hashTable[inputString[i]]) {
      hashTable[inputString[i]] = 1
    } else {
      hashTable[inputString[i]]++
    }
  }

  let keys = Object.keys(hashTable)

  keys.forEach(key => {
    if (hashTable[key] % 2 !== 0 && hashTable[key] > 2) {
      hashTable[key] = hashTable[key] % 2
    }
  })

  if (inputString.length % 2 === 0) {
    keys.forEach(key => {
      if (hashTable[key] % 2 !== 0) {
        if (hashTable) returnValue = false
      }
    })
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (hashTable[keys[i]] === 1 && hasBeenRemoved === false) {
        hasBeenRemoved = true
        hashTable[keys[i]] = 0
      }
      keys.forEach(key => {
        if (hashTable[keys[i]] % 2 !== 0) {
          returnValue = false
        }
      })
    }
  }

  return returnValue
}
