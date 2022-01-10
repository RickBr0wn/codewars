const addBorder = require("./addBorder")

describe("addBorder()", () => {
  it("should given a rectangular matrix of characters, add a border of asterisks to it", () => {
    expect(addBorder(["abc", "ded"])).toEqual([
      "*****",
      "*abc*",
      "*ded*",
      "*****"
    ])
    expect(addBorder(["a"])).toEqual(["***", "*a*", "***"])
    expect(addBorder(["aa", "**", "zz"])).toEqual([
      "****",
      "*aa*",
      "****",
      "*zz*",
      "****"
    ])
    expect(addBorder(["abcde", "fghij", "klmno", "pqrst", "uvwxy"])).toEqual([
      "*******",
      "*abcde*",
      "*fghij*",
      "*klmno*",
      "*pqrst*",
      "*uvwxy*",
      "*******"
    ])
    expect(addBorder(["wzy**"])).toEqual(["*******", "*wzy***", "*******"])
  })
})
