let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13]

const sorted = array.sort((a, b) => a - b) //?

// Will work only on sorted arrays
function binarySearch(arr, value) {
  let high = arr.length - 1
  let low = 0
  let mid = 0

  while (low <= high) {
    mid = Math.floor((high + low) / 2)
    if (arr[mid] === value) {
      return true
    } else if (value > arr[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}

binarySearch(sorted, 13) //?