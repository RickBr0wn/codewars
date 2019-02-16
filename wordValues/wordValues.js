const a = 'a' // 97
const b = 'b'
const space = ' '
space.charCodeAt() //?

const wordValue = a =>
  a.map(
    (item, index) =>
      (index + 1) *
      item
        .replace(/\s/g, '')
        .split('')
        .reduce((acc, char) => (acc += char.charCodeAt(0) - 96), 0)
  )

// function wordValue(a) {
//   let newArr = []
//   for (let i = 0; i < a.length; i++) {
//     const innerArr = Array.from(a[i].replace(/\s/g, ''))
//     newArr[i] = innerArr
//       .map((item, index) => item.charCodeAt() - 96)
//       .reduce((a, b) => a + b, 0) //?
//   }
//   return newArr.map((item, index) => item * (index + 1))
// }

console.log(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225])
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24])
console.log(wordValue([''])) //?
