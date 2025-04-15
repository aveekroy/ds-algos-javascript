// Maximum sum subarray of size K:
// Given an array of integers and a positive integer k,
// find the maximum sum of any contiguous subarray of size k.
// Kadane's algorithm is a popular algorithm for this problem.

function maxSumSubArray(arr, k) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0

  // Check if the array is smaller than k
  if (arr.length < k) {
    return 'Array length is smaller than k'
  }
  // Slide the window
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add the next element
    windowSum += arr[windowEnd]
    // Slide the window, we don't need to slide if
    // we've not hit the required window size of 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      // Subtract the element going out
      windowSum -= arr[windowStart]
      // Slide the window ahead
      windowStart++
    }
  }

  return maxSum
}

console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 4)) // Output: 9
// console.log(maxSumSubArray([2, 3, 4, 1, 5], 2)) // Output: 7
// console.log(maxSumSubArray([4, 2, -1, 9, 7, -3, 5], 4)) // Output: 5
// console.log(maxSumSubArray([1, 2, 3, 4, 5], 4)) // Output: 14

// Time Complexity: O(n)
// Space Complexity: O(1)
