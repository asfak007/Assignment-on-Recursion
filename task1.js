function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    return isPalindrome(s.substring(1, s.length - 1));
}

// Test cases
console.log(isPalindrome("madam")); 
console.log(isPalindrome("adam"));   
console.log(isPalindrome("tenet")); 

// Time complexity is O(n) & space complexity O(n).