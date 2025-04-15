// Given an integer array, nums, find the maximum values in all the contiguous subarrays (windows) of size w.
// The function returns an array of the maximum values for each window.
// Example:
// Input: nums = [1,3,-1,-3,5,3,6,7], w = 3
// Output: [3,3,5,5,6,7]
// Explanation: The maximum values for each window of size 3 are:
// [3,3] for the first two windows, [5,5] for the next two windows, and [6,7] for the last window.

const maxSlidingWindow = (nums, w) => {
  if (nums.length === 0 || w === 0) return []

  const result = []
  const deque = []

  for (let i = 0; i < nums.length; i++) {
    // Remove elements not in the current window
    if (deque.length && deque[0] < i - w + 1) {
      deque.shift()
    }

    // Remove elements smaller than the current element from the deque
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // Add the current element's index to the deque
    deque.push(i)

    // The maximum value for the current window is at the front of the deque
    if (i >= w - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

// Example usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const w = 3
console.log(maxSlidingWindow(nums, w)) // Output: [3, 3, 5, 5, 6, 7]
// Explanation: The function uses a deque to maintain the indices of the maximum elements in the current window.
// It efficiently removes elements that are out of the current window and smaller elements from the deque.
// The maximum value for each window is added to the result array.
// Time complexity: O(n), where n is the length of the input array nums.
// Space complexity: O(w), where w is the size of the sliding window.
// Note: This implementation is efficient and handles the problem requirements effectively.
// The output order is guaranteed to be correct as the maximum values are computed for each window.
