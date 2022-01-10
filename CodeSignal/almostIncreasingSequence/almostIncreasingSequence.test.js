const almostIncreasingSequence = require("./almostIncreasingSequence")

describe("almostIncreasingSequence()", () => {
  it("should return the correct boolean", () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false)
    expect(almostIncreasingSequence([1, 3, 2])).toBe(true)
    expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(false)
    expect(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])).toBe(false)
    expect(almostIncreasingSequence([1, 1, 2, 3, 4, 4])).toBe(false)
    expect(almostIncreasingSequence([1, 4, 10, 4, 2])).toBe(false)
    expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toBe(true)
    expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toBe(false)
  })
})
