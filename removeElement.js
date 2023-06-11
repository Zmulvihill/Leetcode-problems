//https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    /*
    1. Create index variable (starting at 0)
    2. Loop through index
        a. Condition if current value doesn't equal val
            i. Set nums[index] to nums[i]
            ii. Increment index
    3. Return index
    */
    
    let index = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[index] = nums[i];
            index++;
        }

    }
    return index;

};