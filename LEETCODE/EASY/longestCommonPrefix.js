// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix
}

// Time complexity: O(n * m)
// Space complexity: O(1)

// Tests
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
console.log(longestCommonPrefix(['a'])) // 'a'
console.log(longestCommonPrefix(['a', 'b'])) // ''
console.log(longestCommonPrefix(['a', 'a'])) // 'a'
console.log(longestCommonPrefix(['a', 'ab'])) // 'a'
