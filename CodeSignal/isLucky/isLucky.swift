/**
* Ticket numbers usually consist of an even number of digits. 
* A ticket number is considered lucky if the sum of the first 
* half of the digits is equal to the sum of the second half.
* Given a ticket number n, determine if it's lucky or not.
* 
* Example:
* For n = 1230, the output should be isLucky(n) = true;
* For n = 239017, the output should be isLucky(n) = false.
*
* Input/Output:
* [execution time limit] 4 seconds (js)
* [input] integer n
* A ticket number represented as a positive integer with an even
* number of digits.
*
* Guaranteed constraints:
* 10 ≤ n < 106.
* [output] boolean
* true
*/
func solution(n: Int) -> Bool {
  let arrayOfIntegers = n.digits
  let middleOfTheArray = arrayOfIntegers.count / 2
  let firstHalfOfTheArray = Array(arrayOfIntegers.prefix(upTo: middleOfTheArray))
  let lastHalfOfTheArray = Array(arrayOfIntegers.suffix(from: middleOfTheArray))
  
  func sum(_ arr: [Int]) -> Int {
    var result = 0
    for number in arr {
      result += number
    }
    return result
  }

  return sum(firstHalfOfTheArray) == sum(lastHalfOfTheArray)
}

extension Int {
  var digits: [Int] {
    return String(describing: self).compactMap { Int(String($0)) }
  }
}