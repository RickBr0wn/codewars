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

module.exports = function guessNumberHigherOrLower(n, start = 1, end = n) {
  if (n === 1 || n === 2) {
    return 1
  }

  if (guess(start) === 0) {
    return start
  }

  let middle = start + Math.floor((end - start) / 2)

  if (guess(middle) === 0) {
    return middle
  } else if (guess(middle) === -1) {
    return guessNumberHigherOrLower(n, start, middle)
  } else if (guess(middle) === 1) {
    return guessNumberHigherOrLower(n, middle + 1, end)
  }
}
