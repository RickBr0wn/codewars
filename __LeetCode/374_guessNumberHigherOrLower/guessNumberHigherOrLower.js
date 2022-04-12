// test function only
function guess(num) {
  switch (num) {
    case 7:
    case 8:
    case 9:
    case 10:
      return -1
    case 6:
      return 0
    default:
      return 1
  }
}

module.exports = function guessNumber(n, start = 1, end = n) {
  if (guess(start) === 0) {
    return start
  }

  let middle = start + Math.floor((end - start) / 2)
  console.log(`middle: ${middle}`)

  if (guess(middle) === 0) {
    console.log(`guess returns zero: ${guess(middle)}`)
    return middle
  } else if (guess(middle) === -1) {
    console.log(`guess returns minus one: ${guess(middle)}`)
    return guessNumber(n, start, middle)
  } else if (guess(middle) === 1) {
    console.log(`guess returns one: ${guess(middle)}`)
    return guessNumber(n, middle + 1, end)
  }
}
