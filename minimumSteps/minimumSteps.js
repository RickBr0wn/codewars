// function minimumSteps(numbers, value) {
//   let steps = 0
//   let index = 0
//   let total = 0
//   numbers.sort((a, b) => a - b)
//   while (total < value) {
//     if (numbers[0] > value) return 0
//     else {
//       if (total === 0) {
//         total = numbers[index]
//       }
//       total += numbers[index + 1]
//       index++
//       steps++
//     }
//   }
//   return steps
// }

function minimumSteps(numbers, value) {
  return numbers.sort((a, b) => a - b).filter(e => (value = value - e) > 0)
    .length
}

console.log(minimumSteps([4, 6, 3], 7), 1)
console.log(minimumSteps([10, 9, 9, 8], 17), 1)
console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3)
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8)
console.log(minimumSteps([4, 6, 3], 2), 0)
