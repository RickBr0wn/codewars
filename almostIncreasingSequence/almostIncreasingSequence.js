function almostIncreasingSequence(sequence) {
    let answer = new Array();

    sequence.forEach((element, index) => {
        answer.push(numberChecker(sequence[index], sequence[index+1]));
           
    });
    answer.pop();
    console.log(answer);

    if(countInArray(answer, false)){
        console.log('true');
        return true;
    }else{
        console.log('false');
        return false;
    }
}

function numberChecker(a, b){
    if(b === undefined){
        return
    }

    if(a == (b-1)){
        return true;
    }else{
        return false;
    }
}

function countInArray(array, bool){
    if(array.filter(element => element == bool).length > 1){
        return false
    }else{
        return true;
    }
}


almostIncreasingSequence([1, 2, 3, 1]);