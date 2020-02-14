const alternatingSums = require("./alternatingSums")

describe("alternatingSums()", () => {
  it("should return ", () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105])
    expect(alternatingSums([100, 50])).toEqual([100, 50])
    expect(alternatingSums([80])).toEqual([80, 0])
    expect(alternatingSums([100, 50, 50, 100])).toEqual([150, 150])
    expect(alternatingSums([100, 51, 50, 100])).toEqual([150, 151])
  })
})
