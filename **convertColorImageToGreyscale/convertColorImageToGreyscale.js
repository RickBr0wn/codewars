var color2grey = function(image) {
  let greyscale = null

  return image.map((outerArray, outerArrayIndex) =>
    outerArray.map((innerArray, innerArrayIndex) => {
      const averageNumber = Math.floor(
        innerArray.reduce((acc, num) => acc + num, 0) / 3
      )

      return averageNumber
    })
  )
}

module.exports = color2grey
