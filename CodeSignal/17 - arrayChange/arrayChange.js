/**
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example:
For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

Input/Output:
[execution time limit] 4 seconds (js)
[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.
[output] integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
 */
module.exports = function arrayChange(inputArray) {
  let incrementor = 0
  for (let i = 0; i < inputArray.length - 1; i++) {
    while (inputArray[i] >= inputArray[i + 1]) {
      incrementor++
      inputArray[i + 1]++
    }
  }
  return incrementor
}
