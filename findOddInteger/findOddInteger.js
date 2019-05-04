/**
Given an array, find the int that appears an odd number of times. 
There will always be only one integer that appears an odd number of times.
*/
function findOdd(arr) {
  let table = {}

  arr.map(number => {
    if (Object.keys(table).includes(`${number}`)) {
      table[number]++
    } else {
      return (table = { ...table, [number]: 1 })
    }
  })

  console.log(table)

  Object.entries(table)[0][0] //?

  const objectArr = Object.entries(table) //?

  objectArr.map((item, index) => {
    if (item[1] % 2 === 1)
      //?
      return index
  })

  let index = objectArr.map((item, index) => {
    if (item[1] % 2 === 1)
      //?
      return index
  })

  return Object.entries(table)[index][0] //?
}

// findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5) //?
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1) //?
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5) //?
// findOdd([10], 10) //?
// findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10) //?
// findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1) //?
