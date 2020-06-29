const rot13 = require("./rot13")
describe("Rot13", function () {
  it("should return the correct string", function () {
    expect(rot13("test")).toBe("grfg")
  })
  it("should return the correct string", function () {
    expect(rot13("Test")).toBe("Grfg")
  })
  it("should return the correct string", function () {
    expect(rot13("Codewars")).toBe("Pbqrjnef")
  })
  it("should return the correct string", function () {
    expect(rot13("Ruby is cool!")).toBe("Ehol vf pbby!")
  })
  it("should return the correct string", function () {
    // "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
    expect(rot13("10+2 is twelve.")).toBe("10+2 vf gjryir.")
  })
})
