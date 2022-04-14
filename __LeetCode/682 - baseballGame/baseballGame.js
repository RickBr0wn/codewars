/*
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 \* 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
*/
/*
An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
 */

module.exports = function baseballGame(ops) {
  var scores = []

  const stack = op => {
    switch (op) {
      case 'C':
        scores.pop()
        break
      case 'D': {
        const score = scores[scores.length - 1] * 2
        scores.push(score)
        break
      }
      case '+': {
        const score = scores[scores.length - 1] + scores[scores.length - 2]
        scores.push(score)
        break
      }
      case /[0-9]*/.test(op) && op:
        scores.push(Number(op))
        break
      default:
        break
    }
  }

  ops.forEach(op => stack(op))

  return scores.reduce((a, b) => a + b)
}
