function largestNumber(n) {
    let accumulator  = 1;

    for(let i = 0; i < n; i++){
        accumulator *= 10;
    }
    return accumulator - 1;
}

largestNumber(3);