const isValidWalk = walks => {
  const counter = value => walks.filter(walk => walk === value).length
  return walks.length === 10 && counter('n') === counter('s') && counter('e') === counter('w')
} 

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])