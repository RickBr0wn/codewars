const arrayMaximalAdjacentDifference = require("./arrayMaximalAdjacentDifference")

describe("arrayMaximalAdjacentDifference()", () => {
  it("should return the maximal absolute difference", () => {
    expect(arrayMaximalAdjacentDifference([2, 4, 1, 0])).toBe(3)
    expect(arrayMaximalAdjacentDifference([1, 1, 1, 1])).toBe(0)
    expect(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2])).toBe(7)
    expect(arrayMaximalAdjacentDifference([10, 11, 13])).toBe(2)
    expect(arrayMaximalAdjacentDifference([-2, -2, -2, -2, -2])).toBe(0)
    expect(arrayMaximalAdjacentDifference([-1, 1, -3, -4])).toBe(4)
  })
})
