function nearestSq(n) {
  return Math.pow(Math.floor(Math.sqrt(n)), 2)
}

Math.pow(3.1622776601683795, 2) //?
Math.sqrt(10) //?

// console.log(nearestSq(1), 1)
// console.log(nearestSq(2), 1)
console.log(nearestSq(10), 9)
console.log(nearestSq(111), 121)
// console.log(nearestSq(9999), 10000)
