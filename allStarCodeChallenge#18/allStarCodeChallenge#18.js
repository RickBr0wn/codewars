// function strCount(str, letter) {
//   let counter = 0
//   Array.from(str).map((item, index) => {
//     if (item === letter) counter++
//   })
//   return counter
// }

function strCount(str, letter) {
  return Array.from(str).filter(item => item === letter).length
}

console.log(strCount('Hello', 'o'), 1)
console.log(strCount('Hello', 'l'), 2)
console.log(strCount('', 'z'), 0)
