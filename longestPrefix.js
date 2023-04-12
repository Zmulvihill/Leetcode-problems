//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  if (!strs.length) return ''; // Return early on empty input
  for (let i = 0; i < strs[0].length; i++) {  //loop through the first string
  for (let j = 1; j < strs.length; j++){ // Loop through the other strings
    if (strs[0][i] !== strs[j][i]){  // Check if this character is also present in the same position of each string
      return strs[0].slice(0, i); // If not, return the string up to and including the previous character
    }
  }
  }
  return strs[0];
  //write function to find the longest common prefix string amongst an array of strings
  //if no common prefix return an empty string
  //if first letter matches move to next, then the next
  //until it no longer matches, then return longest string
  //if no string matches return ""
  //1 <= strs.length <== 200
  //0 <= strs[i].length <= 200
  //strs[i] consists of only lowercase English letters
};