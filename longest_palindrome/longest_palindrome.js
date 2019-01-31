// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
// As an example, if the input was “I like racecars that go fast”, the substring(racecar) length would be 7.
// If the length of the input string is 0, the return value must be 0.
// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

palindrome = str =>
  str ===
  Array.from(str)
    .reverse()
    .join('')

longestPalindrome = function(str) {
  if (str.length === 0) return 0
  if (str.length === 1) return 1
  let largestPalindromeLength = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > 0; j--) {
      if (
        palindrome(str.substring(i, j)) &&
        str.substring(i, j).length > largestPalindromeLength
      )
        largestPalindromeLength = str.substring(i, j).length
    }
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
