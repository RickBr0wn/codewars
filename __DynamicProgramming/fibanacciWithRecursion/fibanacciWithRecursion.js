// const fibanacciWithRecursion = n => {
//   if (n === 0) {
//     return 0
//   }

//   if (n <= 2) {
//     return 1
//   }

//   return fibanacciWithRecursion(n - 1) + fibanacciWithRecursion(n - 2)
// }

// The above solution is O(2^n) (exponential)
// fibanacciWithRecursion(50) -> 1,125,899,906,842,624

// using dynamic programming
/*
  memoization:

  use a js object.
  key: function parameter
  value: return value
  */
// this solution is O(n) (linear)
const fibanacciWithRecursionAndHashMap = (n, memo = {}) => {
  if (n in memo) {
    return memo[n]
  }

  if (n === 0) {
    return 0
  }

  if (n <= 2) {
    return 1
  }

  memo[n] =
    fibanacciWithRecursionAndHashMap(n - 1, memo) +
    fibanacciWithRecursionAndHashMap(n - 2, memo)

  return memo[n]
}

module.exports = fibanacciWithRecursionAndHashMap
