const array_diff = (a, b) => { 
  if(b.length == 0) {
    return a
  }else{
    let newArray = new Array()
  for(let i = 0; i < b.length; i++) {
    newArray = a.filter(numA => numA !== b[i])
  }
  return newArray
  }
}

// array_diff([], [4,5]) //?
array_diff([3,4], []) //?
// array_diff([1,8,2], []) //?