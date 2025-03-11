// Pair with given sum in a sorted array:
// Given a sorted array of integers, find a pair in the array that sums to a number T.
// Return the pair as an array of two integers, or null if no such pair exists.
// Example:
// Input: [1, 2, 3, 4, 6], T = 6
// Output: [1, 5] or [2, 4]

const pairTarget = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      return [arr[left], arr[right]]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return null
}
const arr = [1, 2, 3, 4, 5, 6]
const target = 6
console.log(pairTarget(arr, target))
// Output: [2, 4]
// Time Complexity: O(n)
// Space Complexity: O(1)
