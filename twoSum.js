//https://leetcode.com/problems/two-sum/
//Two Sum algorithm on leetcode
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        if (index2 != null ) {
            return [index2, i]
        } else { 
            previousValues[currentNumber] = i
            }
    }
};