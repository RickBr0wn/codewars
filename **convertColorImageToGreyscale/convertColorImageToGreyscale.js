/**
 * CONVERT COLOR IMAGE TO GREYSCALE
 *
 * An array of size N x M represents pixels of an image.
 * Each cell of this array contains an array of size 3 with the
 * pixel's color information: [R,G,B].
 * Convert the color image, into an average greyscale image.
 * The [R,G,B] array contains integers between 0 and 255 for each color.
 *
 * To transform a color pixel into a greyscale pixel, average the values of that pixel:
 * p = [R,G,B] => [(R+G+B)/3, (R+G+B)/3, (R+G+B)/3]
 * Note: the values for the pixel must be integers, therefore you should round floats to the nearest integer.
 *
 * Example:
 * Here's an example of a 2x2 image:
 * [
 *   [ [123, 231, 12], [56, 43, 124] ],
 *   [ [78, 152, 76], [64, 132, 200] ]
 * ]
 * Here's the expected image after transformation:
 * [
 *   [ [122, 122, 122], [74, 74, 74] ],
 *   [ [102, 102, 102], [132, 132, 132] ]
 * ]
 */
var color2grey = function (image) {
  return image.map(outer =>
    outer.map(inner => {
      const valueToBeReturned = Math.floor(
        inner.reduce((acc, val) => acc + val) / 3
      )
      let returnArray = []
      for (let i = 0; i < inner.length; i++) {
        returnArray.push(valueToBeReturned)
      }
      return returnArray
    })
  )
}

module.exports = color2grey
