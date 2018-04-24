function candies(children, sweets) {
    let answer = (sweets/children);

    if(answer === 1){
        return children;
    }
    
    if(answer < 1){
        return 0;
    }
    return Math.floor(answer)*children;
}

candies(3, 10);

// candies(3, 10); - 9
// candies(1, 2); - 2
// candies(10, 5); - 0
// candies(4, 4); - 4