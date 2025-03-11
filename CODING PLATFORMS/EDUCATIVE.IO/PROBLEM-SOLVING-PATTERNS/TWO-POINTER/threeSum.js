// Given an integer array nums, find and return all unique triplets [nums[i], nums[j], nums[k]],
// where the indexes satisfy i != j, i != k, j != k and the sum of the elements nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b)
  const result = []
  const n = nums.length

  // Iterate through the array
  for (let pivot = 0; pivot < n - 2; pivot++) {
    // If the current number is greater than 0, break the loop (no valid triplets possible)
    if (nums[pivot] > 0) {
      break
    }
    // Skip duplicate values for the pivot
    if (pivot > 0 && nums[pivot] === nums[pivot - 1]) {
      continue
    }

    // Use two-pointer technique
    let low = pivot + 1,
      high = n - 1
    while (low < high) {
      const total = nums[pivot] + nums[low] + nums[high]
      if (total < 0) {
        low++
      } else if (total > 0) {
        high--
      } else {
        // Found a triplet
        result.push([nums[pivot], nums[low], nums[high]])
        low++
        high--
        // Skip duplicates for low and high pointers
        while (nums[low] === nums[low - 1]) {
          low++
        }
        while (nums[high] === nums[high + 1]) {
          high--
        }
      }
    }
  }

  return result
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums)) // Output: [[-1, -1, 2], [-1, 0, 1]]
// Time Complexity: O(n^2), where n is the length of the input array
// Space Complexity: O(1), as we are using constant extra space
