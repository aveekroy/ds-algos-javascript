// Maximum sum subarray of size K: Given an array of integers and a positive integer k,
// find the maximum sum of any contiguous subarray of size k.

function maxSumSubArray(arr, k) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0

  // Slide the window
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add the next element
    windowSum += arr[windowEnd]
    // Slide the window, we don't need to slide if we've not hit the required window size of 'k'
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

console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)) // Output: 9
console.log(maxSumSubArray([2, 3, 4, 1, 5], 2)) // Output: 7

// Time Complexity: O(n)
// Space Complexity: O(1)
