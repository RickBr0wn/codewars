// Create a Vector object that supports addition, subtraction, dot products, and norms.

//So, for example:
// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)'(in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user - provided equals method.

const Vector = function(components) {
  if (components === undefined || typeof components !== "object")
    throw "Error, components must be an array"
  const adder = (a, b) => a + b

  return {
    array: [...components],

    validated: function(passedArray) {
      if (passedArray === undefined || passedArray.array === undefined)
        throw "The array is undefined"
      if (passedArray.array.length === this.array.length) {
        return passedArray.array.sort()
      } else {
        throw "The Vectors must be of equal length"
      }
    },

    add: function(passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return new Vector(
        passedArray.map((item, idx) => (sum[idx] = this.array[idx] + item))
      )
    },

    subtract: function(passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return new Vector(
        passedArray.map((item, idx) => (sum[idx] = this.array[idx] - item))
      )
    },

    dot: function(passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return passedArray
        .map((item, idx) => (sum[idx] = this.array[idx] * item))
        .reduce(adder)
    },

    norm: function() {
      return this.array.map(item => Math.pow(item, 2)).reduce(adder)
    },

    toString: function() {
      return `(${this.array.toString()})`
    },

    equals: function(passedArray) {
      let arr = this.validated(passedArray)
      let returnValue = true
      arr.map((item, idx) =>
        item != this.array[idx] ? (returnValue = false) : null
      )
      return returnValue
    }
  }
}

module.exports = Vector

// const a = new Vector([1, 2]) //?
// const b = new Vector([3, 4]) //?

// a.add(b) //?
// b.subtract(a) //?
// a.dot(b) //?
// a.norm() //?
// a.toString() //?
// a.equals(b) //?
