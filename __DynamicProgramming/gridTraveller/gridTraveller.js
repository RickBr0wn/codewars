/*
Brute force method (only recursion)
  O(2^n + m) time complexity
  O(n + m) space complexity

Memoized method (recursion with memoization)
  O(n * m) time complexity
  O(n + m) space complexity
*/
const gridTraveller = (m, n, memo = {}) => {
  const key = m + ',' + n

  if (key in memo) {
    return memo[key]
  }

  if (m === 1 && n === 1) {
    return 1
  }

  if (m === 0 || n === 0) {
    return 0
  }

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)

  return memo[key]
}

module.exports = gridTraveller
