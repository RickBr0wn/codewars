const palindromeRearranging = require("./palindromeRearranging")

describe("palindromeRearranging()", () => {
  it("should return `true` if the characters of the inputString can be rearranged to form a palindrome, `false` otherwise. ", () => {
    expect(palindromeRearranging("aaabbcc")).toBe(true)
    expect(palindromeRearranging("aabb")).toBe(true)
    expect(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toBe(
      false
    )
    expect(palindromeRearranging("abbcabb")).toBe(true)
    expect(palindromeRearranging("zyyzzzzz")).toBe(true)
    expect(palindromeRearranging("z")).toBe(true)
    expect(palindromeRearranging("zaa")).toBe(true)
    expect(palindromeRearranging("abca")).toBe(false)
    expect(palindromeRearranging("abca")).toBe(false)
    expect(palindromeRearranging("abcad")).toBe(false)
    expect(
      palindromeRearranging(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"
      )
    ).toBe(false)
    expect(palindromeRearranging("abdhuierf")).toBe(false)
  })
})
