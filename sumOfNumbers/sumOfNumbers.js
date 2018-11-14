function GetSum(a, b) {
	if(a === b) return a 
	let counter = 0
	for(let i = Math.min(a, b); i < Math.max(a, b) + 1; i++) { counter += i }
	return counter
}

GetSum(0, -1)