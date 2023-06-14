//https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordCount = 0;
    for (let i = s.length -1; i >=0; i--) {
        if (s[i] !== " "){
            
        }
    }

    /*
    1. Create lastWordCount variable
    2. Loop backwards s.
        a. condition if current char is not a space
            i. loop backwards for current char
                1. Condition if current char is not a space
                    a. increment lastWordCount
                2. Else return lastWordCount
            ii. return lastWordCount
    */
};