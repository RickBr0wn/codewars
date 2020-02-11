const circleOfNumbers = require("./circleOfNumbers")

describe("circleOfNumbers()", () => {
  it("should render the correct values", () => {
    expect(circleOfNumbers(10, 2)).toBe(7)
    expect(circleOfNumbers(10, 7)).toBe(2)
    expect(circleOfNumbers(4, 1)).toBe(3)
    expect(circleOfNumbers(6, 3)).toBe(0)
    expect(circleOfNumbers(18, 6)).toBe(15)
  })
})
