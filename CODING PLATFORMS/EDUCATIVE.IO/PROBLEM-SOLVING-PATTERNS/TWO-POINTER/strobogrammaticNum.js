// Given a string num representing an integer, determine whether it is a strobogrammatic number.
// Return TRUE if the number is strobogrammatic or FALSE if it is not.

// A strobogrammatic number is a number that appears the same when rotated 180 degrees (i.e., upside down).
// The valid strobogrammatic pairs are:
// 0 <-> 0
// 1 <-> 1
// 6 <-> 9
// 8 <-> 8
// 9 <-> 6
// All other digits do not form valid strobogrammatic pairs.
// For example:
// - 69 is strobogrammatic because 6 becomes 9 and 9 becomes 6 when rotated.
// - 88 is strobogrammatic because 8 remains 8 when rotated.
// - 962 is not strobogrammatic because 2 does not form a valid pair.
// - 818 is strobogrammatic because 8 remains 8 and 1 remains 1 when rotated.
// - 123 is not strobogrammatic because 2 and 3 do not form valid pairs.

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

const strobogrammaticNum = (num) => {
  // Check if the string is empty or has fewer than 2 characters
  if (num.length < 2) {
    return true
  }

  // Initialize two pointers
  let left = 0
  let right = num.length - 1

  // Define a map for strobogrammatic pairs
  const strobogrammaticPairs = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  }

  // Check for strobogrammatic pairs using two pointers
  while (left <= right) {
    // Check if the characters at left and right pointers form a valid pair
    if (
      !strobogrammaticPairs[num[left]] ||
      strobogrammaticPairs[num[left]] !== num[right]
    ) {
      return false
    }
    // Move the pointers towards each other
    left++
    right--
  }
  return true
}
// Example usage:
const num = '818'
console.log(strobogrammaticNum(num)) // Output: true
const nums = ['69', '88', '962', '818', '123']
for (let i = 0; i < nums.length; i++) {
  console.log(`${i + 1}.\t num: '${nums[i]}'`)
  console.log(
    `\n\t Is '${nums[i]}' a strobogrammatic number? ${
      strobogrammaticNum(nums[i]) ? 'Yes' : 'No'
    }`
  )
  console.log('-'.repeat(80))
}
// Time Complexity: O(n), where n is the length of the input string
// Space Complexity: O(1), as we are using constant extra space
