// PROBLEM STATEMENT:

// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. The function should find all triplets in
// the array that sum up to the target sum and return a two-dimensional array of
// all these triplets. The numbers in each triplet should be ordered in ascending
// order, and the triplets themselves should be ordered in ascending order with
// respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an
// empty array.

// INPUT: array  = [12, 3, 1, 2, -6, 5, -8, 6]

// OUTPUT: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
  // Write your code here.
  if (!array) return []
  array.sort((a, b) => a - b)
  let result = []
  let left = 0
  let right = 0

  for (let i = 0; i < array.length; i++) {
    left = i + 1
    right = array.length - 1
    while (left < right) {
      let currSum = array[i] + array[left] + array[right]
      if (currSum === targetSum) {
        result.push([array[i], array[left], array[right]])
        left++
      } else if (currSum < targetSum) {
        left++
      } else if (currSum > targetSum) {
        right--
      }
    }
  }
  console.log(result)
  return result
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
// Time Complexity: O(n^2), where n is the length of the input array
// Space Complexity: O(n), where n is the length of the input array
