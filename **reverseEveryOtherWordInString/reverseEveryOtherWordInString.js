/**
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.
*/
function reverse(str) {
  if (str === '') return 'dummy'
  const wordsArray = str.split(' ') //?
  const reverser = word => [...word].reverse().join('')

  for (let index = 0; index < wordsArray.length; index++) {
    if (index % 2 !== 0) {
      // even numbered index
      wordsArray[index] = reverser(wordsArray[index]) //?
    }
  }
  return wordsArray.join(' ')
}

reverse('') //?

reverse("I really don't like reversing strings!") //?
