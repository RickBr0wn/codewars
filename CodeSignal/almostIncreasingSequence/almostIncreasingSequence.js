/**
 * A function that is given a sequence of integers as an `array`,
 * and returns `true` || `false` whether it is possible to obtain a strictly increasing
 * sequence by removing no more than one element from the `array`.
 *
 * For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false.
 * There is no one element in this array that can be removed in order to get a strictly increasing sequence.
 *
 * For sequence = [1, 3, 2], the output should be:
 *   almostIncreasingSequence(sequence) = true
 * You can remove 3 from the array to get the strictly increasing sequence[1, 2].
 * Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].
 *
 * @param `array` - An array containing integers
 * @returns `boolean`
 */
module.exports = function almostIncreasingSequence(sequence) {
  let isFirstNumber = true
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (isFirstNumber) {
        isFirstNumber = false
        if (
          sequence[i - 1] >= sequence[i + 1] &&
          sequence[i] >= sequence[i + 2]
        ) {
          return false
        }
      } else return false
    }
  }
  return true
}
