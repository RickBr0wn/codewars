const avoidObstacles = require("./avoidObstacles")

describe("avoidObstacles()", () => {
  it("should ", () => {
    // expect(avoidObstacles([5, 3, 6, 7, 9])).toBe(4)
    // expect(avoidObstacles([2, 3])).toBe(4)
    expect(avoidObstacles([1, 4, 10, 6, 2])).toBe(7)
    // expect(avoidObstacles([1000, 999])).toBe(6)
    // expect(avoidObstacles([19, 32, 11, 23])).toBe(3)
    // expect(avoidObstacles([5, 8, 9, 13, 14])).toBe(6)
  })
})
