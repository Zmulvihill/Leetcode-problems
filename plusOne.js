//https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    /*
    1. Loop digits backwards
        a. If value is less than 9
            i. Increment value
            ii. Return digits
        b. Change current value to 0
    2. Add 1 to the front of the digits
    3. Return digits
    */
   for (let i = digits.length -1; i >= 0; i--){
    if (digits[i] < 9){
        digits[i]++;
        return digits;
    }
    digits[i] = 0;
   }
   digits.unshift(1);
   return digits;
};