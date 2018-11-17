const findUniq = arr => {
  let duplicatesArray = arr.filter((element, index) => element == arr[index + 1])
  if(duplicatesArray.length == 0) {
    duplicatesArray = new Array(arr.length - 1).fill(0)
  }
  return Number(arr.filter(element => element !== duplicatesArray[0]))  //?
}


findUniq([ 0, 1, 0 ]) //?
findUniq([ 1, 1, 1, 2, 1, 1 ]) //?
findUniq([ 3, 10, 3, 3, 3 ]) //?