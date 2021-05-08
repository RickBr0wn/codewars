const iqTest = numbers => {
  let booleanArray = numbers
    .split(' ')
    .map(num => (num % 2 == 0 ? 'even' : 'odd')) //?
  booleanArray.filter(item => item !== 'even').length == 1
    ? (itemToBeRemoved = 'odd')
    : (itemToBeRemoved = 'even')
  return booleanArray.indexOf(itemToBeRemoved) + 1
}

iqTest('2 4 7 8 10')
