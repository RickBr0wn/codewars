/**
 * This time no story, no theory. The examples below show you how to write function accum:
 * Examples:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 */
function accum(str) {
  return str
    .split('')
    .reduce(
      (letters, char, i) =>
        letters.concat(char.toUpperCase() + char.toLowerCase().repeat(i)) +
        (i < str.length - 1 ? '-' : ''),
      ''
    )
}

module.exports = accum
