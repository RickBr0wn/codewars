// O(n)
// function findDigit(str){
//   for(let i = 0; i<str.length;i++){
//     if(/^\d$/.test(str[i])){
//       return i
//     }
//   }
// }

// Divide in half method (not working)
// binary search
// Logarithmic
// O(log(n))
// function findDigit(str) {
//   let min = 0,
//     max = str.length - 1,
//     currIndex,
//     currCh
//   while (min < max) {
//     currIndex = Math.floor((min + max) / 2)
//     currCh = str[currIndex]
//     if (/^\d$/.test(currCh)) {
//       return currIndex
//     } else if (currCh < '0') {
//       min = currIndex + 1
//     } else {
//       {
//         max = currIndex
//       }
//     }
//   }
// }

/**
|--------------------------------------------------
| O(1) - Constant
| O(log(n)) - Logarithmic
| O(n) - Linear
| O(n2) - Quadratic
| O(2n) - Exponential (pretty rare use cases)
|--------------------------------------------------
*/

// Constant Complexity and/or Constant Time
// "hashing" and/or "memoization"
//O(1)


findDigit('hello_wor7ld') //?
