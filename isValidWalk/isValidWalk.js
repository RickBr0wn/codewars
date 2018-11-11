const isValidWalk = walk => {
  if(walk.length !== 10) return false
  return Boolean(walk.sort().map((element, index, array) => {
    if(element === array[index + 1]) {
      array.splice(index, (index +1))
    }
      return element//?
    }) //?
    .filter((element, index, array) => element !== array[0])
    .length > 1)
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']) //?
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //?
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //?