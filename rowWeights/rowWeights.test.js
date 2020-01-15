const rowWeights = require("./rowWeights")

describe("fn rowWeights", () => {
  it("should pass all tests", () => {
    expect(rowWeights([13, 27, 49])).toEqual([62, 27])
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140])
    expect(rowWeights([80])).toEqual([80, 0])
  })
})
