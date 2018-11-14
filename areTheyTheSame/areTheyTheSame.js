const comp = (array1, array2) => {
  let myArray = new Array(array1.length).fill(0) //?
  myArray = array1.map(num => array2.includes(Math.sqrt(array2))) //?
  return myArray.reduce(bool => bool)
}

a1 = [28, 83, 88, 12, 19]
a2 = [784, 6889, 7744, 144, 361]

// Expect TRUE
comp(a1, a2) //?