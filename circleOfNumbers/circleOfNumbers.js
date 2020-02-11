module.exports = function circleOfNumbers(n, firstNumber) {
  const circle = new Array(n).fill(0).map((num, index) => num + index)
  let counter = 0
  for (let i = firstNumber; i < Math.floor(circle.length / 2); i++) {
    if (circle[i + 1] === undefined) {
      return (counter = 0)
    }
    counter = circle[i + 1]
  }
  return circle
}
