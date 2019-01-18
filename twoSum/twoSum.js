/**
 * A method that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
 * * The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
 * @param `array` - The array to be checked.
 * @param `number` - The target number.
 * @returns `array` - The indices of the two elements in the array that add up tp the target number.
 */
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j]
    }
  }
}

const numericalCompare = (a, b) => a - b

console.log(twoSum([1, 2, 3], 4).sort(numericalCompare)) //?
console.log(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare), [1, 2]) //?
console.log(twoSum([2, 2, 3], 4).sort(numericalCompare)) //?
console.log(
  twoSum([145, 673, 741, 392, 477, 788, 748, 467, 741, 855], 1482).sort(
    numericalCompare
  )
)
