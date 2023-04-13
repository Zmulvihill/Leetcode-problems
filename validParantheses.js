//https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create an empty stack to keep track of opening brackets
     const stack = [];
     // Create an object with pairs of opening and closing brackets
     const pairs = {
       ')': '(',
       '}': '{',
       ']': '[',
     };
     
     // Loop through each character in the input string
     for (let i = 0; i < s.length; i++) {
       const char = s[i];
       
       // If the current character is a closing bracket
       if (pairs[char]) {
         // Check if the top element of the stack is the corresponding opening bracket
         if (stack.length === 0 || stack.pop() !== pairs[char]) {
           // If it's not, the input string is invalid, so return false
           return false;
         }
       } else {
         // If the current character is an opening bracket, push it onto the stack
         stack.push(char);
       }
     }
     
     // If the stack is empty, all brackets have been matched, so return true
     // Otherwise, there are unmatched brackets, so return false
     return stack.length === 0;
   }