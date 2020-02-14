const reverseInParentheses = require("./reverseInParentheses")

describe("reverseInParentheses()", () => {
  it("should return the inputString, with all the characters that were in parentheses reversed", () => {
    expect(reverseInParentheses("(bar)")).toBe("rab")
    expect(reverseInParentheses("foo(bar)baz")).toBe("foorabbaz")
    expect(reverseInParentheses("foo(bar)baz(blim)")).toBe("foorabbazmilb")
    expect(reverseInParentheses("foo(bar(baz))blim")).toBe("foobazrabblim")
    expect(reverseInParentheses("")).toBe("")
    expect(reverseInParentheses("()")).toBe("")
    expect(reverseInParentheses("(abc)d(efg)")).toBe("cbadgfe")
  })
})
