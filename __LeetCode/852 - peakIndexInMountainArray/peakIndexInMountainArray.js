// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:
module.exports = function peakIndexInMountainArray(
  arr,
  start = 0,
  end = arr.length - 1
) {
  if (arr.length < 2) {
    return arr[0]
  }

  let mid = Math.floor((start + end) / 2)

  if (arr[mid - 1] === undefined && arr[mid] > arr[mid + 1]) {
    return mid
  }

  if (arr[mid + 1] === undefined && arr[mid] > arr[mid - 1]) {
    return mid
  }

  if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
    return mid
  }

  if (arr[mid - 1] >= arr[mid]) {
    return peakIndexInMountainArray(arr, 0, mid)
  } else {
    return peakIndexInMountainArray(arr, mid, end)
  }
}
