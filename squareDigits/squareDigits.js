const squareDigits = num => Number(Array.from(num.toString()).map(num => Math.pow(num, 2)).join(''))