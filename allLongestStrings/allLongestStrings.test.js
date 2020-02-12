const allLongestStrings = require("./allLongestStrings")

describe("allLongestStrings()", () => {
  it("should return an array of the longest strings", () => {
    expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual([
      "aba",
      "vcd",
      "aba"
    ])
    expect(allLongestStrings(["aa"])).toEqual(["aa"])
    expect(allLongestStrings(["abc", "eeee", "abcd", "dcd"])).toEqual([
      "eeee",
      "abcd"
    ])
    expect(
      allLongestStrings([
        "a",
        "abc",
        "cbd",
        "zzzzzz",
        "a",
        "abcdef",
        "asasa",
        "aaaaaa"
      ])
    ).toEqual(["zzzzzz", "abcdef", "aaaaaa"])
    expect(
      allLongestStrings(["enyky", "benyky", "yely", "varennyky"])
    ).toEqual(["varennyky"])
  })
})
