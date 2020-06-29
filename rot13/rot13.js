/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
 * Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */
function rot13(message) {
  const alphabet = [
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  const answer = []
  const msgArr = [...message]
  for (let i = 0; i < msgArr.length; i++) {
    if (!alphabet.includes(msgArr[i].toLowerCase())) {
      answer.push(msgArr[i])
    } else {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[13 + j] === msgArr[i].toLowerCase()) {
          if (msgArr[i].toUpperCase() === msgArr[i]) {
            answer.push(alphabet[j].toUpperCase())
          } else {
            answer.push(alphabet[j])
          }
        }
      }
    }
  }
  return answer.join("")
}

module.exports = rot13
