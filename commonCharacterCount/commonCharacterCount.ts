/**
 * 
 * Given two strings, find the number of common characters between them.
 * Example:
 * For s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3.
 * 
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * 
 * Input/Output
 * [execution time limit] 5 seconds (ts)
 * [input] string s1
 * 
 * A string consisting of lowercase English letters.
 * 
 * Guaranteed constraints:
 * 1 ≤ s1.length < 15.
 * [input] string s2
 * 
 * A string consisting of lowercase English letters.
 * 
 * Guaranteed constraints:
 * 1 ≤ s2.length < 15.
 * [output] integer
 * 
 * @param s1
 * @param s2 
 * @returns 
 */
function solution(s1: string, s2: string): number {
  let arr2: string[] = s2.split("")
  let counter: number = 0

  for (const firstLetter of s1.split("")) {
    for (const secondLetter of arr2) {
      if (firstLetter === secondLetter) {
        arr2.splice(arr2.indexOf(secondLetter), 1)
        counter++
        break
      }
    }
  }

  return counter
}
