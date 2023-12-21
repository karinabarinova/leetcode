/**
 * https://leetcode.com/problems/valid-palindrome/
 * Given a string, determine if it is a palindrome,
 * considering only alphanumeric characters
 * and ignoring cases.
 * 
 * isPalindrome('') => true
 * 
 * Time complexity: O(N)
 * Space complexity: O(1) Left and Right Pointers take up constant space
 * 
 * @param {string} s
 * @return {boolean}
 */


function isPalindrome(str) {
    if (!str.length) {
        return true;
    }

    //sanitize the input string
    let sanitized = str.toLowerCase().replace(/[\W_]/g, '');
    let len = sanitized.length;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        if (sanitized[left] !== sanitized[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

module.exports = isPalindrome;
