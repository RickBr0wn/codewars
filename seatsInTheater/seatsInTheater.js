function seatsInTheater(nCols, nRows, col, row) {
    let answer = (nRows - row) * ((nCols - col)+1);
    return answer;
}

seatsInTheater(16, 11, 5, 3);

// Test 1
// Input:
// nCols: 16
// nRows: 11
// col: 5
// row: 3
// Output:
// Run the code to see output
// Expected Output:
// 96
// Console Output:
// Empty

// Test 2
// Input:
// nCols: 1
// nRows: 1
// col: 1
// row: 1
// Output:
// Run the code to see output
// Expected Output:
// 0
// Console Output:
// Empty

// Test 3
// Input:
// nCols: 13
// nRows: 6
// col: 8
// row: 3
// Output:
// Run the code to see output
// Expected Output:
// 18
// Console Output:
// Empty

// Test 4
// Input:
// nCols: 60
// nRows: 100
// col: 60
// row: 1
// Output:
// Run the code to see output
// Expected Output:
// 99
// Console Output:
// Empty

// Test 5
// Input:
// nCols: 1000
// nRows: 1000
// col: 1000
// row: 1000
// Output:
// Run the code to see output
// Expected Output:
// 0
// Console Output:
// Empty