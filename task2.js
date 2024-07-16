function recursiveMultiply(a, b) {
    
    if (b === 0) {
        return 0;
    }
    return a + recursiveMultiply(a, b - 1);
}

// Test cases
console.log(recursiveMultiply(4, 5));  
console.log(recursiveMultiply(3, 3));  
console.log(recursiveMultiply(0, 2));

// Time complexity is O(b) & space complexity O(b).