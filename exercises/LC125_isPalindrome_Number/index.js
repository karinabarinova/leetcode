// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> true
// function isPalindrome(10) --> false

function isPalindrome(num) {
    if (num < 0) {
        num = -num;
    }

    let reversedNum = 0;
    let temp = num;

    while(temp > 0) {
        let remainder = temp % 10;
        temp = parseInt(temp / 10);
        reversedNum = reversedNum * 10 + remainder;        
    }

    if (num === reversedNum) {
        return true;
    }
    
    return false;
}

module.exports = isPalindrome;