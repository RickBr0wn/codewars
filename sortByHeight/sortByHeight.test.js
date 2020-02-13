const sortByHeight = require("./sortByHeight")

describe("sortByHeight()", () => {
  it("should return a sorted array will all the untouched trees", () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([
      -1,
      150,
      160,
      170,
      -1,
      -1,
      180,
      190
    ])
    expect(sortByHeight([-1, -1, -1, -1, -1])).toEqual([-1, -1, -1, -1, -1])
    expect(sortByHeight([-1])).toEqual([-1])
    expect(sortByHeight([4, 2, 9, 11, 2, 16])).toEqual([2, 2, 4, 9, 11, 16])
    expect(
      sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])
    ).toEqual([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2])
    expect(
      sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
    ).toEqual([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77])
  })
})
