function GetSum(a, b) {
	if(a === b) return a 
	let sortedArray = Array.from(arguments).sort((a, b) => a > b)
	let counter = 0
	for(let i = sortedArray[0]; i < (sortedArray[1] + 1); i++) { 
		counter += i
	}
	return counter
}

GetSum(0, -1)