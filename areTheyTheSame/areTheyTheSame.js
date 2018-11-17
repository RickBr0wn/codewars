const comp = (array1, array2) => {
  // let myArray = new Array(array1.length).fill(0) //?
  // let booli = array1.map(num => num * num).sort((a, b) => a > b) == array2.map(num => num).sort((a, b) => a > b) //?
  // // myArray = array1.map(num => array2.includes(Math.sqrt())) //?
  // // return myArray.reduce(bool => bool)

  // let a2Squared = array2.map(num => num).sort((a, b) => a > b) //?
  // let a1Modified = array1.map(num => num * num).sort((a, b) => a > b) //?

  // let answer = array1.map(num => num * num).sort((a, b) => a > b).filter(num => array2.map(num => array2.includes(num)).sort((a, b) => a > b) !== num) //?
  // if(answer.length > 0) {
  //   return false
  // }
  // return true
  return array1.map(num => num * num).sort((a, b) => a > b).filter(num => array2.map(num => array2.includes(num)).sort((a, b) => a > b) !== num) ? true : false
}

// a1 = [28, 83, 88, 12, 19]
// a2 = [784, 6889, 7744, 144, 361]

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]; //?

a1 = [37, 46, 25, 8]
a2 = [1369, 2117, 625, 64]

// Expect TRUE
comp(a1, a2) //?