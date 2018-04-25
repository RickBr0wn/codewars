function circleOfNumbers(n, firstNumber) {
    const createFilledArray = n => {
        let myArray = Array.apply(null, Array(n))
        return myArray.map((element, index) => {return index})
    }
    let numberArray = createFilledArray(n)
    let answer = firstNumber + Math.floor(n/2)
    if(answer > 9){
        answer -= n;
    }
    return answer
}

circleOfNumbers(6, 0)