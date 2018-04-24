function maxMultiple(divisor, bound) {
    let remainder = bound-(bound%divisor);

    return remainder;
}

maxMultiple(2, 7);

// Test 1
// Input:
// divisor: 3
// bound: 10
// Output:
// Run the code to see output
// Expected Output:
// 9
// Console Output:
// Empty

// Test 2
// Input:
// divisor: 2
// bound: 7
// Output:
// Run the code to see output
// Expected Output:
// 6
// Console Output:
// Empty

// Test 3
// Input:
// divisor: 10
// bound: 50
// Output:
// Run the code to see output
// Expected Output:
// 50
// Console Output:
// Empty

// Test 4
// Input:
// divisor: 7
// bound: 100
// Output:
// Run the code to see output
// Expected Output:
// 98
// Console Output:
// Empty