palindrome = str =>
  str ===
  Array.from(str)
    .reverse()
    .join('')

longestPalindrome = function(str) {
  if (str.length === 0) return 0
  if (str.length === 1) return 1
  let largestPalindromeLength = 0
  let start = 0
  let strLength = str.length
  let high,
    low = null

  for (let i = 0; i < strLength; i++) {
    function evens(){
      low = i - 1
      high = i
      while (low >= 0 && high < strLength && str[low] == str[high]) {
        if (high - low + 1 > largestPalindromeLength) {
          start = low
          largestPalindromeLength = high - low + 1
        }
      }
    }

    function odds() {
      low = i - 1
      high = i + 1
      while (low >= 0 && high < strLength && str[low] == str[high]) {
        if (high - low + 1 > largestPalindromeLength) {
          start = low
          largestPalindromeLength = high - low + 1
        }
      }
    }

    evens()
    odds()
  }
  return largestPalindromeLength
}

console.log(longestPalindrome('a'), 1) //?
console.log(longestPalindrome('aa'), 2) //?
console.log(longestPalindrome('baa'), 2) //?
console.log(longestPalindrome('aab'), 2) //?
console.log(
  longestPalindrome('zyabyz'),
  6,
  'Are you sure that is a palindrome?'
) //?
console.log(longestPalindrome('baabcd'), 4) //?
console.log(longestPalindrome('baablkj12345432133d'), 9) //?
