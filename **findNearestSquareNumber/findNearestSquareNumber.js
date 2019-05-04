function nearestSq(n) {
  let counter = n //?
  while (counter > 0) {
    if (Math.pow(counter, 2) < n) {
      return Math.pow(counter, 2)
    }
    counter--
  }
}

Math.pow(100, 2) //?
Math.sqrt(10000) //?

function isSquare(num) {
  return num
}

// console.log(nearestSq(1), 1)
// console.log(nearestSq(2), 1)
console.log(nearestSq(10), 9)
// console.log(nearestSq(111), 121)
console.log(nearestSq(9999), 10000)
