const findLongest = require("./squashTheBugs")

let assertEquals

beforeEach(
  () =>
    (assertEquals = function(assertion, result) {
      return expect(assertion).toBe(result)
    })
)

describe("Basic tests", () => {
  it("should ", () => {
    assertEquals(
      findLongest("The quick white fox jumped around the massive dog"),
      7
    )
    assertEquals(findLongest("Take me to tinseltown with you"), 10)
    assertEquals(findLongest("Sausage chops"), 7)
    assertEquals(findLongest("Wind your body and wiggle your belly"), 6)
    assertEquals(findLongest("Lets all go on holiday"), 7)
  })
})
