function gap(num) {
  const binary = num.toString(2)
  let counter = 0
  let highest = 0
  const arr = [...binary] //?
  arr.map(num => {
    if (num === '0') {
      counter++
    } else {
      if (counter > highest) {
        highest = counter
        counter = 0
      } else {
        counter = 0
      }
    }
  })
  return highest
}

gap(9) //?
gap(529) //?
