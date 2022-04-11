const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let number of numbers) {
    const remainder = targetSum - number
    if (canSum(remainder, numbers)) return true
  }

  return false
}

module.exports = canSum
